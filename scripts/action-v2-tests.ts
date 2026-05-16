import { applyCampaignActionV2 } from '../src/game/actionEngine';
import { campaignActionsV2 } from '../src/game/campaignActionsV2';
import { computeNationalSupport, computeRegionalSupport, initializeComputedState, resolveTurn } from '../src/game/engine';
import { createInitialGameState, partyIds } from '../src/game/seed';
import type { CampaignActionCategory, CampaignActionLegality, GameState, PlannedAction } from '../src/game/types';

const validCategories = new Set<CampaignActionCategory>([
  'field',
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
const validLegalities = new Set<CampaignActionLegality>(['clean', 'gray', 'illegal']);

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function cloneState(state: GameState): GameState {
  return JSON.parse(JSON.stringify(state)) as GameState;
}

function planned(actionV2Id: string, patch: Partial<PlannedAction> = {}): PlannedAction {
  return {
    actionId: 'regionalRally',
    actionV2Id,
    id: `test-${actionV2Id}`,
    ...patch,
  };
}

assert(campaignActionsV2.length >= 30, `Expected at least 30 CampaignActionV2 entries, got ${campaignActionsV2.length}`);

const ids = new Set<string>();
for (const action of campaignActionsV2) {
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

const baseState = initializeComputedState(createInitialGameState());

const cleanState = cloneState(baseState);
const cleanBeforeOrganization = cleanState.partyRuntime.player.organization.ustecky ?? 0;
const cleanBeforeAuthenticity = cleanState.partyRuntime.player.reputation.authenticity;
const cleanResult = applyCampaignActionV2(cleanState, planned('regionalMeeting', { targetRegionId: 'ustecky' }));
assert(cleanResult.ok, 'Clean regionalMeeting should apply');
assert((cleanState.partyRuntime.player.organization.ustecky ?? 0) > cleanBeforeOrganization, 'Clean action should increase regional organization');
assert(cleanState.partyRuntime.player.reputation.authenticity > cleanBeforeAuthenticity, 'Clean action should improve authenticity');
assert((cleanState.partyRuntime.player.legalExposure ?? 0) === 0, 'Clean action should not create illegal legal exposure');

const analyticsState = cloneState(baseState);
const analyticsBeforeSupport = computeNationalSupport(analyticsState, computeRegionalSupport(analyticsState)).player;
const analyticsBeforeQuality = analyticsState.partyRuntime.player.informationQuality;
const analyticsResult = applyCampaignActionV2(analyticsState, planned('internalTrackingPoll', { targetRegionId: 'praha' }));
assert(analyticsResult.ok, 'Analytics action should apply');
assert(analyticsState.partyRuntime.player.informationQuality > analyticsBeforeQuality, 'Analytics action should increase informationQuality');
const analyticsAfterSupport = computeNationalSupport(analyticsState, computeRegionalSupport(analyticsState)).player;
assert(Math.abs(analyticsAfterSupport - analyticsBeforeSupport) < 0.002, 'Analytics action must not directly boost support');

const programState = cloneState(baseState);
const programBeforeSalience = programState.issueLayer.player.currentIssuePositions.housing.salience;
const programResult = applyCampaignActionV2(programState, planned('policyPackage', { targetProgramIssueId: 'housing' }));
assert(programResult.ok, 'Program action should apply');
assert(programState.issueLayer.player.currentIssuePositions.housing.salience > programBeforeSalience, 'Program action should change issue salience');
assert(programState.issueLayer.feedbackLog[0]?.title === 'Programovy balik', 'Program action should log issue feedback');
assert(typeof programState.partyRuntime.player.field.center8D?.econ === 'number', 'Program action should recalculate 8D player field');

const grayState = cloneState(baseState);
const grayBeforeRisk = grayState.partyRuntime.player.scandalRisk;
const grayResult = applyCampaignActionV2(grayState, planned('demobilizingNegativeNarrative'));
assert(grayResult.ok, 'Gray action should apply');
assert(grayState.partyRuntime.player.scandalRisk > grayBeforeRisk, 'Gray action should increase scandal risk');
assert(grayState.partyRuntime.player.reputation.integrity < baseState.partyRuntime.player.reputation.integrity, 'Gray action should damage integrity');
assert((grayState.turnoutModifiers ?? []).some((modifier) => modifier.kind === 'demobilization'), 'Gray demobilization should be stored as turnout preparation');

const blackOps = campaignActionsV2.filter((action) => action.category === 'blackOps');
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
const blackResult = applyCampaignActionV2(blackState, planned('fabricatedScandalAbstract'));
assert(blackResult.ok, 'BlackOps action should apply as a high-risk abstract mechanic');
assert(blackState.partyRuntime.player.reputation.integrity < blackBeforeIntegrity, 'BlackOps action should damage integrity');
assert((blackState.partyRuntime.player.legalExposure ?? 0) > 0.15, 'BlackOps action should raise legal exposure');
assert(blackState.scandals.some((scandal) => scandal.sourcePartyId === 'player'), 'BlackOps action should create detection/scandal exposure');

for (const state of [cleanState, analyticsState, programState, grayState, blackState]) {
  const runtime = state.partyRuntime.player;
  assert(runtime.cash >= 0, 'cash should remain clamped above zero');
  assert(runtime.leader.fatigue >= 0 && runtime.leader.fatigue <= 1, 'fatigue should remain clamped');
  assert(runtime.reputation.integrity >= 0 && runtime.reputation.integrity <= 1, 'integrity should remain clamped');
  assert(runtime.scandalRisk >= 0 && runtime.scandalRisk <= 1, 'scandalRisk should remain clamped');
}

const turn = resolveTurn(baseState, [
  planned('regionalMeeting', { targetRegionId: 'ustecky' }),
  planned('messageTesting'),
  planned('anonymousAmplificationAbstract'),
]);
for (const partyId of partyIds) {
  assert(Number.isFinite(turn.state.nationalSupport[partyId]), `National support for ${partyId} must be finite`);
  assert(turn.state.nationalSupport[partyId] >= 0, `National support for ${partyId} must be non-negative`);
}
const supportTotal = partyIds.reduce((sum, partyId) => sum + turn.state.nationalSupport[partyId], 0);
assert(Math.abs(supportTotal - 1) < 0.000001, `National support must sum to 1, got ${supportTotal}`);
assert(turn.briefing.actionEffects.some((note) => note.includes('Regionalni setkani')), 'Briefing should include CampaignActionV2 action note');

console.log('Campaign Actions v2 tests passed');
