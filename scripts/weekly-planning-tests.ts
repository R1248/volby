import { initializeComputedState, prepareWeek } from "../src/game/engine";
import { createInitialGameState, partyIds } from "../src/game/seed";
import type {
    CampaignActionV2,
    GameState,
    PartyId,
    PlannedAction,
    PollEstimate,
} from "../src/game/types";
import {
    derivePriorityCandidates,
    deriveStrategicRegions,
    deriveWeekSituation,
    recommendCampaignActions,
    summarizePlanPressure,
    type WeeklyPriority,
} from "../src/game/weeklyPlanning";
import type { RegionId } from "../src/types/region";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

function assertThrows(
  fn: () => unknown,
  expectedMessage: RegExp,
  message: string,
) {
  try {
    fn();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);

    assert(
      expectedMessage.test(errorMessage),
      `${message}: unexpected error "${errorMessage}"`,
    );

    return;
  }

  throw new Error(`${message}: expected function to throw`);
}

function cloneState(state: GameState): GameState {
  return JSON.parse(JSON.stringify(state)) as GameState;
}

function actionById(state: GameState, actionId: string): CampaignActionV2 {
  const action = state.campaignActionsV2.find(
    (candidate) => candidate.id === actionId,
  );

  assert(action, `Missing campaign action ${actionId}`);

  return action;
}

function planned(
  actionV2Id: string,
  patch: Partial<PlannedAction> = {},
): PlannedAction {
  return {
    actionV2Id,
    id: `test-${actionV2Id}`,
    ...patch,
  };
}

function poll(value: number, uncertainty = 0.01): PollEstimate {
  return {
    value,
    low: Math.max(0, value - uncertainty),
    high: Math.min(1, value + uncertainty),
  };
}

function setRegionalPolls(
  state: GameState,
  regionId: RegionId,
  values: Partial<Record<PartyId, number>>,
) {
  const fallback = 0.01;

  state.publicRegionalPolls[regionId] = Object.fromEntries(
    partyIds.map((partyId) => [partyId, poll(values[partyId] ?? fallback)]),
  ) as GameState["publicRegionalPolls"][RegionId];
}

function isolatePreparedContext(
  state: GameState,
  eventIds: string[],
  invitationIds: string[],
) {
  assert(
    state.preparedWeek,
    "State must be prepared before isolating weekly context",
  );

  state.preparedWeek = {
    ...state.preparedWeek,
    eventIds: [...eventIds],
    invitationIds: [...invitationIds],
    contextNotes: [],
  };
}

function recommendationScore(
  state: GameState,
  actionId: string,
  priorities: WeeklyPriority[] = [],
) {
  const recommendations = recommendCampaignActions(state, priorities, []);

  const recommendation = recommendations.find(
    (candidate) => candidate.action.id === actionId,
  );

  assert(recommendation, `Expected recommendation for ${actionId}`);

  return recommendation;
}

const baseState = prepareWeek(
  initializeComputedState(createInitialGameState()),
);

assert(baseState.preparedWeek, "Test fixture must start with a prepared week");

/**
 * 1. Planning selectors must require prepared weekly context.
 */
{
  const state = cloneState(baseState);
  delete state.preparedWeek;

  assertThrows(
    () => deriveWeekSituation(state),
    /prepared/i,
    "deriveWeekSituation should reject unprepared state",
  );

  assertThrows(
    () => deriveStrategicRegions(state),
    /prepared/i,
    "deriveStrategicRegions should reject unprepared state",
  );

  assertThrows(
    () => derivePriorityCandidates(state),
    /prepared/i,
    "derivePriorityCandidates should reject unprepared state",
  );

  assertThrows(
    () => recommendCampaignActions(state, [], []),
    /prepared/i,
    "recommendCampaignActions should reject unprepared state",
  );
}

/**
 * 2. Prepared events must appear as strategic signals.
 *
 * Week 4 contains healthcareStrike, which is explicitly an opportunity
 * for the player in Ústecký kraj.
 */
{
  const state = cloneState(baseState);

  isolatePreparedContext(state, ["healthcareStrike"], []);

  state.partyRuntime.player.cash = 10;
  state.partyRuntime.player.leader.fatigue = 0;
  state.partyRuntime.player.momentum = 0.5;

  const situation = deriveWeekSituation(state);
  const allSignals = [situation.lead, ...situation.signals];

  const healthcareSignal = allSignals.find(
    (signal) => signal.eventId === "healthcareStrike",
  );

  assert(
    healthcareSignal,
    "Prepared healthcareStrike must appear in weekly situation",
  );

  assert(
    healthcareSignal.kind === "event",
    "Healthcare strike must be represented as an event signal",
  );

  assert(
    healthcareSignal.tone === "opportunity",
    "Healthcare strike should be an opportunity for the player",
  );

  assert(
    healthcareSignal.regionId === "ustecky",
    "Healthcare strike must preserve its regional target",
  );

  assert(
    healthcareSignal.issueId === "healthcare",
    "Healthcare strike must expose healthcare as its primary issue",
  );
}

