import { mediaInvitationTemplates, mediaOutlets, voterClusters, type MediaInvitationTemplate } from '../data/mediaOutlets';
import type { ProgramIssueId } from './issueTypes';
import type {
  GameState,
  IssueId,
  MediaAppearanceDecision,
  MediaAppearanceResult,
  MediaFormat,
  MediaInvitation,
  MediaOutlet,
  MediaPreparationLevel,
  ReputationVector,
  SpeakerRole,
  VoterCluster,
} from './types';

const supportScale = 0.08;

export const mediaFormatProfiles: Record<MediaFormat, { impactMultiplier: number; name: string; riskMultiplier: number; salienceMultiplier: number }> = {
  interview: { name: 'Rozhovor', impactMultiplier: 1, riskMultiplier: 0.85, salienceMultiplier: 0.8 },
  debate: { name: 'Debata', impactMultiplier: 1.35, riskMultiplier: 1.35, salienceMultiplier: 1.3 },
  duel: { name: 'Duel', impactMultiplier: 1.25, riskMultiplier: 1.45, salienceMultiplier: 1.15 },
  podcast: { name: 'Podcast', impactMultiplier: 0.85, riskMultiplier: 0.8, salienceMultiplier: 0.75 },
  regional: { name: 'Regionalni rozhovor', impactMultiplier: 0.75, riskMultiplier: 0.65, salienceMultiplier: 0.65 },
  expertPanel: { name: 'Expertni panel', impactMultiplier: 0.65, riskMultiplier: 0.45, salienceMultiplier: 0.55 },
  influencer: { name: 'Influencer rozhovor', impactMultiplier: 1.05, riskMultiplier: 1.2, salienceMultiplier: 0.9 },
  crisisInterview: { name: 'Krizovy rozhovor', impactMultiplier: 1.1, riskMultiplier: 1.6, salienceMultiplier: 1.4 },
};

export const speakerRoleProfiles: Record<
  SpeakerRole,
  {
    authenticityByFormat: Record<MediaFormat, number>;
    competenceMultiplier: number;
    name: string;
    reachMultiplier: number;
    riskMultiplier: number;
  }
> = {
  leader: {
    name: 'Predseda',
    reachMultiplier: 1.18,
    riskMultiplier: 1.15,
    competenceMultiplier: 1,
    authenticityByFormat: { debate: 1.1, duel: 1.1, interview: 1, podcast: 0.95, regional: 0.9, expertPanel: 0.85, influencer: 0.8, crisisInterview: 1.05 },
  },
  expert: {
    name: 'Expert',
    reachMultiplier: 0.82,
    riskMultiplier: 0.78,
    competenceMultiplier: 1.25,
    authenticityByFormat: { debate: 0.9, duel: 0.85, interview: 1.05, podcast: 1.1, regional: 0.95, expertPanel: 1.25, influencer: 0.75, crisisInterview: 0.8 },
  },
  regionalFigure: {
    name: 'Regionalni tvar',
    reachMultiplier: 0.72,
    riskMultiplier: 0.82,
    competenceMultiplier: 0.95,
    authenticityByFormat: { debate: 0.75, duel: 0.75, interview: 0.9, podcast: 0.85, regional: 1.25, expertPanel: 0.8, influencer: 0.85, crisisInterview: 0.75 },
  },
  controversialFigure: {
    name: 'Kontroverzni tvar',
    reachMultiplier: 1.05,
    riskMultiplier: 1.45,
    competenceMultiplier: 0.85,
    authenticityByFormat: { debate: 0.95, duel: 1.15, interview: 1, podcast: 1.15, regional: 0.85, expertPanel: 0.65, influencer: 1.05, crisisInterview: 0.9 },
  },
  newFace: {
    name: 'Nova tvar',
    reachMultiplier: 0.75,
    riskMultiplier: 1.05,
    competenceMultiplier: 0.9,
    authenticityByFormat: { debate: 0.75, duel: 0.7, interview: 0.95, podcast: 1, regional: 0.9, expertPanel: 0.75, influencer: 1.2, crisisInterview: 0.65 },
  },
};

