import { regions as displayRegions } from '../data/regions';
import type { RegionId } from '../types/region';

import { essRegionMixes, essVoterSegments } from './voterSpace.generated';
import { campaignActionsV2 } from './campaignActionsV2';
import { createIssueLayerState } from './issueSeed';
import type {
  ActionType,
  CoalitionRelation,
  EventCard,
  GameRules,
  GameState,
  LatentVector8D,
  LeaderTraits,
  MarketingAdvisor,
  MediaInvitation,
  MediaOutlet,
  PartyId,
  PartyRuntime,
  PartySeed,
  Pollster,
  QuestionSet,
  RegionSeed,
  SegmentId,
  SponsorOffer,
  Vec3,
  VoterSegment,
} from './types';

export const partyIds: PartyId[] = ['player', 'civicFront', 'greenFuture', 'laborUnion', 'regionalVoice'];

const vec = (econ: number, culture: number, authority: number): Vec3 => ({ authority, culture, econ });

const latent8 = (
  econ: number,
  culture: number,
  authority: number,
  establishment: number,
  globalism: number,
  green: number,
  ukraine: number,
): LatentVector8D => ({
  authority,
  culture,
  econ,
  establishment,
  globalism,
  green,
  ukraine,
});

const mediaHabits = (digital = 0.4, tv = 0.4, regional = 0.2) => ({
  ct24: tv,
  metro: digital,
  region: regional,
});

export const legacyVoterSegments: VoterSegment[] = [
  {
    axisSalience: vec(0.7, 1, 0.5),
    education: 'tertiary',
    id: 'urbanProgressives',
    issuePrefs: { climate: -0.8, education: -0.45, housing: -0.5, transport: -0.6 },
    issueSalience: { climate: 0.9, education: 0.55, housing: 0.8, transport: 0.6 },
    mediaHabits: mediaHabits(0.78, 0.34, 0.1),
    name: 'Městští progresivní voliči',
    position: vec(-0.25, -0.85, -0.65),
    scandalSensitivity: 0.9,
    turnoutBase: 0.68,
    volatility: 0.45,
  },
  {
    axisSalience: vec(1, 0.55, 0.45),
    education: 'tertiary',
    id: 'liberalBusiness',
    issuePrefs: { industry: 0.6, taxes: 0.82, transport: 0.3, housing: 0.2 },
    issueSalience: { industry: 0.8, taxes: 0.9, transport: 0.6, housing: 0.5 },
    mediaHabits: mediaHabits(0.65, 0.48, 0.18),
    name: 'Pravicově liberální podnikatelé',
    position: vec(0.78, -0.35, -0.45),
    scandalSensitivity: 0.65,
    turnoutBase: 0.72,
    volatility: 0.35,
  },
  {
    axisSalience: vec(0.65, 0.9, 0.75),
    education: 'secondary',
    id: 'conservativeMiddle',
    issuePrefs: { security: 0.65, healthcare: 0.25, transport: 0.3, education: 0.25 },
    issueSalience: { security: 0.8, healthcare: 0.6, transport: 0.55, education: 0.45 },
    mediaHabits: mediaHabits(0.38, 0.65, 0.32),
    name: 'Konzervativní střední třída',
    position: vec(0.25, 0.7, 0.35),
    scandalSensitivity: 0.7,
    turnoutBase: 0.69,
    volatility: 0.38,
  },
  {
    axisSalience: vec(0.85, 0.45, 0.75),
    education: 'secondary',
    id: 'industrialWorkers',
    issuePrefs: { healthcare: -0.45, industry: -0.2, security: 0.45, taxes: -0.2 },
    issueSalience: { healthcare: 0.7, industry: 0.9, security: 0.55, taxes: 0.45 },
    mediaHabits: mediaHabits(0.3, 0.58, 0.48),
    name: 'Průmysloví zaměstnanci',
    position: vec(-0.72, 0.28, 0.45),
    scandalSensitivity: 0.45,
    turnoutBase: 0.6,
    volatility: 0.62,
  },
  {
    axisSalience: vec(0.9, 0.65, 0.55),
    education: 'secondary',
    id: 'seniorSocial',
    issuePrefs: { healthcare: -0.8, security: 0.35, transport: -0.2 },
    issueSalience: { healthcare: 0.95, security: 0.55, transport: 0.4 },
    mediaHabits: mediaHabits(0.2, 0.82, 0.34),
    name: 'Starší sociálně citliví voliči',
    position: vec(-0.68, 0.42, 0.18),
    scandalSensitivity: 0.68,
    turnoutBase: 0.76,
    volatility: 0.28,
  },
  {
    axisSalience: vec(0.45, 0.7, 1),
    education: 'lower',
    id: 'protestVoters',
    issuePrefs: { security: 0.7, industry: -0.35, housing: -0.4, taxes: -0.35 },
    issueSalience: { security: 0.75, industry: 0.6, housing: 0.5, taxes: 0.45 },
    mediaHabits: mediaHabits(0.48, 0.42, 0.36),
    name: 'Protestní anti-establishment voliči',
    position: vec(-0.2, 0.25, 0.9),
    scandalSensitivity: 0.25,
    turnoutBase: 0.52,
    volatility: 0.8,
  },
  {
    axisSalience: vec(0.75, 0.85, 0.55),
    education: 'tertiary',
    id: 'youngRenters',
    issuePrefs: { housing: -0.9, climate: -0.45, education: -0.5, transport: -0.45 },
    issueSalience: { housing: 1, climate: 0.62, education: 0.6, transport: 0.55 },
    mediaHabits: mediaHabits(0.86, 0.18, 0.12),
    name: 'Mladí nájemníci',
    position: vec(-0.52, -0.58, -0.35),
    scandalSensitivity: 0.72,
    turnoutBase: 0.54,
    volatility: 0.7,
  },
  {
    axisSalience: vec(0.55, 0.95, 0.62),
    education: 'secondary',
    id: 'ruralConservatives',
    issuePrefs: { security: 0.65, transport: -0.25, healthcare: -0.35, climate: 0.25 },
    issueSalience: { security: 0.72, transport: 0.62, healthcare: 0.7, climate: 0.35 },
    mediaHabits: mediaHabits(0.24, 0.62, 0.66),
    name: 'Venkovští konzervativci',
    position: vec(-0.05, 0.82, 0.5),
    scandalSensitivity: 0.58,
    turnoutBase: 0.7,
    volatility: 0.42,
  },
  {
    axisSalience: vec(0.85, 0.42, 0.42),
    education: 'tertiary',
    id: 'publicSector',
    issuePrefs: { healthcare: -0.72, education: -0.78, housing: -0.35, taxes: -0.45 },
    issueSalience: { healthcare: 0.82, education: 0.9, housing: 0.52, taxes: 0.5 },
    mediaHabits: mediaHabits(0.52, 0.62, 0.25),
    name: 'Veřejný sektor a služby',
    position: vec(-0.62, -0.18, -0.2),
    scandalSensitivity: 0.75,
    turnoutBase: 0.66,
    volatility: 0.44,
  },
  {
    axisSalience: vec(0.42, 0.78, 1),
    education: 'secondary',
    id: 'securityHawks',
    issuePrefs: { security: 0.92, industry: 0.28, taxes: 0.2 },
    issueSalience: { security: 1, industry: 0.45, taxes: 0.35 },
    mediaHabits: mediaHabits(0.36, 0.7, 0.3),
    name: 'Bezpečnostně orientovaní voliči',
    position: vec(0.2, 0.58, 0.82),
    scandalSensitivity: 0.5,
    turnoutBase: 0.67,
    volatility: 0.46,
  },
  {
    axisSalience: vec(0.65, 0.58, 0.58),
    education: 'secondary',
    id: 'regionalPragmatists',
    issuePrefs: { transport: -0.65, healthcare: -0.45, industry: 0.1, education: -0.25 },
    issueSalience: { transport: 0.9, healthcare: 0.72, industry: 0.55, education: 0.4 },
    mediaHabits: mediaHabits(0.34, 0.44, 0.78),
    name: 'Regionální pragmatici',
    position: vec(-0.18, 0.25, 0.15),
    scandalSensitivity: 0.55,
    turnoutBase: 0.64,
    volatility: 0.5,
  },
  {
    axisSalience: vec(0.55, 0.55, 0.45),
    education: 'secondary',
    id: 'undecidedCenter',
    issuePrefs: { housing: -0.2, healthcare: -0.25, security: 0.22, transport: 0.05 },
    issueSalience: { housing: 0.52, healthcare: 0.58, security: 0.52, transport: 0.46 },
    mediaHabits: mediaHabits(0.48, 0.48, 0.35),
    name: 'Nerozhodnutý střed',
    position: vec(0.02, 0.05, 0.02),
    scandalSensitivity: 0.62,
    turnoutBase: 0.57,
    volatility: 0.74,
  },
];

