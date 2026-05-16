import { aggregateVotesByKraj } from '../src/simulation/engine/regionalAggregation';
import { regionalCampaignEvents } from '../src/simulation/data/regionalCampaignEvents';
import { partySeedsV03 } from '../src/simulation/model/partySeeds';
import {
  calculateRegionalEffectStrength,
  kraje,
  krajeById,
  matchesCampaignTarget,
  validateRegionalEnrichment,
} from '../src/simulation/model/regionalEnrichment';
import { loadRegionalizedVoterFieldV03, loadVoterFieldV03 } from '../src/simulation/model/voterFieldLoader';
import { resolveSupport } from '../src/simulation/engine/resolveSupport';

const base = loadVoterFieldV03();
const regional = loadRegionalizedVoterFieldV03();
const report = validateRegionalEnrichment(regional.points);
const tolerance = 0.02;

assertEqual(base.points.length, 50000, 'Base weighted field should contain 50,000 parent points');
assertOk(regional.points.length > base.points.length, 'Regionalized field should contain child particles');
assertOk(report.allKrajePresent, 'All 14 kraje should be present');
assertEqual(kraje.length, 14, 'Kraje metadata should contain 14 kraje');
assertEqual(report.missingMetadataCount, 0, 'No regional particle should miss geography metadata');
assertEqual(report.invalidMetadataCount, 0, 'No regional particle should have invalid geography metadata');

const baseTotal = base.points.reduce((sum, point) => sum + point.weight, 0);
assertOk(Math.abs(baseTotal - report.totalRepresentedVoters) < 0.1, 'National represented voters should be preserved');

const parentById = new Map(base.points.map((point) => [String(point.id), point]));
for (const point of regional.points) {
  assertOk(Boolean(point.geography?.nuts2Id), `Regional point ${point.id} missing nuts2Id`);
  assertOk(Boolean(point.geography?.krajId), `Regional point ${point.id} missing krajId`);
  assertOk(Boolean(point.geography?.krajName), `Regional point ${point.id} missing krajName`);
  assertOk(Boolean(point.geography?.metroArea), `Regional point ${point.id} missing metroArea`);
  assertOk(typeof point.incomeProxy === 'number', `Regional point ${point.id} missing incomeProxy`);
  assertOk(Boolean(point.socioEconomicStatus), `Regional point ${point.id} missing socioEconomicStatus`);
  assertEqual(krajeById[point.geography!.krajId].nuts2Id, point.geography!.nuts2Id, 'Child kraj must stay inside parent NUTS2');

  const parent = parentById.get(point.parentParticleId ?? '');
  assertOk(Boolean(parent), `Missing parent ${point.parentParticleId}`);
  for (const dimension of ['econ', 'culture', 'authority', 'establishment', 'globalism', 'green', 'ukraine', 'green_deal'] as const) {
    assertEqual(point.position[dimension], parent!.position[dimension], `Child should preserve parent ${dimension}`);
  }
}

for (const kraj of kraje) {
  const nuts2Total = report.nuts2Totals[kraj.nuts2Id];
  const actualShare = report.krajTotals[kraj.id] / nuts2Total;
  const targetShare = getTargetShare(kraj.id);
  assertOk(Math.abs(actualShare - targetShare) < tolerance, `${kraj.id} share ${actualShare} should match target ${targetShare}`);
}

const urbanJmk =
  ((report.urbanityByKraj.CZ064.large_town ?? 0) + (report.urbanityByKraj.CZ064.metro ?? 0)) / report.krajTotals.CZ064;
const urbanVys =
  ((report.urbanityByKraj.CZ063.large_town ?? 0) + (report.urbanityByKraj.CZ063.metro ?? 0)) / report.krajTotals.CZ063;
const ruralTownVys =
  ((report.urbanityByKraj.CZ063.rural ?? 0) + (report.urbanityByKraj.CZ063.town ?? 0)) / report.krajTotals.CZ063;
const ruralTownJmk =
  ((report.urbanityByKraj.CZ064.rural ?? 0) + (report.urbanityByKraj.CZ064.town ?? 0)) / report.krajTotals.CZ064;
