import { defaultVoterSalience, dimensionIds } from '../model/dimensions';
import type { AttractionResult, PartyField, VoterPoint } from '../model/types';

const minWidth = 0.05;

export function computePartyAttraction(voter: VoterPoint, party: PartyField): AttractionResult {
  const distanceSquared = computeDistanceSquared(voter, party);
  const ideologicalFit = Math.exp(-0.5 * distanceSquared);
  const regionalOrganizationMultiplier =
    voter.regionId && party.regionOrganization ? party.regionOrganization[voter.regionId] ?? 1 : 1;
  const attraction =
    ideologicalFit *
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

export function computeDistanceSquared(voter: VoterPoint, party: PartyField) {
  return dimensionIds.reduce((sum, dimension) => {
    const importance = 0.6 * party.salience[dimension] + 0.4 * defaultVoterSalience[dimension];
    const width = Math.max(minWidth, party.width[dimension]);
    const normalizedDistance = (voter.position[dimension] - party.center[dimension]) / width;

    return sum + importance * normalizedDistance * normalizedDistance;
  }, 0);
}