export const voterSegments: VoterSegment[] = essVoterSegments;

const mix = (values: Partial<Record<SegmentId, number>>) => values;

export const legacyRegionMixes: Record<RegionId, Partial<Record<SegmentId, number>>> = {
  jihocesky: mix({ ruralConservatives: 0.16, regionalPragmatists: 0.16, seniorSocial: 0.13, conservativeMiddle: 0.12, industrialWorkers: 0.1, publicSector: 0.1, undecidedCenter: 0.09, liberalBusiness: 0.06, protestVoters: 0.05, urbanProgressives: 0.03 }),
  jihomoravsky: mix({ urbanProgressives: 0.15, youngRenters: 0.12, liberalBusiness: 0.12, conservativeMiddle: 0.13, publicSector: 0.1, regionalPragmatists: 0.1, seniorSocial: 0.09, industrialWorkers: 0.08, undecidedCenter: 0.07, ruralConservatives: 0.04 }),
  karlovarsky: mix({ protestVoters: 0.18, industrialWorkers: 0.16, seniorSocial: 0.15, regionalPragmatists: 0.12, ruralConservatives: 0.1, undecidedCenter: 0.09, publicSector: 0.07, conservativeMiddle: 0.06, youngRenters: 0.04, liberalBusiness: 0.03 }),
  kralovehradecky: mix({ conservativeMiddle: 0.15, regionalPragmatists: 0.14, seniorSocial: 0.12, ruralConservatives: 0.12, publicSector: 0.11, liberalBusiness: 0.09, urbanProgressives: 0.08, industrialWorkers: 0.07, undecidedCenter: 0.07, securityHawks: 0.05 }),
  liberecky: mix({ urbanProgressives: 0.12, regionalPragmatists: 0.13, conservativeMiddle: 0.12, publicSector: 0.1, industrialWorkers: 0.1, protestVoters: 0.09, liberalBusiness: 0.09, youngRenters: 0.08, seniorSocial: 0.08, undecidedCenter: 0.09 }),
  moravskoslezsky: mix({ industrialWorkers: 0.21, protestVoters: 0.15, seniorSocial: 0.12, publicSector: 0.1, regionalPragmatists: 0.1, securityHawks: 0.09, conservativeMiddle: 0.08, undecidedCenter: 0.07, youngRenters: 0.05, urbanProgressives: 0.03 }),
  olomoucky: mix({ regionalPragmatists: 0.14, publicSector: 0.13, seniorSocial: 0.12, ruralConservatives: 0.11, industrialWorkers: 0.1, conservativeMiddle: 0.1, youngRenters: 0.08, undecidedCenter: 0.08, urbanProgressives: 0.07, protestVoters: 0.07 }),
  pardubicky: mix({ regionalPragmatists: 0.16, conservativeMiddle: 0.13, publicSector: 0.12, industrialWorkers: 0.11, seniorSocial: 0.1, ruralConservatives: 0.1, liberalBusiness: 0.08, undecidedCenter: 0.08, securityHawks: 0.06, protestVoters: 0.06 }),
  plzensky: mix({ industrialWorkers: 0.14, liberalBusiness: 0.12, conservativeMiddle: 0.12, regionalPragmatists: 0.12, securityHawks: 0.1, seniorSocial: 0.1, publicSector: 0.09, protestVoters: 0.08, urbanProgressives: 0.07, undecidedCenter: 0.06 }),
  praha: mix({ urbanProgressives: 0.24, youngRenters: 0.16, liberalBusiness: 0.16, publicSector: 0.09, conservativeMiddle: 0.09, undecidedCenter: 0.08, securityHawks: 0.05, seniorSocial: 0.05, protestVoters: 0.04, regionalPragmatists: 0.04 }),
  stredocesky: mix({ conservativeMiddle: 0.15, liberalBusiness: 0.12, regionalPragmatists: 0.12, youngRenters: 0.1, publicSector: 0.1, seniorSocial: 0.1, ruralConservatives: 0.09, industrialWorkers: 0.08, undecidedCenter: 0.08, urbanProgressives: 0.06 }),
  ustecky: mix({ industrialWorkers: 0.2, protestVoters: 0.18, seniorSocial: 0.12, securityHawks: 0.1, regionalPragmatists: 0.1, publicSector: 0.08, conservativeMiddle: 0.07, undecidedCenter: 0.07, ruralConservatives: 0.05, youngRenters: 0.03 }),
  vysocina: mix({ ruralConservatives: 0.18, regionalPragmatists: 0.16, seniorSocial: 0.13, conservativeMiddle: 0.12, publicSector: 0.11, industrialWorkers: 0.08, securityHawks: 0.07, undecidedCenter: 0.06, protestVoters: 0.05, liberalBusiness: 0.04 }),
  zlinsky: mix({ ruralConservatives: 0.17, conservativeMiddle: 0.15, regionalPragmatists: 0.14, securityHawks: 0.1, seniorSocial: 0.1, industrialWorkers: 0.09, publicSector: 0.08, liberalBusiness: 0.07, undecidedCenter: 0.06, protestVoters: 0.04 }),
};

