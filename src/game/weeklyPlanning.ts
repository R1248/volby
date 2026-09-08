import type { RegionId } from "../types/region";
import type { ProgramIssueId } from "./issueTypes";
import type {
    CampaignActionV2,
    GameState,
    IssueId,
    MediaInvitation,
    PartyId,
    PlannedAction,
} from "./types";

const MAX_PRIORITY_CANDIDATES = 6;
const DEFAULT_RECOMMENDATION_LIMIT = 6;

const BATTLEGROUND_GAP = 0.04;
const DEFEND_GAP = 0.07;
const OPPORTUNITY_GAP = 0.08;

const ISSUE_LABELS: Partial<Record<IssueId, string>> = {
  housing: "bydlení",
  transport: "dopravy",
  security: "bezpečnosti",
  healthcare: "zdravotnictví",
  climate: "klimatu",
  industry: "průmyslu",
  education: "školství",
  greenDeal: "Green Dealu",
  taxes: "daní",
};

export type SituationTone = "opportunity" | "threat" | "neutral";

export type SituationKind =
  | "event"
  | "media"
  | "region"
  | "resources"
  | "momentum";

export type SituationSignal = {
  id: string;
  kind: SituationKind;
  tone: SituationTone;
  title: string;
  reason: string;
  importance: number;

  eventId?: string;
  invitationId?: string;
  regionId?: RegionId;
  issueId?: ProgramIssueId;
};

export type WeekSituation = {
  lead: SituationSignal;
  signals: SituationSignal[];
};

export type StrategicRegionStatus =
  | "battleground"
  | "defend"
  | "opportunity"
  | "safe"
  | "low_priority";

export type StrategicRegion = {
  regionId: RegionId;
  regionName: string;

  status: StrategicRegionStatus;
  score: number;

  playerEstimate: number;
  leadingOpponentId?: PartyId;
  leadingOpponentEstimate: number;
  gap: number;

  organization: number;
  populationWeight: number;
  pollUncertainty: number;

  reason: string;
};

export type WeeklyPriorityKind =
  | "exploit_event"
  | "defend_region"
  | "win_region"
  | "mobilize_base"
  | "build_trust"
  | "counter_opponent";

export type WeeklyPriority = {
  id: string;
  kind: WeeklyPriorityKind;

  label: string;
  reason: string;
  score: number;

  regionId?: RegionId;
  issueId?: ProgramIssueId;
  opponentPartyId?: PartyId;
};

export type RecommendationStrength = "limited" | "moderate" | "strong";

export type RecommendationRisk = "low" | "medium" | "high" | "extreme";

export type RecommendationConfidence = "low" | "medium" | "high";

export type RecommendedCampaignAction = {
  action: CampaignActionV2;

  score: number;
  reason: string;

  matchedPriorityIds: string[];

  effect: RecommendationStrength;
  risk: RecommendationRisk;
  confidence: RecommendationConfidence;

  suggestedRegionId?: RegionId;
  suggestedIssueId?: ProgramIssueId;
  suggestedPartyId?: PartyId;
};

export type PressureLevel = "low" | "medium" | "high" | "critical";

export type PlanPressure = {
  cashUsed: number;
  cashRemaining: number;

  staffUsed: number;
  staffRemaining: number;

  leaderTimeUsed: number;
  leaderTimeRemaining: number;

  cashPressure: PressureLevel;
  staffPressure: PressureLevel;
  leaderPressure: PressureLevel;

  summary: string;
};

/**
 * Converts the prepared weekly context into a small number of
 * player-facing strategic signals.
 *
 * This function never generates context and never mutates GameState.
 */
