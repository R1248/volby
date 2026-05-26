import { readFileSync } from 'node:fs';

import {
  answerCampaignTrip,
  answerProgramMediaQuestion,
  calculateAgendaPenalty,
  calculatePartyCoherence,
  deriveLatentFromIssues,
  evaluateIssueGraph,
  implicationViolation,
  issueLayerUtilityModifier,
  recalculateIssueLayer,
} from '../src/game/issueEngine';
import { createIssueLayerState } from '../src/game/issueSeed';
import type { IssueLayerState } from '../src/game/issueTypes';
import type { VoterSegment } from '../src/game/types';

const layer = createIssueLayerState();

const programUi = readFileSync('app/program.tsx', 'utf8');
const store = readFileSync('src/store/useGameStore.ts', 'utf8');
const engine = readFileSync('src/game/engine.ts', 'utf8');
const issueEngine = readFileSync('src/game/issueEngine.ts', 'utf8');
assertOk(!programUi.includes('Kampanove balicky'), 'Program UI must not show campaign packages');
assertOk(!programUi.includes('activateCampaignPackage'), 'Program UI must not activate campaign packages');
assertOk(!store.includes('activateCampaignPackage'), 'Store must not expose campaign package activation');
assertOk(!engine.includes('activateCampaignPackage'), 'Engine must not expose campaign package activation');
assertOk(!issueEngine.includes('activateCampaignPackage'), 'Issue engine must not expose campaign package activation');

const legacyLayer = clonePositions(layer) as IssueLayerState & {
  campaignPackages: unknown[];
  player: IssueLayerState['player'] & { activeCampaignPackages: string[] };
};
legacyLayer.campaignPackages = [{ id: 'legacyPackage', issueIds: ['greenDeal'] }];
legacyLayer.player.activeCampaignPackages = ['legacyPackage'];
const recalculatedLegacy = recalculateIssueLayer(legacyLayer, 0.6);
assertOk(Number.isFinite(recalculatedLegacy.player.coherenceBreakdown.coherenceScore), 'Legacy package fields must not crash recalculation');

const positions = clonePositions(layer.player.currentIssuePositions);
positions.affirmativeAction = { ...positions.affirmativeAction, position: 2, salience: 4 };
positions.sameSexMarriage = { ...positions.sameSexMarriage, position: -2, salience: 4 };

const aaRelation = layer.relations.find(
  (relation) => relation.from === 'affirmativeAction' && relation.to === 'sameSexMarriage',
);
assertOk(Boolean(aaRelation), 'Missing affirmativeAction -> sameSexMarriage relation');
const forwardPenalty = implicationViolation(positions, aaRelation!);
assertOk(forwardPenalty > 0.45, `Expected high forward penalty, got ${forwardPenalty}`);

const reversePositions = clonePositions(layer.player.currentIssuePositions);
reversePositions.sameSexMarriage = { ...reversePositions.sameSexMarriage, position: 2, salience: 4 };
reversePositions.affirmativeAction = { ...reversePositions.affirmativeAction, position: -2, salience: 4 };
const reversePenalty = implicationViolation(reversePositions, aaRelation!);
assertOk(reversePenalty > 0.08, `Expected confidenceReverse to create a softer reverse penalty, got ${reversePenalty}`);
assertOk(reversePenalty < forwardPenalty * 0.6, `Reverse confidence must not be symmetric, got ${reversePenalty} vs ${forwardPenalty}`);

const incoherentParty = {
  ...layer.player,
  currentIssuePositions: positions,
};
const coherentPositions = clonePositions(layer.player.currentIssuePositions);
coherentPositions.affirmativeAction = { ...coherentPositions.affirmativeAction, position: 2, salience: 4 };
coherentPositions.sameSexMarriage = { ...coherentPositions.sameSexMarriage, position: 2, salience: 4 };
const coherentParty = {
  ...layer.player,
  currentIssuePositions: coherentPositions,
};
const incoherent = calculatePartyCoherence(incoherentParty, layer.issues, layer.relations, layer.ideologicalFrames, 0.6, layer.framings);
const coherent = calculatePartyCoherence(coherentParty, layer.issues, layer.relations, layer.ideologicalFrames, 0.6, layer.framings);
assertOk(incoherent.coherenceScore < coherent.coherenceScore, 'Affirmative action pro + same-sex marriage against must lower coherence');
assertOk(coherent.rulePenalty < incoherent.rulePenalty, 'Compatible positions should reduce graph rule penalties');

