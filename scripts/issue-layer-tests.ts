import {
  calculateAgendaPenalty,
  calculatePartyCoherence,
  calculateRulePenalty,
  deriveLatentFromIssues,
  implicationViolation,
} from '../src/game/issueEngine';
import { createIssueLayerState } from '../src/game/issueSeed';

const layer = createIssueLayerState();
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
assertOk(reversePenalty < 0.05, `Expected low reverse penalty without reverse relation, got ${reversePenalty}`);

const rulePenalty = calculateRulePenalty(positions, layer.relations);
assertOk(rulePenalty >= forwardPenalty, 'Rule penalty should include forward implication violation');

const overloaded = clonePositions(layer.player.currentIssuePositions);
for (const issue of ['taxes', 'pensions', 'migration', 'greenDeal', 'sameSexMarriage', 'ukraineSupport', 'cannabis']) {
  overloaded[issue] = { ...overloaded[issue], salience: 4 };
}
const overloadedAgenda = calculateAgendaPenalty(overloaded, layer.issues, layer.campaignPackages, []);
assertOk(overloadedAgenda > 0.5, `Expected high overloaded agenda penalty, got ${overloadedAgenda}`);

const packagedAgenda = calculateAgendaPenalty(
  overloaded,
  layer.issues,
  layer.campaignPackages,
  ['modernLiberalState'],
);
assertOk(packagedAgenda < overloadedAgenda, 'Coherent package should reduce agenda penalty');

const latent = deriveLatentFromIssues(layer.player.currentIssuePositions, layer.issues, layer.framings);
assertOk(typeof latent.econ === 'number', 'Derived latent econ should be numeric');
assertOk(typeof latent.green_deal === 'number', 'Derived latent green_deal should be numeric');

const coherence = calculatePartyCoherence(layer.player, layer.issues, layer.relations, layer.ideologicalFrames, layer.campaignPackages, 0.6);
assertOk(coherence.coherenceScore >= 0 && coherence.coherenceScore <= 100, 'Coherence score should be in [0, 100]');
assertOk(Number.isFinite(coherence.totalIncoherence), 'Total incoherence should be finite');

console.log('Issue layer tests passed');

function clonePositions<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function assertOk(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}