const regionMixes: Record<RegionId, Partial<Record<SegmentId, number>>> = essRegionMixes;

const agendas: Record<RegionId, RegionSeed['issueAgendaBase']> = {
  jihocesky: { healthcare: 0.72, transport: 0.62, climate: 0.35, industry: 0.4 },
  jihomoravsky: { housing: 0.68, transport: 0.65, industry: 0.48, education: 0.56 },
  karlovarsky: { healthcare: 0.8, industry: 0.58, housing: 0.52, transport: 0.44 },
  kralovehradecky: { healthcare: 0.68, transport: 0.62, education: 0.45, security: 0.5 },
  liberecky: { transport: 0.66, climate: 0.52, housing: 0.48, industry: 0.42 },
  moravskoslezsky: { industry: 0.92, healthcare: 0.68, security: 0.62, housing: 0.44 },
  olomoucky: { healthcare: 0.66, transport: 0.55, industry: 0.58, education: 0.45 },
  pardubicky: { transport: 0.78, industry: 0.55, housing: 0.42, education: 0.44 },
  plzensky: { industry: 0.76, transport: 0.58, security: 0.55, taxes: 0.4 },
  praha: { climate: 0.72, education: 0.62, housing: 0.95, transport: 0.78 },
  stredocesky: { housing: 0.58, transport: 0.92, healthcare: 0.48, education: 0.45 },
  ustecky: { industry: 0.9, security: 0.72, housing: 0.5, healthcare: 0.54 },
  vysocina: { healthcare: 0.72, transport: 0.66, industry: 0.44, climate: 0.3 },
  zlinsky: { industry: 0.62, healthcare: 0.66, transport: 0.58, taxes: 0.42 },
};

const populationWeights: Record<RegionId, number> = {
  jihocesky: 0.62,
  jihomoravsky: 1.12,
  karlovarsky: 0.28,
  kralovehradecky: 0.52,
  liberecky: 0.42,
  moravskoslezsky: 1.14,
  olomoucky: 0.6,
  pardubicky: 0.49,
  plzensky: 0.56,
  praha: 1.18,
  stredocesky: 1.3,
  ustecky: 0.78,
  vysocina: 0.48,
  zlinsky: 0.55,
};

const urbanity: Record<RegionId, number> = {
  jihocesky: 0.44,
  jihomoravsky: 0.76,
  karlovarsky: 0.46,
  kralovehradecky: 0.48,
  liberecky: 0.56,
  moravskoslezsky: 0.62,
  olomoucky: 0.5,
  pardubicky: 0.46,
  plzensky: 0.55,
  praha: 1,
  stredocesky: 0.62,
  ustecky: 0.5,
  vysocina: 0.34,
  zlinsky: 0.42,
};

