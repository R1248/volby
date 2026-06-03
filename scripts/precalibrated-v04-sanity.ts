import baselineCalibration from "../src/game/calibration/baselineCalibration.v04.json";
import type { BaselineCalibrationArtifact } from "../src/game/calibration/baselineCalibrationTypes";
import {
  aggregateForCalibration,
  regionalSanityScore,
  type RegionalSanityScore,
} from "../src/game/calibration/regionalSanityCheck";
import {
  nationalVoteTargets2025,
  type CalibrationGroupId,
} from "../src/game/calibration/regionalVoteTargets2025";
import { computeNationalSupport, computeRegionalSupport } from "../src/game/engine";
import { createInitialGameState } from "../src/game/seed";
import type { GameState, PartyId } from "../src/game/types";

type NationalGroupSanityRow = {
  deltaPct: number;
  errorPct: number;
  groupId: CalibrationGroupId;
  modeledPct: number;
  targetPct: number;
};

type ScenarioResult = {
  label: string;
  nationalGroupMaePct: number;
  nationalGroupMaxErrorPct: number;
  nationalGroupSanity: NationalGroupSanityRow[];
  regionalSanity: RegionalSanityScore;
};

const artifact = baselineCalibration as BaselineCalibrationArtifact;
const scenarios = [
  evaluateScenario("A raw v03 + raw seed", createRawState()),
  evaluateScenario("B raw v03 + fitted amplitudes", createFittedAmplitudeState()),
  evaluateScenario("C calibrated v04 + fitted amplitudes", createPrecalibratedV04State(false)),
  evaluateScenario("D calibrated v04 + fitted amplitudes + partyRegionalPrior", createPrecalibratedV04State(true)),
];

printReport(scenarios);

function createRawState() {
  const state = createInitialGameState();
  state.baselineCalibrated = true;
  state.baselineMode = "legacy-fit-national";
  state.partyRegionalPriorStrength = 0;
  return state;
}

function createFittedAmplitudeState() {
  const state = createRawState();
  applyFittedAmplitudes(state);
  return state;
}

function createPrecalibratedV04State(withPrior: boolean) {
  const state = createFittedAmplitudeState();
  state.baselineMode = "precalibrated-v04";
  state.partyRegionalPrior = artifact.final.partyRegionalPrior;
  state.partyRegionalPriorStrength = withPrior ? 1 : 0;
  return state;
}

function applyFittedAmplitudes(state: GameState) {
  for (const [partyId, amplitude] of Object.entries(artifact.final.partyAmplitude) as [PartyId, number][]) {
    if (!state.partyRuntime[partyId] || !Number.isFinite(amplitude) || amplitude <= 0) {
      continue;
    }
    state.partyRuntime[partyId].field.amplitude = amplitude;
  }
}

function evaluateScenario(label: string, state: GameState): ScenarioResult {
  const regionalSupport = computeRegionalSupport(state, { disableProgramModifier: true });
  const nationalSupport = computeNationalSupport(state, regionalSupport);
  const nationalGroupSanity = createNationalGroupSanity(nationalSupport);
  const nationalErrors = nationalGroupSanity.map((row) => row.errorPct);

  return {
    label,
    nationalGroupMaePct: average(nationalErrors),
    nationalGroupMaxErrorPct: Math.max(...nationalErrors),
    nationalGroupSanity,
    regionalSanity: regionalSanityScore(regionalSupport),
  };
}

function createNationalGroupSanity(support: Record<PartyId, number>): NationalGroupSanityRow[] {
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

function printReport(results: ScenarioResult[]) {
  console.log("\n=== Precalibrated v04 sanity ===");
  console.log("precalibrated-v04 path uses fitted amplitudes and partyRegionalPrior only; it does not call national runtime calibration.");

  console.log("\nScenario summary");
  for (const result of results) {
    console.log(
      `${result.label}: national MAE ${formatPp(result.nationalGroupMaePct)}, national max ${formatPp(
        result.nationalGroupMaxErrorPct,
      )}, regional MAE ${formatPp(result.regionalSanity.maePct)}, regional max ${formatPp(result.regionalSanity.maxErrorPct)}`,
    );
  }

  for (const result of results) {
    console.log(`\nTop 20 regional worst rows - ${result.label}`);
    for (const row of result.regionalSanity.worstRows.slice(0, 20)) {
      console.log(formatRegionalRow(row));
    }

    console.log(`\nTop 10 national group errors - ${result.label}`);
    for (const row of [...result.nationalGroupSanity].sort((a, b) => b.errorPct - a.errorPct).slice(0, 10)) {
      console.log(formatNationalRow(row));
    }
  }

  const finalScenario = requireScenario(results, "D calibrated v04 + fitted amplitudes + partyRegionalPrior");
  const acceptance = {
    nationalMaeOk: finalScenario.nationalGroupMaePct <= 0.1,
    nationalMaxOk: finalScenario.nationalGroupMaxErrorPct <= 0.25,
    regionalMaeOk: finalScenario.regionalSanity.maePct <= 0.6,
    regionalMaxOk: finalScenario.regionalSanity.maxErrorPct <= 3,
  };

  console.log("\nD acceptance");
  for (const [key, value] of Object.entries(acceptance)) {
    console.log(`${key}: ${value ? "OK" : "FAIL"}`);
  }
}

function requireScenario(results: ScenarioResult[], label: string) {
  const scenario = results.find((result) => result.label === label);
  if (!scenario) {
    throw new Error(`Missing scenario ${label}`);
  }
  return scenario;
}

function formatRegionalRow(row: RegionalSanityScore["rows"][number]) {
  return `${row.regionId} | ${row.groupId} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
    row.targetPct,
  )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}

function formatNationalRow(row: NationalGroupSanityRow) {
  return `${row.groupId}: modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
    row.targetPct,
  )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}

function average(values: number[]) {
  return values.length > 0 ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function formatPercentFromPct(value: number) {
  return `${value.toFixed(2)} %`;
}

function formatPp(value: number) {
  return `${value.toFixed(2)} pp`;
}

function formatSignedPp(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)} pp`;
}
