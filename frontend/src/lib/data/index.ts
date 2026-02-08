import type {
  MatchedAnomaly,
  NewAnomaly,
  MissingAnomaly,
  WeldAlignment,
  ClusterStats,
  PredictionResult,
} from "../types";

import * as run0715 from "./run-2007-vs-2015";
import * as run1522 from "./run-2015-vs-2022";
import * as run0722 from "./run-2007-vs-2022";
import { clusters2007, clusters2015, clusters2022 } from "./clusters";
import { predictions } from "./predictions";

export interface RunData {
  matched: MatchedAnomaly[];
  newAnomalies: NewAnomaly[];
  missing: MissingAnomaly[];
  welds: WeldAlignment[];
}

const runDataMap: Record<string, RunData> = {
  "2007-2015": run0715,
  "2015-2022": run1522,
  "2007-2022": run0722,
};

const clusterMap: Record<number, ClusterStats[]> = {
  2007: clusters2007,
  2015: clusters2015,
  2022: clusters2022,
};

export function getRunData(run1: number, run2: number): RunData {
  return runDataMap[`${run1}-${run2}`] ?? { matched: [], newAnomalies: [], missing: [], welds: [] };
}

export function getClusterData(year: number): ClusterStats[] {
  return clusterMap[year] ?? [];
}

export function getPredictions(): PredictionResult[] {
  return predictions;
}
