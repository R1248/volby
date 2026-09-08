/* global __dirname */

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");

// Run the actual store in Node: only the native persistence boundary is substituted.
const root = path.resolve(__dirname, "..");
const originalLoad = Module._load;
let saved;
let saves = 0;
let snapshots = 0;
const copy = (value) => JSON.parse(JSON.stringify(value));
Module._load = function (request, parent, isMain) {
  if (request === "@/src/game/storage")
    return {
      loadLatestGame: async () => saved && copy(saved),
      saveGame: async (state, plannedActions) => {
        saved = copy({ state, plannedActions });
        saves++;
      },
      resetSave: async () => {
        saved = undefined;
      },
      saveTurnSnapshot: async () => {
        snapshots++;
      },
    };
  if (request.startsWith("@/")) request = path.join(root, request.slice(2));
  return originalLoad.call(this, request, parent, isMain);
};
require.extensions[".ts"] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: filename,
  });
  module._compile(outputText, filename);
};

const {
  prepareWeek,
  resolvePreparedWeek,
  resolveTurn,
  initializeComputedState,
  respondToMediaAppearance,
} = require("../src/game/engine.ts");
const { createInitialGameState } = require("../src/game/seed.ts");
const {
  generateWeeklyMediaInvitations,
} = require("../src/game/mediaEngine.ts");
const { useGameStore: store } = require("../src/store/useGameStore.ts");

