import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const weightedFileName = 'cz_voter_points_50000_ess10_eb103_8d_nms_weighted.csv';
const outputPath = path.resolve('src/simulation/data/voterField.v03.json');
const regionalOutputPath = path.resolve('src/simulation/data/voterField.v03.regionalized.json');
const clusteredRegionalOutputPath = path.resolve('src/simulation/data/voterField.v03.regionalized.clustered.json');
const regionalProfilePath = path.resolve('src/simulation/data/krajProfiles.v03.json');
const dimensionColumns = ['econ', 'culture', 'authority', 'establishment', 'globalism', 'green', 'ukraine'];
const legacyGreenDealColumn = 'green_deal';
const pointValueColumns = [...dimensionColumns, legacyGreenDealColumn];
const segmentOrder = ['trad_left', 'lib_left', 'center', 'trad_right', 'lib_right'];

const sourcePath = resolveSourcePath(process.argv[2]);

if (!sourcePath.endsWith(weightedFileName)) {
  throw new Error(`Expected NMS weighted CSV named ${weightedFileName}; got ${sourcePath}`);
}

const csv = fs.readFileSync(sourcePath, 'utf8').replace(/^\uFEFF/, '');
const regionalConfig = JSON.parse(fs.readFileSync(regionalProfilePath, 'utf8'));
const [headerLine, ...lines] = csv.trim().split(/\r?\n/);
const headers = parseCsvLine(headerLine);
const index = Object.fromEntries(headers.map((header, headerIndex) => [header, headerIndex]));
const dictionaries = {
  ageGroups: [],
  education: [],
  leftRight: [],
  regions: [],
  segments: [...segmentOrder],
  urbanity: [],
};
const regionalDictionaries = {
  ageGroups: [],
  education: [],
  kraje: regionalConfig.kraje.map((kraj) => kraj.id),
  leftRight: [],
  metroAreas: ['none', 'praha', 'brno', 'ostrava', 'plzen', 'olomouc', 'liberec', 'hradec_pardubice'],
  nuts2: ['CZ01', 'CZ02', 'CZ03', 'CZ04', 'CZ05', 'CZ06', 'CZ07', 'CZ08'],
  segments: [...segmentOrder],
  socioEconomicStatus: ['low', 'middle', 'high'],
  urbanity: ['rural', 'town', 'large_town', 'metro'],
};
const points = [];
const parentEntries = [];

for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
  const columns = parseCsvLine(lines[lineIndex]);
  const position = Object.fromEntries(dimensionColumns.map((dimension) => [dimension, readNumber(columns, index[dimension])]));
  const legacyGreenDeal = readNumber(columns, index[legacyGreenDealColumn]);
  const ageGroup = readString(columns, index.age4);
  const education = readString(columns, index.education3);
  const leftRight = readString(columns, index.left_right3);
  const region = readString(columns, index.region_nuts2);
  const segment = readString(columns, index.nms_block);
  const urbanity = readString(columns, index.urbanity3);
  const normalizedUrbanity = normalizeUrbanity(urbanity) ?? 'town';
  const weight = round(readNumber(columns, index.represented_voters), 6);
  const turnoutBase = round(estimateTurnout(ageGroup, education, position.establishment), 4);
  const volatility = round(estimateVolatility(segment, position.establishment), 4);

  points.push([
    weight,
    dictionaryIndex(dictionaries.regions, region),
    dictionaryIndex(dictionaries.ageGroups, ageGroup),
    dictionaryIndex(dictionaries.education, education),
    dictionaryIndex(dictionaries.urbanity, urbanity),
    dictionaryIndex(dictionaries.leftRight, leftRight),
    dictionaryIndex(dictionaries.segments, segment),
    turnoutBase,
    volatility,
    ...dimensionColumns.map((dimension) => round(position[dimension], 6)),
    round(legacyGreenDeal, 6),
  ]);

  parentEntries.push({
    ageGroup,
    education,
    leftRight,
    nuts2Id: normalizeNuts2(region),
    parentId: lineIndex,
    position,
    legacyGreenDeal,
    segment,
    turnoutBase,
    urbanity: normalizedUrbanity,
    volatility,
    weight,
  });
}

