"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regionalBaselineBias_1 = require("../src/game/calibration/regionalBaselineBias");
const regionalSanityCheck_1 = require("../src/game/calibration/regionalSanityCheck");
const regionalVoteTargets2025_1 = require("../src/game/calibration/regionalVoteTargets2025");
const engine_1 = require("../src/game/engine");
const seed_1 = require("../src/game/seed");
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
const jsonOutput = process.argv.includes("--json");
const strengths = parseStrengths(process.argv.find((arg) => arg.startsWith("--strengths="))?.split("=")[1] ??
    "0,0.25,0.5,0.75,1");
const report = buildReport();
if (jsonOutput) {
    console.log(JSON.stringify(report, null, 2));
}
else {
    printReport(report);
}
function buildReport() {
    const baseState = (0, engine_1.initializeComputedState)((0, seed_1.createInitialGameState)());
    const baseRegionalSanity = (0, regionalSanityCheck_1.regionalSanityScore)(baseState.regionalSupport);
    const regionalBaselineBias = (0, regionalBaselineBias_1.computeRegionalBaselineBias)(baseState.regionalSupport);
    const biasBurden = createBiasBurden(baseState.regionalSupport);
    const scenarios = strengths.map((strength) => createScenario(baseState, regionalBaselineBias, strength, strength === 0
        ? "no regional bias"
        : `regional bias strength ${strength}`));
    const baseScenario = scenarios.find((scenario) => scenario.strength === 0) ?? scenarios[0];
    const bestScenario = [...scenarios].sort((a, b) => a.regionalSanity.maePct - b.regionalSanity.maePct)[0];
    const regionLatentProfiles = createRegionLatentProfiles();
    const latentDirectionChecks = createLatentDirectionChecks(regionLatentProfiles);
    return {
        baseline: {
            nationalGroupSanity: createNationalGroupSanity(baseState.nationalSupport),
            regionalSanity: baseRegionalSanity,
        },
        biasBurden,
        decision: createDecisionSummary(baseScenario, bestScenario, biasBurden, latentDirectionChecks),
        groupRegionalFit: {
            noBias: createGroupRegionalFit(baseState.regionalSupport),
            bestBias: createGroupRegionalFit(bestScenarioRegionalSupport(baseState, regionalBaselineBias, bestScenario.strength)),
        },
        latentDirectionChecks,
        regionLatentProfiles,
        scenarios,
    };
}
function createScenario(state, regionalBaselineBias, strength, label) {
    const regionalSupport = strength === 0
        ? state.regionalSupport
        : (0, engine_1.computeRegionalSupport)(state, {
            regionalBaselineBias,
            regionalBaselineBiasStrength: strength,
        });
    const nationalSupport = (0, engine_1.computeNationalSupport)(state, regionalSupport);
    return {
        label,
        strength,
        nationalGroupSanity: createNationalGroupSanity(nationalSupport),
        nationalSupport: supportRecord(nationalSupport),
        regionalSanity: (0, regionalSanityCheck_1.regionalSanityScore)(regionalSupport),
    };
}
function bestScenarioRegionalSupport(state, regionalBaselineBias, strength) {
    return strength === 0
        ? state.regionalSupport
        : (0, engine_1.computeRegionalSupport)(state, {
            regionalBaselineBias,
            regionalBaselineBiasStrength: strength,
        });
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
function createGroupRegionalFit(regionalSupport) {
    return Object.keys(regionalVoteTargets2025_1.voteAggregationGroups).map((groupId) => {
        const calibrationGroupId = groupId;
        const modeled = [];
        const targets = [];
        const errors = [];
        for (const [regionId, target] of Object.entries(regionalVoteTargets2025_1.regionalVoteTargets2025)) {
            const support = regionalSupport[regionId];
            if (!support) {
                throw new Error(`Missing modeled support for region ${regionId}`);
            }
            const modeledShare = (0, regionalSanityCheck_1.aggregateForCalibration)(support)[calibrationGroupId] * 100;
            const targetShare = target[calibrationGroupId] * 100;
            modeled.push(modeledShare);
            targets.push(targetShare);
            errors.push(Math.abs(modeledShare - targetShare));
        }
        return {
            groupId: calibrationGroupId,
            maePct: average(errors),
            maxErrorPct: Math.max(...errors),
            pearsonR: pearson(modeled, targets),
        };
    });
}
function createBiasBurden(modeled, clampAbs = 0.45, epsilon = 0.0025) {
    const rows = [];
    for (const [regionId, target] of Object.entries(regionalVoteTargets2025_1.regionalVoteTargets2025)) {
        const modeledRegion = modeled[regionId];
        if (!modeledRegion) {
            throw new Error(`Missing modeled support for region ${regionId}`);
        }
        const modeledGroups = (0, regionalSanityCheck_1.aggregateForCalibration)(modeledRegion);
        for (const groupId of Object.keys(regionalVoteTargets2025_1.voteAggregationGroups)) {
            const modeledShare = modeledGroups[groupId];
            const targetShare = target[groupId];
            const rawLogBias = Math.log(Math.max(epsilon, targetShare) / Math.max(epsilon, modeledShare));
            const logBias = clamp(rawLogBias, -clampAbs, clampAbs);
            const modeledPct = modeledShare * 100;
            const targetPct = targetShare * 100;
            const deltaPct = modeledPct - targetPct;
            rows.push({
                clamped: Math.abs(rawLogBias) > clampAbs,
                deltaPct,
                errorPct: Math.abs(deltaPct),
                groupId,
                logBias,
                rawLogBias,
                modeledPct,
                regionId,
                targetPct,
            });
        }
    }
    const avgAbsBias = average(rows.map((row) => Math.abs(row.logBias)));
    const maxAbsBias = Math.max(...rows.map((row) => Math.abs(row.logBias)));
    const clampedCount = rows.filter((row) => row.clamped).length;
    return {
        avgAbsBias,
        clampedCount,
        clampedShare: rows.length > 0 ? clampedCount / rows.length : 0,
        maxAbsBias,
        rows,
        topAbsBiasRows: [...rows]
            .sort((a, b) => Math.abs(b.logBias) - Math.abs(a.logBias))
            .slice(0, 30),
    };
}
function createRegionLatentProfiles() {
    const buckets = new Map();
    for (const point of (0, voterFieldLoader_1.loadClusteredRegionalizedVoterFieldV03)().points) {
        const regionId = regionIdFromKraj(point.geography?.krajId);
        if (!regionId) {
            continue;
        }
        const current = buckets.get(regionId) ??
            {
                sums: Object.fromEntries(dimensions.map((dimension) => [dimension, 0])),
                weight: 0,
            };
        const weight = point.weight ?? 1;
        current.weight += weight;
        for (const dimension of dimensions) {
            current.sums[dimension] += (point.position[dimension] ?? 0) * weight;
        }
        buckets.set(regionId, current);
    }
    return [...buckets.entries()]
        .map(([regionId, bucket]) => ({
        means: Object.fromEntries(dimensions.map((dimension) => [
            dimension,
            bucket.sums[dimension] / Math.max(0.000001, bucket.weight),
        ])),
        regionId,
        weight: bucket.weight,
    }))
        .sort((a, b) => a.regionId.localeCompare(b.regionId));
}
function createLatentDirectionChecks(profiles) {
    const praha = profileFor(profiles, "praha");
    const periphery = meanProfile(profiles, [
        "ustecky",
        "karlovarsky",
        "moravskoslezsky",
    ]);
    const metropolitanExpected = [
        { dimension: "establishment", expected: "positive" },
        { dimension: "globalism", expected: "positive" },
        { dimension: "ukraine", expected: "positive" },
        { dimension: "green", expected: "positive" },
        { dimension: "culture", expected: "negative" },
        { dimension: "authority", expected: "negative" },
    ];
    const checks = metropolitanExpected.map(({ dimension, expected }) => {
        const diff = praha.means[dimension] - periphery.means[dimension];
        return {
            diff,
            dimension,
            expected,
            label: "praha minus average(ustecky,karlovarsky,moravskoslezsky)",
            ok: expected === "positive" ? diff > 0.03 : diff < -0.03,
        };
    });
    const liberecky = profileFor(profiles, "liberecky");
    const allExceptLiberecky = meanProfile(profiles, profiles
        .map((profile) => profile.regionId)
        .filter((regionId) => regionId !== "liberecky"));
    for (const dimension of [
        "establishment",
        "globalism",
        "ukraine",
    ]) {
        const diff = liberecky.means[dimension] - allExceptLiberecky.means[dimension];
        checks.push({
            diff,
            dimension,
            expected: "positive",
            label: "liberecky minus rest",
            ok: diff > -0.03,
        });
    }
    return checks;
}
function createDecisionSummary(baseScenario, bestScenario, biasBurden, latentDirectionChecks) {
    const baseMae = baseScenario.regionalSanity.maePct;
    const baseMax = baseScenario.regionalSanity.maxErrorPct;
    const bestMae = bestScenario.regionalSanity.maePct;
    const bestMax = bestScenario.regionalSanity.maxErrorPct;
    const bestNationalMaxDrift = Math.max(...bestScenario.nationalGroupSanity.map((row) => row.errorPct));
    const failedLatentChecks = latentDirectionChecks.filter((check) => !check.ok);
    let recommendation;
    if (baseMae <= 1 && baseMax <= 5) {
        recommendation = "KEEP_7D_WITHOUT_REQUIRED_BIAS";
    }
    else if (bestMae <= 0.8 &&
        bestMax <= 3 &&
        bestNationalMaxDrift <= 0.6 &&
        biasBurden.clampedShare <= 0.15) {
        recommendation = "KEEP_7D_WITH_PERSISTENT_REGIONAL_PRIOR";
    }
    else if (bestMae <= 1.1 && bestMax <= 5 && bestNationalMaxDrift <= 0.8) {
        recommendation = "KEEP_7D_BUT_RECALIBRATE_REGION_FIELD_AND_PRIORS";
    }
    else {
        recommendation = "CONSIDER_REPLACING_OR_REBUILDING_LATENT_MODEL";
    }
    return {
        baseMaePct: baseMae,
        baseMaxErrorPct: baseMax,
        bestBiasStrength: bestScenario.strength,
        bestMaePct: bestMae,
        bestMaxErrorPct: bestMax,
        bestNationalMaxDriftPct: bestNationalMaxDrift,
        biasAvgAbs: biasBurden.avgAbsBias,
        biasClampedShare: biasBurden.clampedShare,
        failedLatentChecks,
        recommendation,
    };
}
function printReport(report) {
    console.log("\n=== Model dimensionality sanity ===");
    console.log("\nDecision summary");
    console.log(`recommendation: ${report.decision.recommendation}`);
    console.log(`regional no-bias: MAE ${formatPp(report.decision.baseMaePct)}, max ${formatPp(report.decision.baseMaxErrorPct)}`);
    console.log(`regional best-bias: strength ${report.decision.bestBiasStrength}, MAE ${formatPp(report.decision.bestMaePct)}, max ${formatPp(report.decision.bestMaxErrorPct)}`);
    console.log(`best-bias national max drift: ${formatPp(report.decision.bestNationalMaxDriftPct)}`);
    console.log(`bias burden: avgAbs ${report.decision.biasAvgAbs.toFixed(3)}, clamped ${formatPercent(report.decision.biasClampedShare)}`);
    if (report.decision.failedLatentChecks.length > 0) {
        console.log("\nFailed latent direction checks");
        for (const check of report.decision.failedLatentChecks) {
            console.log(`${check.label} | ${check.dimension} | diff ${formatSigned(check.diff)} | expected ${check.expected}`);
        }
    }
    else {
        console.log("\nLatent direction checks: OK");
    }
    console.log("\nRegional bias strength sweep");
    for (const scenario of report.scenarios) {
        const nationalMaxDrift = Math.max(...scenario.nationalGroupSanity.map((row) => row.errorPct));
        console.log(`${scenario.label}: regional MAE ${formatPp(scenario.regionalSanity.maePct)}, max ${formatPp(scenario.regionalSanity.maxErrorPct)}, national max drift ${formatPp(nationalMaxDrift)}`);
    }
    console.log("\nWorst regional rows without bias");
    for (const row of report.baseline.regionalSanity.worstRows.slice(0, 20)) {
        console.log(formatRegionalRow(row));
    }
    const bestScenario = [...report.scenarios].sort((a, b) => a.regionalSanity.maePct - b.regionalSanity.maePct)[0];
    console.log(`\nWorst regional rows with best bias strength ${bestScenario.strength}`);
    for (const row of bestScenario.regionalSanity.worstRows.slice(0, 20)) {
        console.log(formatRegionalRow(row));
    }
    console.log("\nTop absolute regional bias rows");
    for (const row of report.biasBurden.topAbsBiasRows.slice(0, 20)) {
        console.log(`${row.regionId} | ${row.groupId} | bias ${formatSigned(row.logBias)} | raw ${formatSigned(row.rawLogBias)} | clamped ${row.clamped ? "yes" : "no"} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(row.targetPct)} | delta ${formatSignedPp(row.deltaPct)}`);
    }
    console.log("\nRegional fit by group, no bias");
    for (const row of report.groupRegionalFit.noBias) {
        console.log(`${row.groupId}: MAE ${formatPp(row.maePct)}, max ${formatPp(row.maxErrorPct)}, r ${row.pearsonR.toFixed(3)}`);
    }
    console.log("\nRegional fit by group, best bias");
    for (const row of report.groupRegionalFit.bestBias) {
        console.log(`${row.groupId}: MAE ${formatPp(row.maePct)}, max ${formatPp(row.maxErrorPct)}, r ${row.pearsonR.toFixed(3)}`);
    }
    console.log("\nSelected latent region profiles");
    for (const profile of report.regionLatentProfiles.filter((profile) => [
        "praha",
        "ustecky",
        "karlovarsky",
        "moravskoslezsky",
        "liberecky",
    ].includes(profile.regionId))) {
        console.log(`${profile.regionId}: ${dimensions.map((dimension) => `${dimension} ${profile.means[dimension].toFixed(3)}`).join(", ")}`);
    }
}
function parseStrengths(value) {
    const parsed = value
        .split(",")
        .map((item) => Number(item.trim()))
        .filter((value) => Number.isFinite(value) && value >= 0);
    return parsed.length > 0 ? parsed : [0, 0.25, 0.5, 0.75, 1];
}
function supportRecord(record) {
    return Object.fromEntries(seed_1.partyIds.map((partyId) => [partyId, record[partyId] ?? 0]));
}
function profileFor(profiles, regionId) {
    const profile = profiles.find((profile) => profile.regionId === regionId);
    if (!profile) {
        throw new Error(`Missing latent profile for region ${regionId}`);
    }
    return profile;
}
function meanProfile(profiles, regionIds) {
    const selected = profiles.filter((profile) => regionIds.includes(profile.regionId));
    const totalWeight = selected.reduce((sum, profile) => sum + profile.weight, 0) || 1;
    return {
        regionId: regionIds.join("__"),
        weight: totalWeight,
        means: Object.fromEntries(dimensions.map((dimension) => [
            dimension,
            selected.reduce((sum, profile) => sum + profile.means[dimension] * profile.weight, 0) / totalWeight,
        ])),
    };
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
function formatRegionalRow(row) {
    return `${row.regionId} | ${row.groupId} | modeled ${formatPercentFromPct(row.modeledPct)} | target ${formatPercentFromPct(row.targetPct)} | delta ${formatSignedPp(row.deltaPct)} | error ${formatPp(row.errorPct)}`;
}
function average(values) {
    return values.length > 0
        ? values.reduce((sum, value) => sum + value, 0) / values.length
        : 0;
}
function pearson(left, right) {
    if (left.length !== right.length || left.length < 2) {
        return 0;
    }
    const leftMean = average(left);
    const rightMean = average(right);
    let numerator = 0;
    let leftVariance = 0;
    let rightVariance = 0;
    for (let index = 0; index < left.length; index += 1) {
        const leftDelta = left[index] - leftMean;
        const rightDelta = right[index] - rightMean;
        numerator += leftDelta * rightDelta;
        leftVariance += leftDelta * leftDelta;
        rightVariance += rightDelta * rightDelta;
    }
    const denominator = Math.sqrt(leftVariance * rightVariance);
    return denominator > 0 ? numerator / denominator : 0;
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
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
