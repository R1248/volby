"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GREEN_DEAL_ATTITUDE_TARGETS = exports.GREEN_DEAL_PROPENSITY_WEIGHTS = void 0;
exports.calculateGreenDealPropensity = calculateGreenDealPropensity;
exports.calculateGreenDealThresholds = calculateGreenDealThresholds;
exports.classifyGreenDealAttitude = classifyGreenDealAttitude;
exports.greenDealIssuePosition = greenDealIssuePosition;
exports.enrichGreenDealIssuePreferences = enrichGreenDealIssuePreferences;
exports.greenDealWeightedDistribution = greenDealWeightedDistribution;
exports.weightedCorrelation = weightedCorrelation;
// Green Deal is modeled as a concrete discourse issue, not a core compass dimension.
// These weights are deliberately transparent and tunable: they generate issue affinity
// from the seven latent dimensions, with old green_deal data used only as a weak residual.
exports.GREEN_DEAL_PROPENSITY_WEIGHTS = {
    culture: -0.25,
    econ: -0.05,
    establishment: 0.2,
    globalism: 0.3,
    green: 0.45,
    legacyGreenDeal: 0.2,
    ukraine: 0.15,
};
exports.GREEN_DEAL_ATTITUDE_TARGETS = {
    mixed: 0.12,
    opportunity: 0.28,
    threat: 0.6,
};
function calculateGreenDealPropensity(point) {
    const calculatedFrom7D = exports.GREEN_DEAL_PROPENSITY_WEIGHTS.green * point.position.green +
        exports.GREEN_DEAL_PROPENSITY_WEIGHTS.globalism * point.position.globalism +
        exports.GREEN_DEAL_PROPENSITY_WEIGHTS.establishment * point.position.establishment +
        exports.GREEN_DEAL_PROPENSITY_WEIGHTS.ukraine * point.position.ukraine +
        exports.GREEN_DEAL_PROPENSITY_WEIGHTS.culture * point.position.culture +
        exports.GREEN_DEAL_PROPENSITY_WEIGHTS.econ * point.position.econ;
    const legacy = point.legacy?.greenDealPropensityRaw;
    return legacy === undefined
        ? calculatedFrom7D
        : (1 - exports.GREEN_DEAL_PROPENSITY_WEIGHTS.legacyGreenDeal) * calculatedFrom7D +
            exports.GREEN_DEAL_PROPENSITY_WEIGHTS.legacyGreenDeal * legacy;
}
function calculateGreenDealThresholds(points) {
    const values = points.map((point) => ({
        value: calculateGreenDealPropensity(point),
        weight: point.weight,
    }));
    return {
        opportunityMin: weightedQuantile(values, exports.GREEN_DEAL_ATTITUDE_TARGETS.threat + exports.GREEN_DEAL_ATTITUDE_TARGETS.mixed),
        threatMax: weightedQuantile(values, exports.GREEN_DEAL_ATTITUDE_TARGETS.threat),
    };
}
function classifyGreenDealAttitude(propensity, thresholds) {
    if (propensity <= thresholds.threatMax) {
        return 'threat';
    }
    if (propensity >= thresholds.opportunityMin) {
        return 'opportunity';
    }
    return 'mixed';
}
function greenDealIssuePosition(propensity, thresholds) {
    const attitude = classifyGreenDealAttitude(propensity, thresholds);
    if (attitude === 'threat') {
        return scaleWithinBand(propensity, Number.NEGATIVE_INFINITY, thresholds.threatMax, -2, -1.05);
    }
    if (attitude === 'opportunity') {
        return scaleWithinBand(propensity, thresholds.opportunityMin, Number.POSITIVE_INFINITY, 1.05, 2);
    }
    return scaleWithinBand(propensity, thresholds.threatMax, thresholds.opportunityMin, -0.5, 0.5);
}
function enrichGreenDealIssuePreferences(points) {
    const thresholds = calculateGreenDealThresholds(points);
    return points.map((point) => {
        const propensity = calculateGreenDealPropensity(point);
        const attitude = classifyGreenDealAttitude(propensity, thresholds);
        const issuePosition = greenDealIssuePosition(propensity, thresholds);
        return {
            ...point,
            greenDealAttitude: attitude,
            issuePreferences: {
                ...(point.issuePreferences ?? {}),
                greenDeal: issuePosition,
            },
        };
    });
}
function greenDealWeightedDistribution(points) {
    const totals = { mixed: 0, opportunity: 0, threat: 0 };
    const total = points.reduce((sum, point) => sum + point.weight, 0) || 1;
    for (const point of points) {
        const attitude = point.greenDealAttitude;
        if (attitude) {
            totals[attitude] += point.weight;
        }
    }
    return {
        mixed: totals.mixed / total,
        opportunity: totals.opportunity / total,
        threat: totals.threat / total,
    };
}
function weightedCorrelation(points, dimension) {
    const totalWeight = points.reduce((sum, point) => sum + point.weight, 0) || 1;
    const meanX = points.reduce((sum, point) => sum + point.weight * point.position[dimension], 0) / totalWeight;
    const meanY = points.reduce((sum, point) => sum + point.weight * (point.issuePreferences?.greenDeal ?? 0), 0) / totalWeight;
    let cov = 0;
    let varX = 0;
    let varY = 0;
    for (const point of points) {
        const x = point.position[dimension] - meanX;
        const y = (point.issuePreferences?.greenDeal ?? 0) - meanY;
        cov += point.weight * x * y;
        varX += point.weight * x * x;
        varY += point.weight * y * y;
    }
    return cov / Math.sqrt(Math.max(0.000001, varX * varY));
}
function weightedQuantile(values, quantile) {
    const sorted = [...values].sort((a, b) => a.value - b.value);
    const totalWeight = sorted.reduce((sum, item) => sum + item.weight, 0);
    const target = totalWeight * quantile;
    let cumulative = 0;
    for (const item of sorted) {
        cumulative += item.weight;
        if (cumulative >= target) {
            return item.value;
        }
    }
    return sorted[sorted.length - 1]?.value ?? 0;
}
function scaleWithinBand(value, min, max, targetMin, targetMax) {
    if (!Number.isFinite(min) && Number.isFinite(max)) {
        return clamp(targetMax - Math.min(1, Math.max(0, (max - value) / 1.5)) * (targetMax - targetMin), targetMin, targetMax);
    }
    if (Number.isFinite(min) && !Number.isFinite(max)) {
        return clamp(targetMin + Math.min(1, Math.max(0, (value - min) / 1.5)) * (targetMax - targetMin), targetMin, targetMax);
    }
    const denominator = Math.max(0.000001, max - min);
    return clamp(targetMin + ((value - min) / denominator) * (targetMax - targetMin), targetMin, targetMax);
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
