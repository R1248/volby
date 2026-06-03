"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSupportOptions = void 0;
exports.resolveSupport = resolveSupport;
const partyAttraction_1 = require("./partyAttraction");
exports.defaultSupportOptions = {
    abstainAttraction: 0.35,
    defaultTurnout: 0.65,
};
function resolveSupport(voterPoints, parties, options = {}) {
    const resolvedOptions = { ...exports.defaultSupportOptions, ...options };
    const totals = new Map();
    let totalRepresentedVoters = 0;
    let totalTurnoutVotes = 0;
    let abstainVotes = 0;
    for (const party of parties) {
        totals.set(party.id, {
            coreVotes: 0,
            partyId: party.id,
            potentialVotes: 0,
            representedVotes: 0,
            voteShare: 0,
        });
    }
    for (const voter of voterPoints) {
        const turnout = voter.turnoutBase ?? resolvedOptions.defaultTurnout;
        const voterTurnoutWeight = voter.weight * turnout;
        const attractions = parties.map((party) => ({
            party,
            ...(0, partyAttraction_1.computePartyAttraction)(voter, party),
        }));
        const attractionTotal = resolvedOptions.abstainAttraction + attractions.reduce((sum, result) => sum + result.attraction, 0);
        totalRepresentedVoters += voter.weight;
        totalTurnoutVotes += voterTurnoutWeight;
        abstainVotes += voterTurnoutWeight * (resolvedOptions.abstainAttraction / attractionTotal);
        for (const result of attractions) {
            const votes = voterTurnoutWeight * (result.attraction / attractionTotal);
            const total = totals.get(result.party.id);
            if (!total) {
                continue;
            }
            total.representedVotes += votes;
            if (result.ideologicalFit >= 0.7) {
                total.coreVotes += votes;
            }
            else if (result.ideologicalFit >= 0.3) {
                total.potentialVotes += votes;
            }
        }
    }
    const partyResults = Array.from(totals.values());
    const totalPartyVotes = partyResults.reduce((sum, result) => sum + result.representedVotes, 0);
    for (const result of partyResults) {
        result.voteShare = totalPartyVotes > 0 ? result.representedVotes / totalPartyVotes : 0;
    }
    partyResults.sort((a, b) => b.voteShare - a.voteShare);
    return {
        abstainVotes,
        partyResults,
        totalPartyVotes,
        totalRepresentedVoters,
        totalTurnoutVotes,
    };
}
