import type { MatchedAnomaly, WeldAlignment } from "./types";

export const sampleMatchedAnomalies: MatchedAnomaly[] = [
  { run1_idx: 300, run2_idx: 789, confidence: 0.704, event_type: "METAL_LOSS", run1_distance: 9452.84, run2_distance: 9476.30, run1_clock: 1.63, run2_clock: 1.45, depth_run1: 13, depth_run2: 20, depth_change: 7, depth_growth_rate: 1.0, length_run1: 1.1, length_run2: 9.4, length_change: 8.3, length_growth_rate: 1.19, width_run1: 1.58, width_run2: 4.5, width_change: 2.92, width_growth_rate: 0.42, is_critical: false },
  { run1_idx: 301, run2_idx: 790, confidence: 0.706, event_type: "METAL_LOSS", run1_distance: 9453.04, run2_distance: 9476.59, run1_clock: 2.97, run2_clock: 2.33, depth_run1: 13, depth_run2: 16, depth_change: 3, depth_growth_rate: 0.43, length_run1: 1.34, length_run2: 5.2, length_change: 3.86, length_growth_rate: 0.55, width_run1: 1.73, width_run2: 1.1, width_change: -0.63, width_growth_rate: -0.09, is_critical: false },
  { run1_idx: 45, run2_idx: 112, confidence: 0.92, event_type: "METAL_LOSS", run1_distance: 1523.40, run2_distance: 1547.82, run1_clock: 6.0, run2_clock: 6.08, depth_run1: 22, depth_run2: 42, depth_change: 20, depth_growth_rate: 2.86, length_run1: 3.2, length_run2: 5.8, length_change: 2.6, length_growth_rate: 0.37, width_run1: 2.1, width_run2: 3.9, width_change: 1.8, width_growth_rate: 0.26, is_critical: true },
  { run1_idx: 78, run2_idx: 203, confidence: 0.85, event_type: "CLUSTER", run1_distance: 2891.10, run2_distance: 2915.33, run1_clock: 10.5, run2_clock: 10.42, depth_run1: 18, depth_run2: 25, depth_change: 7, depth_growth_rate: 1.0, length_run1: 4.5, length_run2: 6.1, length_change: 1.6, length_growth_rate: 0.23, width_run1: 3.0, width_run2: 4.2, width_change: 1.2, width_growth_rate: 0.17, is_critical: false },
  { run1_idx: 152, run2_idx: 410, confidence: 0.61, event_type: "DENT", run1_distance: 5102.55, run2_distance: 5128.90, run1_clock: 12.0, run2_clock: 11.83, depth_run1: 8, depth_run2: 9, depth_change: 1, depth_growth_rate: 0.14, length_run1: 2.0, length_run2: 2.1, length_change: 0.1, length_growth_rate: 0.01, width_run1: 1.5, width_run2: 1.6, width_change: 0.1, width_growth_rate: 0.01, is_critical: false },
  { run1_idx: 200, run2_idx: 530, confidence: 0.78, event_type: "METAL_LOSS", run1_distance: 6780.20, run2_distance: 6805.44, run1_clock: 3.25, run2_clock: 3.17, depth_run1: 30, depth_run2: 48, depth_change: 18, depth_growth_rate: 2.57, length_run1: 2.8, length_run2: 4.9, length_change: 2.1, length_growth_rate: 0.3, width_run1: 1.9, width_run2: 3.2, width_change: 1.3, width_growth_rate: 0.19, is_critical: true },
  { run1_idx: 88, run2_idx: 244, confidence: 0.55, event_type: "METAL_LOSS_MFG", run1_distance: 3200.80, run2_distance: 3225.10, run1_clock: 8.0, run2_clock: 7.75, depth_run1: 10, depth_run2: 11, depth_change: 1, depth_growth_rate: 0.14, length_run1: 1.0, length_run2: 1.2, length_change: 0.2, length_growth_rate: 0.03, width_run1: 0.8, width_run2: 0.9, width_change: 0.1, width_growth_rate: 0.01, is_critical: false },
  { run1_idx: 310, run2_idx: 820, confidence: 0.88, event_type: "METAL_LOSS", run1_distance: 9800.50, run2_distance: 9825.12, run1_clock: 4.5, run2_clock: 4.42, depth_run1: 25, depth_run2: 40, depth_change: 15, depth_growth_rate: 2.14, length_run1: 3.5, length_run2: 5.0, length_change: 1.5, length_growth_rate: 0.21, width_run1: 2.5, width_run2: 3.8, width_change: 1.3, width_growth_rate: 0.19, is_critical: true },
  { run1_idx: 120, run2_idx: 335, confidence: 0.73, event_type: "CLUSTER", run1_distance: 4100.00, run2_distance: 4124.80, run1_clock: 9.0, run2_clock: 9.17, depth_run1: 15, depth_run2: 19, depth_change: 4, depth_growth_rate: 0.57, length_run1: 5.0, length_run2: 5.8, length_change: 0.8, length_growth_rate: 0.11, width_run1: 3.5, width_run2: 4.0, width_change: 0.5, width_growth_rate: 0.07, is_critical: false },
  { run1_idx: 260, run2_idx: 690, confidence: 0.67, event_type: "METAL_LOSS", run1_distance: 8400.33, run2_distance: 8425.60, run1_clock: 7.5, run2_clock: 7.33, depth_run1: 20, depth_run2: 28, depth_change: 8, depth_growth_rate: 1.14, length_run1: 2.0, length_run2: 3.5, length_change: 1.5, length_growth_rate: 0.21, width_run1: 1.5, width_run2: 2.8, width_change: 1.3, width_growth_rate: 0.19, is_critical: false },
  { run1_idx: 55, run2_idx: 145, confidence: 0.94, event_type: "METAL_LOSS", run1_distance: 1890.60, run2_distance: 1915.10, run1_clock: 5.25, run2_clock: 5.33, depth_run1: 35, depth_run2: 55, depth_change: 20, depth_growth_rate: 2.86, length_run1: 4.0, length_run2: 6.5, length_change: 2.5, length_growth_rate: 0.36, width_run1: 2.8, width_run2: 4.5, width_change: 1.7, width_growth_rate: 0.24, is_critical: true },
  { run1_idx: 175, run2_idx: 465, confidence: 0.82, event_type: "METAL_LOSS", run1_distance: 5800.90, run2_distance: 5825.44, run1_clock: 11.0, run2_clock: 10.92, depth_run1: 12, depth_run2: 17, depth_change: 5, depth_growth_rate: 0.71, length_run1: 1.8, length_run2: 2.5, length_change: 0.7, length_growth_rate: 0.1, width_run1: 1.2, width_run2: 1.9, width_change: 0.7, width_growth_rate: 0.1, is_critical: false },
];