const turnoutModifier: Record<RegionId, number> = {
  jihocesky: 0,
  jihomoravsky: 0.04,
  karlovarsky: -0.09,
  kralovehradecky: 0.02,
  liberecky: -0.01,
  moravskoslezsky: -0.06,
  olomoucky: -0.02,
  pardubicky: 0,
  plzensky: -0.01,
  praha: 0.06,
  stredocesky: 0.02,
  ustecky: -0.08,
  vysocina: 0.03,
  zlinsky: 0.01,
};

export const regionSeeds: RegionSeed[] = displayRegions.map((region) => ({
  id: region.id,
  issueAgendaBase: agendas[region.id],
  name: region.name,
  populationWeight: populationWeights[region.id],
  segmentMix: regionMixes[region.id],
  turnoutModifier: turnoutModifier[region.id],
  urbanity: urbanity[region.id],
}));

const leader = (
  charisma: number,
  credibility: number,
  debate: number,
  discipline: number,
  empathy: number,
  knowledge: number,
  stamina: number,
): LeaderTraits => ({
  charisma,
  credibility,
  debate,
  discipline,
  empathy,
  knowledge,
  stamina,
});

export const parties: PartySeed[] = [
  {
    coalitionBase: { civicFront: 0.56, greenFuture: 0.63, laborUnion: 0.42, regionalVoice: 0.5 },
    color: '#174A7C',
    field: { amplitude: 1.08, center: vec(0.18, -0.18, -0.08), flexibility: 0.62, originCenter: vec(0.18, -0.18, -0.08), width: vec(0.72, 0.7, 0.68) },
    id: 'player',
    issueOwnership: { housing: 0.42, transport: 0.45, security: 0.35 },
    issuePositions: { climate: -0.2, education: -0.18, healthcare: -0.1, housing: -0.22, industry: 0.2, security: 0.2, taxes: 0.18, transport: 0.25 },
    leaderName: 'Tereza Novotná',
    leaderTraits: leader(0.68, 0.64, 0.62, 0.7, 0.6, 0.66, 0.58),
    name: 'Nový Směr',
    officeRole: 'opposition',
    organizationBase: { jihomoravsky: 0.55, moravskoslezsky: 0.41, praha: 0.62, stredocesky: 0.54, ustecky: 0.39 },
    playable: true,
    reputation: { authenticity: 0.56, competence: 0.59, consistency: 0.58, controversy: 0.24, integrity: 0.62, trust: 0.58 },
    shortName: 'NS',
    startingCash: 12.4,
    weeklyStaffCap: 3,
    winProfile: 'major',
  },
  {
    coalitionBase: { player: 0.56, greenFuture: 0.3, laborUnion: 0.28, regionalVoice: 0.48 },
    color: '#C1121F',
    field: { amplitude: 1, center: vec(0.56, 0.38, 0.25), flexibility: 0.46, originCenter: vec(0.56, 0.38, 0.25), width: vec(0.6, 0.55, 0.58) },
    id: 'civicFront',
    issueOwnership: { security: 0.62, taxes: 0.55, transport: 0.38 },
    issuePositions: { climate: 0.25, education: 0.1, healthcare: 0.05, housing: 0.28, industry: 0.55, security: 0.62, taxes: 0.72, transport: 0.42 },
    leaderName: 'Pavel Dvořák',
    leaderTraits: leader(0.58, 0.66, 0.6, 0.62, 0.42, 0.64, 0.56),
    name: 'Občanská Fronta',
    officeRole: 'government',
    organizationBase: { jihomoravsky: 0.5, plzensky: 0.55, praha: 0.45, stredocesky: 0.58, ustecky: 0.42, zlinsky: 0.52 },
    playable: false,
    reputation: { authenticity: 0.45, competence: 0.62, consistency: 0.55, controversy: 0.35, integrity: 0.5, trust: 0.5 },
    shortName: 'OF',
    startingCash: 14,
    weeklyStaffCap: 3,
    winProfile: 'major',
  },
  {
    coalitionBase: { player: 0.63, civicFront: 0.3, laborUnion: 0.52, regionalVoice: 0.4 },
    color: '#2F855A',
    field: { amplitude: 0.74, center: vec(-0.35, -0.85, -0.62), flexibility: 0.38, originCenter: vec(-0.35, -0.85, -0.62), width: vec(0.48, 0.5, 0.52) },
    id: 'greenFuture',
    issueOwnership: { climate: 0.86, education: 0.52, housing: 0.38 },
    issuePositions: { climate: -0.9, education: -0.52, healthcare: -0.35, housing: -0.52, industry: -0.35, security: -0.25, taxes: -0.2, transport: -0.4 },
    leaderName: 'Marek Veselý',
    leaderTraits: leader(0.64, 0.52, 0.54, 0.58, 0.72, 0.62, 0.52),
    name: 'Zelená Budoucnost',
    officeRole: 'opposition',
    organizationBase: { jihomoravsky: 0.36, liberecky: 0.4, praha: 0.54, stredocesky: 0.28, ustecky: 0.18 },
    playable: false,
    reputation: { authenticity: 0.68, competence: 0.44, consistency: 0.72, controversy: 0.28, integrity: 0.7, trust: 0.46 },
    shortName: 'ZB',
    startingCash: 5.6,
    weeklyStaffCap: 2,
    winProfile: 'small',
  },
  {
    coalitionBase: { player: 0.42, civicFront: 0.28, greenFuture: 0.52, regionalVoice: 0.45 },
    color: '#7C3AED',
    field: { amplitude: 0.9, center: vec(-0.78, 0.18, 0.45), flexibility: 0.5, originCenter: vec(-0.78, 0.18, 0.45), width: vec(0.55, 0.6, 0.58) },
    id: 'laborUnion',
    issueOwnership: { healthcare: 0.75, housing: 0.48, industry: 0.68 },
    issuePositions: { climate: -0.1, education: -0.45, healthcare: -0.75, housing: -0.55, industry: -0.45, security: 0.4, taxes: -0.62, transport: -0.25 },
    leaderName: 'Alena Králová',
    leaderTraits: leader(0.62, 0.5, 0.58, 0.52, 0.68, 0.55, 0.6),
    name: 'Práce a Solidarita',
    officeRole: 'opposition',
    organizationBase: { jihomoravsky: 0.34, moravskoslezsky: 0.6, olomoucky: 0.42, praha: 0.24, stredocesky: 0.36, ustecky: 0.62 },
    playable: false,
    reputation: { authenticity: 0.63, competence: 0.45, consistency: 0.64, controversy: 0.38, integrity: 0.48, trust: 0.47 },
    shortName: 'PS',
    startingCash: 7.2,
    weeklyStaffCap: 2,
    winProfile: 'mid',
  },
  {
    coalitionBase: { player: 0.5, civicFront: 0.48, greenFuture: 0.4, laborUnion: 0.45 },
    color: '#D97706',
    field: { amplitude: 0.82, center: vec(-0.12, 0.54, 0.28), flexibility: 0.58, originCenter: vec(-0.12, 0.54, 0.28), width: vec(0.62, 0.66, 0.6) },
    id: 'regionalVoice',
    issueOwnership: { healthcare: 0.42, industry: 0.5, transport: 0.55 },
    issuePositions: { climate: 0.05, education: -0.2, healthcare: -0.38, housing: -0.2, industry: 0.1, security: 0.32, taxes: 0.05, transport: -0.18 },
    leaderName: 'Radim Horák',
    leaderTraits: leader(0.7, 0.48, 0.45, 0.5, 0.62, 0.48, 0.64),
    name: 'Hlas Regionů',
    officeRole: 'outsider',
    organizationBase: { jihocesky: 0.42, jihomoravsky: 0.42, praha: 0.18, stredocesky: 0.48, ustecky: 0.45, vysocina: 0.5 },
    playable: false,
    reputation: { authenticity: 0.7, competence: 0.42, consistency: 0.5, controversy: 0.32, integrity: 0.52, trust: 0.49 },
    shortName: 'HR',
    startingCash: 6.4,
    weeklyStaffCap: 2,
    winProfile: 'small',
  },
];

