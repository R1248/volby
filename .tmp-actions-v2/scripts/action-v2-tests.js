"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actionEngine_1 = require("../src/game/actionEngine");
const campaignActionsV2_1 = require("../src/game/campaignActionsV2");
const engine_1 = require("../src/game/engine");
const seed_1 = require("../src/game/seed");
const validCategories = new Set([
    'field',
    'ads',
    'media',
    'digital',
    'program',
    'parliament',
    'analytics',
    'organization',
    'coalition',
    'turnout',
    'crisis',
    'negative',
    'ally',
    'grayZone',
    'blackOps',
]);
const validLegalities = new Set(['clean', 'gray', 'illegal']);
const forbiddenCampaignCategories = new Set(['analytics', 'media', 'crisis', 'organization', 'parliament', 'final']);
const forbiddenTimingNames = /posledni tyden|poslední týden|v den voleb|pozdni|pozdní/i;
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}
function cloneState(state) {
    return JSON.parse(JSON.stringify(state));
}
function planned(actionV2Id, patch = {}) {
    return {
        actionV2Id,
        id: `test-${actionV2Id}`,
        ...patch,
    };
}
assert(campaignActionsV2_1.campaignActionsV2.length >= 25, `Expected at least 25 CampaignActionV2 entries, got ${campaignActionsV2_1.campaignActionsV2.length}`);
for (const template of campaignActionsV2_1.campaignActionTemplates) {
    assert(template.placement === 'campaign', `${template.id} must have campaign placement`);
    assert(template.availability === 'player_initiated', `${template.id} must be player initiated`);
    assert(!forbiddenCampaignCategories.has(template.category), `${template.id} has forbidden campaign category ${template.category}`);
    assert(!forbiddenTimingNames.test(template.name), `${template.id} has time-specific name ${template.name}`);
}
for (const option of campaignActionsV2_1.mediaOpportunityTemplates.flatMap((template) => template.responseOptions)) {
    assert(!campaignActionsV2_1.campaignActionTemplates.some((template) => template.id === option.id), `${option.id} media response leaked into campaign actions`);
}
for (const action of campaignActionsV2_1.analyticsActionTemplates) {
    assert(action.placement === 'analytics', `${action.id} must have analytics placement`);
}
for (const action of campaignActionsV2_1.eventResponseTemplates) {
    assert(action.placement === 'event_response', `${action.id} must have event_response placement`);
    assert(action.requiresActiveEvent, `${action.id} must require active event`);
}
const ids = new Set();
for (const action of campaignActionsV2_1.campaignActionsV2) {
    assert(!ids.has(action.id), `Duplicate action id ${action.id}`);
    ids.add(action.id);
    assert(validCategories.has(action.category), `Invalid category for ${action.id}`);
    assert(validLegalities.has(action.legality), `Invalid legality for ${action.id}`);
    assert(action.ethicalRisk >= 0 && action.ethicalRisk <= 1, `ethicalRisk out of range for ${action.id}`);
    assert(action.cost >= 0, `cost must be non-negative for ${action.id}`);
    assert(action.staffCost >= 0, `staffCost must be non-negative for ${action.id}`);
    assert(action.leaderTimeCost >= 0, `leaderTimeCost must be non-negative for ${action.id}`);
    assert(action.fatigueCost >= 0, `fatigueCost must be non-negative for ${action.id}`);
    for (const [riskKey, value] of Object.entries(action.risks)) {
        assert(value >= 0 && value <= 1, `${action.id}.${riskKey} risk out of range`);
    }
}
assert((0, actionEngine_1.getCampaignPhase)(1, 21) === 'early', 'week 1 should be early campaign');
assert((0, actionEngine_1.getCampaignPhase)(20, 21) === 'final', 'penultimate week should be final campaign');
assert((0, actionEngine_1.getCampaignPhase)(21, 21) === 'election_day', 'final week should be election day');
assert((0, actionEngine_1.getCampaignTimingMultipliers)('gotvOperation', 20, 21).turnout > (0, actionEngine_1.getCampaignTimingMultipliers)('gotvOperation', 3, 21).turnout, 'GOTV should be stronger late');
assert((0, actionEngine_1.getCampaignTimingMultipliers)('fabricatedScandal', 20, 21).risk > (0, actionEngine_1.getCampaignTimingMultipliers)('fabricatedScandal', 3, 21).risk, 'fabricated scandal should be riskier late');
const baseState = (0, engine_1.initializeComputedState)((0, seed_1.createInitialGameState)());
const cleanState = cloneState(baseState);
const cleanBeforeOrganization = cleanState.partyRuntime.player.organization.ustecky ?? 0;
const cleanBeforeAuthenticity = cleanState.partyRuntime.player.reputation.authenticity;
const cleanResult = (0, actionEngine_1.applyCampaignActionV2)(cleanState, planned('regionalMeeting', { targetRegionId: 'ustecky' }));
assert(cleanResult.ok, 'Clean regionalMeeting should apply');
assert((cleanState.partyRuntime.player.organization.ustecky ?? 0) > cleanBeforeOrganization, 'Clean action should increase regional organization');
assert(cleanState.partyRuntime.player.reputation.authenticity > cleanBeforeAuthenticity, 'Clean action should improve authenticity');
assert((cleanState.partyRuntime.player.legalExposure ?? 0) === 0, 'Clean action should not create illegal legal exposure');
const digitalState = cloneState(baseState);
const digitalBeforeSupport = (0, engine_1.computeNationalSupport)(digitalState, (0, engine_1.computeRegionalSupport)(digitalState)).player;
const digitalResult = (0, actionEngine_1.applyCampaignActionV2)(digitalState, planned('onlineAdCampaign'));
assert(digitalResult.ok, 'Digital campaign action should apply');
const digitalAfterSupport = (0, engine_1.computeNationalSupport)(digitalState, (0, engine_1.computeRegionalSupport)(digitalState)).player;
assert(digitalAfterSupport >= digitalBeforeSupport, 'Digital campaign action should not reduce direct support estimate');
const gotvState = cloneState(baseState);
gotvState.week = gotvState.rules.finalWeek - 1;
const gotvResult = (0, actionEngine_1.applyCampaignActionV2)(gotvState, planned('gotvOperation'));
assert(gotvResult.ok, 'GOTV operation should apply');
assert((gotvState.turnoutModifiers ?? []).some((modifier) => modifier.kind === 'turnout'), 'GOTV should be stored as turnout preparation');
const grayState = cloneState(baseState);
const grayBeforeRisk = grayState.partyRuntime.player.scandalRisk;
const grayResult = (0, actionEngine_1.applyCampaignActionV2)(grayState, planned('demobilizingNegativeCampaign'));
assert(grayResult.ok, 'Gray action should apply');
assert(grayState.partyRuntime.player.scandalRisk > grayBeforeRisk, 'Gray action should increase scandal risk');
assert(grayState.partyRuntime.player.reputation.integrity < baseState.partyRuntime.player.reputation.integrity, 'Gray action should damage integrity');
assert((grayState.turnoutModifiers ?? []).some((modifier) => modifier.kind === 'demobilization'), 'Gray demobilization should be stored as turnout preparation');
const blackOps = campaignActionsV2_1.campaignActionsV2.filter((action) => action.category === 'blackOps');
assert(blackOps.length >= 3, 'Expected at least three blackOps abstractions');
for (const action of blackOps) {
    assert(action.legality === 'illegal', `${action.id} must be illegal`);
    assert(action.risks.legal >= 0.8, `${action.id} must have high legal risk`);
    assert(action.risks.scandal >= 0.75, `${action.id} must have high scandal risk`);
    assert(action.risks.media >= 0.7, `${action.id} must have high media risk`);
    assert((action.effects.reputationShift?.integrity ?? 0) < 0 || (action.effects.scandalRiskShift ?? 0) > 0.15, `${action.id} must damage integrity or raise scandal risk`);
    assert(!/how to|step by step|evade|harass|suppress voters|target real voters|scrape|botnet|phish/i.test(action.description), `${action.id} contains operational wording`);
}
const blackState = cloneState(baseState);
const blackBeforeIntegrity = blackState.partyRuntime.player.reputation.integrity;
const blackResult = (0, actionEngine_1.applyCampaignActionV2)(blackState, planned('fabricatedScandal'));
assert(blackResult.ok, 'BlackOps action should apply as a high-risk abstract mechanic');
assert(blackState.partyRuntime.player.reputation.integrity < blackBeforeIntegrity, 'BlackOps action should damage integrity');
assert((blackState.partyRuntime.player.legalExposure ?? 0) > 0.15, 'BlackOps action should raise legal exposure');
assert(blackState.scandals.some((scandal) => scandal.sourcePartyId === 'player'), 'BlackOps action should create detection/scandal exposure');
for (const state of [cleanState, digitalState, gotvState, grayState, blackState]) {
    const runtime = state.partyRuntime.player;
    assert(runtime.cash >= 0, 'cash should remain clamped above zero');
    assert(runtime.leader.fatigue >= 0 && runtime.leader.fatigue <= 1, 'fatigue should remain clamped');
    assert(runtime.reputation.integrity >= 0 && runtime.reputation.integrity <= 1, 'integrity should remain clamped');
    assert(runtime.scandalRisk >= 0 && runtime.scandalRisk <= 1, 'scandalRisk should remain clamped');
}
const turn = (0, engine_1.resolveTurn)(baseState, [
    planned('regionalMeeting', { targetRegionId: 'ustecky' }),
    planned('onlineAdCampaign'),
    planned('anonymousSupportPages'),
]);
for (const partyId of seed_1.partyIds) {
    assert(Number.isFinite(turn.state.nationalSupport[partyId]), `National support for ${partyId} must be finite`);
    assert(turn.state.nationalSupport[partyId] >= 0, `National support for ${partyId} must be non-negative`);
}
const supportTotal = seed_1.partyIds.reduce((sum, partyId) => sum + turn.state.nationalSupport[partyId], 0);
assert(Math.abs(supportTotal - 1) < 0.000001, `National support must sum to 1, got ${supportTotal}`);
assert(turn.briefing.actionEffects.some((note) => note.includes('Regionalni meeting')), 'Briefing should include CampaignActionV2 action note');
console.log('Campaign Actions v2 tests passed');
