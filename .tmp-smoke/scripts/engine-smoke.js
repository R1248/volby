"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("../src/game/engine");
const seed_1 = require("../src/game/seed");
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function roundRecord(state) {
    return {
        cash: state.partyRuntime.player.cash,
        integrity: state.partyRuntime.player.reputation.integrity,
        nationalSupport: state.nationalSupport,
        polls: state.polls,
        scandalRisk: state.partyRuntime.player.scandalRisk,
        seats: (0, engine_1.computeElectionResult)(state).seats,
        week: state.week,
    };
}
function assertHealthyState(state) {
    assert(state.regions.length === 14, `Expected 14 regions, got ${state.regions.length}`);
    assert(state.segments.length >= 12, `Expected at least 12 segments, got ${state.segments.length}`);
    assert(state.partyRuntime.player.cash >= 0, 'Player cash must not be negative');
    for (const region of state.regions) {
        const support = state.regionalSupport[region.id];
        const sum = seed_1.partyIds.reduce((total, partyId) => total + support[partyId], 0);
        assert(Math.abs(sum - 1) < 0.000001, `Regional support for ${region.id} must sum to 1, got ${sum}`);
        for (const partyId of seed_1.partyIds) {
            const value = support[partyId];
            assert(Number.isFinite(value), `Support for ${partyId} in ${region.id} must be finite`);
            assert(value >= 0, `Support for ${partyId} in ${region.id} must not be negative`);
        }
    }
}
const baseState = (0, engine_1.initializeComputedState)((0, seed_1.createInitialGameState)());
assertHealthyState(baseState);
for (const partyId of seed_1.partyIds) {
    const field = baseState.partyRuntime[partyId].field;
    for (const dimension of ['econ', 'culture', 'authority', 'establishment', 'globalism', 'green', 'ukraine']) {
        assert(typeof field.center8D?.[dimension] === 'number', `${partyId} must have center8D.${dimension}`);
        assert(typeof field.width8D?.[dimension] === 'number', `${partyId} must have width8D.${dimension}`);
        assert(typeof field.salience8D?.[dimension] === 'number', `${partyId} must have salience8D.${dimension}`);
    }
    assert(!('green_deal' in (field.center8D ?? {})), `${partyId} center8D must not contain legacy green_deal`);
    assert(!('green_deal' in (field.width8D ?? {})), `${partyId} width8D must not contain legacy green_deal`);
    assert(!('green_deal' in (field.salience8D ?? {})), `${partyId} salience8D must not contain legacy green_deal`);
}
const issueShifted = (0, engine_1.updateProgramIssue)(baseState, 'greenDeal', { position: 2, salience: 4 });
assert(issueShifted.issueLayer.player.currentIssuePositions.greenDeal.position === 2, 'Green Deal program issue changes must update the issue layer');
const greenDealOpposed = (0, engine_1.updateProgramIssue)(baseState, 'greenDeal', { position: -2, salience: 4 });
const greenDealSupportive = (0, engine_1.updateProgramIssue)(baseState, 'greenDeal', { position: 2, salience: 4 });
const opposedSupport = (0, engine_1.computeNationalSupport)(greenDealOpposed, (0, engine_1.computeRegionalSupport)(greenDealOpposed)).player;
const supportiveSupport = (0, engine_1.computeNationalSupport)(greenDealSupportive, (0, engine_1.computeRegionalSupport)(greenDealSupportive)).player;
assert(Math.abs(opposedSupport - supportiveSupport) > 0.0001, 'Green Deal issue position must affect support through issue fit');
const plannedActions = [
    { actionV2Id: 'regionalMeeting', id: 'smoke-rally', targetRegionId: 'moravskoslezsky' },
    { actionV2Id: 'onlineAdCampaign', id: 'smoke-online' },
    { actionV2Id: 'videoClipCampaign', id: 'smoke-video' },
];
const turnA = (0, engine_1.resolveTurn)(baseState, plannedActions, 42);
const turnB = (0, engine_1.resolveTurn)(baseState, plannedActions, 42);
const resultA = turnA.state;
const resultB = turnB.state;
assertHealthyState(resultA);
assert(JSON.stringify(roundRecord(resultA)) === JSON.stringify(roundRecord(resultB)), 'Same seed and plan must produce the same result');
assert(turnA.briefing.opponentMoves.length >= seed_1.partyIds.length - 1, 'Every opponent should resolve a campaign move');
const cappedState = {
    ...baseState,
    rules: { ...baseState.rules, legalSpendCap: baseState.partyRuntime.player.legalSpend },
};
const cappedResult = (0, engine_1.resolveTurn)(cappedState, [{ actionV2Id: 'videoClipCampaign', id: 'blocked-video' }], 7);
assert(cappedResult.briefing.riskNotes.some((note) => note.includes('legal spend')), 'Legal spend cap should block invalid action');
const sponsorBefore = baseState.partyRuntime.player;
const sponsorAfter = (0, engine_1.acceptSponsor)(baseState, 'opaque').partyRuntime.player;
assert(sponsorAfter.reputation.integrity < sponsorBefore.reputation.integrity, 'Risky sponsor should lower integrity');
assert(sponsorAfter.scandalRisk > sponsorBefore.scandalRisk, 'Risky sponsor should raise scandal risk');
const question = baseState.questions[0];
const worstOption = question.options.reduce((worst, option) => (option.controversyRisk > worst.controversyRisk ? option : worst), question.options[0]);
const questionAfter = (0, engine_1.answerQuestion)(baseState, question.id, worstOption.id).partyRuntime.player.reputation;
assert(questionAfter.controversy > baseState.partyRuntime.player.reputation.controversy, 'Bad Q&A answer should raise controversy');
const seats = (0, engine_1.computeElectionResult)(resultA).seats;
const seatTotal = seed_1.partyIds.reduce((sum, partyId) => sum + seats[partyId], 0);
assert(seatTotal === 200, `Final election seats must sum to 200, got ${seatTotal}`);
console.log('Engine smoke tests passed');