export const actions: ActionType[] = [
  { capacityCost: 1, category: 'Terén', cost: 1.2, description: 'Lokální akce zvyšuje organizaci, autenticitu a regionální viditelnost.', id: 'regionalRally', leaderTimeCost: 0.35, name: 'Regionální mítink', risk: 'nízké', target: 'region' },
  { capacityCost: 1, category: 'Terén', cost: 1.6, description: 'Výjezd předsedy posiluje lokální síť, ale navyšuje únavu lídra.', id: 'leaderVisit', leaderTimeCost: 0.55, name: 'Výjezd předsedy', risk: 'střední', target: 'region' },
  { capacityCost: 1, category: 'Online', cost: 0.8, description: 'Cílený digitální zásah zvyšuje dosah u volatilních a městských segmentů.', id: 'onlineCampaign', leaderTimeCost: 0.1, name: 'Online kampaň', risk: 'střední', target: 'region' },
  { capacityCost: 1, category: 'Program', cost: 1, description: 'Programový balíček zvyšuje issue ownership, ale může snížit konzistenci při přestřelení.', id: 'policyPackage', leaderTimeCost: 0.25, name: 'Programový balíček', risk: 'nízké', target: 'national' },
  { capacityCost: 1, category: 'Analytika', cost: 0.5, description: 'Stranický interní průzkum nezvyšuje podporu přímo. Zpřesňuje regionální odhady a briefing.', id: 'internalPoll', leaderTimeCost: 0, name: 'Interní průzkum', risk: 'nízké', target: 'region' },
  { capacityCost: 1, category: 'Analytika', cost: 0.7, description: 'Focus group odhalí bariéry, jazyk a motivace vybraných voličských skupin. Podporu přímo nezvedá.', id: 'focusGroup', leaderTimeCost: 0.05, name: 'Focus group', risk: 'nízké', target: 'region' },
  { capacityCost: 1, category: 'Analytika', cost: 0.9, description: 'Test sdělení zpřesní predikci dopadů kampaně a sníží riziko špatně zarámovaného tématu.', id: 'messageTest', leaderTimeCost: 0.05, name: 'Test sdělení', risk: 'nízké', target: 'national' },
  { capacityCost: 1, category: 'Média', cost: 0.7, description: 'TV rozhovor má celostátní dosah a závisí na reputaci a únavě lídra.', id: 'tvInterview', leaderTimeCost: 0.45, name: 'TV rozhovor', risk: 'střední', target: 'national' },
  { capacityCost: 1, category: 'Média', cost: 1.3, description: 'Debata je silná, ale riskantní mediální akce s vysokou volatilitou.', id: 'debate', leaderTimeCost: 0.65, name: 'Debata lídrů', risk: 'vyšší', target: 'national' },
  { capacityCost: 1, category: 'Média', cost: 0.6, description: 'Návštěva školy aktivuje mladší segmenty a může spustit Q&A event.', id: 'schoolVisit', leaderTimeCost: 0.45, name: 'Návštěva školy', risk: 'střední', target: 'region' },
  { capacityCost: 1, category: 'Média', cost: 0.5, description: 'Sněmovní projev posiluje kompetenci a institucionální respekt.', id: 'parliamentSpeech', leaderTimeCost: 0.35, name: 'Sněmovní projev', risk: 'nízké', target: 'national' },
  { capacityCost: 1, category: 'Finance', cost: 0.4, description: 'Transparentnost zvedá integritu a snižuje riziko sponzorských kauz.', id: 'financeTransparency', leaderTimeCost: 0.05, name: 'Transparentnost financí', risk: 'nízké', target: 'national' },
  { capacityCost: 1, category: 'Média', cost: 0.9, description: 'Negativní kampaň oslabuje soupeře, ale poškozuje koaliční vztahy.', id: 'negativeCampaign', leaderTimeCost: 0.15, name: 'Negativní kampaň', risk: 'vyšší', target: 'national' },
  { capacityCost: 1, category: 'Finance', cost: 0.2, description: 'Registrovaná třetí osoba dočasně posílí sdělení, ale zhorší kontrolu nad kampaní.', id: 'thirdPartySupport', leaderTimeCost: 0, name: 'Registrovaná třetí osoba', risk: 'střední', target: 'national' },
  { capacityCost: 1, category: 'Finance', cost: 0, description: 'Neprůhledná podpora je silný krátkodobý boost s vysokým právním a koaličním rizikem.', id: 'opaqueSupport', leaderTimeCost: 0, name: 'Neprůhledná podpora', risk: 'vyšší', target: 'national' },
];

