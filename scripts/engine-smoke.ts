import { readFileSync } from 'node:fs';

import {
  acceptSponsor,
  answerCampaignTrip,
  answerDebateAttack,
  answerProgramMediaQuestion,
  answerQuestion,
  computeElectionResult,
  computeNationalSupport,
  computeRegionalSupport,
  initializeComputedState,
  respondToMediaAppearance,
  resolveTurn,
  updateProgramIssue,
} from '../src/game/engine';
import { mediaInvitationTemplates, mediaOutlets } from '../src/data/mediaOutlets';
import { mediaMiniGameQuestions } from '../src/data/mediaMiniGameQuestions';
import { calculatePartyOutletFit, mediaSentimentFromResult, resolveMediaAppearance, scoreMediaMiniGameAnswers, selectMediaMiniGameQuestions } from '../src/game/mediaEngine';
import { createInitialGameState, partyIds } from '../src/game/seed';
import type { GameState, MediaInvitation, PlannedAction } from '../src/game/types';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function roundRecord(state: GameState) {
  return {
    cash: state.partyRuntime.player.cash,
    integrity: state.partyRuntime.player.reputation.integrity,
    nationalSupport: state.nationalSupport,
    polls: state.polls,
    scandalRisk: state.partyRuntime.player.scandalRisk,
    seats: computeElectionResult(state).seats,
    week: state.week,
  };
}

function assertHealthyState(state: GameState) {
  assert(state.regions.length === 14, `Expected 14 regions, got ${state.regions.length}`);
  assert(state.segments.length >= 12, `Expected at least 12 segments, got ${state.segments.length}`);
  assert(state.partyRuntime.player.cash >= 0, 'Player cash must not be negative');

  for (const region of state.regions) {
    const support = state.regionalSupport[region.id];
    const sum = partyIds.reduce((total, partyId) => total + support[partyId], 0);
    assert(Math.abs(sum - 1) < 0.000001, `Regional support for ${region.id} must sum to 1, got ${sum}`);

    for (const partyId of partyIds) {
      const value = support[partyId];
      assert(Number.isFinite(value), `Support for ${partyId} in ${region.id} must be finite`);
      assert(value >= 0, `Support for ${partyId} in ${region.id} must not be negative`);
    }
  }
}

const baseState = initializeComputedState(createInitialGameState());
assertHealthyState(baseState);
for (const partyId of partyIds) {
  const field = baseState.partyRuntime[partyId].field;
  for (const dimension of ['econ', 'culture', 'authority', 'establishment', 'globalism', 'green', 'ukraine'] as const) {
    assert(typeof field.center8D?.[dimension] === 'number', `${partyId} must have center8D.${dimension}`);
    assert(typeof field.width8D?.[dimension] === 'number', `${partyId} must have width8D.${dimension}`);
    assert(typeof field.salience8D?.[dimension] === 'number', `${partyId} must have salience8D.${dimension}`);
  }
  assert(!('green_deal' in (field.center8D ?? {})), `${partyId} center8D must not contain legacy green_deal`);
  assert(!('green_deal' in (field.width8D ?? {})), `${partyId} width8D must not contain legacy green_deal`);
  assert(!('green_deal' in (field.salience8D ?? {})), `${partyId} salience8D must not contain legacy green_deal`);
}

const issueShifted = updateProgramIssue(baseState, 'greenDeal', { position: 2, salience: 4 });
assert(
  issueShifted.issueLayer.player.currentIssuePositions.greenDeal.position === 2,
  'Green Deal program issue changes must update the issue layer',
);
assert(issueShifted.issueLayer.player.programChangesThisWeek === 1, 'Program edit should consume one weekly edit point');
const issueEdit2 = updateProgramIssue(issueShifted, 'taxes', { salience: 3 });
const issueEdit3 = updateProgramIssue(issueEdit2, 'pensions', { salience: 3 });
const issueEditBlocked = updateProgramIssue(issueEdit3, 'migration', { salience: 4 });
assert(issueEditBlocked.issueLayer.player.programChangesThisWeek === 3, 'Program edits should cap at three per week');
assert(issueEditBlocked.issueLayer.player.currentIssuePositions.migration.salience !== 4, 'Fourth weekly program edit should be blocked');

const greenDealOpposed = updateProgramIssue(baseState, 'greenDeal', { position: -2, salience: 4 });
const greenDealSupportive = updateProgramIssue(baseState, 'greenDeal', { position: 2, salience: 4 });
const opposedSupport = computeNationalSupport(greenDealOpposed, computeRegionalSupport(greenDealOpposed)).player;
const supportiveSupport = computeNationalSupport(greenDealSupportive, computeRegionalSupport(greenDealSupportive)).player;
assert(Math.abs(opposedSupport - supportiveSupport) > 0.0001, 'Green Deal issue position must affect support through issue fit');

const mediaInvitation = baseState.mediaInvitations[0];
assert(mediaInvitation, 'Base state should have a media invitation');
const mediaBeforeReputation = { ...baseState.partyRuntime.player.reputation };
const mediaBeforeMomentum = baseState.partyRuntime.player.momentum;
const mediaBeforeSalience = baseState.issueLayer.player.currentIssuePositions[mediaInvitation.issueId ?? 'greenDeal']?.salience;
const mediaPending = respondToMediaAppearance(baseState, {
  action: 'accept',
  invitationId: mediaInvitation.id,
  preparationLevel: 'basic',
  speakerRole: 'leader',
});
const pendingMediaResult = mediaPending.pendingMediaEffects?.[0];
assert(pendingMediaResult?.status === 'pending', 'Media response should store a pending media effect');
assert(
  pendingMediaResult.sentimentRating !== undefined && pendingMediaResult.sentimentRating >= 1 && pendingMediaResult.sentimentRating <= 5,
  'Pending media result should expose sentimentRating 1-5',
);
assert((mediaPending.mediaClusterModifiers ?? []).length === (baseState.mediaClusterModifiers ?? []).length, 'Media response must not immediately add cluster modifiers');
assert(mediaPending.partyRuntime.player.reputation.trust === mediaBeforeReputation.trust, 'Media response must not immediately apply reputationDelta');
assert(mediaPending.partyRuntime.player.momentum === mediaBeforeMomentum, 'Media response must not immediately apply momentum');
assert(JSON.stringify(mediaPending.nationalSupport) === JSON.stringify(baseState.nationalSupport), 'Media response must not immediately recompute support');
assert(
  mediaPending.issueLayer.player.currentIssuePositions[mediaInvitation.issueId ?? 'greenDeal']?.salience === mediaBeforeSalience,
  'Media response must not immediately apply issue salience',
);
const mediaResolved = resolveTurn(mediaPending, [], 99).state;
assert((mediaResolved.pendingMediaEffects ?? []).length === 0, 'resolveTurn should clear pending media effects');
assert(
  mediaResolved.mediaAppearanceResults?.some((result) => result.invitationId === mediaInvitation.id && result.status === 'applied'),
  'resolveTurn should mark pending media effect as applied in results',
);
assert(
  (mediaResolved.mediaClusterModifiers ?? []).length > (baseState.mediaClusterModifiers ?? []).length ||
    mediaResolved.partyRuntime.player.reputation.trust !== mediaBeforeReputation.trust ||
    mediaResolved.partyRuntime.player.momentum !== mediaBeforeMomentum,
  'resolveTurn should apply pending media effects before support recomputation',
);
assert(
  !readFileSync('src/components/media/MediaInvitationCard.tsx', 'utf8').includes('supportDelta'),
  'Immediate media UI must not show exact support deltas',
);
const mediaCardSource = readFileSync('src/components/media/MediaInvitationCard.tsx', 'utf8');
assert(mediaCardSource.includes('minigameStarted'), 'Media card should not start minigame before explicit accept');
assert(mediaCardSource.includes("action: 'decline'"), 'Decline should remain available before minigame starts');
assert(mediaCardSource.includes('currentQuestion = minigameStarted'), 'Timed questions should start only after minigame starts');
assert(mediaCardSource.includes('result.programWarning'), 'Program warnings should render separately from sentiment text');
assert(
  mediaCardSource.includes('ChipGroup') && mediaCardSource.includes('Problem') && mediaCardSource.includes('Hodnota') && mediaCardSource.includes('Reseni'),
  'soundbite_builder should use real chip UI',
);
assert(mediaCardSource.includes('housing: { housing: 1.2 }'), 'Housing soundbite should use housing-specific chips');
assert(mediaCardSource.includes('taxes: { taxes: 1.2 }'), 'Tax soundbite low-tax solution should imply positive taxes position');
assert(mediaCardSource.includes('migration: { migration: 0.8 }') && mediaCardSource.includes('nationalSovereignty'), 'Soundbite builder should include topic-specific political chips beyond generic rhetoric');

