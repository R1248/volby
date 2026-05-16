import { partySeedsV03 } from '../model/partySeeds';
import { kraje, regionIdByKrajId } from '../model/regionalEnrichment';
import type { KrajId, PartyField, PartySupportResult, VoterPoint } from '../model/types';
import { resolveSupport } from './resolveSupport';

export type PartyVotesByKraj = Record<KrajId, Record<string, number>>;
export type PartySupportByKraj = Record<KrajId, PartySupportResult[]>;

export function aggregateSupportByKraj(
  voterPoints: readonly VoterPoint[],
  parties: readonly PartyField[] = partySeedsV03,
): PartySupportByKraj {
  return Object.fromEntries(
    kraje.map((kraj) => {
      const points = voterPoints.filter((point) => point.geography?.krajId === kraj.id);
      return [kraj.id, resolveSupport(points, parties).partyResults] as const;
    }),
  ) as PartySupportByKraj;
}

export function aggregateVotesByKraj(
  voterPoints: readonly VoterPoint[],
  parties: readonly PartyField[] = partySeedsV03,
): PartyVotesByKraj {
  const support = aggregateSupportByKraj(voterPoints, parties);
  return Object.fromEntries(
    Object.entries(support).map(([krajId, results]) => [
      krajId,
      Object.fromEntries(results.map((result) => [result.partyId, result.representedVotes])),
    ]),
  ) as PartyVotesByKraj;
}

export function aggregateRegionalWeightByGameRegion(voterPoints: readonly VoterPoint[]) {
  const totals: Record<string, number> = {};
  for (const point of voterPoints) {
    const krajId = point.geography?.krajId;
    if (!krajId) {
      continue;
    }
    const regionId = regionIdByKrajId[krajId];
    totals[regionId] = (totals[regionId] ?? 0) + point.weight;
  }
  return totals;
}
