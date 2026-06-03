"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nmsTargetShares = exports.defaultVoterSalience = exports.dimensionIds = void 0;
exports.vector8D = vector8D;
exports.createVector8D = createVector8D;
exports.isDimensionId = isDimensionId;
exports.isCompleteVector8D = isCompleteVector8D;
exports.clampLatent = clampLatent;
// Core compass dimensions. Green Deal is intentionally excluded: it is a concrete issue,
// not a deep latent identity dimension. Old voter files may still carry green_deal as legacy data.
exports.dimensionIds = [
    'econ',
    'culture',
    'authority',
    'establishment',
    'globalism',
    'green',
    'ukraine',
];
exports.defaultVoterSalience = vector8D(1);
exports.nmsTargetShares = {
    center: 0.15,
    lib_left: 0.2,
    lib_right: 0.05,
    trad_left: 0.48,
    trad_right: 0.12,
};
function vector8D(value) {
    return {
        authority: value,
        culture: value,
        econ: value,
        establishment: value,
        globalism: value,
        green: value,
        ukraine: value,
    };
}
function createVector8D(values) {
    return Object.fromEntries(exports.dimensionIds.map((dimension) => [dimension, values[dimension]]));
}
function isDimensionId(value) {
    return exports.dimensionIds.includes(value);
}
function isCompleteVector8D(value) {
    return exports.dimensionIds.every((dimension) => Number.isFinite(value[dimension]));
}
function clampLatent(value) {
    return Math.max(-1, Math.min(1, value));
}
