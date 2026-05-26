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

const beforeState = createInitialGameState();
const beforeRegional = computeRegionalSupport(beforeState, { disableProgramModifier: true });
const beforeNational = computeNationalSupport(beforeState, beforeRegional);
const afterState = initializeComputedState(createInitialGameState());

console.log('National support before calibration');
printSupport(beforeNational);

console.log('\nNational support after calibration');
printSupport(afterState.nationalSupport);

console.log('\nTargets');
printSupport(baselineTargetShares);

console.log('\nAmplitudes before -> after');
for (const partyId of partyIds) {
  console.log(
    `${partyId}: ${beforeState.partyRuntime[partyId].field.amplitude.toFixed(4)} -> ${afterState.partyRuntime[partyId].field.amplitude.toFixed(4)}`,
  );
}

console.log('\nAverage width and salience');
for (const partyId of partyIds) {
  const field = afterState.partyRuntime[partyId].field;
  console.log(
    `${partyId}: width ${averageVector(field.width8D).toFixed(3)}, salience ${averageVector(field.salience8D).toFixed(3)}`,
  );
}

console.log('\nRegional support after calibration');
for (const region of afterState.regions) {
  const values = partyIds.map((partyId) => `${partyId} ${formatPercent(afterState.regionalSupport[region.id][partyId])}`).join(', ');
  console.log(`${region.id}: ${values}`);
}

for (const regionId of ['vysocina', 'praha'] as RegionId[]) {
  console.log(`\nDiagnostics for ${regionId}`);
  for (const partyId of partyIds) {
    const diagnostic = diagnosticsForRegion(afterState, regionId, partyId);
    console.log(
      `${partyId}: amplitude ${diagnostic.amplitude.toFixed(3)}, kernel ${diagnostic.averageKernel.toFixed(4)}, organization ${diagnostic.organization.toFixed(2)}, reputationFit ${diagnostic.reputationFit.toFixed(3)}`,
    );
  }
}

function printSupport(support: Partial<Record<PartyId, number>>) {
  for (const partyId of partyIds) {
    console.log(`${partyId}: ${formatPercent(support[partyId] ?? 0)}`);
  }
}

function diagnosticsForRegion(state: GameState, regionId: RegionId, partyId: PartyId) {
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

function averageVector(vector: LatentVector8D | undefined) {
  if (!vector) {
    return 0;
  }

  return dimensions.reduce((sum, dimension) => sum + vector[dimension], 0) / dimensions.length;
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
