"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partyAttraction_1 = require("../src/simulation/engine/partyAttraction");
const dimensions_1 = require("../src/simulation/model/dimensions");
const greenDealIssue_1 = require("../src/simulation/model/greenDealIssue");
const partySeeds_1 = require("../src/simulation/model/partySeeds");
const voterFieldLoader_1 = require("../src/simulation/model/voterFieldLoader");
const issueSeed_1 = require("../src/game/issueSeed");
const voterField = (0, voterFieldLoader_1.loadVoterFieldV03)();
const greenDealIssueLayer = (0, issueSeed_1.createIssueLayerState)();
const greenDealIssue = greenDealIssueLayer.issues.find((issue) => issue.id === 'greenDeal');
assertEqual(dimensions_1.dimensionIds.length, 7, 'Core latent compass should have seven dimensions');
assertOk(!dimensions_1.dimensionIds.includes('green_deal'), 'Core latent compass must not include green_deal');
assertOk(Boolean(greenDealIssue), 'Green Deal should exist as an issue');
assertEqual(greenDealIssue?.domain, 'green', 'Green Deal issue should be in the green discourse domain');
assertOk(!('green_deal' in (greenDealIssue?.dimensionLoadings ?? {})), 'Green Deal issue loadings must not reintroduce green_deal');
for (const party of partySeeds_1.partySeedsV03) {
    assertOk(!('green_deal' in party.center), `${party.id} center must not contain green_deal`);
    assertOk(!('green_deal' in party.width), `${party.id} width must not contain green_deal`);
    assertOk(!('green_deal' in party.salience), `${party.id} salience must not contain green_deal`);
    assertOk(Number.isFinite(party.issuePositions?.greenDeal?.position), `${party.id} should define Green Deal issue position`);
    assertOk(Number.isFinite(party.issuePositions?.greenDeal?.salience), `${party.id} should define Green Deal issue salience`);
}
for (const point of voterField.points.slice(0, 1000)) {
    assertOk(!('green_deal' in point.position), `Voter ${point.id} must not contain green_deal in core latent position`);
    assertOk(Number.isFinite(point.legacy?.greenDealPropensityRaw), `Voter ${point.id} should preserve legacy green_deal raw value`);
    assertOk(Number.isFinite(point.issuePreferences?.greenDeal), `Voter ${point.id} should have Green Deal issue preference`);
    assertOk(point.greenDealAttitude === 'threat' || point.greenDealAttitude === 'mixed' || point.greenDealAttitude === 'opportunity', `Voter ${point.id} should have Green Deal attitude`);
}
const distribution = (0, greenDealIssue_1.greenDealWeightedDistribution)(voterField.points);
assertNear(distribution.threat, greenDealIssue_1.GREEN_DEAL_ATTITUDE_TARGETS.threat, 0.03, 'Green Deal threat share');
assertNear(distribution.mixed, greenDealIssue_1.GREEN_DEAL_ATTITUDE_TARGETS.mixed, 0.03, 'Green Deal mixed share');
assertNear(distribution.opportunity, greenDealIssue_1.GREEN_DEAL_ATTITUDE_TARGETS.opportunity, 0.03, 'Green Deal opportunity share');
const correlations = {
    culture: (0, greenDealIssue_1.weightedCorrelation)(voterField.points, 'culture'),
    econ: (0, greenDealIssue_1.weightedCorrelation)(voterField.points, 'econ'),
    establishment: (0, greenDealIssue_1.weightedCorrelation)(voterField.points, 'establishment'),
    globalism: (0, greenDealIssue_1.weightedCorrelation)(voterField.points, 'globalism'),
    green: (0, greenDealIssue_1.weightedCorrelation)(voterField.points, 'green'),
};
assertOk(correlations.green > 0.25, `Green Deal issue should correlate positively with green, got ${correlations.green}`);
assertOk(correlations.globalism > 0.25, `Green Deal issue should correlate positively with globalism, got ${correlations.globalism}`);
assertOk(correlations.establishment > 0.1, `Green Deal issue should correlate positively with establishment, got ${correlations.establishment}`);
assertOk(correlations.culture < -0.1, `Green Deal issue should correlate negatively with culture, got ${correlations.culture}`);
assertOk(Math.abs(correlations.econ) < 0.35, `Green Deal issue should have only weak/moderate econ correlation, got ${correlations.econ}`);
const stronglyAntiGreenOpportunity = weightedShare((point) => point.position.green < -0.5 && point.greenDealAttitude === 'opportunity');
const greenPositiveThreat = weightedShare((point) => point.position.green > 0.35 && point.greenDealAttitude === 'threat');
assertOk(stronglyAntiGreenOpportunity < 0.05, `Strongly anti-green Green Deal opportunity segment should be rare, got ${stronglyAntiGreenOpportunity}`);
assertOk(greenPositiveThreat > 0.02, `Green-positive Green Deal-skeptical segment should exist, got ${greenPositiveThreat}`);
const voter = voterField.points.find((point) => (point.issuePreferences?.greenDeal ?? 0) > 1) ?? voterField.points[0];
const party = partySeeds_1.partySeedsV03[0];
const distanceBefore = (0, partyAttraction_1.computeDistanceSquared)(voter, party);
const legacyChanged = {
    ...voter,
    legacy: { greenDealPropensityRaw: -999 },
};
const distanceAfter = (0, partyAttraction_1.computeDistanceSquared)(legacyChanged, party);
assertEqual(distanceBefore, distanceAfter, 'Legacy green_deal residual must not affect spatial distance');
const issueOpposed = {
    ...party,
    issuePositions: { greenDeal: { position: -2, salience: 4 } },
};
const issueSupportive = {
    ...party,
    issuePositions: { greenDeal: { position: 2, salience: 4 } },
};
const opposedAttraction = (0, partyAttraction_1.computePartyAttraction)(voter, issueOpposed).attraction;
const supportiveAttraction = (0, partyAttraction_1.computePartyAttraction)(voter, issueSupportive).attraction;
assertOk(Math.abs(opposedAttraction - supportiveAttraction) > 0.000001, 'Green Deal issue position should affect voter utility through issue fit');
console.log('Green Deal issue migration tests passed');
function weightedShare(predicate) {
    const total = voterField.points.reduce((sum, point) => sum + point.weight, 0) || 1;
    return voterField.points.reduce((sum, point) => sum + (predicate(point) ? point.weight : 0), 0) / total;
}
function assertNear(actual, expected, tolerance, message) {
    if (Math.abs(actual - expected) > tolerance) {
        throw new Error(`${message}. Expected ${expected} +/- ${tolerance}, got ${actual}`);
    }
}
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
