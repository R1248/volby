import { partyIds } from './seed';
import type { RegionId } from '../types/region';
import { aggregateRegionalWeightByGameRegion } from '../simulation/engine/regionalAggregation';
import type { VoterPoint } from '../simulation/model/types';
import { createIssueLayerState } from './issueSeed';
import {
  activateCampaignPackage as activateCampaignPackageInLayer,
  answerCampaignTrip as answerCampaignTripInLayer,
  answerDebateAttack as answerDebateAttackInLayer,
  answerProgramMediaQuestion as answerProgramMediaQuestionInLayer,
  applyIdeologicalInertia,
  deriveLatentFromIssues,
  issueLayerUtilityModifier,
  recalculateIssueLayer,
  updateIssuePosition as updateIssuePositionInLayer,
} from './issueEngine';
import type { PartyIssuePosition, ProgramIssueId } from './issueTypes';
import type {
  CampaignActionId,
  ElectionResult,
  EventCard,
  GameState,
  IssueId,
  LatentDimension8D,
  LatentVector8D,
  MarketingAdvisorId,
  MediaInvitation,
  PartyId,
  PlannedAction,
  PollResult,
  RegionSeed,
  ReputationVector,
  SegmentId,
  TurnBriefing,
  TurnResult,
  VoterSegment,
} from './types';

const baselineAbstain = 0.18;
const latentDimensions8D: LatentDimension8D[] = [
  'econ',
  'culture',
  'authority',
  'establishment',
  'globalism',
  'green',
  'ukraine',
  'green_deal',
];

export function initializeComputedState(state: GameState): GameState {
  const nextState = cloneState(state);
  ensureIssueLayer(nextState);
  nextState.issueLayer = recalculateIssueLayer(nextState.issueLayer, nextState.partyRuntime.player.field.flexibility);
  nextState.regionalSupport = computeRegionalSupport(nextState);
  nextState.nationalSupport = computeNationalSupport(nextState, nextState.regionalSupport);
  nextState.polls = computePolls(nextState, nextState.nationalSupport).partySupportEstimate ?? nextState.polls;
  nextState.publicRegionalPolls = computePublicRegionalPolls(nextState, nextState.publicPollsterId);
  return nextState;
}

export function generateWeeklyContext(state: GameState, rngSeed = state.rngSeed) {
  const nextState = cloneState(state);
  const generatedEvents = nextState.events.filter((event) => event.week === state.week);
  const generatedInvitations = nextState.mediaInvitations.filter((invitation) => invitation.week === state.week);
  const contextNotes = [
    ...generatedEvents.map((event) => `Událost týdne: ${event.title}`),
    ...generatedInvitations.map((invitation) => {
      const outlet = nextState.media.find((media) => media.id === invitation.outletId);
      return `Mediální pozvánka: ${outlet?.name ?? invitation.outletId} (${invitation.format})`;
    }),
  ];

  const scandalRoll = randomFromSeed(rngSeed + state.week * 17);
  if (scandalRoll < nextState.partyRuntime.player.scandalRisk * 0.08) {
    nextState.scandals.push({
      evidence: 0.45,
      id: `sponsor-risk-${state.week}`,
      legalExposure: 0.25,
      resolved: false,
      targetPartyId: 'player',
      title: 'Otázky kolem financování kampaně',
      traceability: 0.58,
      truthStatus: 'unknown',
      severity: 0.35,
      virality: 0.42,
    });
    contextNotes.push('Riziko týdne: novináři prověřují financování kampaně.');
  }

  return { contextNotes, events: generatedEvents, invitations: generatedInvitations, state: nextState };
}

export function resolveTurn(state: GameState, plannedActions: PlannedAction[], rngSeed = state.rngSeed): TurnResult {
  const beforeState = hasComputedSupport(state) ? cloneState(state) : initializeComputedState(state);
  const nextState = cloneState(beforeState);
  const context = generateWeeklyContext(nextState, rngSeed);
  const actionEffects: string[] = [];
  const mediaNotes: string[] = [];
  const opponentMoves: string[] = [];
  const riskNotes: string[] = [];

  nextState.events = context.state.events;
  nextState.mediaInvitations = context.state.mediaInvitations;
  nextState.scandals = context.state.scandals;

  resetLeaderWeek(nextState);
  applyMarketingAdvisorCost(nextState, riskNotes);
  applyMediaInvitations(nextState, mediaNotes, riskNotes);

  for (const plannedAction of plannedActions.slice(0, nextState.rules.maxActionsPerWeek)) {
    applyAction(nextState, plannedAction, actionEffects, riskNotes);
  }

  applyUnansweredQuestions(nextState, riskNotes);
  applyEvents(nextState, context.events, actionEffects, riskNotes);
  applyOpponentMoves(nextState, rngSeed, opponentMoves, riskNotes);
  applyScandals(nextState, riskNotes);

  nextState.week = Math.min(nextState.rules.finalWeek, beforeState.week + 1);
  nextState.rngSeed = nextSeed(rngSeed);
  nextState.regionalSupport = computeRegionalSupport(nextState);
  nextState.nationalSupport = computeNationalSupport(nextState, nextState.regionalSupport);
  nextState.polls = computePolls(nextState, nextState.nationalSupport).partySupportEstimate ?? nextState.polls;
  nextState.publicRegionalPolls = computePublicRegionalPolls(nextState, nextState.publicPollsterId);

  const briefing = createBriefing(beforeState, nextState, {
    actionEffects,
    contextNotes: context.contextNotes,
    mediaNotes,
    opponentMoves,
    riskNotes,
  });

  nextState.history = [briefing, ...nextState.history].slice(0, 10);

  return { briefing, state: nextState };
}

function hasComputedSupport(state: GameState) {
  const nationalSupportReady = partyIds.every((partyId) => Number.isFinite(state.nationalSupport?.[partyId]));
  const regionalSupportReady =
    state.regions.length > 0 &&
    state.regions.every((region) =>
      partyIds.every((partyId) => Number.isFinite(state.regionalSupport?.[region.id]?.[partyId])),
    );

  return nationalSupportReady && regionalSupportReady;
}

export function previewActionImpact(state: GameState, plannedAction: PlannedAction) {
  const action = state.actions.find((candidate) => candidate.id === plannedAction.actionId);
  const advisor = currentMarketingAdvisor(state);
  const delta = estimateActionPreviewDelta(state, plannedAction);
  const uncertainty = Math.max(
    0.002,
    0.011 - state.partyRuntime.player.informationQuality * 0.004 - advisor.predictionAccuracyBonus * 0.03,
  );
  const low = delta - uncertainty;
  const high = delta + uncertainty;

  return {
    delta,
    label:
      advisor.level >= 2
        ? `${action?.name ?? 'Akce'}: odhad ${formatSignedPoints(low)} až ${formatSignedPoints(high)} b.`
        : `${action?.name ?? 'Akce'}: hrubý odhad ${formatSignedPoints(delta)} b.`,
    risk: action?.risk ?? 'nízké',
  };
}

function estimateActionPreviewDelta(state: GameState, plannedAction: PlannedAction) {
  const action = state.actions.find((candidate) => candidate.id === plannedAction.actionId);
  if (!action) {
    return 0;
  }

  const baseByAction: Record<CampaignActionId, number> = {
    debate: 0.006,
    financeTransparency: 0.0015,
    focusGroup: 0.001,
    internalPoll: 0,
    leaderVisit: 0.0035,
    messageTest: 0.0015,
    negativeCampaign: 0.0025,
    onlineCampaign: 0.003,
    opaqueSupport: 0.005,
    parliamentSpeech: 0.003,
    policyPackage: 0.0035,
    regionalRally: 0.003,
    schoolVisit: 0.002,
    thirdPartySupport: 0.003,
    tvInterview: 0.004,
  };
  const advisor = currentMarketingAdvisor(state);
  const currentSupport = state.nationalSupport.player ?? 0.12;
  const saturation = clamp(1 - currentSupport * 0.6, 0.55, 1);
  const quality = 0.85 + state.partyRuntime.player.informationQuality * 0.15 + advisor.predictionAccuracyBonus * 0.4;
  const regionalScale = action.target === 'region' ? 0.42 : 1;
  const regionOrganization =
    plannedAction.targetRegionId && action.target === 'region'
      ? 0.9 + (state.partyRuntime.player.organization[plannedAction.targetRegionId] ?? 0.25) * 0.25
      : 1;
  const riskPenalty = action.risk === 'vyšší' ? 0.75 : action.risk === 'střední' ? 0.9 : 1;

  return (baseByAction[plannedAction.actionId] ?? 0.002) * saturation * quality * regionalScale * regionOrganization * riskPenalty;
}

export function computeRegionalSupport(state: GameState): GameState['regionalSupport'] {
  return computeRegionalSupportFromParticles(state, 'weekly');
}

function computeRegionalSupportFull(state: GameState): GameState['regionalSupport'] {
  return computeRegionalSupportFromParticles(state, 'full');
}

