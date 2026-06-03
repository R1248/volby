import { computeNationalSupport, computeRegionalSupport, initializeComputedState } from '../src/game/engine';
import { baselineTargetShares, createInitialGameState, partyIds } from '../src/game/seed';
import type { GameState, LatentDimension8D, LatentVector8D, PartyId, ReputationVector } from '../src/game/types';
import type { RegionId } from '../src/types/region';
import { loadClusteredRegionalizedVoterFieldV03 } from '../src/simulation/model/voterFieldLoader';

const dimensions: LatentDimension8D[] = [
  'econ',
  'culture',
  'authority',
  'establishment',
  'globalism',
  'green',
  'ukraine',
];
const selectedRegionIds: RegionId[] = ['vysocina', 'praha'];
const jsonOutput = process.argv.includes('--json');

type SupportRecord = Record<PartyId, number>;
type FieldVectorRecord = Record<LatentDimension8D, number>;

type PartyDiagnostic = {
  amplitudeMultiplier: number;
  averageEffectiveWidth: number;
  averageSalience: number;
  averageWidth: number;
  calibratedAmplitude: number;
  center8D: FieldVectorRecord;
  effectiveWidth8D: FieldVectorRecord;
  effectiveWidthBand: string;
  partyId: PartyId;
  sanityWarnings: string[];
  seedAmplitude: number;
  supportAfterCalibration: number;
  supportBeforeCalibration: number;
  supportRawSpatial: number;
  targetShare: number;
  width8D: FieldVectorRecord;
  salience8D: FieldVectorRecord;
};

type RegionalSummary = {
  kduSupport: number;
  parties: Record<PartyId, number>;
  piratesSupport: number;
  playerSupport: number;
  regionId: RegionId;
  spdSupport: number;
  top3: { partyId: PartyId; support: number }[];
  top09Support: number;
  winner: PartyId;
  winnerSupport: number;
};

type RegionPartyDiagnostic = {
  amplitude: number;
  averageKernel: number;
  organization: number;
  partyId: PartyId;
  reputationFit: number;
};

type DebugReport = {
  afterNational: SupportRecord;
  beforeNational: SupportRecord;
  neutralNational: SupportRecord;
  partyDiagnostics: PartyDiagnostic[];
  regionalSummary: RegionalSummary[];
  selectedRegionDiagnostics: Record<RegionId, RegionPartyDiagnostic[]>;
  targets: SupportRecord;
};

const report = buildReport();

if (jsonOutput) {
  console.log(JSON.stringify(report, null, 2));
} else {
  printTextReport(report);
}

function buildReport(): DebugReport {
  const beforeState = createInitialGameState();
  const beforeRegional = computeRegionalSupport(beforeState, { disableProgramModifier: true });
  const beforeNational = computeNationalSupport(beforeState, beforeRegional);

  const neutralState = createInitialGameState();
  for (const partyId of partyIds) {
    neutralState.partyRuntime[partyId].field.amplitude = 1;
  }
  const neutralRegional = computeRegionalSupport(neutralState, { disableProgramModifier: true });
  const neutralNational = computeNationalSupport(neutralState, neutralRegional);

  const afterState = initializeComputedState(createInitialGameState());
  const partyDiagnostics = partyIds.map((partyId) =>
    createPartyDiagnostic(beforeState, afterState, beforeNational, neutralNational, afterState.nationalSupport, partyId),
  );
  const selectedRegionDiagnostics = Object.fromEntries(
    selectedRegionIds.map((regionId) => [regionId, partyIds.map((partyId) => diagnosticsForRegion(afterState, regionId, partyId))]),
  ) as Record<RegionId, RegionPartyDiagnostic[]>;

  return {
    afterNational: supportRecord(afterState.nationalSupport),
    beforeNational: supportRecord(beforeNational),
    neutralNational: supportRecord(neutralNational),
    partyDiagnostics,
    regionalSummary: afterState.regions.map((region) => createRegionalSummary(afterState, region.id)),
    selectedRegionDiagnostics,
    targets: supportRecord(baselineTargetShares),
  };
}