export const media: MediaOutlet[] = [
  { audienceMix: { conservativeMiddle: 0.3, securityHawks: 0.2, seniorSocial: 0.22 }, credibility: 0.82, editorialVector: vec(0.05, 0.05, 0.05), id: 'ct24', kind: 'public_tv', name: 'ČT24 Fórum', reach: 0.82, scrutiny: 0.72, sensationalism: 0.28 },
  { audienceMix: { liberalBusiness: 0.2, urbanProgressives: 0.26, youngRenters: 0.18 }, credibility: 0.64, editorialVector: vec(-0.1, -0.35, -0.25), id: 'metro', kind: 'digital', name: 'Metro Online', reach: 0.58, scrutiny: 0.42, sensationalism: 0.4 },
  { audienceMix: { industrialWorkers: 0.22, regionalPragmatists: 0.24, seniorSocial: 0.16 }, credibility: 0.56, editorialVector: vec(-0.1, 0.2, 0.15), id: 'region', kind: 'regional', name: 'Regionální síť', reach: 0.46, regionFocus: ['ustecky', 'moravskoslezsky', 'stredocesky'], scrutiny: 0.35, sensationalism: 0.32 },
  { audienceMix: { protestVoters: 0.28, securityHawks: 0.18, seniorSocial: 0.18 }, credibility: 0.38, editorialVector: vec(-0.15, 0.45, 0.55), id: 'blesk', kind: 'tabloid', name: 'Denní expres', reach: 0.62, scrutiny: 0.5, sensationalism: 0.82 },
];

export const sponsors: SponsorOffer[] = [
  { accepted: false, amount: 1.2, donorUnits: 1200, id: 'members', kind: 'membership_drive', legalStatus: 'legal', name: 'Členská sbírka', policyPressure: {}, reputationRisk: 0, scandalRisk: 0.02, traceability: 0.95 },
  { accepted: false, amount: 2.4, donorUnits: 8, id: 'builders', kind: 'sector_network', legalStatus: 'legal', name: 'Svaz developerů', policyPressure: { housing: 0.45 }, reputationRisk: 0.04, scandalRisk: 0.16, traceability: 0.82 },
  { accepted: false, amount: 2.1, donorUnits: 5, id: 'regionalPatrons', kind: 'regional_patron_network', legalStatus: 'legal', name: 'Regionální patroni', policyPressure: { transport: -0.25 }, regionBonus: { stredocesky: 0.04, ustecky: 0.05 }, reputationRisk: 0.05, scandalRisk: 0.2, traceability: 0.76 },
  { accepted: false, amount: 3.1, donorUnits: 4, id: 'industry', kind: 'sector_network', legalStatus: 'legal', name: 'Průmyslový fond', policyPressure: { climate: 0.35, industry: 0.35 }, regionBonus: { moravskoslezsky: 0.06, ustecky: 0.04 }, reputationRisk: 0.08, scandalRisk: 0.28, traceability: 0.72 },
  { accepted: false, amount: 2.8, donorUnits: 1, id: 'bankLoan', kind: 'bank_loan', legalStatus: 'legal', name: 'Bankovní úvěr', policyPressure: {}, reputationRisk: 0.01, scandalRisk: 0.04, traceability: 0.98 },
  { accepted: false, amount: 1.8, donorUnits: 1, id: 'thirdParty', kind: 'registered_third_party', legalStatus: 'gray', name: 'Registrovaná třetí osoba', policyPressure: { security: 0.25 }, reputationRisk: 0.06, scandalRisk: 0.22, traceability: 0.55 },
  { accepted: false, amount: 4.5, donorUnits: 1, id: 'opaque', kind: 'opaque_support', legalStatus: 'illegal', name: 'Neprůhledná podpora', policyPressure: { industry: 0.4, taxes: 0.25 }, reputationRisk: 0.18, scandalRisk: 0.78, traceability: 0.3 },
];