async function main() {
  const legacy = initializeComputedState(createInitialGameState());
  assert.equal(legacy.preparedWeek, undefined);
  assert.equal(legacy.mediaInvitations.length, 0);
  assert.throws(() => resolvePreparedWeek(legacy, []), /must be prepared/);
  // Force a real scandal roll below the unchanged threshold.
  let seed = 1;
  while ((((Math.sin(seed + legacy.week * 17) * 10000) % 1) + 1) % 1 >= 0.08)
    seed++;
  legacy.rngSeed = seed;
  legacy.partyRuntime.player.scandalRisk = 1;
  legacy.partyRuntime.player.leader.timeUsed = 1;
  legacy.partyRuntime.player.staffUsed = 1;
  legacy.issueLayer.player.programChangesThisWeek = 1;
  const original = copy(legacy);
  const prepared = prepareWeek(legacy);
  assert.deepEqual(legacy, original, "preparation must not mutate input");
  assert.equal(prepared.week, legacy.week);
  assert.equal(prepared.rngSeed, seed);
  assert.equal(prepared.scandals.length, legacy.scandals.length + 1);
  assert.deepEqual(
    prepared.partyRuntime,
    legacy.partyRuntime,
    "preparation preserves resources",
  );
  assert.equal(prepared.issueLayer.player.programChangesThisWeek, 1);
  assert.equal(prepareWeek(prepared), prepared);
  assert.equal(prepareWeek(prepareWeek(prepared)), prepared);
  assert.throws(() => prepareWeek(prepared, seed + 1), /Cannot change/);
  assert.throws(
    () => prepareWeek({ ...prepared, week: prepared.week + 1 }),
    /must be prepared/,
  );
  assert.throws(
    () => resolvePreparedWeek({ ...prepared, mediaInvitations: [] }, []),
    /missing context/,
  );
  const reloaded = copy({
    schemaVersion: 1,
    state: prepared,
    plannedActions: [],
  }).state;
  assert.equal(prepareWeek(reloaded), reloaded);
  const result = resolvePreparedWeek(prepared, []);
  assert.deepEqual(resolvePreparedWeek(reloaded, []), result);
  assert.deepEqual(resolveTurn(legacy, []), result);
  assert.deepEqual(resolveTurn(prepareWeek(prepared), []), result);
  assert.equal(result.state.week, legacy.week + 1);
  assert.equal(
    result.state.rngSeed,
    (seed * 1664525 + 1013904223) % 4294967296,
  );
  assert.equal(result.state.preparedWeek, undefined);
  assert.equal(result.state.partyRuntime.player.leader.timeUsed, 0);
  assert.equal(result.state.partyRuntime.player.staffUsed, 0);
  assert.equal(result.state.issueLayer.player.programChangesThisWeek, 0);
  assert.deepEqual(result.briefing.events, prepared.preparedWeek.contextNotes);
  assert.deepEqual(
    result.state.mediaInvitations.map((x) => x.id),
    prepared.mediaInvitations.map((x) => x.id),
  );
  assert.equal(
    result.state.mediaInvitations.filter((x) => x.week === result.state.week)
      .length,
    0,
  );
  assert.equal(
    result.state.scandals.filter((x) => x.id === `sponsor-risk-${legacy.week}`)
      .length,
    1,
  );
  const next = prepareWeek(result.state);
  assert.deepEqual(
    next.preparedWeek.invitationIds,
    generateWeeklyMediaInvitations(result.state).map((x) => x.id),
  );
  assert.equal(
    new Set(next.mediaInvitations.map((x) => x.id)).size,
    next.mediaInvitations.length,
  );
  assert.equal(prepareWeek(next), next);
  const eventState = copy(legacy);
  const event = {
    ...eventState.events[0],
    id: "prepared-event",
    title: "Prepared event",
    week: eventState.week,
    opportunityFor: ["player"],
  };
  eventState.events = [event];
  const withEvent = prepareWeek(eventState);
  assert.deepEqual(withEvent.preparedWeek.eventIds, [event.id]);
  const withLateEvent = copy(withEvent);
  withLateEvent.events.push({
    ...event,
    id: "late-event",
    title: "Late event",
  });
  const eventResult = resolvePreparedWeek(withLateEvent, []);
  assert(
    eventResult.briefing.actionEffects.some((note) =>
      note.includes("Prepared event"),
    ),
  );
  assert(
    !eventResult.briefing.actionEffects.some((note) =>
      note.includes("Late event"),
    ),
  );
  assert.deepEqual(
    eventResult.briefing.events,
    withEvent.preparedWeek.contextNotes,
  );
  assert.throws(
    () => resolvePreparedWeek({ ...withEvent, events: [] }, []),
    /missing context/,
  );
  const invitation = prepared.mediaInvitations[0];
  const answered = respondToMediaAppearance(prepared, {
    action: "decline",
    invitationId: invitation.id,
    preparationLevel: "none",
  });
  assert.deepEqual(answered.preparedWeek, prepared.preparedWeek);
  const answeredResult = resolvePreparedWeek(answered, []);
  assert.equal(answeredResult.state.pendingMediaEffects.length, 0);
  assert(
    answeredResult.state.mediaAppearanceResults.some(
      (x) => x.invitationId === invitation.id && x.status === "applied",
    ),
  );
  // Changing generation inputs during planning cannot roll another weekly scandal or invitation set.
  const changed = copy(prepared);
  changed.partyRuntime.player.scandalRisk = 0;
  changed.rngSeed = seed + 123;
  const changedResult = resolvePreparedWeek(changed, []);
  assert.equal(changedResult.state.rngSeed, result.state.rngSeed);
  assert.deepEqual(
    changedResult.briefing.events,
    prepared.preparedWeek.contextNotes,
  );
  assert.deepEqual(
    changedResult.state.mediaInvitations.map((x) => x.id),
    prepared.preparedWeek.invitationIds,
  );
  // A legacy save may already contain invitations generated by the old lifecycle.
  const oldSave = copy(legacy);
  oldSave.mediaInvitations = generateWeeklyMediaInvitations(oldSave);
  assert.deepEqual(
    prepareWeek(oldSave).mediaInvitations,
    copy(oldSave.mediaInvitations),
  );

  store.getState().startNewGame("player");
  await Promise.resolve();
  assert(store.getState().gameState.preparedWeek);
  const first = copy(store.getState().gameState);
  const savesBefore = saves;
  store.getState().prepareCurrentWeek();
  assert.equal(
    saves,
    savesBefore,
    "repeated preparation must not persist again",
  );
  store.getState().resolvePlannedWeek();
  assert.equal(snapshots, 1);
  assert.equal(store.getState().gameState.preparedWeek, undefined);
  assert.equal(store.getState().gameState.week, first.week + 1);
  store.getState().prepareCurrentWeek();
  const persisted = copy(saved);
  const savesBeforePreparedHydrate = saves;

  await store.getState().hydrateGame();

  assert.equal(
    saves,
    savesBeforePreparedHydrate,
    "hydrating an already prepared save must not append another save row",
  );

  assert.deepEqual(
    store.getState().gameState.preparedWeek,
    persisted.state.preparedWeek,
  );
  assert.deepEqual(
    store.getState().gameState.mediaInvitations,
    persisted.state.mediaInvitations,
  );
  assert.deepEqual(
    store.getState().gameState.scandals,
    persisted.state.scandals,
  );
  saved = {
    state: oldSave,
    plannedActions: [{ id: "legacy-plan", actionV2Id: "videoClipCampaign" }],
  };

  const savesBeforeLegacyHydrate = saves;

  await store.getState().hydrateGame();

  assert.equal(
    saves,
    savesBeforeLegacyHydrate + 1,
    "legacy unprepared save must persist its prepared upgrade exactly once",
  );

  assert(store.getState().gameState.preparedWeek);
  assert.equal(store.getState().plannedActions[0].id, "legacy-plan");

  const savesAfterLegacyUpgrade = saves;

  await store.getState().hydrateGame();

  assert.equal(
    saves,
    savesAfterLegacyUpgrade,
    "hydrating the upgraded legacy save must not append again",
  );

  const planningBase = copy(first);
  const action = planningBase.campaignActionsV2.find(
    (x) =>
      x.target.scope === "region" &&
      x.cost > 0 &&
      x.staffCost > 0 &&
      x.leaderTimeCost > 0 &&
      x.legality === "clean",
  );
  assert(action, "need a representative constrained action");
  const cases = [
    [
      "cash",
      (s) => {
        s.partyRuntime.player.cash = action.cost - 1;
      },
    ],
    [
      "legal spending",
      (s) => {
        s.partyRuntime.player.legalSpend =
          s.rules.legalSpendCap - action.cost + 1;
      },
    ],
    [
      "overall spending",
      (s) => {
        s.partyRuntime.player.graySpend = s.rules.spendCap - action.cost + 1;
      },
    ],
    [
      "staff",
      (s) => {
        s.partyRuntime.player.staffUsed =
          s.partyRuntime.player.staffCap - action.staffCost + 0.1;
      },
    ],
    [
      "leader time",
      (s) => {
        s.partyRuntime.player.leader.timeUsed =
          s.partyRuntime.player.leader.timeCap - action.leaderTimeCost + 0.1;
      },
    ],
    ["required target", () => {}],
  ];
  for (const [name, patch] of cases) {
    const state = copy(planningBase);
    patch(state);
    store.setState({ gameState: state, plannedActions: [] });
    assert.equal(
      store
        .getState()
        .planCampaignActionV2(
          action.id,
          name === "required target" ? undefined : "praha",
        ),
      false,
      name,
    );
    assert.deepEqual(store.getState().plannedActions, []);
  }
  const state = copy(planningBase);
  delete state.preparedWeek;
  state.partyRuntime.player.cash = action.cost;
  store.setState({ gameState: state, plannedActions: [] });
  assert.equal(store.getState().planCampaignActionV2(action.id, "praha"), true);
  assert(
    store.getState().gameState.preparedWeek,
    "planning prepares the current week",
  );
  assert.equal(
    store.getState().planCampaignActionV2(action.id, "praha"),
    false,
    "reserved cash counts",
  );
  store.getState().removePlannedAction(store.getState().plannedActions[0].id);
  assert.equal(store.getState().planCampaignActionV2(action.id, "praha"), true);
  store.setState({ gameState: copy(planningBase), plannedActions: [] });
  const opponentAction = planningBase.campaignActionsV2.find(
    action => action.target.scope === "opponent",
  );
  assert(opponentAction, "need an opponent-target action");
  const opponentId = planningBase.parties.find(party => party.id !== "player").id;
  assert.equal(
    store.getState().planCampaignActionV2(opponentAction.id, undefined, undefined, opponentId),
    true,
  );
  assert.equal(store.getState().plannedActions[0].targetPartyId, opponentId);
  assert.equal(
    saved.plannedActions[0].targetPartyId,
    opponentId,
    "opponent target survives persistence",
  );
  console.log(
    "Week lifecycle and store tests passed (including all six planning constraints).",
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