function createPartyDiagnostic(
  beforeState: GameState,
  afterState: GameState,
  beforeNational: SupportRecord,
  neutralNational: SupportRecord,
  afterNational: SupportRecord,
  partyId: PartyId,
): PartyDiagnostic {
  const seedField = beforeState.partyRuntime[partyId].field;
  const calibratedField = afterState.partyRuntime[partyId].field;
  const width8D = completeVector(calibratedField.width8D);
  const salience8D = completeVector(calibratedField.salience8D);
  const effectiveWidth8D = effectiveWidth(width8D, salience8D);
  const seedAmplitude = seedField.amplitude;
  const calibratedAmplitude = calibratedField.amplitude;
  const amplitudeMultiplier = calibratedAmplitude / Math.max(0.0001, seedAmplitude);
  const averageEffectiveWidth = averageVector(effectiveWidth8D);
  const sanityWarnings = [
    ...amplitudeWarnings(calibratedAmplitude, amplitudeMultiplier),
    effectiveWidthLabel(averageEffectiveWidth),
  ];

  return {
    amplitudeMultiplier,
    averageEffectiveWidth,
    averageSalience: averageVector(salience8D),
    averageWidth: averageVector(width8D),
    calibratedAmplitude,
    center8D: completeVector(calibratedField.center8D),
    effectiveWidth8D,
    effectiveWidthBand: effectiveWidthBand(averageEffectiveWidth),
    partyId,
    sanityWarnings,
    seedAmplitude,
    supportAfterCalibration: afterNational[partyId],
    supportBeforeCalibration: beforeNational[partyId],
    supportRawSpatial: neutralNational[partyId],
    targetShare: baselineTargetShares[partyId],
    width8D,
    salience8D,
  };
}

function printTextReport(debugReport: DebugReport) {
  console.log('National support before calibration');
  printSupport(debugReport.beforeNational);

  console.log('\nRaw spatial support with amplitude = 1');
  printSupport(debugReport.neutralNational);

  console.log('\nNational support after calibration');
  printSupport(debugReport.afterNational);

  console.log('\nTargets');
  printSupport(debugReport.targets);

  console.log('\nFinal calibrated party field diagnostics');
  for (const diagnostic of debugReport.partyDiagnostics) {
    console.log(
      [
        diagnostic.partyId,
        `target ${formatPercent(diagnostic.targetShare)}`,
        `before ${formatPercent(diagnostic.supportBeforeCalibration)}`,
        `raw ${formatPercent(diagnostic.supportRawSpatial)}`,
        `after ${formatPercent(diagnostic.supportAfterCalibration)}`,
        `amp ${diagnostic.seedAmplitude.toFixed(4)} -> ${diagnostic.calibratedAmplitude.toFixed(4)}`,
        `x${diagnostic.amplitudeMultiplier.toFixed(2)}`,
        `avgWidth ${diagnostic.averageWidth.toFixed(3)}`,
        `avgSalience ${diagnostic.averageSalience.toFixed(3)}`,
        `avgEffectiveWidth ${diagnostic.averageEffectiveWidth.toFixed(3)} (${diagnostic.effectiveWidthBand})`,
      ].join(' | '),
    );
    console.log(`  center8D: ${formatVector(diagnostic.center8D)}`);
    console.log(`  width8D: ${formatVector(diagnostic.width8D)}`);
    console.log(`  salience8D: ${formatVector(diagnostic.salience8D)}`);
    console.log(`  effectiveWidth8D: ${formatVector(diagnostic.effectiveWidth8D)}`);
    for (const warning of diagnostic.sanityWarnings.filter((item) => item.startsWith('WARNING:'))) {
      console.log(`  ${warning}`);
    }
  }

  printSortedSummary(
    'Parties sorted by raw spatial support with amplitude = 1',
    debugReport.partyDiagnostics,
    (diagnostic) => diagnostic.supportRawSpatial,
    formatPercent,
  );
  printSortedSummary(
    'Parties sorted by calibrated amplitude',
    debugReport.partyDiagnostics,
    (diagnostic) => diagnostic.calibratedAmplitude,
    (value) => value.toFixed(4),
  );
  printSortedSummary(
    'Parties sorted by amplitude multiplier',
    debugReport.partyDiagnostics,
    (diagnostic) => diagnostic.amplitudeMultiplier,
    (value) => `x${value.toFixed(2)}`,
  );
  printSortedSummary(
    'Parties sorted by average effective width',
    debugReport.partyDiagnostics,
    (diagnostic) => diagnostic.averageEffectiveWidth,
    (value) => value.toFixed(3),
  );

  console.log('\nRegional summary after calibration');
  for (const region of debugReport.regionalSummary) {
    const top3 = region.top3.map((item) => `${item.partyId} ${formatPercent(item.support)}`).join(', ');
    console.log(
      `${region.regionId}: winner ${region.winner} ${formatPercent(region.winnerSupport)} | top3 ${top3} | ANO ${formatPercent(
        region.playerSupport,
      )} | SPD ${formatPercent(region.spdSupport)} | Pirates ${formatPercent(region.piratesSupport)} | KDU ${formatPercent(
        region.kduSupport,
      )} | TOP09 ${formatPercent(region.top09Support)}`,
    );
  }

  for (const regionId of selectedRegionIds) {
    console.log(`\nDetailed diagnostics for ${regionId}`);
    for (const diagnostic of debugReport.selectedRegionDiagnostics[regionId]) {
      console.log(
        `${diagnostic.partyId}: amplitude ${diagnostic.amplitude.toFixed(3)}, kernel ${diagnostic.averageKernel.toFixed(
          4,
        )}, organization ${diagnostic.organization.toFixed(2)}, reputationFit ${diagnostic.reputationFit.toFixed(3)}`,
      );
    }
  }
}

