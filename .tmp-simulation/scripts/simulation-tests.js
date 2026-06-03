"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveSupport_1 = require("../src/simulation/engine/resolveSupport");
const sanityChecks_1 = require("../src/simulation/engine/sanityChecks");
const greenDealIssue_1 = require("../src/simulation/model/greenDealIssue");
const dimensions_1 = require("../src/simulation/model/dimensions");
const partySeeds_1 = require("../src/simulation/model/partySeeds");
const voterFieldLoader_1 = require("../src/simulation/model/voterFieldLoader");
const voterField = (0, voterFieldLoader_1.loadVoterFieldV03)();
assertEqual(dimensions_1.dimensionIds.length, 7, 'v0.5 latent compass must contain exactly 7 dimensions');
assertOk(!dimensions_1.dimensionIds.includes('green_deal'), 'green_deal must not be a core latent dimension');
for (const party of partySeeds_1.partySeedsV03) {
    for (const dimension of dimensions_1.dimensionIds) {
        assertEqual(typeof party.center[dimension], 'number', `${party.id} missing center.${dimension}`);
        assertEqual(typeof party.width[dimension], 'number', `${party.id} missing width.${dimension}`);
        assertEqual(typeof party.salience[dimension], 'number', `${party.id} missing salience.${dimension}`);
        assertOk(party.width[dimension] > 0, `${party.id} width.${dimension} must be > 0`);
    }
}
assertEqual(voterField.points.length, 50000, 'weighted field must load all 50,000 voter points');
for (const point of voterField.points) {
    assertOk(Number.isFinite(point.weight) && point.weight > 0, `Invalid weight for voter ${point.id}`);
    assertOk(Number.isFinite(point.legacy?.greenDealPropensityRaw ?? 0), `Legacy Green Deal raw value should load for voter ${point.id}`);
    assertOk(Number.isFinite(point.issuePreferences?.greenDeal), `Missing Green Deal issue preference for voter ${point.id}`);
    assertOk(Boolean(point.greenDealAttitude), `Missing Green Deal attitude for voter ${point.id}`);
    assertOk(!('green_deal' in point.position), `green_deal must not be present in core latent position for voter ${point.id}`);
    for (const dimension of dimensions_1.dimensionIds) {
        const value = point.position[dimension];
        assertOk(Number.isFinite(value), `Invalid ${dimension} for voter ${point.id}`);
        assertOk(value >= -1 && value <= 1, `${dimension} out of [-1, 1] for voter ${point.id}: ${value}`);
    }
}
const greenDealDistribution = (0, greenDealIssue_1.greenDealWeightedDistribution)(voterField.points);
assertOk(Math.abs(greenDealDistribution.threat - 0.6) < 0.03, `Green Deal threat share ${greenDealDistribution.threat} should be near 0.60`);
assertOk(Math.abs(greenDealDistribution.mixed - 0.12) < 0.03, `Green Deal mixed share ${greenDealDistribution.mixed} should be near 0.12`);
assertOk(Math.abs(greenDealDistribution.opportunity - 0.28) < 0.03, `Green Deal opportunity share ${greenDealDistribution.opportunity} should be near 0.28`);
for (const targetCheck of (0, sanityChecks_1.checkNmsTargets)(voterField.points, 0.002)) {
    assertOk(targetCheck.ok, `${targetCheck.segment} share ${targetCheck.actual} is not close to target ${targetCheck.target}`);
}
const support = (0, resolveSupport_1.resolveSupport)(voterField.points, partySeeds_1.partySeedsV03);
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
function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(`${message}. Expected ${String(expected)}, got ${String(actual)}`);
    }
}
function assertOk(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