export function computeNationalSupport(
  state: GameState,
  regionalSupport: GameState['regionalSupport'] = state.regionalSupport,
): Record<PartyId, number> {
  const weighted = Object.fromEntries(partyIds.map((partyId) => [partyId, 0])) as Record<PartyId, number>;
  const regionalWeights = getRegionalVoterWeightByRegionId();
  const totalPopulation = state.regions.reduce((sum, region) => sum + (regionalWeights[region.id] ?? region.populationWeight), 0);

  for (const region of state.regions) {
    const support = regionalSupport[region.id];
    if (!support) {
      continue;
    }

    for (const partyId of partyIds) {
      weighted[partyId] += support[partyId] * (regionalWeights[region.id] ?? region.populationWeight);
    }
  }

  for (const partyId of partyIds) {
    weighted[partyId] = weighted[partyId] / totalPopulation;
  }

  return normalizePartyRecord(weighted);
}

export function computeElectionResult(state: GameState): ElectionResult {
  const regionalSupport = computeRegionalSupportFull(state);
  const computed = {
    ...state,
    regionalSupport,
    nationalSupport: computeNationalSupport(state, regionalSupport),
  };
  const seats = estimateSeats(computed.nationalSupport);
  const topSeatCount = Math.max(...partyIds.map((partyId) => seats[partyId]));

  return {
    nationalSupport: computed.nationalSupport,
    seats,
    winners: partyIds.filter((partyId) => seats[partyId] === topSeatCount),
  };
}

export function estimateSeats(nationalSupport: Record<PartyId, number>) {
  const eligible = partyIds.filter((partyId) => nationalSupport[partyId] >= 0.05);
  const quotients = eligible.flatMap((partyId) =>
    Array.from({ length: 200 }, (_, index) => ({
      partyId,
      value: nationalSupport[partyId] / (index + 1),
    })),
  );

  quotients.sort((a, b) => b.value - a.value);

  const seats = Object.fromEntries(partyIds.map((partyId) => [partyId, 0])) as Record<PartyId, number>;
  for (const quotient of quotients.slice(0, 200)) {
    seats[quotient.partyId] += 1;
  }

  return seats;
}

export function coalitionScore(state: GameState, coalition: PartyId[]) {
  const seats = estimateSeats(state.nationalSupport);
  const seatCount = coalition.reduce((sum, partyId) => sum + seats[partyId], 0);
  const pairScores: number[] = [];

  for (let i = 0; i < coalition.length; i += 1) {
    for (let j = i + 1; j < coalition.length; j += 1) {
      const relation = findRelation(state, coalition[i], coalition[j]);
      pairScores.push(relation?.totalCoalitionPotential ?? 0.35);
    }
  }

  const acceptability = pairScores.length > 0 ? average(pairScores) : 0.4;
  const toxicity = coalition.reduce((sum, partyId) => sum + state.partyRuntime[partyId].reputation.controversy, 0);

  return Math.round((seatCount - 100) * 1.6 + acceptability * 85 - toxicity * 18);
}

export function answerQuestion(state: GameState, questionId: string, optionId: string): GameState {
  const nextState = cloneState(state);
  const question = nextState.questions.find((item) => item.id === questionId);
  const option = question?.options.find((item) => item.id === optionId);

  if (!question || !option) {
    return state;
  }

  question.resolvedOptionId = optionId;
  shiftReputation(nextState.partyRuntime.player.reputation, option.reputationShift);
  nextState.partyRuntime.player.reputation.consistency = clamp(
    nextState.partyRuntime.player.reputation.consistency + option.consistencyValue * 0.03,
    0,
    1,
  );
  nextState.partyRuntime.player.reputation.controversy = clamp(
    nextState.partyRuntime.player.reputation.controversy + option.controversyRisk * 0.08,
    0,
    1,
  );

  const player = nextState.parties.find((party) => party.id === 'player');
  if (player && option.issueOwnershipShift) {
    for (const [issue, value] of Object.entries(option.issueOwnershipShift)) {
      player.issueOwnership[issue as keyof typeof player.issueOwnership] = clamp(
        (player.issueOwnership[issue as keyof typeof player.issueOwnership] ?? 0) + value,
        0,
        1,
      );
    }
  }

  return nextState;
}

export function acceptSponsor(state: GameState, sponsorId: string): GameState {
  const nextState = cloneState(state);
  const sponsor = nextState.sponsors.find((item) => item.id === sponsorId);
  const runtime = nextState.partyRuntime.player;

  if (!sponsor || sponsor.accepted) {
    return state;
  }

  sponsor.accepted = true;
  runtime.cash = round(runtime.cash + sponsor.amount);
  runtime.scandalRisk = clamp(runtime.scandalRisk + sponsor.scandalRisk * (1 - sponsor.traceability), 0, 1);
  runtime.reputation.integrity = clamp(runtime.reputation.integrity - sponsor.reputationRisk, 0, 1);
  runtime.reputation.controversy = clamp(runtime.reputation.controversy + sponsor.reputationRisk * 0.5, 0, 1);

  if (sponsor.legalStatus === 'gray') {
    runtime.thirdPartySpend = round(runtime.thirdPartySpend + Math.min(sponsor.amount, nextState.rules.thirdPartyCap));
  }

  if (sponsor.legalStatus === 'illegal') {
    runtime.graySpend = round(runtime.graySpend + sponsor.amount);
  }

  for (const [regionId, bonus] of Object.entries(sponsor.regionBonus ?? {})) {
    const regionKey = regionId as keyof typeof runtime.organization;
    runtime.organization[regionKey] = clamp((runtime.organization[regionKey] ?? 0.25) + bonus, 0, 1);
  }

  return initializeComputedState(nextState);
}

export function hireMarketingAdvisor(state: GameState, advisorId: MarketingAdvisorId): GameState {
  const nextState = cloneState(state);
  const advisor = nextState.marketingAdvisors.find((item) => item.id === advisorId);

  if (!advisor) {
    return state;
  }

  nextState.partyRuntime.player.marketingAdvisorId = advisor.id;
  nextState.partyRuntime.player.informationQuality = clamp(
    nextState.partyRuntime.player.informationQuality + advisor.predictionAccuracyBonus * 0.15,
    0,
    1,
  );

  if (advisor.reputationRisk) {
    nextState.partyRuntime.player.reputation.controversy = clamp(
      nextState.partyRuntime.player.reputation.controversy + advisor.reputationRisk,
      0,
      1,
    );
  }

  return initializeComputedState(nextState);
}

export function publishPublicPoll(state: GameState, pollsterId: string): GameState {
  const nextState = cloneState(state);
  const pollster = nextState.pollsters.find((item) => item.id === pollsterId);

  if (!pollster) {
    return state;
  }

  nextState.publicPollsterId = pollsterId;
  nextState.publicRegionalPolls = computePublicRegionalPolls(nextState, pollsterId);

  return nextState;
}

export function updateProgramIssue(
  state: GameState,
  issueId: ProgramIssueId,
  patch: Partial<Pick<PartyIssuePosition, 'framingId' | 'position' | 'rigidity' | 'salience'>>,
): GameState {
  const nextState = cloneState(state);
  ensureIssueLayer(nextState);
  const flexibility = nextState.partyRuntime.player.field.flexibility;
  nextState.issueLayer = updateIssuePositionInLayer(nextState.issueLayer, issueId, patch, flexibility);
  applyIssueLayerToPlayer(nextState);

  return initializeComputedState(nextState);
}

export function activateCampaignPackage(state: GameState, packageId: string): GameState {
  const nextState = cloneState(state);
  ensureIssueLayer(nextState);
  nextState.issueLayer = activateCampaignPackageInLayer(nextState.issueLayer, packageId, nextState.partyRuntime.player.field.flexibility);
  applyIssueLayerToPlayer(nextState);

  return initializeComputedState(nextState);
}

export function answerProgramMediaQuestion(state: GameState, questionId: string, answerId: string): GameState {
  const nextState = cloneState(state);
  ensureIssueLayer(nextState);
  nextState.issueLayer = answerProgramMediaQuestionInLayer(nextState.issueLayer, questionId, answerId, nextState.partyRuntime.player.field.flexibility);
  applyIssueLayerToPlayer(nextState);

  return initializeComputedState(nextState);
}

export function answerCampaignTrip(state: GameState, tripId: string, optionId: string): GameState {
  const nextState = cloneState(state);
  ensureIssueLayer(nextState);
  nextState.issueLayer = answerCampaignTripInLayer(nextState.issueLayer, tripId, optionId, nextState.partyRuntime.player.field.flexibility);
  applyIssueLayerToPlayer(nextState);

  return initializeComputedState(nextState);
}

export function answerDebateAttack(state: GameState, responseId: string): GameState {
  const nextState = cloneState(state);
  ensureIssueLayer(nextState);
  nextState.issueLayer = answerDebateAttackInLayer(nextState.issueLayer, responseId, nextState.partyRuntime.player.field.flexibility);
  applyIssueLayerToPlayer(nextState);

  return initializeComputedState(nextState);
}