const data = {
  dictionaries,
  dimensions: dimensionColumns,
  pointColumns: [
    'weight',
    'region',
    'age',
    'education',
    'urbanity',
    'leftRight',
    'segment',
    'turnoutBase',
    'volatility',
    ...pointValueColumns,
  ],
  points,
  source: 'ESS10+EB103 8D field with NMS weighted density calibration',
  sourceFile: weightedFileName,
  version: '0.3',
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(data)}\n`, 'utf8');
const regionalData = buildRegionalizedData(parentEntries);
fs.writeFileSync(regionalOutputPath, `${JSON.stringify(regionalData)}\n`, 'utf8');
const clusteredRegionalData = buildClusteredRegionalData(regionalData);
fs.writeFileSync(clusteredRegionalOutputPath, `${JSON.stringify(clusteredRegionalData)}\n`, 'utf8');

console.log(`Prepared ${points.length} weighted voter points from ${sourcePath}`);
console.log(`Wrote ${outputPath}`);
console.log(`Prepared ${regionalData.points.length} regionalized weighted child points`);
console.log(`Wrote ${regionalOutputPath}`);
console.log(`Prepared ${clusteredRegionalData.points.length} clustered regional weighted points`);
console.log(`Wrote ${clusteredRegionalOutputPath}`);

function buildRegionalizedData(parentPoints) {
  const profilesByNuts2 = regionalConfig.profiles.reduce((accumulator, profile) => {
    accumulator[profile.nuts2Id] = accumulator[profile.nuts2Id] ?? [];
    accumulator[profile.nuts2Id].push(profile);
    return accumulator;
  }, {});
  const childrenByParent = parentPoints.map((parent) => {
    const candidates = profilesByNuts2[parent.nuts2Id] ?? [];
    const scored = candidates.map((profile) => ({
      profile,
      probability: 0,
      score: calculateKrajFitScore(parent, profile),
    }));
    const totalScore = scored.reduce((sum, item) => sum + item.score, 0) || 1;
    for (const child of scored) {
      child.probability = child.score / totalScore;
    }
    return { children: scored, parent };
  });

  for (let iteration = 0; iteration < 3; iteration += 1) {
    const actualByKraj = {};
    const targetByKraj = {};
    const nuts2Totals = {};
    for (const parent of parentPoints) {
      nuts2Totals[parent.nuts2Id] = (nuts2Totals[parent.nuts2Id] ?? 0) + parent.weight;
    }
    for (const profile of regionalConfig.profiles) {
      targetByKraj[profile.krajId] = (nuts2Totals[profile.nuts2Id] ?? 0) * profile.electorateWeightWithinNuts2;
      actualByKraj[profile.krajId] = 0;
    }
    for (const entry of childrenByParent) {
      for (const child of entry.children) {
        actualByKraj[child.profile.krajId] += entry.parent.weight * child.probability;
      }
    }
    const factors = Object.fromEntries(
      Object.keys(targetByKraj).map((krajId) => [krajId, targetByKraj[krajId] / Math.max(0.000001, actualByKraj[krajId] ?? 0)]),
    );
    for (const entry of childrenByParent) {
      let probabilityTotal = 0;
      for (const child of entry.children) {
        child.probability *= factors[child.profile.krajId] ?? 1;
        probabilityTotal += child.probability;
      }
      for (const child of entry.children) {
        child.probability = child.probability / Math.max(0.000001, probabilityTotal);
      }
    }
  }

  const regionalPoints = [];
  for (const entry of childrenByParent) {
    for (const child of entry.children) {
      const parent = entry.parent;
      const profile = child.profile;
      const metroArea = assignMetroArea(parent.urbanity, profile);
      const incomeProxy = round(inferIncomeProxy(parent.education, parent.urbanity, parent.ageGroup), 4);
      const socioEconomicStatus = inferSocioEconomicStatus(incomeProxy);
      regionalPoints.push([
        round(parent.weight * child.probability, 6),
        dictionaryIndex(regionalDictionaries.nuts2, parent.nuts2Id),
        dictionaryIndex(regionalDictionaries.kraje, profile.krajId),
        dictionaryIndex(regionalDictionaries.ageGroups, parent.ageGroup),
        dictionaryIndex(regionalDictionaries.education, parent.education),
        dictionaryIndex(regionalDictionaries.urbanity, parent.urbanity),
        dictionaryIndex(regionalDictionaries.leftRight, parent.leftRight),
        dictionaryIndex(regionalDictionaries.segments, parent.segment),
        parent.turnoutBase,
        parent.volatility,
        dictionaryIndex(regionalDictionaries.metroAreas, metroArea),
        dictionaryIndex(regionalDictionaries.socioEconomicStatus, socioEconomicStatus),
      ...dimensionColumns.map((dimension) => round(parent.position[dimension], 6)),
      round(parent.legacyGreenDeal, 6),
        incomeProxy,
        parent.parentId,
        round(child.probability, 6),
      ]);
    }
  }

  return {
    dictionaries: regionalDictionaries,
    dimensions: dimensionColumns,
    parentPointCount: parentPoints.length,
    pointColumns: [
      'weight',
      'nuts2',
      'kraj',
      'age',
      'education',
      'urbanity',
      'leftRight',
      'segment',
      'turnoutBase',
      'volatility',
      'metroArea',
      'socioEconomicStatus',
      ...pointValueColumns,
      'incomeProxy',
      'parentParticleId',
      'syntheticRegionConfidence',
    ],
    points: regionalPoints,
    source: 'ESS10+EB103 8D field with NMS weighted density calibration and synthetic NUTS2-to-kraj post-stratification',
    sourceFile: weightedFileName,
    version: '0.3-regionalized',
  };
}

function buildClusteredRegionalData(regionalData) {
  const clusters = new Map();
  const clusteredPoints = [];
  const clusterDimensionIndexes = [0, 1, 4, 5]; // econ, culture, globalism, green preserve the main spatial divides.
  const clusterGridStep = 0.6;

  for (const row of regionalData.points) {
    const roundedDimensions = clusterDimensionIndexes.map((offset) => roundToBin(row[12 + offset], clusterGridStep));
    const key = [
      row[2], // kraj
      row[4], // education
      row[5], // urbanity
      row[7], // segment
      row[11], // socio-economic status
      ...roundedDimensions,
    ].join('|');
    const weight = row[0];
    let cluster = clusters.get(key);

    if (!cluster) {
      cluster = {
        age: row[3],
        dimensions: Object.fromEntries(pointValueColumns.map((dimension) => [dimension, 0])),
        education: row[4],
        incomeProxy: 0,
        kraj: row[2],
        leftRight: row[6],
        metroArea: row[10],
        nuts2: row[1],
        segment: row[7],
        socioEconomicStatus: row[11],
        syntheticRegionConfidence: 0,
        turnoutBase: 0,
        urbanity: row[5],
        volatility: 0,
        weight: 0,
      };
      clusters.set(key, cluster);
    }

    cluster.weight += weight;
    cluster.turnoutBase += row[8] * weight;
    cluster.volatility += row[9] * weight;
    cluster.incomeProxy += row[20] * weight;
    cluster.syntheticRegionConfidence += row[22] * weight;
    for (let dimensionIndex = 0; dimensionIndex < pointValueColumns.length; dimensionIndex += 1) {
      cluster.dimensions[pointValueColumns[dimensionIndex]] += row[12 + dimensionIndex] * weight;
    }
  }

  for (const cluster of clusters.values()) {
    const weight = cluster.weight || 1;
    clusteredPoints.push([
      round(cluster.weight, 6),
      cluster.nuts2,
      cluster.kraj,
      cluster.age,
      cluster.education,
      cluster.urbanity,
      cluster.leftRight,
      cluster.segment,
      round(cluster.turnoutBase / weight, 4),
      round(cluster.volatility / weight, 4),
      cluster.metroArea,
      cluster.socioEconomicStatus,
      ...pointValueColumns.map((dimension) => round(cluster.dimensions[dimension] / weight, 6)),
      round(cluster.incomeProxy / weight, 4),
      clusteredPoints.length,
      round(cluster.syntheticRegionConfidence / weight, 6),
    ]);
  }

  return {
    ...regionalData,
    clusteredFromPointCount: regionalData.points.length,
    clusterDimensions: clusterDimensionIndexes.map((index) => dimensionColumns[index]),
    clusterGridStep,
    points: clusteredPoints,
    source: `${regionalData.source}; clustered for weekly gameplay support calculations`,
    version: '0.3-regionalized-clustered',
  };
}

function roundToBin(value, step) {
  return Math.round(value / step) * step;
}

function calculateKrajFitScore(parent, profile) {
  const urbanityFit = profile.urbanityProfile[parent.urbanity] ?? 0.02;
  const educationFit = profile.educationProfile?.[parent.education] ?? 1;
  const ageFit = profile.ageProfile?.[parent.ageGroup] ?? 1;
  const latentFit = calculateLatentFit(parent.position, profile.latentProfileHint);
  const metroFit = calculateMetroFit(parent.urbanity, profile);

  return (
    profile.electorateWeightWithinNuts2 *
    clamp(urbanityFit / 0.25, 0.25, 2.5) *
    clamp(educationFit / 0.25, 0.5, 1.8) *
    clamp(ageFit / 0.25, 0.5, 1.5) *
    clamp(latentFit, 0.75, 1.25) *
    clamp(metroFit, 0.7, 1.6)
  );
}

function calculateLatentFit(position, hint = {}) {
  const entries = Object.entries(hint);
  if (entries.length === 0) {
    return 1;
  }
  const distance = entries.reduce((sum, [dimension, target]) => sum + Math.abs(position[dimension] - target), 0) / entries.length;
  return 1.08 - distance * 0.18;
}

function calculateMetroFit(urbanity, profile) {
  const hasMetro = Object.entries(profile.metroAreaShares ?? {}).some(([metro, share]) => metro !== 'none' && share > 0);
  if ((urbanity === 'metro' || urbanity === 'large_town') && hasMetro) return 1.22;
  if ((urbanity === 'rural' || urbanity === 'town') && !hasMetro) return 1.12;
  return 1;
}

function assignMetroArea(urbanity, profile) {
  if (profile.krajId === 'CZ010') {
    return 'praha';
  }
  if (urbanity !== 'large_town' && urbanity !== 'metro') {
    return 'none';
  }
  const metros = Object.entries(profile.metroAreaShares ?? {}).filter(([metro, share]) => metro !== 'none' && share > 0);
  return metros.sort((a, b) => b[1] - a[1])[0]?.[0] ?? 'none';
}

function normalizeNuts2(value) {
  return String(value || '').slice(0, 4);
}

function normalizeUrbanity(value) {
  if (value === 'rural' || value === 'town' || value === 'large_town' || value === 'metro') return value;
  if (value === 'large' || value === 'city' || value === 'urban') return 'large_town';
  if (value === 'village') return 'rural';
  return undefined;
}

function resolveSourcePath(inputPath) {
  const candidates = [];

  if (inputPath) {
    const resolvedInput = path.resolve(inputPath);
    candidates.push(resolvedInput);

    if (fs.existsSync(resolvedInput) && fs.statSync(resolvedInput).isDirectory()) {
      candidates.push(path.join(resolvedInput, 'outputs', weightedFileName));
    }
  }

  candidates.push(
    path.resolve('src/simulation/data/source/outputs', weightedFileName),
    path.join(process.env.TEMP ?? '', 'volby_calibrated_model', 'outputs', weightedFileName),
    path.join(process.env.USERPROFILE ?? '', 'Downloads', 'volby_ess10_eb103_8d_nms_calibrated (1)', 'outputs', weightedFileName),
    path.join(process.env.USERPROFILE ?? '', 'Downloads', 'volby_ess10_eb103_8d_nms_calibrated', 'outputs', weightedFileName),
  );

  const found = candidates.find((candidate) => candidate && fs.existsSync(candidate) && fs.statSync(candidate).isFile());

  if (!found) {
    throw new Error(
      [
        `Could not find ${weightedFileName}.`,
        'Pass a CSV path or extracted calibration folder:',
        `node scripts/prepare-voter-field.mjs C:\\path\\to\\volby_ess10_eb103_8d_nms_calibrated`,
      ].join('\n'),
    );
  }

  return found;
}

function parseCsvLine(line) {
  const values = [];
  let value = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];

    if (char === '"' && inQuotes && nextChar === '"') {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === ',' && !inQuotes) {
      values.push(value);
      value = '';
      continue;
    }

    value += char;
  }

  values.push(value);
  return values;
}

function readNumber(columns, columnIndex) {
  const value = Number(columns[columnIndex]);

  if (!Number.isFinite(value)) {
    throw new Error(`Invalid numeric value at column ${columnIndex}: ${columns[columnIndex]}`);
  }

  return value;
}

function readString(columns, columnIndex) {
  return columns[columnIndex] || 'unknown';
}

function dictionaryIndex(dictionary, value) {
  const existingIndex = dictionary.indexOf(value);

  if (existingIndex >= 0) {
    return existingIndex;
  }

  dictionary.push(value);
  return dictionary.length - 1;
}

function estimateTurnout(ageGroup, education, establishment) {
  const ageBonus = ageGroup === '55_plus' ? 0.08 : ageGroup === '40_54' ? 0.04 : ageGroup === '15_24' ? -0.08 : -0.01;
  const educationBonus = education === 'tertiary' ? 0.05 : education === 'lower' ? -0.04 : 0;
  const trustBonus = establishment * 0.025;

  return clamp(0.64 + ageBonus + educationBonus + trustBonus, 0.35, 0.88);
}

function estimateVolatility(segment, establishment) {
  const segmentBonus = segment === 'center' ? 0.12 : segment === 'lib_right' ? 0.06 : 0;
  const antiSystemBonus = establishment < -0.45 ? 0.08 : 0;

  return clamp(0.42 + segmentBonus + antiSystemBonus - Math.abs(establishment) * 0.08, 0.18, 0.82);
}

function inferIncomeProxy(education, urbanity, ageGroup) {
  let value = 0.48;
  if (education === 'tertiary') value += 0.22;
  if (education === 'lower') value -= 0.16;
  if (urbanity === 'metro') value += 0.16;
  if (urbanity === 'large_town') value += 0.09;
  if (urbanity === 'rural') value -= 0.07;
  if (ageGroup === '55_plus') value -= 0.05;
  if (ageGroup === '25_39') value += 0.04;
  return clamp(value, 0, 1);
}

function inferSocioEconomicStatus(incomeProxy) {
  if (incomeProxy >= 0.66) return 'high';
  if (incomeProxy <= 0.38) return 'low';
  return 'middle';
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round(value, digits) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