export function deriveWeekSituation(state: GameState): WeekSituation {
  requirePreparedWeek(state);

  const signals: SituationSignal[] = [];

  for (const event of preparedEvents(state)) {
    const issueId = primaryEventIssue(event.issueAgendaShift);
    const region = event.regionId
      ? state.regions.find((candidate) => candidate.id === event.regionId)
      : undefined;

    const isThreat = event.threatTo?.includes("player") ?? false;
    const isOpportunity = event.opportunityFor?.includes("player") ?? false;

    const tone: SituationTone = isThreat
      ? "threat"
      : isOpportunity
        ? "opportunity"
        : "neutral";

    const importance = clamp(
      event.severity +
        (isThreat ? 0.12 : 0) +
        (isOpportunity ? 0.08 : 0) +
        (event.regionId ? 0.03 : 0),
      0,
      1,
    );

    signals.push({
      id: `event-${event.id}`,
      kind: "event",
      tone,
      title: event.title,
      reason: describeEventSignal(state, issueId, region?.name, tone),
      importance,
      eventId: event.id,
      issueId,
      regionId: event.regionId,
    });
  }

  for (const invitation of preparedInvitations(state)) {
    const outlet = state.media.find(
      (candidate) => candidate.id === invitation.outletId,
    );

    const reach = clamp(
      invitation.expectedReach ?? outlet?.reach ?? 0.35,
      0,
      1,
    );
    const risk = clamp(invitation.risk, 0, 1);

    const tone: SituationTone =
      risk >= 0.68 ? "threat" : reach >= 0.45 ? "opportunity" : "neutral";

    const importance = clamp(
      reach * 0.58 +
        risk * 0.24 +
        (invitation.format === "debate" || invitation.format === "duel"
          ? 0.12
          : 0.04),
      0,
      1,
    );

    signals.push({
      id: `media-${invitation.id}`,
      kind: "media",
      tone,
      title:
        invitation.title ??
        `${outlet?.name ?? "Média"}: ${formatMediaFormat(invitation.format)}`,
      reason:
        tone === "threat"
          ? "Výrazná mediální příležitost, ale s vysokým reputačním rizikem."
          : tone === "opportunity"
            ? "Mediální vystoupení může výrazně zvýšit dosah kampaně."
            : "Mediální příležitost stojí za zvážení podle priorit týdne.",
      importance,
      invitationId: invitation.id,
      issueId: invitation.issueId ?? invitation.issue,
    });
  }

  const runtime = state.partyRuntime.player;

  if (runtime.leader.fatigue >= 0.62) {
    signals.push({
      id: "resource-leader-fatigue",
      kind: "resources",
      tone: "threat",
      title: "Lídr je unavený",
      reason:
        runtime.leader.fatigue >= 0.8
          ? "Další intenzivní osobní nasazení lídra představuje výrazné riziko."
          : "Časově náročné akce s lídrem budou tento týden dražší strategickou volbou.",
      importance: clamp(0.48 + runtime.leader.fatigue * 0.42, 0, 1),
    });
  }

  if (runtime.cash < 3) {
    signals.push({
      id: "resource-low-cash",
      kind: "resources",
      tone: "threat",
      title: "Kampaň má omezenou hotovost",
      reason:
        "Dražší mediální a reklamní tahy mohou vytlačit ostatní aktivity týdne.",
      importance: runtime.cash < 1.5 ? 0.78 : 0.58,
    });
  }

  const momentum = runtime.momentum ?? 0.5;

  if (momentum <= 0.4) {
    signals.push({
      id: "momentum-negative",
      kind: "momentum",
      tone: "threat",
      title: "Kampaň ztrácí momentum",
      reason:
        "Současný vývoj naznačuje, že bez změny tempa může kampaň začít ztrácet prostor soupeřům.",
      importance: clamp(0.5 + (0.4 - momentum), 0, 0.8),
    });
  } else if (momentum >= 0.62) {
    signals.push({
      id: "momentum-positive",
      kind: "momentum",
      tone: "opportunity",
      title: "Kampaň má momentum",
      reason:
        "Současný trend vytváří prostor pro aktivnější tah místo čistě obranné hry.",
      importance: clamp(0.48 + (momentum - 0.62), 0, 0.72),
    });
  }

  const strategicRegion = deriveStrategicRegions(state).find(
    (region) =>
      region.status === "battleground" ||
      region.status === "defend" ||
      region.status === "opportunity",
  );

  if (strategicRegion) {
    signals.push({
      id: `region-${strategicRegion.regionId}`,
      kind: "region",
      tone:
        strategicRegion.status === "defend"
          ? "threat"
          : strategicRegion.status === "opportunity"
            ? "opportunity"
            : "neutral",
      title:
        strategicRegion.status === "defend"
          ? `Pozor na ${strategicRegion.regionName}`
          : strategicRegion.status === "opportunity"
            ? `Příležitost: ${strategicRegion.regionName}`
            : `${strategicRegion.regionName} je battleground`,
      reason: strategicRegion.reason,
      importance: clamp(0.45 + strategicRegion.score * 0.35, 0, 0.84),
      regionId: strategicRegion.regionId,
    });
  }

  const sorted = signals
    .slice()
    .sort((a, b) => b.importance - a.importance || a.id.localeCompare(b.id));

  const lead =
    sorted[0] ??
    ({
      id: "quiet-week",
      kind: "momentum",
      tone: "neutral",
      title: "Týden bez dominantního otřesu",
      reason:
        "Žádná jednotlivá událost zatím nepřebila ostatní témata. Prostor je na vás.",
      importance: 0.25,
    } satisfies SituationSignal);

  return {
    lead,
    signals: sorted.slice(1, 5),
  };
}

/**
 * Ranks regions using only information the player can reasonably know:
 * public regional polls, public national polls, organization and prepared events.
 *
 * It deliberately does not use hidden regionalSupport as a recommendation source.
 */
