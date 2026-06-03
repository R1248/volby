"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = require("node:fs");
const regionalSanityCheck_1 = require("../src/game/calibration/regionalSanityCheck");
const regionalVoteTargets2025_1 = require("../src/game/calibration/regionalVoteTargets2025");
const seed_1 = require("../src/game/seed");
const regionalAggregation_1 = require("../src/simulation/engine/regionalAggregation");
const voterFieldLoader_1 = require("../src/simulation/model/voterFieldLoader");
const dimensions = [
    "econ",
    "culture",
    "authority",
    "establishment",
    "globalism",
    "green",
    "ukraine",
];
const options = parseOptions(process.argv.slice(2));
const report = fitBaselineHybrid(options);
printReport(report, options);
if (options.write) {
    (0, node_fs_1.writeFileSync)(options.outputPath, `${JSON.stringify({
        generatedAt: new Date().toISOString(),
        note: "Offline hybrid baseline fit. Runtime gameplay does not load this artifact unless explicitly wired later.",
        options,
        acceptance: report.acceptance,
        final: {
            diagnostics: report.finalDiagnostics,
            nationalGroupSanity: report.finalSnapshot.nationalGroupSanity,
            partyAmplitude: Object.fromEntries(seed_1.partyIds.map((partyId) => [
                partyId,
                Math.exp(report.finalParams.logAmplitude[partyId]),
            ])),
            partyRegionalPrior: report.finalParams.partyRegionalPrior,
            regionalSanity: {
                maePct: report.finalSnapshot.regionalSanity.maePct,
                maxErrorPct: report.finalSnapshot.regionalSanity.maxErrorPct,
                worstRows: report.finalSnapshot.regionalSanity.worstRows.slice(0, 30),
            },
            regionShift: report.finalParams.regionShift,
        },
        comparison: report.comparison.map((scenario) => ({
            label: scenario.label,
            nationalGroupMaePct: scenario.nationalGroupMaePct,
            nationalGroupMaxErrorPct: scenario.nationalGroupMaxErrorPct,
            regionalMaePct: scenario.regionalSanity.maePct,
            regionalMaxErrorPct: scenario.regionalSanity.maxErrorPct,
        })),
    }, null, 2)}\n`, "utf8");
    console.log(`\nWrote hybrid baseline calibration to ${options.outputPath}`);
}
function fitBaselineHybrid(cliOptions) {
    const state = (0, seed_1.createInitialGameState)();
    const points = (0, voterFieldLoader_1.loadClusteredRegionalizedVoterFieldV03)().points;
    const regionalWeights = (0, regionalAggregation_1.aggregateRegionalWeightByGameRegion)(points);
    const params = createInitialParams(state);
    const iterations = [];
    for (let iteration = 0; iteration <= cliOptions.iterations; iteration += 1) {
        const snapshot = evaluateParams(state, points, params);
        iterations.push(createIterationDiagnostics(iteration, snapshot, params, cliOptions));
        if (iteration === cliOptions.iterations) {
            break;
        }
        updateLogAmplitudes(params, snapshot, cliOptions);
        updateRegionShifts(state, points, params, snapshot, cliOptions);
        updatePartyRegionalPrior(params, snapshot, cliOptions);
        removeNationalPriorComponent(params.partyRegionalPrior, regionalWeights, cliOptions.clampPrior);
    }
    const finalSnapshot = evaluateParams(state, points, params);
    const finalDiagnostics = createIterationDiagnostics(cliOptions.iterations, finalSnapshot, params, cliOptions);
    const comparison = createComparison(state, points, params, cliOptions);
    return {
        acceptance: createAcceptance(finalDiagnostics),
        comparison,
        finalDiagnostics,
        finalParams: params,
        finalSnapshot,
        iterations,
    };
}
function createInitialParams(state) {
    return {
        logAmplitude: Object.fromEntries(seed_1.partyIds.map((partyId) => [
            partyId,
            Math.log(Math.max(0.01, state.partyRuntime[partyId].field.amplitude)),
        ])),
        partyRegionalPrior: emptyPartyRegionalPrior(),
        regionShift: emptyRegionShiftMap(),
    };
}
function evaluateParams(state, points, params) {
    const regionalSupport = computeRegionalSupportForParams(state, points, params);
    const nationalSupport = computeNationalSupportWithPoints(state, regionalSupport, points);
    return {
        nationalGroupSanity: createNationalGroupSanity(nationalSupport),
        nationalSupport,
        regionalSanity: (0, regionalSanityCheck_1.regionalSanityScore)(regionalSupport),
        regionalSupport,
    };
}
function updateLogAmplitudes(params, snapshot, cliOptions) {
    const modeledGroups = (0, regionalSanityCheck_1.aggregateForCalibration)(snapshot.nationalSupport);
    for (const groupId of Object.keys(regionalVoteTargets2025_1.voteAggregationGroups)) {
        const residual = logRatio(regionalVoteTargets2025_1.nationalVoteTargets2025[groupId], modeledGroups[groupId]);
        for (const partyId of regionalVoteTargets2025_1.voteAggregationGroups[groupId]) {
            params.logAmplitude[partyId] = clamp(params.logAmplitude[partyId] + cliOptions.ampLR * residual, cliOptions.clampLogAmplitudeMin, cliOptions.clampLogAmplitudeMax);
        }
    }
}
function updateRegionShifts(state, points, params, snapshot, cliOptions) {
    const regionMeans = computeRegionMeans(points, params.regionShift);
    const deltas = emptyRegionShiftMap();
    for (const [regionId, target] of Object.entries(regionalVoteTargets2025_1.regionalVoteTargets2025)) {
        const modeledGroups = (0, regionalSanityCheck_1.aggregateForCalibration)(snapshot.regionalSupport[regionId]);
        const regionMean = regionMeans[regionId];
        for (const groupId of Object.keys(regionalVoteTargets2025_1.voteAggregationGroups)) {
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
    for (const regionId of Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025)) {
        for (const dimension of dimensions) {
            params.regionShift[regionId][dimension] = clamp((params.regionShift[regionId][dimension] +
                deltas[regionId][dimension]) *
                cliOptions.regionShiftDecay, -cliOptions.clampShift, cliOptions.clampShift);
        }
    }
}
function updatePartyRegionalPrior(params, snapshot, cliOptions) {
    for (const [regionId, target] of Object.entries(regionalVoteTargets2025_1.regionalVoteTargets2025)) {
        const modeledGroups = (0, regionalSanityCheck_1.aggregateForCalibration)(snapshot.regionalSupport[regionId]);
        for (const groupId of Object.keys(regionalVoteTargets2025_1.voteAggregationGroups)) {
            const residual = logRatio(target[groupId], modeledGroups[groupId]);
            const weight = priorCalibrationWeight(groupId);
            for (const partyId of regionalVoteTargets2025_1.voteAggregationGroups[groupId]) {
                params.partyRegionalPrior[partyId][regionId] = clamp((params.partyRegionalPrior[partyId][regionId] +
                    cliOptions.priorLR * weight * residual) *
                    cliOptions.priorDecay, -cliOptions.clampPrior, cliOptions.clampPrior);
            }
        }
    }
}
function removeNationalPriorComponent(prior, regionalWeights, clampPrior) {
    const totalWeight = Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025).reduce((sum, regionId) => sum + (regionalWeights[regionId] ?? 1), 0) || 1;
    for (const partyId of seed_1.partyIds) {
        const weightedMean = Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025).reduce((sum, regionId) => sum + prior[partyId][regionId] * (regionalWeights[regionId] ?? 1), 0) / totalWeight;
        for (const regionId of Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025)) {
            prior[partyId][regionId] = clamp(prior[partyId][regionId] - weightedMean, -clampPrior, clampPrior);
        }
    }
}
function computeRegionalSupportForParams(state, points, params) {
    const totals = Object.fromEntries(state.regions.map((region) => [region.id, zeroPartyRecord()]));
    const regionsById = Object.fromEntries(state.regions.map((region) => [region.id, region]));
    const partyContexts = seed_1.partyIds.map((partyId) => ({
        partyId,
        reputation: state.partyRuntime[partyId].reputation,
        runtimeField: state.partyRuntime[partyId].field,
        organization: state.partyRuntime[partyId].organization,
    }));
    const utilities = new Array(partyContexts.length);
    for (const point of points) {
        const regionId = regionIdFromKraj(point.geography?.krajId);
        if (!regionId) {
            continue;
        }
        const region = regionsById[regionId];
        if (!region) {
            continue;
        }
        const shiftedPosition = applyRegionShift(point.position, params.regionShift[regionId]);
        let total = 0.18;
        for (let index = 0; index < partyContexts.length; index += 1) {
            const context = partyContexts[index];
            const utility = computeUtilityForPoint({
                logAmplitude: params.logAmplitude[context.partyId],
                organization: context.organization[regionId] ?? 0.25,
                partyRegionalPrior: params.partyRegionalPrior[context.partyId][regionId],
                point,
                position: shiftedPosition,
                reputation: context.reputation,
                runtimeField: context.runtimeField,
            });
            utilities[index] = utility;
            total += utility;
        }
        const turnout = preparedTurnoutProbability(point.turnoutBase ?? 0.65, region.turnoutModifier);
        const voterTurnoutWeight = point.weight * turnout;
        for (let index = 0; index < partyContexts.length; index += 1) {
            totals[regionId][partyContexts[index].partyId] +=
                voterTurnoutWeight * (utilities[index] / total);
        }
    }
    return Object.fromEntries(state.regions.map((region) => [
        region.id,
        normalizePartyRecord(totals[region.id]),
    ]));
}
function computeUtilityForPoint(input) {
    const kernel = Math.exp(-0.5 * ideologicalDistance8D(input.position, input.runtimeField));
    const scandalSensitivity = 0.45 + (input.point.volatility ?? 0.5) * 0.25;
    const reputationFit = 0.18 * input.reputation.trust +
        0.12 * input.reputation.competence +
        0.12 * input.reputation.authenticity +
        0.1 * input.reputation.integrity +
        0.08 * input.reputation.consistency -
        scandalSensitivity * input.reputation.controversy * 0.16;
    const logUtility = input.logAmplitude +
        Math.log(Math.max(0.001, kernel)) +
        reputationFit +
        input.organization * 0.42 +
        input.partyRegionalPrior;
    return Math.max(0.001, Math.exp(logUtility));
}
function computeNationalSupportWithPoints(state, regionalSupport, points) {
    const weighted = zeroPartyRecord();
    const regionalWeights = (0, regionalAggregation_1.aggregateRegionalWeightByGameRegion)(points);
    const totalPopulation = state.regions.reduce((sum, region) => sum + (regionalWeights[region.id] ?? region.populationWeight), 0);
    for (const region of state.regions) {
        const support = regionalSupport[region.id];
        for (const partyId of seed_1.partyIds) {
            weighted[partyId] +=
                support[partyId] *
                    (regionalWeights[region.id] ?? region.populationWeight);
        }
    }
    for (const partyId of seed_1.partyIds) {
        weighted[partyId] /= totalPopulation || 1;
    }
    return normalizePartyRecord(weighted);
}
function createComparison(state, points, hybridParams, cliOptions) {
    const rawParams = createInitialParams(state);
    const nationalOnlyParams = calibrateNationalOnly(state, points, cliOptions);
    const regionOnlyParams = cloneParams(rawParams);
    regionOnlyParams.regionShift = clone(hybridParams.regionShift);
    return [
        evaluateScenario("A raw seed + raw field", state, points, rawParams),
        evaluateScenario("B national-only calibrated", state, points, nationalOnlyParams),
        evaluateScenario("C region shifts only", state, points, regionOnlyParams),
        evaluateScenario("D hybrid fit", state, points, hybridParams),
    ];
}
function calibrateNationalOnly(state, points, cliOptions) {
    const params = createInitialParams(state);
    for (let iteration = 0; iteration < 36; iteration += 1) {
        const snapshot = evaluateParams(state, points, params);
        updateLogAmplitudes(params, snapshot, cliOptions);
    }
    return params;
}
function evaluateScenario(label, state, points, params) {
    const snapshot = evaluateParams(state, points, params);
    const nationalGroupErrors = snapshot.nationalGroupSanity.map((row) => row.errorPct);
    return {
        ...snapshot,
        label,
        nationalGroupMaePct: average(nationalGroupErrors),
        nationalGroupMaxErrorPct: Math.max(...nationalGroupErrors),
    };
}
function createIterationDiagnostics(iteration, snapshot, params, cliOptions) {
    const nationalGroupErrors = snapshot.nationalGroupSanity.map((row) => row.errorPct);
    const priorValues = seed_1.partyIds.flatMap((partyId) => Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025).map((regionId) => params.partyRegionalPrior[partyId][regionId]));
    const shiftValues = Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025)
        .flatMap((regionId) => dimensions.map((dimension) => params.regionShift[regionId][dimension]));
    return {
        avgAbsPartyRegionalPrior: average(priorValues.map(Math.abs)),
        avgAbsRegionShift: average(shiftValues.map(Math.abs)),
        clampedPartyRegionalPriorShare: shareAtClamp(priorValues, cliOptions.clampPrior),
        clampedRegionShiftShare: shareAtClamp(shiftValues, cliOptions.clampShift),
        iteration,
        nationalGroupMaePct: average(nationalGroupErrors),
        nationalGroupMaxErrorPct: Math.max(...nationalGroupErrors),
        regionalMaePct: snapshot.regionalSanity.maePct,
        regionalMaxErrorPct: snapshot.regionalSanity.maxErrorPct,
    };
}
function createNationalGroupSanity(support) {
    const groupSupport = (0, regionalSanityCheck_1.aggregateForCalibration)(support);
    return Object.entries(regionalVoteTargets2025_1.nationalVoteTargets2025).map(([groupId, target]) => {
        const calibrationGroupId = groupId;
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
function calibrationGroupCenter(state, groupId) {
    const partyIdsForGroup = regionalVoteTargets2025_1.voteAggregationGroups[groupId];
    const totalTarget = partyIdsForGroup.reduce((sum, partyId) => sum + partyTargetShare(partyId), 0) || 1;
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
function partyTargetShare(partyId) {
    if (partyId === "ods")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.spolu * (27 / 52);
    if (partyId === "kdu")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.spolu * (16 / 52);
    if (partyId === "top09")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.spolu * (9 / 52);
    if (partyId === "player")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.player;
    if (partyId === "stan")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.stan;
    if (partyId === "pirates")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.pirates;
    if (partyId === "spd")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.spd;
    if (partyId === "motorists")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.motorists;
    if (partyId === "stacilo")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.stacilo;
    if (partyId === "prisaha")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.prisaha;
    if (partyId === "generace")
        return regionalVoteTargets2025_1.nationalVoteTargets2025.generace;
    return regionalVoteTargets2025_1.nationalVoteTargets2025.others;
}
function computeRegionMeans(points, shifts) {
    const buckets = new Map();
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
    return Object.fromEntries([...buckets.entries()].map(([regionId, bucket]) => [
        regionId,
        Object.fromEntries(dimensions.map((dimension) => [
            dimension,
            bucket.sums[dimension] / Math.max(0.000001, bucket.weight),
        ])),
    ]));
}
function applyRegionShift(position, shift) {
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
function ideologicalDistance8D(position, field) {
    const center = field.center8D;
    const width = field.width8D;
    const salience = field.salience8D;
    if (!center || !width) {
        return 0;
    }
    return dimensions.reduce((sum, dimension) => {
        const normalized = (position[dimension] - center[dimension]) /
            Math.max(0.15, width[dimension]);
        return sum + (salience?.[dimension] ?? 1) * normalized * normalized;
    }, 0);
}
function createAcceptance(finalDiagnostics) {
    return {
        nationalMaeOk: finalDiagnostics.nationalGroupMaePct <= 0.1,
        partyRegionalPriorAvgAbsOk: finalDiagnostics.avgAbsPartyRegionalPrior <= 0.2,
        partyRegionalPriorClampedShareOk: finalDiagnostics.clampedPartyRegionalPriorShare <= 0.05,
        regionalMaeOk: finalDiagnostics.regionalMaePct <= 0.6,
        regionalMaxOk: finalDiagnostics.regionalMaxErrorPct <= 3,
    };
}
function printReport(report, cliOptions) {
    console.log("\n=== Hybrid baseline fit ===");
    console.log(`options: iterations=${cliOptions.iterations}, ampLR=${cliOptions.ampLR}, regionLR=${cliOptions.regionLR}, priorLR=${cliOptions.priorLR}, regionShiftDecay=${cliOptions.regionShiftDecay}, priorDecay=${cliOptions.priorDecay}`);
    console.log("\nIteration sweep");
    for (const row of report.iterations) {
        console.log(`iter ${row.iteration}: national MAE ${formatPp(row.nationalGroupMaePct)}, national max ${formatPp(row.nationalGroupMaxErrorPct)}, regional MAE ${formatPp(row.regionalMaePct)}, regional max ${formatPp(row.regionalMaxErrorPct)}, avgAbs regionShift ${row.avgAbsRegionShift.toFixed(3)}, avgAbs partyRegionalPrior ${row.avgAbsPartyRegionalPrior.toFixed(3)}, clamped prior ${formatPercent(row.clampedPartyRegionalPriorShare)}`);
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
        console.log(`${row.regionId}: norm ${row.norm.toFixed(3)} | ${dimensions
            .map((dimension) => `${dimension} ${formatSigned(row.shift[dimension])}`)
            .join(", ")}`);
    }
    console.log("\nLargest partyRegionalPrior rows");
    for (const row of largestPartyRegionalPriorRows(report.finalParams.partyRegionalPrior)) {
        console.log(`${row.partyId} | ${row.regionId} | prior ${formatSigned(row.prior)}`);
    }
    console.log("\nComparison");
    for (const scenario of report.comparison) {
        console.log(`${scenario.label}: national MAE ${formatPp(scenario.nationalGroupMaePct)}, national max ${formatPp(scenario.nationalGroupMaxErrorPct)}, regional MAE ${formatPp(scenario.regionalSanity.maePct)}, regional max ${formatPp(scenario.regionalSanity.maxErrorPct)}`);
    }
    if (!cliOptions.write) {
        console.log("\nDry run only. Add --write to write baseline calibration JSON.");
    }
}
function largestRegionShifts(regionShift) {
    return Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025)
        .map((regionId) => ({
        norm: shiftNorm(regionShift[regionId]),
        regionId,
        shift: regionShift[regionId],
    }))
        .sort((a, b) => b.norm - a.norm)
        .slice(0, 14);
}
function largestPartyRegionalPriorRows(prior) {
    return seed_1.partyIds
        .flatMap((partyId) => Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025).map((regionId) => ({
        partyId,
        prior: prior[partyId][regionId],
        regionId,
    })))
        .sort((a, b) => Math.abs(b.prior) - Math.abs(a.prior))
        .slice(0, 30);
}
function cloneParams(params) {
    return clone(params);
}
function emptyRegionShiftMap() {
    return Object.fromEntries(Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025).map((regionId) => [
        regionId,
        emptyShift(),
    ]));
}
function emptyPartyRegionalPrior() {
    return Object.fromEntries(seed_1.partyIds.map((partyId) => [
        partyId,
        Object.fromEntries(Object.keys(regionalVoteTargets2025_1.regionalVoteTargets2025).map((regionId) => [regionId, 0])),
    ]));
}
function emptyShift() {
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
function zeroPartyRecord() {
    return Object.fromEntries(seed_1.partyIds.map((partyId) => [partyId, 0]));
}
function normalizePartyRecord(record) {
    const total = seed_1.partyIds.reduce((sum, partyId) => sum + Math.max(0, record[partyId] ?? 0), 0) || 1;
    return Object.fromEntries(seed_1.partyIds.map((partyId) => [
        partyId,
        Math.max(0, record[partyId] ?? 0) / total,
    ]));
}
function preparedTurnoutProbability(turnoutBase, regionTurnoutModifier) {
    return clamp(turnoutBase + regionTurnoutModifier, 0.25, 0.95);
}
function groupCalibrationWeight(groupId) {
    const weights = {
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
function priorCalibrationWeight(groupId) {
    const weights = {
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
function dimensionCalibrationWeight(dimension) {
    const weights = {
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
function regionIdFromKraj(krajId) {
    const map = {
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
function parseOptions(args) {
    return {
        ampLR: numberArg(args, "--amp-lr", 0.65),
        clampLogAmplitudeMax: numberArg(args, "--max-log-amplitude", Math.log(12)),
        clampLogAmplitudeMin: numberArg(args, "--min-log-amplitude", Math.log(0.01)),
        clampPrior: numberArg(args, "--clamp-prior", 0.45),
        clampShift: numberArg(args, "--clamp-shift", 0.18),
        iterations: numberArg(args, "--iterations", 28),
        outputPath: stringArg(args, "--output", "src/game/calibration/baselineCalibration.v04.json"),
        priorDecay: numberArg(args, "--prior-decay", 0.96),
        priorLR: numberArg(args, "--prior-lr", 0.52),
        regionLR: numberArg(args, "--region-lr", 0.85),
        regionShiftDecay: numberArg(args, "--region-shift-decay", 0.9),
        write: args.includes("--write"),
    };
}
function numberArg(args, name, fallback) {
    const raw = args.find((arg) => arg.startsWith(`${name}=`))?.split("=")[1];
    const parsed = raw === undefined ? Number.NaN : Number(raw);
    return Number.isFinite(parsed) ? parsed : fallback;
}
function stringArg(args, name, fallback) {
    return (args
        .find((arg) => arg.startsWith(`${name}=`))
        ?.split("=")
        .slice(1)
        .join("=") || fallback);
}
function logRatio(target, actual) {
    return Math.log(Math.max(0.0025, target) / Math.max(0.0025, actual));
}
function shareAtClamp(values, clampAbs) {
    return values.length > 0
        ? values.filter((value) => Math.abs(value) >= clampAbs - 0.000001).length /
            values.length
        : 0;
}
function shiftNorm(shift) {
    return Math.sqrt(dimensions.reduce((sum, dimension) => sum + shift[dimension] * shift[dimension], 0));
}
function average(values) {
    return values.length > 0
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : 0;
}
function clone(value) {
    return JSON.parse(JSON.stringify(value));
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
function formatGroupRow(row) {
    return `${row.groupId}: modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(row.targetPct)} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}
function formatRegionalRow(row) {
    return `${row.regionId} | ${row.groupId} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(row.targetPct)} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}
function formatPercent(value) {
    return `${(value * 100).toFixed(2)} %`;
}
function formatPercentFromPct(value) {
    return `${value.toFixed(2)} %`;
}
function formatPp(value) {
    return `${value.toFixed(2)} pp`;
}
function formatSignedPp(value) {
    return `${value >= 0 ? "+" : ""}${value.toFixed(2)} pp`;
}
function formatSigned(value) {
    return `${value >= 0 ? "+" : ""}${value.toFixed(3)}`;
}