function printSupport(support: Partial<Record<PartyId, number>>) {
  for (const partyId of partyIds) {
    console.log(`${partyId}: ${formatPercent(support[partyId] ?? 0)}`);
  }
}

function printSortedSummary(
  title: string,
  diagnostics: PartyDiagnostic[],
  valueFor: (diagnostic: PartyDiagnostic) => number,
  formatValue: (value: number) => string,
) {
  console.log(`\n${title}`);
  for (const diagnostic of [...diagnostics].sort((a, b) => valueFor(b) - valueFor(a))) {
    console.log(`${diagnostic.partyId}: ${formatValue(valueFor(diagnostic))}`);
  }
}

function createRegionalSummary(state: GameState, regionId: RegionId): RegionalSummary {
  const parties = supportRecord(state.regionalSupport[regionId]);
  const top3 = partyIds
    .map((partyId) => ({ partyId, support: parties[partyId] }))
    .sort((a, b) => b.support - a.support)
    .slice(0, 3);

  return {
    kduSupport: parties.kdu,
    parties,
    piratesSupport: parties.pirates,
    playerSupport: parties.player,
    regionId,
    spdSupport: parties.spd,
    top3,
    top09Support: parties.top09,
    winner: top3[0]?.partyId ?? 'player',
    winnerSupport: top3[0]?.support ?? 0,
  };
}

function diagnosticsForRegion(state: GameState, regionId: RegionId, partyId: PartyId): RegionPartyDiagnostic {
  const runtime = state.partyRuntime[partyId];
  const points = loadClusteredRegionalizedVoterFieldV03().points.filter((point) => regionIdFromKraj(point.geography?.krajId) === regionId);
  const totalWeight = points.reduce((sum, point) => sum + point.weight, 0) || 1;
  const averageKernel =
    points.reduce((sum, point) => sum + point.weight * ideologicalKernel(point.position, runtime.field), 0) / totalWeight;
  const averageVolatility = points.reduce((sum, point) => sum + point.weight * (point.volatility ?? 0.5), 0) / totalWeight;

  return {
    amplitude: runtime.field.amplitude,
    averageKernel,
    organization: runtime.organization[regionId] ?? 0.25,
    partyId,
    reputationFit: reputationFit(runtime.reputation, averageVolatility),
  };
}