export function deriveStrategicRegions(state: GameState): StrategicRegion[] {
  requirePreparedWeek(state);

  const maxPopulationWeight = Math.max(
    ...state.regions.map((region) => region.populationWeight),
    0.0001,
  );

  const currentEvents = preparedEvents(state);

  return state.regions
    .map((region): StrategicRegion => {
      const playerEstimate = publicRegionEstimate(state, region.id, "player");

      const opponent = leadingOpponentInRegion(state, region.id);

      const leadingOpponentEstimate = opponent?.value ?? 0;
      const gap = playerEstimate - leadingOpponentEstimate;

      const organization =
        state.partyRuntime.player.organization[region.id] ?? 0.25;

      const eventImportance = clamp(
        currentEvents
          .filter((event) => event.regionId === region.id)
          .reduce((sum, event) => sum + event.severity, 0),
        0,
        1,
      );

      const pollUncertainty = regionalPollUncertainty(
        state,
        region.id,
        "player",
      );

      const status = classifyRegion(gap);

      const closeness = 1 - clamp(Math.abs(gap) / 0.12, 0, 1);
      const populationImportance =
        region.populationWeight / maxPopulationWeight;
      const organizationNeed = 1 - clamp(organization, 0, 1);

      const statusBonus =
        status === "battleground"
          ? 0.18
          : status === "defend"
            ? 0.12
            : status === "opportunity"
              ? 0.14
              : status === "safe"
                ? -0.08
                : -0.12;

      const score = clamp(
        closeness * 0.34 +
          populationImportance * 0.24 +
          organizationNeed * 0.18 +
          eventImportance * 0.18 +
          statusBonus,
        0,
        1,
      );

      return {
        regionId: region.id,
        regionName: region.name,
        status,
        score,
        playerEstimate,
        leadingOpponentId: opponent?.partyId,
        leadingOpponentEstimate,
        gap,
        organization,
        populationWeight: region.populationWeight,
        pollUncertainty,
        reason: describeStrategicRegion(
          state,
          region.id,
          status,
          gap,
          organization,
          eventImportance,
        ),
      };
    })
    .sort(
      (a, b) => b.score - a.score || a.regionName.localeCompare(b.regionName),
    );
}

/**
 * Produces a small dynamic set of strategic priorities for the current week.
 *
 * The output is intentionally a shortlist rather than a complete menu.
 */
export function derivePriorityCandidates(state: GameState): WeeklyPriority[] {
  requirePreparedWeek(state);

  const situation = deriveWeekSituation(state);
  const strategicRegions = deriveStrategicRegions(state);

  const candidates: WeeklyPriority[] = [];

  for (const signal of [situation.lead, ...situation.signals]) {
    if (signal.kind !== "event" || !signal.issueId || !signal.eventId) {
      continue;
    }

    candidates.push({
      id: `exploit-${signal.eventId}`,
      kind: "exploit_event",
      label:
        signal.tone === "threat"
          ? `Reagovat na téma ${issueLabel(state, signal.issueId)}`
          : `Využít téma ${issueLabel(state, signal.issueId)}`,
      reason: signal.reason,
      score: clamp(signal.importance + 0.05, 0, 1),
      regionId: signal.regionId,
      issueId: signal.issueId,
    });
  }

  for (const region of strategicRegions.slice(0, 4)) {
    if (
      region.status === "defend" ||
      (region.status === "battleground" && region.gap >= 0)
    ) {
      candidates.push({
        id: `defend-${region.regionId}`,
        kind: "defend_region",
        label: `Udržet ${region.regionName}`,
        reason: region.reason,
        score: clamp(region.score + 0.08, 0, 1),
        regionId: region.regionId,
        opponentPartyId: region.leadingOpponentId,
      });
    }

    if (
      region.status === "opportunity" ||
      (region.status === "battleground" && region.gap < 0)
    ) {
      candidates.push({
        id: `win-${region.regionId}`,
        kind: "win_region",
        label: `Získat ${region.regionName}`,
        reason: region.reason,
        score: clamp(region.score + 0.06, 0, 1),
        regionId: region.regionId,
        opponentPartyId: region.leadingOpponentId,
      });
    }
  }

  const progress = campaignProgress(state);

  candidates.push({
    id: "mobilize-base",
    kind: "mobilize_base",
    label: "Mobilizovat vlastní voliče",
    reason:
      progress >= 0.7
        ? "Do voleb zbývá málo času a rostoucí část hodnoty kampaně leží v účasti vlastních podporovatelů."
        : "Mobilizace může upevnit podporu a připravit kampaň na závěrečnou fázi.",
    score: clamp(0.32 + progress * 0.42, 0, 0.82),
  });

  const reputation = state.partyRuntime.player.reputation;
  const reputationDeficit =
    (1 -
      reputation.trust +
      (1 - reputation.integrity) +
      (1 - reputation.competence)) /
    3;

  if (reputationDeficit > 0.28) {
    candidates.push({
      id: "build-trust",
      kind: "build_trust",
      label: "Posílit důvěryhodnost",
      reason:
        "Důvěra, integrita nebo dojem kompetence zaostávají a mohou brzdit přesvědčování nerozhodnutých voličů.",
      score: clamp(0.36 + reputationDeficit * 0.58, 0, 0.88),
    });
  }

  const opponent = leadingNationalOpponent(state);

  if (opponent) {
    const playerEstimate = state.polls.player?.value ?? 0;
    const opponentGap = opponent.value - playerEstimate;

    if (opponentGap > -0.035) {
      candidates.push({
        id: `counter-${opponent.partyId}`,
        kind: "counter_opponent",
        label: `Zastavit ${partyLabel(state, opponent.partyId)}`,
        reason:
          opponentGap > 0
            ? `${partyLabel(state, opponent.partyId)} je podle dostupných průzkumů před námi.`
            : `${partyLabel(state, opponent.partyId)} zůstává v těsném kontaktu a může převzít momentum.`,
        score: clamp(0.42 + Math.max(0, opponentGap) * 3, 0, 0.82),
        opponentPartyId: opponent.partyId,
      });
    }
  }

  return dedupePriorities(candidates)
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id))
    .slice(0, MAX_PRIORITY_CANDIDATES);
}