export const sampleWeldAlignments: WeldAlignment[] = [
  { run1_idx: 10, run2_idx: 11, joint_number: 30, run1_distance: 28.69, run2_distance: 28.56, offset: -0.13 },
  { run1_idx: 12, run2_idx: 13, joint_number: 40, run1_distance: 38.83, run2_distance: 39.34, offset: 0.51 },
  { run1_idx: 14, run2_idx: 15, joint_number: 50, run1_distance: 53.72, run2_distance: 54.64, offset: 0.92 },
  { run1_idx: 15, run2_idx: 17, joint_number: 60, run1_distance: 94.06, run2_distance: 94.67, offset: 0.61 },
  { run1_idx: 20, run2_idx: 22, joint_number: 100, run1_distance: 450.20, run2_distance: 452.10, offset: 1.90 },
  { run1_idx: 25, run2_idx: 28, joint_number: 150, run1_distance: 980.55, run2_distance: 983.80, offset: 3.25 },
  { run1_idx: 30, run2_idx: 34, joint_number: 200, run1_distance: 1520.80, run2_distance: 1525.40, offset: 4.60 },
  { run1_idx: 50, run2_idx: 55, joint_number: 350, run1_distance: 3200.10, run2_distance: 3208.50, offset: 8.40 },
  { run1_idx: 80, run2_idx: 88, joint_number: 500, run1_distance: 5100.30, run2_distance: 5112.90, offset: 12.60 },
  { run1_idx: 100, run2_idx: 110, joint_number: 650, run1_distance: 7500.00, run2_distance: 7518.20, offset: 18.20 },
];

// Aggregated data for charts
export const anomalyCountByType = [
  { type: "Metal Loss", run2015: 180, run2022: 245 },
  { type: "Cluster", run2015: 85, run2022: 120 },
  { type: "Dent", run2015: 42, run2022: 55 },
  { type: "MFG Loss", run2015: 25, run2022: 32 },
];

export const depthDistribution = [
  { distance: 0, run2015: 12, run2022: 15 },
  { distance: 1000, run2015: 18, run2022: 22 },
  { distance: 2000, run2015: 25, run2022: 30 },
  { distance: 3000, run2015: 22, run2022: 28 },
  { distance: 4000, run2015: 15, run2022: 20 },
  { distance: 5000, run2015: 30, run2022: 38 },
  { distance: 6000, run2015: 28, run2022: 35 },
  { distance: 7000, run2015: 20, run2022: 27 },
  { distance: 8000, run2015: 35, run2022: 42 },
  { distance: 9000, run2015: 32, run2022: 40 },
  { distance: 10000, run2015: 18, run2022: 25 },
];

