"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadVoterFieldV03 = loadVoterFieldV03;
exports.loadRegionalizedVoterFieldV03 = loadRegionalizedVoterFieldV03;
exports.loadClusteredRegionalizedVoterFieldV03 = loadClusteredRegionalizedVoterFieldV03;
exports.decodeCompactVoterField = decodeCompactVoterField;
exports.decodeRegionalizedVoterField = decodeRegionalizedVoterField;
exports.inferSegmentLabel = inferSegmentLabel;
const voterField_v03_json_1 = __importDefault(require("../data/voterField.v03.json"));
const voterField_v03_regionalized_clustered_json_1 = __importDefault(require("../data/voterField.v03.regionalized.clustered.json"));
const voterField_v03_regionalized_json_1 = __importDefault(require("../data/voterField.v03.regionalized.json"));
const dimensions_1 = require("./dimensions");
const greenDealIssue_1 = require("./greenDealIssue");
const regionalEnrichment_1 = require("./regionalEnrichment");
const compactData = voterField_v03_json_1.default;
const clusteredRegionalCompactData = voterField_v03_regionalized_clustered_json_1.default;
const regionalCompactData = voterField_v03_regionalized_json_1.default;
function loadVoterFieldV03() {
    return decodeCompactVoterField(compactData);
}
function loadRegionalizedVoterFieldV03() {
    return decodeRegionalizedVoterField(regionalCompactData);
}
function loadClusteredRegionalizedVoterFieldV03() {
    return decodeRegionalizedVoterField(clusteredRegionalCompactData);
}
function decodeCompactVoterField(data) {
    const points = (0, greenDealIssue_1.enrichGreenDealIssuePreferences)(data.points.map((row, index) => decodePoint(data, row, index)));
    const positions = new Float32Array(points.length * dimensions_1.dimensionIds.length);
    const turnoutBase = new Float32Array(points.length);
    const volatility = new Float32Array(points.length);
    const weights = new Float64Array(points.length);
    for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
        const point = points[pointIndex];
        weights[pointIndex] = point.weight;
        turnoutBase[pointIndex] = point.turnoutBase ?? 0.65;
        volatility[pointIndex] = point.volatility ?? 0.5;
        for (let dimensionIndex = 0; dimensionIndex < dimensions_1.dimensionIds.length; dimensionIndex += 1) {
            positions[pointIndex * dimensions_1.dimensionIds.length + dimensionIndex] = point.position[dimensions_1.dimensionIds[dimensionIndex]];
        }
    }
    return {
        data,
        points,
        typed: {
            positions,
            turnoutBase,
            volatility,
            weights,
        },
    };
}
function decodeRegionalizedVoterField(data) {
    const points = (0, greenDealIssue_1.enrichGreenDealIssuePreferences)(data.points.map((row, index) => decodeRegionalPoint(data, row, index)));
    const positions = new Float32Array(points.length * dimensions_1.dimensionIds.length);
    const turnoutBase = new Float32Array(points.length);
    const volatility = new Float32Array(points.length);
    const weights = new Float64Array(points.length);
    for (let pointIndex = 0; pointIndex < points.length; pointIndex += 1) {
        const point = points[pointIndex];
        weights[pointIndex] = point.weight;
        turnoutBase[pointIndex] = point.turnoutBase ?? 0.65;
        volatility[pointIndex] = point.volatility ?? 0.5;
        for (let dimensionIndex = 0; dimensionIndex < dimensions_1.dimensionIds.length; dimensionIndex += 1) {
            positions[pointIndex * dimensions_1.dimensionIds.length + dimensionIndex] = point.position[dimensions_1.dimensionIds[dimensionIndex]];
        }
    }
    return {
        data,
        points,
        typed: {
            positions,
            turnoutBase,
            volatility,
            weights,
        },
    };
}
function inferSegmentLabel(position, deadZone = 0.18) {
    if (Math.abs(position.econ) <= deadZone && Math.abs(position.culture) <= deadZone) {
        return 'center';
    }
    if (position.econ < -deadZone && position.culture < -deadZone) {
        return 'lib_left';
    }
    if (position.econ > deadZone && position.culture < -deadZone) {
        return 'lib_right';
    }
    if (position.econ > deadZone && position.culture > deadZone) {
        return 'trad_right';
    }
    return 'trad_left';
}
function decodePoint(data, row, index) {
    const position = {
        authority: row[11],
        culture: row[10],
        econ: row[9],
        establishment: row[12],
        globalism: row[13],
        green: row[14],
        ukraine: row[15],
    };
    if (!(0, dimensions_1.isCompleteVector8D)(position)) {
        throw new Error(`Invalid voter point ${index}: incomplete 8D position.`);
    }
    const segmentLabel = data.dictionaries.segments[row[6]] ?? inferSegmentLabel(position);
    return {
        ageGroup: data.dictionaries.ageGroups[row[2]],
        education: data.dictionaries.education[row[3]],
        id: index,
        legacy: {
            greenDealPropensityRaw: row[16],
        },
        leftRight: data.dictionaries.leftRight[row[5]],
        position,
        regionId: data.dictionaries.regions[row[1]],
        segmentLabel,
        turnoutBase: row[7],
        urbanity: data.dictionaries.urbanity[row[4]],
        volatility: row[8],
        weight: row[0],
    };
}
function decodeRegionalPoint(data, row, index) {
    const position = {
        authority: row[14],
        culture: row[13],
        econ: row[12],
        establishment: row[15],
        globalism: row[16],
        green: row[17],
        ukraine: row[18],
    };
    if (!(0, dimensions_1.isCompleteVector8D)(position)) {
        throw new Error(`Invalid regional voter point ${index}: incomplete 8D position.`);
    }
    const krajId = data.dictionaries.kraje[row[2]];
    const kraj = regionalEnrichment_1.krajeById[krajId];
    const nuts2Id = data.dictionaries.nuts2[row[1]];
    const urbanity = data.dictionaries.urbanity[row[5]];
    const segmentLabel = data.dictionaries.segments[row[7]] ?? inferSegmentLabel(position);
    return {
        ageGroup: data.dictionaries.ageGroups[row[3]],
        education: data.dictionaries.education[row[4]],
        geography: {
            krajId,
            krajName: kraj?.name ?? krajId,
            metroArea: data.dictionaries.metroAreas[row[10]],
            nuts2Id,
            urbanity,
        },
        id: index,
        incomeProxy: row[20],
        legacy: {
            greenDealPropensityRaw: row[19],
        },
        leftRight: data.dictionaries.leftRight[row[6]],
        parentParticleId: String(row[21]),
        position,
        regionId: nuts2Id,
        segmentLabel,
        socioEconomicStatus: data.dictionaries.socioEconomicStatus[row[11]],
        syntheticRegionConfidence: row[22],
        turnoutBase: row[8],
        urbanity,
        volatility: row[9],
        weight: row[0],
    };
}