/**
 * Produces a contextual shortlist of campaign actions.
 *
 * The returned score is intended for sorting/debugging only.
 * UI should communicate reason/effect/risk/confidence instead.
 */
export function recommendCampaignActions(
  state: GameState,
  priorities: WeeklyPriority[],
  plannedActions: PlannedAction[],
  limit = DEFAULT_RECOMMENDATION_LIMIT,
): RecommendedCampaignAction[] {
  requirePreparedWeek(state);

  const situation = deriveWeekSituation(state);
  const strategicRegions = deriveStrategicRegions(state);
  const plannedIds = new Set(
    plannedActions.map((planned) => planned.actionV2Id),
  );

  const recommendations = state.campaignActionsV2
    .filter(
      (action) =>
        action.placement === "campaign" &&
        action.availability === "player_initiated" &&
        action.preview.visibleToPlayer,
    )
    .filter((action) => canAffordAction(state, action, plannedActions))
    .map((action): RecommendedCampaignAction => {
      const priorityMatches = priorities
        .map((priority) => ({
          priority,
          score: scoreActionForPriority(action, priority),
        }))
        .filter((match) => match.score >= 0.12)
        .sort(
          (a, b) =>
            b.score - a.score || a.priority.id.localeCompare(b.priority.id),
        );

      const bestPriority = priorityMatches[0]?.priority;

      const priorityFit = priorityMatches.reduce(
        (sum, match, index) => sum + match.score * (index === 0 ? 1 : 0.35),
        0,
      );

      const situationFit = scoreSituationFit(
        action,
        situation,
        strategicRegions,
      );

      const effectFit = scoreGeneralEffect(action);

      const resourceFit = scoreResourceFit(state, action, plannedActions);

      const riskPenalty = scoreRiskPenalty(action);

      const duplicatePenalty = plannedIds.has(action.id) ? 0.14 : 0;

      const score =
        0.08 +
        priorityFit +
        situationFit +
        effectFit +
        resourceFit -
        riskPenalty -
        duplicatePenalty;

      return {
        action,
        score: round(score),

        reason: recommendationReason(state, action, bestPriority, situation),

        matchedPriorityIds: priorityMatches.map((match) => match.priority.id),

        effect: recommendationEffect(action),
        risk: recommendationRisk(action),
        confidence: recommendationConfidence(state, action),

        suggestedRegionId:
          action.target.scope === "region"
            ? (bestPriority?.regionId ??
              situation.lead.regionId ??
              strategicRegions[0]?.regionId)
            : undefined,

        suggestedIssueId:
          action.target.scope === "issue"
            ? (bestPriority?.issueId ?? situation.lead.issueId)
            : undefined,

        suggestedPartyId:
          action.target.scope === "opponent"
            ? (bestPriority?.opponentPartyId ??
              leadingNationalOpponent(state)?.partyId)
            : undefined,
      };
    });

  return recommendations
    .sort((a, b) => b.score - a.score || a.action.id.localeCompare(b.action.id))
    .slice(0, Math.max(1, Math.min(limit, DEFAULT_RECOMMENDATION_LIMIT)));
}

/**
 * Summarizes the resource consequences of the current weekly plan.
 */
export function summarizePlanPressure(
  state: GameState,
  plannedActions: PlannedAction[],
): PlanPressure {
  const runtime = state.partyRuntime.player;

  const cashUsed = plannedMoney(state, plannedActions);

  const plannedStaff = plannedStaffCost(state, plannedActions);
  const staffUsed = (runtime.staffUsed ?? 0) + plannedStaff;
  const staffCap = runtime.staffCap ?? 6;

  const plannedLeader = plannedLeaderTime(state, plannedActions);
  const leaderTimeUsed = runtime.leader.timeUsed + plannedLeader;
  const leaderCap = runtime.leader.timeCap;

  const cashRemaining = Math.max(0, runtime.cash - cashUsed);
  const staffRemaining = Math.max(0, staffCap - staffUsed);
  const leaderTimeRemaining = Math.max(0, leaderCap - leaderTimeUsed);

  const cashPressure = pressureLevel(
    runtime.cash <= 0 ? 1 : cashUsed / runtime.cash,
  );

  const staffPressure = pressureLevel(staffCap <= 0 ? 1 : staffUsed / staffCap);

  const leaderPressure = pressureLevel(
    leaderCap <= 0 ? 1 : leaderTimeUsed / leaderCap,
  );

  return {
    cashUsed: round(cashUsed),
    cashRemaining: round(cashRemaining),

    staffUsed: round(staffUsed),
    staffRemaining: round(staffRemaining),

    leaderTimeUsed: round(leaderTimeUsed),
    leaderTimeRemaining: round(leaderTimeRemaining),

    cashPressure,
    staffPressure,
    leaderPressure,

    summary: pressureSummary({
      cashPressure,
      staffPressure,
      leaderPressure,
    }),
  };
}

