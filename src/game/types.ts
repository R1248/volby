import type { RegionId } from '../types/region';
import type { ActionAvailability, ActionPlacement } from './actions/actionTypes';
import type { IssueLayerState, ProgramIssueId } from './issueTypes';

export type Vec3 = {
  authority: number;
  culture: number;
  econ: number;
};

export type LatentDimension7D =
  | 'authority'
  | 'culture'
  | 'econ'
  | 'establishment'
  | 'globalism'
  | 'green'
  | 'ukraine';

// Compatibility alias while older runtime field names migrate away from "8D".
export type LatentDimension8D = LatentDimension7D;
export type LatentVector7D = Record<LatentDimension7D, number>;
export type LatentVector8D = LatentVector7D;

export type IssueId =
  | 'housing'
  | 'transport'
  | 'security'
  | 'healthcare'
  | 'climate'
  | 'industry'
  | 'education'
  | 'greenDeal'
  | 'taxes';

export type PartyId =
  | 'player'
  | 'ods'
  | 'stan'
  | 'pirates'
  | 'kdu'
  | 'spd'
  | 'motorists'
  | 'top09'
  | 'stacilo'
  | 'prisaha'
  | 'generace'
  | 'others';

export type SegmentId = string;

export type GameMode = 'fullRealism';
export type MarketingAdvisorId = 'none' | 'junior' | 'senior' | 'elite';
export type OfficeRole = 'government' | 'opposition' | 'outsider';

export type GameRules = {
  donorCap: number;
  finalWeek: number;
  legalSpendCap: number;
  spendCap: number;
  thirdPartyCap: number;
  totalWeeks: number;
};

export type VoterSegment = {
  age4?: string;
  axisSalience: Vec3;
  education: 'lower' | 'secondary' | 'tertiary';
  id: SegmentId;
  issuePrefs: Partial<Record<IssueId, number>>;
  issueSalience: Partial<Record<IssueId, number>>;
  leftRightSelfPlacement?: string;
  mediaHabits: Partial<Record<string, number>>;
  name: string;
  nmsBlock?: string;
  populationWeight?: number;
  position: Vec3;
  scandalSensitivity: number;
  source?: string;
  space?: Vec3 & {
    establishment: number;
    globalism: number;
    green: number;
    greenDeal: number;
    ukraine: number;
  };
  turnoutBase: number;
  urbanity3?: string;
  volatility: number;
};

export type RegionSeed = {
  id: RegionId;
  issueAgendaBase: Partial<Record<IssueId, number>>;
  name: string;
  populationWeight: number;
  segmentMix: Partial<Record<SegmentId, number>>;
  turnoutModifier: number;
  urbanity: number;
};

export type ReputationVector = {
  authenticity: number;
  competence: number;
  consistency: number;
  controversy: number;
  integrity: number;
  trust: number;
};

export type PartyField = {
  amplitude: number;
  center8D?: LatentVector8D;
  center: Vec3;
  flexibility: number;
  latentCenter?: Partial<Record<string, number>>;
  originCenter8D?: LatentVector8D;
  originCenter: Vec3;
  salience8D?: LatentVector8D;
  width8D?: LatentVector8D;
  width: Vec3;
};

export type LeaderTraits = {
  charisma: number;
  credibility: number;
  debate: number;
  discipline: number;
  empathy: number;
  knowledge: number;
  stamina: number;
};

export type LeaderState = {
  energy: number;
  fatigue: number;
  officeRole: OfficeRole;
  timeCap: number;
  timeUsed: number;
};

export type PartySeed = {
  baselineTargetShare?: number;
  coalitionBase: Partial<Record<PartyId, number>>;
  color: string;
  field: PartyField;
  id: PartyId;
  issueOwnership: Partial<Record<IssueId, number>>;
  issuePositions: Partial<Record<IssueId, number>>;
  leaderName: string;
  leaderTraits: LeaderTraits;
  mandateEligible?: boolean;
  name: string;
  officeRole: OfficeRole;
  organizationBase: Partial<Record<RegionId, number>>;
  playable: boolean;
  reputation: ReputationVector;
  shortName: string;
  startingCash: number;
  weeklyLeaderTimeCap?: number;
  weeklyStaffCap: number;
  winProfile: 'major' | 'mid' | 'small' | 'outsider';
};