export function respondToMediaInvitation(
  state: GameState,
  invitationId: string,
  response: MediaInvitation['response'],
): GameState {
  const nextState = cloneState(state);
  const invitation = nextState.mediaInvitations.find((item) => item.id === invitationId);
  const runtime = nextState.partyRuntime.player;

  if (!invitation || !response) {
    return state;
  }

  invitation.response = response;
  invitation.resolved = true;

  if (response === 'leader') {
    runtime.leader.timeUsed = clamp(runtime.leader.timeUsed + 0.45, 0, runtime.leader.timeCap + 1);
    runtime.leader.fatigue = clamp(runtime.leader.fatigue + invitation.risk * 0.25, 0, 1);
    runtime.field.amplitude = clamp(runtime.field.amplitude + 0.025, 0.35, 1.8);
  }

  if (response === 'delegate') {
    runtime.field.amplitude = clamp(runtime.field.amplitude + 0.01, 0.35, 1.8);
    runtime.reputation.competence = clamp(runtime.reputation.competence + 0.01, 0, 1);
  }

  if (response === 'decline' || response === 'ignore') {
    runtime.reputation.trust = clamp(runtime.reputation.trust - (response === 'ignore' ? 0.025 : 0.012), 0, 1);
  }

  return initializeComputedState(nextState);
}

export function computePolls(state: GameState, support: Record<PartyId, number>): PollResult {
  const advisor = currentMarketingAdvisor(state);
  const quality = clamp(state.partyRuntime.player.informationQuality + advisor.predictionAccuracyBonus, 0, 1);
  const pollster = state.pollsters[state.week % Math.max(1, state.pollsters.length)];
  const margin = Math.max(0.012, 0.065 - quality * 0.04 - (pollster?.quality ?? 0.5) * 0.015);
  const partySupportEstimate = Object.fromEntries(
    partyIds.map((partyId) => {
      const houseEffect = pollster?.houseEffect[partyId] ?? 0;
      const noise = (partyId.length % 3 - 1) * margin * 0.2;
      const value = clamp(support[partyId] + houseEffect + noise, 0, 1);
      return [partyId, { high: clamp(value + margin, 0, 1), low: clamp(value - margin, 0, 1), value }];
    }),
  ) as Record<PartyId, { high: number; low: number; value: number }>;

  return {
    issueInsights: {
      housing: 'Bydlení má nejvyšší salienci v Praze, Středočeském a Jihomoravském kraji.',
      healthcare: 'Zdravotnictví nejvíc hýbe staršími a regionálními segmenty.',
    },
    partySupportEstimate,
    recommendedActions:
      advisor.level >= 2
        ? [
            'Porovnat regionální zásahy podle segmentové hustoty a rizika kanibalizace.',
            'Před velkou mediální akcí spustit test sdělení nebo focus group.',
          ]
        : quality > 0.55
        ? ['Cílit regionální mítink na kraj s nízkou organizací.', 'Použít interní průzkum před riskantní mediální akcí.']
        : ['Zpřesnit data interním průzkumem.'],
    segmentInsights: {
      protestVoters: 'Vysoce volatilní segment reaguje na bezpečnost a průmyslová témata.',
      undecidedCenter: 'Nerozhodnutý střed citlivě reaguje na kompetenci a integritu.',
    },
  };
}

export function computePublicRegionalPolls(state: GameState, pollsterId?: string): GameState['publicRegionalPolls'] {
  const selectedPollster = pollsterId
    ? state.pollsters.find((pollster) => pollster.id === pollsterId)
    : state.pollsters[state.week % Math.max(1, state.pollsters.length)];
  const pollster = selectedPollster ?? state.pollsters[0];

  return Object.fromEntries(
    state.regions.map((region, regionIndex) => {
      const support = state.regionalSupport[region.id] ?? {};
      const regionalMargin = clamp(0.085 - (pollster?.quality ?? 0.55) * 0.035 + (1 - region.populationWeight) * 0.006, 0.025, 0.11);
      const estimates = Object.fromEntries(
        partyIds.map((partyId, partyIndex) => {
          const baseValue = support[partyId] ?? 0;
          const houseEffect = pollster?.houseEffect[partyId] ?? 0;
          const noise = (randomFromSeed(state.rngSeed + state.week * 101 + regionIndex * 17 + partyIndex * 7) - 0.5) * regionalMargin;
          const value = clamp(baseValue + houseEffect + noise, 0, 1);

          return [
            partyId,
            {
              high: clamp(value + regionalMargin, 0, 1),
              low: clamp(value - regionalMargin, 0, 1),
              value,
            },
          ];
        }),
      ) as Record<PartyId, { high: number; low: number; value: number }>;

      return [region.id, estimates] as const;
    }),
  ) as GameState['publicRegionalPolls'];
}

type SupportPrecision = 'full' | 'weekly';

let cachedFullRegionalVoterPoints: VoterPoint[] | undefined;
let cachedWeeklyRegionalVoterPoints: VoterPoint[] | undefined;
let cachedCompactFullRegionalVoterPoints: CompactRegionalVoterPoint[] | undefined;
let cachedCompactWeeklyRegionalVoterPoints: CompactRegionalVoterPoint[] | undefined;
let cachedRegionalWeights: Record<string, number> | undefined;

type CompactRegionalVoterPoint = {
  ageGroup?: string;
  education?: string;
  id: number;
  leftRight?: string;
  position: LatentVector8D;
  regionId: RegionId;
  segmentLabel?: string;
  turnoutBase: number;
  urbanity?: string;
  volatility: number;
  weight: number;
};

type PartyUtilityContext = {
  party: GameState['parties'][number];
  partyId: PartyId;
  runtime: GameState['partyRuntime'][PartyId];
};

function getRegionalVoterPoints(precision: SupportPrecision = 'weekly') {
  if (precision === 'full') {
    if (!cachedFullRegionalVoterPoints) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { loadRegionalizedVoterFieldV03 } = require('../simulation/model/voterFieldLoader') as typeof import('../simulation/model/voterFieldLoader');
      cachedFullRegionalVoterPoints = loadRegionalizedVoterFieldV03().points;
    }
    return cachedFullRegionalVoterPoints;
  }

  if (!cachedWeeklyRegionalVoterPoints) {
    // Keep the large regionalized voter JSON out of lightweight screens such as Campaign until support is resolved.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { loadClusteredRegionalizedVoterFieldV03 } = require('../simulation/model/voterFieldLoader') as typeof import('../simulation/model/voterFieldLoader');
    cachedWeeklyRegionalVoterPoints = loadClusteredRegionalizedVoterFieldV03().points;
  }
  return cachedWeeklyRegionalVoterPoints;
}

function getRegionalVoterWeightByRegionId() {
  if (!cachedRegionalWeights) {
    cachedRegionalWeights = aggregateRegionalWeightByGameRegion(getRegionalVoterPoints('weekly'));
  }
  return cachedRegionalWeights;
}

function getCompactRegionalVoterPoints(precision: SupportPrecision) {
  const cached = precision === 'full' ? cachedCompactFullRegionalVoterPoints : cachedCompactWeeklyRegionalVoterPoints;
  if (!cached) {
    const compactPoints = getRegionalVoterPoints(precision).reduce<CompactRegionalVoterPoint[]>((points, point) => {
      const regionId = regionIdFromKraj(point.geography?.krajId);
      if (!regionId) {
        return points;
      }

      points.push({
        ageGroup: point.ageGroup,
        education: point.education,
        id: point.id,
        leftRight: point.leftRight,
        position: point.position,
        regionId,
        segmentLabel: point.segmentLabel,
        turnoutBase: point.turnoutBase ?? 0.65,
        urbanity: point.urbanity,
        volatility: point.volatility ?? 0.5,
        weight: point.weight,
      });

      return points;
    }, []);

    if (precision === 'full') {
      cachedCompactFullRegionalVoterPoints = compactPoints;
    } else {
      cachedCompactWeeklyRegionalVoterPoints = compactPoints;
    }
  }

  return precision === 'full' ? cachedCompactFullRegionalVoterPoints! : cachedCompactWeeklyRegionalVoterPoints!;
}

function computeRegionalSupportFromParticles(state: GameState, precision: SupportPrecision): GameState['regionalSupport'] {
  const compactPoints = getCompactRegionalVoterPoints(precision);
  const regionsById = Object.fromEntries(state.regions.map((region) => [region.id, region])) as Record<RegionId, RegionSeed>;
  const partyContexts = partyIds
    .map((partyId) => {
      const party = state.parties.find((item) => item.id === partyId);
      const runtime = state.partyRuntime[partyId];
      if (!party || !runtime) {
        return undefined;
      }
      ensurePartyField8D(runtime.field, party);
      return { party, partyId, runtime } satisfies PartyUtilityContext;
    })
    .filter((context): context is PartyUtilityContext => Boolean(context));
  const totals = Object.fromEntries(
    state.regions.map((region) => [region.id, Object.fromEntries(partyIds.map((partyId) => [partyId, 0])) as Record<PartyId, number>]),
  ) as Record<RegionId, Record<PartyId, number>>;
  const utilities = new Array<number>(partyContexts.length);

  for (const point of compactPoints) {
    const region = regionsById[point.regionId];
    if (!region) {
      continue;
    }

    let total = baselineAbstain;
    for (let index = 0; index < partyContexts.length; index += 1) {
      const context = partyContexts[index];
      const utility = computeParticleUtilityForContext(state, context, region, point);
      utilities[index] = utility;
      total += utility;
    }

    const turnout = clamp(point.turnoutBase + region.turnoutModifier, 0.22, 0.92);
    const voterTurnoutWeight = point.weight * turnout;

    for (let index = 0; index < partyContexts.length; index += 1) {
      totals[region.id][partyContexts[index].partyId] += voterTurnoutWeight * (utilities[index] / total);
    }
  }

  return Object.fromEntries(
    state.regions.map((region) => [region.id, normalizePartyRecord(totals[region.id])]),
  ) as GameState['regionalSupport'];
}

