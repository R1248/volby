import type { PartyField, SupportComputationResult, VoterPoint } from '../model/types';
import { resolveSupport } from './resolveSupport';

export function aggregateSupportBySegment(voterPoints: readonly VoterPoint[], parties: readonly PartyField[]) {
  const grouped = groupBy(voterPoints, (point) => point.segmentLabel ?? 'unknown');

  return Object.fromEntries(
    Object.entries(grouped).map(([segment, points]) => [segment, resolveSupport(points, parties).partyResults]),
  );
}

export function aggregateSupportByRegion(voterPoints: readonly VoterPoint[], parties: readonly PartyField[]) {
  const grouped = groupBy(voterPoints, (point) => point.regionId ?? 'unknown');

  return Object.fromEntries(
    Object.entries(grouped).map(([regionId, points]) => [regionId, resolveSupport(points, parties).partyResults]),
  );
}

export function summarizePartyResult(result: SupportComputationResult) {
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

function groupBy<T>(items: readonly T[], keyFn: (item: T) => string) {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const key = keyFn(item);
    groups[key] = groups[key] ?? [];
    groups[key].push(item);
    return groups;
  }, {});
}