function requirePreparedWeek(state: GameState) {
  if (!state.preparedWeek || state.preparedWeek.week !== state.week) {
    throw new Error(
      "Weekly planning requires the current week to be prepared.",
    );
  }

  return state.preparedWeek;
}

function preparedEvents(state: GameState) {
  const prepared = requirePreparedWeek(state);

  return prepared.eventIds
    .map((id) => state.events.find((event) => event.id === id))
    .filter(isDefined);
}

function preparedInvitations(state: GameState): MediaInvitation[] {
  const prepared = requirePreparedWeek(state);

  return prepared.invitationIds
    .map((id) =>
      state.mediaInvitations.find((invitation) => invitation.id === id),
    )
    .filter(isDefined);
}

function primaryEventIssue(
  shifts: Partial<Record<IssueId, number>>,
): ProgramIssueId | undefined {
  return Object.entries(shifts).sort(
    (a, b) => Math.abs(b[1] ?? 0) - Math.abs(a[1] ?? 0),
  )[0]?.[0];
}

function describeEventSignal(
  state: GameState,
  issueId: ProgramIssueId | undefined,
  regionName: string | undefined,
  tone: SituationTone,
) {
  const issue = issueId ? issueLabel(state, issueId) : "veřejné debaty";

  const place = regionName ? ` v regionu ${regionName}` : "";

  if (tone === "threat") {
    return `Událost${place} zesiluje téma ${issue}, které může kampaň dostat pod tlak.`;
  }

  if (tone === "opportunity") {
    return `Událost${place} otevírá prostor v tématu ${issue}, který může kampaň využít.`;
  }

  return `Událost${place} zvyšuje význam tématu ${issue}.`;
}

function publicRegionEstimate(
  state: GameState,
  regionId: RegionId,
  partyId: PartyId,
) {
  return (
    state.publicRegionalPolls?.[regionId]?.[partyId]?.value ??
    state.polls?.[partyId]?.value ??
    0
  );
}

function regionalPollUncertainty(
  state: GameState,
  regionId: RegionId,
  partyId: PartyId,
) {
  const regional = state.publicRegionalPolls?.[regionId]?.[partyId];

  if (regional) {
    return Math.max(0, regional.high - regional.low);
  }

  const national = state.polls?.[partyId];

  if (national) {
    return Math.max(0, national.high - national.low);
  }

  return 0.12;
}

function leadingOpponentInRegion(state: GameState, regionId: RegionId) {
  return state.parties
    .filter(
      (party) =>
        party.id !== "player" &&
        party.id !== "others" &&
        party.mandateEligible !== false,
    )
    .map((party) => ({
      partyId: party.id,
      value: publicRegionEstimate(state, regionId, party.id),
    }))
    .sort((a, b) => b.value - a.value || a.partyId.localeCompare(b.partyId))[0];
}

function leadingNationalOpponent(state: GameState) {
  return state.parties
    .filter(
      (party) =>
        party.id !== "player" &&
        party.id !== "others" &&
        party.mandateEligible !== false,
    )
    .map((party) => ({
      partyId: party.id,
      value: state.polls?.[party.id]?.value ?? 0,
    }))
    .sort((a, b) => b.value - a.value || a.partyId.localeCompare(b.partyId))[0];
}

function classifyRegion(gap: number): StrategicRegionStatus {
  if (Math.abs(gap) <= BATTLEGROUND_GAP) {
    return "battleground";
  }

  if (gap > BATTLEGROUND_GAP && gap <= DEFEND_GAP) {
    return "defend";
  }

  if (gap < -BATTLEGROUND_GAP && gap >= -OPPORTUNITY_GAP) {
    return "opportunity";
  }

  if (gap > DEFEND_GAP) {
    return "safe";
  }

  return "low_priority";
}

function describeStrategicRegion(
  state: GameState,
  regionId: RegionId,
  status: StrategicRegionStatus,
  gap: number,
  organization: number,
  eventImportance: number,
) {
  const opponent = leadingOpponentInRegion(state, regionId);
  const opponentName = opponent
    ? partyLabel(state, opponent.partyId)
    : "soupeř";

  const gapPoints = Math.abs(gap * 100).toFixed(1);

  if (status === "battleground") {
    return `Rozdíl proti ${opponentName} je přibližně ${gapPoints} bodu. I menší zásah může změnit pořadí.`;
  }

  if (status === "defend") {
    return `Vedeme jen přibližně o ${gapPoints} bodu. Region stojí za aktivní obranou.`;
  }

  if (status === "opportunity") {
    return `Na ${opponentName} ztrácíme jen přibližně ${gapPoints} bodu. Region je dosažitelný.`;
  }

  if (eventImportance > 0.35) {
    return "Region není těsný, ale aktuální událost výrazně zvyšuje jeho strategickou relevanci.";
  }

  if (organization < 0.35) {
    return "Organizace je zde slabá, ale bez dalšího důvodu nejde o hlavní prioritu týdne.";
  }

  return status === "safe"
    ? "Současný náskok je relativně komfortní."
    : "Velký odstup snižuje krátkodobou návratnost investovaných zdrojů.";
}