function computeParticleUtilityForContext(
  state: GameState,
  context: PartyUtilityContext,
  region: RegionSeed,
  point: CompactRegionalVoterPoint,
) {
  const { partyId, runtime } = context;
  const kernel = Math.exp(-0.5 * ideologicalDistance8D(point.position, runtime.field));
  const reputation = runtime.reputation;
  const scandalSensitivity = 0.45 + point.volatility * 0.25;
  const reputationFit =
    0.18 * reputation.trust +
    0.12 * reputation.competence +
    0.12 * reputation.authenticity +
    0.1 * reputation.integrity +
    0.08 * reputation.consistency -
    scandalSensitivity * reputation.controversy * 0.16;
  const organization = runtime.organization[region.id] ?? 0.25;
  const fatiguePenalty = partyId === 'player' ? runtime.leader.fatigue * 0.08 : 0;
  const programModifier = issueLayerUtilityModifier(state.issueLayer, compactPointToSegment(point), partyId === 'player');
  const scandalPenalty = state.scandals
    .filter((scandal) => scandal.targetPartyId === partyId && !scandal.resolved)
    .reduce((sum, scandal) => sum + scandal.severity * scandal.virality * scandalSensitivity * 0.18, 0);
  const logUtility =
    Math.log(Math.max(0.04, runtime.field.amplitude)) +
    Math.log(Math.max(0.001, kernel)) +
    reputationFit +
    organization * 0.42 -
    programModifier -
    fatiguePenalty -
    scandalPenalty;

  return Math.max(0.001, Math.exp(logUtility));
}

function compactPointToSegment(point: CompactRegionalVoterPoint): VoterSegment {
  return {
    age4: point.ageGroup,
    axisSalience: { authority: 1, culture: 1, econ: 1 },
    education: point.education === 'lower' || point.education === 'tertiary' ? point.education : 'secondary',
    id: `particle-${point.id}`,
    issuePrefs: {},
    issueSalience: {},
    leftRightSelfPlacement: point.leftRight,
    mediaHabits: {},
    name: `Particle ${point.id}`,
    nmsBlock: point.segmentLabel,
    position: {
      authority: point.position.authority,
      culture: point.position.culture,
      econ: point.position.econ,
    },
    scandalSensitivity: 0.45 + (point.volatility ?? 0.5) * 0.25,
    source: 'regionalized weighted voter particle',
    space: {
      authority: point.position.authority,
      culture: point.position.culture,
      econ: point.position.econ,
      establishment: point.position.establishment,
      globalism: point.position.globalism,
      green: point.position.green,
      greenDeal: point.position.green_deal,
      ukraine: point.position.ukraine,
    },
    turnoutBase: point.turnoutBase,
    urbanity3: point.urbanity,
    volatility: point.volatility,
  };
}

function regionIdFromKraj(krajId?: string): RegionId | undefined {
  const map: Record<string, RegionId> = {
    CZ010: 'praha',
    CZ020: 'stredocesky',
    CZ031: 'jihocesky',
    CZ032: 'plzensky',
    CZ041: 'karlovarsky',
    CZ042: 'ustecky',
    CZ051: 'liberecky',
    CZ052: 'kralovehradecky',
    CZ053: 'pardubicky',
    CZ063: 'vysocina',
    CZ064: 'jihomoravsky',
    CZ071: 'olomoucky',
    CZ072: 'zlinsky',
    CZ080: 'moravskoslezsky',
  };
  return krajId ? map[krajId] : undefined;
}

function ensureIssueLayer(state: GameState) {
  if (!state.issueLayer) {
    state.issueLayer = createIssueLayerState();
  }
}

function applyIssueLayerToPlayer(state: GameState) {
  const runtime = state.partyRuntime.player;
  const player = state.parties.find((party) => party.id === 'player');
  if (player) {
    ensurePartyField8D(runtime.field, player);
  }

  const derived = deriveLatentFromIssues(
    state.issueLayer.player.currentIssuePositions,
    state.issueLayer.issues,
    state.issueLayer.framings,
  );
  const nextLatent = applyIdeologicalInertia(runtime.field.center8D ?? legacyFieldCenter8D(runtime.field), derived, runtime.field.flexibility);

  runtime.field.center8D = completeLatentVector(nextLatent);
  runtime.field.center = {
    authority: runtime.field.center8D.authority,
    culture: runtime.field.center8D.culture,
    econ: runtime.field.center8D.econ,
  };
  runtime.field.latentCenter = runtime.field.center8D;
  runtime.reputation.consistency = clamp(
    runtime.reputation.consistency + (state.issueLayer.player.coherenceBreakdown.coherenceScore - 62) / 5000,
    0,
    1,
  );
}

function applyAction(state: GameState, plannedAction: PlannedAction, actionEffects: string[], riskNotes: string[]) {
  const action = state.actions.find((item) => item.id === plannedAction.actionId);
  const runtime = state.partyRuntime.player;

  if (!action) {
    return;
  }

  if (runtime.cash < action.cost || runtime.legalSpend + action.cost > state.rules.legalSpendCap) {
    riskNotes.push(`${action.name} nebyla provedena: rozpočet nebo legal spend limit nestačí.`);
    return;
  }

  if (runtime.leader.timeUsed + action.leaderTimeCost > runtime.leader.timeCap) {
    riskNotes.push(`${action.name} přetížila předsedkyni a zvýšila riziko slabého výkonu.`);
    runtime.leader.fatigue = clamp(runtime.leader.fatigue + 0.08, 0, 1);
  }

  runtime.cash = round(runtime.cash - action.cost);
  runtime.legalSpend = round(runtime.legalSpend + action.cost);
  runtime.leader.timeUsed = clamp(runtime.leader.timeUsed + action.leaderTimeCost, 0, runtime.leader.timeCap + 1);

  switch (plannedAction.actionId) {
    case 'regionalRally':
      increaseRegionOrganization(state, plannedAction.targetRegionId, 0.1);
      runtime.field.width.culture = clamp(runtime.field.width.culture + 0.015, 0.25, 1.4);
      widenField8D(runtime.field, 'culture', 0.015);
      runtime.reputation.authenticity = clamp(runtime.reputation.authenticity + 0.025, 0, 1);
      actionEffects.push('Regionální mítink posílil lokální organizaci a autenticitu kampaně.');
      break;
    case 'leaderVisit':
      increaseRegionOrganization(state, plannedAction.targetRegionId, 0.08);
      runtime.leader.fatigue = clamp(runtime.leader.fatigue + 0.16, 0, 1);
      runtime.reputation.trust = clamp(runtime.reputation.trust + 0.025, 0, 1);
      actionEffects.push('Výjezd předsedy zvedl důvěru v cílovém regionu, ale přidal únavu lídra.');
      break;
    case 'onlineCampaign':
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.035, 0.4, 1.8);
      runtime.reputation.controversy = clamp(runtime.reputation.controversy + 0.01, 0, 1);
      increaseRegionOrganization(state, plannedAction.targetRegionId, 0.035);
      actionEffects.push('Online kampaň zvýšila dosah u volatilních segmentů.');
      break;
    case 'policyPackage':
      runtime.reputation.competence = clamp(runtime.reputation.competence + 0.035, 0, 1);
      runtime.reputation.consistency = clamp(runtime.reputation.consistency + 0.018, 0, 1);
      runtime.field.width.econ = clamp(runtime.field.width.econ + 0.02, 0.25, 1.4);
      widenField8D(runtime.field, 'econ', 0.02);
      adjustPlayerIssueOwnership(state, plannedAction.targetIssueId ?? 'housing', 0.04);
      actionEffects.push('Programový balíček posílil kompetenci a issue ownership.');
      break;
    case 'internalPoll':
      runtime.informationQuality = clamp(runtime.informationQuality + 0.16, 0, 1);
      actionEffects.push('Interní průzkum zpřesnil odhady, ale nepřidal podporu přímo.');
      break;
    case 'focusGroup':
      runtime.informationQuality = clamp(runtime.informationQuality + 0.1, 0, 1);
      runtime.reputation.consistency = clamp(runtime.reputation.consistency + 0.01, 0, 1);
      actionEffects.push('Focus group odhalila bariéry a jazyk cílových voličů bez přímého nárůstu podpory.');
      break;
    case 'messageTest':
      runtime.informationQuality = clamp(runtime.informationQuality + currentMarketingAdvisor(state).messageTestingBonus + 0.11, 0, 1);
      runtime.reputation.controversy = clamp(runtime.reputation.controversy - 0.01, 0, 1);
      actionEffects.push('Test sdělení zpřesnil predikci dopadů kampaně a snížil riziko špatného rámování.');
      break;
    case 'tvInterview':
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.025, 0.4, 1.8);
      runtime.reputation.competence = clamp(runtime.reputation.competence + 0.015, 0, 1);
      runtime.leader.fatigue = clamp(runtime.leader.fatigue + 0.08, 0, 1);
      actionEffects.push('TV rozhovor zvýšil celostátní viditelnost.');
      break;
    case 'debate':
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.045, 0.4, 1.8);
      runtime.reputation.competence = clamp(runtime.reputation.competence + 0.02 - runtime.leader.fatigue * 0.02, 0, 1);
      runtime.leader.fatigue = clamp(runtime.leader.fatigue + 0.12, 0, 1);
      actionEffects.push('Debata přinesla vysokou viditelnost a zvýšila tlak na lídra.');
      break;
    case 'schoolVisit':
      runtime.field.width.authority = clamp(runtime.field.width.authority + 0.02, 0.25, 1.4);
      widenField8D(runtime.field, 'authority', 0.02);
      runtime.reputation.authenticity = clamp(runtime.reputation.authenticity + 0.02, 0, 1);
      actionEffects.push('Návštěva školy rozšířila zásah mezi mladší a vzdělanější segmenty.');
      break;
    case 'parliamentSpeech':
      runtime.reputation.competence = clamp(runtime.reputation.competence + 0.03, 0, 1);
      runtime.reputation.trust = clamp(runtime.reputation.trust + 0.015, 0, 1);
      actionEffects.push('Sněmovní projev posílil institucionální respekt a kompetenci.');
      break;
    case 'financeTransparency':
      runtime.reputation.integrity = clamp(runtime.reputation.integrity + 0.07, 0, 1);
      runtime.reputation.controversy = clamp(runtime.reputation.controversy - 0.035, 0, 1);
      runtime.scandalRisk = clamp(runtime.scandalRisk - 0.08, 0, 1);
      actionEffects.push('Transparentnost financí snížila reputační a sponzorské riziko.');
      break;
    case 'negativeCampaign':
      runtime.reputation.controversy = clamp(runtime.reputation.controversy + 0.06, 0, 1);
      runtime.reputation.authenticity = clamp(runtime.reputation.authenticity - 0.02, 0, 1);
      state.partyRuntime.civicFront.reputation.trust = clamp(state.partyRuntime.civicFront.reputation.trust - 0.035, 0, 1);
      increaseRecentConflict(state, 'player', 'civicFront', 0.12);
      actionEffects.push('Negativní kampaň oslabila hlavního soupeře, ale zhoršila tón kampaně.');
      break;
    case 'thirdPartySupport':
      if (runtime.thirdPartySpend + 0.6 > state.rules.thirdPartyCap) {
        riskNotes.push('Třetí osoba narazila na limit podpůrné kampaně.');
        return;
      }
      runtime.thirdPartySpend = round(runtime.thirdPartySpend + 0.6);
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.025, 0.4, 1.8);
      runtime.reputation.controversy = clamp(runtime.reputation.controversy + 0.02, 0, 1);
      actionEffects.push('Registrovaná třetí osoba zesílila sdělení, ale snížila kontrolu nad kampaní.');
      break;
    case 'opaqueSupport':
      runtime.graySpend = round(runtime.graySpend + 1.4);
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.05, 0.4, 1.8);
      runtime.reputation.integrity = clamp(runtime.reputation.integrity - 0.09, 0, 1);
      runtime.scandalRisk = clamp(runtime.scandalRisk + 0.18, 0, 1);
      actionEffects.push('Neprůhledná podpora krátkodobě zesílila kampaň, ale výrazně zvýšila právní riziko.');
      break;
  }

  applyCampaignActionToIssueLayer(state, plannedAction, action, actionEffects);
}