const publicDebateOutlet = mediaOutlets.find((outlet) => outlet.id === 'public_tv_main_debate');
const toxicOutlet = mediaOutlets.find((outlet) => outlet.id === 'anti_establishment_channel');
const foreignPropagandaOutlet = mediaOutlets.find((outlet) => outlet.id === 'foreign_propaganda_channel');
const progressiveOutlet = mediaOutlets.find((outlet) => outlet.id === 'progressive_activist_magazine');
const regionalOutlet = mediaOutlets.find((outlet) => outlet.id === 'regional_radio');
assert(publicDebateOutlet && toxicOutlet && foreignPropagandaOutlet && progressiveOutlet && regionalOutlet, 'Expected media outlets for decline and fit tests');
const highReachDebate = testInvitation('decline-high', publicDebateOutlet.id, 'taxes', 'debate', 0.82, 0.62, 'three_questions_timed');
const lowReachRegional = testInvitation('decline-low', regionalOutlet.id, 'energyPrices', 'regional', 0.18, 0.2, null);
const toxicPodcast = testInvitation('decline-toxic', toxicOutlet.id, 'nationalSovereignty', 'podcast', 0.35, 0.86, 'hostile_interview');
const declineState = initializeComputedState({
  ...baseState,
  mediaInvitations: [highReachDebate, lowReachRegional, toxicPodcast],
});
const highDecline = respondToMediaAppearance(declineState, { action: 'decline', invitationId: highReachDebate.id, preparationLevel: 'none' });
const lowDecline = respondToMediaAppearance(declineState, { action: 'decline', invitationId: lowReachRegional.id, preparationLevel: 'none' });
const toxicDecline = respondToMediaAppearance(declineState, { action: 'decline', invitationId: toxicPodcast.id, preparationLevel: 'none' });
const highDeclineResult = highDecline.pendingMediaEffects?.[0];
const lowDeclineResult = lowDecline.pendingMediaEffects?.[0];
const toxicDeclineResult = toxicDecline.pendingMediaEffects?.[0];
assert(highDeclineResult?.sentimentLabel === 'Odmítnuto', 'Declined media should show a declined sentiment label');
assert(highDeclineResult.sentimentRating !== 1, 'Declined media should not automatically show 1/5 Prusvih');
assert(
  Math.abs(highDeclineResult.partyMomentumDelta) > Math.abs(lowDeclineResult?.partyMomentumDelta ?? 0),
  'High-reach debate decline should carry stronger pending penalty than low-reach decline',
);
assert(
  (toxicDeclineResult?.partyMomentumDelta ?? -1) >= (lowDeclineResult?.partyMomentumDelta ?? 0),
  'Toxic outlet decline should be neutral or defensible',
);
const antiSovereigntyResult = resolveMediaAppearance(
  { action: 'accept', invitationId: 'anti-sovereignty-impact', preparationLevel: 'basic', speakerRole: 'controversialFigure' },
  initializeComputedState({
    ...baseState,
    mediaInvitations: [testInvitation('anti-sovereignty-impact', toxicOutlet.id, 'nationalSovereignty', 'podcast', 0.35, 0.86, null)],
  }),
);
const antiHealthcareResult = resolveMediaAppearance(
  { action: 'accept', invitationId: 'anti-healthcare-impact', preparationLevel: 'basic', speakerRole: 'controversialFigure' },
  initializeComputedState({
    ...baseState,
    mediaInvitations: [testInvitation('anti-healthcare-impact', toxicOutlet.id, 'healthcare', 'podcast', 0.35, 0.86, null)],
  }),
);
const antiClusterImpact = antiSovereigntyResult.clusterImpacts.find((impact) => impact.clusterId === 'anti_establishment_online');
const protestClusterImpact = antiSovereigntyResult.clusterImpacts.find((impact) => impact.clusterId === 'working_class_protest');
const liberalClusterImpact = antiSovereigntyResult.clusterImpacts.find((impact) => impact.clusterId === 'urban_liberal_professionals');
assert(antiClusterImpact && protestClusterImpact && liberalClusterImpact, 'Expected anti-establishment channel cluster impacts');
assert(antiClusterImpact.impact > 0 || protestClusterImpact.impact > 0, 'Anti-establishment channel should be able to help its protest audience');
assert(liberalClusterImpact.impact < antiClusterImpact.impact, 'Anti-establishment channel should create backlash or weaker response among liberal/pro-establishment clusters');
assert(liberalClusterImpact.controversyPenalty !== antiClusterImpact.controversyPenalty, 'Low-audience backlash should not equal main-audience controversy effect');
const antiSovereigntyInAudience = antiClusterImpact.impact + (protestClusterImpact?.impact ?? 0);
const antiHealthcareInAudience =
  (antiHealthcareResult.clusterImpacts.find((impact) => impact.clusterId === 'anti_establishment_online')?.impact ?? 0) +
  (antiHealthcareResult.clusterImpacts.find((impact) => impact.clusterId === 'working_class_protest')?.impact ?? 0);
assert(antiSovereigntyInAudience > antiHealthcareInAudience, 'Anti-establishment channel should have stronger in-audience impact for sovereignty than unrelated expert issues');

