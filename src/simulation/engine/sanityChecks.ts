import { dimensionIds, nmsTargetShares } from '../model/dimensions';
import { partySeedsV03 } from '../model/partySeeds';
import type { DimensionId, PartyBaselineResult, PartyField, SegmentLabel, VoterPoint } from '../model/types';
import { resolveSupport } from './resolveSupport';

export function summarizeSegments(voterPoints: readonly VoterPoint[]) {
  const total = totalWeight(voterPoints);
  const shares = voterPoints.reduce<Record<string, number>>((accumulator, point) => {
    const key = point.segmentLabel ?? 'unknown';
    accumulator[key] = (accumulator[key] ?? 0) + point.weight;
    return accumulator;
  }, {});

  return normalizeSummary(shares, total);
}

export function summarizeQuadrants(voterPoints: readonly VoterPoint[], deadZone = 0.18) {
  const strictTotals: Record<string, number> = {};
  const signTotals: Record<string, number> = {};
  const total = totalWeight(voterPoints);

  for (const point of voterPoints) {
    signTotals[signQuadrant(point)] = (signTotals[signQuadrant(point)] ?? 0) + point.weight;
    strictTotals[strictQuadrant(point, deadZone)] = (strictTotals[strictQuadrant(point, deadZone)] ?? 0) + point.weight;
  }

  return {
    sign: normalizeSummary(signTotals, total),
    strict: normalizeSummary(strictTotals, total),
  };
}

export function summarizeEducationBySegment(voterPoints: readonly VoterPoint[]) {
  const totals: Record<string, number> = {};
  const tertiary: Record<string, number> = {};

  for (const point of voterPoints) {
    const segment = point.segmentLabel ?? 'unknown';
    totals[segment] = (totals[segment] ?? 0) + point.weight;

    if (point.education === 'tertiary') {
      tertiary[segment] = (tertiary[segment] ?? 0) + point.weight;
    }
  }

  return Object.fromEntries(Object.entries(totals).map(([segment, weight]) => [segment, (tertiary[segment] ?? 0) / weight]));
}

export function summarizeDimensionMeansBySegment(voterPoints: readonly VoterPoint[]) {
  const totals: Record<string, number> = {};
  const sums: Record<string, Partial<Record<DimensionId, number>>> = {};

  for (const point of voterPoints) {
    const segment = point.segmentLabel ?? 'unknown';
    totals[segment] = (totals[segment] ?? 0) + point.weight;
    sums[segment] = sums[segment] ?? {};

    for (const dimension of dimensionIds) {
      sums[segment][dimension] = (sums[segment][dimension] ?? 0) + point.position[dimension] * point.weight;
    }
  }

  return Object.fromEntries(
    Object.entries(sums).map(([segment, values]) => [
      segment,
      Object.fromEntries(dimensionIds.map((dimension) => [dimension, (values[dimension] ?? 0) / totals[segment]])),
    ]),
  ) as Record<string, Record<DimensionId, number>>;
}

export function runPartyBaseline(
  parties: readonly PartyField[] = partySeedsV03,
  voterPoints: readonly VoterPoint[],
): PartyBaselineResult {
  const result = resolveSupport(voterPoints, parties);

  return {
    abstainShareOfEligible: result.totalTurnoutVotes > 0 ? result.abstainVotes / result.totalTurnoutVotes : 0,
    partyResults: result.partyResults,
  };
}

export function checkNmsTargets(voterPoints: readonly VoterPoint[], tolerance = 0.01) {
  const shares = summarizeSegments(voterPoints);

  return Object.entries(nmsTargetShares).map(([segment, target]) => {
    const actual = shares[segment] ?? 0;
    return {
      actual,
      ok: Math.abs(actual - target) <= tolerance,
      segment: segment as SegmentLabel,
      target,
    };
  });
}

function signQuadrant(point: VoterPoint) {
  if (point.position.econ > 0 && point.position.culture < 0) {
    return 'lib_right_sign';
  }

  if (point.position.econ < 0 && point.position.culture < 0) {
    return 'lib_left_sign';
  }

  if (point.position.econ > 0 && point.position.culture > 0) {
    return 'trad_right_sign';
  }

  return 'trad_left_sign';
}

function strictQuadrant(point: VoterPoint, deadZone: number) {
  if (Math.abs(point.position.econ) <= deadZone && Math.abs(point.position.culture) <= deadZone) {
    return 'center_dead_zone';
  }

  if (point.position.econ > deadZone && point.position.culture < -deadZone) {
    return 'lib_right_strict';
  }

  if (point.position.econ < -deadZone && point.position.culture < -deadZone) {
    return 'lib_left_strict';
  }

  if (point.position.econ > deadZone && point.position.culture > deadZone) {
    return 'trad_right_strict';
  }

  if (point.position.econ < -deadZone && point.position.culture > deadZone) {
    return 'trad_left_strict';
  }

  return 'axis_dead_zone';
}

function normalizeSummary(summary: Record<string, number>, total: number) {
  return Object.fromEntries(Object.entries(summary).map(([key, value]) => [key, total > 0 ? value / total : 0]));
}

function totalWeight(voterPoints: readonly VoterPoint[]) {
  return voterPoints.reduce((sum, point) => sum + point.weight, 0);
}