function applyCampaignActionToIssueLayer(
  state: GameState,
  plannedAction: PlannedAction,
  action: GameState['actions'][number],
  actionEffects: string[],
) {
  ensureIssueLayer(state);

  const runtime = state.partyRuntime.player;
  let nextLayer = state.issueLayer;
  let mediaShift = 0;
  let legibilityShift = 0;
  let coreShift = 0;
  let swingShift = 0;
  let feedbackTitle = action.name;
  let feedbackMessage = 'Kampanovy tah se propsal do programove vrstvy a pres ni do 8D prostoru volicu.';

  if (plannedAction.actionId === 'internalPoll') {
    return;
  }

  switch (plannedAction.actionId) {
    case 'regionalRally':
    case 'leaderVisit': {
      const trip = selectTripForCampaign(state, plannedAction.targetRegionId);
      nextLayer = {
        ...nextLayer,
        pendingCampaignTripId: trip?.id ?? nextLayer.pendingCampaignTripId,
      };
      for (const issueId of trip?.issueIds.slice(0, 2) ?? ['housing', 'energyPrices']) {
        nextLayer = patchIssueInLayer(nextLayer, issueId, { salienceDelta: 1 });
      }
      coreShift += 0.02;
      feedbackMessage = 'Vyjezd zvedl lokalni tlak na konkretni temata. Stab je musi udrzet citelna i celostatne.';
      break;
    }
    case 'onlineCampaign':
      for (const issueId of topSalienceIssues(nextLayer, 2)) {
        nextLayer = patchIssueInLayer(nextLayer, issueId, { salienceDelta: 1 });
      }
      mediaShift += nextLayer.player.coherenceBreakdown.coherenceScore < 55 ? 0.04 : 0.015;
      coreShift += 0.02;
      feedbackMessage = 'Online kampan zesilila nejviditelnejsi temata; necitelny program pritom rychleji generuje medialni riziko.';
      break;
    case 'policyPackage': {
      const packageId = packageForLegacyIssue(plannedAction.targetIssueId);
      nextLayer = activateCampaignPackageInLayer(nextLayer, packageId, runtime.field.flexibility);
      feedbackTitle = nextLayer.campaignPackages.find((pack) => pack.id === packageId)?.name ?? action.name;
      feedbackMessage = 'Programovy balicek zvedl salienci souvisejicich temat a snizuje agenda chaos, pokud je balicek vnitrne citelny.';
      break;
    }
    case 'focusGroup':
      nextLayer = improveFramingForTopIssue(nextLayer);
      legibilityShift += 0.04;
      mediaShift -= 0.025;
      feedbackMessage = 'Focus group zlepsila jazyk hlavniho tematu a snizila riziko spatneho ramovani.';
      break;
    case 'messageTest':
      nextLayer = improveFramingForTopIssue(nextLayer);
      legibilityShift += 0.05;
      mediaShift -= 0.035;
      swingShift += 0.015;
      feedbackMessage = 'Test sdeleni zlepsil citelnost a mirne zvysil presvedcovaci efekt u mene pevnych volicu.';
      break;
    case 'tvInterview':
      nextLayer = {
        ...nextLayer,
        pendingMediaQuestionId: nextPendingItemId(nextLayer.mediaQuestions, nextLayer.pendingMediaQuestionId),
      };
      mediaShift += 0.025;
      legibilityShift += 0.015;
      feedbackMessage = 'Televizni vystup zvysil dosah programu, ale take pravdepodobnost tlaku na slaba mista.';
      break;
    case 'debate':
      mediaShift += 0.035;
      coreShift += nextLayer.player.coherenceBreakdown.coherenceScore > 65 ? 0.025 : 0;
      feedbackMessage = 'Debata vytahla nejviditelnejsi rozpory. Koherentni program pomaha, necitelny dava souperum utocnou plochu.';
      break;
    case 'schoolVisit':
      nextLayer = patchIssueInLayer(nextLayer, 'sameSexMarriage', { salienceDelta: 1, framingId: 'noCultureWar' });
      nextLayer = patchIssueInLayer(nextLayer, 'cannabis', { salienceDelta: 1 });
      swingShift += 0.015;
      feedbackMessage = 'Skolni navsteva zvedla kulturne liberalni temata a jejich dopad na mladsi segmenty.';
      break;
    case 'parliamentSpeech':
      nextLayer = patchIssueInLayer(nextLayer, 'antiCorruption', { salienceDelta: 1, framingId: 'cleanState' });
      nextLayer = patchIssueInLayer(nextLayer, 'civilServiceReform', { salienceDelta: 1 });
      legibilityShift += 0.025;
      feedbackMessage = 'Snemovni projev posilil institucionalni a kompetencni linku programu.';
      break;
    case 'negativeCampaign':
      mediaShift += 0.06;
      legibilityShift -= 0.02;
      swingShift -= 0.02;
      feedbackMessage = 'Negativni kampan meni pozornost k souperum, ale zhorsuje citelnost vlastniho programu.';
      break;
    case 'thirdPartySupport':
    case 'opaqueSupport':
      mediaShift += plannedAction.actionId === 'opaqueSupport' ? 0.07 : 0.03;
      coreShift += 0.015;
      feedbackMessage = 'Externi zesileni zvysilo dosah sdeleni, ale snizilo kontrolu nad tim, jak bude program cten.';
      break;
  }

  nextLayer = recalculateIssueLayer(nextLayer, runtime.field.flexibility);
  nextLayer = {
    ...nextLayer,
    feedbackLog: [
      {
        id: `campaign-${state.week}-${plannedAction.id}`,
        message: feedbackMessage,
        metrics: {
          coherence: nextLayer.player.coherenceBreakdown.coherenceScore,
          core: nextLayer.player.coreLoyalty,
          legibility: nextLayer.player.programLegibility,
          media: nextLayer.player.mediaVulnerability,
          swing: nextLayer.player.swingAppeal,
        },
        title: feedbackTitle,
        week: state.week,
      },
      ...nextLayer.feedbackLog,
    ].slice(0, 8),
    player: {
      ...nextLayer.player,
      coreLoyalty: clamp(nextLayer.player.coreLoyalty + coreShift, 0, 1),
      mediaVulnerability: clamp(nextLayer.player.mediaVulnerability + mediaShift, 0, 1),
      programLegibility: clamp(nextLayer.player.programLegibility + legibilityShift, 0, 1),
      swingAppeal: clamp(nextLayer.player.swingAppeal + swingShift, 0, 1),
    },
  };

  state.issueLayer = nextLayer;
  applyIssueLayerToPlayer(state);
  pushUnique(actionEffects, 'Programova vrstva upravila 8D fit strany vuci volicskemu prostoru.');
}

