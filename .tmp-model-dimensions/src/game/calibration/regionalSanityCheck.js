"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateForCalibration = aggregateForCalibration;
exports.regionalSanityScore = regionalSanityScore;
const regionalVoteTargets2025_1 = require("./regionalVoteTargets2025");
function aggregateForCalibration(support) {
    return Object.fromEntries(Object.entries(regionalVoteTargets2025_1.voteAggregationGroups).map(([groupId, partyIds]) => [
        groupId,
        partyIds.reduce((sum, partyId) => sum + (support[partyId] ?? 0), 0),
    ]));
}
function regionalSanityScore(modeled, targets = regionalVoteTargets2025_1.regionalVoteTargets2025) {
    const rows = Object.entries(targets).flatMap(([regionId, target]) => {
        const regionKey = regionId;
        const modeledRegion = modeled[regionKey];
        if (!modeledRegion) {
            throw new Error(`Missing modeled support for region ${regionId}`);
        }
        const modeledGroups = aggregateForCalibration(modeledRegion);
        return Object.keys(regionalVoteTargets2025_1.voteAggregationGroups).map((groupId) => {
            const calibrationGroupId = groupId;
            const modeledPct = modeledGroups[calibrationGroupId] * 100;
            const targetPct = target[calibrationGroupId] * 100;
            const deltaPct = modeledPct - targetPct;
            return {
                deltaPct,
                errorPct: Math.abs(deltaPct),
                groupId: calibrationGroupId,
                modeledPct,
                regionId: regionKey,
                targetPct,
            };
        });
    });
    const totalError = rows.reduce((sum, row) => sum + row.errorPct, 0);
    const maxErrorPct = rows.reduce((max, row) => Math.max(max, row.errorPct), 0);
    return {
        maePct: rows.length > 0 ? totalError / rows.length : 0,
        maxErrorPct,
        rows,
        worstRows: [...rows].sort((a, b) => b.errorPct - a.errorPct).slice(0, 30),
    };
}