/**
 * 3. Prepared context, not all same-week events, is authoritative.
 */
{
  const state = cloneState(baseState);

  isolatePreparedContext(state, ["healthcareStrike"], []);

  const situation = deriveWeekSituation(state);
  const allSignals = [situation.lead, ...situation.signals];

  assert(
    allSignals.some((signal) => signal.eventId === "healthcareStrike"),
    "Prepared event must be visible",
  );

  assert(
    !allSignals.some((signal) => signal.eventId === "housingReport"),
    "Non-prepared event must not leak into weekly situation",
  );
}

/**
 * 4. Regional strategy must use public polls instead of hidden support.
 */
{
  const state = cloneState(baseState);

  setRegionalPolls(state, "ustecky", {
    player: 0.25,
    ods: 0.27,
  });

  // Deliberately make hidden support tell a completely different story.
  state.regionalSupport.ustecky.player = 0.8;
  state.regionalSupport.ustecky.ods = 0.01;

  const regions = deriveStrategicRegions(state);

  const ustecky = regions.find((region) => region.regionId === "ustecky");

  assert(ustecky, "Ústecký kraj must exist in strategic region output");

  assert(
    ustecky.status === "battleground",
    `Expected Ústecký kraj to be battleground, got ${ustecky.status}`,
  );

  assert(
    ustecky.leadingOpponentId === "ods",
    `Expected ODS as public leading opponent, got ${ustecky.leadingOpponentId}`,
  );

  assert(
    Math.abs(ustecky.gap - -0.02) < 0.000001,
    `Expected public poll gap -0.02, got ${ustecky.gap}`,
  );
}

/**
 * 5. A prepared event should create a matching dynamic priority.
 */
{
  const state = cloneState(baseState);

  isolatePreparedContext(state, ["healthcareStrike"], []);

  const priorities = derivePriorityCandidates(state);

  const healthcarePriority = priorities.find(
    (priority) =>
      priority.kind === "exploit_event" && priority.issueId === "healthcare",
  );

  assert(
    healthcarePriority,
    "Healthcare event should create an exploit_event priority",
  );

  assert(
    healthcarePriority.regionId === "ustecky",
    "Healthcare priority should retain Ústecký target",
  );

  assert(
    priorities.length <= 6,
    `Priority shortlist must contain at most 6 items, got ${priorities.length}`,
  );
}

/**
 * 6. Regional priority must favor a regional/field action over
 * a generic national advertising action.
 *
 * We isolate the catalog to make this a stable relative-scoring test.
 */
{
  const state = cloneState(baseState);

  state.partyRuntime.player.cash = 20;
  state.partyRuntime.player.staffCap = 20;
  state.partyRuntime.player.staffUsed = 0;
  state.partyRuntime.player.leader.timeCap = 10;
  state.partyRuntime.player.leader.timeUsed = 0;
  state.partyRuntime.player.leader.fatigue = 0;

  state.campaignActionsV2 = [
    actionById(state, "regionalMeeting"),
    actionById(state, "billboardCampaign"),
  ];

  const priority: WeeklyPriority = {
    id: "defend-ustecky",
    kind: "defend_region",
    label: "Udržet Ústecký kraj",
    reason: "Test regional priority",
    score: 0.8,
    regionId: "ustecky",
    opponentPartyId: "ods",
  };

  const recommendations = recommendCampaignActions(state, [priority], []);

  assert(
    recommendations.length === 2,
    "Both affordable test actions should be recommended",
  );

  assert(
    recommendations[0].action.id === "regionalMeeting",
    `Regional priority should prefer regionalMeeting, got ${recommendations[0].action.id}`,
  );

  assert(
    recommendations[0].matchedPriorityIds.includes(priority.id),
    "Regional recommendation should record matching priority",
  );

  assert(
    recommendations[0].suggestedRegionId === "ustecky",
    "Regional recommendation should suggest the priority region",
  );
}

