import {
  acceptSponsor,
  answerQuestion,
  computeElectionResult,
  computeNationalSupport,
  computeRegionalSupport,
  initializeComputedState,
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

const greenDealOpposed = updateProgramIssue(baseState, 'greenDeal', { position: -2, salience: 4 });
const greenDealSupportive = updateProgramIssue(baseState, 'greenDeal', { position: 2, salience: 4 });
const opposedSupport = computeNationalSupport(greenDealOpposed, computeRegionalSupport(greenDealOpposed)).player;
const supportiveSupport = computeNationalSupport(greenDealSupportive, computeRegionalSupport(greenDealSupportive)).player;
assert(Math.abs(opposedSupport - supportiveSupport) > 0.0001, 'Green Deal issue position must affect support through issue fit');

const plannedActions: PlannedAction[] = [
  { actionId: 'regionalRally', id: 'smoke-rally', targetRegionId: 'moravskoslezsky' },
  { actionId: 'internalPoll', id: 'smoke-poll', targetRegionId: 'ustecky' },
  { actionId: 'tvInterview', id: 'smoke-tv' },
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
const cappedResult = resolveTurn(cappedState, [{ actionId: 'tvInterview', id: 'blocked-tv' }], 7);
assert(cappedResult.briefing.riskNotes.some((note) => note.includes('legal spend')), 'Legal spend cap should block invalid action');

const sponsorBefore = baseState.partyRuntime.player;
const sponsorAfter = acceptSponsor(baseState, 'opaque').partyRuntime.player;
assert(sponsorAfter.reputation.integrity < sponsorBefore.reputation.integrity, 'Risky sponsor should lower integrity');
assert(sponsorAfter.scandalRisk > sponsorBefore.scandalRisk, 'Risky sponsor should raise scandal risk');

const pollBefore = baseState.polls.player.high - baseState.polls.player.low;
const pollAfterState = resolveTurn(baseState, [{ actionId: 'internalPoll', id: 'poll-only', targetRegionId: 'praha' }], 11).state;
const pollAfter = pollAfterState.polls.player.high - pollAfterState.polls.player.low;
assert(pollAfter < pollBefore, 'Internal poll should narrow poll interval');
assert(Math.abs(pollAfterState.nationalSupport.player - baseState.nationalSupport.player) < 0.02, 'Internal poll must not directly boost support');

const question = baseState.questions[0];
const worstOption = question.options.reduce((worst, option) => (option.controversyRisk > worst.controversyRisk ? option : worst), question.options[0]);
const questionAfter = answerQuestion(baseState, question.id, worstOption.id).partyRuntime.player.reputation;
assert(questionAfter.controversy > baseState.partyRuntime.player.reputation.controversy, 'Bad Q&A answer should raise controversy');

const seats = computeElectionResult(resultA).seats;
const seatTotal = partyIds.reduce((sum, partyId) => sum + seats[partyId], 0);
assert(seatTotal === 200, `Final election seats must sum to 200, got ${seatTotal}`);

console.log('Engine smoke tests passed');