export const events: EventCard[] = [
  { id: 'healthcareStrike', issueAgendaShift: { healthcare: 0.24 }, kind: 'regional_crisis', opportunityFor: ['player', 'laborUnion'], regionId: 'ustecky', resolved: false, scope: 'region', severity: 0.68, threatTo: ['civicFront'], title: 'Stávková pohotovost v krajské nemocnici', week: 4 },
  { id: 'housingReport', issueAgendaShift: { housing: 0.28 }, kind: 'policy_window', opportunityFor: ['player', 'greenFuture'], regionId: 'praha', resolved: false, scope: 'region', severity: 0.72, title: 'Nová data o nedostupném bydlení', week: 4 },
  { id: 'industryLayoffs', issueAgendaShift: { industry: 0.3, security: 0.08 }, kind: 'macro', opportunityFor: ['laborUnion', 'regionalVoice'], regionId: 'moravskoslezsky', resolved: false, scope: 'region', severity: 0.66, threatTo: ['civicFront'], title: 'Oznámené propouštění ve výrobě', week: 5 },
  { id: 'schoolReform', issueAgendaShift: { education: 0.26 }, kind: 'policy_window', opportunityFor: ['player', 'greenFuture'], resolved: false, scope: 'national', severity: 0.54, title: 'Debata o reformě školství', week: 5 },
  { id: 'securityIncident', issueAgendaShift: { security: 0.32 }, kind: 'macro', opportunityFor: ['civicFront'], resolved: false, scope: 'national', severity: 0.62, title: 'Bezpečnostní incident na hranicích', week: 6 },
  { id: 'transportDelay', issueAgendaShift: { transport: 0.25 }, kind: 'regional_crisis', opportunityFor: ['regionalVoice', 'player'], regionId: 'stredocesky', resolved: false, scope: 'region', severity: 0.58, title: 'Zpožděná stavba železničního uzlu', week: 6 },
];

export const questions: QuestionSet[] = [
  {
    id: 'schoolSun',
    prompt: 'Student: Je Slunce planeta?',
    trigger: 'school',
    options: [
      { consistencyValue: 0.6, controversyRisk: 0.02, factValue: 1, id: 'a', reputationShift: { competence: 0.04, trust: 0.02 }, rhetoricValue: 0.5, text: 'Ne, Slunce je hvězda.' },
      { consistencyValue: -0.4, controversyRisk: 0.55, factValue: -0.8, id: 'b', reputationShift: { competence: -0.12, controversy: 0.08 }, rhetoricValue: 0.1, text: 'Samozřejmě, je to největší planeta.' },
      { consistencyValue: 0.1, controversyRisk: 0.14, factValue: 0.2, id: 'c', reputationShift: { authenticity: 0.03, competence: -0.03 }, rhetoricValue: 0.62, text: 'Tohle přenechám panu učiteli, já řeším rozpočet.' },
      { consistencyValue: 0.4, controversyRisk: 0.18, factValue: 0.4, id: 'd', reputationShift: { trust: -0.01, authenticity: 0.02 }, rhetoricValue: 0.76, text: 'Důležité je, aby děti měly dobré školy.' },
    ],
  },
  {
    id: 'housingInterview',
    prompt: 'Moderátor: Jak zabráníte tomu, aby bytová politika jen zdražila nové byty?',
    trigger: 'interview',
    options: [
      { consistencyValue: 0.72, controversyRisk: 0.08, factValue: 0.74, id: 'a', issueOwnershipShift: { housing: 0.04 }, reputationShift: { competence: 0.035 }, rhetoricValue: 0.58, text: 'Spojíme rychlejší povolování, podporu obcí a jasná pravidla pro dostupné byty.' },
      { consistencyValue: 0.35, controversyRisk: 0.18, factValue: 0.35, id: 'b', reputationShift: { authenticity: 0.025, competence: -0.025 }, rhetoricValue: 0.72, text: 'Hlavně skončí chaos. Lidé potřebují slyšet, že stát nebude překážet.' },
      { consistencyValue: -0.15, controversyRisk: 0.35, factValue: 0.2, id: 'c', reputationShift: { consistency: -0.04, controversy: 0.04 }, rhetoricValue: 0.5, text: 'Ceny prostě zastropujeme a trh se přizpůsobí.' },
    ],
  },
];

export const pollsters: Pollster[] = [
  { cost: 0.25, houseEffect: { civicFront: 0.002, player: -0.001 }, id: 'medianPlus', name: 'Median Plus', quality: 0.76 },
  { cost: 0.18, houseEffect: { greenFuture: 0.003, laborUnion: -0.002 }, id: 'voxData', name: 'VoxData', quality: 0.68 },
  { cost: 0.38, houseEffect: { player: 0.001, regionalVoice: -0.001 }, id: 'polisTrack', name: 'Polis Track', quality: 0.84 },
];

export const marketingAdvisors: MarketingAdvisor[] = [
  {
    costPerWeek: 0,
    customActionUnlocks: false,
    id: 'none',
    level: 0,
    messageTestingBonus: 0,
    name: 'Bez externího týmu',
    predictionAccuracyBonus: 0,
    riskDetectionBonus: 0,
    segmentTargetingBonus: 0,
  },
  {
    costPerWeek: 0.35,
    customActionUnlocks: false,
    id: 'junior',
    level: 1,
    messageTestingBonus: 0.02,
    name: 'Junior analytický tým',
    predictionAccuracyBonus: 0.06,
    riskDetectionBonus: 0.04,
    segmentTargetingBonus: 0.03,
  },
  {
    costPerWeek: 0.8,
    customActionUnlocks: false,
    id: 'senior',
    level: 2,
    messageTestingBonus: 0.07,
    name: 'Senior strategie a data',
    predictionAccuracyBonus: 0.13,
    riskDetectionBonus: 0.1,
    segmentTargetingBonus: 0.09,
  },
  {
    costPerWeek: 1.5,
    customActionUnlocks: true,
    id: 'elite',
    level: 3,
    messageTestingBonus: 0.14,
    name: 'Elite war room',
    predictionAccuracyBonus: 0.22,
    reputationRisk: 0.03,
    riskDetectionBonus: 0.18,
    segmentTargetingBonus: 0.16,
  },
];