const nationalistAntiSystemCenter = {
  authority: 0.55,
  culture: 0.65,
  econ: -0.15,
  establishment: -0.86,
  globalism: -0.68,
  green: -0.45,
  ukraine: -0.55,
};
const progressiveCenter = {
  authority: -0.58,
  culture: -0.78,
  econ: -0.18,
  establishment: 0.18,
  globalism: 0.78,
  green: 0.78,
  ukraine: 0.75,
};
const spdLikeState = stateWithPlayerCenter(baseState, nationalistAntiSystemCenter);
const pirateLikeState = stateWithPlayerCenter(baseState, progressiveCenter);
const spdAntiFit = calculatePartyOutletFit(spdLikeState, toxicOutlet, 'player');
const pirateAntiFit = calculatePartyOutletFit(pirateLikeState, toxicOutlet, 'player');
const spdPublicFit = calculatePartyOutletFit(spdLikeState, publicDebateOutlet, 'player');
const spdProgressiveFit = calculatePartyOutletFit(spdLikeState, progressiveOutlet, 'player');
const pirateProgressiveFit = calculatePartyOutletFit(pirateLikeState, progressiveOutlet, 'player');
const pirateForeignFit = calculatePartyOutletFit(pirateLikeState, foreignPropagandaOutlet, 'player');
const spdForeignFit = calculatePartyOutletFit(spdLikeState, foreignPropagandaOutlet, 'player');
assert(spdAntiFit.scandalRisk < 0.62, 'SPD-like party in PL-like anti-establishment channel should not be scandalous solely from outlet controversy');
assert(spdAntiFit.baseFit > pirateAntiFit.baseFit, 'PL-like anti-establishment channel should fit nationalist anti-system base better than progressive base');
assert(spdPublicFit.baseAlienationRisk < 0.25, 'Public TV mainstream legitimacy should suppress anti-system base alienation');
assert(spdProgressiveFit.baseAlienationRisk > spdAntiFit.baseAlienationRisk, 'SPD-like party in progressive activist outlet should create base alienation');
assert(spdProgressiveFit.scandalRisk < 0.45, 'Low-toxicity progressive activist outlet should not automatically become a global scandal');
assert(pirateProgressiveFit.baseAlienationRisk < spdProgressiveFit.baseAlienationRisk, 'Progressive party should be a natural fit for progressive activist outlet');
assert(pirateAntiFit.baseAlienationRisk > pirateProgressiveFit.baseAlienationRisk, 'Progressive party in PL-like outlet should create base alienation/mismatch');
assert(pirateAntiFit.scandalRisk < pirateForeignFit.scandalRisk, 'PL-like outlet should be less scandalous than Sputnik-like toxic outlet for progressive party');
assert(spdForeignFit.scandalRisk > 0.62 && pirateForeignFit.scandalRisk > 0.62, 'Sputnik-like toxic outlet should produce high scandal risk across party types');

const spdAntiInvitation = testInvitation('spd-anti-fit', toxicOutlet.id, 'nationalSovereignty', 'podcast', 0.35, 0.86, null);
const spdAntiPendingState = initializeComputedState({ ...spdLikeState, mediaInvitations: [spdAntiInvitation] });
const spdAntiPending = respondToMediaAppearance(spdAntiPendingState, {
  action: 'accept',
  invitationId: spdAntiInvitation.id,
  preparationLevel: 'basic',
  speakerRole: 'controversialFigure',
});
const spdAntiPendingResult = spdAntiPending.pendingMediaEffects?.[0];
assert(spdAntiPendingResult?.status === 'pending', 'Party-outlet fit media effects should still be pending');
assert(JSON.stringify(spdAntiPending.nationalSupport) === JSON.stringify(spdAntiPendingState.nationalSupport), 'Party-outlet fit media should not change support immediately');
const spdAntiImpact = spdAntiPendingResult.clusterImpacts.find((impact) => impact.clusterId === 'anti_establishment_online');
const spdWorkingImpact = spdAntiPendingResult.clusterImpacts.find((impact) => impact.clusterId === 'working_class_protest');
const spdLiberalImpact = spdAntiPendingResult.clusterImpacts.find((impact) => impact.clusterId === 'urban_liberal_professionals');
assert((spdAntiImpact?.impact ?? -1) > 0 || (spdWorkingImpact?.impact ?? -1) > 0, 'SPD-like party in PL-like outlet should be able to help anti-system/protest audience');
assert((spdLiberalImpact?.impact ?? 1) < (spdAntiImpact?.impact ?? 0), 'PL-like outlet should still hurt or underperform among liberal/pro-institutional clusters');
const spdAntiResolved = resolveTurn(spdAntiPending, [], 321).state;
assert(
  !spdAntiResolved.scandals.some((scandal) => scandal.id.includes(spdAntiInvitation.id)),
  'SPD-like party in PL-like outlet should not automatically create a media scandal from controversy alone',
);

const spdPublicInvitation = testInvitation('spd-public-fit', publicDebateOutlet.id, 'taxes', 'debate', 0.82, 0.62, null);
const spdPublicPending = respondToMediaAppearance(initializeComputedState({ ...spdLikeState, mediaInvitations: [spdPublicInvitation] }), {
  action: 'accept',
  invitationId: spdPublicInvitation.id,
  preparationLevel: 'basic',
  speakerRole: 'leader',
});
assert(!spdPublicPending.pendingMediaEffects?.[0]?.mediaRiskWarnings?.baseAlienation, 'Public TV should not warn about core alienation solely because anti-system voters distrust it');

const spdProgressiveInvitation = testInvitation('spd-progressive-fit', progressiveOutlet.id, 'climate', 'podcast', 0.28, 0.46, null);
const spdProgressivePending = respondToMediaAppearance(initializeComputedState({ ...spdLikeState, mediaInvitations: [spdProgressiveInvitation] }), {
  action: 'accept',
  invitationId: spdProgressiveInvitation.id,
  preparationLevel: 'basic',
  speakerRole: 'leader',
});
const spdProgressiveResult = spdProgressivePending.pendingMediaEffects?.[0];
assert(spdProgressiveResult?.mediaRiskWarnings?.baseAlienation, 'SPD-like party in Alarm-like outlet should warn about base alienation');
const spdProgressiveResolved = resolveTurn(spdProgressivePending, [], 322).state;
assert(
  (spdProgressiveResolved.mediaClusterModifiers ?? []).some((modifier) => ['anti_establishment_online', 'working_class_protest', 'rural_conservatives'].includes(modifier.clusterId) && modifier.amount < 0),
  'Alarm-like mismatch should create negative delayed modifiers among nationalist/anti-system base clusters',
);
assert(
  !spdProgressiveResolved.scandals.some((scandal) => scandal.id.includes(spdProgressiveInvitation.id)),
  'Low-toxicity Alarm-like mismatch should not necessarily create a global scandal',
);

const pirateProgressiveInvitation = testInvitation('pirate-progressive-fit', progressiveOutlet.id, 'climate', 'podcast', 0.28, 0.46, null);
const pirateProgressiveResult = resolveMediaAppearance(
  { action: 'accept', invitationId: pirateProgressiveInvitation.id, preparationLevel: 'basic', speakerRole: 'leader' },
  initializeComputedState({ ...pirateLikeState, mediaInvitations: [pirateProgressiveInvitation] }),
);
assert(!pirateProgressiveResult.mediaRiskWarnings?.baseAlienation, 'Pirate-like party in Alarm-like outlet should be low-risk/natural fit');

const pirateAntiInvitation = testInvitation('pirate-anti-fit', toxicOutlet.id, 'nationalSovereignty', 'podcast', 0.35, 0.86, null);
const pirateAntiResult = resolveMediaAppearance(
  { action: 'accept', invitationId: pirateAntiInvitation.id, preparationLevel: 'basic', speakerRole: 'leader' },
  initializeComputedState({ ...pirateLikeState, mediaInvitations: [pirateAntiInvitation] }),
);
assert(pirateAntiResult.mediaRiskWarnings?.baseAlienation || pirateAntiResult.mediaRiskWarnings?.mismatch, 'Pirate-like party in PL-like outlet should warn about base alienation or mismatch');
assert(!pirateAntiResult.mediaRiskWarnings?.toxicScandal, 'PL-like outlet should not be treated as a Sputnik-like toxic scandal by default');