export type CoalitionRelation = {
  ideologicalCompatibility: number;
  partyA: PartyId;
  partyB: PartyId;
  personalTrust: number;
  publicAcceptability: number;
  recentConflict: number;
  scandalBarrier: number;
  totalCoalitionPotential: number;
};

export type PartyRuntime = {
  actionCooldowns?: Partial<Record<string, number>>;
  cash: number;
  field: PartyField;
  graySpend: number;
  informationQuality: number;
  leader: LeaderState;
  legalSpend: number;
  legalExposure?: number;
  marketingAdvisorId: MarketingAdvisorId;
  mediaVulnerability?: number;
  momentum?: number;
  organization: Partial<Record<RegionId, number>>;
  parliamentAttendance?: number;
  reputation: ReputationVector;
  scandalRisk: number;
  staffCap?: number;
  staffUsed?: number;
  thirdPartySpend: number;
};

export type PlannedAction = {
  actionV2Id: string;
  id: string;
  targetIssueId?: IssueId;
  targetPartyId?: PartyId;
  targetProgramIssueId?: ProgramIssueId;
  targetRegionId?: RegionId;
  targetSegmentId?: SegmentId;
};

export type CampaignActionCategory =
  | 'field'
  | 'ads'
  | 'media'
  | 'digital'
  | 'program'
  | 'parliament'
  | 'analytics'
  | 'organization'
  | 'coalition'
  | 'turnout'
  | 'crisis'
  | 'negative'
  | 'ally'
  | 'grayZone'
  | 'blackOps';

export type CampaignActionLegality = 'clean' | 'gray' | 'illegal';

export type CampaignActionTargetScope =
  | 'national'
  | 'region'
  | 'segment'
  | 'issue'
  | 'opponent'
  | 'mediaOutlet'
  | 'leader';

export type TargetedModifier = {
  scope: CampaignActionTargetScope;
  amount: number;
  segmentIds?: string[];
  regionIds?: string[];
  issueIds?: string[];
  partyIds?: PartyId[];
};

export type CampaignActionV2 = {
  id: string;
  name: string;
  description: string;

  category: CampaignActionCategory;
  placement: ActionPlacement;
  availability: ActionAvailability;
  legality: CampaignActionLegality;
  ethicalRisk: number;

  cost: number;
  staffCost: number;
  leaderTimeCost: number;
  fatigueCost: number;
  cooldownWeeks?: number;

  target: {
    scope: CampaignActionTargetScope;
    required?: string[];
    optional?: string[];
  };

  effects: {
    fieldAmplitude?: number;
    latentCenterShift?: Partial<Record<LatentDimension8D, number>>;
    latentWidthShift?: Partial<Record<LatentDimension8D, number>>;

    issuePositionShift?: Partial<Record<ProgramIssueId, number>>;
    issueSalienceShift?: Partial<Record<ProgramIssueId, number>>;
    framingChange?: Partial<Record<ProgramIssueId, string>>;

    turnoutModifier?: TargetedModifier;
    demobilizationModifier?: TargetedModifier;

    reputationShift?: Partial<ReputationVector>;
    regionOrganizationShift?: number;
    informationQualityShift?: number;
    coalitionRelationShift?: number;

    mediaVulnerabilityShift?: number;
    scandalRiskShift?: number;
    legalExposureShift?: number;
    counterMobilizationRiskShift?: number;
  };

  risks: {
    backlash: number;
    legal: number;
    media: number;
    scandal: number;
    counterMobilization: number;
    internalFaction: number;
    coalitionToxicity: number;
  };

  preview: {
    visibleToPlayer: boolean;
    precisionRequired?: 'none' | 'poll' | 'focusGroup' | 'seniorAdvisor';
    shortEffectLabel?: string;
    riskLabel?: string;
  };
};

export type CampaignTurnoutModifier = {
  actionId: string;
  amount: number;
  expiresWeek: number;
  kind: 'turnout' | 'demobilization' | 'counterMobilization';
  target: TargetedModifier;
  weekApplied: number;
};

