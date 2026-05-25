import { analyticsActionTemplates } from './analyticsCatalog';
import { campaignActionTemplates, type CampaignActionTemplate } from './campaignActionCatalog';
import { eventResponseTemplates } from './eventResponseCatalog';
import { mediaOpportunityTemplates } from './mediaOpportunityCatalog';
import { peopleOpsTemplates } from './peopleOpsCatalog';
import { programMandateTemplates } from './programMandateCatalog';
import type { ActionTarget } from './actions/actionTypes';
import type { CampaignActionCategory, CampaignActionTargetScope, CampaignActionV2, LatentDimension8D } from './types';

const categoryMap: Record<string, CampaignActionCategory> = {
  ads: 'ads',
  allies: 'ally',
  blackOps: 'blackOps',
  digital: 'digital',
  field: 'field',
  grayZone: 'grayZone',
  mobilization: 'turnout',
  negative: 'negative',
};

const targetMap: Record<ActionTarget, CampaignActionTargetScope> = {
  allyEcosystem: 'national',
  coalitionPartner: 'opponent',
  issue: 'issue',
  leader: 'leader',
  national: 'national',
  opponent: 'opponent',
  region: 'region',
  segment: 'segment',
};

export const campaignActionsV2: CampaignActionV2[] = campaignActionTemplates.map(toCampaignActionV2);

export {
  analyticsActionTemplates,
  campaignActionTemplates,
  eventResponseTemplates,
  mediaOpportunityTemplates,
  peopleOpsTemplates,
  programMandateTemplates,
};

export function campaignActionV2ById(actionId: string) {
  return campaignActionsV2.find((action) => action.id === actionId);
}

function toCampaignActionV2(template: CampaignActionTemplate): CampaignActionV2 {
  const risks = mapRisks(template);
  const targetScope = pickTargetScope(template);

  return {
    id: template.id,
    name: template.name,
    description: template.description,
    category: mapCategory(template),
    placement: template.placement,
    availability: template.availability,
    legality: template.legality,
    ethicalRisk: template.ethicalRisk,
    cost: round(template.cost.money),
    staffCost: round((template.cost.centralStaffHours + template.cost.regionalStaffHours) / 40),
    leaderTimeCost: round(template.cost.leaderHours / 40),
    fatigueCost: round(template.cost.fatigue),
    cooldownWeeks: template.cost.durationWeeks > 1 ? template.cost.durationWeeks : undefined,
    target: {
      scope: targetScope,
      optional: template.allowedTargets.map((target) => targetMap[target]),
      required: template.requiredTargets.map((target) => targetMap[target]),
    },
    effects: mapEffects(template, risks, targetScope),
    risks,
    preview: {
      visibleToPlayer: true,
      precisionRequired: precisionFor(template),
      shortEffectLabel: shortEffectLabel(template),
      riskLabel: riskLabel(template.legality, risks),
    },
  };
}

function mapCategory(template: CampaignActionTemplate): CampaignActionCategory {
  if (template.legality === 'illegal') {
    return 'blackOps';
  }

  if (template.legality === 'gray' || template.tags.includes('grayZone')) {
    return 'grayZone';
  }

  return categoryMap[template.category] ?? 'field';
}

function pickTargetScope(template: CampaignActionTemplate): CampaignActionTargetScope {
  const required = template.requiredTargets[0];
  if (required) {
    return targetMap[required];
  }

  const preferred = (['national', 'opponent', 'issue', 'region', 'segment'] as ActionTarget[]).find((target) =>
    template.allowedTargets.includes(target),
  );
  return preferred ? targetMap[preferred] : 'national';
}

function mapEffects(
  template: CampaignActionTemplate,
  risks: CampaignActionV2['risks'],
  targetScope: CampaignActionTargetScope,
): CampaignActionV2['effects'] {
  const base = template.effects;
  const awareness = base.awareness ?? 0;
  const persuasion = base.persuasion ?? 0;
  const turnout = base.turnout ?? 0;
  const demobilization = base.demobilization ?? 0;
  const effects: CampaignActionV2['effects'] = {};

  const fieldAmplitude = awareness * 0.35 + Math.max(0, persuasion) * 0.55;
  if (fieldAmplitude !== 0) {
    effects.fieldAmplitude = round(fieldAmplitude);
  }

  effects.issueSalienceShift = scaleRecord(base.issueSalience, 10);
  effects.issuePositionShift = scaleRecord(base.issuePosition, 2);
  effects.latentCenterShift = filterLatent(base.latentShift);
  effects.reputationShift = {
    ...defaultReputationShift(template),
    ...filterReputation(base.reputation),
  };
  effects.informationQualityShift = infoQualityShift(base);
  effects.regionOrganizationShift = sumRecord(base.organization);
  effects.coalitionRelationShift = sumRecord(base.coalition);

  if (turnout !== 0 && template.tags.includes('demobilization')) {
    effects.demobilizationModifier = {
      amount: -Math.abs(clamp(turnout, -0.08, 0.08)),
      scope: targetScope === 'national' ? 'opponent' : targetScope,
    };
  } else if (turnout !== 0) {
    effects.turnoutModifier = {
      amount: clamp(turnout, -0.08, 0.08),
      scope: targetScope,
    };
  }

  if (demobilization !== 0) {
    effects.demobilizationModifier = {
      amount: -Math.abs(clamp(demobilization, -0.08, 0.08)),
      scope: targetScope === 'national' ? 'opponent' : targetScope,
    };
  }

  if (risks.counterMobilization > 0.14) {
    effects.counterMobilizationRiskShift = round(risks.counterMobilization * 0.02);
  }

  if (risks.media > 0.08 || awareness) {
    effects.mediaVulnerabilityShift = round(risks.media * 0.04);
  }

  if (risks.scandal > 0.08) {
    effects.scandalRiskShift = round(risks.scandal * (template.legality === 'illegal' ? 0.16 : 0.08));
  }

  if (risks.legal > 0.08) {
    effects.legalExposureShift = round(risks.legal * (template.legality === 'illegal' ? 0.18 : 0.08));
  }

  return removeEmptyEffects(effects);
}