assertOk(urbanJmk > urbanVys, 'CZ064 should contain more metro/large_town particles than CZ063');
assertOk(ruralTownVys > ruralTownJmk, 'CZ063 should contain more rural/town particles than CZ064');
assertOk(regional.points.filter((point) => point.geography?.krajId === 'CZ010').every((point) => point.geography?.metroArea === 'praha'), 'CZ010 should be fully praha metro');
assertOk(
  regional.points
    .filter((point) => point.geography?.krajId === 'CZ080' && (point.urbanity === 'large_town' || point.urbanity === 'metro'))
    .some((point) => point.geography?.metroArea === 'ostrava'),
  'CZ080 should include ostrava metro for large_town/metro particles',
);

const direct = resolveSupport(regional.points, partySeedsV03);
const byKraj = aggregateVotesByKraj(regional.points, partySeedsV03);
const aggregatePartyVotes = Object.values(byKraj).reduce<Record<string, number>>((totals, row) => {
  for (const [partyId, votes] of Object.entries(row)) {
    totals[partyId] = (totals[partyId] ?? 0) + votes;
  }
  return totals;
}, {});
const aggregateTotal = Object.values(aggregatePartyVotes).reduce((sum, value) => sum + value, 0);
for (const result of direct.partyResults) {
  const aggregateShare = (aggregatePartyVotes[result.partyId] ?? 0) / aggregateTotal;
  assertOk(Math.abs(aggregateShare - result.voteShare) < 0.000001, `Kraj aggregation should match national share for ${result.partyId}`);
}

const brno = regionalCampaignEvents.find((event) => event.id === 'brno-business-tech-forum')!;
const brnoMatches = regional.points.filter((point) => matchesCampaignTarget(point, brno.target));
assertOk(brnoMatches.length > 0, 'Brno event should match some particles');
assertOk(brnoMatches.every((point) => point.geography?.krajId === 'CZ064'), 'Brno event should only match CZ064 particles');
assertOk(brnoMatches.every((point) => point.geography?.metroArea === 'brno'), 'Brno event should match brno metro particles');
assertOk(brnoMatches.every((point) => point.urbanity === 'large_town' || point.urbanity === 'metro'), 'Brno event should match urban particles');

const brnoStrength = averageStrengthForMatches('CZ064', brno.target);
const vysStrength = averageStrength('CZ063', brno.target);
const prahaStrength = averageStrength('CZ010', brno.target);
const mskStrength = averageStrength('CZ080', brno.target);
assertOk(brnoStrength > 0.45, 'Brno target should have meaningful strength in CZ064');
assertOk(vysStrength < 0.02, 'Brno target should not strongly affect CZ063');
assertOk(prahaStrength < 0.02, 'Brno target should not strongly affect CZ010');
assertOk(mskStrength < 0.02, 'Brno target should not strongly affect CZ080');

console.log('Regional enrichment tests passed');

function averageStrength(krajId: string, target: typeof brno.target) {
  const points = regional.points.filter((point) => point.geography?.krajId === krajId);
  return points.reduce((sum, point) => sum + calculateRegionalEffectStrength(point, target), 0) / Math.max(1, points.length);
}

function averageStrengthForMatches(krajId: string, target: typeof brno.target) {
  const points = regional.points.filter((point) => point.geography?.krajId === krajId && matchesCampaignTarget(point, target));
  return points.reduce((sum, point) => sum + calculateRegionalEffectStrength(point, target), 0) / Math.max(1, points.length);
}

function getTargetShare(krajId: string) {
  const targets: Record<string, number> = {
    CZ010: 1,
    CZ020: 1,
    CZ031: 0.55,
    CZ032: 0.45,
    CZ041: 0.27,
    CZ042: 0.73,
    CZ051: 0.29,
    CZ052: 0.36,
    CZ053: 0.35,
    CZ063: 0.31,
    CZ064: 0.69,
    CZ071: 0.52,
    CZ072: 0.48,
    CZ080: 1,
  };
  return targets[krajId];
}

function assertEqual(actual: unknown, expected: unknown, message: string) {
  if (actual !== expected) {
    throw new Error(`${message}. Expected ${String(expected)}, got ${String(actual)}`);
  }
}

function assertOk(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}
