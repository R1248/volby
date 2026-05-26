import type { Vec3 } from './types';

export type LatentDimension =
  | 'econ'
  | 'culture'
  | 'authority'
  | 'establishment'
  | 'globalism'
  | 'green'
  | 'ukraine';

export type LatentVector = Record<LatentDimension, number>;

export type IssueDomain =
  | 'authority'
  | 'culture'
  | 'economy'
  | 'foreign_policy'
  | 'green'
  | 'energy'
  | 'institutions'
  | 'migration'
  | 'welfare';

export type ProgramIssueId = string;

export type Issue = {
  controversy: number;
  defaultSalience: number;
  description: string;
  dimensionLoadings: Partial<Record<LatentDimension, number>>;
  domain: IssueDomain;
  id: ProgramIssueId;
  legibility: number;
  name: string;
  polarization: number;
  shortName?: string;
};

export type IssueFraming = {
  baseMobilizationModifier: number;
  controversyModifier: number;
  description: string;
  dimensionEffects?: Partial<Record<LatentDimension, number>>;
  id: string;
  issueId: ProgramIssueId;
  legibilityModifier: number;
  name: string;
  resolvesRelations?: string[];
  resolvesRelationTypes?: IssueRelationType[];
  swingAppealModifier: number;
};

export type PartyIssuePosition = {
  framingId?: string;
  issueId: ProgramIssueId;
  position: number;
  rigidity: number;
  salience: number;
  stability: number;
};

export type IssueRelationType =
  | 'excludes'
  | 'implies'
  | 'mobilizes_same_audience'
  | 'requires_framing'
  | 'same_family'
  | 'splits_audience'
  | 'tension'
  | 'usually_implies';

export type IssueRelation = {
  confidenceForward: number;
  confidenceReverse: number;
  description: string;
  expectedFromDirection?: 'against' | 'pro';
  expectedToDirection?: 'against' | 'pro';
  from: ProgramIssueId;
  salienceSensitive: boolean;
  strength: number;
  to: ProgramIssueId;
  type: IssueRelationType;
};

export type IdeologicalFrame = {
  description: string;
  dimensionCenter?: Partial<Record<LatentDimension, number>>;
  expectedIssues: Partial<Record<ProgramIssueId, number>>;
  id: string;
  name: string;
  tolerance: Partial<Record<ProgramIssueId, number>>;
};

export type IssueRelationNote = {
  description: string;
  from: ProgramIssueId;
  score: number;
  to: ProgramIssueId;
  type: IssueRelationType | 'cluster';
};

export type PartyCoherenceBreakdown = {
  agendaPenalty: number;
  audiencePenalty: number;
  clusterCoherenceBonus: number;
  coherenceScore: number;
  contradictionPenalty: number;
  framePenalty: number;
  mobilizationOverlapBonus: number;
  originPenalty: number;
  residualPenalty: number;
  relationNotes: IssueRelationNote[];
  rulePenalty: number;
  sameFamilyBonus: number;
  totalIncoherence: number;
  unresolvedTensionPenalty: number;
};

export type IssueLayerPartyState = {
  activeCampaignPackages?: string[];
  activeIdeologicalFrame?: string;
  coherenceBreakdown: PartyCoherenceBreakdown;
  coreLoyalty: number;
  currentIssuePositions: Record<ProgramIssueId, PartyIssuePosition>;
  factionTension: number;
  maxProgramChangesPerWeek?: number;
  mediaVulnerability: number;
  originalIssuePositions: Record<ProgramIssueId, PartyIssuePosition>;
  programChangesThisWeek?: number;
  programLegibility: number;
  swingAppeal: number;
};

export type ProgramFeedback = {
  id: string;
  message: string;
  metrics: Partial<Record<'coherence' | 'core' | 'faction' | 'legibility' | 'media' | 'swing', number>>;
  title: string;
  week: number;
};

export type MediaQuestion = {
  answerOptions: MediaAnswerOption[];
  expectedAnswerType?: 'attack' | 'clarify' | 'compromise' | 'defend';
  id: string;
  issueId: ProgramIssueId;
  pressure: number;
  question: string;
  title: string;
};

export type MediaAnswerOption = {
  baseMobilizationModifier?: number;
  coherenceModifier?: number;
  description: string;
  framingId?: string;
  id: string;
  label: string;
  mediaVulnerabilityModifier?: number;
  positionDelta?: number;
  rigidityDelta?: number;
  salienceDelta?: number;
  swingAppealModifier?: number;
};

export type CampaignTripEvent = {
  description: string;
  id: string;
  issueIds: ProgramIssueId[];
  localSalienceModifiers?: Partial<Record<ProgramIssueId, number>>;
  options: CampaignTripOption[];
  regionId?: string;
  title: string;
};

export type CampaignTripOption = {
  baseMobilizationModifier?: number;
  coherenceModifier?: number;
  deEmphasizedIssues?: ProgramIssueId[];
  description: string;
  emphasizedIssues: ProgramIssueId[];
  framingChanges?: Partial<Record<ProgramIssueId, string>>;
  id: string;
  label: string;
  localSupportModifier?: number;
  mediaRiskModifier?: number;
  nationalSupportModifier?: number;
  salienceDeltas?: Partial<Record<ProgramIssueId, number>>;
  swingAppealModifier?: number;
};

export type DebateAttack = {
  id: string;
  relatedIssues: ProgramIssueId[];
  responseOptions: DebateResponseOption[];
  severity: number;
  text: string;
  title: string;
};

export type DebateResponseOption = {
  baseMobilizationModifier?: number;
  coherenceModifier?: number;
  description: string;
  framingChanges?: Partial<Record<ProgramIssueId, string>>;
  id: string;
  label: string;
  mediaVulnerabilityModifier?: number;
  rigidityDelta?: number;
  salienceDeltas?: Partial<Record<ProgramIssueId, number>>;
  swingAppealModifier?: number;
};

export type IssueLayerState = {
  campaignPackages?: unknown[];
  debateAttack?: DebateAttack;
  feedbackLog: ProgramFeedback[];
  framings: IssueFraming[];
  ideologicalFrames: IdeologicalFrame[];
  issues: Issue[];
  mediaQuestions: MediaQuestion[];
  pendingCampaignTripId?: string;
  pendingMediaQuestionId?: string;
  player: IssueLayerPartyState;
  relations: IssueRelation[];
  resolvedCampaignTripIds?: string[];
  resolvedDebateAttackIds?: string[];
  resolvedMediaQuestionIds?: string[];
  tripEvents: CampaignTripEvent[];
};

export function toVec3(vector: Partial<LatentVector>): Vec3 {
  return {
    authority: vector.authority ?? 0,
    culture: vector.culture ?? 0,
    econ: vector.econ ?? 0,
  };
}
