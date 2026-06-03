"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateSupportBySegment = aggregateSupportBySegment;
exports.aggregateSupportByRegion = aggregateSupportByRegion;
exports.summarizePartyResult = summarizePartyResult;
const resolveSupport_1 = require("./resolveSupport");
function aggregateSupportBySegment(voterPoints, parties) {
    const grouped = groupBy(voterPoints, (point) => point.segmentLabel ?? 'unknown');
    return Object.fromEntries(Object.entries(grouped).map(([segment, points]) => [segment, (0, resolveSupport_1.resolveSupport)(points, parties).partyResults]));
}
function aggregateSupportByRegion(voterPoints, parties) {
    const grouped = groupBy(voterPoints, (point) => point.regionId ?? 'unknown');
    return Object.fromEntries(Object.entries(grouped).map(([regionId, points]) => [regionId, (0, resolveSupport_1.resolveSupport)(points, parties).partyResults]));
}
function summarizePartyResult(result) {
    const abstainShareOfTurnout = result.totalTurnoutVotes > 0 ? result.abstainVotes / result.totalTurnoutVotes : 0;
    return {
        abstainShareOfTurnout,
        parties: result.partyResults.map((party) => ({
            coreVotes: party.coreVotes,
            partyId: party.partyId,
            potentialVotes: party.potentialVotes,
            representedVotes: party.representedVotes,
            voteShare: party.voteShare,
        })),
        totalPartyVotes: result.totalPartyVotes,
        totalRepresentedVoters: result.totalRepresentedVoters,
        totalTurnoutVotes: result.totalTurnoutVotes,
    };
}
function groupBy(items, keyFn) {
    return items.reduce((groups, item) => {
        const key = keyFn(item);
        groups[key] = groups[key] ?? [];
        groups[key].push(item);
        return groups;
    }, {});
}