export const weldOffsetProgression = [
  { distance: 0, offset: 0 },
  { distance: 50, offset: 0.5 },
  { distance: 100, offset: 0.8 },
  { distance: 500, offset: 2.1 },
  { distance: 1000, offset: 3.5 },
  { distance: 1500, offset: 4.8 },
  { distance: 2000, offset: 6.2 },
  { distance: 3000, offset: 8.5 },
  { distance: 4000, offset: 10.1 },
  { distance: 5000, offset: 12.8 },
  { distance: 6000, offset: 14.5 },
  { distance: 7000, offset: 16.2 },
  { distance: 8000, offset: 18.0 },
  { distance: 9000, offset: 20.5 },
  { distance: 10000, offset: 23.1 },
];

export const matchDistribution = [
  { name: "Matched", value: 348, color: "#10B981" },
  { name: "New", value: 1878, color: "#3B82F6" },
  { name: "Missing", value: 1426, color: "#8B5CF6" },
];

export const confidenceScores = [
  0.52, 0.55, 0.58, 0.55, 0.60, 0.62, 0.63, 0.61, 0.65, 0.67,
  0.68, 0.66, 0.70, 0.72, 0.71, 0.73, 0.75, 0.74, 0.76, 0.78,
  0.77, 0.79, 0.80, 0.82, 0.81, 0.83, 0.85, 0.84, 0.86, 0.88,
  0.87, 0.89, 0.90, 0.91, 0.92, 0.93, 0.94, 0.70, 0.72, 0.68,
  0.75, 0.78, 0.80, 0.65, 0.60, 0.55, 0.58, 0.62, 0.85, 0.88,
];

export const depthScatter = [
  { depth_run1: 13, depth_run2: 20, event_type: "METAL_LOSS" },
  { depth_run1: 13, depth_run2: 16, event_type: "METAL_LOSS" },
  { depth_run1: 22, depth_run2: 42, event_type: "METAL_LOSS" },
  { depth_run1: 18, depth_run2: 25, event_type: "CLUSTER" },
  { depth_run1: 8, depth_run2: 9, event_type: "DENT" },
  { depth_run1: 30, depth_run2: 48, event_type: "METAL_LOSS" },
  { depth_run1: 10, depth_run2: 11, event_type: "METAL_LOSS_MFG" },
  { depth_run1: 25, depth_run2: 40, event_type: "METAL_LOSS" },
  { depth_run1: 15, depth_run2: 19, event_type: "CLUSTER" },
  { depth_run1: 20, depth_run2: 28, event_type: "METAL_LOSS" },
  { depth_run1: 35, depth_run2: 55, event_type: "METAL_LOSS" },
  { depth_run1: 12, depth_run2: 17, event_type: "METAL_LOSS" },
  { depth_run1: 16, depth_run2: 22, event_type: "METAL_LOSS" },
  { depth_run1: 28, depth_run2: 35, event_type: "CLUSTER" },
  { depth_run1: 5, depth_run2: 7, event_type: "DENT" },
  { depth_run1: 19, depth_run2: 30, event_type: "METAL_LOSS" },
  { depth_run1: 14, depth_run2: 18, event_type: "METAL_LOSS" },
  { depth_run1: 24, depth_run2: 32, event_type: "METAL_LOSS" },
];

export const eventTypeDistribution = [
  { name: "Metal Loss", value: 245, color: "#7C5CFC" },
  { name: "Cluster", value: 120, color: "#3B82F6" },
  { name: "Dent", value: 55, color: "#06B6D4" },
  { name: "MFG Loss", value: 32, color: "#F59E0B" },
];

export const temperatureStyle = [
  { month: "Jan", high: 45, average: 35, low: 25 },
  { month: "Feb", high: 48, average: 38, low: 28 },
  { month: "Mar", high: 55, average: 45, low: 35 },
  { month: "Apr", high: 65, average: 52, low: 40 },
  { month: "May", high: 75, average: 62, low: 50 },
  { month: "Jun", high: 85, average: 72, low: 60 },
  { month: "Jul", high: 90, average: 78, low: 65 },
  { month: "Aug", high: 88, average: 76, low: 63 },
  { month: "Sep", high: 80, average: 68, low: 55 },
  { month: "Oct", high: 68, average: 55, low: 42 },
  { month: "Nov", high: 55, average: 45, low: 35 },
];
