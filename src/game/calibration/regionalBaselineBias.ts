import type { RegionId } from '../../types/region';
import type { PartyId } from '../types';
import {
  type CalibrationGroupId,
  regionalVoteTargets2025,
  voteAggregationGroups,
} from './regionalVoteTargets2025';
import { aggregateForCalibration } from './regionalSanityCheck';

export type RegionalBaselineBias = Partial<Record<PartyId, Partial<Record<RegionId, number>>>>;

type RegionalBaselineBiasOptions = {
  clampAbs?: number;
  epsilon?: number;
};

export function computeRegionalBaselineBias(
  modeled: Record<RegionId, Record<PartyId, number>>,
  targets: Record<RegionId, Record<CalibrationGroupId, number>> = regionalVoteTargets2025,
  options: RegionalBaselineBiasOptions = {},
): RegionalBaselineBias {
  const epsilon = options.epsilon ?? 0.0025;
  const clampAbs = options.clampAbs ?? 0.45;
  const bias: RegionalBaselineBias = {};

  for (const [regionId, target] of Object.entries(targets) as [RegionId, Record<CalibrationGroupId, number>][]) {
    const modeledRegion = modeled[regionId];
    if (!modeledRegion) {
      throw new Error(`Missing modeled support for region ${regionId}`);
    }

    const modeledGroups = aggregateForCalibration(modeledRegion);
    for (const [groupId, partyIds] of Object.entries(voteAggregationGroups) as [CalibrationGroupId, PartyId[]][]) {
      const groupBias = clamp(
        Math.log(Math.max(epsilon, target[groupId]) / Math.max(epsilon, modeledGroups[groupId])),
        -clampAbs,
        clampAbs,
      );

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

export function regionalBaselineBiasUtilityModifier(
  partyId: PartyId,
  regionId: RegionId,
  bias?: RegionalBaselineBias,
  strength = 0,
) {
  return (bias?.[partyId]?.[regionId] ?? 0) * strength;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
