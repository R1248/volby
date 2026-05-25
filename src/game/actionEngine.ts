import { campaignActionsV2 } from './campaignActionsV2';
import {
  applyIdeologicalInertia,
  deriveLatentFromIssues,
  recalculateIssueLayer,
} from './issueEngine';
import { createIssueLayerState } from './issueSeed';
import type { CampaignPhase } from './actions/actionTypes';
import type { ProgramIssueId } from './issueTypes';
import type {
  CampaignActionV2,
  CampaignTurnoutModifier,
  GameState,
  LatentDimension8D,
  LatentVector8D,
  PartyId,
  PlannedAction,
  ReputationVector,
  TargetedModifier,
} from './types';

export type CampaignActionV2Result = {
  action?: CampaignActionV2;
  actionEffects: string[];
  handled: boolean;
  ok: boolean;
  riskNotes: string[];
};

export function resolveCampaignActionV2(state: GameState, plannedAction: PlannedAction) {
  return (state.campaignActionsV2 ?? campaignActionsV2).find((action) => action.id === plannedAction.actionV2Id);
}

export function getCampaignPhase(currentWeek: number, finalWeek: number): CampaignPhase {
  if (currentWeek >= finalWeek) return 'election_day';
  const weeksToElection = finalWeek - currentWeek;
  if (weeksToElection <= 1) return 'final';
  if (weeksToElection <= 4) return 'late';
  if (currentWeek / finalWeek < 0.45) return 'early';
  return 'mid';
}

export function getCampaignTimingMultipliers(actionId: string, currentWeek: number, finalWeek: number) {
  const phase = getCampaignPhase(currentWeek, finalWeek);
  const isLate = phase === 'late' || phase === 'final' || phase === 'election_day';
  const isFinal = phase === 'final' || phase === 'election_day';
  const isOutdoor = actionId === 'billboardCampaign' || actionId === 'citylightCampaign';
  const isLeak = actionId === 'fabricatedScandal' || actionId === 'falseAccusation' || actionId === 'kompromatLeak';

  return {
    awareness: isOutdoor ? (phase === 'early' ? 1.1 : phase === 'mid' ? 1 : 0.72) : 1,
    persuasion: isLeak && isLate ? 1.22 : 1,
    risk: isLeak && isLate ? 1.28 : 1,
    turnout:
      actionId === 'gotvOperation'
        ? isFinal
          ? 1.45
          : isLate
            ? 1.18
            : 0.62
        : actionId === 'leaderMobilizationAppeal'
          ? isFinal
            ? 1.35
            : isLate
              ? 1.16
              : 0.78
          : 1,
    phase,
  };
}

export function previewCampaignActionV2(state: GameState, plannedAction: PlannedAction) {
  const action = resolveCampaignActionV2(state, plannedAction);
  if (!action) {
    return undefined;
  }

  const runtime = state.partyRuntime.player;
  const precisionPenalty =
    action.preview.precisionRequired === 'seniorAdvisor'
      ? 0.18
      : action.preview.precisionRequired === 'focusGroup'
      ? 0.12
      : action.preview.precisionRequired === 'poll'
      ? 0.08
      : 0.03;
  const uncertainty = clamp(precisionPenalty - runtime.informationQuality * 0.08, 0.02, 0.2);

  return {
    action,
    label: `${action.preview.shortEffectLabel ?? 'Strukturovany dopad'} (nejistota ${(uncertainty * 100).toFixed(0)} %)`,
    risk: action.preview.riskLabel ?? riskLabel(action),
  };
}

