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
import { scoreMediaMiniGameAnswers, selectMediaMiniGameQuestions } from '../src/game/mediaEngine';
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

const publicDebateOutlet = mediaOutlets.find((outlet) => outlet.id === 'public_tv_main_debate');
const toxicOutlet = mediaOutlets.find((outlet) => outlet.id === 'anti_establishment_channel');
const regionalOutlet = mediaOutlets.find((outlet) => outlet.id === 'regional_radio');
assert(publicDebateOutlet && toxicOutlet && regionalOutlet, 'Expected media outlets for decline tests');
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
assert(taxFundingQuestion && taxBeneficiaryQuestion && taxCoherenceQuestion, 'Expected realistic tax trade-off questions');
const fundedTaxAnswer = taxFundingQuestion.options.find((answer) => answer.id === 'spending-cuts');
const unfundedTaxAnswer = taxBeneficiaryQuestion.options.find((answer) => answer.id === 'everyone');
const coherentTaxAnswer = taxCoherenceQuestion.options.find((answer) => answer.id === 'services-first');
const populistTaxAnswer = taxCoherenceQuestion.options.find((answer) => answer.id === 'everything-now');
assert(fundedTaxAnswer && unfundedTaxAnswer && coherentTaxAnswer && populistTaxAnswer, 'Expected tax trade-off answers');
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
