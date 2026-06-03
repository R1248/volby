"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computePartyAttraction = computePartyAttraction;
exports.computeDistanceSquared = computeDistanceSquared;
const dimensions_1 = require("../model/dimensions");
const minWidth = 0.05;
function computePartyAttraction(voter, party) {
    const distanceSquared = computeDistanceSquared(voter, party);
    const ideologicalFit = Math.exp(-0.5 * distanceSquared);
    const issueFit = computeIssueFit(voter, party);
    const regionalOrganizationMultiplier = voter.regionId && party.regionOrganization ? party.regionOrganization[voter.regionId] ?? 1 : 1;
    const attraction = ideologicalFit *
        issueFit *
        party.amplitude *
        party.brandAwareness *
        party.leaderEffect *
        party.credibility *
        party.consistency *
        Math.max(0, 1 - party.stigmaPenalty) *
        regionalOrganizationMultiplier;
    return {
        attraction: Math.max(0, attraction),
        distanceSquared,
        ideologicalFit,
    };
}
function computeDistanceSquared(voter, party) {
    return dimensions_1.dimensionIds.reduce((sum, dimension) => {
        const importance = 0.6 * party.salience[dimension] + 0.4 * dimensions_1.defaultVoterSalience[dimension];
        const width = Math.max(minWidth, party.width[dimension]);
        const normalizedDistance = (voter.position[dimension] - party.center[dimension]) / width;
        return sum + importance * normalizedDistance * normalizedDistance;
    }, 0);
}
function computeIssueFit(voter, party) {
    const issues = Object.entries(party.issuePositions ?? {});
    if (issues.length === 0) {
        return 1;
    }
    let score = 0;
    let weight = 0;
    for (const [issueId, issuePosition] of issues) {
        if (!issuePosition || issuePosition.salience <= 0) {
            continue;
        }
        const voterPosition = voter.issuePreferences?.[issueId];
        if (voterPosition === undefined) {
            continue;
        }
        const closeness = 1 - Math.abs(voterPosition - issuePosition.position) / 4;
        const issueWeight = Math.max(0, issuePosition.salience);
        score += (closeness - 0.5) * issueWeight;
        weight += issueWeight;
    }
    if (weight <= 0) {
        return 1;
    }
    return Math.max(0.55, 1 + (score / weight) * 0.28);
}