export function applyCampaignActionV2(state: GameState, plannedAction: PlannedAction): CampaignActionV2Result {
  const action = resolveCampaignActionV2(state, plannedAction);
  const actionEffects: string[] = [];
  const riskNotes: string[] = [];

  if (!action) {
    return { actionEffects, handled: false, ok: false, riskNotes };
  }

  const validation = validateCampaignActionV2(state, action, plannedAction);
  if (!validation.ok) {
    riskNotes.push(`${action.name} nebyla provedena: ${validation.reason}`);
    return { action, actionEffects, handled: true, ok: false, riskNotes };
  }

  const runtime = state.partyRuntime.player;
  ensureIssueLayer(state);
  ensureRuntimeDefaults(state);

  runtime.cash = round(runtime.cash - action.cost);
  if (action.legality === 'illegal') {
    runtime.graySpend = round(runtime.graySpend + action.cost);
  } else {
    runtime.legalSpend = round(runtime.legalSpend + action.cost);
  }
  runtime.staffUsed = clamp((runtime.staffUsed ?? 0) + action.staffCost, 0, runtime.staffCap ?? 6);
  runtime.leader.timeUsed = clamp(runtime.leader.timeUsed + action.leaderTimeCost, 0, runtime.leader.timeCap + 1);
  runtime.leader.fatigue = clamp(
    runtime.leader.fatigue + action.fatigueCost + action.ethicalRisk * 0.04 + action.risks.scandal * 0.03,
    0,
    1,
  );

  if (action.cooldownWeeks) {
    runtime.actionCooldowns = {
      ...(runtime.actionCooldowns ?? {}),
      [action.id]: state.week + action.cooldownWeeks,
    };
  }

  const resolvedAction = applyCampaignTiming(state, action);

  applyFieldEffects(state, resolvedAction);
  applyIssueEffects(state, plannedAction, resolvedAction);
  runtime.informationQuality = clamp(runtime.informationQuality + (resolvedAction.effects.informationQualityShift ?? 0), 0, 1);
  applyReputationEffects(runtime.reputation, resolvedAction.effects.reputationShift);
  applyOrganizationEffects(state, plannedAction, resolvedAction);
  applyCoalitionEffects(state, plannedAction, resolvedAction);
  applyRiskEffects(state, plannedAction, resolvedAction);
  applyTurnoutPreparation(state, resolvedAction);

  const summary = summarizeAction(resolvedAction);
  actionEffects.push(summary);
  if (resolvedAction.legality !== 'clean') {
    riskNotes.push(
      `${resolvedAction.name}: ${resolvedAction.legality === 'illegal' ? 'ilegalni abstraktni mechanika' : 'seda zona'} zvysila expozici, backlash a koalicni toxicitu.`,
    );
  }

  addActionFeedback(state, resolvedAction);
  return { action, actionEffects, handled: true, ok: true, riskNotes };
}

function validateCampaignActionV2(state: GameState, action: CampaignActionV2, plannedAction: PlannedAction) {
  const runtime = state.partyRuntime.player;
  ensureRuntimeDefaults(state);

  if (runtime.cash < action.cost) {
    return { ok: false, reason: 'rozpocet nestaci' };
  }

  if (action.legality !== 'illegal' && runtime.legalSpend + action.cost > state.rules.legalSpendCap) {
    return { ok: false, reason: 'legal spend limit nestaci' };
  }

  const totalSpend = runtime.legalSpend + runtime.graySpend + runtime.thirdPartySpend + action.cost;
  if (totalSpend > state.rules.spendCap) {
    return { ok: false, reason: 'celkovy spend cap by byl prekrocen' };
  }

  if ((runtime.staffUsed ?? 0) + action.staffCost > (runtime.staffCap ?? 6)) {
    return { ok: false, reason: 'stabni kapacita nestaci' };
  }

  if (runtime.leader.timeUsed + action.leaderTimeCost > runtime.leader.timeCap) {
    return { ok: false, reason: 'cas lidra nestaci' };
  }

  const cooldownUntil = runtime.actionCooldowns?.[action.id] ?? 0;
  if (cooldownUntil > state.week) {
    return { ok: false, reason: `akce je v cooldownu do tydne ${cooldownUntil}` };
  }

  if (action.target.scope === 'region' && !plannedAction.targetRegionId) {
    return { ok: false, reason: 'chybi cilovy region' };
  }

  return { ok: true };
}

