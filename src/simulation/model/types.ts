export type DimensionId =
  | 'econ'
  | 'culture'
  | 'authority'
  | 'establishment'
  | 'globalism'
  | 'green'
  | 'ukraine'
  | 'green_deal';

export type LatentVector8D = Record<DimensionId, number>;

export type SegmentLabel = 'trad_left' | 'lib_left' | 'center' | 'trad_right' | 'lib_right';

export type EducationLabel = 'lower' | 'secondary' | 'tertiary' | 'unknown';
export type KrajId =
  | 'CZ010'
  | 'CZ020'
  | 'CZ031'
  | 'CZ032'
  | 'CZ041'
  | 'CZ042'
  | 'CZ051'
  | 'CZ052'
  | 'CZ053'
  | 'CZ063'
  | 'CZ064'
  | 'CZ071'
  | 'CZ072'
  | 'CZ080';
export type Nuts2Id = 'CZ01' | 'CZ02' | 'CZ03' | 'CZ04' | 'CZ05' | 'CZ06' | 'CZ07' | 'CZ08';
export type MetroArea = 'brno' | 'hradec_pardubice' | 'liberec' | 'none' | 'olomouc' | 'ostrava' | 'plzen' | 'praha';
export type Urbanity = 'large_town' | 'metro' | 'rural' | 'town';
export type SocioEconomicStatus = 'high' | 'low' | 'middle';

export type Geography = {
  krajId: KrajId;
  krajName: string;
  metroArea: MetroArea;
  nuts2Id?: Nuts2Id;
  urbanity?: Urbanity;
};

export type KrajProfile = {
  ageProfile?: Record<string, number>;
  educationProfile?: Record<string, number>;
  electorateWeightWithinNuts2: number;
  krajId: KrajId;
  krajName: string;
  latentProfileHint?: Partial<Record<DimensionId, number>>;
  metroAreaShares?: Partial<Record<MetroArea, number>>;
  notes?: string;
  nuts2Id: Nuts2Id;
  urbanityProfile: Partial<Record<Urbanity, number>>;
};

export type VoterPoint = {
  ageGroup?: string;
  education?: EducationLabel | string;
  geography?: Geography;
  id: number;
  incomeProxy?: number;
  leftRight?: string;
  parentParticleId?: string;
  position: LatentVector8D;
  regionId?: string;
  segmentLabel?: SegmentLabel;
  socioEconomicStatus?: SocioEconomicStatus;
  syntheticRegionConfidence?: number;
  turnoutBase?: number;
  urbanity?: Urbanity | string;
  volatility?: number;
  weight: number;
};

export type PartyField = {
  amplitude: number;
  brandAwareness: number;
  center: LatentVector8D;
  consistency: number;
  credibility: number;
  id: string;
  leaderEffect: number;
  name: string;
  regionOrganization?: Record<string, number>;
  salience: LatentVector8D;
  stigmaPenalty: number;
  width: LatentVector8D;
};

export type PartySupportResult = {
  coreVotes: number;
  partyId: string;
  potentialVotes: number;
  representedVotes: number;
  voteShare: number;
};

export type SupportOptions = {
  abstainAttraction: number;
  defaultTurnout: number;
};

export type SupportComputationResult = {
  abstainVotes: number;
  partyResults: PartySupportResult[];
  totalPartyVotes: number;
  totalRepresentedVoters: number;
  totalTurnoutVotes: number;
};

export type CompactVoterFieldData = {
  dictionaries: {
    ageGroups: string[];
    education: string[];
    leftRight: string[];
    regions: string[];
    segments: SegmentLabel[];
    urbanity: string[];
  };
  dimensions: DimensionId[];
  pointColumns: readonly [
    'weight',
    'region',
    'age',
    'education',
    'urbanity',
    'leftRight',
    'segment',
    'turnoutBase',
    'volatility',
    'econ',
    'culture',
    'authority',
    'establishment',
    'globalism',
    'green',
    'ukraine',
    'green_deal',
  ];
  points: number[][];
  source: string;
  sourceFile: string;
  version: '0.3';
};

export type CompactRegionalVoterFieldData = {
  dictionaries: {
    ageGroups: string[];
    education: string[];
    kraje: KrajId[];
    leftRight: string[];
    metroAreas: MetroArea[];
    nuts2: Nuts2Id[];
    segments: SegmentLabel[];
    socioEconomicStatus: SocioEconomicStatus[];
    urbanity: Urbanity[];
  };
  dimensions: DimensionId[];
  parentPointCount: number;
  pointColumns: string[];
  points: number[][];
  source: string;
  sourceFile: string;
  version: '0.3-regionalized' | '0.3-regionalized-clustered';
};

export type VoterFieldBundle = {
  data: CompactRegionalVoterFieldData | CompactVoterFieldData;
  points: VoterPoint[];
  typed: {
    positions: Float32Array;
    turnoutBase: Float32Array;
    volatility: Float32Array;
    weights: Float64Array;
  };
};

export type AttractionResult = {
  attraction: number;
  distanceSquared: number;
  ideologicalFit: number;
};

export type SegmentShareSummary = Record<string, number>;

export type PartyBaselineResult = {
  abstainShareOfEligible: number;
  partyResults: PartySupportResult[];
};
