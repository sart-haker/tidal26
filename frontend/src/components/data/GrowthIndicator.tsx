import { cn } from "@/lib/cn";
import { formatGrowthRate, getGrowthSeverity } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface GrowthIndicatorProps {
  rate: number | null;
  className?: string;
}

const severityColors = {
  critical: "text-status-critical",
  warning: "text-status-warning",
  normal: "text-status-success",
};

export function GrowthIndicator({ rate, className }: GrowthIndicatorProps) {
  if (rate === null || rate === undefined) {
    return <span className="text-text-muted">—</span>;
  }

  const severity = getGrowthSeverity(rate);
  const Icon = rate > 0 ? TrendingUp : rate < 0 ? TrendingDown : Minus;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-medium",
        severityColors[severity],
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {formatGrowthRate(rate)}
    </span>
  );
}
