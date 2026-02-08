import { cn } from "@/lib/cn";
import { formatConfidence, getConfidenceLevel } from "@/lib/utils";

interface ConfidenceBadgeProps {
  score: number;
  className?: string;
}

const levelStyles = {
  high: "bg-status-success/20 text-status-success",
  medium: "bg-status-warning/20 text-status-warning",
  low: "bg-status-critical/20 text-status-critical",
};

export function ConfidenceBadge({ score, className }: ConfidenceBadgeProps) {
  const level = getConfidenceLevel(score);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        levelStyles[level],
        className
      )}
    >
      {formatConfidence(score)}
    </span>
  );
}