const foreignInvitation = testInvitation('foreign-toxic-fit', foreignPropagandaOutlet.id, 'nationalSovereignty', 'podcast', 0.24, 0.9, null);
const foreignResult = resolveMediaAppearance(
  { action: 'accept', invitationId: foreignInvitation.id, preparationLevel: 'basic', speakerRole: 'leader' },
  initializeComputedState({ ...spdLikeState, mediaInvitations: [foreignInvitation] }),
);
const foreignCenterImpact = foreignResult.clusterImpacts.find((impact) => impact.clusterId === 'centrist_swing_voters');
const foreignLiberalImpact = foreignResult.clusterImpacts.find((impact) => impact.clusterId === 'urban_liberal_professionals');
const foreignAntiImpact = foreignResult.clusterImpacts.find((impact) => impact.clusterId === 'anti_establishment_online');
assert(foreignResult.mediaRiskWarnings?.toxicScandal, 'Sputnik-like toxic outlet should warn about reputational scandal risk');
assert((foreignCenterImpact?.controversyPenalty ?? 0) > (foreignAntiImpact?.controversyPenalty ?? 1) * 0.6, 'Sputnik-like toxicity should spill over into center/pro-institutional backlash');
assert((foreignLiberalImpact?.impact ?? 1) < (foreignAntiImpact?.impact ?? 0), 'Sputnik-like backlash should hit liberal/pro-institutional clusters harder than hard anti-system audience');
const foreignResolved = resolveTurn(
  respondToMediaAppearance(initializeComputedState({ ...spdLikeState, mediaInvitations: [foreignInvitation] }), {
    action: 'accept',
    invitationId: foreignInvitation.id,
    preparationLevel: 'basic',
    speakerRole: 'leader',
  }),
  [],
  323,
).state;
assert(
  foreignResolved.scandals.some((scandal) => scandal.id.includes(foreignInvitation.id)),
  'Sputnik-like toxic outlet should create high media scandal risk after delayed application',
);