/**
 * 7. Mobilization priority must favor a turnout action.
 */
{
  const state = cloneState(baseState);

  state.partyRuntime.player.cash = 20;
  state.partyRuntime.player.staffCap = 20;
  state.partyRuntime.player.staffUsed = 0;
  state.partyRuntime.player.leader.timeCap = 10;
  state.partyRuntime.player.leader.timeUsed = 0;

  state.campaignActionsV2 = [
    actionById(state, "gotvOperation"),
    actionById(state, "billboardCampaign"),
  ];

  const priority: WeeklyPriority = {
    id: "mobilize-base",
    kind: "mobilize_base",
    label: "Mobilizovat vlastní voliče",
    reason: "Test turnout priority",
    score: 0.8,
  };

  const recommendations = recommendCampaignActions(state, [priority], []);

  assert(
    recommendations[0].action.id === "gotvOperation",
    `Mobilization priority should prefer GOTV, got ${recommendations[0].action.id}`,
  );

  assert(
    recommendations[0].matchedPriorityIds.includes(priority.id),
    "GOTV recommendation should match mobilization priority",
  );
}

/**
 * 8. Leader fatigue must lower the score of leader-heavy actions.
 */
{
  const lowFatigue = cloneState(baseState);
  const highFatigue = cloneState(baseState);

  for (const state of [lowFatigue, highFatigue]) {
    state.partyRuntime.player.cash = 20;
    state.partyRuntime.player.staffCap = 20;
    state.partyRuntime.player.staffUsed = 0;
    state.partyRuntime.player.leader.timeCap = 10;
    state.partyRuntime.player.leader.timeUsed = 0;

    state.campaignActionsV2 = [actionById(state, "leaderRegionVisit")];
  }

  lowFatigue.partyRuntime.player.leader.fatigue = 0.05;
  highFatigue.partyRuntime.player.leader.fatigue = 0.9;

  const lowScore = recommendationScore(lowFatigue, "leaderRegionVisit").score;

  const highScore = recommendationScore(highFatigue, "leaderRegionVisit").score;

  assert(
    highScore < lowScore,
    `High fatigue should lower leader-heavy recommendation score (${highScore} vs ${lowScore})`,
  );
}

/**
 * 9. Actions that no longer fit the remaining cash must disappear
 * from the shortlist.
 */
{
  const state = cloneState(baseState);

  state.partyRuntime.player.cash = 0.75;
  state.partyRuntime.player.legalSpend = 0;
  state.partyRuntime.player.graySpend = 0;
  state.partyRuntime.player.thirdPartySpend = 0;

  state.partyRuntime.player.staffCap = 20;
  state.partyRuntime.player.staffUsed = 0;
  state.partyRuntime.player.leader.timeCap = 10;
  state.partyRuntime.player.leader.timeUsed = 0;

  state.campaignActionsV2 = [
    actionById(state, "regionalMeeting"),
    actionById(state, "billboardCampaign"),
  ];

  const recommendations = recommendCampaignActions(state, [], []);

  assert(
    recommendations.some(
      (recommendation) => recommendation.action.id === "regionalMeeting",
    ),
    "0.7-cost regionalMeeting should remain affordable with 0.75 cash",
  );

  assert(
    !recommendations.some(
      (recommendation) => recommendation.action.id === "billboardCampaign",
    ),
    "1.0-cost billboardCampaign must be filtered out with 0.75 cash",
  );
}

/**
 * 10. Existing planned actions must reserve resources before
 * recommendation filtering.
 */
{
  const state = cloneState(baseState);

  state.partyRuntime.player.cash = 1.4;
  state.partyRuntime.player.staffCap = 20;
  state.partyRuntime.player.staffUsed = 0;
  state.partyRuntime.player.leader.timeCap = 10;
  state.partyRuntime.player.leader.timeUsed = 0;

  state.campaignActionsV2 = [
    actionById(state, "regionalMeeting"),
    actionById(state, "billboardCampaign"),
  ];

  const plan = [
    planned("regionalMeeting", {
      targetRegionId: "ustecky",
    }),
  ];

  const recommendations = recommendCampaignActions(state, [], plan);

  assert(
    !recommendations.some(
      (recommendation) => recommendation.action.id === "billboardCampaign",
    ),
    "Reserved campaign money must count when filtering recommendations",
  );
}

/**
 * 11. Low information quality must lower confidence for
 * precision-sensitive digital actions.
 *
 * onlineAdCampaign requires poll-level precision in CampaignActionV2.
 */
{
  const lowInformation = cloneState(baseState);
  const highInformation = cloneState(baseState);

  for (const state of [lowInformation, highInformation]) {
    state.partyRuntime.player.cash = 20;
    state.partyRuntime.player.staffCap = 20;
    state.partyRuntime.player.staffUsed = 0;
    state.partyRuntime.player.leader.timeCap = 10;
    state.partyRuntime.player.leader.timeUsed = 0;

    state.campaignActionsV2 = [actionById(state, "onlineAdCampaign")];
  }

  lowInformation.partyRuntime.player.informationQuality = 0.2;
  highInformation.partyRuntime.player.informationQuality = 0.8;

  const lowRecommendation = recommendationScore(
    lowInformation,
    "onlineAdCampaign",
  );

  const highRecommendation = recommendationScore(
    highInformation,
    "onlineAdCampaign",
  );

  assert(
    lowRecommendation.confidence === "low",
    `Expected low confidence with poor information, got ${lowRecommendation.confidence}`,
  );

  assert(
    highRecommendation.confidence === "high",
    `Expected high confidence with strong information, got ${highRecommendation.confidence}`,
  );
}

