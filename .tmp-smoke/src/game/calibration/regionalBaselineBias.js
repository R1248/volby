"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeRegionalBaselineBias = computeRegionalBaselineBias;
exports.regionalBaselineBiasUtilityModifier = regionalBaselineBiasUtilityModifier;
const regionalVoteTargets2025_1 = require("./regionalVoteTargets2025");
const regionalSanityCheck_1 = require("./regionalSanityCheck");
function computeRegionalBaselineBias(modeled, targets = regionalVoteTargets2025_1.regionalVoteTargets2025, options = {}) {
    const epsilon = options.epsilon ?? 0.0025;
    const clampAbs = options.clampAbs ?? 0.45;
    const bias = {};
    for (const [regionId, target] of Object.entries(targets)) {
        const modeledRegion = modeled[regionId];
        if (!modeledRegion) {
            throw new Error(`Missing modeled support for region ${regionId}`);
        }
        const modeledGroups = (0, regionalSanityCheck_1.aggregateForCalibration)(modeledRegion);
        for (const [groupId, partyIds] of Object.entries(regionalVoteTargets2025_1.voteAggregationGroups)) {
            const groupBias = clamp(Math.log(Math.max(epsilon, target[groupId]) / Math.max(epsilon, modeledGroups[groupId])), -clampAbs, clampAbs);
            for (const partyId of partyIds) {
                bias[partyId] = {
                    ...bias[partyId],
                    [regionId]: groupBias,
                };
            }
        }
    }
    return bias;
}
function regionalBaselineBiasUtilityModifier(partyId, regionId, bias, strength = 0) {
    return (bias?.[partyId]?.[regionId] ?? 0) * strength;
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
