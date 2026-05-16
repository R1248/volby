import type { CampaignEventTarget } from '../model/regionalEnrichment';

export type RegionalCampaignEffectSeed = {
  effects: {
    awarenessDelta?: number;
    issueSalienceDelta?: Record<string, number>;
    partyUtilityDelta?: number;
    trustDelta?: number;
    turnoutDelta?: number;
  };
  id: string;
  name: string;
  target: CampaignEventTarget;
};

export const regionalCampaignEvents: RegionalCampaignEffectSeed[] = [
  {
    effects: {
      awarenessDelta: 0.04,
      issueSalienceDelta: { euIntegration: 0.02, regulation: 0.05, taxes: 0.04 },
      partyUtilityDelta: 0.03,
      trustDelta: 0.02,
    },
    id: 'brno-business-tech-forum',
    name: 'Brno business and technology forum',
    target: {
      educationGroups: ['tertiary'],
      issueAffinityFilter: { greenDeal: [-0.2, 2] },
      krajIds: ['CZ064'],
      latentFilter: { culture: [-1, 0.3], econ: [0, 1], globalism: [0, 1] },
      metroAreas: ['brno'],
      socioEconomicStatus: ['middle', 'high'],
      urbanity: ['large_town', 'metro'],
    },
  },
  {
    effects: {
      awarenessDelta: 0.03,
      issueSalienceDelta: { coalPhaseout: 0.04, energyPrices: 0.06, greenDeal: 0.03 },
      trustDelta: 0.03,
    },
    id: 'ostrava-energy-industry',
    name: 'Ostrava energy and industry meeting',
    target: {
      issueAffinityFilter: { greenDeal: [-2, 0.4] },
      krajIds: ['CZ080'],
      latentFilter: { econ: [-0.5, 0.7] },
      metroAreas: ['ostrava'],
      urbanity: ['large_town', 'metro'],
    },
  },
  {
    effects: {
      awarenessDelta: 0.04,
      issueSalienceDelta: { euIntegration: 0.03, greenDeal: 0.03, housing: 0.05, sameSexMarriage: 0.03 },
    },
    id: 'praha-liberal-urban',
    name: 'Praha liberal urban event',
    target: {
      educationGroups: ['tertiary'],
      issueAffinityFilter: { greenDeal: [0, 2] },
      krajIds: ['CZ010'],
      latentFilter: { culture: [-1, 0], establishment: [0, 1], globalism: [0, 1] },
      metroAreas: ['praha'],
      urbanity: ['large_town', 'metro'],
    },
  },
  {
    effects: {
      issueSalienceDelta: { energyPrices: 0.04, greenDeal: 0.03, nationalSovereignty: 0.02, pensions: 0.04 },
      trustDelta: 0.03,
      turnoutDelta: 0.02,
    },
    id: 'vysocina-rural-meeting',
    name: 'Vysocina rural meeting',
    target: {
      issueAffinityFilter: { greenDeal: [-2, 0.5] },
      krajIds: ['CZ063'],
      urbanity: ['rural', 'town'],
    },
  },
];