export type MediaOutlet = {
  audienceMix: Partial<Record<SegmentId, number>>;
  audienceByCluster?: Partial<Record<SegmentId, number>>;
  antiSystemFit?: number;
  credibility: number;
  controversy?: number;
  description?: string;
  editorialVector: Vec3;
  id: string;
  institutionalTaboo?: number;
  kind: 'public_tv' | 'commercial_tv' | 'radio' | 'tabloid' | 'digital' | 'regional';
  mainstreamLegitimacy?: number;
  nationalConservativeFit?: number;
  preferredFormats?: MediaFormat[];
  name: string;
  progressiveFit?: number;
  reach: number;
  baseReach?: number;
  regionIds?: RegionId[];
  regionFocus?: RegionId[];
  regionScope?: 'national' | 'regional';
  scrutiny: number;
  sensationalism: number;
  topicAffinity?: Partial<Record<ProgramIssueId, number>>;
  toxicity?: number;
  trustByCluster?: Partial<Record<SegmentId, number>>;
  type?: 'tv' | 'newspaper' | 'podcast' | 'influencer' | 'radio' | 'online' | 'expert';
};

export type MediaPartyOutletFit = {
  antiSystemFit: number;
  baseAlienationRisk: number;
  baseFit: number;
  ideologicalFit: number;
  mainstreamFit: number;
  mismatchRisk: number;
  scandalRisk: number;
  toxicityRisk: number;
};

export type MediaFormat =
  | 'interview'
  | 'debate'
  | 'duel'
  | 'podcast'
  | 'regional'
  | 'expertPanel'
  | 'influencer'
  | 'crisisInterview';

export type SpeakerRole = 'leader' | 'expert' | 'regionalFigure' | 'controversialFigure' | 'newFace';

export type MediaPreparationLevel = 'none' | 'basic' | 'strong';

export type MediaMiniGameType =
  | 'three_questions_timed'
  | 'short_interview'
  | 'long_form'
  | 'informal_qna'
  | 'hostile_interview'
  | 'soundbite_builder';

export type MediaMiniGameAnswer = {
  answerType?: 'position' | 'explanation' | 'attack' | 'pivot' | 'empathy' | 'technical';
  bestForSpeakerRoles?: SpeakerRole[];
  beneficiaryGroups?: string[];
  commitmentStrength?: number;
  competenceDelta?: number;
  consistencyRisk?: number;
  consistencyDelta?: number;
  controversyDelta?: number;
  factId?: string;
  factualScore?: number;
  factTolerance?: number;
  factValueLabel?: string;
  fiscalCredibilityDelta?: number;
  id: string;
  impliedAxisPosition?: Partial<Record<'econ' | 'culture' | 'authority' | 'establishment' | 'globalism' | 'green' | 'ukraine', number>>;
  impliedFramingId?: Partial<Record<ProgramIssueId, string>>;
  impliedIssuePosition?: Partial<Record<ProgramIssueId, number>>;
  impliedIssueSalience?: Partial<Record<ProgramIssueId, number>>;
  isFactuallyCorrect?: boolean;
  // Reserved for later richer media scoring; descriptive only today.
  issueSalienceDelta?: Partial<Record<ProgramIssueId, number>>;
  label: string;
  performanceDelta: number;
  payerGroups?: string[];
  // Reserved for later richer media scoring; descriptive only today.
  reputationDelta?: Partial<ReputationVector>;
  // Reserved for later richer media scoring; descriptive only today.
  riskyForClusters?: SegmentId[];
  text: string;
  tone?: 'specific' | 'vague' | 'aggressive' | 'empathetic' | 'technical' | 'evasive';
};

export type MediaMiniGameQuestion = {
  formats: MediaFormat[];
  id: string;
  // Generic fallback templates are retargeted to the invitation topic during selection.
  isGenericFallback?: boolean;
  miniGameTypes: MediaMiniGameType[];
  options: MediaMiniGameAnswer[];
  prompt: string;
  questionKind?:
    | 'factual_check'
    | 'axis_probe'
    | 'issue_position'
    | 'budget_constraint'
    | 'distributional_tradeoff'
    | 'coherence_trap'
    | 'crisis_defense'
    | 'program_consistency_check'
    | 'rhetorical_explanation';
  severity: 'soft' | 'normal' | 'hard' | 'hostile';
  timeLimitSec?: number;
  topicId: ProgramIssueId;
};

export type MediaMiniGameResult = {
  answerQualityScore?: number;
  competenceAdjustment?: number;
  consistencyAdjustment?: number;
  controversyAdjustment?: number;
  fiscalCredibilityScore?: number;
  impliedProgramEffects?: PendingProgramMediaEffect[];
  performanceMultiplier: number;
  programAlignmentScore?: number;
  programMismatchPenalty?: number;
  successScore?: number;
};

