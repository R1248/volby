import { summarizePartyResult } from '../src/simulation/engine/aggregateResults';
import {
  runPartyBaseline,
  summarizeDimensionMeansBySegment,
  summarizeEducationBySegment,
  summarizeQuadrants,
  summarizeSegments,
} from '../src/simulation/engine/sanityChecks';
import { resolveSupport } from '../src/simulation/engine/resolveSupport';
import { partySeedsV03 } from '../src/simulation/model/partySeeds';
import { loadVoterFieldV03 } from '../src/simulation/model/voterFieldLoader';

const voterField = loadVoterFieldV03();
const support = resolveSupport(voterField.points, partySeedsV03);
const baseline = runPartyBaseline(partySeedsV03, voterField.points);

console.log(`Voter field v0.3: ${voterField.points.length.toLocaleString('cs-CZ')} weighted points`);
console.log(`Represented voters: ${support.totalRepresentedVoters.toLocaleString('cs-CZ', { maximumFractionDigits: 0 })}`);

console.log('\nNMS segment shares');
printPercentRecord(summarizeSegments(voterField.points));

console.log('\nEcon/culture broad sign quadrants');
printPercentRecord(summarizeQuadrants(voterField.points).sign);

console.log('\nEcon/culture strict quadrants with dead-zone');
printPercentRecord(summarizeQuadrants(voterField.points).strict);

console.log('\nP(VS | segment)');
printPercentRecord(summarizeEducationBySegment(voterField.points));

console.log('\nDimension means by segment');
const means = summarizeDimensionMeansBySegment(voterField.points);
for (const segment of Object.keys(means).sort()) {
  const values = means[segment];
  console.log(
    `${segment}: econ ${formatNumber(values.econ)}, culture ${formatNumber(values.culture)}, globalism ${formatNumber(
      values.globalism,
    )}, green ${formatNumber(values.green)}, ukraine ${formatNumber(values.ukraine)}`,
  );
}

console.log('\nParty baseline');
for (const result of baseline.partyResults) {
  console.log(
    `${result.partyId}: ${formatPercent(result.voteShare)} | core ${formatVotes(result.coreVotes)} | potential ${formatVotes(
      result.potentialVotes,
    )}`,
  );
}

console.log('\nAggregate support');
const aggregate = summarizePartyResult(support);
console.log(`Abstain share of turnout pool: ${formatPercent(aggregate.abstainShareOfTurnout)}`);
console.log(`Party votes: ${formatVotes(aggregate.totalPartyVotes)}`);

function printPercentRecord(record: Record<string, number>) {
  for (const [key, value] of Object.entries(record).sort((a, b) => b[1] - a[1])) {
    console.log(`${key}: ${formatPercent(value)}`);
  }
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(2)} %`;
}

function formatNumber(value: number) {
  return value.toFixed(3);
}

function formatVotes(value: number) {
  return value.toLocaleString('cs-CZ', { maximumFractionDigits: 0 });
}
