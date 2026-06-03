import voterFieldData from '../data/voterField.v03.json';
import clusteredRegionalVoterFieldData from '../data/voterField.v03.regionalized.clustered.json';
import regionalVoterFieldData from '../data/voterField.v03.regionalized.json';
import { dimensionIds, isCompleteVector8D } from './dimensions';
import { enrichGreenDealIssuePreferences } from './greenDealIssue';
import { krajeById } from './regionalEnrichment';
import type {
  CompactRegionalVoterFieldData,
  CompactVoterFieldData,
  DimensionId,
  KrajId,
  LatentVector8D,
  SegmentLabel,
  VoterFieldBundle,
  VoterPoint,
} from './types';

const compactData = voterFieldData as unknown as CompactVoterFieldData;
const clusteredRegionalCompactData = clusteredRegionalVoterFieldData as unknown as CompactRegionalVoterFieldData;
const regionalCompactData = regionalVoterFieldData as unknown as CompactRegionalVoterFieldData;
let calibratedV04CompactData: CompactRegionalVoterFieldData | undefined;

export function loadVoterFieldV03(): VoterFieldBundle {
  return decodeCompactVoterField(compactData);
}

export function loadRegionalizedVoterFieldV03(): VoterFieldBundle {
  return decodeRegionalizedVoterField(regionalCompactData);
}

export function loadClusteredRegionalizedVoterFieldV03(): VoterFieldBundle {
  return decodeRegionalizedVoterField(clusteredRegionalCompactData);
}

export function loadClusteredRegionalizedVoterFieldV04(): VoterFieldBundle {
  if (!calibratedV04CompactData) {
    // Lazy require keeps TypeScript checks green before the offline materialization script creates this JSON.
    calibratedV04CompactData = require('./voterField.calibrated.v04.json') as CompactRegionalVoterFieldData;
  }

  return decodeRegionalizedVoterField(calibratedV04CompactData);
}

export function loadClusteredRegionalizedVoterField(version: 'v03' | 'v04'): VoterFieldBundle {
  return version === 'v04' ? loadClusteredRegionalizedVoterFieldV04() : loadClusteredRegionalizedVoterFieldV03();
}

export function decodeCompactVoterField(data: CompactVoterFieldData): VoterFieldBundle {
  const points = enrichGreenDealIssuePreferences(data.points.map((row, index) => decodePoint(data, row, index)));
  const positions = new Float32Array(points.length * dimensionIds.length);
  const turnoutBase = new Float32Array(points.length);
  const volatility = new Float32Array(points.length);
  const weights = new Float64Array(points.length);

  for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
    const point = points[pointIndex];
    weights[pointIndex] = point.weight;
    turnoutBase[pointIndex] = point.turnoutBase ?? 0.65;
    volatility[pointIndex] = point.volatility ?? 0.5;

    for (let dimensionIndex = 0; dimensionIndex < dimensionIds.length; dimensionIndex += 1) {
      positions[pointIndex * dimensionIds.length + dimensionIndex] = point.position[dimensionIds[dimensionIndex]];
    }
  }

  return {
    data,
    points,
    typed: {
      positions,
      turnoutBase,
      volatility,
      weights,
    },
  };
}

export function decodeRegionalizedVoterField(data: CompactRegionalVoterFieldData): VoterFieldBundle {
  const points = enrichGreenDealIssuePreferences(data.points.map((row, index) => decodeRegionalPoint(data, row, index)));
  const positions = new Float32Array(points.length * dimensionIds.length);
  const turnoutBase = new Float32Array(points.length);
  const volatility = new Float32Array(points.length);
  const weights = new Float64Array(points.length);

  for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
    const point = points[pointIndex];
    weights[pointIndex] = point.weight;
    turnoutBase[pointIndex] = point.turnoutBase ?? 0.65;
    volatility[pointIndex] = point.volatility ?? 0.5;

    for (let dimensionIndex = 0; dimensionIndex < dimensionIds.length; dimensionIndex += 1) {
      positions[pointIndex * dimensionIds.length + dimensionIndex] = point.position[dimensionIds[dimensionIndex]];
    }
  }

  return {
    data,
    points,
    typed: {
      positions,
      turnoutBase,
      volatility,
      weights,
    },
  };
}

export function inferSegmentLabel(position: LatentVector8D, deadZone = 0.18): SegmentLabel {
  if (Math.abs(position.econ) <= deadZone && Math.abs(position.culture) <= deadZone) {
    return 'center';
  }

  if (position.econ < -deadZone && position.culture < -deadZone) {
    return 'lib_left';
  }

  if (position.econ > deadZone && position.culture < -deadZone) {
    return 'lib_right';
  }

  if (position.econ > deadZone && position.culture > deadZone) {
    return 'trad_right';
  }

  return 'trad_left';
}

function decodePoint(data: CompactVoterFieldData, row: number[], index: number): VoterPoint {
  const position = {
    authority: row[11],
    culture: row[10],
    econ: row[9],
    establishment: row[12],
    globalism: row[13],
    green: row[14],
    ukraine: row[15],
  } satisfies Partial<Record<DimensionId, number>>;

  if (!isCompleteVector8D(position)) {
    throw new Error(`Invalid voter point ${index}: incomplete 8D position.`);
  }

  const segmentLabel = data.dictionaries.segments[row[6]] ?? inferSegmentLabel(position);

  return {
    ageGroup: data.dictionaries.ageGroups[row[2]],
    education: data.dictionaries.education[row[3]],
    id: index,
    legacy: {
      greenDealPropensityRaw: row[16],
    },
    leftRight: data.dictionaries.leftRight[row[5]],
    position,
    regionId: data.dictionaries.regions[row[1]],
    segmentLabel,
    turnoutBase: row[7],
    urbanity: data.dictionaries.urbanity[row[4]],
    volatility: row[8],
    weight: row[0],
  };
}

function decodeRegionalPoint(data: CompactRegionalVoterFieldData, row: number[], index: number): VoterPoint {
  const position = {
    authority: row[14],
    culture: row[13],
    econ: row[12],
    establishment: row[15],
    globalism: row[16],
    green: row[17],
    ukraine: row[18],
  } satisfies Partial<Record<DimensionId, number>>;

  if (!isCompleteVector8D(position)) {
    throw new Error(`Invalid regional voter point ${index}: incomplete 8D position.`);
  }

  const krajId = data.dictionaries.kraje[row[2]] as KrajId;
  const kraj = krajeById[krajId];
  const nuts2Id = data.dictionaries.nuts2[row[1]];
  const urbanity = data.dictionaries.urbanity[row[5]];
  const segmentLabel = data.dictionaries.segments[row[7]] ?? inferSegmentLabel(position);

  return {
    ageGroup: data.dictionaries.ageGroups[row[3]],
    education: data.dictionaries.education[row[4]],
    geography: {
      krajId,
      krajName: kraj?.name ?? krajId,
      metroArea: data.dictionaries.metroAreas[row[10]],
      nuts2Id,
      urbanity,
    },
    id: index,
    incomeProxy: row[20],
    legacy: {
      greenDealPropensityRaw: row[19],
    },
    leftRight: data.dictionaries.leftRight[row[6]],
    parentParticleId: String(row[21]),
    position,
    regionId: nuts2Id,
    segmentLabel,
    socioEconomicStatus: data.dictionaries.socioEconomicStatus[row[11]],
    syntheticRegionConfidence: row[22],
    turnoutBase: row[8],
    urbanity,
    volatility: row[9],
    weight: row[0],
  };
}
