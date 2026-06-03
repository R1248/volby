import { writeFileSync } from "node:fs";

import {
  aggregateForCalibration,
  regionalSanityScore,
  type RegionalSanityScore,
} from "../src/game/calibration/regionalSanityCheck";
import {
  nationalVoteTargets2025,
  regionalVoteTargets2025,
  voteAggregationGroups,
  type CalibrationGroupId,
} from "../src/game/calibration/regionalVoteTargets2025";
import { createInitialGameState, partyIds } from "../src/game/seed";
import type {
  GameState,
  LatentDimension8D,
  LatentVector8D,
  PartyId,
  ReputationVector,
} from "../src/game/types";
import { aggregateRegionalWeightByGameRegion } from "../src/simulation/engine/regionalAggregation";
import type { VoterPoint } from "../src/simulation/model/types";
import { loadClusteredRegionalizedVoterFieldV03 } from "../src/simulation/model/voterFieldLoader";
import type { RegionId } from "../src/types/region";

const dimensions: LatentDimension8D[] = [
  "econ",
  "culture",
  "authority",
  "establishment",
  "globalism",
  "green",
  "ukraine",
];

type RegionShift = Record<LatentDimension8D, number>;
type RegionShiftMap = Record<RegionId, RegionShift>;
type SupportRecord = Record<PartyId, number>;
type PartyRegionalPrior = Record<PartyId, Record<RegionId, number>>;
type LogAmplitude = Record<PartyId, number>;

type HybridParams = {
  logAmplitude: LogAmplitude;
  partyRegionalPrior: PartyRegionalPrior;
  regionShift: RegionShiftMap;
};

type GroupSanityRow = {
  deltaPct: number;
  errorPct: number;
  groupId: CalibrationGroupId;
  modeledPct: number;
  targetPct: number;
};

type IterationDiagnostics = {
  avgAbsPartyRegionalPrior: number;
  avgAbsRegionShift: number;
  clampedPartyRegionalPriorShare: number;
  clampedRegionShiftShare: number;
  iteration: number;
  nationalGroupMaePct: number;
  nationalGroupMaxErrorPct: number;
  regionalMaePct: number;
  regionalMaxErrorPct: number;
};

type FitSnapshot = {
  nationalGroupSanity: GroupSanityRow[];
  nationalSupport: SupportRecord;
  regionalSanity: RegionalSanityScore;
  regionalSupport: Record<RegionId, SupportRecord>;
};

type ScenarioResult = FitSnapshot & {
  label: string;
  nationalGroupMaePct: number;
  nationalGroupMaxErrorPct: number;
};

type CliOptions = {
  ampLR: number;
  clampLogAmplitudeMax: number;
  clampLogAmplitudeMin: number;
  clampPrior: number;
  clampShift: number;
  iterations: number;
  outputPath: string;
  priorDecay: number;
  priorLR: number;
  regionLR: number;
  regionShiftDecay: number;
  write: boolean;
};

const options = parseOptions(process.argv.slice(2));
const report = fitBaselineHybrid(options);
printReport(report, options);

