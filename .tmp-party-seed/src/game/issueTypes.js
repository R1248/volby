"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toVec3 = toVec3;
function toVec3(vector) {
    return {
        authority: vector.authority ?? 0,
        culture: vector.culture ?? 0,
        econ: vector.econ ?? 0,
    };
}
