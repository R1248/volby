import {
  getNationalAmplitudeCalibrationRunCount,
  resetNationalAmplitudeCalibrationRunCount,
} from "../src/game/baselineCalibration";
import {
  aggregateForCalibration,
  regionalSanityScore,
} from "../src/game/calibration/regionalSanityCheck";
import {
  nationalVoteTargets2025,
  type CalibrationGroupId,
} from "../src/game/calibration/regionalVoteTargets2025";
import { initializeComputedState } from "../src/game/engine";
import { DEFAULT_BASELINE_MODE, createInitialGameState } from "../src/game/seed";
import type { GameState, PartyId } from "../src/game/types";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const defaultState = createInitialGameState();
assert(
  defaultState.baselineMode === DEFAULT_BASELINE_MODE,
  `Expected default baseline mode ${DEFAULT_BASELINE_MODE}, got ${defaultState.baselineMode}`,
);
assert(DEFAULT_BASELINE_MODE === "legacy-fit-national", "Default baseline mode should remain legacy-fit-national for now");

resetNationalAmplitudeCalibrationRunCount();
const legacyState = initializeComputedState(createInitialGameState({ baselineMode: "legacy-fit-national" }));
const legacyCalibrationRuns = getNationalAmplitudeCalibrationRunCount();
assert(legacyState.baselineMode === "legacy-fit-national", "Legacy state must keep legacy-fit-national mode");
assert(legacyState.baselineCalibrated === true, "Legacy mode should mark baseline as calibrated after initialization");
assert(legacyCalibrationRuns > 0, "Legacy mode should run national amplitude calibration");
assertHealthyState(legacyState);

resetNationalAmplitudeCalibrationRunCount();
const precalibratedState = initializeComputedState(createInitialGameState({ baselineMode: "precalibrated-v04" }));
const precalibratedCalibrationRuns = getNationalAmplitudeCalibrationRunCount();
assert(precalibratedState.baselineMode === "precalibrated-v04", "Precalibrated state must keep precalibrated-v04 mode");
assert(precalibratedState.baselineCalibrated === true, "Precalibrated mode should mark baseline as calibrated");
assert(precalibratedState.partyRegionalPriorStrength === 1, "Precalibrated mode should enable partyRegionalPrior strength 1");
assert(precalibratedCalibrationRuns === 0, "Precalibrated mode must not run national amplitude calibration");
assertHealthyState(precalibratedState);

const precalibratedNationalSanity = createNationalGroupSanity(precalibratedState.nationalSupport);
const nationalErrors = precalibratedNationalSanity.map((row) => row.errorPct);
const nationalMaePct = average(nationalErrors);
const nationalMaxErrorPct = Math.max(...nationalErrors);
const regionalSanity = regionalSanityScore(precalibratedState.regionalSupport);

assert(nationalMaePct <= 0.1, `Precalibrated national MAE too high: ${nationalMaePct.toFixed(2)} pp`);
assert(nationalMaxErrorPct <= 0.25, `Precalibrated national max error too high: ${nationalMaxErrorPct.toFixed(2)} pp`);
assert(regionalSanity.maePct <= 0.6, `Precalibrated regional MAE too high: ${regionalSanity.maePct.toFixed(2)} pp`);
assert(regionalSanity.maxErrorPct <= 3, `Precalibrated regional max error too high: ${regionalSanity.maxErrorPct.toFixed(2)} pp`);

console.log(`Default baseline mode: ${DEFAULT_BASELINE_MODE}`);
console.log(`Legacy calibration runs: ${legacyCalibrationRuns}`);
console.log(`Precalibrated calibration runs: ${precalibratedCalibrationRuns}`);
console.log(
  `Precalibrated sanity: national MAE ${formatPp(nationalMaePct)}, national max ${formatPp(
    nationalMaxErrorPct,
  )}, regional MAE ${formatPp(regionalSanity.maePct)}, regional max ${formatPp(regionalSanity.maxErrorPct)}`,
);
console.log("Baseline mode smoke tests passed");

function assertHealthyState(state: GameState) {
  const nationalTotal = Object.values(state.nationalSupport).reduce((sum, value) => sum + value, 0);
  assert(Math.abs(nationalTotal - 1) < 0.000001, `National support must sum to 1, got ${nationalTotal}`);

  for (const region of state.regions) {
    const support = state.regionalSupport[region.id];
    assert(support, `Missing support for region ${region.id}`);
    const regionalTotal = Object.values(support).reduce((sum, value) => sum + value, 0);
    assert(Math.abs(regionalTotal - 1) < 0.000001, `Regional support for ${region.id} must sum to 1, got ${regionalTotal}`);
  }
}

function createNationalGroupSanity(support: Record<PartyId, number>) {
  const groupSupport = aggregateForCalibration(support);

  return Object.entries(nationalVoteTargets2025).map(([groupId, target]) => {
    const calibrationGroupId = groupId as CalibrationGroupId;
    const modeledPct = groupSupport[calibrationGroupId] * 100;
    const targetPct = target * 100;
    const deltaPct = modeledPct - targetPct;

    return {
      deltaPct,
      errorPct: Math.abs(deltaPct),
      groupId: calibrationGroupId,
      modeledPct,
      targetPct,
    };
  });
}

function average(values: number[]) {
  return values.length > 0 ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function formatPp(value: number) {
  return `${value.toFixed(2)} pp`;
}
