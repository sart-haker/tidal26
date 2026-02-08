"use client";

interface TooltipPayloadEntry {
  color?: string;
  name?: string;
  value?: number | string;
}

interface ChartTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
  label?: string | number;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-surface-hover px-3 py-2 shadow-lg">
      {label !== undefined && (
        <p className="mb-1.5 text-xs font-medium text-text-secondary">
          {label}
        </p>
      )}
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-text-muted">{entry.name}:</span>
          <span className="font-medium text-text-primary">
            {typeof entry.value === "number"
              ? entry.value.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })
              : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}
