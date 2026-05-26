import { initializeComputedState } from '../src/game/engine';
import { createInitialGameState, parties, partyIds } from '../src/game/seed';
import type { LatentDimension8D, LatentVector8D, PartyId } from '../src/game/types';

const dimensions: LatentDimension8D[] = [
  'econ',
  'culture',
  'authority',
  'establishment',
  'globalism',
  'green',
  'ukraine',
];

const state = initializeComputedState(createInitialGameState());

console.log('Party seed centers');
for (const party of parties) {
  const center = state.partyRuntime[party.id].field.center8D;
  if (!center) {
    console.log(`${party.id}: missing center8D`);
    continue;
  }

  console.log(`${party.id}: ${formatVector(center)}`);
}

console.log('\nPairwise ideological distances');
for (let a = 0; a < partyIds.length; a += 1) {
  for (let b = a + 1; b < partyIds.length; b += 1) {
    const partyA = partyIds[a];
    const partyB = partyIds[b];
    const centerA = requireCenter(partyA);
    const centerB = requireCenter(partyB);
    console.log(`${partyA} - ${partyB}: ${distance(centerA, centerB).toFixed(3)}`);
  }
}

console.log('\nAverage width');
for (const partyId of partyIds) {
  const width = state.partyRuntime[partyId].field.width8D;
  if (!width) {
    console.log(`${partyId}: missing width8D`);
    continue;
  }

  console.log(`${partyId}: ${average(dimensions.map((dimension) => width[dimension])).toFixed(3)}`);
}

console.log('\nInitial national support');
for (const partyId of partyIds) {
  console.log(`${partyId}: ${formatPercent(state.nationalSupport[partyId])}`);
}

console.log('\nOrganization completeness');
const regionIds = state.regions.map((region) => region.id);
for (const partyId of partyIds) {
  const missing = regionIds.filter((regionId) => state.partyRuntime[partyId].organization[regionId] === undefined);
  console.log(`${partyId}: ${missing.length === 0 ? 'complete' : `missing ${missing.join(', ')}`}`);
}

function requireCenter(partyId: PartyId): LatentVector8D {
  const center = state.partyRuntime[partyId].field.center8D;
  if (!center) {
    throw new Error(`${partyId} is missing center8D`);
  }

  return center;
}

function formatVector(vector: LatentVector8D) {
  return dimensions.map((dimension) => `${dimension} ${vector[dimension].toFixed(2)}`).join(', ');
}

function distance(a: LatentVector8D, b: LatentVector8D) {
  return Math.sqrt(
    dimensions.reduce((sum, dimension) => {
      const delta = a[dimension] - b[dimension];
      return sum + delta * delta;
    }, 0),
  );
}

function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(2)} %`;
}
