import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

import baselineCalibration from "../src/game/calibration/baselineCalibration.v04.json";
import type { BaselineCalibrationArtifact } from "../src/game/calibration/baselineCalibrationTypes";
import { dimensionIds } from "../src/simulation/model/dimensions";
import { regionIdByKrajId } from "../src/simulation/model/regionalEnrichment";
import type { CompactRegionalVoterFieldData, DimensionId } from "../src/simulation/model/types";
import { loadClusteredRegionalizedVoterFieldV03 } from "../src/simulation/model/voterFieldLoader";
import type { RegionId } from "../src/types/region";

type CliOptions = {
  dryRun: boolean;
  outputPath: string;
  write: boolean;
};

type RegionSummary = {
  appliedPoints: number;
  knownPoints: number;
  norm: number;
  regionId: RegionId;
};

const dimensionColumnIndex: Record<DimensionId, number> = {
  authority: 14,
  culture: 13,
  econ: 12,
  establishment: 15,
  globalism: 16,
  green: 17,
  ukraine: 18,
};

const options = parseOptions(process.argv.slice(2));
const artifact = baselineCalibration as BaselineCalibrationArtifact;
const report = materialize(options, artifact);
printReport(report, options);

if (options.write && !options.dryRun) {
  mkdirSync(dirname(options.outputPath), { recursive: true });
  writeFileSync(options.outputPath, `${JSON.stringify(report.data, null, 2)}\n`, "utf8");
  console.log(`\nWrote calibrated voter field to ${options.outputPath}`);
} else {
  console.log("\nDry run only. Add --write to write the calibrated voter field JSON.");
}

function materialize(options: CliOptions, calibration: BaselineCalibrationArtifact) {
  const bundle = loadClusteredRegionalizedVoterFieldV03();
  const data = clone(bundle.data) as CompactRegionalVoterFieldData;
  const regionSummaries = new Map<RegionId, RegionSummary>();
  let knownRegionPoints = 0;
  let shiftedPoints = 0;
  let clampedValues = 0;

  for (let index = 0; index < bundle.points.length; index += 1) {
    const point = bundle.points[index];
    const row = data.points[index];
    const krajId = point.geography?.krajId;
    const regionId = krajId ? (regionIdByKrajId[krajId] as RegionId | undefined) : undefined;

    if (!row || !regionId) {
      continue;
    }

    knownRegionPoints += 1;
    const shift = calibration.final.regionShift[regionId];
    const summary = getRegionSummary(regionSummaries, regionId, shiftNorm(shift));
    summary.knownPoints += 1;

    if (!shift) {
      continue;
    }

    shiftedPoints += 1;
    summary.appliedPoints += 1;

    for (const dimension of dimensionIds) {
      const columnIndex = dimensionColumnIndex[dimension];
      const nextValue = clamp(row[columnIndex] + shift[dimension], -1, 1);
      if (nextValue !== row[columnIndex] + shift[dimension]) {
        clampedValues += 1;
      }
      row[columnIndex] = round6(nextValue);
    }
  }

  data.source = `${data.source}; calibrated baseline v04`;
  data.sourceFile = options.outputPath;
  data.version = "0.4-calibrated";

  return {
    clampedValues,
    data,
    knownRegionPoints,
    regionSummaries: [...regionSummaries.values()].sort((a, b) => b.norm - a.norm),
    shiftedPoints,
    totalPoints: bundle.points.length,
  };
}

function getRegionSummary(
  summaries: Map<RegionId, RegionSummary>,
  regionId: RegionId,
  norm: number,
) {
  const existing = summaries.get(regionId);
  if (existing) {
    return existing;
  }

  const created = {
    appliedPoints: 0,
    knownPoints: 0,
    norm,
    regionId,
  };
  summaries.set(regionId, created);
  return created;
}

function printReport(report: ReturnType<typeof materialize>, options: CliOptions) {
  console.log("\n=== Materialize calibrated voter field v04 ===");
  console.log(`total points: ${report.totalPoints}`);
  console.log(`points with known region: ${report.knownRegionPoints}`);
  console.log(`points with applied shift: ${report.shiftedPoints}`);
  console.log(`clamped dimension values: ${report.clampedValues}`);
  console.log(`output: ${options.outputPath}`);

  console.log("\nRegion shift summary");
  for (const row of report.regionSummaries) {
    console.log(
      `${row.regionId}: norm ${row.norm.toFixed(3)}, known ${row.knownPoints}, shifted ${row.appliedPoints}`,
    );
  }
}

function parseOptions(args: string[]): CliOptions {
  const dryRun = args.includes("--dry-run");
  return {
    dryRun,
    outputPath: stringArg(args, "--output", "src/simulation/model/voterField.calibrated.v04.json"),
    write: args.includes("--write") && !dryRun,
  };
}

function stringArg(args: string[], name: string, fallback: string) {
  return (
    args
      .find((arg) => arg.startsWith(`${name}=`))
      ?.split("=")
      .slice(1)
      .join("=") || fallback
  );
}

function shiftNorm(shift: BaselineCalibrationArtifact["final"]["regionShift"][RegionId] | undefined) {
  if (!shift) {
    return 0;
  }

  return Math.sqrt(dimensionIds.reduce((sum, dimension) => sum + shift[dimension] * shift[dimension], 0));
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function round6(value: number) {
  return Math.round(value * 1_000_000) / 1_000_000;
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
