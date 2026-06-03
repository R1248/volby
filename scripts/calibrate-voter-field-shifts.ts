import { writeFileSync } from "node:fs";

import {
    calibratePartyAmplitudesToTargets,
    type BaselineSupportOptions,
} from "../src/game/baselineCalibration";
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
import {
    baselineTargetShares,
    createInitialGameState,
    partyIds,
} from "../src/game/seed";
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
type RegionShiftMap = Partial<Record<RegionId, RegionShift>>;
type SupportRecord = Record<PartyId, number>;

type NationalGroupSanityRow = {
  deltaPct: number;
  errorPct: number;
  groupId: CalibrationGroupId;
  modeledPct: number;
  targetPct: number;
};

type IterationResult = {
  iteration: number;
  nationalGroupMaxErrorPct: number;
  regionalSanity: RegionalSanityScore;
  shifts: RegionShiftMap;
};

type ScenarioResult = {
  label: string;
  nationalGroupMaePct: number;
  nationalGroupMaxErrorPct: number;
  nationalGroupSanity: NationalGroupSanityRow[];
  nationalSupport: SupportRecord;
  regionalSanity: RegionalSanityScore;
};

type CliOptions = {
  clampShift: number;
  iterations: number;
  learningRate: number;
  outputPath: string;
  regularization: number;
  write: boolean;
};

const options = parseOptions(process.argv.slice(2));
const report = runCalibration(options);
printReport(report, options);