/**
 * 12. Recommendation output must only expose normal campaign actions
 * and must never exceed the UI shortlist limit.
 */
{
  const state = cloneState(baseState);

  state.partyRuntime.player.cash = 100;
  state.partyRuntime.player.staffCap = 100;
  state.partyRuntime.player.staffUsed = 0;
  state.partyRuntime.player.leader.timeCap = 100;
  state.partyRuntime.player.leader.timeUsed = 0;

  const recommendations = recommendCampaignActions(
    state,
    derivePriorityCandidates(state).slice(0, 2),
    [],
    999,
  );

  assert(
    recommendations.length <= 6,
    `Recommendation shortlist must contain at most 6 actions, got ${recommendations.length}`,
  );

  for (const recommendation of recommendations) {
    assert(
      recommendation.action.placement === "campaign",
      `${recommendation.action.id} must have campaign placement`,
    );

    assert(
      recommendation.action.availability === "player_initiated",
      `${recommendation.action.id} must be player initiated`,
    );

    assert(
      recommendation.action.preview.visibleToPlayer,
      `${recommendation.action.id} must be visible to the player`,
    );
  }
}

/**
 * 13. Plan pressure must include already-used weekly resources
 * plus resources reserved by planned actions.
 */
{
  const state = cloneState(baseState);

  state.partyRuntime.player.cash = 10;
  state.partyRuntime.player.staffCap = 6;
  state.partyRuntime.player.staffUsed = 0.5;
  state.partyRuntime.player.leader.timeCap = 3;
  state.partyRuntime.player.leader.timeUsed = 0.25;

  const plan = [
    planned("regionalMeeting", {
      targetRegionId: "ustecky",
    }),
  ];

  const pressure = summarizePlanPressure(state, plan);

  assert(
    pressure.cashUsed > 0,
    "Plan pressure must include planned campaign money",
  );

  assert(
    pressure.staffUsed > state.partyRuntime.player.staffUsed,
    "Plan pressure must add planned staff usage",
  );

  assert(
    pressure.leaderTimeUsed > state.partyRuntime.player.leader.timeUsed,
    "Plan pressure must add planned leader time",
  );

  assert(
    pressure.cashRemaining < state.partyRuntime.player.cash,
    "Plan pressure must reduce remaining cash",
  );

  assert(
    pressure.summary.length > 0,
    "Plan pressure must provide a player-facing summary",
  );
}

/**
 * 14. Selectors must be deterministic.
 */
{
  const state = cloneState(baseState);

  const priorities = derivePriorityCandidates(state);

  const firstSituation = deriveWeekSituation(state);
  const secondSituation = deriveWeekSituation(state);

  const firstRegions = deriveStrategicRegions(state);
  const secondRegions = deriveStrategicRegions(state);

  const firstPriorities = derivePriorityCandidates(state);
  const secondPriorities = derivePriorityCandidates(state);

  const firstRecommendations = recommendCampaignActions(
    state,
    priorities.slice(0, 2),
    [],
  );

  const secondRecommendations = recommendCampaignActions(
    state,
    priorities.slice(0, 2),
    [],
  );

  assert(
    JSON.stringify(firstSituation) === JSON.stringify(secondSituation),
    "Week situation must be deterministic",
  );

  assert(
    JSON.stringify(firstRegions) === JSON.stringify(secondRegions),
    "Strategic regions must be deterministic",
  );

  assert(
    JSON.stringify(firstPriorities) === JSON.stringify(secondPriorities),
    "Priority candidates must be deterministic",
  );

  assert(
    JSON.stringify(firstRecommendations) ===
      JSON.stringify(secondRecommendations),
    "Campaign recommendations must be deterministic",
  );
}

/**
 * 15. None of the planning selectors may mutate GameState.
 */
{
  const state = cloneState(baseState);
  const before = cloneState(state);

  const priorities = derivePriorityCandidates(state);

  deriveWeekSituation(state);
  deriveStrategicRegions(state);
  recommendCampaignActions(state, priorities.slice(0, 2), []);
  summarizePlanPressure(state, []);

  assert(
    JSON.stringify(state) === JSON.stringify(before),
    "Weekly planning selectors must not mutate GameState",
  );
}

console.log(
  "Weekly planning tests passed: prepared context, public information, priorities, recommendations, resources, confidence, determinism and immutability.",
);
