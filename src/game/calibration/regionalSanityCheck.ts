import type { RegionId } from '../../types/region';
import type { PartyId } from '../types';
import {
  type CalibrationGroupId,
  regionalVoteTargets2025,
  voteAggregationGroups,
} from './regionalVoteTargets2025';

export type RegionalSanityRow = {
  errorPct: number;
  groupId: CalibrationGroupId;
  modeledPct: number;
  regionId: RegionId;
  targetPct: number;
};

export type RegionalSanityScore = {
  maePct: number;
  maxErrorPct: number;
  rows: RegionalSanityRow[];
  worstRows: RegionalSanityRow[];
};

export function aggregateForCalibration(
  support: Record<PartyId, number>,
): Record<CalibrationGroupId, number> {
  return Object.fromEntries(
    Object.entries(voteAggregationGroups).map(([groupId, partyIds]) => [
      groupId,
      partyIds.reduce((sum, partyId) => sum + (support[partyId] ?? 0), 0),
    ]),
  ) as Record<CalibrationGroupId, number>;
}

export function regionalSanityScore(
  modeled: Record<RegionId, Record<PartyId, number>>,
  targets = regionalVoteTargets2025,
): RegionalSanityScore {
  const rows = Object.entries(targets).flatMap(([regionId, target]) => {
    const modeledGroups = aggregateForCalibration(modeled[regionId as RegionId]);
    return Object.keys(voteAggregationGroups).map((groupId) => {
      const calibrationGroupId = groupId as CalibrationGroupId;
      const modeledPct = modeledGroups[calibrationGroupId] * 100;
      const targetPct = target[calibrationGroupId] * 100;

      return {
        errorPct: Math.abs(modeledPct - targetPct),
        groupId: calibrationGroupId,
        modeledPct,
        regionId: regionId as RegionId,
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
    worstRows: [...rows].sort((a, b) => b.errorPct - a.errorPct).slice(0, 12),
  };
}
