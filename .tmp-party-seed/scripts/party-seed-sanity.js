"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("../src/game/engine");
const seed_1 = require("../src/game/seed");
const dimensions = [
    'econ',
    'culture',
    'authority',
    'establishment',
    'globalism',
    'green',
    'ukraine',
];
const state = (0, engine_1.initializeComputedState)((0, seed_1.createInitialGameState)());
console.log('Party seed centers');
for (const party of seed_1.parties) {
    const center = state.partyRuntime[party.id].field.center8D;
    if (!center) {
        console.log(`${party.id}: missing center8D`);
        continue;
    }
    console.log(`${party.id}: ${formatVector(center)}`);
}
console.log('\nPairwise ideological distances');
for (let a = 0; a < seed_1.partyIds.length; a += 1) {
    for (let b = a + 1; b < seed_1.partyIds.length; b += 1) {
        const partyA = seed_1.partyIds[a];
        const partyB = seed_1.partyIds[b];
        const centerA = requireCenter(partyA);
        const centerB = requireCenter(partyB);
        console.log(`${partyA} - ${partyB}: ${distance(centerA, centerB).toFixed(3)}`);
    }
}
console.log('\nAverage width');
for (const partyId of seed_1.partyIds) {
    const width = state.partyRuntime[partyId].field.width8D;
    if (!width) {
        console.log(`${partyId}: missing width8D`);
        continue;
    }
    console.log(`${partyId}: ${average(dimensions.map((dimension) => width[dimension])).toFixed(3)}`);
}
console.log('\nInitial national support');
for (const partyId of seed_1.partyIds) {
    console.log(`${partyId}: ${formatPercent(state.nationalSupport[partyId])}`);
}
console.log('\nOrganization completeness');
const regionIds = state.regions.map((region) => region.id);
for (const partyId of seed_1.partyIds) {
    const missing = regionIds.filter((regionId) => state.partyRuntime[partyId].organization[regionId] === undefined);
    console.log(`${partyId}: ${missing.length === 0 ? 'complete' : `missing ${missing.join(', ')}`}`);
}
function requireCenter(partyId) {
    const center = state.partyRuntime[partyId].field.center8D;
    if (!center) {
        throw new Error(`${partyId} is missing center8D`);
    }
    return center;
}
function formatVector(vector) {
    return dimensions.map((dimension) => `${dimension} ${vector[dimension].toFixed(2)}`).join(', ');
}
function distance(a, b) {
    return Math.sqrt(dimensions.reduce((sum, dimension) => {
        const delta = a[dimension] - b[dimension];
        return sum + delta * delta;
    }, 0));
}
function average(values) {
    return values.reduce((sum, value) => sum + value, 0) / values.length;
}
function formatPercent(value) {
    return `${(value * 100).toFixed(2)} %`;
}
