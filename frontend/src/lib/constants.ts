export const CHART_COLORS = [
  "#B8A9E8", // lavender
  "#8EC5E8", // baby blue
  "#F2A5B3", // soft pink
  "#8FD4C0", // mint
  "#F7C59F", // peach
  "#E8887A", // soft coral
] as const;

export const RUN_YEARS = [2007, 2015, 2022] as const;

export const RUN_PAIRS = [
  { run1: 2007, run2: 2015, label: "2007 vs 2015", years: 8 },
  { run1: 2015, run2: 2022, label: "2015 vs 2022", years: 7 },
  { run1: 2007, run2: 2022, label: "2007 vs 2022", years: 15 },
] as const;

export const GROWTH_THRESHOLDS = { critical: 2.0, warning: 1.0 } as const;
export const CONFIDENCE_THRESHOLDS = { high: 0.8, medium: 0.6 } as const;

export const EVENT_TYPES = [
  "METAL_LOSS",
  "CLUSTER",
  "DENT",
  "METAL_LOSS_MFG",
] as const;

export const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  critical: { bg: "bg-status-critical/20", text: "text-status-critical" },
  matched: { bg: "bg-status-success/20", text: "text-status-success" },
  new: { bg: "bg-accent-blue/20", text: "text-accent-blue" },
  missing: { bg: "bg-status-missing/20", text: "text-status-missing" },
  uncertain: { bg: "bg-status-warning/20", text: "text-status-warning" },
  default: { bg: "bg-border/50", text: "text-text-secondary" },
};
