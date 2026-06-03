import baselineCalibrationV04 from './calibration/baselineCalibration.v04.json';
import type { BaselineCalibrationArtifact, PartyRegionalPriorMap } from './calibration/baselineCalibrationTypes';
import type { RegionalBaselineBias } from './calibration/regionalBaselineBias';
import type { GameState, PartyId } from './types';
import type { RegionId } from '../types/region';

export type BaselineSupportOptions = {
  disableProgramModifier?: boolean;
  partyRegionalPrior?: PartyRegionalPriorMap;
  partyRegionalPriorStrength?: number;
  regionalBaselineBias?: RegionalBaselineBias;
  regionalBaselineBiasStrength?: number;
};

type SupportResolver = (
  state: GameState,
  options?: BaselineSupportOptions,
) => {
  nationalSupport: Record<PartyId, number>;
  regionalSupport: GameState['regionalSupport'];
};

type CalibrationOptions = {
  disablePlayerProgramModifier?: boolean;
  learningRate?: number;
  maxAmplitude?: number;
  maxIterations?: number;
  minAmplitude?: number;
  supportResolver?: SupportResolver;
};

let nationalAmplitudeCalibrationRunCount = 0;

export function calibratePartyAmplitudesToTargets(
  state: GameState,
  targets: Partial<Record<PartyId, number>>,
  options: CalibrationOptions = {},
): GameState {
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

    for (const [partyId, target] of Object.entries(normalizedTargets) as [PartyId, number][]) {
      const runtime = nextState.partyRuntime[partyId];
      if (!runtime || target <= 0) {
        continue;
      }

      const actual = Math.max(0.0001, nationalSupport[partyId] ?? 0.0001);
      largestError = Math.max(largestError, Math.abs(target - actual));
      const logAmplitude = Math.log(Math.max(minAmplitude, runtime.field.amplitude));
      runtime.field.amplitude = clamp(
        Math.exp(logAmplitude + learningRate * Math.log(target / actual)),
        minAmplitude,
        maxAmplitude,
      );
    }

    if (largestError < 0.0015) {
      break;
    }
  }

  return nextState;
}

export function getNationalAmplitudeCalibrationRunCount() {
  return nationalAmplitudeCalibrationRunCount;
}

export function resetNationalAmplitudeCalibrationRunCount() {
  nationalAmplitudeCalibrationRunCount = 0;
}

export function getBaselineCalibrationV04(): BaselineCalibrationArtifact {
  return baselineCalibrationV04 as BaselineCalibrationArtifact;
}

export function applyPrecalibratedBaselineV04(state: GameState): GameState {
  return applyBaselineCalibrationArtifact(state, getBaselineCalibrationV04(), {
    partyRegionalPriorStrength: 1,
  });
}

export function applyBaselineCalibrationArtifact(
  state: GameState,
  artifact: BaselineCalibrationArtifact,
  options: { partyRegionalPriorStrength?: number } = {},
): GameState {
  const nextState = cloneState(state);

  for (const [partyId, amplitude] of Object.entries(artifact.final.partyAmplitude) as [PartyId, number][]) {
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

export function partyRegionalPriorUtilityModifier(
  partyId: PartyId,
  regionId: RegionId,
  prior: PartyRegionalPriorMap | undefined,
  strength = 0,
) {
  if (!prior || strength <= 0) {
    return 0;
  }

  return (prior[partyId]?.[regionId] ?? 0) * strength;
}

function normalizeTargets(targets: Partial<Record<PartyId, number>>) {
  const entries = Object.entries(targets).filter(([, value]) => Number.isFinite(value) && (value ?? 0) > 0) as [PartyId, number][];
  const total = entries.reduce((sum, [, value]) => sum + value, 0);
  const divisor = total || 1;
  return Object.fromEntries(entries.map(([partyId, value]) => [partyId, value / divisor])) as Partial<Record<PartyId, number>>;
}

function cloneState(state: GameState): GameState {
  return JSON.parse(JSON.stringify(state)) as GameState;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