function patchIssueInLayer(
  layer: GameState['issueLayer'],
  issueId: ProgramIssueId,
  patch: { framingId?: string; positionDelta?: number; salienceDelta?: number },
): GameState['issueLayer'] {
  const current = layer.player.currentIssuePositions[issueId];
  if (!current) {
    return layer;
  }

  return {
    ...layer,
    player: {
      ...layer.player,
      currentIssuePositions: {
        ...layer.player.currentIssuePositions,
        [issueId]: {
          ...current,
          framingId: patch.framingId ?? current.framingId,
          position: clamp(current.position + (patch.positionDelta ?? 0), -2, 2),
          salience: Math.round(clamp(current.salience + (patch.salienceDelta ?? 0), 0, 4)),
        },
      },
    },
  };
}

function topSalienceIssues(layer: GameState['issueLayer'], count: number) {
  return Object.values(layer.player.currentIssuePositions)
    .sort((a, b) => b.salience - a.salience || b.rigidity - a.rigidity)
    .slice(0, count)
    .map((position) => position.issueId);
}

function improveFramingForTopIssue(layer: GameState['issueLayer']) {
  const issueId = topSalienceIssues(layer, 1)[0];
  const framing = layer.framings.find((candidate) => candidate.issueId === issueId);

  return framing ? patchIssueInLayer(layer, issueId, { framingId: framing.id }) : layer;
}

function packageForLegacyIssue(issueId?: IssueId) {
  switch (issueId) {
    case 'climate':
    case 'industry':
    case 'transport':
      return 'secureAffordableEnergy';
    case 'education':
      return 'modernLiberalState';
    case 'healthcare':
    case 'housing':
      return 'fairLivingStandards';
    case 'security':
      return 'sovereignSafeCountry';
    case 'taxes':
      return 'freedomWithoutBureaucracy';
    default:
      return 'fairLivingStandards';
  }
}

function selectTripForCampaign(state: GameState, regionId?: RegionId) {
  const layer = state.issueLayer;
  if (regionId === 'moravskoslezsky' || regionId === 'ustecky') {
    return layer.tripEvents.find((trip) => trip.id === 'trip-energy-workers');
  }
  if (regionId === 'praha' || regionId === 'jihomoravsky') {
    return layer.tripEvents.find((trip) => trip.id === 'trip-housing-city');
  }
  if (regionId === 'karlovarsky' || regionId === 'plzensky') {
    return layer.tripEvents.find((trip) => trip.id === 'trip-border-security');
  }

  return layer.tripEvents.find((trip) => trip.id === layer.pendingCampaignTripId) ?? layer.tripEvents[0];
}

function nextPendingItemId<T extends { id: string }>(items: readonly T[], currentId?: string) {
  if (items.length === 0) {
    return undefined;
  }

  const currentIndex = currentId ? items.findIndex((item) => item.id === currentId) : -1;
  return items[(currentIndex + 1 + items.length) % items.length]?.id;
}

function applyMediaInvitations(state: GameState, mediaNotes: string[], riskNotes: string[]) {
  for (const invitation of state.mediaInvitations.filter((item) => item.week === state.week && !item.resolved)) {
    const outlet = state.media.find((media) => media.id === invitation.outletId);
    mediaNotes.push(`${outlet?.name ?? invitation.outletId} čeká na odpověď (${invitation.format}).`);
    if (invitation.risk > 0.4) {
      riskNotes.push('Nezodpovězená mediální pozvánka může poškodit otevřenost kampaně.');
    }
  }
}

function applyUnansweredQuestions(state: GameState, riskNotes: string[]) {
  const pending = state.questions.filter((question) => !question.resolvedOptionId && question.trigger !== 'school');
  if (pending.length > 0 && state.week > 4) {
    state.partyRuntime.player.reputation.competence = clamp(state.partyRuntime.player.reputation.competence - 0.01, 0, 1);
    riskNotes.push('Nezodpovězené Q&A téma mírně snížilo dojem kompetence.');
  }
}

function applyEvents(state: GameState, events: EventCard[], actionEffects: string[], riskNotes: string[]) {
  for (const event of events) {
    for (const [issueId, shift] of Object.entries(event.issueAgendaShift)) {
      for (const region of state.regions) {
        if (event.scope === 'region' && event.regionId !== region.id) {
          continue;
        }
        const issue = issueId as keyof typeof region.issueAgendaBase;
        region.issueAgendaBase[issue] = clamp((region.issueAgendaBase[issue] ?? 0.35) + shift * 0.15, 0, 1);
      }
    }

    if (event.opportunityFor?.includes('player')) {
      state.partyRuntime.player.reputation.competence = clamp(state.partyRuntime.player.reputation.competence + event.severity * 0.015, 0, 1);
      actionEffects.push(`Téma týdne hrálo do karet kampani: ${event.title}.`);
    }

    if (event.threatTo?.includes('player')) {
      state.partyRuntime.player.reputation.trust = clamp(state.partyRuntime.player.reputation.trust - event.severity * 0.012, 0, 1);
      riskNotes.push(`Téma týdne zatížilo kampaň: ${event.title}.`);
    }
  }
}

type OpponentMoveKind = 'attackPlayer' | 'fundraising' | 'leaderTour' | 'mediaAppearance' | 'policyPush' | 'regionalGroundGame';

function applyOpponentMoves(state: GameState, rngSeed: number, opponentMoves: string[], riskNotes: string[]) {
  const opponents = partyIds.filter((partyId) => partyId !== 'player');
  for (const partyId of opponents) {
    const roll = randomFromSeed(rngSeed + state.week * 31 + partyId.length);
    const region = selectOpponentTargetRegion(state, partyId, rngSeed);
    const move = chooseOpponentMove(state, partyId, region.id, roll);

    applyOpponentMove(state, partyId, move, region, rngSeed, opponentMoves, riskNotes);
  }
}

function applyOpponentMove(
  state: GameState,
  partyId: PartyId,
  move: OpponentMoveKind,
  region: RegionSeed,
  rngSeed: number,
  opponentMoves: string[],
  riskNotes: string[],
) {
  const runtime = state.partyRuntime[partyId];
  const party = state.parties.find((item) => item.id === partyId);
  const partyLabel = labelParty(state, partyId);

  if (!runtime || !party) {
    return;
  }

  if (move !== 'fundraising' && !spendOpponentBudget(state, partyId, opponentMoveCost(move))) {
    applyOpponentMove(state, partyId, 'fundraising', region, rngSeed, opponentMoves, riskNotes);
    return;
  }

  switch (move) {
    case 'regionalGroundGame':
      runtime.organization[region.id] = clamp((runtime.organization[region.id] ?? 0.22) + 0.045, 0, 1);
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.004, 0.35, 1.8);
      opponentMoves.push(`${partyLabel} posílila terén v kraji ${region.name}.`);
      break;
    case 'leaderTour':
      runtime.organization[region.id] = clamp((runtime.organization[region.id] ?? 0.22) + 0.03, 0, 1);
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.012, 0.35, 1.8);
      runtime.reputation.authenticity = clamp(runtime.reputation.authenticity + 0.014, 0, 1);
      runtime.leader.fatigue = clamp(runtime.leader.fatigue + 0.08, 0, 1);
      opponentMoves.push(`${partyLabel} vyslala lídra do kraje ${region.name}.`);
      break;
    case 'mediaAppearance':
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.024, 0.35, 1.8);
      runtime.reputation.competence = clamp(runtime.reputation.competence + 0.012, 0, 1);
      runtime.reputation.trust = clamp(runtime.reputation.trust + 0.006, 0, 1);
      opponentMoves.push(`${partyLabel} získala výrazný mediální výstup a posílila celostátní viditelnost.`);
      break;
    case 'policyPush': {
      const issue = selectOpponentIssue(party, rngSeed + state.week * 43 + partyId.length);
      party.issueOwnership[issue] = clamp((party.issueOwnership[issue] ?? 0.15) + 0.045, 0, 1);
      widenFieldForIssue(runtime.field, issue, 0.012);
      runtime.reputation.competence = clamp(runtime.reputation.competence + 0.014, 0, 1);
      opponentMoves.push(`${partyLabel} otevřela téma ${issueLabel(issue)} a posílila issue ownership.`);
      break;
    }
    case 'attackPlayer':
      runtime.field.amplitude = clamp(runtime.field.amplitude + 0.01, 0.35, 1.8);
      runtime.reputation.controversy = clamp(runtime.reputation.controversy + 0.025, 0, 1);
      state.partyRuntime.player.reputation.trust = clamp(state.partyRuntime.player.reputation.trust - 0.018, 0, 1);
      state.partyRuntime.player.reputation.controversy = clamp(state.partyRuntime.player.reputation.controversy + 0.012, 0, 1);
      increaseRecentConflict(state, partyId, 'player', 0.08);
      opponentMoves.push(`${partyLabel} zaútočila na naši kampaň a zvedla tlak na důvěryhodnost.`);
      riskNotes.push(`Soupeřův útok od ${partyLabel} může zhoršit mediální rámec dalšího týdne.`);
      break;
    case 'fundraising':
      runtime.cash = round(runtime.cash + 1.05);
      runtime.reputation.integrity = clamp(runtime.reputation.integrity - 0.004, 0, 1);
      runtime.scandalRisk = clamp(runtime.scandalRisk + 0.006, 0, 1);
      opponentMoves.push(`${partyLabel} doplnila kampaňový rozpočet a připravuje další aktivitu.`);
      break;
  }
}