function scoreActionForPriority(
  action: CampaignActionV2,
  priority: WeeklyPriority,
) {
  let score = 0;

  switch (priority.kind) {
    case "exploit_event":
      if (action.target.scope === "issue") {
        score += 0.2;
      }

      if (priority.regionId && action.target.scope === "region") {
        score += 0.18;
      }

      if (action.category === "ads") {
        score += 0.1;
      }

      if (action.category === "digital") {
        score += 0.09;
      }

      if (action.tags.includes("field")) {
        score += 0.08;
      }

      if (action.effects.issueSalienceShift) {
        score += 0.18;
      }

      break;

    case "defend_region":
    case "win_region":
      if (action.target.scope === "region") {
        score += 0.28;
      }

      if (action.tags.includes("region")) {
        score += 0.18;
      }

      if (action.tags.includes("field")) {
        score += 0.13;
      }

      if ((action.effects.regionOrganizationShift ?? 0) > 0) {
        score += 0.2;
      }

      if (action.category === "ads") {
        score += 0.07;
      }

      if (action.category === "digital") {
        score += 0.06;
      }

      break;

    case "mobilize_base":
      if (action.category === "turnout") {
        score += 0.34;
      }

      if (action.tags.includes("turnout")) {
        score += 0.28;
      }

      if (action.effects.turnoutModifier) {
        score += 0.24;
      }

      if (action.tags.includes("field")) {
        score += 0.08;
      }

      break;

    case "build_trust": {
      const reputation = action.effects.reputationShift ?? {};

      if ((reputation.trust ?? 0) > 0) {
        score += 0.24;
      }

      if ((reputation.integrity ?? 0) > 0) {
        score += 0.24;
      }

      if ((reputation.competence ?? 0) > 0) {
        score += 0.18;
      }

      if ((reputation.authenticity ?? 0) > 0) {
        score += 0.12;
      }

      if (action.legality === "clean") {
        score += 0.05;
      }

      break;
    }

    case "counter_opponent":
      if (action.target.scope === "opponent") {
        score += 0.24;
      }

      if (action.category === "negative") {
        score += 0.24;
      }

      if (action.tags.includes("negative")) {
        score += 0.18;
      }

      if (action.tags.includes("demobilization")) {
        score += 0.14;
      }

      if (action.effects.demobilizationModifier) {
        score += 0.15;
      }

      break;
  }

  return score;
}

function scoreSituationFit(
  action: CampaignActionV2,
  situation: WeekSituation,
  strategicRegions: StrategicRegion[],
) {
  let score = 0;

  const signals = [situation.lead, ...situation.signals];

  for (const signal of signals) {
    if (signal.regionId && action.target.scope === "region") {
      score += 0.04 * signal.importance;
    }

    if (signal.issueId && action.target.scope === "issue") {
      score += 0.05 * signal.importance;
    }

    if (
      signal.kind === "media" &&
      (action.category === "ads" || action.category === "digital")
    ) {
      score += 0.025 * signal.importance;
    }
  }

  if (action.target.scope === "region" && strategicRegions[0]?.score) {
    score += strategicRegions[0].score * 0.05;
  }

  return score;
}

function scoreGeneralEffect(action: CampaignActionV2) {
  let score = 0;

  score += Math.abs(action.effects.fieldAmplitude ?? 0) * 0.45;

  score += Math.abs(action.effects.regionOrganizationShift ?? 0) * 0.32;

  score += Math.abs(action.effects.informationQualityShift ?? 0) * 0.18;

  score += Math.abs(action.effects.turnoutModifier?.amount ?? 0) * 1.3;

  score += Math.abs(action.effects.demobilizationModifier?.amount ?? 0) * 0.7;

  const reputation = action.effects.reputationShift;

  if (reputation) {
    score +=
      Object.values(reputation).reduce(
        (sum, value) => sum + Math.max(0, value ?? 0),
        0,
      ) * 0.16;
  }

  return clamp(score, 0, 0.28);
}

function scoreResourceFit(
  state: GameState,
  action: CampaignActionV2,
  plannedActions: PlannedAction[],
) {
  const runtime = state.partyRuntime.player;

  const moneyAvailable = Math.max(
    0.01,
    runtime.cash - plannedMoney(state, plannedActions),
  );

  const staffAvailable = Math.max(
    0.01,
    (runtime.staffCap ?? 6) -
      (runtime.staffUsed ?? 0) -
      plannedStaffCost(state, plannedActions),
  );

  const leaderAvailable = Math.max(
    0.01,
    runtime.leader.timeCap -
      runtime.leader.timeUsed -
      plannedLeaderTime(state, plannedActions),
  );

  const moneyLoad = action.cost / moneyAvailable;
  const staffLoad = action.staffCost / staffAvailable;
  const leaderLoad = action.leaderTimeCost / leaderAvailable;

  let score = 0.13;

  score -= clamp(moneyLoad - 0.3, 0, 1) * 0.08;
  score -= clamp(staffLoad - 0.35, 0, 1) * 0.09;
  score -= clamp(leaderLoad - 0.35, 0, 1) * 0.11;

  score -= action.leaderTimeCost * runtime.leader.fatigue * 0.12;

  score -= action.fatigueCost * runtime.leader.fatigue * 0.1;

  return score;
}

