"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsActionTemplates = void 0;
const actionTypes_1 = require("./actions/actionTypes");
const analytics = [
    ['internalPoll', 'Interni pruzkum', 'Zpresni narodni odhad podpory a nejistotu modelu.', { informationQuality: 0.05, predictionAccuracy: 0.05 }],
    ['trackingPoll', 'Tracking poll', 'Opakovane mereni trendu s vyssi presnosti a rychlejsim varovanim.', { informationQuality: 0.07, predictionAccuracy: 0.08 }],
    ['regionalPoll', 'Regionalni pruzkum', 'Zpresni regionalni obraz a doporucene cile bez primeho rustu podpory.', { informationQuality: 0.06, predictionAccuracy: 0.07 }],
    ['focusGroup', 'Focus group', 'Odemyka kvalitativni nahledy na framing a slabiny sdeleni.', { informationQuality: 0.05, riskDetection: 0.04 }],
    ['messageTesting', 'Testovani sdeleni', 'Snizuje nejistotu u presvedcovacich a reklamnych zasahu.', { informationQuality: 0.06, predictionAccuracy: 0.04, unlockedPreviews: ['message'] }],
    ['sloganTesting', 'Testovani sloganu', 'Vyhodnoti zapamatovatelnost a riziko spatneho cteni sloganu.', { informationQuality: 0.04, riskDetection: 0.03 }],
    ['billboardVariantTesting', 'Testovani billboard variant', 'Porovna outdoorove varianty pred nakupem ploch.', { informationQuality: 0.04, predictionAccuracy: 0.03 }],
    ['segmentAnalysis', 'Segmentova analyza', 'Zpresni segmentove citlivosti a cileni.', { informationQuality: 0.06, predictionAccuracy: 0.06 }],
    ['turnoutPotentialAnalysis', 'Analyza mobilizacniho potencialu', 'Zpresni odhad, kde ma mobilizace nejvyssi navratnost.', { informationQuality: 0.05, predictionAccuracy: 0.06 }],
    ['mediaMonitoring', 'Monitoring medii', 'Zlepsi vcasnou detekci reputacnich a medialnich rizik.', { informationQuality: 0.03, riskDetection: 0.08 }],
    ['socialMediaMonitoring', 'Monitoring socialnich siti', 'Zlepsi detekci digitalnich narativu a protimobilizace.', { informationQuality: 0.035, riskDetection: 0.07 }],
    ['mandateSimulation', 'Mandatova simulace', 'Zpresni prevod podpory na mandaty a strategicke prahy.', { informationQuality: 0.05, predictionAccuracy: 0.08 }],
    ['coalitionSimulation', 'Koalicni simulace', 'Zpresni povolebni scenare a citlivost koalicnich vztahu.', { informationQuality: 0.04, predictionAccuracy: 0.05 }],
    ['oppositionResearchAnalysis', 'Analyza opposition research', 'Vyhodnoti overitelnost, relevanci a rizika negativnich podkladu.', { informationQuality: 0.04, riskDetection: 0.07 }],
];
exports.analyticsActionTemplates = analytics.map(([id, name, description, effects], index) => ({
    availability: 'player_initiated',
    placement: 'analytics',
    id,
    name,
    description,
    category: 'analytics',
    legality: 'clean',
    ethicalRisk: id === 'oppositionResearchAnalysis' ? 0.12 : 0.02,
    allowedTargets: ['national', 'region', 'segment', 'issue', 'opponent'],
    requiredTargets: index === 2 ? ['region'] : ['national'],
    cost: (0, actionTypes_1.actionCost)({ money: 0.22 + index * 0.035, centralStaffHours: 5 + (index % 4), fatigue: 0.004 }),
    effects,
    risks: (0, actionTypes_1.actionRisks)({ mediaBacklash: 0.01, messageDiscipline: 0.01 }),
    tags: ['analytics', 'no_direct_support'],
}));