function applyCampaignTiming(state: GameState, action: CampaignActionV2): CampaignActionV2 {
  const timing = getCampaignTimingMultipliers(action.id, state.week, state.rules.finalWeek);
  if (timing.awareness === 1 && timing.persuasion === 1 && timing.turnout === 1 && timing.risk === 1) {
    return action;
  }

  return {
    ...action,
    effects: {
      ...action.effects,
      counterMobilizationRiskShift: scaleOptional(action.effects.counterMobilizationRiskShift, timing.risk),
      demobilizationModifier: action.effects.demobilizationModifier
        ? {
            ...action.effects.demobilizationModifier,
            amount: round(action.effects.demobilizationModifier.amount * timing.persuasion),
          }
        : undefined,
      fieldAmplitude: scaleOptional(action.effects.fieldAmplitude, Math.max(timing.awareness, timing.persuasion)),
      legalExposureShift: scaleOptional(action.effects.legalExposureShift, timing.risk),
      mediaVulnerabilityShift: scaleOptional(action.effects.mediaVulnerabilityShift, timing.risk),
      scandalRiskShift: scaleOptional(action.effects.scandalRiskShift, timing.risk),
      turnoutModifier: action.effects.turnoutModifier
        ? {
            ...action.effects.turnoutModifier,
            amount: round(action.effects.turnoutModifier.amount * timing.turnout),
          }
        : undefined,
    },
    preview: {
      ...action.preview,
      shortEffectLabel: `${action.preview.shortEffectLabel ?? action.name}; faze ${timing.phase}`,
    },
    risks: {
      ...action.risks,
      backlash: clamp(action.risks.backlash * timing.risk, 0, 1),
      legal: clamp(action.risks.legal * timing.risk, 0, 1),
      media: clamp(action.risks.media * timing.risk, 0, 1),
      scandal: clamp(action.risks.scandal * timing.risk, 0, 1),
    },
  };
}

function applyFieldEffects(state: GameState, action: CampaignActionV2) {
  const runtime = state.partyRuntime.player;
  const field = runtime.field;
  field.center8D = field.center8D ?? completeLatentVector(field.latentCenter ?? field.center);
  field.width8D = field.width8D ?? completeLatentVector({ ...field.width, establishment: 0.74, globalism: 0.72, green: 0.68, ukraine: 0.66 });

  if (action.effects.fieldAmplitude) {
    field.amplitude = clamp(field.amplitude + action.effects.fieldAmplitude, 0.35, 1.8);
  }

  for (const [dimension, amount] of Object.entries(action.effects.latentCenterShift ?? {}) as [LatentDimension8D, number][]) {
    field.center8D[dimension] = clamp(field.center8D[dimension] + amount, -1, 1);
  }

  for (const [dimension, amount] of Object.entries(action.effects.latentWidthShift ?? {}) as [LatentDimension8D, number][]) {
    field.width8D[dimension] = clamp(field.width8D[dimension] + amount, 0.25, 1.4);
  }

  field.center = {
    authority: field.center8D.authority,
    culture: field.center8D.culture,
    econ: field.center8D.econ,
  };
  field.width = {
    authority: field.width8D.authority,
    culture: field.width8D.culture,
    econ: field.width8D.econ,
  };
  field.latentCenter = field.center8D;
}

function applyIssueEffects(state: GameState, plannedAction: PlannedAction, action: CampaignActionV2) {
  if (
    !action.effects.issuePositionShift &&
    !action.effects.issueSalienceShift &&
    !action.effects.framingChange &&
    !action.effects.mediaVulnerabilityShift
  ) {
    return;
  }

  const runtime = state.partyRuntime.player;
  const currentPositions = { ...state.issueLayer.player.currentIssuePositions };

  const issuePositionShift = resolveIssueRecord(action.effects.issuePositionShift, plannedAction);
  const issueSalienceShift = resolveIssueRecord(action.effects.issueSalienceShift, plannedAction);
  const framingChange = resolveIssueRecord(action.effects.framingChange, plannedAction);

  for (const issueId of affectedIssues(issuePositionShift, issueSalienceShift, framingChange)) {
    const current = currentPositions[issueId];
    if (!current) {
      continue;
    }

    const requestedFraming = framingChange?.[issueId];
    const framingExists = requestedFraming && state.issueLayer.framings.some((framing) => framing.id === requestedFraming && framing.issueId === issueId);
    currentPositions[issueId] = {
      ...current,
      framingId: framingExists ? requestedFraming : current.framingId,
      position: clamp(current.position + (issuePositionShift?.[issueId] ?? 0), -2, 2),
      salience: Math.round(clamp(current.salience + (issueSalienceShift?.[issueId] ?? 0), 0, 4)),
    };
  }

  const recalculated = recalculateIssueLayer(
    {
      ...state.issueLayer,
      player: {
        ...state.issueLayer.player,
        currentIssuePositions: currentPositions,
        mediaVulnerability: clamp(
          state.issueLayer.player.mediaVulnerability + (action.effects.mediaVulnerabilityShift ?? 0),
          0,
          1,
        ),
      },
    },
    runtime.field.flexibility,
  );

  state.issueLayer = recalculated;
  applyIssueLayerToPlayerField(state);
}

