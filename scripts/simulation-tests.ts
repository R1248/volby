import { resolveSupport } from '../src/simulation/engine/resolveSupport';
import { checkNmsTargets } from '../src/simulation/engine/sanityChecks';
import { dimensionIds } from '../src/simulation/model/dimensions';
import { partySeedsV03 } from '../src/simulation/model/partySeeds';
import { loadVoterFieldV03 } from '../src/simulation/model/voterFieldLoader';

const voterField = loadVoterFieldV03();

assertEqual(dimensionIds.length, 8, 'v0.3 must contain exactly 8 dimensions');

for (const party of partySeedsV03) {
  for (const dimension of dimensionIds) {
    assertEqual(typeof party.center[dimension], 'number', `${party.id} missing center.${dimension}`);
    assertEqual(typeof party.width[dimension], 'number', `${party.id} missing width.${dimension}`);
    assertEqual(typeof party.salience[dimension], 'number', `${party.id} missing salience.${dimension}`);
    assertOk(party.width[dimension] > 0, `${party.id} width.${dimension} must be > 0`);
  }
}

assertEqual(voterField.points.length, 50000, 'weighted field must load all 50,000 voter points');

for (const point of voterField.points) {
  assertOk(Number.isFinite(point.weight) && point.weight > 0, `Invalid weight for voter ${point.id}`);

  for (const dimension of dimensionIds) {
    const value = point.position[dimension];
    assertOk(Number.isFinite(value), `Invalid ${dimension} for voter ${point.id}`);
    assertOk(value >= -1 && value <= 1, `${dimension} out of [-1, 1] for voter ${point.id}: ${value}`);
  }
}

for (const targetCheck of checkNmsTargets(voterField.points, 0.002)) {
  assertOk(
    targetCheck.ok,
    `${targetCheck.segment} share ${targetCheck.actual} is not close to target ${targetCheck.target}`,
  );
}

const support = resolveSupport(voterField.points, partySeedsV03);
const voteShareSum = support.partyResults.reduce((sum, result) => sum + result.voteShare, 0);

assertOk(Math.abs(voteShareSum - 1) < 0.000001, `Party vote shares should sum to 1, got ${voteShareSum}`);
assertOk(support.abstainVotes >= 0, 'Abstain votes should be non-negative');

for (const result of support.partyResults) {
  assertOk(Number.isFinite(result.voteShare), `${result.partyId} voteShare is not finite`);
  assertOk(Number.isFinite(result.representedVotes), `${result.partyId} representedVotes is not finite`);
  assertOk(Number.isFinite(result.coreVotes), `${result.partyId} coreVotes is not finite`);
  assertOk(Number.isFinite(result.potentialVotes), `${result.partyId} potentialVotes is not finite`);
}

console.log('Simulation v0.3 tests passed');

function assertEqual(actual: unknown, expected: unknown, message: string) {
  if (actual !== expected) {
    throw new Error(`${message}. Expected ${String(expected)}, got ${String(actual)}`);
  }
}

function assertOk(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}
