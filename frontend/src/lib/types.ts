import type { ReactNode } from "react";

// === Domain Data Types ===

export interface MatchedAnomaly {
  run1_idx: number;
  run2_idx: number;
  confidence: number;
  event_type: string;
  run1_distance: number;
  run2_distance: number;
  run1_clock: number | null;
  run2_clock: number | null;
  depth_run1: number | null;
  depth_run2: number | null;
  depth_change: number | null;
  depth_growth_rate: number | null;
  length_run1: number | null;
  length_run2: number | null;
  length_change: number | null;
  length_growth_rate: number | null;
  width_run1: number | null;
  width_run2: number | null;
  width_change: number | null;
  width_growth_rate: number | null;
  is_critical: boolean;
}

export interface NewAnomaly {
  original_index: number;
  log_distance: number;
  event_type_normalized: string;
  clock_decimal: number | null;
  depth_percent: number | null;
  length: number | null;
  width: number | null;
  joint_number: number | null;
}

export interface MissingAnomaly {
  original_index: number;
  log_distance: number;
  event_type_normalized: string;
  clock_decimal: number | null;
  depth_percent: number | null;
  length: number | null;
  width: number | null;
  joint_number: number | null;
}

export interface WeldAlignment {
  run1_idx: number;
  run2_idx: number;
  joint_number: number;
  run1_distance: number;
  run2_distance: number;
  offset: number;
}

export interface RunComparison {
  run1_year: number;
  run2_year: number;
  matched: MatchedAnomaly[];
  new_anomalies: NewAnomaly[];
  missing: MissingAnomaly[];
  welds: WeldAlignment[];
}

// === UI Component Types ===

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";
export type BadgeVariant = "critical" | "matched" | "new" | "missing" | "uncertain" | "default";

export interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: ReactNode;
  sparklineData?: number[];
  status?: "success" | "warning" | "critical" | "info";
}

export interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (value: unknown, row: T) => ReactNode;
}
