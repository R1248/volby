import { mediaInvitationTemplates, mediaOutlets, voterClusters, type MediaInvitationTemplate } from '../data/mediaOutlets';
import { mediaMiniGameQuestions } from '../data/mediaMiniGameQuestions';
import type { ProgramIssueId } from './issueTypes';
import type {
  GameState,
  IssueId,
  MediaAppearanceDecision,
  MediaAppearanceResult,
  MediaMiniGameAnswer,
  MediaMiniGameQuestion,
  MediaMiniGameResult,
  MediaFormat,
  MediaInvitation,
  MediaOutlet,
  MediaPreparationLevel,
  MediaSentimentRating,
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
    return declineMediaResult(invitation, outlet);
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
  const topicId = invitation.issueId ?? programTopicFromLegacy(invitation.issue);
  const topicAffinityMultiplier = 0.85 + ((outlet.topicAffinity as Partial<Record<ProgramIssueId, number>> | undefined)?.[topicId] ?? 0.45) * 0.3;

  const clusterImpacts = voterClusters.map((cluster) => {
    const audienceByCluster = outlet.audienceByCluster as Partial<Record<string, number>> | undefined;
    const audienceMix = outlet.audienceMix as Partial<Record<string, number>> | undefined;
    const trustByCluster = outlet.trustByCluster as Partial<Record<string, number>> | undefined;
    const issueSensitivity = cluster.issueSensitivity as Partial<Record<ProgramIssueId, number>>;
    const audienceShare = audienceByCluster?.[cluster.id] ?? audienceMix?.[cluster.id] ?? 0;
    const trust = trustByCluster?.[cluster.id] ?? 0.45;
    const topicRelevance = issueSensitivity[topicId] ?? fallbackTopicRelevance(topicId, cluster);
    const controversyPenalty = controversyPenaltyForCluster(outlet, trust, speakerRole, format, decision.preparationLevel, audienceShare, expectedReach);
    const impact =
      expectedReach *
        audienceShare *
        trust *
        formatProfile.impactMultiplier *
        speakerFitMultiplier *
        preparationMultiplier *
        performanceMultiplier *
        topicAffinityMultiplier *
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
  const riskScore = clamp(
    effectiveRisk(invitation, outlet, speakerRole, format, decision.preparationLevel, performanceMultiplier) +
      (decision.miniGameResult?.controversyAdjustment ?? 0),
    0,
    1,
  );
  const controversyTriggered = riskScore > 0.72;
  const successScore = clamp(
    0.5 +
      weightedImpact * 18 +
      positiveImpact * 0.8 +
      negativeImpact * 1.4 +
      ((decision.miniGameResult?.successScore ?? 0.5) - 0.5) * 0.18 -
      (controversyTriggered ? 0.18 : 0),
    0,
    1,
  );
  const sentimentScore = clamp(
    decision.miniGameResult?.successScore === undefined
      ? successScore
      : successScore * 0.75 + decision.miniGameResult.successScore * 0.25,
    0,
    1,
  );
  const issueSalienceDelta = {
    [topicId]: round4(0.12 * formatProfile.salienceMultiplier * (invitation.expectedReach ?? outlet.reach) * (controversyTriggered ? 1.3 : 1)),
  };

  return {
    clusterImpacts,
    controversyTriggered,
    invitationId: invitation.id,
    issueSalienceDelta,
    miniGameCompetenceAdjustment: decision.miniGameResult?.competenceAdjustment,
    miniGameConsistencyAdjustment: decision.miniGameResult?.consistencyAdjustment,
    miniGameFiscalCredibilityScore: decision.miniGameResult?.fiscalCredibilityScore,
    partyMomentumDelta: round4(weightedImpact * 6 - (controversyTriggered ? 0.025 : 0)),
    programEffects: decision.miniGameResult?.impliedProgramEffects ?? [],
    reputationDelta: reputationDeltaFor(speakerRole, successScore, controversyTriggered, speakerProfile.competenceMultiplier),
    sentimentScore: round4(sentimentScore),
    successScore: round4(successScore),
    summary: `${outlet.name}: ${speakerRoleProfiles[speakerRole].name} v formatu ${formatProfile.name} ${successScore >= 0.55 ? 'posilil medialni vykon' : 'mel omezeny efekt'}${controversyTriggered ? ' a vyvolal kontroverzi' : ''}.`,
  };
}

export function mediaSentimentFromResult(result: MediaAppearanceResult): {
  label: string;
  rating?: MediaSentimentRating;
  summary: string;
} {
  if (result.sentimentStatus === 'declined') {
    return {
      label: 'Odmítnuto',
      rating: result.sentimentRating,
      summary: result.sentimentSummary ?? 'Pozvanka byla odmitnuta; realny dopad se projevi az v tydennim vyhodnoceni.',
    };
  }

  const adjusted = (result.sentimentScore ?? result.successScore) - (result.controversyTriggered ? 0.12 : 0);
  const rating: MediaSentimentRating =
    adjusted < 0.25 ? 1 : adjusted < 0.43 ? 2 : adjusted < 0.58 ? 3 : adjusted < 0.76 ? 4 : 5;
  const labels: Record<MediaSentimentRating, string> = {
    1: 'Průšvih',
    2: 'Slabé',
    3: 'Smíšené',
    4: 'Dobré',
    5: 'Výborné',
  };
  const summaries: Record<MediaSentimentRating, string> = {
    1: 'Vystup pusobi jako viditelne nezvladnuty a bude potrebovat korekci.',
    2: 'Odezva je slaba, bez jasneho zisku a s rizikem dozvuku.',
    3: 'Odezva je smisena: cast publika slysi sdeleni, cast vidi slabiny.',
    4: 'Vystup pusobi dobre a pravdepodobne posili citelnost kampane.',
    5: 'Vystup ma vybornou odezvu a vyrazne zvedl medialni dojem.',
  };

  return {
    label: labels[rating],
    rating,
    summary: summaries[rating],
  };
}

export function selectMediaMiniGameQuestions(
  invitation: MediaInvitation,
  outlet: MediaOutlet,
  state: GameState,
): MediaMiniGameQuestion[] {
  const miniGameType = invitation.miniGameType;
  if (!miniGameType) {
    return [];
  }

  const format = normalizeFormat(invitation.format);
  const topicId = invitation.issueId ?? programTopicFromLegacy(invitation.issue);
  const risk = Math.max(invitation.risk, outlet.scrutiny * 0.7, outlet.sensationalism * 0.6);
  const preferredSeverities =
    miniGameType === 'hostile_interview'
      ? ['hostile', 'hard']
      : miniGameType === 'three_questions_timed'
      ? risk > 0.58
        ? ['hostile', 'hard', 'normal']
        : ['hard', 'normal']
      : miniGameType === 'informal_qna' || miniGameType === 'soundbite_builder'
      ? ['soft', 'normal']
      : miniGameType === 'long_form'
      ? ['normal', 'soft', 'hard']
      : ['normal', 'soft'];
  const count =
    miniGameType === 'long_form'
      ? 4
      : miniGameType === 'short_interview'
      ? risk > 0.52
        ? 3
        : 2
      : 3;
  const shouldBeTimed = miniGameType === 'three_questions_timed' || miniGameType === 'hostile_interview';
  const pool = mediaMiniGameQuestions
    .filter((question) => question.topicId === topicId || question.isGenericFallback)
    .filter((question) => question.miniGameTypes.includes(miniGameType) || question.formats.includes(format))
    .sort((a, b) => Number(Boolean(a.isGenericFallback)) - Number(Boolean(b.isGenericFallback)) || severityRank(preferredSeverities, a.severity) - severityRank(preferredSeverities, b.severity));
  const selected = uniqueQuestions(pool, count);

  return selected.map((question, index) => ({
    ...question,
    prompt: question.isGenericFallback ? `${question.prompt} (${issueName(state, topicId)})` : question.prompt,
    topicId: question.isGenericFallback ? topicId : question.topicId,
    timeLimitSec: shouldBeTimed
      ? clamp(Math.round((miniGameType === 'hostile_interview' ? 8 : 10) + index * 2 + Math.max(0, 0.7 - risk) * 4), 8, miniGameType === 'hostile_interview' ? 15 : 18)
      : miniGameType === 'short_interview' && risk > 0.58
      ? 20
      : undefined,
  }));
}

export function scoreMediaMiniGameAnswers(
  answers: readonly MediaMiniGameAnswer[],
  questions: readonly MediaMiniGameQuestion[],
  context: {
    invitation: MediaInvitation;
    outlet: MediaOutlet;
    speakerRole?: SpeakerRole;
    state: GameState;
  },
): MediaMiniGameResult {
  if (questions.length === 0) {
    return { performanceMultiplier: 1, successScore: 0.5, controversyAdjustment: 0 };
  }

  let performance = 0;
  let controversy = 0;
  let programAlignment = 0;
  let programMismatch = 0;
  let fiscalCredibility = 0;
  let competence = 0;
  let consistency = 0;
  const impliedProgramEffects: MediaMiniGameResult['impliedProgramEffects'] = [];
  for (let index = 0; index < questions.length; index += 1) {
    const question = questions[index];
    const answer = answers[index] ?? vagueAnswer(question);
    const speakerFit = answer.bestForSpeakerRoles?.includes(context.speakerRole ?? 'leader') ? 0.025 : 0;
    const positionFit = answerPositionFit(answer, question.topicId, context.state);
    const outletRiskPenalty = (answer.tone === 'aggressive' ? context.outlet.sensationalism * 0.035 : 0) + (answer.tone === 'vague' || answer.tone === 'evasive' ? context.outlet.scrutiny * 0.025 : 0);
    const commitment = evaluateProgramCommitment(answer, question, context);
    const tradeoffAdjustment = evaluateTradeoffAnswer(answer, question, context);
    const axisAdjustment = evaluateAxisFit(answer, context.state);
    const directPositionQuestion = question.options.some((option) => option.impliedIssuePosition);
    const evasivePenalty = directPositionQuestion && (answer.answerType === 'pivot' || answer.tone === 'evasive') ? 0.045 : 0;
    const fiscalAdjustment = (answer.fiscalCredibilityDelta ?? 0) * (question.questionKind === 'budget_constraint' || question.questionKind === 'coherence_trap' ? 0.8 : 0.45);
    const competenceAdjustment = (answer.competenceDelta ?? 0) * 0.75;
    const consistencyAdjustment = (answer.consistencyDelta ?? 0) * 0.65;
    performance +=
      answer.performanceDelta +
      speakerFit +
      positionFit +
      commitment.performanceAdjustment +
      tradeoffAdjustment +
      axisAdjustment +
      fiscalAdjustment +
      competenceAdjustment +
      consistencyAdjustment -
      outletRiskPenalty -
      evasivePenalty;
    controversy += (answer.controversyDelta ?? 0) + (answer.tone === 'aggressive' ? 0.02 : 0) - (answer.tone === 'empathetic' ? 0.01 : 0);
    programAlignment += commitment.alignmentScore;
    programMismatch += commitment.mismatchPenalty;
    fiscalCredibility += answer.fiscalCredibilityDelta ?? 0;
    competence += answer.competenceDelta ?? 0;
    consistency += answer.consistencyDelta ?? 0;
    impliedProgramEffects.push(...commitment.effects);
  }

  const averagePerformance = performance / Math.max(1, questions.length);
  const averageControversy = controversy / Math.max(1, questions.length);
  return {
    competenceAdjustment: round4(competence / Math.max(1, questions.length)),
    consistencyAdjustment: round4(consistency / Math.max(1, questions.length)),
    controversyAdjustment: round4(clamp(averageControversy, -0.06, 0.1)),
    fiscalCredibilityScore: round4(fiscalCredibility / Math.max(1, questions.length)),
    impliedProgramEffects,
    performanceMultiplier: round4(clamp(1 + averagePerformance, 0.75, 1.2)),
    programAlignmentScore: round4(programAlignment / Math.max(1, questions.length)),
    programMismatchPenalty: round4(programMismatch),
    successScore: round4(clamp(0.5 + averagePerformance * 1.6 - Math.max(0, averageControversy) * 0.5, 0, 1)),
  };
}

function declineMediaResult(invitation: MediaInvitation, outlet: MediaOutlet): MediaAppearanceResult {
  const reach = invitation.expectedReach ?? outlet.baseReach ?? outlet.reach;
  const isHighReachMainstream = reach >= 0.6 && (normalizeFormat(invitation.format) === 'debate' || normalizeFormat(invitation.format) === 'duel') && (outlet.controversy ?? 0) < 0.5;
  const isToxic = (outlet.controversy ?? 0) >= 0.7 || outlet.sensationalism >= 0.78 || outlet.credibility < 0.4;

  if (isToxic) {
    return {
      clusterImpacts: [],
      controversyTriggered: false,
      invitationId: invitation.id,
      issueSalienceDelta: {},
      partyMomentumDelta: 0,
      reputationDelta: { authenticity: 0.002, controversy: -0.002, trust: 0.001 },
      sentimentLabel: 'Odmítnuto',
      sentimentStatus: 'declined',
      sentimentSummary: `${outlet.name}: odmitnuti je obhajitelne, protoze medium nese vysoke reputacni riziko.`,
      successScore: 0.52,
      summary: `${outlet.name}: pozvanka odmitnuta kvuli reputacnimu riziku kanalu.`,
    };
  }

  if (isHighReachMainstream) {
    return {
      clusterImpacts: [],
      controversyTriggered: false,
      invitationId: invitation.id,
      issueSalienceDelta: {},
      partyMomentumDelta: -0.018,
      reputationDelta: { authenticity: -0.008, competence: -0.004, trust: -0.007 },
      sentimentLabel: 'Odmítnuto',
      sentimentStatus: 'declined',
      sentimentSummary: `${outlet.name}: odmitnuti vysokeho dosahu muze pusobit jako vyhybani se verejne kontrole.`,
      successScore: 0.32,
      summary: `${outlet.name}: odmitnuti hlavni debaty vytvari reputacni riziko.`,
    };
  }

  return {
    clusterImpacts: [],
    controversyTriggered: false,
    invitationId: invitation.id,
    issueSalienceDelta: {},
    partyMomentumDelta: reach < 0.3 ? -0.001 : -0.004,
    reputationDelta: reach < 0.3 ? {} : { authenticity: -0.002, trust: -0.002 },
    sentimentLabel: 'Odmítnuto',
    sentimentStatus: 'declined',
    sentimentSummary: `${outlet.name}: odmitnuti ma nizky az mirny dopad podle dosahu pozvanky.`,
    successScore: reach < 0.3 ? 0.5 : 0.44,
    summary: `${outlet.name}: pozvanka odmitnuta s omezenym dopadem.`,
  };
}

function severityRank(preferred: readonly string[], severity: MediaMiniGameQuestion['severity']) {
  const index = preferred.indexOf(severity);
  return index >= 0 ? index : preferred.length + 1;
}

function uniqueQuestions(questions: readonly MediaMiniGameQuestion[], count: number) {
  const seen = new Set<string>();
  const selected: MediaMiniGameQuestion[] = [];
  for (const question of questions) {
    if (seen.has(question.id)) {
      continue;
    }
    seen.add(question.id);
    selected.push(question);
    if (selected.length >= count) {
      break;
    }
  }
  if (selected.length >= count) {
    return selected;
  }
  return selected;
}

function evaluateTradeoffAnswer(
  answer: MediaMiniGameAnswer,
  question: MediaMiniGameQuestion,
  context: {
    invitation: MediaInvitation;
    outlet: MediaOutlet;
    speakerRole?: SpeakerRole;
    state: GameState;
  },
) {
  if (question.questionKind !== 'budget_constraint' && question.questionKind !== 'coherence_trap') {
    return 0;
  }

  const seriousness = clamp(context.outlet.scrutiny * 0.75 + context.outlet.credibility * 0.25 + context.invitation.risk * 0.25, 0, 1.2);
  let adjustment = 0;
  if (answer.tone === 'vague' || answer.tone === 'evasive' || answer.answerType === 'pivot') {
    adjustment -= 0.025 + seriousness * 0.045;
  }
  if (answer.fiscalCredibilityDelta !== undefined && answer.fiscalCredibilityDelta < -0.04) {
    adjustment -= seriousness * 0.025;
  }
  if ((answer.payerGroups?.length ?? 0) > 0 || answer.fiscalCredibilityDelta !== undefined && answer.fiscalCredibilityDelta > 0) {
    adjustment += 0.012 + seriousness * 0.018;
  }
  if ((answer.beneficiaryGroups?.length ?? 0) > 0 && (answer.payerGroups?.length ?? 0) > 0) {
    adjustment += 0.01;
  }
  return adjustment;
}

function evaluateAxisFit(answer: MediaMiniGameAnswer, state: GameState) {
  const impliedAxis = answer.impliedAxisPosition;
  const currentAxis = state.partyRuntime.player.field.center8D;
  if (!impliedAxis || !currentAxis) {
    return 0;
  }

  let adjustment = 0;
  let count = 0;
  for (const [axis, impliedPosition] of Object.entries(impliedAxis) as [keyof typeof impliedAxis, number][]) {
    const currentPosition = currentAxis[axis];
    if (typeof currentPosition !== 'number') {
      continue;
    }
    const distance = Math.abs(impliedPosition - currentPosition);
    adjustment += distance <= 0.55 ? 0.006 : -Math.min(0.026, distance * 0.012);
    count += 1;
  }
  return count === 0 ? 0 : adjustment / count;
}

function vagueAnswer(question: MediaMiniGameQuestion): MediaMiniGameAnswer {
  return (
    question.options.find((answer) => answer.tone === 'vague' || answer.tone === 'evasive') ?? {
      id: 'timeout',
      label: 'Bez odpovedi',
      performanceDelta: -0.08,
      text: 'Bez konkretni odpovedi.',
      tone: 'vague',
    }
  );
}

function evaluateProgramCommitment(
  answer: MediaMiniGameAnswer,
  question: MediaMiniGameQuestion,
  context: {
    invitation: MediaInvitation;
    outlet: MediaOutlet;
    speakerRole?: SpeakerRole;
    state: GameState;
  },
) {
  const reach = context.invitation.expectedReach ?? context.outlet.baseReach ?? context.outlet.reach;
  const formatRisk = context.outlet.scrutiny * 0.7 + context.outlet.sensationalism * 0.3 + context.invitation.risk * 0.4;
  const effects: NonNullable<MediaMiniGameResult['impliedProgramEffects']> = [];
  let alignmentScore = 0;
  let mismatchPenalty = 0;
  let performanceAdjustment = 0;

  for (const [issueId, impliedPosition] of Object.entries(answer.impliedIssuePosition ?? {}) as [ProgramIssueId, number][]) {
    const current = context.state.issueLayer.player.currentIssuePositions[issueId];
    if (!current) {
      continue;
    }

    const commitmentStrength = clamp(answer.commitmentStrength ?? 0.45, 0, 1);
    const difference = Math.abs(impliedPosition - current.position);
    const exposure = commitmentStrength * reach * (0.45 + formatRisk * 0.55) * (0.55 + current.salience / 8) * (0.65 + current.rigidity * 0.55);
    const aligned = difference <= 0.65;
    const moderateMismatch = difference > 0.65 && difference <= 1.4;
    const mismatch = difference > 1.4;
    const issuePenalty = (moderateMismatch ? difference * 0.035 : mismatch ? difference * 0.075 : -0.018) * exposure + (answer.consistencyRisk ?? 0) * (mismatch ? 0.35 : moderateMismatch ? 0.16 : 0);

    if (aligned) {
      alignmentScore += 0.035 * exposure;
      performanceAdjustment += 0.018 * exposure;
    } else {
      mismatchPenalty += issuePenalty;
      performanceAdjustment -= issuePenalty;
    }

    if (answer.answerType !== 'pivot' && commitmentStrength >= 0.55 && reach >= 0.25) {
      effects.push({
        commitmentStrength,
        consistencyPenalty: Math.max(0, issuePenalty * 0.35),
        framingId: answer.impliedFramingId?.[issueId],
        impliedPosition,
        issueId,
        positionShift: clamp((impliedPosition - current.position) * commitmentStrength * reach * 0.15, -0.35, 0.35),
        salienceShift: clamp((answer.impliedIssueSalience?.[issueId] ?? (reach >= 0.55 ? 0.22 : 0.1)) * commitmentStrength, 0, 0.3),
        sourceInvitationId: context.invitation.id,
      });
    }
  }

  if (answer.answerType === 'pivot' || answer.tone === 'evasive') {
    performanceAdjustment -= 0.025 * (0.8 + context.outlet.scrutiny);
  }

  return {
    alignmentScore,
    effects,
    mismatchPenalty,
    performanceAdjustment,
  };
}

function answerPositionFit(answer: MediaMiniGameAnswer, topicId: ProgramIssueId, state: GameState) {
  const position = state.issueLayer.player.currentIssuePositions[topicId];
  if (!position) {
    return 0;
  }

  if (answer.tone === 'specific' || answer.tone === 'technical') {
    return Math.abs(position.position) >= 1 ? 0.012 : 0.004;
  }
  if (answer.tone === 'empathetic') {
    return position.salience >= 2 ? 0.01 : 0.003;
  }
  if (answer.tone === 'aggressive') {
    return position.rigidity > 0.55 ? 0.006 : -0.006;
  }
  return -0.008;
}

function issueName(state: GameState, issueId: ProgramIssueId) {
  return state.issueLayer.issues.find((issue) => issue.id === issueId)?.shortName ?? issueId;
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
  audienceShare: number,
  expectedReach: number,
) {
  const controversy = outlet.controversy ?? outlet.sensationalism;
  const speakerRisk = speakerRole === 'controversialFigure' ? 0.18 : speakerRole === 'leader' ? 0.06 : 0;
  const prepRelief = preparationLevel === 'strong' ? 0.55 : preparationLevel === 'basic' ? 0.8 : 1;
  const baseControversyPenalty =
    Math.max(0, controversy - 0.34) * Math.max(0.05, 0.62 - trust) * mediaFormatProfiles[format].riskMultiplier * prepRelief +
    speakerRisk * Math.max(0, 0.55 - trust);
  const publicSpillover = clamp(
    outlet.sensationalism * 0.12 + controversy * 0.1 + expectedReach * 0.08 + mediaFormatProfiles[format].riskMultiplier * 0.04,
    0.04,
    0.3,
  );
  return baseControversyPenalty * (0.45 + audienceShare * 0.55) + baseControversyPenalty * publicSpillover;
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

function programTopicFromLegacy(issueId: IssueId): ProgramIssueId {
  const map: Partial<Record<IssueId, ProgramIssueId>> = {
    climate: 'greenDeal',
    education: 'civilServiceReform',
    greenDeal: 'greenDeal',
    healthcare: 'pensions',
    housing: 'housing',
    industry: 'energyPrices',
    security: 'lawAndOrder',
    taxes: 'taxes',
    transport: 'housing',
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
