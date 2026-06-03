"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.krajProfilesByNuts2 = exports.krajIdByRegionId = exports.regionIdByKrajId = exports.krajeById = exports.krajProfiles = exports.kraje = void 0;
exports.normalizeUrbanity = normalizeUrbanity;
exports.inferIncomeProxy = inferIncomeProxy;
exports.inferSocioEconomicStatus = inferSocioEconomicStatus;
exports.calculateKrajFitScore = calculateKrajFitScore;
exports.splitParticleByKraj = splitParticleByKraj;
exports.assignMetroArea = assignMetroArea;
exports.matchesCampaignTarget = matchesCampaignTarget;
exports.calculateRegionalEffectStrength = calculateRegionalEffectStrength;
exports.validateRegionalEnrichment = validateRegionalEnrichment;
exports.normalizeNuts2 = normalizeNuts2;
const krajProfiles_v03_1 = __importDefault(require("../data/krajProfiles.v03"));
const dimensions_1 = require("./dimensions");
const config = krajProfiles_v03_1.default;
exports.kraje = config.kraje;
exports.krajProfiles = config.profiles;
exports.krajeById = Object.fromEntries(exports.kraje.map((kraj) => [kraj.id, kraj]));
exports.regionIdByKrajId = Object.fromEntries(exports.kraje.map((kraj) => [kraj.id, kraj.regionId]));
exports.krajIdByRegionId = Object.fromEntries(exports.kraje.map((kraj) => [kraj.regionId, kraj.id]));
exports.krajProfilesByNuts2 = exports.krajProfiles.reduce((accumulator, profile) => {
    accumulator[profile.nuts2Id] = accumulator[profile.nuts2Id] ?? [];
    accumulator[profile.nuts2Id].push(profile);
    return accumulator;
}, {});
function normalizeUrbanity(value) {
    if (!value) {
        return undefined;
    }
    if (value === 'metro' || value === 'large_town' || value === 'town' || value === 'rural') {
        return value;
    }
    if (value === 'large' || value === 'city' || value === 'urban') {
        return 'large_town';
    }
    if (value === 'village') {
        return 'rural';
    }
    return undefined;
}
function inferIncomeProxy(education, urbanity, ageGroup) {
    let value = 0.48;
    if (education === 'tertiary') {
        value += 0.22;
    }
    else if (education === 'lower') {
        value -= 0.16;
    }
    if (urbanity === 'metro') {
        value += 0.16;
    }
    else if (urbanity === 'large_town') {
        value += 0.09;
    }
    else if (urbanity === 'rural') {
        value -= 0.07;
    }
    if (ageGroup === '55_plus') {
        value -= 0.05;
    }
    else if (ageGroup === '25_39') {
        value += 0.04;
    }
    return clamp(value, 0, 1);
}
function inferSocioEconomicStatus(incomeProxy) {
    if (incomeProxy >= 0.66) {
        return 'high';
    }
    if (incomeProxy <= 0.38) {
        return 'low';
    }
    return 'middle';
}
function calculateKrajFitScore(point, profile) {
    const urbanity = normalizeUrbanity(point.urbanity);
    const baseWeight = profile.electorateWeightWithinNuts2;
    const urbanityFit = urbanity ? profile.urbanityProfile[urbanity] ?? 0.02 : 1;
    const educationFit = point.education && profile.educationProfile ? profile.educationProfile[point.education] ?? 0.05 : 1;
    const ageFit = point.ageGroup && profile.ageProfile ? profile.ageProfile[point.ageGroup] ?? 0.08 : 1;
    const latentFit = calculateLatentFit(point.position, profile.latentProfileHint);
    const metroFit = calculateMetroFit(urbanity, profile);
    return (baseWeight *
        clamp(urbanityFit / 0.25, 0.25, 2.5) *
        clamp(educationFit / 0.25, 0.5, 1.8) *
        clamp(ageFit / 0.25, 0.5, 1.5) *
        clamp(latentFit, 0.75, 1.25) *
        clamp(metroFit, 0.7, 1.6));
}
function splitParticleByKraj(point) {
    const nuts2Id = normalizeNuts2(point.regionId ?? point.geography?.nuts2Id);
    if (!nuts2Id) {
        return [];
    }
    const candidates = exports.krajProfilesByNuts2[nuts2Id] ?? [];
    const scores = candidates.map((profile) => ({
        profile,
        score: calculateKrajFitScore(point, profile),
    }));
    const totalScore = scores.reduce((sum, item) => sum + item.score, 0) || 1;
    return scores.map(({ profile, score }) => {
        const probability = score / totalScore;
        const urbanity = normalizeUrbanity(point.urbanity) ?? inferUrbanityFromProfile(profile);
        const incomeProxy = inferIncomeProxy(point.education, urbanity, point.ageGroup);
        const kraj = exports.krajeById[profile.krajId];
        const geography = {
            krajId: profile.krajId,
            krajName: profile.krajName,
            metroArea: assignMetroArea(urbanity, profile),
            nuts2Id,
            urbanity,
        };
        return {
            ...point,
            geography,
            id: point.id,
            incomeProxy,
            parentParticleId: String(point.id),
            regionId: nuts2Id,
            socioEconomicStatus: inferSocioEconomicStatus(incomeProxy),
            syntheticRegionConfidence: clamp(probability * (kraj ? 1 : 0.85), 0, 1),
            urbanity,
            weight: point.weight * probability,
        };
    });
}
function assignMetroArea(urbanity, profile) {
    if (profile.krajId === 'CZ010') {
        return 'praha';
    }
    if (urbanity !== 'large_town' && urbanity !== 'metro') {
        return 'none';
    }
    const metroEntries = Object.entries(profile.metroAreaShares ?? {}).filter(([metro, share]) => metro !== 'none' && (share ?? 0) > 0);
    if (metroEntries.length === 0) {
        return 'none';
    }
    return metroEntries.sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))[0][0];
}
function matchesCampaignTarget(point, target) {
    const geography = point.geography;
    if (!geography) {
        return false;
    }
    if (target.krajIds && !target.krajIds.includes(geography.krajId))
        return false;
    if (target.nuts2Ids && (!geography.nuts2Id || !target.nuts2Ids.includes(geography.nuts2Id)))
        return false;
    if (target.metroAreas && !target.metroAreas.includes(geography.metroArea))
        return false;
    if (target.urbanity && (!geography.urbanity || !target.urbanity.includes(geography.urbanity)))
        return false;
    if (target.ageGroups && (!point.ageGroup || !target.ageGroups.includes(point.ageGroup)))
        return false;
    if (target.educationGroups && (!point.education || !target.educationGroups.includes(point.education)))
        return false;
    if (target.nmsBlocks && (!point.segmentLabel || !target.nmsBlocks.includes(point.segmentLabel)))
        return false;
    if (target.socioEconomicStatus && (!point.socioEconomicStatus || !target.socioEconomicStatus.includes(point.socioEconomicStatus)))
        return false;
    if (target.incomeProxyRange && !inRange(point.incomeProxy ?? 0.5, target.incomeProxyRange))
        return false;
    for (const [dimension, range] of Object.entries(target.latentFilter ?? {})) {
        if (!inRange(point.position[dimension], range))
            return false;
    }
    for (const [issueId, range] of Object.entries(target.issueAffinityFilter ?? {})) {
        if (!inRange(point.issuePreferences?.[issueId] ?? 0, range))
            return false;
    }
    return true;
}
function calculateRegionalEffectStrength(point, target) {
    if (!matchesCampaignTarget(point, target)) {
        return 0;
    }
    let strength = 0.45;
    const geography = point.geography;
    if (!geography)
        return 0;
    if (geography.metroArea !== 'none' && target.metroAreas?.includes(geography.metroArea))
        strength += 0.25;
    if (target.krajIds?.includes(geography.krajId))
        strength += 0.18;
    if (geography.urbanity && target.urbanity?.includes(geography.urbanity))
        strength += 0.08;
    if (point.socioEconomicStatus && target.socioEconomicStatus?.includes(point.socioEconomicStatus))
        strength += 0.06;
    if (target.incomeProxyRange && inRange(point.incomeProxy ?? 0.5, target.incomeProxyRange))
        strength += 0.05;
    const latentFilters = Object.entries(target.latentFilter ?? {});
    if (latentFilters.length > 0) {
        const closeness = latentFilters.reduce((sum, [dimension, range]) => {
            const center = (range[0] + range[1]) / 2;
            const halfWidth = Math.max(0.1, (range[1] - range[0]) / 2);
            return sum + clamp(1 - Math.abs(point.position[dimension] - center) / halfWidth, 0, 1);
        }, 0) / latentFilters.length;
        strength += closeness * 0.12;
    }
    const issueFilters = Object.entries(target.issueAffinityFilter ?? {});
    if (issueFilters.length > 0) {
        const closeness = issueFilters.reduce((sum, [issueId, range]) => {
            const center = (range[0] + range[1]) / 2;
            const halfWidth = Math.max(0.1, (range[1] - range[0]) / 2);
            return sum + clamp(1 - Math.abs((point.issuePreferences?.[issueId] ?? 0) - center) / halfWidth, 0, 1);
        }, 0) / issueFilters.length;
        strength += closeness * 0.12;
    }
    return clamp(strength, 0, 1);
}
function validateRegionalEnrichment(points) {
    const krajTotals = emptyKrajRecord(0);
    const particleCountByKraj = emptyKrajRecord(0);
    const nuts2Totals = {};
    const urbanityByKraj = {};
    const latentSums = {};
    let totalRepresentedVoters = 0;
    let missingMetadataCount = 0;
    let invalidMetadataCount = 0;
    for (const point of points) {
        totalRepresentedVoters += point.weight;
        if (!point.geography) {
            missingMetadataCount += 1;
            continue;
        }
        const { krajId, nuts2Id, urbanity } = point.geography;
        if (!exports.krajeById[krajId] || !nuts2Id || exports.krajeById[krajId].nuts2Id !== nuts2Id) {
            invalidMetadataCount += 1;
            continue;
        }
        krajTotals[krajId] += point.weight;
        particleCountByKraj[krajId] += 1;
        nuts2Totals[nuts2Id] = (nuts2Totals[nuts2Id] ?? 0) + point.weight;
        urbanityByKraj[krajId] = urbanityByKraj[krajId] ?? {};
        if (urbanity) {
            urbanityByKraj[krajId][urbanity] = (urbanityByKraj[krajId][urbanity] ?? 0) + point.weight;
        }
        latentSums[krajId] = latentSums[krajId] ?? {};
        for (const dimension of dimensions_1.dimensionIds) {
            latentSums[krajId][dimension] = (latentSums[krajId][dimension] ?? 0) + point.position[dimension] * point.weight;
        }
    }
    const averageLatentByKraj = Object.fromEntries(Object.entries(latentSums).map(([krajId, values]) => [
        krajId,
        Object.fromEntries(dimensions_1.dimensionIds.map((dimension) => [dimension, (values[dimension] ?? 0) / Math.max(1, krajTotals[krajId])])),
    ]));
    return {
        allKrajePresent: exports.kraje.every((kraj) => krajTotals[kraj.id] > 0),
        averageLatentByKraj,
        invalidMetadataCount,
        krajTotals,
        missingMetadataCount,
        nuts2Totals,
        particleCountByKraj,
        totalRepresentedVoters,
        urbanityByKraj,
    };
}
function normalizeNuts2(value) {
    if (!value) {
        return undefined;
    }
    const normalized = value.slice(0, 4);
    return ['CZ01', 'CZ02', 'CZ03', 'CZ04', 'CZ05', 'CZ06', 'CZ07', 'CZ08'].includes(normalized)
        ? normalized
        : undefined;
}
function calculateLatentFit(position, hint) {
    const entries = Object.entries(hint ?? {})
        .filter((entry) => entry[0] !== 'green_deal');
    if (entries.length === 0) {
        return 1;
    }
    const distance = entries.reduce((sum, [dimension, target]) => sum + Math.abs(position[dimension] - target), 0) / entries.length;
    return 1.08 - distance * 0.18;
}
function calculateMetroFit(urbanity, profile) {
    const hasMetro = Object.entries(profile.metroAreaShares ?? {}).some(([metro, share]) => metro !== 'none' && (share ?? 0) > 0);
    if ((urbanity === 'metro' || urbanity === 'large_town') && hasMetro)
        return 1.22;
    if ((urbanity === 'rural' || urbanity === 'town') && !hasMetro)
        return 1.12;
    return 1;
}
function inferUrbanityFromProfile(profile) {
    return (Object.entries(profile.urbanityProfile).sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))[0]?.[0] ?? 'town');
}
function emptyKrajRecord(value) {
    return Object.fromEntries(exports.kraje.map((kraj) => [kraj.id, value]));
}
function inRange(value, range) {
    return value >= range[0] && value <= range[1];
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