export const mediaInvitations: MediaInvitation[] = [
  { format: 'interview', id: 'metroHousing', issue: 'housing', outletId: 'metro', resolved: false, risk: 0.32, week: 4 },
  { format: 'debate', id: 'ctDebate', issue: 'healthcare', outletId: 'ct24', resolved: false, risk: 0.46, week: 4 },
  { format: 'school', id: 'schoolVisitInvite', issue: 'education', outletId: 'region', resolved: false, risk: 0.38, week: 5 },
];

export const coalitionRelations: CoalitionRelation[] = parties.flatMap((partyA) =>
  parties
    .filter((partyB) => partyA.id < partyB.id)
    .map((partyB) => {
      const base = partyA.coalitionBase[partyB.id] ?? partyB.coalitionBase[partyA.id] ?? 0.35;
      return {
        ideologicalCompatibility: base,
        partyA: partyA.id,
        partyB: partyB.id,
        personalTrust: base * 0.9,
        publicAcceptability: base,
        recentConflict: 0,
        scandalBarrier: 0,
        totalCoalitionPotential: base,
      };
    }),
);

export const defaultRules: GameRules = {
  donorCap: 3,
  finalWeek: 21,
  legalSpendCap: 40,
  maxActionsPerWeek: 3,
  spendCap: 90,
  thirdPartyCap: 1.8,
  totalWeeks: 20,
};

function inferSeedCenter8D(party: PartySeed): LatentVector8D {
  const field = party.field.center;
  const reputation = party.reputation;
  const climate = party.issuePositions.climate ?? 0;
  const security = party.issuePositions.security ?? 0;
  const industry = party.issuePositions.industry ?? 0;

  return latent8(
    field.econ,
    field.culture,
    field.authority,
    clampSeed((reputation.trust + reputation.competence + reputation.integrity) / 1.55 - 0.95 - reputation.controversy * 0.35),
    clampSeed(-field.culture * 0.45 - field.authority * 0.25 - security * 0.18 + industry * 0.08),
    clampSeed(-climate * 0.72 - industry * 0.08),
    clampSeed(-field.authority * 0.3 - field.culture * 0.16 + security * 0.28 + reputation.consistency * 0.12 - 0.06),
  );
}

function inferSeedWidth8D(party: PartySeed): LatentVector8D {
  return latent8(
    party.field.width.econ,
    party.field.width.culture,
    party.field.width.authority,
    0.74,
    0.72,
    0.68,
    0.66,
  );
}

function defaultSalience8D(): LatentVector8D {
  return latent8(1, 1, 1, 0.85, 0.9, 0.85, 0.9);
}

function clampSeed(value: number) {
  return Math.max(-1, Math.min(1, value));
}

const initialRuntime = (party: PartySeed): PartyRuntime => {
  const center8D = party.field.center8D ?? inferSeedCenter8D(party);
  const width8D = party.field.width8D ?? inferSeedWidth8D(party);
  const salience8D = party.field.salience8D ?? defaultSalience8D();

  return {
    actionCooldowns: {},
    cash: party.startingCash,
    field: {
      ...party.field,
      center: { ...party.field.center },
      center8D: { ...center8D },
      latentCenter: { ...center8D },
      originCenter: { ...party.field.originCenter },
      originCenter8D: { ...(party.field.originCenter8D ?? center8D) },
      salience8D: { ...salience8D },
      width: { ...party.field.width },
      width8D: { ...width8D },
    },
    graySpend: 0,
    informationQuality: party.id === 'player' ? 0.42 : 0.32,
    leader: {
      energy: 1,
      fatigue: 0,
      officeRole: party.officeRole,
      timeCap: party.weeklyStaffCap,
      timeUsed: 0,
    },
    legalExposure: 0,
    legalSpend: 0,
    marketingAdvisorId: 'none',
    mediaVulnerability: 0,
    organization: { ...party.organizationBase },
    reputation: { ...party.reputation },
    scandalRisk: party.reputation.controversy * 0.2,
    staffCap: party.weeklyStaffCap,
    staffUsed: 0,
    thirdPartySpend: 0,
  };
};

export function createInitialGameState(): GameState {
  const partyRuntime = Object.fromEntries(parties.map((party) => [party.id, initialRuntime(party)])) as Record<PartyId, PartyRuntime>;

  return {
    actions,
    campaignActionsV2,
    coalitionRelations,
    events,
    grid: [],
    history: [],
    issueLayer: createIssueLayerState(),
    media,
    mediaInvitations,
    marketingAdvisors,
    mode: 'fullRealism',
    nationalSupport: { civicFront: 0, greenFuture: 0, laborUnion: 0, player: 0, regionalVoice: 0 },
    parties,
    partyRuntime,
    playerPartyId: 'player',
    polls: { civicFront: { high: 0, low: 0, value: 0 }, greenFuture: { high: 0, low: 0, value: 0 }, laborUnion: { high: 0, low: 0, value: 0 }, player: { high: 0, low: 0, value: 0 }, regionalVoice: { high: 0, low: 0, value: 0 } },
    pollsters,
    publicPollsterId: 'medianPlus',
    publicRegionalPolls: {} as GameState['publicRegionalPolls'],
    questions,
    regions: regionSeeds,
    regionalSupport: {} as GameState['regionalSupport'],
    rngSeed: 42021,
    rules: defaultRules,
    scandals: [],
    segments: voterSegments,
    sponsors,
    turnoutModifiers: [],
    version: '0.5-campaign-actions-v2',
    week: 4,
  };
}

export const segmentLabels: Record<SegmentId, string> = Object.fromEntries(
  voterSegments.map((segment) => [segment.id, segment.name]),
) as Record<SegmentId, string>;