function applyIssueLayerToPlayerField(state: GameState) {
  const runtime = state.partyRuntime.player;
  const field = runtime.field;
  field.center8D = field.center8D ?? completeLatentVector(field.latentCenter ?? field.center);

  const derived = deriveLatentFromIssues(
    state.issueLayer.player.currentIssuePositions,
    state.issueLayer.issues,
    state.issueLayer.framings,
  );
  const nextLatent = applyIdeologicalInertia(field.center8D, derived, field.flexibility);
  field.center8D = completeLatentVector(nextLatent);
  field.center = {
    authority: field.center8D.authority,
    culture: field.center8D.culture,
    econ: field.center8D.econ,
  };
  field.latentCenter = field.center8D;
  runtime.reputation.consistency = clamp(
    runtime.reputation.consistency + (state.issueLayer.player.coherenceBreakdown.coherenceScore - 62) / 6000,
    0,
    1,
  );
}

function applyReputationEffects(reputation: ReputationVector, shift?: Partial<ReputationVector>) {
  if (!shift) {
    return;
  }

  for (const [key, amount] of Object.entries(shift) as [keyof ReputationVector, number][]) {
    reputation[key] = clamp(reputation[key] + amount, 0, 1);
  }
}

function applyOrganizationEffects(state: GameState, plannedAction: PlannedAction, action: CampaignActionV2) {
  const amount = action.effects.regionOrganizationShift;
  if (!amount) {
    return;
  }

  const runtime = state.partyRuntime.player;
  if (plannedAction.targetRegionId) {
    runtime.organization[plannedAction.targetRegionId] = clamp((runtime.organization[plannedAction.targetRegionId] ?? 0.25) + amount, 0, 1);
    return;
  }

  for (const region of state.regions) {
    runtime.organization[region.id] = clamp((runtime.organization[region.id] ?? 0.25) + amount * 0.35, 0, 1);
  }
}

function applyCoalitionEffects(state: GameState, plannedAction: PlannedAction, action: CampaignActionV2) {
  const amount = action.effects.coalitionRelationShift;
  if (!amount) {
    return;
  }

  const targetPartyId = plannedAction.targetPartyId ?? 'civicFront';
  const relation = findRelation(state, 'player', targetPartyId);
  if (!relation) {
    return;
  }

  relation.personalTrust = clamp(relation.personalTrust + amount, 0, 1);
  relation.publicAcceptability = clamp(relation.publicAcceptability + amount * 0.65, 0, 1);
  relation.recentConflict = clamp(relation.recentConflict - amount, 0, 1);
  relation.scandalBarrier = clamp(relation.scandalBarrier + action.risks.coalitionToxicity * 0.08 - Math.max(0, amount) * 0.04, 0, 1);
  relation.totalCoalitionPotential = clamp(
    relation.publicAcceptability + relation.ideologicalCompatibility + relation.personalTrust - relation.recentConflict - relation.scandalBarrier,
    0,
    1,
  );
}