function scoreRiskPenalty(action: CampaignActionV2) {
  const maxRisk = Math.max(...Object.values(action.risks));

  let penalty = maxRisk * 0.24 + action.ethicalRisk * 0.1;

  if (action.legality === "gray") {
    penalty += 0.07;
  }

  if (action.legality === "illegal") {
    penalty += 0.18;
  }

  return penalty;
}

function canAffordAction(
  state: GameState,
  action: CampaignActionV2,
  plannedActions: PlannedAction[],
) {
  const runtime = state.partyRuntime.player;

  const reservedMoney = plannedMoney(state, plannedActions);

  const reservedLegal = plannedLegalMoney(state, plannedActions);

  const reservedStaff = plannedStaffCost(state, plannedActions);

  const reservedLeader = plannedLeaderTime(state, plannedActions);

  if (runtime.cash < reservedMoney + action.cost) {
    return false;
  }

  if (
    action.legality !== "illegal" &&
    runtime.legalSpend + reservedLegal + action.cost > state.rules.legalSpendCap
  ) {
    return false;
  }

  if (
    runtime.legalSpend +
      runtime.graySpend +
      runtime.thirdPartySpend +
      reservedMoney +
      action.cost >
    state.rules.spendCap
  ) {
    return false;
  }

  if (
    (runtime.staffUsed ?? 0) + reservedStaff + action.staffCost >
    (runtime.staffCap ?? 6)
  ) {
    return false;
  }

  if (
    runtime.leader.timeUsed + reservedLeader + action.leaderTimeCost >
    runtime.leader.timeCap
  ) {
    return false;
  }

  return true;
}

function recommendationEffect(
  action: CampaignActionV2,
): RecommendationStrength {
  let magnitude = 0;

  magnitude += Math.abs(action.effects.fieldAmplitude ?? 0) * 5;

  magnitude += Math.abs(action.effects.regionOrganizationShift ?? 0) * 4;

  magnitude += Math.abs(action.effects.informationQualityShift ?? 0) * 3;

  magnitude += Math.abs(action.effects.turnoutModifier?.amount ?? 0) * 8;

  magnitude += Math.abs(action.effects.demobilizationModifier?.amount ?? 0) * 6;

  const reputation = action.effects.reputationShift;

  if (reputation) {
    magnitude +=
      Object.values(reputation).reduce(
        (sum, value) => sum + Math.abs(value ?? 0),
        0,
      ) * 3;
  }

  if (magnitude >= 0.55) {
    return "strong";
  }

  if (magnitude >= 0.2) {
    return "moderate";
  }

  return "limited";
}

function recommendationRisk(action: CampaignActionV2): RecommendationRisk {
  const maxRisk = Math.max(...Object.values(action.risks), action.ethicalRisk);

  if (action.legality === "illegal" || maxRisk >= 0.72) {
    return "extreme";
  }

  if (action.legality === "gray" || maxRisk >= 0.38) {
    return "high";
  }

  if (maxRisk >= 0.16) {
    return "medium";
  }

  return "low";
}

function recommendationConfidence(
  state: GameState,
  action: CampaignActionV2,
): RecommendationConfidence {
  const informationQuality = state.partyRuntime.player.informationQuality;

  switch (action.preview.precisionRequired ?? "focusGroup") {
    case "none":
      return informationQuality >= 0.2 ? "high" : "medium";

    case "poll":
      if (informationQuality >= 0.65) {
        return "high";
      }

      return informationQuality >= 0.4 ? "medium" : "low";

    case "focusGroup":
      if (informationQuality >= 0.75) {
        return "high";
      }

      return informationQuality >= 0.5 ? "medium" : "low";

    case "seniorAdvisor":
      if (informationQuality >= 0.82) {
        return "high";
      }

      return informationQuality >= 0.65 ? "medium" : "low";
  }
}