const hostileQuestions = selectMediaMiniGameQuestions(highReachDebate, publicDebateOutlet, declineState);
assert(hostileQuestions.length === 3, 'three_questions_timed should select three questions');
assert(hostileQuestions.every((question) => question.topicId === 'taxes' || question.timeLimitSec), 'Selected questions should match topic/format risk');
assert(hostileQuestions.every((question) => (question.timeLimitSec ?? 0) >= 10 && (question.timeLimitSec ?? 0) <= 18), 'Timed debate questions should have 10-18 second limits');
assert(hostileQuestions.every((question) => !question.isGenericFallback), 'Generic fallback should not be used when topic-specific tax questions are available');
assert(
  hostileQuestions.every((question) => question.topicId === 'taxes' || question.isGenericFallback),
  'Taxes invitation must not receive unrelated off-topic fallback questions',
);
assert(
  mediaMiniGameQuestions.some((question) => question.topicId === 'taxes' && question.questionKind === 'budget_constraint'),
  'Tax questions should include a budget_constraint probe',
);
assert(
  mediaMiniGameQuestions.some((question) => question.topicId === 'taxes' && question.questionKind === 'coherence_trap'),
  'Tax questions should include a coherence_trap probe',
);
const taxFundingQuestion = mediaMiniGameQuestions.find((question) => question.id === 'taxes-funding-source');
const taxBeneficiaryQuestion = mediaMiniGameQuestions.find((question) => question.id === 'taxes-beneficiaries-first');
const taxCoherenceQuestion = mediaMiniGameQuestions.find((question) => question.id === 'taxes-service-promise-trap');
const taxPositionQuestion = mediaMiniGameQuestions.find((question) => question.id === 'taxes-position-direct');
assert(taxFundingQuestion && taxBeneficiaryQuestion && taxCoherenceQuestion, 'Expected realistic tax trade-off questions');
const fundedTaxAnswer = taxFundingQuestion.options.find((answer) => answer.id === 'spending-cuts');
const unfundedTaxAnswer = taxBeneficiaryQuestion.options.find((answer) => answer.id === 'everyone');
const coherentTaxAnswer = taxCoherenceQuestion.options.find((answer) => answer.id === 'services-first');
const populistTaxAnswer = taxCoherenceQuestion.options.find((answer) => answer.id === 'everything-now');
const lowTaxAnswer = taxPositionQuestion?.options.find((answer) => answer.id === 'lower');
const highRevenueAnswer = taxPositionQuestion?.options.find((answer) => answer.id === 'higher');
const sectorTaxAnswer = taxFundingQuestion.options.find((answer) => answer.id === 'property-sector-taxes');
assert(fundedTaxAnswer && unfundedTaxAnswer && coherentTaxAnswer && populistTaxAnswer && taxPositionQuestion && lowTaxAnswer && highRevenueAnswer && sectorTaxAnswer, 'Expected tax trade-off answers');
assert((lowTaxAnswer.impliedIssuePosition?.taxes ?? 0) > 0, 'Low-tax answer should imply positive taxes position');
assert((highRevenueAnswer.impliedIssuePosition?.taxes ?? 0) < 0, 'Higher-revenue answer should imply negative taxes position');
assert((sectorTaxAnswer.impliedIssuePosition?.taxes ?? 0) < 0, 'Property/sector tax answer should not imply low-tax economics');
assert((lowTaxAnswer.impliedAxisPosition?.econ ?? 0) > 0, 'Low-tax answer should imply econ-right axis');
assert((highRevenueAnswer.impliedAxisPosition?.econ ?? 0) < 0, 'Higher-revenue answer should imply econ-left axis');
const lowTaxProgramState = updateProgramIssue(baseState, 'taxes', { position: 2, salience: 4 });
const taxFactQuestion = mediaMiniGameQuestions.find((question) => question.id === 'taxes-fact-deficit-debt');
const correctFactAnswer = taxFactQuestion?.options.find((answer) => answer.id === 'deficit-flow-debt-stock');
const wrongFactAnswer = taxFactQuestion?.options.find((answer) => answer.id === 'same-thing');
const honestFactAnswer = taxFactQuestion?.options.find((answer) => answer.id === 'not-exact');
assert(taxFactQuestion && correctFactAnswer && wrongFactAnswer && honestFactAnswer, 'Expected factual tax question answers');
const correctFactScore = scoreMediaMiniGameAnswers([correctFactAnswer], [taxFactQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'expert',
  state: declineState,
});
const wrongFactScore = scoreMediaMiniGameAnswers([wrongFactAnswer], [taxFactQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
const honestFactScore = scoreMediaMiniGameAnswers([honestFactAnswer], [taxFactQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
assert((correctFactScore.answerQualityScore ?? 0) > (wrongFactScore.answerQualityScore ?? 0), 'Factually correct answer should score better than a wrong answer');
assert((correctFactScore.competenceAdjustment ?? 0) > (wrongFactScore.competenceAdjustment ?? 0), 'Factually correct answer should improve competence relative to a wrong answer');
assert((honestFactScore.answerQualityScore ?? 0) > (wrongFactScore.answerQualityScore ?? 0), 'Honest uncertainty should beat confident false factual claims');
assert((wrongFactScore.answerQualityScore ?? 0) < 0.35, 'Wrong factual answer should not become good just because it fits ideology');
const fundedTaxScore = scoreMediaMiniGameAnswers([fundedTaxAnswer], [taxFundingQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'expert',
  state: declineState,
});
const unfundedTaxScore = scoreMediaMiniGameAnswers([unfundedTaxAnswer], [taxBeneficiaryQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: declineState,
});
assert(
  (unfundedTaxScore.fiscalCredibilityScore ?? 0) < (fundedTaxScore.fiscalCredibilityScore ?? 0) &&
    (unfundedTaxScore.competenceAdjustment ?? 0) < (fundedTaxScore.competenceAdjustment ?? 0),
  'Tax cuts for everyone without funding should score worse on fiscal credibility and competence than a funded answer',
);
const lightOutlet = mediaOutlets.find((outlet) => outlet.id === 'youth_creator_stream');
assert(lightOutlet, 'Expected youth creator outlet');
const vagueFiscalSerious = scoreMediaMiniGameAnswers([taxFundingQuestion.options.find((answer) => answer.id === 'growth-pays') ?? taxFundingQuestion.options[0]], [taxFundingQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: declineState,
});
const vagueFiscalLight = scoreMediaMiniGameAnswers([taxFundingQuestion.options.find((answer) => answer.id === 'growth-pays') ?? taxFundingQuestion.options[0]], [taxFundingQuestion], {
  invitation: testInvitation('light-tax', lightOutlet.id, 'taxes', 'influencer', 0.38, 0.28, 'informal_qna'),
  outlet: lightOutlet,
  speakerRole: 'newFace',
  state: declineState,
});
assert(vagueFiscalSerious.performanceMultiplier < vagueFiscalLight.performanceMultiplier, 'Serious outlets should penalize vague fiscal answers more than light formats');
const coherentTaxScore = scoreMediaMiniGameAnswers([coherentTaxAnswer], [taxCoherenceQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'expert',
  state: declineState,
});
const populistTaxScore = scoreMediaMiniGameAnswers([populistTaxAnswer], [taxCoherenceQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: declineState,
});
assert(coherentTaxScore.performanceMultiplier > populistTaxScore.performanceMultiplier, 'Coherent trade-off answer should score better than populist vague answer');
const lowTaxProgramDebate = testInvitation('tax-commitment-direction', publicDebateOutlet.id, 'taxes', 'debate', 0.82, 0.62, 'three_questions_timed');
const lowTaxAlignedScore = scoreMediaMiniGameAnswers([lowTaxAnswer], [taxPositionQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
const highTaxMismatchScore = scoreMediaMiniGameAnswers([highRevenueAnswer], [taxPositionQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
assert((lowTaxAlignedScore.programMismatchPenalty ?? 0) < 0.01, 'Low-tax answer should fit a high positive taxes program position');
assert((highTaxMismatchScore.programMismatchPenalty ?? 0) > (lowTaxAlignedScore.programMismatchPenalty ?? 0), 'High-tax answer should mismatch a high positive taxes program position');
assert((lowTaxAlignedScore.answerQualityScore ?? 0) > (highTaxMismatchScore.answerQualityScore ?? 0), 'Low-tax answer should score higher for low-tax/right-wing program');
const redistributiveProgramState = updateProgramIssue(updateProgramIssue(baseState, 'taxes', { position: -2, salience: 4 }), 'redistribution', { position: 2, salience: 3 });
const lowTaxMismatchLeftScore = scoreMediaMiniGameAnswers([lowTaxAnswer], [taxPositionQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: redistributiveProgramState,
});
const highTaxAlignedLeftScore = scoreMediaMiniGameAnswers([highRevenueAnswer], [taxPositionQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: redistributiveProgramState,
});
assert((highTaxAlignedLeftScore.answerQualityScore ?? 0) > (lowTaxMismatchLeftScore.answerQualityScore ?? 0), 'Redistributive answer should score higher for left/redistributive program');
const soundbiteLowTaxSolution = {
  answerType: 'explanation' as const,
  commitmentStrength: 0.58,
  id: 'solution-plan',
  impliedIssuePosition: { taxes: 1.2 },
  label: 'Plan',
  performanceDelta: 0.045,
  text: 'Ukazeme tri konkretni kroky a termin.',
  tone: 'specific' as const,
};
const soundbiteLowTaxFit = scoreMediaMiniGameAnswers([soundbiteLowTaxSolution], [taxPositionQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
const soundbiteLowTaxMismatch = scoreMediaMiniGameAnswers([soundbiteLowTaxSolution], [taxPositionQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: redistributiveProgramState,
});
assert((soundbiteLowTaxFit.answerQualityScore ?? 0) > (soundbiteLowTaxMismatch.answerQualityScore ?? 0), 'Soundbite score should depend on program fit, not only generic chip quality');
const taxMismatchPending = respondToMediaAppearance(
  initializeComputedState({
    ...lowTaxProgramState,
    mediaInvitations: [lowTaxProgramDebate],
  }),
  {
    action: 'accept',
    invitationId: lowTaxProgramDebate.id,
    miniGameResult: highTaxMismatchScore,
    preparationLevel: 'basic',
    speakerRole: 'leader',
  },
);
assert(
  taxMismatchPending.issueLayer.player.currentIssuePositions.taxes.position === lowTaxProgramState.issueLayer.player.currentIssuePositions.taxes.position,
  'Tax program commitment effects must not apply immediately',
);
const taxMismatchResolved = resolveTurn(taxMismatchPending, [], 114).state;
assert(
  taxMismatchResolved.issueLayer.player.currentIssuePositions.taxes.position < lowTaxProgramState.issueLayer.player.currentIssuePositions.taxes.position,
  'High-tax media commitment should shift taxes position downward after resolveTurn',
);
const taxProgramConsistencyQuestion = mediaMiniGameQuestions.find((question) => question.id === 'taxes-program-lower-and-spend');
const taxProgramAlignedAnswer = taxProgramConsistencyQuestion?.options.find((answer) => answer.id === 'tax-cuts-after-savings');
const taxProgramContradictAnswer = taxProgramConsistencyQuestion?.options.find((answer) => answer.id === 'spending-first-clarify');
const taxProgramEvasiveAnswer = taxProgramConsistencyQuestion?.options.find((answer) => answer.id === 'avoid-program-detail');
assert(taxProgramConsistencyQuestion && taxProgramAlignedAnswer && taxProgramContradictAnswer && taxProgramEvasiveAnswer, 'Expected tax program consistency question');
const taxProgramAlignedScore = scoreMediaMiniGameAnswers([taxProgramAlignedAnswer], [taxProgramConsistencyQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
const taxProgramContradictScore = scoreMediaMiniGameAnswers([taxProgramContradictAnswer], [taxProgramConsistencyQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
const taxProgramEvasiveScore = scoreMediaMiniGameAnswers([taxProgramEvasiveAnswer], [taxProgramConsistencyQuestion], {
  invitation: lowTaxProgramDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: lowTaxProgramState,
});
assert((taxProgramAlignedScore.programMismatchPenalty ?? 0) < 0.01, 'Program-consistency answer aligned with current program should not create mismatch');
assert((taxProgramContradictScore.programMismatchPenalty ?? 0) > (taxProgramAlignedScore.programMismatchPenalty ?? 0), 'Contradicting program-consistency answer should create mismatch');
assert(taxProgramEvasiveScore.performanceMultiplier < taxProgramAlignedScore.performanceMultiplier, 'Evasive program-consistency answer should lower performance');
assert((taxProgramEvasiveScore.impliedProgramEffects ?? []).length === 0, 'Evasive program-consistency answer should not shift issue position');
const growthPaysAnswer = taxFundingQuestion.options.find((answer) => answer.id === 'growth-pays');
assert(growthPaysAnswer, 'Expected vague growth-pays tax answer');
const fiscallyWeakScore = scoreMediaMiniGameAnswers([growthPaysAnswer], [taxFundingQuestion], {
  invitation: highReachDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: declineState,
});
const fiscalReputationState = initializeComputedState({
  ...baseState,
  mediaInvitations: [highReachDebate],
});
const fiscalCompetenceBefore = fiscalReputationState.partyRuntime.player.reputation.competence;
const fiscalPending = respondToMediaAppearance(fiscalReputationState, {
  action: 'accept',
  invitationId: highReachDebate.id,
  miniGameResult: fiscallyWeakScore,
  preparationLevel: 'basic',
  speakerRole: 'leader',
});
assert(fiscalPending.partyRuntime.player.reputation.competence === fiscalCompetenceBefore, 'Fiscal/competence minigame reputation effects must not apply immediately');
const fiscalResolved = resolveTurn(fiscalPending, [], 115).state;
const fiscalCompetenceDelta = fiscalResolved.partyRuntime.player.reputation.competence - fiscalCompetenceBefore;
assert(fiscalCompetenceDelta < 0, 'Fiscally weak answer in a serious outlet should reduce competence after resolveTurn');
assert(Math.abs(fiscalCompetenceDelta) <= 0.03, `Delayed fiscal competence effect should stay small, got ${fiscalCompetenceDelta}`);
const goodSentimentResult = resolveMediaAppearance(
  { action: 'accept', invitationId: highReachDebate.id, miniGameResult: fundedTaxScore, preparationLevel: 'basic', speakerRole: 'expert' },
  declineState,
);
const badSentimentResult = resolveMediaAppearance(
  { action: 'accept', invitationId: highReachDebate.id, miniGameResult: populistTaxScore, preparationLevel: 'basic', speakerRole: 'expert' },
  declineState,
);
assert((goodSentimentResult.sentimentScore ?? goodSentimentResult.successScore) > (badSentimentResult.sentimentScore ?? badSentimentResult.successScore), 'Good minigame answers should produce better immediate sentiment score than vague/populist answers');
assert((mediaSentimentFromResult(badSentimentResult).rating ?? 5) < 4, 'High-reach debate with bad answers can score below 4/5 sentiment');
const mediumOutletForSentiment = mediaOutlets.find((outlet) => outlet.id === 'business_podcast');
assert(mediumOutletForSentiment, 'Expected business podcast for sentiment test');
const mediumSentimentInvitation = testInvitation('medium-excellent-sentiment', mediumOutletForSentiment.id, 'taxes', 'podcast', 0.31, 0.32, 'long_form');
const excellentMediumScore = scoreMediaMiniGameAnswers([correctFactAnswer, fundedTaxAnswer], [taxFactQuestion, taxFundingQuestion], {
  invitation: mediumSentimentInvitation,
  outlet: mediumOutletForSentiment,
  speakerRole: 'expert',
  state: declineState,
});
const excellentMediumResult = resolveMediaAppearance(
  { action: 'accept', invitationId: mediumSentimentInvitation.id, miniGameResult: excellentMediumScore, preparationLevel: 'strong', speakerRole: 'expert' },
  initializeComputedState({
    ...baseState,
    mediaInvitations: [mediumSentimentInvitation],
  }),
);
assert((mediaSentimentFromResult(excellentMediumResult).rating ?? 0) > 3, 'Medium outlet with excellent answers can score above 3/5 sentiment');
for (const templateTopic of new Set(mediaInvitationTemplates.map((template) => template.topicId))) {
  const topicQuestions = mediaMiniGameQuestions.filter((question) => question.topicId === templateTopic && !question.isGenericFallback);
  assert(topicQuestions.length >= 3, `Media invitation topic ${templateTopic} should have at least three topic-specific minigame questions`);
}
const genericOnlyInvitation = testInvitation('generic-only', 'serious_newspaper_interview', 'civilServiceReform', 'interview', 0.42, 0.3, 'short_interview');
const seriousNewspaper = mediaOutlets.find((outlet) => outlet.id === 'serious_newspaper_interview');
assert(seriousNewspaper, 'Expected serious newspaper outlet');
const genericOnlyQuestions = selectMediaMiniGameQuestions(genericOnlyInvitation, seriousNewspaper, declineState);
assert(
  genericOnlyQuestions.every((question) => question.topicId === 'civilServiceReform' && question.isGenericFallback),
  'When topic-specific questions are missing, selector should return generic fallback only',
);
const civilServiceLabel = declineState.issueLayer.issues.find((issue) => issue.id === 'civilServiceReform')?.shortName;
assert(civilServiceLabel, 'Expected civil service issue label');
assert(
  genericOnlyQuestions.every((question) => question.prompt.includes(civilServiceLabel)),
  'Generic fallback prompt should be adapted to the invitation topic',
);
assert(
  genericOnlyQuestions.every((question) => !question.prompt.includes('taxes')),
  'Generic fallback tax placeholder must not leak into non-tax invitations',
);

const longFormInvitation = testInvitation('long-form', 'business_podcast', 'taxes', 'podcast', 0.31, 0.32, 'long_form');
const businessPodcast = mediaOutlets.find((outlet) => outlet.id === 'business_podcast');
assert(businessPodcast, 'Expected business podcast outlet');
const businessTaxAffinity = resolveMediaAppearance(
  { action: 'accept', invitationId: 'business-tax-affinity', preparationLevel: 'basic', speakerRole: 'expert' },
  initializeComputedState({
    ...baseState,
    mediaInvitations: [testInvitation('business-tax-affinity', businessPodcast.id, 'taxes', 'podcast', 0.31, 0.32, null)],
  }),
);
const businessUnrelatedAffinity = resolveMediaAppearance(
  { action: 'accept', invitationId: 'business-unrelated-affinity', preparationLevel: 'basic', speakerRole: 'expert' },
  initializeComputedState({
    ...baseState,
    mediaInvitations: [testInvitation('business-unrelated-affinity', businessPodcast.id, 'sameSexMarriage', 'podcast', 0.31, 0.32, null)],
  }),
);
const totalPositiveImpact = (result: typeof businessTaxAffinity) => result.clusterImpacts.reduce((sum, impact) => sum + Math.max(0, impact.impact), 0);
assert(totalPositiveImpact(businessTaxAffinity) > totalPositiveImpact(businessUnrelatedAffinity), 'Business podcast should have stronger expected impact for taxes than an unrelated issue');
const longFormQuestions = selectMediaMiniGameQuestions(longFormInvitation, businessPodcast, declineState);
assert(longFormQuestions.length === 4, 'long_form should select four questions');
assert(longFormQuestions.every((question) => question.timeLimitSec === undefined), 'long_form should not use time limits');

const soundbiteInvitation = testInvitation('soundbite', 'commercial_tv_evening_show', 'energyPrices', 'interview', 0.68, 0.45, 'soundbite_builder');
const commercialOutlet = mediaOutlets.find((outlet) => outlet.id === 'commercial_tv_evening_show');
assert(commercialOutlet, 'Expected commercial TV outlet');
const soundbiteQuestions = selectMediaMiniGameQuestions(soundbiteInvitation, commercialOutlet, declineState);
assert(soundbiteQuestions.length === 3, 'soundbite_builder should select compact questions');
assert(soundbiteQuestions.some((question) => question.topicId === 'energyPrices'), 'Soundbite questions should include the invitation topic');

const strongMiniGame = scoreMediaMiniGameAnswers(
  hostileQuestions.map((question) => question.options[0]),
  hostileQuestions,
  { invitation: highReachDebate, outlet: publicDebateOutlet, speakerRole: 'leader', state: declineState },
);
const weakMiniGame = scoreMediaMiniGameAnswers(
  hostileQuestions.map((question) => question.options.find((answer) => answer.tone === 'vague') ?? question.options[0]),
  hostileQuestions,
  { invitation: highReachDebate, outlet: publicDebateOutlet, speakerRole: 'leader', state: declineState },
);
assert(strongMiniGame.performanceMultiplier > weakMiniGame.performanceMultiplier, 'Minigame answers should change performanceMultiplier');

const greenPositionQuestion = mediaMiniGameQuestions.find((question) => question.id === 'green-position-direct');
assert(greenPositionQuestion, 'Expected explicit Green Deal position question');
const greenSupportAnswer = greenPositionQuestion.options.find((answer) => answer.id === 'support');
const greenRejectAnswer = greenPositionQuestion.options.find((answer) => answer.id === 'reject');
assert(greenSupportAnswer && greenRejectAnswer, 'Expected Green Deal position answers');
const greenAlignedState = updateProgramIssue(baseState, 'greenDeal', { position: 2, salience: 4 });
const greenContradictState = updateProgramIssue(baseState, 'greenDeal', { position: 2, salience: 4 });
const greenDebate = testInvitation('green-commitment', publicDebateOutlet.id, 'greenDeal', 'debate', 0.82, 0.62, 'three_questions_timed');
const alignedProgramResult = scoreMediaMiniGameAnswers([greenSupportAnswer], [greenPositionQuestion], {
  invitation: greenDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: greenAlignedState,
});
const mismatchProgramResult = scoreMediaMiniGameAnswers([greenRejectAnswer], [greenPositionQuestion], {
  invitation: greenDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: greenContradictState,
});
assert(
  (alignedProgramResult.programMismatchPenalty ?? 0) < 0.01,
  'Aligned position answer should not create meaningful program mismatch penalty',
);
assert(
  (mismatchProgramResult.programMismatchPenalty ?? 0) > (alignedProgramResult.programMismatchPenalty ?? 0),
  'Contradicting position answer should create programMismatchPenalty',
);
assert(
  (mismatchProgramResult.impliedProgramEffects ?? []).some((effect) => effect.issueId === 'greenDeal' && (effect.consistencyPenalty ?? 0) > 0),
  'Strong contradiction in high-reach debate should create pending program effect or consistency penalty',
);

const commitmentState = initializeComputedState({
  ...greenContradictState,
  mediaInvitations: [greenDebate],
});
const commitmentPending = respondToMediaAppearance(commitmentState, {
  action: 'accept',
  invitationId: greenDebate.id,
  miniGameResult: mismatchProgramResult,
  preparationLevel: 'basic',
  speakerRole: 'leader',
});
const commitmentPendingResult = commitmentPending.pendingMediaEffects?.[0];
assert(commitmentPendingResult?.programWarning, 'Program mismatch/commitment warning should be stored separately on the result');
assert(
  !commitmentPendingResult.sentimentSummary?.includes(commitmentPendingResult.programWarning.text),
  'Program warning should not be merged into sentimentSummary',
);
assert(
  commitmentPending.issueLayer.player.currentIssuePositions.greenDeal.position === commitmentState.issueLayer.player.currentIssuePositions.greenDeal.position,
  'Pending program effects must not apply immediately',
);
assert(JSON.stringify(commitmentPending.nationalSupport) === JSON.stringify(commitmentState.nationalSupport), 'Media minigame still must not immediately change support');
const commitmentResolved = resolveTurn(commitmentPending, [], 112).state;
const positionShift = Math.abs(
  commitmentResolved.issueLayer.player.currentIssuePositions.greenDeal.position - commitmentState.issueLayer.player.currentIssuePositions.greenDeal.position,
);
assert(positionShift > 0, 'resolveTurn should apply pending program/media effects');
assert(positionShift <= 0.36, `Explicit answer should shift issue position conservatively, got ${positionShift}`);

const decimalSalienceBase = updateProgramIssue(baseState, 'greenDeal', { position: 2, salience: 1 });
const decimalSalienceDebate = testInvitation('green-salience-rounding', publicDebateOutlet.id, 'greenDeal', 'debate', 0.82, 0.62, 'three_questions_timed');
const decimalSalienceMiniGame = scoreMediaMiniGameAnswers([greenRejectAnswer], [greenPositionQuestion], {
  invitation: decimalSalienceDebate,
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: decimalSalienceBase,
});
const decimalSaliencePending = respondToMediaAppearance(
  initializeComputedState({
    ...decimalSalienceBase,
    mediaInvitations: [decimalSalienceDebate],
  }),
  {
    action: 'accept',
    invitationId: decimalSalienceDebate.id,
    miniGameResult: decimalSalienceMiniGame,
    preparationLevel: 'basic',
    speakerRole: 'leader',
  },
);
const decimalSalienceResolved = resolveTurn(decimalSaliencePending, [], 113).state;
const roundedMediaSalience = decimalSalienceResolved.issueLayer.player.currentIssuePositions.greenDeal.salience;
assert(Number.isInteger(roundedMediaSalience), 'Media-driven program effect salience must remain an integer');
assert(roundedMediaSalience >= 0 && roundedMediaSalience <= 4, 'Media-driven program effect salience must stay on the 0-4 scale');

const marriageQuestion = mediaMiniGameQuestions.find((question) => question.id === 'marriage-position-direct');
const marriagePivot = marriageQuestion?.options.find((answer) => answer.id === 'compromise');
const marriageExplicit = marriageQuestion?.options.find((answer) => answer.id === 'yes');
assert(marriageQuestion && marriagePivot && marriageExplicit, 'Expected marriage position answers');
const pivotResult = scoreMediaMiniGameAnswers([marriagePivot], [marriageQuestion], {
  invitation: testInvitation('marriage-pivot', publicDebateOutlet.id, 'sameSexMarriage', 'debate', 0.82, 0.62, 'three_questions_timed'),
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: baseState,
});
const explicitResult = scoreMediaMiniGameAnswers([marriageExplicit], [marriageQuestion], {
  invitation: testInvitation('marriage-explicit', publicDebateOutlet.id, 'sameSexMarriage', 'debate', 0.82, 0.62, 'three_questions_timed'),
  outlet: publicDebateOutlet,
  speakerRole: 'leader',
  state: baseState,
});
assert(pivotResult.performanceMultiplier < explicitResult.performanceMultiplier, 'Evasive answer to direct position question should lower performance');
assert((pivotResult.impliedProgramEffects ?? []).length === 0, 'Evasive answer should not shift issue position');

const miniGamePending = respondToMediaAppearance(declineState, {
  action: 'accept',
  invitationId: highReachDebate.id,
  miniGameResult: strongMiniGame,
  preparationLevel: 'basic',
  speakerRole: 'leader',
});
assert((miniGamePending.pendingMediaEffects ?? []).length === 1, 'Media minigame result should still go to pendingMediaEffects');
assert(JSON.stringify(miniGamePending.nationalSupport) === JSON.stringify(declineState.nationalSupport), 'Media minigame should not immediately change support');
const miniGameResolved = resolveTurn(miniGamePending, [], 111).state;
assert(JSON.stringify(miniGameResolved.nationalSupport) !== JSON.stringify(miniGamePending.nationalSupport), 'Support should change only after pending media is applied in resolveTurn');

const programQuestionId = baseState.issueLayer.pendingMediaQuestionId;
assert(programQuestionId, 'Expected pending program media question');
const programQuestion = baseState.issueLayer.mediaQuestions.find((question) => question.id === programQuestionId);
assert(programQuestion, 'Expected pending program question in catalog');
const programAnswerA = answerProgramMediaQuestion(baseState, programQuestionId, programQuestion.answerOptions[0].id);
const programAnswerB = answerProgramMediaQuestion(programAnswerA, programQuestionId, programQuestion.answerOptions[0].id);
assert(
  JSON.stringify(programAnswerB.issueLayer.player.currentIssuePositions) === JSON.stringify(programAnswerA.issueLayer.player.currentIssuePositions),
  'Program media questions cannot be answered repeatedly for effects',
);
assert(programAnswerB.issueLayer.player.coreLoyalty === programAnswerA.issueLayer.player.coreLoyalty, 'Repeated program media question should not farm core loyalty');
assert(programAnswerB.issueLayer.player.swingAppeal === programAnswerA.issueLayer.player.swingAppeal, 'Repeated program media question should not farm swing appeal');

const tripId = baseState.issueLayer.pendingCampaignTripId;
assert(tripId, 'Expected pending campaign trip');
const trip = baseState.issueLayer.tripEvents.find((item) => item.id === tripId);
assert(trip, 'Expected pending campaign trip in catalog');
const tripAnswerA = answerCampaignTrip(baseState, tripId, trip.options[0].id);
const tripAnswerB = answerCampaignTrip(tripAnswerA, tripId, trip.options[0].id);
assert(
  JSON.stringify(tripAnswerB.issueLayer.player.currentIssuePositions) === JSON.stringify(tripAnswerA.issueLayer.player.currentIssuePositions),
  'Campaign trip events cannot be farmed repeatedly',
);
assert(tripAnswerB.issueLayer.player.coreLoyalty === tripAnswerA.issueLayer.player.coreLoyalty, 'Repeated campaign trip should not farm core loyalty');
assert(tripAnswerB.issueLayer.player.swingAppeal === tripAnswerA.issueLayer.player.swingAppeal, 'Repeated campaign trip should not farm swing appeal');

const debateState = {
  ...baseState,
  issueLayer: {
    ...baseState.issueLayer,
    debateAttack: {
      id: 'test-debate',
      relatedIssues: ['greenDeal'],
      responseOptions: [
        {
          id: 'test-response',
          label: 'Test',
          description: 'Test response',
          salienceDeltas: { greenDeal: 1 },
        },
      ],
      severity: 0.5,
      text: 'Test',
      title: 'Test',
    },
    resolvedDebateAttackIds: [],
  },
} satisfies GameState;
const debateAnswerA = answerDebateAttack(debateState, 'test-response');
const debateAnswerB = answerDebateAttack(
  {
    ...debateAnswerA,
    issueLayer: {
      ...debateAnswerA.issueLayer,
      debateAttack: debateState.issueLayer.debateAttack,
    },
  },
  'test-response',
);
assert(
  debateAnswerB.issueLayer.player.currentIssuePositions.greenDeal.salience === debateAnswerA.issueLayer.player.currentIssuePositions.greenDeal.salience,
  'Debate responses cannot be farmed repeatedly',
);
assert(debateAnswerB.issueLayer.player.coreLoyalty === debateAnswerA.issueLayer.player.coreLoyalty, 'Repeated debate response should not farm core loyalty');
assert(debateAnswerB.issueLayer.player.swingAppeal === debateAnswerA.issueLayer.player.swingAppeal, 'Repeated debate response should not farm swing appeal');

const plannedActions: PlannedAction[] = [
  { actionV2Id: 'regionalMeeting', id: 'smoke-rally', targetRegionId: 'moravskoslezsky' },
  { actionV2Id: 'onlineAdCampaign', id: 'smoke-online' },
  { actionV2Id: 'videoClipCampaign', id: 'smoke-video' },
];

const turnA = resolveTurn(baseState, plannedActions, 42);
const turnB = resolveTurn(baseState, plannedActions, 42);
const resultA = turnA.state;
const resultB = turnB.state;
assertHealthyState(resultA);
assert(JSON.stringify(roundRecord(resultA)) === JSON.stringify(roundRecord(resultB)), 'Same seed and plan must produce the same result');
assert(turnA.briefing.opponentMoves.length >= partyIds.length - 1, 'Every opponent should resolve a campaign move');

const cappedState = {
  ...baseState,
  rules: { ...baseState.rules, legalSpendCap: baseState.partyRuntime.player.legalSpend },
};
const cappedResult = resolveTurn(cappedState, [{ actionV2Id: 'videoClipCampaign', id: 'blocked-video' }], 7);
assert(cappedResult.briefing.riskNotes.some((note) => note.includes('legal spend')), 'Legal spend cap should block invalid action');

const sponsorBefore = baseState.partyRuntime.player;
const sponsorAfter = acceptSponsor(baseState, 'opaque').partyRuntime.player;
assert(sponsorAfter.reputation.integrity < sponsorBefore.reputation.integrity, 'Risky sponsor should lower integrity');
assert(sponsorAfter.scandalRisk > sponsorBefore.scandalRisk, 'Risky sponsor should raise scandal risk');

const question = baseState.questions[0];
const worstOption = question.options.reduce((worst, option) => (option.controversyRisk > worst.controversyRisk ? option : worst), question.options[0]);
const questionAfter = answerQuestion(baseState, question.id, worstOption.id).partyRuntime.player.reputation;
assert(questionAfter.controversy > baseState.partyRuntime.player.reputation.controversy, 'Bad Q&A answer should raise controversy');

const seats = computeElectionResult(resultA).seats;
const seatTotal = partyIds.reduce((sum, partyId) => sum + seats[partyId], 0);
assert(seatTotal === 200, `Final election seats must sum to 200, got ${seatTotal}`);

console.log('Engine smoke tests passed');

function stateWithPlayerCenter(state: GameState, center8D: NonNullable<GameState['partyRuntime']['player']['field']['center8D']>): GameState {
  return initializeComputedState({
    ...state,
    partyRuntime: {
      ...state.partyRuntime,
      player: {
        ...state.partyRuntime.player,
        field: {
          ...state.partyRuntime.player.field,
          center8D: { ...center8D },
          latentCenter: { ...center8D },
        },
        reputation: { ...state.partyRuntime.player.reputation },
      },
    },
  });
}

function testInvitation(
  id: string,
  outletId: string,
  issueId: NonNullable<MediaInvitation['issueId']>,
  format: MediaInvitation['format'],
  expectedReach: number,
  risk: number,
  miniGameType: MediaInvitation['miniGameType'],
): MediaInvitation {
  return {
    expectedReach,
    format,
    id,
    issue: issueId === 'greenDeal' ? 'greenDeal' : issueId === 'housing' ? 'housing' : issueId === 'taxes' ? 'taxes' : 'security',
    issueId,
    miniGameType,
    outletId,
    recommendedSpeakerRoles: ['leader', 'expert'],
    requiredPreparation: 0.5,
    resolved: false,
    risk,
    week: baseState.week,
  };
}