if (options.write) {
  writeFileSync(
    options.outputPath,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        note: "Offline hybrid baseline fit. Runtime gameplay does not load this artifact unless explicitly wired later.",
        options,
        acceptance: report.acceptance,
        final: {
          diagnostics: report.finalDiagnostics,
          nationalGroupSanity: report.finalSnapshot.nationalGroupSanity,
          partyAmplitude: Object.fromEntries(
            partyIds.map((partyId) => [
              partyId,
              Math.exp(report.finalParams.logAmplitude[partyId]),
            ]),
          ),
          partyRegionalPrior: report.finalParams.partyRegionalPrior,
          regionalSanity: {
            maePct: report.finalSnapshot.regionalSanity.maePct,
            maxErrorPct: report.finalSnapshot.regionalSanity.maxErrorPct,
            worstRows: report.finalSnapshot.regionalSanity.worstRows.slice(
              0,
              30,
            ),
          },
          regionShift: report.finalParams.regionShift,
        },
        contributionBreakdown: report.contributionBreakdown,
        comparison: report.comparison.map((scenario) => ({
          label: scenario.label,
          nationalGroupMaePct: scenario.nationalGroupMaePct,
          nationalGroupMaxErrorPct: scenario.nationalGroupMaxErrorPct,
          regionalMaePct: scenario.regionalSanity.maePct,
          regionalMaxErrorPct: scenario.regionalSanity.maxErrorPct,
        })),
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(`\nWrote hybrid baseline calibration to ${options.outputPath}`);
}

function fitBaselineHybrid(cliOptions: CliOptions) {
  const state = createInitialGameState();
  const points = loadClusteredRegionalizedVoterFieldV03().points;
  const regionalWeights = aggregateRegionalWeightByGameRegion(points);
  const params = createInitialParams(state);
  const iterations: IterationDiagnostics[] = [];

  for (let iteration = 0; iteration <= cliOptions.iterations; iteration += 1) {
    const snapshot = evaluateParams(state, points, params);
    iterations.push(
      createIterationDiagnostics(iteration, snapshot, params, cliOptions),
    );

    if (iteration === cliOptions.iterations) {
      break;
    }

    updateLogAmplitudes(params, snapshot, cliOptions);
    updateRegionShifts(state, points, params, snapshot, cliOptions);
    updatePartyRegionalPrior(params, snapshot, cliOptions);
    removeNationalPriorComponent(
      params.partyRegionalPrior,
      regionalWeights,
      cliOptions.clampPrior,
    );
  }

  const finalSnapshot = evaluateParams(state, points, params);
  const finalDiagnostics = createIterationDiagnostics(
    cliOptions.iterations,
    finalSnapshot,
    params,
    cliOptions,
  );
  const comparison = createComparison(state, points, params, cliOptions);

  return {
    acceptance: createAcceptance(finalDiagnostics),
    comparison,
    contributionBreakdown: createContributionBreakdown(comparison),
    finalDiagnostics,
    finalParams: params,
    finalSnapshot,
    iterations,
  };
}

function createInitialParams(state: GameState): HybridParams {
  return {
    logAmplitude: Object.fromEntries(
      partyIds.map((partyId) => [
        partyId,
        Math.log(Math.max(0.01, state.partyRuntime[partyId].field.amplitude)),
      ]),
    ) as LogAmplitude,
    partyRegionalPrior: emptyPartyRegionalPrior(),
    regionShift: emptyRegionShiftMap(),
  };
}

function evaluateParams(
  state: GameState,
  points: VoterPoint[],
  params: HybridParams,
): FitSnapshot {
  const regionalSupport = computeRegionalSupportForParams(
    state,
    points,
    params,
  );
  const nationalSupport = computeNationalSupportWithPoints(
    state,
    regionalSupport,
    points,
  );

  return {
    nationalGroupSanity: createNationalGroupSanity(nationalSupport),
    nationalSupport,
    regionalSanity: regionalSanityScore(regionalSupport),
    regionalSupport,
  };
}

function updateLogAmplitudes(
  params: HybridParams,
  snapshot: FitSnapshot,
  cliOptions: CliOptions,
) {
  const modeledGroups = aggregateForCalibration(snapshot.nationalSupport);

  for (const groupId of Object.keys(
    voteAggregationGroups,
  ) as CalibrationGroupId[]) {
    const residual = logRatio(
      nationalVoteTargets2025[groupId],
      modeledGroups[groupId],
    );

    for (const partyId of voteAggregationGroups[groupId]) {
      params.logAmplitude[partyId] = clamp(
        params.logAmplitude[partyId] + cliOptions.ampLR * residual,
        cliOptions.clampLogAmplitudeMin,
        cliOptions.clampLogAmplitudeMax,
      );
    }
  }
}

function updateRegionShifts(
  state: GameState,
  points: VoterPoint[],
  params: HybridParams,
  snapshot: FitSnapshot,
  cliOptions: CliOptions,
) {
  const regionMeans = computeRegionMeans(points, params.regionShift);
  const deltas = emptyRegionShiftMap();

  for (const [regionId, target] of Object.entries(regionalVoteTargets2025) as [
    RegionId,
    Record<CalibrationGroupId, number>,
  ][]) {
    const modeledGroups = aggregateForCalibration(
      snapshot.regionalSupport[regionId],
    );
    const regionMean = regionMeans[regionId];

    for (const groupId of Object.keys(
      voteAggregationGroups,
    ) as CalibrationGroupId[]) {
      const residual = target[groupId] - modeledGroups[groupId];
      const groupWeight = groupCalibrationWeight(groupId);

      if (Math.abs(residual) < 0.001 || groupWeight <= 0) {
        continue;
      }

      const center = calibrationGroupCenter(state, groupId);
      for (const dimension of dimensions) {
        const direction = center[dimension] - regionMean[dimension];
        deltas[regionId][dimension] +=
          cliOptions.regionLR *
          groupWeight *
          dimensionCalibrationWeight(dimension) *
          residual *
          direction;
      }
    }
  }

  for (const regionId of Object.keys(regionalVoteTargets2025) as RegionId[]) {
    for (const dimension of dimensions) {
      params.regionShift[regionId][dimension] = clamp(
        (params.regionShift[regionId][dimension] +
          deltas[regionId][dimension]) *
          cliOptions.regionShiftDecay,
        -cliOptions.clampShift,
        cliOptions.clampShift,
      );
    }
  }
}

function updatePartyRegionalPrior(
  params: HybridParams,
  snapshot: FitSnapshot,
  cliOptions: CliOptions,
) {
  for (const [regionId, target] of Object.entries(regionalVoteTargets2025) as [
    RegionId,
    Record<CalibrationGroupId, number>,
  ][]) {
    const modeledGroups = aggregateForCalibration(
      snapshot.regionalSupport[regionId],
    );

    for (const groupId of Object.keys(
      voteAggregationGroups,
    ) as CalibrationGroupId[]) {
      const residual = logRatio(target[groupId], modeledGroups[groupId]);
      const weight = priorCalibrationWeight(groupId);

      for (const partyId of voteAggregationGroups[groupId]) {
        params.partyRegionalPrior[partyId][regionId] = clamp(
          (params.partyRegionalPrior[partyId][regionId] +
            cliOptions.priorLR * weight * residual) *
            cliOptions.priorDecay,
          -cliOptions.clampPrior,
          cliOptions.clampPrior,
        );
      }
    }
  }
}

function removeNationalPriorComponent(
  prior: PartyRegionalPrior,
  regionalWeights: Record<string, number>,
  clampPrior: number,
) {
  const totalWeight =
    Object.keys(regionalVoteTargets2025).reduce(
      (sum, regionId) => sum + (regionalWeights[regionId] ?? 1),
      0,
    ) || 1;

  for (const partyId of partyIds) {
    const weightedMean =
      (Object.keys(regionalVoteTargets2025) as RegionId[]).reduce(
        (sum, regionId) =>
          sum + prior[partyId][regionId] * (regionalWeights[regionId] ?? 1),
        0,
      ) / totalWeight;

    for (const regionId of Object.keys(regionalVoteTargets2025) as RegionId[]) {
      prior[partyId][regionId] = clamp(
        prior[partyId][regionId] - weightedMean,
        -clampPrior,
        clampPrior,
      );
    }
  }
}

function computeRegionalSupportForParams(
  state: GameState,
  points: VoterPoint[],
  params: HybridParams,
): Record<RegionId, SupportRecord> {
  const totals = Object.fromEntries(
    state.regions.map((region) => [region.id, zeroPartyRecord()]),
  ) as Record<RegionId, SupportRecord>;
  const regionsById = Object.fromEntries(
    state.regions.map((region) => [region.id, region]),
  );
  const partyContexts = partyIds.map((partyId) => ({
    partyId,
    reputation: state.partyRuntime[partyId].reputation,
    runtimeField: state.partyRuntime[partyId].field,
    organization: state.partyRuntime[partyId].organization,
  }));
  const utilities = new Array<number>(partyContexts.length);

  for (const point of points) {
    const regionId = regionIdFromKraj(point.geography?.krajId);
    if (!regionId) {
      continue;
    }

    const region = regionsById[regionId];
    if (!region) {
      continue;
    }

    const shiftedPosition = applyRegionShift(
      point.position,
      params.regionShift[regionId],
    );
    let total = 0.18;

    for (let index = 0; index < partyContexts.length; index += 1) {
      const context = partyContexts[index];
      const utility = computeUtilityForPoint({
        logAmplitude: params.logAmplitude[context.partyId],
        organization: context.organization[regionId] ?? 0.25,
        partyRegionalPrior:
          params.partyRegionalPrior[context.partyId][regionId],
        point,
        position: shiftedPosition,
        reputation: context.reputation,
        runtimeField: context.runtimeField,
      });
      utilities[index] = utility;
      total += utility;
    }

    const turnout = preparedTurnoutProbability(
      point.turnoutBase ?? 0.65,
      region.turnoutModifier,
    );
    const voterTurnoutWeight = point.weight * turnout;

    for (let index = 0; index < partyContexts.length; index += 1) {
      totals[regionId][partyContexts[index].partyId] +=
        voterTurnoutWeight * (utilities[index] / total);
    }
  }

  return Object.fromEntries(
    state.regions.map((region) => [
      region.id,
      normalizePartyRecord(totals[region.id]),
    ]),
  ) as Record<RegionId, SupportRecord>;
}

function computeUtilityForPoint(input: {
  logAmplitude: number;
  organization: number;
  partyRegionalPrior: number;
  point: VoterPoint;
  position: LatentVector8D;
  reputation: ReputationVector;
  runtimeField: GameState["partyRuntime"][PartyId]["field"];
}) {
  const kernel = Math.exp(
    -0.5 * ideologicalDistance8D(input.position, input.runtimeField),
  );
  const scandalSensitivity = 0.45 + (input.point.volatility ?? 0.5) * 0.25;
  const reputationFit =
    0.18 * input.reputation.trust +
    0.12 * input.reputation.competence +
    0.12 * input.reputation.authenticity +
    0.1 * input.reputation.integrity +
    0.08 * input.reputation.consistency -
    scandalSensitivity * input.reputation.controversy * 0.16;
  const logUtility =
    input.logAmplitude +
    Math.log(Math.max(0.001, kernel)) +
    reputationFit +
    input.organization * 0.42 +
    input.partyRegionalPrior;

  return Math.max(0.001, Math.exp(logUtility));
}

function computeNationalSupportWithPoints(
  state: GameState,
  regionalSupport: Record<RegionId, SupportRecord>,
  points: VoterPoint[],
): SupportRecord {
  const weighted = zeroPartyRecord();
  const regionalWeights = aggregateRegionalWeightByGameRegion(points);
  const totalPopulation = state.regions.reduce(
    (sum, region) =>
      sum + (regionalWeights[region.id] ?? region.populationWeight),
    0,
  );

  for (const region of state.regions) {
    const support = regionalSupport[region.id];
    for (const partyId of partyIds) {
      weighted[partyId] +=
        support[partyId] *
        (regionalWeights[region.id] ?? region.populationWeight);
    }
  }

  for (const partyId of partyIds) {
    weighted[partyId] /= totalPopulation || 1;
  }

  return normalizePartyRecord(weighted);
}

function createComparison(
  state: GameState,
  points: VoterPoint[],
  hybridParams: HybridParams,
  cliOptions: CliOptions,
): ScenarioResult[] {
  const rawParams = createInitialParams(state);
  const nationalOnlyParams = calibrateNationalOnly(state, points, cliOptions);
  const regionOnlyParams = cloneParams(rawParams);
  regionOnlyParams.regionShift = clone(hybridParams.regionShift);
  const fittedAmplitudeAndRegionShiftParams = cloneParams(hybridParams);
  fittedAmplitudeAndRegionShiftParams.partyRegionalPrior =
    emptyPartyRegionalPrior();

  return [
    evaluateScenario("A raw seed + raw field", state, points, rawParams),
    evaluateScenario(
      "B national-only calibrated",
      state,
      points,
      nationalOnlyParams,
    ),
    evaluateScenario(
      "C region shifts only with raw amplitudes",
      state,
      points,
      regionOnlyParams,
    ),
    evaluateScenario(
      "E fitted amplitudes + fitted region shifts only",
      state,
      points,
      fittedAmplitudeAndRegionShiftParams,
    ),
    evaluateScenario("D hybrid fit", state, points, hybridParams),
  ];
}

function createContributionBreakdown(scenarios: ScenarioResult[]) {
  return {
    nationalOnly: scenarioSummary(
      requireScenario(scenarios, "B national-only calibrated"),
    ),
    fittedAmplitudeAndRegionShift: scenarioSummary(
      requireScenario(
        scenarios,
        "E fitted amplitudes + fitted region shifts only",
      ),
    ),
    hybrid: scenarioSummary(requireScenario(scenarios, "D hybrid fit")),
  };
}

function scenarioSummary(scenario: ScenarioResult) {
  return {
    label: scenario.label,
    nationalGroupMaePct: scenario.nationalGroupMaePct,
    nationalGroupMaxErrorPct: scenario.nationalGroupMaxErrorPct,
    regionalMaePct: scenario.regionalSanity.maePct,
    regionalMaxErrorPct: scenario.regionalSanity.maxErrorPct,
  };
}

function requireScenario(scenarios: ScenarioResult[], label: string) {
  const scenario = scenarios.find((item) => item.label === label);
  if (!scenario) {
    throw new Error(`Missing scenario ${label}`);
  }
  return scenario;
}

function calibrateNationalOnly(
  state: GameState,
  points: VoterPoint[],
  cliOptions: CliOptions,
) {
  const params = createInitialParams(state);

  for (let iteration = 0; iteration < 36; iteration += 1) {
    const snapshot = evaluateParams(state, points, params);
    updateLogAmplitudes(params, snapshot, cliOptions);
  }

  return params;
}

function evaluateScenario(
  label: string,
  state: GameState,
  points: VoterPoint[],
  params: HybridParams,
): ScenarioResult {
  const snapshot = evaluateParams(state, points, params);
  const nationalGroupErrors = snapshot.nationalGroupSanity.map(
    (row) => row.errorPct,
  );

  return {
    ...snapshot,
    label,
    nationalGroupMaePct: average(nationalGroupErrors),
    nationalGroupMaxErrorPct: Math.max(...nationalGroupErrors),
  };
}

function createIterationDiagnostics(
  iteration: number,
  snapshot: FitSnapshot,
  params: HybridParams,
  cliOptions: CliOptions,
): IterationDiagnostics {
  const nationalGroupErrors = snapshot.nationalGroupSanity.map(
    (row) => row.errorPct,
  );
  const priorValues = partyIds.flatMap((partyId) =>
    (Object.keys(regionalVoteTargets2025) as RegionId[]).map(
      (regionId) => params.partyRegionalPrior[partyId][regionId],
    ),
  );
  const shiftValues = (Object.keys(regionalVoteTargets2025) as RegionId[])
    .flatMap((regionId) =>
      dimensions.map((dimension) => params.regionShift[regionId][dimension]),
    );

  return {
    avgAbsPartyRegionalPrior: average(priorValues.map(Math.abs)),
    avgAbsRegionShift: average(shiftValues.map(Math.abs)),
    clampedPartyRegionalPriorShare: shareAtClamp(
      priorValues,
      cliOptions.clampPrior,
    ),
    clampedRegionShiftShare: shareAtClamp(shiftValues, cliOptions.clampShift),
    iteration,
    nationalGroupMaePct: average(nationalGroupErrors),
    nationalGroupMaxErrorPct: Math.max(...nationalGroupErrors),
    regionalMaePct: snapshot.regionalSanity.maePct,
    regionalMaxErrorPct: snapshot.regionalSanity.maxErrorPct,
  };
}

function createNationalGroupSanity(support: SupportRecord): GroupSanityRow[] {
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

function calibrationGroupCenter(
  state: GameState,
  groupId: CalibrationGroupId,
): LatentVector8D {
  const partyIdsForGroup = voteAggregationGroups[groupId];
  const totalTarget =
    partyIdsForGroup.reduce(
      (sum, partyId) => sum + partyTargetShare(partyId),
      0,
    ) || 1;
  const center = emptyShift();

  for (const partyId of partyIdsForGroup) {
    const partyCenter = state.partyRuntime[partyId].field.center8D;
    if (!partyCenter) {
      throw new Error(`Missing center8D for ${partyId}`);
    }

    const weight = partyTargetShare(partyId) / totalTarget;
    for (const dimension of dimensions) {
      center[dimension] += partyCenter[dimension] * weight;
    }
  }

  return center;
}

function partyTargetShare(partyId: PartyId) {
  if (partyId === "ods") return nationalVoteTargets2025.spolu * (27 / 52);
  if (partyId === "kdu") return nationalVoteTargets2025.spolu * (16 / 52);
  if (partyId === "top09") return nationalVoteTargets2025.spolu * (9 / 52);
  if (partyId === "player") return nationalVoteTargets2025.player;
  if (partyId === "stan") return nationalVoteTargets2025.stan;
  if (partyId === "pirates") return nationalVoteTargets2025.pirates;
  if (partyId === "spd") return nationalVoteTargets2025.spd;
  if (partyId === "motorists") return nationalVoteTargets2025.motorists;
  if (partyId === "stacilo") return nationalVoteTargets2025.stacilo;
  if (partyId === "prisaha") return nationalVoteTargets2025.prisaha;
  if (partyId === "generace") return nationalVoteTargets2025.generace;
  return nationalVoteTargets2025.others;
}

function computeRegionMeans(points: VoterPoint[], shifts: RegionShiftMap) {
  const buckets = new Map<RegionId, { sums: RegionShift; weight: number }>();

  for (const point of points) {
    const regionId = regionIdFromKraj(point.geography?.krajId);
    if (!regionId) {
      continue;
    }

    const position = applyRegionShift(point.position, shifts[regionId]);
    const bucket = buckets.get(regionId) ?? { sums: emptyShift(), weight: 0 };
    const weight = point.weight ?? 1;
    bucket.weight += weight;

    for (const dimension of dimensions) {
      bucket.sums[dimension] += position[dimension] * weight;
    }

    buckets.set(regionId, bucket);
  }

  return Object.fromEntries(
    [...buckets.entries()].map(([regionId, bucket]) => [
      regionId,
      Object.fromEntries(
        dimensions.map((dimension) => [
          dimension,
          bucket.sums[dimension] / Math.max(0.000001, bucket.weight),
        ]),
      ) as RegionShift,
    ]),
  ) as Record<RegionId, RegionShift>;
}

function applyRegionShift(
  position: LatentVector8D,
  shift: RegionShift,
): LatentVector8D {
  return {
    authority: clamp(position.authority + shift.authority, -1, 1),
    culture: clamp(position.culture + shift.culture, -1, 1),
    econ: clamp(position.econ + shift.econ, -1, 1),
    establishment: clamp(position.establishment + shift.establishment, -1, 1),
    globalism: clamp(position.globalism + shift.globalism, -1, 1),
    green: clamp(position.green + shift.green, -1, 1),
    ukraine: clamp(position.ukraine + shift.ukraine, -1, 1),
  };
}

function ideologicalDistance8D(
  position: LatentVector8D,
  field: GameState["partyRuntime"][PartyId]["field"],
) {
  const center = field.center8D;
  const width = field.width8D;
  const salience = field.salience8D;

  if (!center || !width) {
    return 0;
  }

  return dimensions.reduce((sum, dimension) => {
    const normalized =
      (position[dimension] - center[dimension]) /
      Math.max(0.15, width[dimension]);
    return sum + (salience?.[dimension] ?? 1) * normalized * normalized;
  }, 0);
}

function createAcceptance(finalDiagnostics: IterationDiagnostics) {
  return {
    nationalMaeOk: finalDiagnostics.nationalGroupMaePct <= 0.1,
    partyRegionalPriorAvgAbsOk:
      finalDiagnostics.avgAbsPartyRegionalPrior <= 0.2,
    partyRegionalPriorClampedShareOk:
      finalDiagnostics.clampedPartyRegionalPriorShare <= 0.05,
    regionalMaeOk: finalDiagnostics.regionalMaePct <= 0.6,
    regionalMaxOk: finalDiagnostics.regionalMaxErrorPct <= 3,
  };
}

function printReport(
  report: ReturnType<typeof fitBaselineHybrid>,
  cliOptions: CliOptions,
) {
  console.log("\n=== Hybrid baseline fit ===");
  console.log(
    `options: iterations=${cliOptions.iterations}, ampLR=${cliOptions.ampLR}, regionLR=${cliOptions.regionLR}, priorLR=${cliOptions.priorLR}, regionShiftDecay=${cliOptions.regionShiftDecay}, priorDecay=${cliOptions.priorDecay}`,
  );

  console.log("\nIteration sweep");
  for (const row of report.iterations) {
    console.log(
      `iter ${row.iteration}: national MAE ${formatPp(row.nationalGroupMaePct)}, national max ${formatPp(
        row.nationalGroupMaxErrorPct,
      )}, regional MAE ${formatPp(row.regionalMaePct)}, regional max ${formatPp(
        row.regionalMaxErrorPct,
      )}, avgAbs regionShift ${row.avgAbsRegionShift.toFixed(
        3,
      )}, avgAbs partyRegionalPrior ${row.avgAbsPartyRegionalPrior.toFixed(
        3,
      )}, clamped prior ${formatPercent(row.clampedPartyRegionalPriorShare)}`,
    );
  }

  console.log("\nFinal acceptance");
  for (const [key, value] of Object.entries(report.acceptance)) {
    console.log(`${key}: ${value ? "OK" : "FAIL"}`);
  }

  console.log("\nFinal national group sanity");
  for (const row of report.finalSnapshot.nationalGroupSanity) {
    console.log(formatGroupRow(row));
  }

  console.log("\nFinal regional worst rows");
  for (const row of report.finalSnapshot.regionalSanity.worstRows.slice(0, 30)) {
    console.log(formatRegionalRow(row));
  }

  console.log("\nLargest region shifts");
  for (const row of largestRegionShifts(report.finalParams.regionShift)) {
    console.log(
      `${row.regionId}: norm ${row.norm.toFixed(3)} | ${dimensions
        .map((dimension) => `${dimension} ${formatSigned(row.shift[dimension])}`)
        .join(", ")}`,
    );
  }

  console.log("\nLargest partyRegionalPrior rows");
  for (const row of largestPartyRegionalPriorRows(
    report.finalParams.partyRegionalPrior,
  )) {
    console.log(
      `${row.partyId} | ${row.regionId} | prior ${formatSigned(row.prior)}`,
    );
  }

  console.log("\nComparison");
  for (const scenario of report.comparison) {
    console.log(
      `${scenario.label}: national MAE ${formatPp(
        scenario.nationalGroupMaePct,
      )}, national max ${formatPp(
        scenario.nationalGroupMaxErrorPct,
      )}, regional MAE ${formatPp(
        scenario.regionalSanity.maePct,
      )}, regional max ${formatPp(scenario.regionalSanity.maxErrorPct)}`,
    );
  }

  if (!cliOptions.write) {
    console.log("\nDry run only. Add --write to write baseline calibration JSON.");
  }
}

function largestRegionShifts(regionShift: RegionShiftMap) {
  return (Object.keys(regionalVoteTargets2025) as RegionId[])
    .map((regionId) => ({
      norm: shiftNorm(regionShift[regionId]),
      regionId,
      shift: regionShift[regionId],
    }))
    .sort((a, b) => b.norm - a.norm)
    .slice(0, 14);
}

function largestPartyRegionalPriorRows(prior: PartyRegionalPrior) {
  return partyIds
    .flatMap((partyId) =>
      (Object.keys(regionalVoteTargets2025) as RegionId[]).map((regionId) => ({
        partyId,
        prior: prior[partyId][regionId],
        regionId,
      })),
    )
    .sort((a, b) => Math.abs(b.prior) - Math.abs(a.prior))
    .slice(0, 30);
}

function cloneParams(params: HybridParams): HybridParams {
  return clone(params);
}

function emptyRegionShiftMap(): RegionShiftMap {
  return Object.fromEntries(
    Object.keys(regionalVoteTargets2025).map((regionId) => [
      regionId,
      emptyShift(),
    ]),
  ) as RegionShiftMap;
}

function emptyPartyRegionalPrior(): PartyRegionalPrior {
  return Object.fromEntries(
    partyIds.map((partyId) => [
      partyId,
      Object.fromEntries(
        Object.keys(regionalVoteTargets2025).map((regionId) => [regionId, 0]),
      ),
    ]),
  ) as PartyRegionalPrior;
}

function emptyShift(): RegionShift {
  return {
    authority: 0,
    culture: 0,
    econ: 0,
    establishment: 0,
    globalism: 0,
    green: 0,
    ukraine: 0,
  };
}

function zeroPartyRecord(): SupportRecord {
  return Object.fromEntries(partyIds.map((partyId) => [partyId, 0])) as SupportRecord;
}

function normalizePartyRecord(record: SupportRecord): SupportRecord {
  const total =
    partyIds.reduce(
      (sum, partyId) => sum + Math.max(0, record[partyId] ?? 0),
      0,
    ) || 1;

  return Object.fromEntries(
    partyIds.map((partyId) => [
      partyId,
      Math.max(0, record[partyId] ?? 0) / total,
    ]),
  ) as SupportRecord;
}

function preparedTurnoutProbability(
  turnoutBase: number,
  regionTurnoutModifier: number,
) {
  return clamp(turnoutBase + regionTurnoutModifier, 0.25, 0.95);
}

function groupCalibrationWeight(groupId: CalibrationGroupId) {
  const weights: Record<CalibrationGroupId, number> = {
    player: 1.35,
    spolu: 1.25,
    stan: 0.9,
    pirates: 0.85,
    spd: 0.9,
    motorists: 0.55,
    stacilo: 0.55,
    prisaha: 0.12,
    generace: 0.05,
    others: 0.05,
  };

  return weights[groupId];
}

function priorCalibrationWeight(groupId: CalibrationGroupId) {
  const weights: Record<CalibrationGroupId, number> = {
    player: 1,
    spolu: 1,
    stan: 0.9,
    pirates: 0.9,
    spd: 0.9,
    motorists: 0.8,
    stacilo: 0.75,
    prisaha: 0.45,
    generace: 0.25,
    others: 0.25,
  };

  return weights[groupId];
}

function dimensionCalibrationWeight(dimension: LatentDimension8D) {
  const weights: Record<LatentDimension8D, number> = {
    econ: 0.7,
    culture: 0.85,
    authority: 0.9,
    establishment: 1.45,
    globalism: 1.25,
    green: 0.8,
    ukraine: 1.05,
  };

  return weights[dimension];
}

function regionIdFromKraj(krajId?: string): RegionId | undefined {
  const map: Record<string, RegionId> = {
    CZ010: "praha",
    CZ020: "stredocesky",
    CZ031: "jihocesky",
    CZ032: "plzensky",
    CZ041: "karlovarsky",
    CZ042: "ustecky",
    CZ051: "liberecky",
    CZ052: "kralovehradecky",
    CZ053: "pardubicky",
    CZ063: "vysocina",
    CZ064: "jihomoravsky",
    CZ071: "olomoucky",
    CZ072: "zlinsky",
    CZ080: "moravskoslezsky",
  };

  return krajId ? map[krajId] : undefined;
}

function parseOptions(args: string[]): CliOptions {
  return {
    ampLR: numberArg(args, "--amp-lr", 0.65),
    clampLogAmplitudeMax: numberArg(args, "--max-log-amplitude", Math.log(12)),
    clampLogAmplitudeMin: numberArg(args, "--min-log-amplitude", Math.log(0.01)),
    clampPrior: numberArg(args, "--clamp-prior", 0.45),
    clampShift: numberArg(args, "--clamp-shift", 0.18),
    iterations: numberArg(args, "--iterations", 28),
    outputPath: stringArg(
      args,
      "--output",
      "src/game/calibration/baselineCalibration.v04.json",
    ),
    priorDecay: numberArg(args, "--prior-decay", 0.96),
    priorLR: numberArg(args, "--prior-lr", 0.52),
    regionLR: numberArg(args, "--region-lr", 0.85),
    regionShiftDecay: numberArg(args, "--region-shift-decay", 0.9),
    write: args.includes("--write"),
  };
}

function numberArg(args: string[], name: string, fallback: number) {
  const raw = args.find((arg) => arg.startsWith(`${name}=`))?.split("=")[1];
  const parsed = raw === undefined ? Number.NaN : Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function stringArg(args: string[], name: string, fallback: string) {
  return (
    args
      .find((arg) => arg.startsWith(`${name}=`))
      ?.split("=")
      .slice(1)
      .join("=") || fallback
  );
}

function logRatio(target: number, actual: number) {
  return Math.log(Math.max(0.0025, target) / Math.max(0.0025, actual));
}

function shareAtClamp(values: number[], clampAbs: number) {
  return values.length > 0
    ? values.filter((value) => Math.abs(value) >= clampAbs - 0.000001).length /
        values.length
    : 0;
}

function shiftNorm(shift: RegionShift) {
  return Math.sqrt(
    dimensions.reduce(
      (sum, dimension) => sum + shift[dimension] * shift[dimension],
      0,
    ),
  );
}

function average(values: number[]) {
  return values.length > 0
    ? values.reduce((sum, value) => sum + value, 0) / values.length
    : 0;
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function formatGroupRow(row: GroupSanityRow) {
  return `${row.groupId}: modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
    row.targetPct,
  )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}

function formatRegionalRow(row: {
  deltaPct: number;
  errorPct: number;
  groupId: CalibrationGroupId;
  modeledPct: number;
  regionId: RegionId;
  targetPct: number;
}) {
  return `${row.regionId} | ${row.groupId} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
    row.targetPct,
  )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(2)} %`;
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

function formatSigned(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(3)}`;
}
