"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calibratePartyAmplitudesToTargets = calibratePartyAmplitudesToTargets;
exports.getNationalAmplitudeCalibrationRunCount = getNationalAmplitudeCalibrationRunCount;
exports.resetNationalAmplitudeCalibrationRunCount = resetNationalAmplitudeCalibrationRunCount;
exports.getBaselineCalibrationV04 = getBaselineCalibrationV04;
exports.applyPrecalibratedBaselineV04 = applyPrecalibratedBaselineV04;
exports.applyBaselineCalibrationArtifact = applyBaselineCalibrationArtifact;
exports.partyRegionalPriorUtilityModifier = partyRegionalPriorUtilityModifier;
const baselineCalibration_v04_json_1 = __importDefault(require("./calibration/baselineCalibration.v04.json"));
let nationalAmplitudeCalibrationRunCount = 0;
function calibratePartyAmplitudesToTargets(state, targets, options = {}) {
    nationalAmplitudeCalibrationRunCount += 1;
    if (!options.supportResolver) {
        throw new Error('calibratePartyAmplitudesToTargets requires a supportResolver');
    }
    const maxIterations = options.maxIterations ?? 28;
    const learningRate = options.learningRate ?? 0.72;
    const minAmplitude = options.minAmplitude ?? 0.01;
    const maxAmplitude = options.maxAmplitude ?? 12;
    const supportOptions = options.disablePlayerProgramModifier ? { disableProgramModifier: true } : undefined;
    const normalizedTargets = normalizeTargets(targets);
    let nextState = cloneState(state);
    for (let iteration = 0; iteration < maxIterations; iteration += 1) {
        const { nationalSupport } = options.supportResolver(nextState, supportOptions);
        let largestError = 0;
        for (const [partyId, target] of Object.entries(normalizedTargets)) {
            const runtime = nextState.partyRuntime[partyId];
            if (!runtime || target <= 0) {
                continue;
            }
            const actual = Math.max(0.0001, nationalSupport[partyId] ?? 0.0001);
            largestError = Math.max(largestError, Math.abs(target - actual));
            const logAmplitude = Math.log(Math.max(minAmplitude, runtime.field.amplitude));
            runtime.field.amplitude = clamp(Math.exp(logAmplitude + learningRate * Math.log(target / actual)), minAmplitude, maxAmplitude);
        }
        if (largestError < 0.0015) {
            break;
        }
    }
    return nextState;
}
function getNationalAmplitudeCalibrationRunCount() {
    return nationalAmplitudeCalibrationRunCount;
}
function resetNationalAmplitudeCalibrationRunCount() {
    nationalAmplitudeCalibrationRunCount = 0;
}
function getBaselineCalibrationV04() {
    return baselineCalibration_v04_json_1.default;
}
function applyPrecalibratedBaselineV04(state) {
    return applyBaselineCalibrationArtifact(state, getBaselineCalibrationV04(), {
        partyRegionalPriorStrength: 1,
    });
}
function applyBaselineCalibrationArtifact(state, artifact, options = {}) {
    const nextState = cloneState(state);
    for (const [partyId, amplitude] of Object.entries(artifact.final.partyAmplitude)) {
        const runtime = nextState.partyRuntime[partyId];
        if (!runtime || !Number.isFinite(amplitude) || amplitude <= 0) {
            continue;
        }
        runtime.field.amplitude = amplitude;
    }
    nextState.baselineCalibrated = true;
    nextState.baselineMode = 'precalibrated-v04';
    nextState.partyRegionalPrior = artifact.final.partyRegionalPrior;
    nextState.partyRegionalPriorStrength = options.partyRegionalPriorStrength ?? 0;
    return nextState;
}
function partyRegionalPriorUtilityModifier(partyId, regionId, prior, strength = 0) {
    if (!prior || strength <= 0) {
        return 0;
    }
    return (prior[partyId]?.[regionId] ?? 0) * strength;
}
function normalizeTargets(targets) {
    const entries = Object.entries(targets).filter(([, value]) => Number.isFinite(value) && (value ?? 0) > 0);
    const total = entries.reduce((sum, [, value]) => sum + value, 0);
    const divisor = total || 1;
    return Object.fromEntries(entries.map(([partyId, value]) => [partyId, value / divisor]));
}
function cloneState(state) {
    return JSON.parse(JSON.stringify(state));
}
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