function applyRiskEffects(state: GameState, plannedAction: PlannedAction, action: CampaignActionV2) {
  const runtime = state.partyRuntime.player;
  runtime.scandalRisk = clamp(
    runtime.scandalRisk +
      (action.effects.scandalRiskShift ?? 0) +
      action.risks.scandal * 0.025 +
      action.risks.legal * 0.015,
    0,
    1,
  );
  runtime.mediaVulnerability = clamp((runtime.mediaVulnerability ?? 0) + (action.effects.mediaVulnerabilityShift ?? 0) + action.risks.media * 0.015, 0, 1);
  runtime.legalExposure = clamp((runtime.legalExposure ?? 0) + (action.effects.legalExposureShift ?? 0) + action.risks.legal * 0.02, 0, 1);

  if (action.effects.counterMobilizationRiskShift || action.risks.counterMobilization > 0.18) {
    addTurnoutModifier(state, action, {
      actionId: action.id,
      amount: action.effects.counterMobilizationRiskShift ?? action.risks.counterMobilization * 0.02,
      expiresWeek: state.week + 3,
      kind: 'counterMobilization',
      target: {
        scope: plannedAction.targetRegionId ? 'region' : action.target.scope,
        amount: action.effects.counterMobilizationRiskShift ?? action.risks.counterMobilization * 0.02,
        partyIds: plannedAction.targetPartyId ? [plannedAction.targetPartyId] : undefined,
        regionIds: plannedAction.targetRegionId ? [plannedAction.targetRegionId] : undefined,
      },
      weekApplied: state.week,
    });
  }

  if (action.legality === 'illegal') {
    const scandalId = `${action.id}-${state.week}-${state.scandals.length}`;
    state.scandals.push({
      evidence: clamp(0.35 + action.risks.legal * 0.4, 0, 1),
      id: scandalId,
      legalExposure: clamp(action.risks.legal, 0, 1),
      resolved: false,
      sourcePartyId: 'player',
      targetPartyId: 'player',
      title: `Riziko odhaleni: ${action.name}`,
      traceability: clamp(0.35 + action.risks.media * 0.35, 0, 1),
      truthStatus: 'unknown',
      severity: clamp(0.25 + action.risks.backlash * 0.4, 0, 1),
      virality: clamp(0.25 + action.risks.media * 0.45, 0, 1),
    });
  }
}

function applyTurnoutPreparation(state: GameState, action: CampaignActionV2) {
  if (action.effects.turnoutModifier) {
    addTurnoutModifier(state, action, createTurnoutState(state, action, 'turnout', action.effects.turnoutModifier));
  }

  if (action.effects.demobilizationModifier) {
    addTurnoutModifier(state, action, createTurnoutState(state, action, 'demobilization', action.effects.demobilizationModifier));
  }
}

function createTurnoutState(
  state: GameState,
  action: CampaignActionV2,
  kind: CampaignTurnoutModifier['kind'],
  modifier: TargetedModifier,
): CampaignTurnoutModifier {
  return {
    actionId: action.id,
    amount: modifier.amount,
    expiresWeek: state.week + 4,
    kind,
    target: modifier,
    weekApplied: state.week,
  };
}

function addTurnoutModifier(state: GameState, action: CampaignActionV2, modifier: CampaignTurnoutModifier) {
  // TODO(v0.6 turnout): consume these modifiers in a separated turnout-probability stage.
  // The current support engine still mixes abstention into the utility denominator.
  state.turnoutModifiers = [
    ...(state.turnoutModifiers ?? []).filter((item) => item.expiresWeek >= state.week),
    {
      ...modifier,
      actionId: action.id,
      amount: clamp(modifier.amount, -0.08, 0.08),
      target: {
        ...modifier.target,
        amount: clamp(modifier.target.amount, -0.08, 0.08),
      },
    },
  ].slice(-20);
}

function addActionFeedback(state: GameState, action: CampaignActionV2) {
  state.issueLayer.feedbackLog = [
    {
      id: `action-v2-${state.week}-${action.id}`,
      message: `${action.preview.shortEffectLabel ?? 'Akce'}; riziko: ${action.preview.riskLabel ?? riskLabel(action)}.`,
      metrics: {
        coherence: state.issueLayer.player.coherenceBreakdown.coherenceScore,
        core: state.issueLayer.player.coreLoyalty,
        legibility: state.issueLayer.player.programLegibility,
        media: state.issueLayer.player.mediaVulnerability,
        swing: state.issueLayer.player.swingAppeal,
      },
      title: action.name,
      week: state.week,
    },
    ...state.issueLayer.feedbackLog,
  ].slice(0, 8);
}

function affectedIssues(
  issuePositionShift?: Partial<Record<ProgramIssueId, number>>,
  issueSalienceShift?: Partial<Record<ProgramIssueId, number>>,
  framingChange?: Partial<Record<ProgramIssueId, string>>,
): ProgramIssueId[] {
  return Array.from(
    new Set([
      ...Object.keys(issuePositionShift ?? {}),
      ...Object.keys(issueSalienceShift ?? {}),
      ...Object.keys(framingChange ?? {}),
    ]),
  );
}