function mapRisks(template: CampaignActionTemplate): CampaignActionV2['risks'] {
  const risks = template.risks;
  const legalBase = template.legality === 'illegal' ? 0.82 : template.legality === 'gray' ? 0.08 : 0;
  const scandalBase = template.legality === 'illegal' ? 0.78 : template.legality === 'gray' ? 0.12 : 0;
  const mediaBase = template.legality === 'illegal' ? 0.72 : 0;

  return {
    backlash: clamp(Math.max(risks.mediaBacklash, risks.longTermTrust * 0.8, risks.counterMobilization * 0.55), 0, 1),
    legal: clamp(Math.max(risks.legal, legalBase), 0, 1),
    media: clamp(Math.max(risks.mediaBacklash, mediaBase, risks.detection * 0.6, risks.messageDiscipline), 0, 1),
    scandal: clamp(Math.max(risks.scandal, scandalBase, risks.detection * 0.8), 0, 1),
    counterMobilization: clamp(risks.counterMobilization, 0, 1),
    internalFaction: clamp(Math.max(risks.internalFaction, risks.messageDiscipline * 0.6), 0, 1),
    coalitionToxicity: clamp(risks.coalitionDamage, 0, 1),
  };
}

function infoQualityShift(base: CampaignActionTemplate['effects']) {
  const total = (base.informationQuality ?? 0) + (base.predictionAccuracy ?? 0) * 0.5 + (base.riskDetection ?? 0) * 0.4;
  return total === 0 ? undefined : round(total);
}

function scaleRecord(record: Record<string, number> | undefined, multiplier: number) {
  if (!record) {
    return undefined;
  }

  return Object.fromEntries(Object.entries(record).map(([key, value]) => [key, round(value * multiplier)]));
}

function filterLatent(record: Record<string, number> | undefined) {
  if (!record) {
    return undefined;
  }

  const dimensions = new Set<LatentDimension8D>(['authority', 'culture', 'econ', 'establishment', 'globalism', 'green', 'ukraine']);
  return Object.fromEntries(
    Object.entries(record)
      .filter(([key]) => dimensions.has(key as LatentDimension8D))
      .map(([key, value]) => [key, round(value)]),
  ) as Partial<Record<LatentDimension8D, number>>;
}

function filterReputation(record: Record<string, number> | undefined) {
  if (!record) {
    return undefined;
  }

  const keys = new Set(['authenticity', 'competence', 'consistency', 'controversy', 'integrity', 'trust']);
  return Object.fromEntries(Object.entries(record).filter(([key]) => keys.has(key)));
}

function defaultReputationShift(template: CampaignActionTemplate) {
  if (template.legality === 'illegal') {
    return { controversy: 0.06, integrity: -0.09, trust: -0.04 };
  }

  if (template.legality === 'gray') {
    return { controversy: 0.025, integrity: -0.035, trust: -0.015 };
  }

  if (template.category === 'field') {
    return { authenticity: 0.006 };
  }

  return {};
}

function sumRecord(record: Record<string, number> | undefined) {
  if (!record) {
    return undefined;
  }

  const total = Object.values(record).reduce((sum, value) => sum + value, 0);
  return total === 0 ? undefined : round(total);
}

function removeEmptyEffects(effects: CampaignActionV2['effects']) {
  return Object.fromEntries(
    Object.entries(effects).filter(([, value]) => {
      if (value === undefined) return false;
      if (typeof value === 'number') return value !== 0;
      if (typeof value === 'object') return Object.keys(value).length > 0;
      return true;
    }),
  ) as CampaignActionV2['effects'];
}

function precisionFor(template: CampaignActionTemplate): CampaignActionV2['preview']['precisionRequired'] {
  if (template.legality !== 'clean') return 'seniorAdvisor';
  if (template.tags.includes('personal_contact') || template.tags.includes('mobilization')) return 'none';
  if (template.tags.includes('advertising') || template.tags.includes('digital')) return 'poll';
  return 'focusGroup';
}

function shortEffectLabel(template: CampaignActionTemplate) {
  const effects = [
    template.effects.awareness ? 'viditelnost' : undefined,
    template.effects.persuasion ? 'presvedcovani' : undefined,
    template.effects.turnout ? 'mobilizace' : undefined,
    template.effects.demobilization ? 'demobilizace' : undefined,
    template.effects.organization ? 'organizace' : undefined,
    template.effects.reputation ? 'reputace' : undefined,
    template.effects.issueSalience || template.effects.issuePosition ? 'temata' : undefined,
  ].filter(Boolean);

  return effects.length > 0 ? effects.join(', ') : 'strukturovany dopad';
}

function riskLabel(legality: CampaignActionV2['legality'], risks: CampaignActionV2['risks']) {
  const maxRisk = Math.max(...Object.values(risks));
  if (legality === 'illegal' || maxRisk >= 0.7) return 'Extremni riziko';
  if (legality === 'gray' || maxRisk >= 0.3) return 'Vysoke riziko';
  if (maxRisk >= 0.12) return 'Stredni riziko';
  return 'Nizke riziko';
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function round(value: number) {
  return Math.round(value * 1000) / 1000;
}
