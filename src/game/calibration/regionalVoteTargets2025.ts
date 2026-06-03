import type { RegionId } from '../../types/region';
import type { PartyId } from '../types';

export type CalibrationGroupId =
  | 'player'
  | 'spolu'
  | 'stan'
  | 'pirates'
  | 'spd'
  | 'motorists'
  | 'stacilo'
  | 'prisaha'
  | 'generace'
  | 'others';

export const voteAggregationGroups: Record<CalibrationGroupId, PartyId[]> = {
  player: ['player'],
  spolu: ['ods', 'kdu', 'top09'],
  stan: ['stan'],
  pirates: ['pirates'],
  spd: ['spd'],
  motorists: ['motorists'],
  stacilo: ['stacilo'],
  prisaha: ['prisaha'],
  generace: ['generace'],
  others: ['others'],
};

const spoluShare = 0.2336;
const spoluMandateSplit = {
  ods: 27 / 52,
  kdu: 16 / 52,
  top09: 9 / 52,
} as const;

export const nationalVoteTargets2025: Record<CalibrationGroupId, number> = withRemainder({
  player: 0.3451,
  spolu: spoluShare,
  stan: 0.1123,
  pirates: 0.0897,
  spd: 0.0778,
  motorists: 0.0677,
  stacilo: 0.043,
  prisaha: 0.0107,
  generace: 0.0044,
});

export const nationalPartyVoteTargets2025: Record<PartyId, number> = {
  player: nationalVoteTargets2025.player,
  ods: spoluShare * spoluMandateSplit.ods,
  kdu: spoluShare * spoluMandateSplit.kdu,
  top09: spoluShare * spoluMandateSplit.top09,
  stan: nationalVoteTargets2025.stan,
  pirates: nationalVoteTargets2025.pirates,
  spd: nationalVoteTargets2025.spd,
  motorists: nationalVoteTargets2025.motorists,
  stacilo: nationalVoteTargets2025.stacilo,
  prisaha: nationalVoteTargets2025.prisaha,
  generace: nationalVoteTargets2025.generace,
  others: nationalVoteTargets2025.others,
};

export const regionalVoteTargets2025: Record<RegionId, Record<CalibrationGroupId, number>> = {
  praha: pct({ player: 19.83, spolu: 33.97, stan: 13.4, pirates: 16.89, spd: 5.23, motorists: 5.15, stacilo: 2.74, prisaha: 0.71, generace: 0.39 }),
  stredocesky: pct({ player: 31.12, spolu: 24.32, stan: 13.72, pirates: 9.09, spd: 7.06, motorists: 7.76, stacilo: 3.63, prisaha: 1.05, generace: 0.55 }),
  jihocesky: pct({ player: 34.87, spolu: 23.61, stan: 10.76, pirates: 7.59, spd: 7.93, motorists: 7.04, stacilo: 4.79, prisaha: 1.16, generace: 0.61 }),
  plzensky: pct({ player: 37.31, spolu: 20.99, stan: 10.62, pirates: 7.78, spd: 8.88, motorists: 7.16, stacilo: 4.26, prisaha: 1.01, generace: 0.38 }),
  karlovarsky: pct({ player: 42.49, spolu: 15.4, stan: 10.94, pirates: 6.49, spd: 10.21, motorists: 7.28, stacilo: 4.09, prisaha: 1.04, generace: 0.45 }),
  ustecky: pct({ player: 44.85, spolu: 15.4, stan: 9.61, pirates: 6.96, spd: 9.13, motorists: 6.79, stacilo: 4.32, prisaha: 1.15, generace: 0.4 }),
  liberecky: pct({ player: 34.4, spolu: 18.06, stan: 16.34, pirates: 8.2, spd: 8.65, motorists: 7.35, stacilo: 4.18, prisaha: 0.97, generace: 0.43 }),
  kralovehradecky: pct({ player: 33.63, spolu: 23.6, stan: 12.21, pirates: 8.05, spd: 7.75, motorists: 7.61, stacilo: 4.21, prisaha: 1.08, generace: 0.44 }),
  pardubicky: pct({ player: 34.61, spolu: 23.62, stan: 11.05, pirates: 7.71, spd: 7.68, motorists: 7.76, stacilo: 4.51, prisaha: 1.16, generace: 0.44 }),
  vysocina: pct({ player: 36.11, spolu: 23.28, stan: 11.8, pirates: 7.07, spd: 7.32, motorists: 6.8, stacilo: 4.7, prisaha: 1.2, generace: 0.49 }),
  jihomoravsky: pct({ player: 32.29, spolu: 27.24, stan: 9.63, pirates: 9.45, spd: 7.54, motorists: 6.13, stacilo: 4.42, prisaha: 1.34, generace: 0.39 }),
  olomoucky: pct({ player: 38.72, spolu: 20.14, stan: 9.36, pirates: 7.33, spd: 9.43, motorists: 6.64, stacilo: 5.16, prisaha: 1.18, generace: 0.38 }),
  zlinsky: pct({ player: 34.87, spolu: 24.24, stan: 10.2, pirates: 7.54, spd: 8.74, motorists: 6.71, stacilo: 4.65, prisaha: 1.11, generace: 0.4 }),
  moravskoslezsky: pct({ player: 43.42, spolu: 17.98, stan: 8.37, pirates: 7.18, spd: 8.09, motorists: 6.42, stacilo: 5.52, prisaha: 0.96, generace: 0.43 }),
};

function pct(values: Omit<Record<CalibrationGroupId, number>, 'others'>): Record<CalibrationGroupId, number> {
  const shares = Object.fromEntries(
    Object.entries(values).map(([groupId, value]) => [groupId, value / 100]),
  ) as Omit<Record<CalibrationGroupId, number>, 'others'>;
  return withRemainder(shares);
}

function withRemainder(values: Omit<Record<CalibrationGroupId, number>, 'others'>): Record<CalibrationGroupId, number> {
  const subtotal = Object.values(values).reduce((sum, value) => sum + value, 0);
  return {
    ...values,
    others: Math.max(0, 1 - subtotal),
  };
}