export type PendingProgramMediaEffect = {
  commitmentStrength: number;
  consistencyPenalty?: number;
  framingId?: string;
  impliedPosition?: number;
  issueId: ProgramIssueId;
  positionShift?: number;
  salienceShift?: number;
  sourceInvitationId: string;
};

export type MediaInvitation = {
  id: string;
  baseRisk?: number;
  description?: string;
  expectedReach?: number;
  expiresInWeeks?: number;
  format: MediaFormat | 'panel' | 'school' | 'press';
  issue: IssueId;
  issueId?: ProgramIssueId;
  miniGameType?: MediaMiniGameType | null;
  opponentPartyId?: PartyId;
  outletId: string;
  recommendedSpeakerRoles?: SpeakerRole[];
  requiredPreparation?: number;
  resolved: boolean;
  response?: 'leader' | 'delegate' | 'decline' | 'ignore';
  risk: number;
  title?: string;
  week: number;
};

export type VoterCluster = {
  demographics: Record<string, string>;
  id: SegmentId;
  ideologyMean: LatentVector8D;
  issueSensitivity: Partial<Record<ProgramIssueId, number>>;
  mediaConsumption?: Partial<Record<string, number>>;
  name: string;
  regionDistribution?: Partial<Record<RegionId, number>>;
  size: number;
};

export type MediaAppearanceDecision = {
  invitationId: string;
  action: 'decline' | 'accept';
  miniGameResult?: MediaMiniGameResult;
  preparationLevel: MediaPreparationLevel;
  speakerRole?: SpeakerRole;
};

export type MediaClusterImpact = {
  audienceShare: number;
  clusterId: SegmentId;
  controversyPenalty: number;
  impact: number;
  supportDelta: number;
  topicRelevance: number;
  trust: number;
};

export type MediaSentimentRating = 1 | 2 | 3 | 4 | 5;

export type MediaAppearanceResult = {
  clusterImpacts: MediaClusterImpact[];
  controversyTriggered: boolean;
  invitationId: string;
  issueSalienceDelta: Partial<Record<ProgramIssueId, number>>;
  mediaRiskWarnings?: {
    baseAlienation?: boolean;
    mismatch?: boolean;
    toxicScandal?: boolean;
  };
  miniGameAnswerQualityScore?: number;
  miniGameCompetenceAdjustment?: number;
  miniGameConsistencyAdjustment?: number;
  miniGameFiscalCredibilityScore?: number;
  partyOutletFit?: MediaPartyOutletFit;
  partyMomentumDelta: number;
  programEffects?: PendingProgramMediaEffect[];
  programWarning?: {
    text: string;
    type: 'mismatch' | 'commitment';
  };
  reputationDelta?: Partial<ReputationVector>;
  sentimentLabel?: string;
  sentimentRating?: MediaSentimentRating;
  sentimentScore?: number;
  sentimentSummary?: string;
  sentimentStatus?: 'rated' | 'declined';
  status?: 'pending' | 'applied';
  successScore: number;
  summary: string;
};

export type MediaClusterModifier = {
  amount: number;
  clusterId: SegmentId;
  expiresWeek: number;
  sourceInvitationId: string;
  weekApplied: number;
};

export type SponsorOffer = {
  accepted: boolean;
  amount: number;
  donorUnits: number;
  id: string;
  kind:
    | 'membership_drive'
    | 'grassroots_bundle'
    | 'sector_network'
    | 'regional_patron_network'
    | 'bank_loan'
    | 'registered_third_party'
    | 'opaque_support';
  legalStatus: 'legal' | 'gray' | 'illegal';
  name: string;
  policyPressure: Partial<Record<IssueId, number>>;
  regionBonus?: Partial<Record<RegionId, number>>;
  reputationRisk: number;
  scandalRisk: number;
  traceability: number;
};

export type EventCard = {
  id: string;
  issueAgendaShift: Partial<Record<IssueId, number>>;
  kind:
    | 'macro'
    | 'regional_crisis'
    | 'parliament_vote'
    | 'debate'
    | 'gaffe'
    | 'protest'
    | 'investigation'
    | 'policy_window';
  opportunityFor?: PartyId[];
  regionId?: RegionId;
  resolved: boolean;
  scope: 'national' | 'region';
  severity: number;
  threatTo?: PartyId[];
  title: string;
  week: number;
};