const overloaded = clonePositions(layer.player.currentIssuePositions);
for (const issue of ['taxes', 'pensions', 'migration', 'greenDeal', 'sameSexMarriage', 'ukraineSupport', 'cannabis']) {
  overloaded[issue] = { ...overloaded[issue], salience: 4 };
}
const overloadedAgenda = calculateAgendaPenalty(overloaded, layer.issues, []);
assertOk(overloadedAgenda > 0.5, `Expected high overloaded agenda penalty, got ${overloadedAgenda}`);

const sameFamilyAgenda = clonePositions(layer.player.currentIssuePositions);
for (const issue of ['greenDeal', 'coalPhaseout', 'nuclearEnergy', 'ukraineSupport', 'nato', 'euIntegration']) {
  sameFamilyAgenda[issue] = { ...sameFamilyAgenda[issue], position: 2, salience: 4 };
}
const agendaWithoutGraph = calculateAgendaPenalty(sameFamilyAgenda, layer.issues, []);
const agendaWithGraph = calculateAgendaPenalty(sameFamilyAgenda, layer.issues, layer.relations);
assertOk(agendaWithGraph < agendaWithoutGraph, 'same_family graph coherence should reduce agenda penalty');

const mobilizingPositions = clonePositions(layer.player.currentIssuePositions);
mobilizingPositions.migration = { ...mobilizingPositions.migration, position: 2, salience: 4 };
mobilizingPositions.lawAndOrder = { ...mobilizingPositions.lawAndOrder, position: 2, salience: 4 };
const mobilizingGraph = evaluateIssueGraph(mobilizingPositions, layer.relations, layer.framings);
assertOk(mobilizingGraph.mobilizationOverlapBonus > 0.02, 'mobilizes_same_audience should create an overlap bonus');

const unframedEnergy = clonePositions(layer.player.currentIssuePositions);
unframedEnergy.greenDeal = { ...unframedEnergy.greenDeal, position: 2, salience: 4, framingId: undefined };
unframedEnergy.nuclearEnergy = { ...unframedEnergy.nuclearEnergy, position: 2, salience: 4 };
const framedEnergy = clonePositions(unframedEnergy);
framedEnergy.greenDeal = { ...framedEnergy.greenDeal, framingId: 'modernization' };
const unframedGraph = evaluateIssueGraph(unframedEnergy, layer.relations, layer.framings);
const framedGraph = evaluateIssueGraph(framedEnergy, layer.relations, layer.framings);
assertOk(
  framedGraph.unresolvedTensionPenalty < unframedGraph.unresolvedTensionPenalty,
  'Useful framing should reduce requires_framing/tension penalty',
);
const irrelevantFramingEnergy = clonePositions(unframedEnergy);
irrelevantFramingEnergy.energyPrices = { ...irrelevantFramingEnergy.energyPrices, framingId: 'cheapEnergy' };
const irrelevantFramingGraph = evaluateIssueGraph(irrelevantFramingEnergy, layer.relations, layer.framings);
assertOk(
  Math.abs(irrelevantFramingGraph.unresolvedTensionPenalty - unframedGraph.unresolvedTensionPenalty) < 0.000001,
  'Irrelevant framing should not reduce requires_framing/tension penalty',
);

const broadCoherentAgenda = clonePositions(layer.player.currentIssuePositions);
for (const issue of ['greenDeal', 'coalPhaseout', 'nuclearEnergy', 'energyPrices', 'ukraineSupport', 'nato', 'euIntegration', 'pensions', 'redistribution']) {
  broadCoherentAgenda[issue] = { ...broadCoherentAgenda[issue], position: 2, salience: 4 };
}
const broadCoherentPenalty = calculateAgendaPenalty(broadCoherentAgenda, layer.issues, layer.relations);
assertOk(broadCoherentPenalty > 0.5, `Broad flagship agenda should still be penalized, got ${broadCoherentPenalty}`);

