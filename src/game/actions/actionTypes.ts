export type ActionLegality = 'clean' | 'gray' | 'illegal';

export type ActionPlacement =
  | 'campaign'
  | 'media'
  | 'analytics'
  | 'program_mandate'
  | 'people_ops'
  | 'coalition'
  | 'event_response'
  | 'hidden_or_deprecated';

export type ActionAvailability =
  | 'player_initiated'
  | 'opportunity'
  | 'event_response'
  | 'persistent_setting'
  | 'implicit_system';

export type CampaignPhase = 'early' | 'mid' | 'late' | 'final' | 'election_day';

export type ActionTarget =
  | 'national'
  | 'region'
  | 'segment'
  | 'issue'
  | 'opponent'
  | 'coalitionPartner'
  | 'allyEcosystem'
  | 'leader';

export type ActionCost = {
  money: number;
  centralStaffHours: number;
  regionalStaffHours: number;
  volunteerHours: number;
  leaderHours: number;
  fatigue: number;
  durationWeeks: number;
  recurringWeeklyCost: number;
};

export type ActionRisks = {
  mediaBacklash: number;
  legal: number;
  scandal: number;
  detection: number;
  counterMobilization: number;
  coalitionDamage: number;
  internalFaction: number;
  messageDiscipline: number;
  longTermTrust: number;
};

export type ActionEffects = {
  awareness?: number;
  persuasion?: number;
  turnout?: number;
  demobilization?: number;
  issueSalience?: Record<string, number>;
  issuePosition?: Record<string, number>;
  latentShift?: Record<string, number>;
  reputation?: Record<string, number>;
  organization?: Record<string, number>;
  opponent?: Record<string, number>;
  coalition?: Record<string, number>;
  informationQuality?: number;
  predictionAccuracy?: number;
  riskDetection?: number;
  unlockedPreviews?: readonly string[];
};

export type ActionCategory =
  | 'field'
  | 'ads'
  | 'digital'
  | 'mobilization'
  | 'negative'
  | 'grayZone'
  | 'blackOps'
  | 'allies'
  | 'coalition'
  | 'analytics'
  | 'media'
  | 'crisis'
  | 'organization'
  | 'people'
  | 'program'
  | 'parliament'
  | 'final';

export type ActionTemplate = {
  id: string;
  name: string;
  description: string;
  placement: ActionPlacement;
  availability: ActionAvailability;
  category: ActionCategory;
  legality: ActionLegality;
  ethicalRisk: number;
  allowedTargets: ActionTarget[];
  requiredTargets: ActionTarget[];
  cost: ActionCost;
  effects: ActionEffects;
  risks: ActionRisks;
  tags: string[];
};

export function actionCost(cost: Partial<ActionCost> = {}): ActionCost {
  return {
    centralStaffHours: 0,
    durationWeeks: 1,
    fatigue: 0,
    leaderHours: 0,
    money: 0,
    recurringWeeklyCost: 0,
    regionalStaffHours: 0,
    volunteerHours: 0,
    ...cost,
  };
}

export function actionRisks(risks: Partial<ActionRisks> = {}): ActionRisks {
  return {
    coalitionDamage: 0,
    counterMobilization: 0,
    detection: 0,
    internalFaction: 0,
    legal: 0,
    longTermTrust: 0,
    mediaBacklash: 0,
    messageDiscipline: 0,
    scandal: 0,
    ...risks,
  };
}