export type QuestionOption = {
  consistencyValue: number;
  controversyRisk: number;
  factValue: number;
  id: string;
  issueOwnershipShift?: Partial<Record<IssueId, number>>;
  reputationShift: Partial<ReputationVector>;
  rhetoricValue: number;
  text: string;
};

export type QuestionSet = {
  id: string;
  invitationId?: string;
  outletId?: string;
  prompt: string;
  resolvedOptionId?: string;
  trigger: 'debate' | 'interview' | 'school' | 'crisis' | 'press';
  options: QuestionOption[];
};

export type PollEstimate = {
  high: number;
  low: number;
  value: number;
};

export type Pollster = {
  cost: number;
  houseEffect: Partial<Record<PartyId, number>>;
  id: string;
  name: string;
  quality: number;
};

export type MarketingAdvisor = {
  costPerWeek: number;
  customActionUnlocks: boolean;
  id: MarketingAdvisorId;
  level: 0 | 1 | 2 | 3;
  messageTestingBonus: number;
  name: string;
  predictionAccuracyBonus: number;
  reputationRisk?: number;
  riskDetectionBonus: number;
  segmentTargetingBonus: number;
};

export type PollResult = {
  issueInsights?: Partial<Record<IssueId, string>>;
  partySupportEstimate?: Record<PartyId, PollEstimate>;
  recommendedActions?: string[];
  segmentInsights?: Partial<Record<SegmentId, string>>;
};

export type ScandalState = {
  clarificationEtaDays?: number;
  evidence: number;
  id: string;
  legalExposure: number;
  resolved: boolean;
  sourceOutletId?: string;
  sourcePartyId?: PartyId;
  targetPartyId: PartyId;
  targetSegments?: Partial<Record<SegmentId, number>>;
  title: string;
  traceability: number;
  truthStatus: 'false' | 'mixed' | 'true' | 'unknown';
  severity: number;
  virality: number;
};

export type RegionSegmentState = {
  modifiers: Partial<Record<PartyId, number>>;
  regionId: RegionId;
  segmentId: SegmentId;
};

export type ElectionResult = {
  nationalSupport: Record<PartyId, number>;
  seats: Record<PartyId, number>;
  winners: PartyId[];
};

export type TurnBriefing = {
  actionEffects: string[];
  advisorRecommendations: string[];
  events: string[];
  mediaNotes: string[];
  nationalSupport: Record<PartyId, number>;
  opponentMoves: string[];
  playerDelta: number;
  regionHighlights: {
    delta: number;
    reason: string;
    regionId: RegionId;
  }[];
  riskNotes: string[];
  segmentNotes: string[];
  week: number;
};

export type GameState = {
  baselineCalibrated?: boolean;
  campaignActionsV2: CampaignActionV2[];
  coalitionRelations: CoalitionRelation[];
  events: EventCard[];
  grid: RegionSegmentState[];
  history: TurnBriefing[];
  issueLayer: IssueLayerState;
  media: MediaOutlet[];
  mediaAppearanceResults?: MediaAppearanceResult[];
  mediaClusterModifiers?: MediaClusterModifier[];
  mediaInvitations: MediaInvitation[];
  pendingMediaEffects?: MediaAppearanceResult[];
  marketingAdvisors: MarketingAdvisor[];
  mode: GameMode;
  nationalSupport: Record<PartyId, number>;
  parties: PartySeed[];
  partyRuntime: Record<PartyId, PartyRuntime>;
  playerPartyId: PartyId;
  polls: Record<PartyId, PollEstimate>;
  pollsters: Pollster[];
  publicPollsterId?: string;
  publicRegionalPolls: Record<RegionId, Record<PartyId, PollEstimate>>;
  questions: QuestionSet[];
  regions: RegionSeed[];
  regionalSupport: Record<RegionId, Record<PartyId, number>>;
  rngSeed: number;
  rules: GameRules;
  scandals: ScandalState[];
  segments: VoterSegment[];
  sponsors: SponsorOffer[];
  turnoutModifiers?: CampaignTurnoutModifier[];
  version: string;
  week: number;
};

export type TurnResult = {
  briefing: TurnBriefing;
  state: GameState;
};
