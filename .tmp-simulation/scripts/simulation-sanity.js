"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aggregateResults_1 = require("../src/simulation/engine/aggregateResults");
const sanityChecks_1 = require("../src/simulation/engine/sanityChecks");
const resolveSupport_1 = require("../src/simulation/engine/resolveSupport");
const partySeeds_1 = require("../src/simulation/model/partySeeds");
const voterFieldLoader_1 = require("../src/simulation/model/voterFieldLoader");
const voterField = (0, voterFieldLoader_1.loadVoterFieldV03)();
const support = (0, resolveSupport_1.resolveSupport)(voterField.points, partySeeds_1.partySeedsV03);
const baseline = (0, sanityChecks_1.runPartyBaseline)(partySeeds_1.partySeedsV03, voterField.points);
console.log(`Voter field v0.3: ${voterField.points.length.toLocaleString('cs-CZ')} weighted points`);
console.log(`Represented voters: ${support.totalRepresentedVoters.toLocaleString('cs-CZ', { maximumFractionDigits: 0 })}`);
console.log('\nNMS segment shares');
printPercentRecord((0, sanityChecks_1.summarizeSegments)(voterField.points));
console.log('\nEcon/culture broad sign quadrants');
printPercentRecord((0, sanityChecks_1.summarizeQuadrants)(voterField.points).sign);
console.log('\nEcon/culture strict quadrants with dead-zone');
printPercentRecord((0, sanityChecks_1.summarizeQuadrants)(voterField.points).strict);
console.log('\nP(VS | segment)');
printPercentRecord((0, sanityChecks_1.summarizeEducationBySegment)(voterField.points));
console.log('\nDimension means by segment');
const means = (0, sanityChecks_1.summarizeDimensionMeansBySegment)(voterField.points);
for (const segment of Object.keys(means).sort()) {
    const values = means[segment];
    console.log(`${segment}: econ ${formatNumber(values.econ)}, culture ${formatNumber(values.culture)}, globalism ${formatNumber(values.globalism)}, green ${formatNumber(values.green)}, ukraine ${formatNumber(values.ukraine)}`);
}
console.log('\nParty baseline');
for (const result of baseline.partyResults) {
    console.log(`${result.partyId}: ${formatPercent(result.voteShare)} | core ${formatVotes(result.coreVotes)} | potential ${formatVotes(result.potentialVotes)}`);
}
console.log('\nAggregate support');
const aggregate = (0, aggregateResults_1.summarizePartyResult)(support);
console.log(`Abstain share of turnout pool: ${formatPercent(aggregate.abstainShareOfTurnout)}`);
console.log(`Party votes: ${formatVotes(aggregate.totalPartyVotes)}`);
function printPercentRecord(record) {
    for (const [key, value] of Object.entries(record).sort((a, b) => b[1] - a[1])) {
        console.log(`${key}: ${formatPercent(value)}`);
    }
}
function formatPercent(value) {
    return `${(value * 100).toFixed(2)} %`;
}
function formatNumber(value) {
    return value.toFixed(3);
}
function formatVotes(value) {
    return value.toLocaleString('cs-CZ', { maximumFractionDigits: 0 });
}