const greenVoter: VoterSegment = {
  axisSalience: { authority: 1, culture: 1, econ: 1 },
  education: 'tertiary',
  id: 'green-voter',
  issuePrefs: { greenDeal: 2 },
  issueSalience: {},
  mediaHabits: {},
  name: 'Green voter',
  position: { authority: 0, culture: -0.4, econ: -0.2 },
  scandalSensitivity: 0.5,
  space: { authority: 0, culture: -0.4, econ: -0.2, establishment: 0.4, globalism: 0.6, green: 0.8, greenDeal: 1, ukraine: 0.5 },
  turnoutBase: 0.7,
  volatility: 0.4,
};
const supportiveLayer = recalculateIssueLayer(
  {
    ...layer,
    player: {
      ...layer.player,
      currentIssuePositions: {
        ...layer.player.currentIssuePositions,
        greenDeal: { ...layer.player.currentIssuePositions.greenDeal, position: 2, salience: 4 },
      },
    },
  },
  0.6,
);
const opposedLayer = recalculateIssueLayer(
  {
    ...layer,
    player: {
      ...layer.player,
      currentIssuePositions: {
        ...layer.player.currentIssuePositions,
        greenDeal: { ...layer.player.currentIssuePositions.greenDeal, position: -2, salience: 4 },
      },
    },
  },
  0.6,
);
assertOk(
  issueLayerUtilityModifier(supportiveLayer, greenVoter, true) > issueLayerUtilityModifier(opposedLayer, greenVoter, true),
  'Good issue fit should improve voter utility',
);
const artificiallyCoherent = {
  ...supportiveLayer,
  player: {
    ...supportiveLayer.player,
    coherenceBreakdown: { ...supportiveLayer.player.coherenceBreakdown, coherenceScore: 100 },
  },
};
const artificiallyIncoherent = {
  ...supportiveLayer,
  player: {
    ...supportiveLayer.player,
    coherenceBreakdown: { ...supportiveLayer.player.coherenceBreakdown, coherenceScore: 20 },
  },
};
assertOk(
  issueLayerUtilityModifier(artificiallyIncoherent, greenVoter, true) < issueLayerUtilityModifier(artificiallyCoherent, greenVoter, true),
  'Incoherence should lower voter utility',
);
const noBonusUtilityLayer = {
  ...supportiveLayer,
  player: {
    ...supportiveLayer.player,
    coherenceBreakdown: {
      ...supportiveLayer.player.coherenceBreakdown,
      clusterCoherenceBonus: 0,
      mobilizationOverlapBonus: 0,
      sameFamilyBonus: 0,
    },
  },
};
assertOk(
  issueLayerUtilityModifier(noBonusUtilityLayer, greenVoter, true) === issueLayerUtilityModifier(supportiveLayer, greenVoter, true),
  'Graph synergy bonuses should not directly boost voter utility',
);

let mediaQuestionLayer = clonePositions(layer);
for (let index = 0; index < layer.mediaQuestions.length; index += 1) {
  const pendingId = mediaQuestionLayer.pendingMediaQuestionId;
  if (!pendingId) break;
  const question = mediaQuestionLayer.mediaQuestions.find((item) => item.id === pendingId);
  mediaQuestionLayer = answerProgramMediaQuestion(mediaQuestionLayer, pendingId, question?.answerOptions[0]?.id ?? '', 0.6);
}
assertOk(mediaQuestionLayer.pendingMediaQuestionId === undefined, 'Program media questions should not cycle indefinitely');

let tripLayer = clonePositions(layer);
for (let index = 0; index < layer.tripEvents.length; index += 1) {
  const pendingId = tripLayer.pendingCampaignTripId;
  if (!pendingId) break;
  const trip = tripLayer.tripEvents.find((item) => item.id === pendingId);
  tripLayer = answerCampaignTrip(tripLayer, pendingId, trip?.options[0]?.id ?? '', 0.6);
}
assertOk(tripLayer.pendingCampaignTripId === undefined, 'Campaign trips should not cycle indefinitely');

const latent = deriveLatentFromIssues(layer.player.currentIssuePositions, layer.issues, layer.framings);
assertOk(typeof latent.econ === 'number', 'Derived latent econ should be numeric');
assertOk(typeof latent.green === 'number', 'Derived latent green should be numeric');
assertOk(!('green_deal' in latent), 'Derived latent vector must not reintroduce green_deal');

const coherence = calculatePartyCoherence(layer.player, layer.issues, layer.relations, layer.ideologicalFrames, 0.6, layer.framings);
assertOk(coherence.coherenceScore >= 0 && coherence.coherenceScore <= 100, 'Coherence score should be in [0, 100]');
assertOk(Number.isFinite(coherence.totalIncoherence), 'Total incoherence should be finite');
assertOk(Array.isArray(coherence.relationNotes), 'Graph evaluation should expose relation notes');

console.log('Issue layer tests passed');

function clonePositions<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function assertOk(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}
