"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeSegments = summarizeSegments;
exports.summarizeQuadrants = summarizeQuadrants;
exports.summarizeEducationBySegment = summarizeEducationBySegment;
exports.summarizeDimensionMeansBySegment = summarizeDimensionMeansBySegment;
exports.runPartyBaseline = runPartyBaseline;
exports.checkNmsTargets = checkNmsTargets;
const dimensions_1 = require("../model/dimensions");
const partySeeds_1 = require("../model/partySeeds");
const resolveSupport_1 = require("./resolveSupport");
function summarizeSegments(voterPoints) {
    const total = totalWeight(voterPoints);
    const shares = voterPoints.reduce((accumulator, point) => {
        const key = point.segmentLabel ?? 'unknown';
        accumulator[key] = (accumulator[key] ?? 0) + point.weight;
        return accumulator;
    }, {});
    return normalizeSummary(shares, total);
}
function summarizeQuadrants(voterPoints, deadZone = 0.18) {
    const strictTotals = {};
    const signTotals = {};
    const total = totalWeight(voterPoints);
    for (const point of voterPoints) {
        signTotals[signQuadrant(point)] = (signTotals[signQuadrant(point)] ?? 0) + point.weight;
        strictTotals[strictQuadrant(point, deadZone)] = (strictTotals[strictQuadrant(point, deadZone)] ?? 0) + point.weight;
    }
    return {
        sign: normalizeSummary(signTotals, total),
        strict: normalizeSummary(strictTotals, total),
    };
}
function summarizeEducationBySegment(voterPoints) {
    const totals = {};
    const tertiary = {};
    for (const point of voterPoints) {
        const segment = point.segmentLabel ?? 'unknown';
        totals[segment] = (totals[segment] ?? 0) + point.weight;
        if (point.education === 'tertiary') {
            tertiary[segment] = (tertiary[segment] ?? 0) + point.weight;
        }
    }
    return Object.fromEntries(Object.entries(totals).map(([segment, weight]) => [segment, (tertiary[segment] ?? 0) / weight]));
}
function summarizeDimensionMeansBySegment(voterPoints) {
    const totals = {};
    const sums = {};
    for (const point of voterPoints) {
        const segment = point.segmentLabel ?? 'unknown';
        totals[segment] = (totals[segment] ?? 0) + point.weight;
        sums[segment] = sums[segment] ?? {};
        for (const dimension of dimensions_1.dimensionIds) {
            sums[segment][dimension] = (sums[segment][dimension] ?? 0) + point.position[dimension] * point.weight;
        }
    }
    return Object.fromEntries(Object.entries(sums).map(([segment, values]) => [
        segment,
        Object.fromEntries(dimensions_1.dimensionIds.map((dimension) => [dimension, (values[dimension] ?? 0) / totals[segment]])),
    ]));
}
function runPartyBaseline(parties = partySeeds_1.partySeedsV03, voterPoints) {
    const result = (0, resolveSupport_1.resolveSupport)(voterPoints, parties);
    return {
        abstainShareOfEligible: result.totalTurnoutVotes > 0 ? result.abstainVotes / result.totalTurnoutVotes : 0,
        partyResults: result.partyResults,
    };
}
function checkNmsTargets(voterPoints, tolerance = 0.01) {
    const shares = summarizeSegments(voterPoints);
    return Object.entries(dimensions_1.nmsTargetShares).map(([segment, target]) => {
        const actual = shares[segment] ?? 0;
        return {
            actual,
            ok: Math.abs(actual - target) <= tolerance,
            segment: segment,
            target,
        };
    });
}
function signQuadrant(point) {
    if (point.position.econ > 0 && point.position.culture < 0) {
        return 'lib_right_sign';
    }
    if (point.position.econ < 0 && point.position.culture < 0) {
        return 'lib_left_sign';
    }
    if (point.position.econ > 0 && point.position.culture > 0) {
        return 'trad_right_sign';
    }
    return 'trad_left_sign';
}
function strictQuadrant(point, deadZone) {
    if (Math.abs(point.position.econ) <= deadZone && Math.abs(point.position.culture) <= deadZone) {
        return 'center_dead_zone';
    }
    if (point.position.econ > deadZone && point.position.culture < -deadZone) {
        return 'lib_right_strict';
    }
    if (point.position.econ < -deadZone && point.position.culture < -deadZone) {
        return 'lib_left_strict';
    }
    if (point.position.econ > deadZone && point.position.culture > deadZone) {
        return 'trad_right_strict';
    }
    if (point.position.econ < -deadZone && point.position.culture > deadZone) {
        return 'trad_left_strict';
    }
    return 'axis_dead_zone';
}
function normalizeSummary(summary, total) {
    return Object.fromEntries(Object.entries(summary).map(([key, value]) => [key, total > 0 ? value / total : 0]));
}
function totalWeight(voterPoints) {
    return voterPoints.reduce((sum, point) => sum + point.weight, 0);
}