if (options.write) {
  writeFileSync(
    options.outputPath,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        note: "Proposed region-level 7D voter-field shifts. This is a calibrated derived layer, not raw source data.",
        options,
        final: {
          nationalGroupSanity: report.finalNationalGroupSanity,
          regionalSanity: {
            maePct: report.finalRegionalSanity.maePct,
            maxErrorPct: report.finalRegionalSanity.maxErrorPct,
            worstRows: report.finalRegionalSanity.worstRows.slice(0, 30),
          },
          shifts: report.finalShifts,
        },
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  console.log(`\nWrote proposed shifts to ${options.outputPath}`);
}

function runCalibration(cliOptions: CliOptions) {
  const rawPoints = loadClusteredRegionalizedVoterFieldV03().points;
  let shifts: RegionShiftMap = {};

  const originalState = createNationallyCalibratedState(shifts, rawPoints);
  const originalRegionalSupport = computeRegionalSupportWithShifts(
    originalState,
    rawPoints,
    shifts,
  );
  const originalRegionalSanity = regionalSanityScore(originalRegionalSupport);
  const originalNationalSupport = computeNationalSupportWithPoints(
    originalState,
    originalRegionalSupport,
    rawPoints,
  );
  const originalNationalGroupSanity = createNationalGroupSanity(
    originalNationalSupport,
  );

  const iterations: IterationResult[] = [];

  for (let iteration = 0; iteration <= cliOptions.iterations; iteration += 1) {
    const state = createNationallyCalibratedState(shifts, rawPoints);
    const regionalSupport = computeRegionalSupportWithShifts(
      state,
      rawPoints,
      shifts,
    );
    const nationalSupport = computeNationalSupportWithPoints(
      state,
      regionalSupport,
      rawPoints,
    );
    const regionalSanity = regionalSanityScore(regionalSupport);
    const nationalGroupSanity = createNationalGroupSanity(nationalSupport);

    iterations.push({
      iteration,
      nationalGroupMaxErrorPct: Math.max(
        ...nationalGroupSanity.map((row) => row.errorPct),
      ),
      regionalSanity,
      shifts: clone(shifts),
    });

    if (iteration === cliOptions.iterations) {
      break;
    }

    const delta = proposeRegionShiftDelta(
      state,
      rawPoints,
      shifts,
      regionalSupport,
      cliOptions,
    );
    shifts = mergeShifts(shifts, delta, cliOptions);
  }

  const finalState = createNationallyCalibratedState(shifts, rawPoints);
  const finalRegionalSupport = computeRegionalSupportWithShifts(
    finalState,
    rawPoints,
    shifts,
  );
  const finalNationalSupport = computeNationalSupportWithPoints(
    finalState,
    finalRegionalSupport,
    rawPoints,
  );
  const finalRegionalSanity = regionalSanityScore(finalRegionalSupport);
  const finalNationalGroupSanity =
    createNationalGroupSanity(finalNationalSupport);
  const scenarioComparison = createScenarioComparison(rawPoints, shifts);

  return {
    finalNationalGroupSanity,
    finalRegionalSanity,
    finalShifts: shifts,
    iterations,
    originalNationalGroupSanity,
    originalRegionalSanity,
    scenarioComparison,
  };
}

function cloneState(state: GameState): GameState {
  return JSON.parse(JSON.stringify(state)) as GameState;
}

function createRawSeedState(): GameState {
  return createInitialGameState();
}

function createAmplitudeOneState(): GameState {
  const state = createInitialGameState();

  for (const partyId of partyIds) {
    state.partyRuntime[partyId].field.amplitude = 1;
  }

  return state;
}

function createNationallyCalibratedState(
  shifts: RegionShiftMap,
  points: VoterPoint[],
): GameState {
  const state = createInitialGameState();

  return calibratePartyAmplitudesToTargets(state, baselineTargetShares, {
    disablePlayerProgramModifier: true,
    supportResolver: (candidateState, supportOptions) => {
      const regionalSupport = computeRegionalSupportWithShifts(
        candidateState,
        points,
        shifts,
        supportOptions,
      );
      return {
        nationalSupport: computeNationalSupportWithPoints(
          candidateState,
          regionalSupport,
          points,
        ),
        regionalSupport,
      };
    },
  });
}

function calibrateStateForShifts(
  shifts: RegionShiftMap,
  points: VoterPoint[],
): GameState {
  return createNationallyCalibratedState(shifts, points);
}

function evaluateScenario(
  label: string,
  state: GameState,
  points: VoterPoint[],
  shifts: RegionShiftMap,
): ScenarioResult {
  const scenarioState = cloneState(state);
  const regionalSupport = computeRegionalSupportWithShifts(
    scenarioState,
    points,
    shifts,
  );
  const nationalSupport = computeNationalSupportWithPoints(
    scenarioState,
    regionalSupport,
    points,
  );
  const nationalGroupSanity = createNationalGroupSanity(nationalSupport);

  return {
    label,
    nationalGroupMaePct: average(
      nationalGroupSanity.map((row) => row.errorPct),
    ),
    nationalGroupMaxErrorPct: Math.max(
      ...nationalGroupSanity.map((row) => row.errorPct),
    ),
    nationalGroupSanity,
    nationalSupport,
    regionalSanity: regionalSanityScore(regionalSupport),
  };
}

function createScenarioComparison(
  points: VoterPoint[],
  finalShifts: RegionShiftMap,
): ScenarioResult[] {
  const rawSeedState = createRawSeedState();
  const amplitudeOneState = createAmplitudeOneState();
  const nationallyCalibratedRawState = createNationallyCalibratedState(
    {},
    points,
  );
  const nationallyCalibratedShiftedState = createNationallyCalibratedState(
    finalShifts,
    points,
  );

  return [
    evaluateScenario("raw seed + raw field", rawSeedState, points, {}),
    evaluateScenario(
      "raw seed + proposed shifts",
      rawSeedState,
      points,
      finalShifts,
    ),
    evaluateScenario(
      "amplitude=1 + raw field",
      amplitudeOneState,
      points,
      {},
    ),
    evaluateScenario(
      "amplitude=1 + proposed shifts",
      amplitudeOneState,
      points,
      finalShifts,
    ),
    evaluateScenario(
      "nationally calibrated + raw field",
      nationallyCalibratedRawState,
      points,
      {},
    ),
    evaluateScenario(
      "nationally calibrated + proposed shifts",
      nationallyCalibratedShiftedState,
      points,
      finalShifts,
    ),
  ];
}

function computeRegionalSupportWithShifts(
  state: GameState,
  points: VoterPoint[],
  shifts: RegionShiftMap,
  options: BaselineSupportOptions = {},
): GameState["regionalSupport"] {
  const totals = Object.fromEntries(
    state.regions.map((region) => [
      region.id,
      Object.fromEntries(partyIds.map((partyId) => [partyId, 0])) as Record<
        PartyId,
        number
      >,
    ]),
  ) as Record<RegionId, Record<PartyId, number>>;

  const regionsById = Object.fromEntries(
    state.regions.map((region) => [region.id, region]),
  );

  const partyContexts = partyIds.map((partyId) => {
    const party = state.parties.find((item) => item.id === partyId);
    const runtime = state.partyRuntime[partyId];

    if (!party || !runtime) {
      throw new Error(`Missing party/runtime for ${partyId}`);
    }

    return { partyId, runtime };
  });

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

    const shiftedPosition = applyRegionShift(point.position, shifts[regionId]);
    let total = 0.18;

    for (let index = 0; index < partyContexts.length; index += 1) {
      const { partyId, runtime } = partyContexts[index];
      const utility = computeUtilityForPoint({
        disableProgramModifier: options.disableProgramModifier,
        partyId,
        point,
        position: shiftedPosition,
        regionId,
        reputation: runtime.reputation,
        runtimeField: runtime.field,
        organization: runtime.organization[regionId] ?? 0.25,
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
  ) as GameState["regionalSupport"];
}

function computeUtilityForPoint(input: {
  disableProgramModifier?: boolean;
  organization: number;
  partyId: PartyId;
  point: VoterPoint;
  position: LatentVector8D;
  regionId: RegionId;
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
    Math.log(Math.max(0.04, input.runtimeField.amplitude)) +
    Math.log(Math.max(0.001, kernel)) +
    reputationFit +
    input.organization * 0.42;

  return Math.max(0.001, Math.exp(logUtility));
}

function computeNationalSupportWithPoints(
  state: GameState,
  regionalSupport: GameState["regionalSupport"],
  points: VoterPoint[],
): SupportRecord {
  const weighted = Object.fromEntries(
    partyIds.map((partyId) => [partyId, 0]),
  ) as SupportRecord;
  const regionalWeights = aggregateRegionalWeightByGameRegion(points);
  const totalPopulation = state.regions.reduce(
    (sum, region) =>
      sum + (regionalWeights[region.id] ?? region.populationWeight),
    0,
  );

  for (const region of state.regions) {
    const support = regionalSupport[region.id];
    if (!support) {
      continue;
    }

    for (const partyId of partyIds) {
      weighted[partyId] +=
        support[partyId] *
        (regionalWeights[region.id] ?? region.populationWeight);
    }
  }

  for (const partyId of partyIds) {
    weighted[partyId] = weighted[partyId] / totalPopulation;
  }

  return normalizePartyRecord(weighted);
}

function proposeRegionShiftDelta(
  state: GameState,
  points: VoterPoint[],
  currentShifts: RegionShiftMap,
  regionalSupport: GameState["regionalSupport"],
  cliOptions: CliOptions,
): RegionShiftMap {
  const regionMeans = computeRegionMeans(points, currentShifts);
  const delta: RegionShiftMap = {};

  for (const [regionId, target] of Object.entries(regionalVoteTargets2025) as [
    RegionId,
    Record<CalibrationGroupId, number>,
  ][]) {
    const modeled = regionalSupport[regionId];
    if (!modeled) {
      throw new Error(`Missing modeled support for ${regionId}`);
    }

    const modeledGroups = aggregateForCalibration(modeled);
    const regionMean = regionMeans[regionId];
    if (!regionMean) {
      throw new Error(`Missing region mean for ${regionId}`);
    }

    const nextDelta = emptyShift();

    for (const groupId of Object.keys(
      voteAggregationGroups,
    ) as CalibrationGroupId[]) {
      const residual = target[groupId] - modeledGroups[groupId];
      const groupWeight = groupCalibrationWeight(groupId);

      if (Math.abs(residual) < 0.002 || groupWeight <= 0) {
        continue;
      }

      const groupCenter = calibrationGroupCenter(state, groupId);

      for (const dimension of dimensions) {
        const direction = groupCenter[dimension] - regionMean[dimension];
        nextDelta[dimension] +=
          cliOptions.learningRate *
          groupWeight *
          dimensionCalibrationWeight(dimension) *
          residual *
          direction;
      }
    }

    delta[regionId] = nextDelta;
  }

  return delta;
}

function mergeShifts(
  current: RegionShiftMap,
  delta: RegionShiftMap,
  cliOptions: CliOptions,
): RegionShiftMap {
  const merged: RegionShiftMap = {};

  for (const regionId of Object.keys(regionalVoteTargets2025) as RegionId[]) {
    const currentShift = current[regionId] ?? emptyShift();
    const deltaShift = delta[regionId] ?? emptyShift();
    const next = emptyShift();

    for (const dimension of dimensions) {
      const raw =
        currentShift[dimension] * cliOptions.regularization +
        deltaShift[dimension];
      next[dimension] = clamp(
        raw,
        -cliOptions.clampShift,
        cliOptions.clampShift,
      );
    }

    merged[regionId] = next;
  }

  return merged;
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

function calibrationGroupCenter(
  state: GameState,
  groupId: CalibrationGroupId,
): LatentVector8D {
  const partyIdsForGroup = voteAggregationGroups[groupId];
  const totalTarget =
    partyIdsForGroup.reduce(
      (sum, partyId) => sum + (baselineTargetShares[partyId] ?? 0),
      0,
    ) || 1;
  const center = emptyShift();

  for (const partyId of partyIdsForGroup) {
    const partyCenter = state.partyRuntime[partyId].field.center8D;
    if (!partyCenter) {
      throw new Error(`Missing center8D for ${partyId}`);
    }

    const weight = (baselineTargetShares[partyId] ?? 0) / totalTarget;
    for (const dimension of dimensions) {
      center[dimension] += partyCenter[dimension] * weight;
    }
  }

  return center;
}

function createNationalGroupSanity(support: SupportRecord) {
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

function applyRegionShift(
  position: LatentVector8D,
  shift?: RegionShift,
): LatentVector8D {
  if (!shift) {
    return position;
  }

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

function preparedTurnoutProbability(
  turnoutBase: number,
  regionTurnoutModifier: number,
) {
  return clamp(turnoutBase + regionTurnoutModifier, 0.25, 0.95);
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
    clampShift: numberArg(args, "--clamp-shift", 0.18),
    iterations: numberArg(args, "--iterations", 8),
    learningRate: numberArg(args, "--learning-rate", 1.15),
    outputPath: stringArg(
      args,
      "--output",
      "src/game/calibration/proposed-region-latent-shifts.v04.json",
    ),
    regularization: numberArg(args, "--regularization", 0.82),
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

function printReport(
  report: ReturnType<typeof runCalibration>,
  cliOptions: CliOptions,
) {
  console.log("\n=== Calibrated voter-field shift proposal ===");
  console.log(
    `options: iterations=${cliOptions.iterations}, learningRate=${cliOptions.learningRate}, regularization=${cliOptions.regularization}, clampShift=${cliOptions.clampShift}`,
  );

  console.log("\nOriginal regional sanity");
  console.log(
    `MAE ${formatPp(report.originalRegionalSanity.maePct)} | max ${formatPp(
      report.originalRegionalSanity.maxErrorPct,
    )}`,
  );

  console.log("\nIteration sweep");
  for (const iteration of report.iterations) {
    console.log(
      `iter ${iteration.iteration}: regional MAE ${formatPp(
        iteration.regionalSanity.maePct,
      )}, max ${formatPp(iteration.regionalSanity.maxErrorPct)}, national max error ${formatPp(
        iteration.nationalGroupMaxErrorPct,
      )}`,
    );
  }

  console.log("\nFinal regional sanity");
  console.log(
    `MAE ${formatPp(report.finalRegionalSanity.maePct)} | max ${formatPp(report.finalRegionalSanity.maxErrorPct)}`,
  );

  console.log("\nFinal national group sanity");
  for (const row of report.finalNationalGroupSanity) {
    console.log(
      `${row.groupId}: modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
        row.targetPct,
      )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`,
    );
  }

  console.log("\nWorst regional rows after calibrated shifts");
  for (const row of report.finalRegionalSanity.worstRows.slice(0, 25)) {
    console.log(
      `${row.regionId} | ${row.groupId} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
        row.targetPct,
      )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`,
    );
  }

  printScenarioComparison(report.scenarioComparison);

  console.log("\nLargest proposed region shifts");
  for (const { regionId, shift, norm } of Object.entries(report.finalShifts)
    .map(([regionId, shift]) => ({
      norm: shiftNorm(shift ?? emptyShift()),
      regionId,
      shift: shift ?? emptyShift(),
    }))
    .sort((a, b) => b.norm - a.norm)
    .slice(0, 14)) {
    console.log(
      `${regionId}: norm ${norm.toFixed(3)} | ${dimensions
        .map((dimension) => `${dimension} ${formatSigned(shift[dimension])}`)
        .join(", ")}`,
    );
  }

  if (!cliOptions.write) {
    console.log("\nDry run only. Add --write to write proposed shifts JSON.");
  }
}

function printScenarioComparison(scenarios: ScenarioResult[]) {
  console.log("\nUncalibrated and calibrated scenario comparison");
  for (const scenario of scenarios) {
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

  printScenarioNationalErrors(scenarios, [
    "raw seed + raw field",
    "amplitude=1 + raw field",
    "nationally calibrated + raw field",
    "nationally calibrated + proposed shifts",
  ]);

  printScenarioRegionalErrors(scenarios, [
    "raw seed + raw field",
    "nationally calibrated + raw field",
    "nationally calibrated + proposed shifts",
  ]);
}

function printScenarioNationalErrors(
  scenarios: ScenarioResult[],
  labels: string[],
) {
  for (const label of labels) {
    const scenario = requireScenario(scenarios, label);
    console.log(`\nTop national group errors: ${label}`);
    for (const row of [...scenario.nationalGroupSanity]
      .sort((a, b) => b.errorPct - a.errorPct)
      .slice(0, 10)) {
      console.log(
        `${row.groupId}: modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
          row.targetPct,
        )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`,
      );
    }
  }
}

function printScenarioRegionalErrors(
  scenarios: ScenarioResult[],
  labels: string[],
) {
  for (const label of labels) {
    const scenario = requireScenario(scenarios, label);
    console.log(`\nTop regional errors: ${label}`);
    for (const row of scenario.regionalSanity.worstRows.slice(0, 10)) {
      console.log(
        `${row.regionId} | ${row.groupId} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(
          row.targetPct,
        )} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`,
      );
    }
  }
}

function requireScenario(scenarios: ScenarioResult[], label: string) {
  const scenario = scenarios.find((item) => item.label === label);
  if (!scenario) {
    throw new Error(`Missing scenario ${label}`);
  }
  return scenario;
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
