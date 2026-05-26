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
import { createInitialGameState, partyIds } from '../src/game/seed';
import type { GameState, PlannedAction } from '../src/game/types';

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