function chooseOpponentMove(state: GameState, partyId: PartyId, regionId: RegionSeed['id'], roll: number): OpponentMoveKind {
  const runtime = state.partyRuntime[partyId];
  const party = state.parties.find((item) => item.id === partyId);
  const playerSupport = state.regionalSupport[regionId]?.player ?? 0;
  const opponentSupport = state.regionalSupport[regionId]?.[partyId] ?? 0;

  if (!runtime || !party || runtime.cash < 0.6) {
    return 'fundraising';
  }

  if (playerSupport > opponentSupport + 0.035 && roll < 0.18) {
    return 'attackPlayer';
  }

  if (party.officeRole === 'government' && roll < 0.34) {
    return 'mediaAppearance';
  }

  if (party.winProfile === 'small' && roll < 0.38) {
    return 'policyPush';
  }

  if (roll < 0.34) {
    return 'regionalGroundGame';
  }

  if (roll < 0.55) {
    return 'mediaAppearance';
  }

  if (roll < 0.74) {
    return 'policyPush';
  }

  if (roll < 0.9) {
    return 'leaderTour';
  }

  return 'fundraising';
}

function selectOpponentTargetRegion(state: GameState, partyId: PartyId, rngSeed: number) {
  return state.regions.reduce((best, region, index) => {
    const playerSupport = state.regionalSupport[region.id]?.player ?? 0;
    const opponentSupport = state.regionalSupport[region.id]?.[partyId] ?? 0;
    const organization = state.partyRuntime[partyId].organization[region.id] ?? 0.2;
    const noise = randomFromSeed(rngSeed + state.week * 71 + partyId.length * 13 + index) * 0.035;
    const score = region.populationWeight * 0.45 + (1 - Math.abs(playerSupport - opponentSupport)) * 0.22 + (1 - organization) * 0.18 + noise;

    return score > best.score ? { region, score } : best;
  }, { region: state.regions[0], score: -Infinity }).region;
}

function opponentMoveCost(move: OpponentMoveKind) {
  switch (move) {
    case 'attackPlayer':
      return 0.8;
    case 'leaderTour':
      return 0.9;
    case 'mediaAppearance':
      return 0.7;
    case 'policyPush':
      return 0.65;
    case 'regionalGroundGame':
      return 0.75;
    case 'fundraising':
      return 0;
  }
}

function spendOpponentBudget(state: GameState, partyId: PartyId, amount: number) {
  const runtime = state.partyRuntime[partyId];

  if (runtime.cash < amount || runtime.legalSpend + amount > state.rules.legalSpendCap) {
    return false;
  }

  runtime.cash = round(runtime.cash - amount);
  runtime.legalSpend = round(runtime.legalSpend + amount);
  return true;
}

function selectOpponentIssue(party: GameState['parties'][number], seed: number): IssueId {
  const issues = Array.from(new Set([...Object.keys(party.issueOwnership), ...Object.keys(party.issuePositions)])) as IssueId[];
  return issues[Math.floor(randomFromSeed(seed) * issues.length) % Math.max(1, issues.length)] ?? 'housing';
}

function widenFieldForIssue(field: GameState['partyRuntime'][PartyId]['field'], issue: IssueId, amount: number) {
  if (issue === 'security') {
    field.width.authority = clamp(field.width.authority + amount, 0.25, 1.4);
    widenField8D(field, 'authority', amount);
    return;
  }

  if (issue === 'climate' || issue === 'education') {
    field.width.culture = clamp(field.width.culture + amount, 0.25, 1.4);
    widenField8D(field, 'culture', amount);
    return;
  }

  field.width.econ = clamp(field.width.econ + amount, 0.25, 1.4);
  widenField8D(field, 'econ', amount);
}

function issueLabel(issue: IssueId) {
  const labels: Record<IssueId, string> = {
    climate: 'klimatu',
    education: 'školství',
    healthcare: 'zdravotnictví',
    housing: 'bydlení',
    industry: 'průmyslu',
    security: 'bezpečnosti',
    taxes: 'daní',
    transport: 'dopravy',
  };

  return labels[issue];
}

function applyScandals(state: GameState, riskNotes: string[]) {
  for (const scandal of state.scandals.filter((item) => !item.resolved)) {
    const runtime = state.partyRuntime[scandal.targetPartyId];
    runtime.reputation.trust = clamp(runtime.reputation.trust - scandal.severity * scandal.virality * 0.04, 0, 1);
    runtime.reputation.integrity = clamp(runtime.reputation.integrity - scandal.legalExposure * 0.03, 0, 1);
    runtime.reputation.controversy = clamp(runtime.reputation.controversy + scandal.virality * 0.025, 0, 1);
    riskNotes.push(`Kauza: ${scandal.title} zvyšuje reputační tlak.`);
  }
}

function applyMarketingAdvisorCost(state: GameState, riskNotes: string[]) {
  const runtime = state.partyRuntime.player;
  const advisor = currentMarketingAdvisor(state);

  if (advisor.id === 'none') {
    return;
  }

  if (runtime.cash < advisor.costPerWeek || runtime.legalSpend + advisor.costPerWeek > state.rules.legalSpendCap) {
    runtime.marketingAdvisorId = 'none';
    riskNotes.push(`${advisor.name} byl kvůli rozpočtu nebo legal spend limitu odvolán. Odhady budou méně přesné.`);
    return;
  }

  runtime.cash = round(runtime.cash - advisor.costPerWeek);
  runtime.legalSpend = round(runtime.legalSpend + advisor.costPerWeek);
  runtime.informationQuality = clamp(runtime.informationQuality + advisor.predictionAccuracyBonus * 0.025, 0, 1);
}

function createBriefing(
  beforeState: GameState,
  nextState: GameState,
  notes: {
    actionEffects: string[];
    contextNotes: string[];
    mediaNotes: string[];
    opponentMoves: string[];
    riskNotes: string[];
  },
): TurnBriefing {
  const beforeSupport = beforeState.nationalSupport.player || 0;
  const afterSupport = nextState.nationalSupport.player || 0;

  return {
    actionEffects: notes.actionEffects.length > 0 ? notes.actionEffects : ['Štáb neprovedl žádnou výraznou akci.'],
    advisorRecommendations: createAdvisorRecommendations(nextState),
    events: notes.contextNotes.length > 0 ? notes.contextNotes : ['Týden proběhl bez výrazného externího otřesu.'],
    mediaNotes: notes.mediaNotes,
    nationalSupport: nextState.nationalSupport,
    opponentMoves: notes.opponentMoves,
    playerDelta: afterSupport - beforeSupport,
    regionHighlights: getRegionHighlights(beforeState, nextState),
    riskNotes: notes.riskNotes,
    segmentNotes: getSegmentNotes(nextState),
    week: beforeState.week,
  };
}

function getRegionHighlights(before: GameState, after: GameState): TurnBriefing['regionHighlights'] {
  return after.regions
    .map((region) => {
      const delta = (after.regionalSupport[region.id]?.player ?? 0) - (before.regionalSupport[region.id]?.player ?? 0);
      return {
        delta,
        reason: delta >= 0 ? 'lepší organizace, viditelnost nebo tematický překryv' : 'soupeři získali výhodnější překryv segmentů',
        regionId: region.id,
      };
    })
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))
    .slice(0, 4);
}

function getSegmentNotes(state: GameState) {
  const reputation = state.partyRuntime.player.reputation;
  const poll = computePolls(state, state.nationalSupport);
  const notes = [
    reputation.integrity > 0.65
      ? 'Voliči citliví na skandály reagují lépe na vyšší integritu financování.'
      : 'Nižší integrita zvyšuje bariéru u vzdělanějších a městských segmentů.',
    state.partyRuntime.player.informationQuality > 0.58
      ? 'Analytický tým už poskytuje užší intervaly průzkumů.'
      : 'Odhady jsou stále široké. Interní průzkum by zpřesnil cílení.',
  ];

  if (poll.segmentInsights?.undecidedCenter) {
    notes.push(poll.segmentInsights.undecidedCenter);
  }

  return notes;
}