export function generateWeeklyMediaInvitations(state: GameState, rngSeed = state.rngSeed): MediaInvitation[] {
  const existingIds = new Set(state.mediaInvitations.filter((invitation) => invitation.week === state.week).map((invitation) => invitation.id));
  const count = 1 + Math.floor(randomFromSeed(rngSeed + state.week * 97) * 3);
  const playerMomentum = state.partyRuntime.player.momentum ?? state.partyRuntime.player.field.amplitude ?? 1;

  return mediaInvitationTemplates
    .map((template, index) => {
      const outlet = findOutlet(template.outletId, state.media);
      const salience = currentIssueSalience(state, template.topicId);
      const outletAffinity = (outlet?.topicAffinity as Partial<Record<ProgramIssueId, number>> | undefined)?.[template.topicId] ?? 0.35;
      const momentumFit = 0.85 + Math.min(0.35, Math.max(0, playerMomentum - 0.9) * 0.25);
      const roll = randomFromSeed(rngSeed + state.week * 131 + index * 19);
      return {
        score: roll * 0.42 + salience * 0.34 + outletAffinity * 0.16 + momentumFit * 0.08,
        template,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ template }) => toInvitation(template, state.week))
    .filter((invitation) => !existingIds.has(invitation.id));
}

export function resolveMediaAppearance(decision: MediaAppearanceDecision, state: GameState): MediaAppearanceResult {
  const invitation = state.mediaInvitations.find((item) => item.id === decision.invitationId);
  if (!invitation) {
    return emptyResult(decision.invitationId, 'Pozvanka uz neni dostupna.');
  }

  const outlet = findOutlet(invitation.outletId, state.media);
  if (!outlet) {
    return emptyResult(invitation.id, 'Medium neni v katalogu.');
  }

  if (decision.action === 'decline') {
    return {
      clusterImpacts: [],
      controversyTriggered: false,
      invitationId: invitation.id,
      issueSalienceDelta: {},
      partyMomentumDelta: -0.005,
      reputationDelta: { authenticity: -0.006, trust: -0.004 },
      successScore: 0,
      summary: `${outlet.name}: pozvanka odmitnuta, bez primeho medialniho zasahu.`,
    };
  }

  const format = normalizeFormat(invitation.format);
  const speakerRole = decision.speakerRole ?? invitation.recommendedSpeakerRoles?.[0] ?? 'leader';
  const formatProfile = mediaFormatProfiles[format];
  const speakerProfile = speakerRoleProfiles[speakerRole];
  const preparationMultiplier = preparationImpact(decision.preparationLevel, invitation.requiredPreparation ?? 0.5);
  const performanceMultiplier =
    decision.miniGameResult?.performanceMultiplier ??
    clamp(0.94 + preparationMultiplier * 0.08 - state.partyRuntime.player.leader.fatigue * (speakerRole === 'leader' ? 0.08 : 0.02), 0.7, 1.18);
  const speakerFitMultiplier =
    speakerProfile.authenticityByFormat[format] * (invitation.recommendedSpeakerRoles?.includes(speakerRole) ? 1.08 : 0.88);
  const credibilityMultiplier = 0.65 + outlet.credibility * 0.7;
  const expectedReach = (invitation.expectedReach ?? outlet.baseReach ?? outlet.reach) * speakerProfile.reachMultiplier;
  const topicId = invitation.issueId ?? invitation.issue;

  const clusterImpacts = voterClusters.map((cluster) => {
    const audienceByCluster = outlet.audienceByCluster as Partial<Record<string, number>> | undefined;
    const audienceMix = outlet.audienceMix as Partial<Record<string, number>> | undefined;
    const trustByCluster = outlet.trustByCluster as Partial<Record<string, number>> | undefined;
    const issueSensitivity = cluster.issueSensitivity as Partial<Record<ProgramIssueId, number>>;
    const audienceShare = audienceByCluster?.[cluster.id] ?? audienceMix?.[cluster.id] ?? 0;
    const trust = trustByCluster?.[cluster.id] ?? 0.45;
    const topicRelevance = issueSensitivity[topicId] ?? fallbackTopicRelevance(topicId, cluster);
    const controversyPenalty = controversyPenaltyForCluster(outlet, trust, speakerRole, format, decision.preparationLevel);
    const impact =
      expectedReach *
        audienceShare *
        trust *
        formatProfile.impactMultiplier *
        speakerFitMultiplier *
        preparationMultiplier *
        performanceMultiplier *
        topicRelevance *
        credibilityMultiplier -
      controversyPenalty;

    return {
      audienceShare,
      clusterId: cluster.id,
      controversyPenalty: round4(controversyPenalty),
      impact: round4(impact),
      supportDelta: round4(impact * supportScale),
      topicRelevance,
      trust,
    };
  });

  const weightedImpact = clusterImpacts.reduce((sum, impact) => {
    const cluster = voterClusters.find((item) => item.id === impact.clusterId);
    return sum + impact.supportDelta * (cluster?.size ?? 0);
  }, 0);
  const positiveImpact = clusterImpacts.reduce((sum, impact) => sum + Math.max(0, impact.supportDelta), 0);
  const negativeImpact = clusterImpacts.reduce((sum, impact) => sum + Math.min(0, impact.supportDelta), 0);
  const riskScore = effectiveRisk(invitation, outlet, speakerRole, format, decision.preparationLevel, performanceMultiplier);
  const controversyTriggered = riskScore > 0.72;
  const successScore = clamp(0.5 + weightedImpact * 18 + positiveImpact * 0.8 + negativeImpact * 1.4 - (controversyTriggered ? 0.18 : 0), 0, 1);
  const issueSalienceDelta = {
    [topicId]: round4(0.12 * formatProfile.salienceMultiplier * (invitation.expectedReach ?? outlet.reach) * (controversyTriggered ? 1.3 : 1)),
  };

  return {
    clusterImpacts,
    controversyTriggered,
    invitationId: invitation.id,
    issueSalienceDelta,
    partyMomentumDelta: round4(weightedImpact * 6 - (controversyTriggered ? 0.025 : 0)),
    reputationDelta: reputationDeltaFor(speakerRole, successScore, controversyTriggered, speakerProfile.competenceMultiplier),
    successScore: round4(successScore),
    summary: `${outlet.name}: ${speakerRoleProfiles[speakerRole].name} v formatu ${formatProfile.name} ${successScore >= 0.55 ? 'posilil medialni vykon' : 'mel omezeny efekt'}${controversyTriggered ? ' a vyvolal kontroverzi' : ''}.`,
  };
}