function ideologicalKernel(position: LatentVector8D, field: GameState['partyRuntime'][PartyId]['field']) {
  const center = field.center8D;
  const width = field.width8D;
  const salience = field.salience8D;
  if (!center || !width) {
    return 0;
  }

  const distance = dimensions.reduce((sum, dimension) => {
    const normalized = (position[dimension] - center[dimension]) / Math.max(0.15, width[dimension]);
    return sum + (salience?.[dimension] ?? 1) * normalized * normalized;
  }, 0);

  return Math.exp(-0.5 * distance);
}

function reputationFit(reputation: ReputationVector, volatility: number) {
  const scandalSensitivity = 0.45 + volatility * 0.25;
  return (
    0.18 * reputation.trust +
    0.12 * reputation.competence +
    0.12 * reputation.authenticity +
    0.1 * reputation.integrity +
    0.08 * reputation.consistency -
    scandalSensitivity * reputation.controversy * 0.16
  );
}

function effectiveWidth(width: LatentVector8D, salience: LatentVector8D): FieldVectorRecord {
  return Object.fromEntries(
    dimensions.map((dimension) => [dimension, width[dimension] / Math.sqrt(Math.max(0.05, salience[dimension]))]),
  ) as FieldVectorRecord;
}

function amplitudeWarnings(calibratedAmplitude: number, amplitudeMultiplier: number) {
  const warnings: string[] = [];
  if (calibratedAmplitude < 0.25) {
    warnings.push('WARNING: calibrated amplitude very low; vector/width may be too naturally attractive or target too low');
  }
  if (calibratedAmplitude > 2.5) {
    warnings.push('WARNING: calibrated amplitude very high; vector/width may be too narrow or target too high');
  }
  if (amplitudeMultiplier < 0.35) {
    warnings.push('WARNING: calibration heavily suppresses party');
  }
  if (amplitudeMultiplier > 3) {
    warnings.push('WARNING: calibration heavily boosts party');
  }
  return warnings;
}

function effectiveWidthLabel(avgEffectiveWidth: number) {
  return `effective width: ${effectiveWidthBand(avgEffectiveWidth)}`;
}

function effectiveWidthBand(avgEffectiveWidth: number) {
  if (avgEffectiveWidth < 0.35) {
    return 'very narrow/niche';
  }
  if (avgEffectiveWidth < 0.5) {
    return 'narrow/profiled';
  }
  if (avgEffectiveWidth < 0.7) {
    return 'mainstream/profiled';
  }
  return 'broad catch-all';
}

function completeVector(vector: LatentVector8D | undefined): FieldVectorRecord {
  return Object.fromEntries(dimensions.map((dimension) => [dimension, vector?.[dimension] ?? 0])) as FieldVectorRecord;
}

function averageVector(vector: LatentVector8D) {
  return dimensions.reduce((sum, dimension) => sum + vector[dimension], 0) / dimensions.length;
}

function supportRecord(record: Partial<Record<PartyId, number>>): SupportRecord {
  return Object.fromEntries(partyIds.map((partyId) => [partyId, record[partyId] ?? 0])) as SupportRecord;
}

function formatVector(vector: FieldVectorRecord) {
  return dimensions.map((dimension) => `${dimension} ${vector[dimension].toFixed(3)}`).join(', ');
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(2)} %`;
}

function regionIdFromKraj(krajId?: string): RegionId | undefined {
  const map: Record<string, RegionId> = {
    CZ010: 'praha',
    CZ020: 'stredocesky',
    CZ031: 'jihocesky',
    CZ032: 'plzensky',
    CZ041: 'karlovarsky',
    CZ042: 'ustecky',
    CZ051: 'liberecky',
    CZ052: 'kralovehradecky',
    CZ053: 'pardubicky',
    CZ063: 'vysocina',
    CZ064: 'jihomoravsky',
    CZ071: 'olomoucky',
    CZ072: 'zlinsky',
    CZ080: 'moravskoslezsky',
  };
  return krajId ? map[krajId] : undefined;
}