function createAdvisorRecommendations(state: GameState) {
  const recommendations = computePolls(state, state.nationalSupport).recommendedActions ?? [];
  const advisor = currentMarketingAdvisor(state);

  if (advisor.level === 0) {
    recommendations.push('Zvážit najmutí marketingového týmu pro přesnější odhady dopadů akcí.');
  }

  if (state.partyRuntime.player.leader.fatigue > 0.55) {
    recommendations.push('Omezit osobní účast předsedkyně v dalším týdnu.');
  }

  if (state.partyRuntime.player.cash < 3) {
    recommendations.push('Zajistit čisté financování nebo zlevnit plán akcí.');
  }

  return recommendations.length > 0 ? recommendations : ['Pokračovat v regionálním cílení podle mapy podpory.'];
}

function resetLeaderWeek(state: GameState) {
  for (const runtime of Object.values(state.partyRuntime)) {
    runtime.leader.timeUsed = 0;
    runtime.leader.fatigue = clamp(runtime.leader.fatigue - 0.04, 0, 1);
    runtime.leader.energy = clamp(1 - runtime.leader.fatigue, 0, 1);
  }
}

function currentMarketingAdvisor(state: GameState) {
  const advisorId = state.partyRuntime.player.marketingAdvisorId ?? 'none';
  return (
    state.marketingAdvisors?.find((advisor) => advisor.id === advisorId) ??
    state.marketingAdvisors?.find((advisor) => advisor.id === 'none') ?? {
      costPerWeek: 0,
      customActionUnlocks: false,
      id: 'none' as const,
      level: 0 as const,
      messageTestingBonus: 0,
      name: 'Bez externího týmu',
      predictionAccuracyBonus: 0,
      riskDetectionBonus: 0,
      segmentTargetingBonus: 0,
    }
  );
}

function increaseRegionOrganization(state: GameState, regionId: PlannedAction['targetRegionId'], amount: number) {
  if (!regionId) {
    return;
  }

  const current = state.partyRuntime.player.organization[regionId] ?? 0.25;
  state.partyRuntime.player.organization[regionId] = clamp(current + amount, 0, 1);
}

function adjustPlayerIssueOwnership(state: GameState, issueId: keyof GameState['parties'][number]['issueOwnership'], amount: number) {
  const player = state.parties.find((party) => party.id === 'player');
  if (!player) {
    return;
  }
  player.issueOwnership[issueId] = clamp((player.issueOwnership[issueId] ?? 0) + amount, 0, 1);
}

function increaseRecentConflict(state: GameState, partyA: PartyId, partyB: PartyId, amount: number) {
  const relation = findRelation(state, partyA, partyB);
  if (!relation) {
    return;
  }
  relation.recentConflict = clamp(relation.recentConflict + amount, 0, 1);
  relation.totalCoalitionPotential = clamp(
    relation.publicAcceptability + relation.ideologicalCompatibility + relation.personalTrust - relation.recentConflict - relation.scandalBarrier,
    0,
    1,
  );
}

function findRelation(state: GameState, partyA: PartyId, partyB: PartyId) {
  return state.coalitionRelations.find(
    (relation) =>
      (relation.partyA === partyA && relation.partyB === partyB) ||
      (relation.partyA === partyB && relation.partyB === partyA),
  );
}

function labelParty(state: GameState, partyId: PartyId) {
  return state.parties.find((party) => party.id === partyId)?.shortName ?? partyId;
}

function ideologicalDistance8D(position: LatentVector8D, field: GameState['partyRuntime'][PartyId]['field']) {
  const center = field.center8D ?? legacyFieldCenter8D(field);
  const width = field.width8D ?? legacyFieldWidth8D(field);
  const salience = field.salience8D ?? defaultFieldSalience8D();

  return latentDimensions8D.reduce((sum, dimension) => {
    const normalized = (position[dimension] - center[dimension]) / Math.max(0.15, width[dimension]);
    return sum + salience[dimension] * normalized * normalized;
  }, 0);
}

function ensurePartyField8D(field: GameState['partyRuntime'][PartyId]['field'], party: GameState['parties'][number]) {
  field.center8D = field.center8D ?? inferPartyCenter8D(party, field);
  field.width8D = field.width8D ?? legacyFieldWidth8D(field);
  field.salience8D = field.salience8D ?? defaultFieldSalience8D();
  field.originCenter8D = field.originCenter8D ?? field.center8D;
  field.latentCenter = field.center8D;
}

function inferPartyCenter8D(party: GameState['parties'][number], fieldRuntime: GameState['partyRuntime'][PartyId]['field']) {
  const climate = party.issuePositions.climate ?? 0;
  const security = party.issuePositions.security ?? 0;
  const transport = party.issuePositions.transport ?? 0;
  const industry = party.issuePositions.industry ?? 0;
  const taxes = party.issuePositions.taxes ?? 0;
  const field = fieldRuntime.center;
  const latent = fieldRuntime.latentCenter;

  return completeLatentVector({
    authority: field.authority,
    culture: field.culture,
    econ: field.econ,
    establishment: clamp(
      latent?.establishment ?? (party.reputation.trust + party.reputation.competence + party.reputation.integrity) / 1.55 - 0.95 - party.reputation.controversy * 0.35,
      -1,
      1,
    ),
    globalism: clamp(latent?.globalism ?? -field.culture * 0.45 - field.authority * 0.25 - security * 0.18 + industry * 0.08, -1, 1),
    green: clamp(latent?.green ?? -climate * 0.72 - transport * 0.12 - industry * 0.08, -1, 1),
    green_deal: clamp(latent?.green_deal ?? -climate * 0.62 - taxes * 0.12 - industry * 0.12 + field.econ * 0.08, -1, 1),
    ukraine: clamp(latent?.ukraine ?? -field.authority * 0.3 - field.culture * 0.16 + security * 0.28 + party.reputation.consistency * 0.12 - 0.06, -1, 1),
  });
}

function legacyFieldCenter8D(field: GameState['partyRuntime'][PartyId]['field']): LatentVector8D {
  return completeLatentVector({
    authority: field.center.authority,
    culture: field.center.culture,
    econ: field.center.econ,
    ...(field.latentCenter ?? {}),
  });
}

function legacyFieldWidth8D(field: GameState['partyRuntime'][PartyId]['field']): LatentVector8D {
  return completeLatentVector({
    authority: field.width.authority,
    culture: field.width.culture,
    econ: field.width.econ,
    establishment: 0.74,
    globalism: 0.72,
    green: 0.68,
    green_deal: 0.66,
    ukraine: 0.66,
  });
}

function defaultFieldSalience8D(): LatentVector8D {
  return completeLatentVector({
    authority: 1,
    culture: 1,
    econ: 1,
    establishment: 0.85,
    globalism: 0.9,
    green: 0.85,
    green_deal: 0.85,
    ukraine: 0.9,
  });
}

function completeLatentVector(vector: Partial<Record<string, number>>): LatentVector8D {
  return {
    authority: clamp(vector.authority ?? 0, -1, 1),
    culture: clamp(vector.culture ?? 0, -1, 1),
    econ: clamp(vector.econ ?? 0, -1, 1),
    establishment: clamp(vector.establishment ?? 0, -1, 1),
    globalism: clamp(vector.globalism ?? 0, -1, 1),
    green: clamp(vector.green ?? 0, -1, 1),
    green_deal: clamp(vector.green_deal ?? 0, -1, 1),
    ukraine: clamp(vector.ukraine ?? 0, -1, 1),
  };
}

function widenField8D(field: GameState['partyRuntime'][PartyId]['field'], dimension: LatentDimension8D, amount: number) {
  field.width8D = field.width8D ?? legacyFieldWidth8D(field);
  field.width8D[dimension] = clamp(field.width8D[dimension] + amount, 0.25, 1.4);
}

function normalizePartyRecord(record: Record<PartyId, number>) {
  const total = partyIds.reduce((sum, partyId) => sum + Math.max(0, record[partyId]), 0);
  const divisor = total || 1;

  return Object.fromEntries(partyIds.map((partyId) => [partyId, Math.max(0, record[partyId]) / divisor])) as Record<PartyId, number>;
}

function shiftReputation(reputation: ReputationVector, shift: Partial<ReputationVector>) {
  for (const [key, value] of Object.entries(shift) as [keyof ReputationVector, number][]) {
    reputation[key] = clamp(reputation[key] + value, 0, 1);
  }
}

function cloneState(state: GameState): GameState {
  return JSON.parse(JSON.stringify(state)) as GameState;
}

function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function pushUnique(items: string[], item: string) {
  if (!items.includes(item)) {
    items.push(item);
  }
}

function nextSeed(seed: number) {
  return (seed * 1664525 + 1013904223) % 4294967296;
}

function randomFromSeed(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}

function formatSignedPoints(value: number) {
  return `${value >= 0 ? '+' : ''}${(value * 100).toFixed(1)}`;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}

export function segmentShareInRegion(state: GameState, regionId: string, segmentId: SegmentId) {
  const region = state.regions.find((item) => item.id === regionId);
  return region?.segmentMix[segmentId] ?? 0;
}

export function actionById(state: GameState, actionId: CampaignActionId) {
  return state.actions.find((action) => action.id === actionId);
}