function recommendationReason(
  state: GameState,
  action: CampaignActionV2,
  priority: WeeklyPriority | undefined,
  situation: WeekSituation,
) {
  if (priority) {
    switch (priority.kind) {
      case "defend_region":
        return `Dobře odpovídá prioritě „${priority.label}“ a může posílit naši pozici v regionu.`;

      case "win_region":
        return `Odpovídá prioritě „${priority.label}“ a směřuje zdroje do dosažitelného souboje.`;

      case "mobilize_base":
        return `Odpovídá prioritě „${priority.label}“ a zvyšuje hodnotu vlastní voličské základny.`;

      case "build_trust":
        return `Odpovídá prioritě „${priority.label}“ a podporuje reputační ukazatele kampaně.`;

      case "counter_opponent":
        return `Odpovídá prioritě „${priority.label}“ a vytváří přímý tlak na soupeře.`;

      case "exploit_event":
        return `Odpovídá aktuálnímu tématu týdne a prioritě „${priority.label}“.`;
    }
  }

  if (situation.lead.regionId && action.target.scope === "region") {
    return `Regionální tah odpovídá hlavní situaci týdne v regionu ${regionLabel(
      state,
      situation.lead.regionId,
    )}.`;
  }

  if (situation.lead.issueId && action.target.scope === "issue") {
    return `Tah umožňuje reagovat na dominantní téma ${issueLabel(
      state,
      situation.lead.issueId,
    )}.`;
  }

  return action.preview.shortEffectLabel
    ? `Silná obecná volba pro tento týden: ${action.preview.shortEffectLabel}.`
    : "Akce má rozumný poměr očekávaného dopadu, nákladů a rizika.";
}

function plannedMoney(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, planned) => {
    const action = state.campaignActionsV2.find(
      (candidate) => candidate.id === planned.actionV2Id,
    );

    return sum + (action?.cost ?? 0);
  }, 0);
}

function plannedLegalMoney(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, planned) => {
    const action = state.campaignActionsV2.find(
      (candidate) => candidate.id === planned.actionV2Id,
    );

    return sum + (action && action.legality !== "illegal" ? action.cost : 0);
  }, 0);
}

function plannedStaffCost(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, planned) => {
    const action = state.campaignActionsV2.find(
      (candidate) => candidate.id === planned.actionV2Id,
    );

    return sum + (action?.staffCost ?? 0);
  }, 0);
}

function plannedLeaderTime(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, planned) => {
    const action = state.campaignActionsV2.find(
      (candidate) => candidate.id === planned.actionV2Id,
    );

    return sum + (action?.leaderTimeCost ?? 0);
  }, 0);
}

function pressureLevel(ratio: number): PressureLevel {
  if (ratio >= 0.9) {
    return "critical";
  }

  if (ratio >= 0.7) {
    return "high";
  }

  if (ratio >= 0.45) {
    return "medium";
  }

  return "low";
}

function pressureSummary(input: {
  cashPressure: PressureLevel;
  staffPressure: PressureLevel;
  leaderPressure: PressureLevel;
}) {
  if (input.leaderPressure === "critical") {
    return "Plán prakticky vyčerpá čas lídra. Další osobní akce už nebude realistická.";
  }

  if (input.staffPressure === "critical") {
    return "Štáb je téměř plně vytížený. Další akce by vytlačila jiné priority.";
  }

  if (input.cashPressure === "critical") {
    return "Plán spotřebuje téměř všechny dostupné finance.";
  }

  if (input.leaderPressure === "high" || input.staffPressure === "high") {
    return "Plán je proveditelný, ale výrazně omezuje kapacitu pro další reakce během týdne.";
  }

  if (input.cashPressure === "high") {
    return "Plán je finančně náročný a ponechává jen malou rezervu.";
  }

  if (
    input.leaderPressure === "medium" ||
    input.staffPressure === "medium" ||
    input.cashPressure === "medium"
  ) {
    return "Plán využívá významnou část zdrojů, ale stále ponechává prostor pro změnu.";
  }

  return "Plán ponechává dostatečnou rezervu financí, štábu i času lídra.";
}

function campaignProgress(state: GameState) {
  const finalWeek = Math.max(1, state.rules.finalWeek);

  return clamp(state.week / finalWeek, 0, 1);
}

function dedupePriorities(priorities: WeeklyPriority[]) {
  const seen = new Set<string>();

  return priorities.filter((priority) => {
    if (seen.has(priority.id)) {
      return false;
    }

    seen.add(priority.id);
    return true;
  });
}

function issueLabel(state: GameState, issueId: ProgramIssueId) {
  const programIssue = state.issueLayer.issues.find(
    (issue) => issue.id === issueId,
  );

  if (programIssue) {
    return programIssue.shortName ?? programIssue.name;
  }

  return ISSUE_LABELS[issueId as IssueId] ?? issueId;
}

function regionLabel(state: GameState, regionId: RegionId) {
  return (
    state.regions.find((region) => region.id === regionId)?.name ?? regionId
  );
}

function partyLabel(state: GameState, partyId: PartyId) {
  return (
    state.parties.find((party) => party.id === partyId)?.shortName ?? partyId
  );
}

function formatMediaFormat(format: MediaInvitation["format"]) {
  switch (format) {
    case "debate":
      return "debata";
    case "duel":
      return "duel";
    case "interview":
      return "rozhovor";
    case "podcast":
      return "podcast";
    case "regional":
      return "regionální rozhovor";
    case "expertPanel":
    case "panel":
      return "panelová diskuse";
    case "influencer":
      return "online vystoupení";
    case "crisisInterview":
      return "krizový rozhovor";
    case "school":
      return "setkání ve škole";
    case "press":
      return "tiskové vystoupení";
    default:
      return format;
  }
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function round(value: number) {
  return Math.round(value * 1000) / 1000;
}