function resolveIssueRecord<T>(record: Partial<Record<ProgramIssueId, T>> | undefined, plannedAction: PlannedAction) {
  if (!record) {
    return undefined;
  }

  const targetIssueId = plannedAction.targetProgramIssueId ?? plannedAction.targetIssueId ?? 'housing';
  return Object.fromEntries(Object.entries(record).map(([issueId, value]) => [issueId === 'target' ? targetIssueId : issueId, value])) as Partial<
    Record<ProgramIssueId, T>
  >;
}

function summarizeAction(action: CampaignActionV2) {
  const parts = [
    action.preview.shortEffectLabel ?? action.name,
    action.effects.informationQualityShift ? 'zpresnila informace' : undefined,
    action.effects.regionOrganizationShift ? 'zmenila regionalni organizaci' : undefined,
    action.effects.reputationShift ? 'upravila reputaci' : undefined,
    action.effects.issueSalienceShift || action.effects.issuePositionShift ? 'upravila issue vrstvu' : undefined,
    action.effects.scandalRiskShift || action.effects.legalExposureShift ? 'zmenila rizikovou expozici' : undefined,
  ].filter(Boolean);

  return `${action.name}: ${parts.join(', ')}.`;
}

function riskLabel(action: CampaignActionV2) {
  const maxRisk = Math.max(...Object.values(action.risks));
  if (action.legality === 'illegal' || maxRisk >= 0.7) {
    return 'Extremni riziko';
  }
  if (action.legality === 'gray' || maxRisk >= 0.3) {
    return 'Vysoke riziko';
  }
  if (maxRisk >= 0.12) {
    return 'Stredni riziko';
  }
  return 'Nizke riziko';
}

function ensureIssueLayer(state: GameState) {
  if (!state.issueLayer) {
    state.issueLayer = createIssueLayerState();
  }
}

function ensureRuntimeDefaults(state: GameState) {
  const runtime = state.partyRuntime.player;
  runtime.actionCooldowns = runtime.actionCooldowns ?? {};
  runtime.legalExposure = clamp(runtime.legalExposure ?? 0, 0, 1);
  runtime.mediaVulnerability = clamp(runtime.mediaVulnerability ?? state.issueLayer?.player?.mediaVulnerability ?? 0, 0, 1);
  runtime.staffCap = runtime.staffCap ?? 6;
  runtime.staffUsed = runtime.staffUsed ?? 0;
}

function findRelation(state: GameState, partyA: PartyId, partyB: PartyId) {
  return state.coalitionRelations.find(
    (relation) =>
      (relation.partyA === partyA && relation.partyB === partyB) ||
      (relation.partyA === partyB && relation.partyB === partyA),
  );
}

function completeLatentVector(vector: Partial<Record<string, number>>): LatentVector8D {
  return {
    authority: clamp(vector.authority ?? 0, -1, 1),
    culture: clamp(vector.culture ?? 0, -1, 1),
    econ: clamp(vector.econ ?? 0, -1, 1),
    establishment: clamp(vector.establishment ?? 0, -1, 1),
    globalism: clamp(vector.globalism ?? 0, -1, 1),
    green: clamp(vector.green ?? 0, -1, 1),
    ukraine: clamp(vector.ukraine ?? 0, -1, 1),
  };
}

export function clampPreparedTurnoutModifier(value: number) {
  return clamp(value, -0.08, 0.08);
}

function scaleOptional(value: number | undefined, multiplier: number) {
  return value === undefined ? undefined : round(value * multiplier);
}

// TODO(v0.6 turnout): replace baselineAbstain-in-denominator support resolution with:
// eligibleWeight * turnoutProbability * utility_i / sum(partyUtilities).
// CampaignActionV2 already stores turnout and demobilization modifiers separately so that migration
// can happen without changing the action catalog again.
export function preparedTurnoutProbability(baseTurnout: number, regionalModifier: number, modifiers: CampaignTurnoutModifier[] = []) {
  const modifierSum = modifiers.reduce((sum, modifier) => sum + clampPreparedTurnoutModifier(modifier.amount), 0);
  return clamp(baseTurnout + regionalModifier + modifierSum, 0.22, 0.92);
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