function toInvitation(template: MediaInvitationTemplate, week: number): MediaInvitation {
  return {
    baseRisk: template.baseRisk,
    description: template.description,
    expectedReach: template.expectedReach,
    expiresInWeeks: template.expiresInWeeks,
    format: template.format,
    id: `${template.id}-w${week}`,
    issue: legacyIssueFromTopic(template.topicId),
    issueId: template.topicId,
    miniGameType: template.miniGameType,
    opponentPartyId: template.opponentPartyId,
    outletId: template.outletId,
    recommendedSpeakerRoles: [...template.recommendedSpeakerRoles],
    requiredPreparation: template.requiredPreparation,
    resolved: false,
    risk: template.baseRisk,
    title: template.title,
    week,
  };
}

function normalizeFormat(format: MediaInvitation['format']): MediaFormat {
  if (format === 'panel') return 'expertPanel';
  if (format === 'press') return 'interview';
  if (format === 'school') return 'regional';
  return format;
}

function currentIssueSalience(state: GameState, issueId: ProgramIssueId) {
  const current = state.issueLayer?.player?.currentIssuePositions?.[issueId];
  if (current) return clamp(current.salience / 4, 0, 1);
  const legacy = legacyIssueFromTopic(issueId);
  return state.regions.reduce((sum, region) => sum + (region.issueAgendaBase[legacy] ?? 0), 0) / Math.max(1, state.regions.length);
}

function fallbackTopicRelevance(issueId: ProgramIssueId, cluster: VoterCluster) {
  const direct = (cluster.issueSensitivity as Partial<Record<ProgramIssueId, number>>)[legacyIssueFromTopic(issueId)];
  if (direct !== undefined) return direct;
  const issueVector = issueToVector(issueId);
  const distance =
    Math.abs(cluster.ideologyMean.econ - issueVector.econ) +
    Math.abs(cluster.ideologyMean.culture - issueVector.culture) +
    Math.abs(cluster.ideologyMean.authority - issueVector.authority) +
    Math.abs(cluster.ideologyMean.establishment - issueVector.establishment) +
    Math.abs(cluster.ideologyMean.globalism - issueVector.globalism) +
    Math.abs(cluster.ideologyMean.green - issueVector.green) +
    Math.abs(cluster.ideologyMean.ukraine - issueVector.ukraine);
  return clamp(0.75 - distance / 9, 0.18, 0.75);
}

