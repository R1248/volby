import type { DimensionId, LatentVector8D, SegmentLabel } from './types';

export const dimensionIds = [
  'econ',
  'culture',
  'authority',
  'establishment',
  'globalism',
  'green',
  'ukraine',
  'green_deal',
] as const satisfies readonly DimensionId[];

export const defaultVoterSalience = vector8D(1);

export const nmsTargetShares: Record<SegmentLabel, number> = {
  center: 0.15,
  lib_left: 0.2,
  lib_right: 0.05,
  trad_left: 0.48,
  trad_right: 0.12,
};

export function vector8D(value: number): LatentVector8D {
  return {
    authority: value,
    culture: value,
    econ: value,
    establishment: value,
    globalism: value,
    green: value,
    green_deal: value,
    ukraine: value,
  };
}

export function createVector8D(values: LatentVector8D): LatentVector8D {
  return Object.fromEntries(dimensionIds.map((dimension) => [dimension, values[dimension]])) as LatentVector8D;
}

export function isDimensionId(value: string): value is DimensionId {
  return (dimensionIds as readonly string[]).includes(value);
}

export function isCompleteVector8D(value: Partial<Record<DimensionId, number>>): value is LatentVector8D {
  return dimensionIds.every((dimension) => Number.isFinite(value[dimension]));
}

export function clampLatent(value: number) {
  return Math.max(-1, Math.min(1, value));
}
