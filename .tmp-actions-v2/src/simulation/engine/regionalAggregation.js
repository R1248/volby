"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateSupportByKraj = aggregateSupportByKraj;
exports.aggregateVotesByKraj = aggregateVotesByKraj;
exports.aggregateRegionalWeightByGameRegion = aggregateRegionalWeightByGameRegion;
const partySeeds_1 = require("../model/partySeeds");
const regionalEnrichment_1 = require("../model/regionalEnrichment");
const resolveSupport_1 = require("./resolveSupport");
function aggregateSupportByKraj(voterPoints, parties = partySeeds_1.partySeedsV03) {
    return Object.fromEntries(regionalEnrichment_1.kraje.map((kraj) => {
        const points = voterPoints.filter((point) => point.geography?.krajId === kraj.id);
        return [kraj.id, (0, resolveSupport_1.resolveSupport)(points, parties).partyResults];
    }));
}
function aggregateVotesByKraj(voterPoints, parties = partySeeds_1.partySeedsV03) {
    const support = aggregateSupportByKraj(voterPoints, parties);
    return Object.fromEntries(Object.entries(support).map(([krajId, results]) => [
        krajId,
        Object.fromEntries(results.map((result) => [result.partyId, result.representedVotes])),
    ]));
}
function aggregateRegionalWeightByGameRegion(voterPoints) {
    const totals = {};
    for (const point of voterPoints) {
        const krajId = point.geography?.krajId;
        if (!krajId) {
            continue;
        }
        const regionId = regionalEnrichment_1.regionIdByKrajId[krajId];
        totals[regionId] = (totals[regionId] ?? 0) + point.weight;
    }
    return totals;
}