function issueToVector(issueId: ProgramIssueId) {
  const defaults = { authority: 0, culture: 0, econ: 0, establishment: 0, globalism: 0, green: 0, ukraine: 0 };
  const map: Partial<Record<ProgramIssueId, typeof defaults>> = {
    antiCorruption: { ...defaults, establishment: 0.45 },
    climate: { ...defaults, culture: -0.2, green: 0.8, globalism: 0.25 },
    education: { ...defaults, culture: -0.25, establishment: 0.15 },
    energyPrices: { ...defaults, econ: -0.3, establishment: -0.1 },
    healthcare: { ...defaults, econ: -0.45 },
    housing: { ...defaults, econ: -0.45, establishment: 0.12 },
    lawAndOrder: { ...defaults, authority: 0.7, culture: 0.2 },
    migration: { ...defaults, authority: 0.5, culture: 0.65, globalism: -0.5 },
    nationalSovereignty: { ...defaults, culture: 0.35, establishment: -0.25, globalism: -0.85 },
    taxes: { ...defaults, econ: 0.75 },
  };
  return map[issueId] ?? defaults;
}

function preparationImpact(level: MediaPreparationLevel, required: number) {
  const value = level === 'strong' ? 0.9 : level === 'basic' ? 0.55 : 0.2;
  return clamp(0.86 + value * 0.28 - Math.max(0, required - value) * 0.22, 0.72, 1.15);
}

function controversyPenaltyForCluster(
  outlet: MediaOutlet,
  trust: number,
  speakerRole: SpeakerRole,
  format: MediaFormat,
  preparationLevel: MediaPreparationLevel,
) {
  const controversy = outlet.controversy ?? outlet.sensationalism;
  const speakerRisk = speakerRole === 'controversialFigure' ? 0.18 : speakerRole === 'leader' ? 0.06 : 0;
  const prepRelief = preparationLevel === 'strong' ? 0.55 : preparationLevel === 'basic' ? 0.8 : 1;
  return Math.max(0, controversy - 0.34) * Math.max(0.05, 0.62 - trust) * mediaFormatProfiles[format].riskMultiplier * prepRelief + speakerRisk * Math.max(0, 0.55 - trust);
}

function effectiveRisk(
  invitation: MediaInvitation,
  outlet: MediaOutlet,
  speakerRole: SpeakerRole,
  format: MediaFormat,
  preparationLevel: MediaPreparationLevel,
  performanceMultiplier: number,
) {
  const prepRisk = preparationLevel === 'strong' ? 0.72 : preparationLevel === 'basic' ? 0.9 : 1.12;
  return clamp(
    (invitation.baseRisk ?? invitation.risk) *
      mediaFormatProfiles[format].riskMultiplier *
      speakerRoleProfiles[speakerRole].riskMultiplier *
      prepRisk *
      (1.08 - Math.min(1.05, performanceMultiplier) * 0.16) +
      (outlet.controversy ?? 0) * 0.15,
    0,
    1,
  );
}

function reputationDeltaFor(
  speakerRole: SpeakerRole,
  successScore: number,
  controversyTriggered: boolean,
  competenceMultiplier: number,
): Partial<ReputationVector> {
  const success = successScore - 0.5;
  return {
    authenticity: round4(success * (speakerRole === 'newFace' || speakerRole === 'regionalFigure' ? 0.04 : 0.02)),
    competence: round4(success * 0.035 * competenceMultiplier),
    controversy: round4((controversyTriggered ? 0.035 : 0) + (speakerRole === 'controversialFigure' ? 0.015 : 0)),
    trust: round4(success * 0.025 - (controversyTriggered ? 0.018 : 0)),
  };
}

function findOutlet(outletId: string, stateMedia: MediaOutlet[]) {
  return stateMedia.find((outlet) => outlet.id === outletId) ?? mediaOutlets.find((outlet) => outlet.id === outletId);
}

function legacyIssueFromTopic(issueId: ProgramIssueId): IssueId {
  const map: Partial<Record<ProgramIssueId, IssueId>> = {
    climate: 'climate',
    coalPhaseout: 'climate',
    education: 'education',
    energyPrices: 'industry',
    greenDeal: 'greenDeal',
    healthcare: 'healthcare',
    housing: 'housing',
    lawAndOrder: 'security',
    migration: 'security',
    nationalSovereignty: 'security',
    pensions: 'healthcare',
    regulation: 'taxes',
    taxes: 'taxes',
    transport: 'transport',
    ukraineSupport: 'security',
  };
  return map[issueId] ?? 'taxes';
}

function emptyResult(invitationId: string, summary: string): MediaAppearanceResult {
  return {
    clusterImpacts: [],
    controversyTriggered: false,
    invitationId,
    issueSalienceDelta: {},
    partyMomentumDelta: 0,
    successScore: 0,
    summary,
  };
}

function randomFromSeed(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function round4(value: number) {
  return Math.round(value * 10000) / 10000;
}
