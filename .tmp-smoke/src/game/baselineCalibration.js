"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calibratePartyAmplitudesToTargets = calibratePartyAmplitudesToTargets;
function calibratePartyAmplitudesToTargets(state, targets, options = {}) {
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
