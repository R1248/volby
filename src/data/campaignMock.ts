import type { RegionId } from '@/src/types/region';

export type PartyId = string;

export type Party = {
  color: string;
  id: PartyId;
  name: string;
  shortName: string;
};

export type RegionCampaignData = {
  candidateTrust: number;
  descriptor: string;
  growthPotential: number;
  issues: string[];
  leadingPartyId: PartyId;
  mediaPresence: number;
  organizationStrength: number;
  partySupport: Record<string, number>;
  trend: number;
};

export const campaignSummary = {
  actionsRemaining: 3,
  budget: '12.4M Kč',
  pendingEvents: 2,
  support: 34.8,
  trend: 1.2,
  week: '4/12',
};

export const parties: Party[] = [
  { color: '#174A7C', id: 'player', name: 'Nový Směr', shortName: 'NS' },
  { color: '#C1121F', id: 'civicFront', name: 'Občanská Fronta', shortName: 'OF' },
  { color: '#2F855A', id: 'greenFuture', name: 'Zelená Budoucnost', shortName: 'ZB' },
  { color: '#7C3AED', id: 'laborUnion', name: 'Práce a Solidarita', shortName: 'PS' },
  { color: '#D97706', id: 'regionalVoice', name: 'Hlas Regionů', shortName: 'HR' },
];

const support = (
  player: number,
  civicFront: number,
  greenFuture: number,
  laborUnion: number,
  regionalVoice: number,
): Record<string, number> => ({
  civicFront,
  greenFuture,
  laborUnion,
  player,
  regionalVoice,
});

export const regionCampaignData: Record<RegionId, RegionCampaignData> = {
  praha: {
    candidateTrust: 62,
    descriptor: 'městský region',
    growthPotential: 47,
    issues: ['bydlení', 'doprava', 'inovace', 'bezpečnost'],
    leadingPartyId: 'player',
    mediaPresence: 69,
    organizationStrength: 61,
    partySupport: support(44, 24, 18, 8, 6),
    trend: 1.4,
  },
  stredocesky: {
    candidateTrust: 54,
    descriptor: 'příměstský souboj',
    growthPotential: 58,
    issues: ['doprava', 'školství', 'bydlení', 'pracovní místa'],
    leadingPartyId: 'player',
    mediaPresence: 51,
    organizationStrength: 52,
    partySupport: support(37, 30, 12, 10, 11),
    trend: 0.8,
  },
  jihocesky: {
    candidateTrust: 48,
    descriptor: 'venkov a cestovní ruch',
    growthPotential: 52,
    issues: ['zdravotnictví', 'silnice', 'turismus', 'energie'],
    leadingPartyId: 'civicFront',
    mediaPresence: 42,
    organizationStrength: 43,
    partySupport: support(32, 35, 10, 9, 14),
    trend: -0.3,
  },
  plzensky: {
    candidateTrust: 49,
    descriptor: 'průmyslový příhraniční region',
    growthPotential: 50,
    issues: ['práce', 'průmysl', 'doprava', 'bezpečnost'],
    leadingPartyId: 'player',
    mediaPresence: 44,
    organizationStrength: 39,
    partySupport: support(33, 31, 8, 15, 13),
    trend: 0.5,
  },
  karlovarsky: {
    candidateTrust: 38,
    descriptor: 'příležitost při nízké účasti',
    growthPotential: 66,
    issues: ['zdravotnictví', 'práce', 'bydlení', 'služby'],
    leadingPartyId: 'laborUnion',
    mediaPresence: 34,
    organizationStrength: 34,
    partySupport: support(28, 24, 7, 29, 12),
    trend: 1.1,
  },
  ustecky: {
    candidateTrust: 43,
    descriptor: 'těžký průmysl',
    growthPotential: 61,
    issues: ['práce', 'bezpečnost', 'bydlení', 'energie'],
    leadingPartyId: 'laborUnion',
    mediaPresence: 41,
    organizationStrength: 42,
    partySupport: support(31, 25, 6, 30, 8),
    trend: -0.6,
  },
  liberecky: {
    candidateTrust: 52,
    descriptor: 'vyrovnaný severní region',
    growthPotential: 54,
    issues: ['doprava', 'životní prostředí', 'turismus', 'školství'],
    leadingPartyId: 'player',
    mediaPresence: 48,
    organizationStrength: 46,
    partySupport: support(35, 28, 18, 8, 11),
    trend: 0.7,
  },
  kralovehradecky: {
    candidateTrust: 53,
    descriptor: 'stabilní souboj',
    growthPotential: 49,
    issues: ['zdravotnictví', 'silnice', 'školství', 'práce'],
    leadingPartyId: 'player',
    mediaPresence: 46,
    organizationStrength: 49,
    partySupport: support(36, 31, 11, 10, 12),
    trend: 0.2,
  },
  pardubicky: {
    candidateTrust: 50,
    descriptor: 'dopravní koridor',
    growthPotential: 51,
    issues: ['doprava', 'průmysl', 'bydlení', 'školství'],
    leadingPartyId: 'civicFront',
    mediaPresence: 45,
    organizationStrength: 47,
    partySupport: support(34, 35, 8, 12, 11),
    trend: -0.1,
  },
  vysocina: {
    candidateTrust: 51,
    descriptor: 'venkovský souboj',
    growthPotential: 55,
    issues: ['silnice', 'zdravotnictví', 'zemědělství', 'energie'],
    leadingPartyId: 'player',
    mediaPresence: 39,
    organizationStrength: 45,
    partySupport: support(35, 30, 7, 14, 14),
    trend: 0.6,
  },
  jihomoravsky: {
    candidateTrust: 57,
    descriptor: 'městský růstový region',
    growthPotential: 45,
    issues: ['bydlení', 'inovace', 'doprava', 'vzdělávání'],
    leadingPartyId: 'player',
    mediaPresence: 58,
    organizationStrength: 55,
    partySupport: support(39, 29, 14, 9, 9),
    trend: 1,
  },
  olomoucky: {
    candidateTrust: 48,
    descriptor: 'smíšené bojiště',
    growthPotential: 56,
    issues: ['práce', 'zdravotnictví', 'doprava', 'školství'],
    leadingPartyId: 'civicFront',
    mediaPresence: 43,
    organizationStrength: 44,
    partySupport: support(34, 36, 9, 13, 8),
    trend: -0.4,
  },
  zlinsky: {
    candidateTrust: 51,
    descriptor: 'region malých podniků',
    growthPotential: 46,
    issues: ['podnikání', 'silnice', 'zdravotnictví', 'školství'],
    leadingPartyId: 'player',
    mediaPresence: 42,
    organizationStrength: 48,
    partySupport: support(36, 32, 8, 11, 13),
    trend: 0.3,
  },
  moravskoslezsky: {
    candidateTrust: 42,
    descriptor: 'průmyslový klíčový region',
    growthPotential: 63,
    issues: ['práce', 'průmysl', 'zdravotnictví', 'bezpečnost'],
    leadingPartyId: 'laborUnion',
    mediaPresence: 49,
    organizationStrength: 41,
    partySupport: support(30, 27, 6, 31, 6),
    trend: -0.8,
  },
};
