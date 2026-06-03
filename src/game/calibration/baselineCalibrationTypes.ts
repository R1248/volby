import type { RegionId } from '../../types/region';
import type { LatentVector8D, PartyId } from '../types';

export type RegionLatentShiftMap = Partial<Record<RegionId, LatentVector8D>>;

export type PartyRegionalPriorMap = Record<PartyId, Partial<Record<RegionId, number>>>;

export type BaselineCalibrationArtifact = {
  generatedAt: string;
  note?: string;
  options: unknown;
  acceptance: Record<string, boolean>;
  final: {
    diagnostics: unknown;
    nationalGroupSanity: unknown;
    partyAmplitude: Record<PartyId, number>;
    partyRegionalPrior: PartyRegionalPriorMap;
    regionalSanity: unknown;
    regionShift: RegionLatentShiftMap;
  };
  comparison: unknown;
  contributionBreakdown?: unknown;
};
