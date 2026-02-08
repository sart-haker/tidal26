import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children"> {
  label?: string;
  options: SelectOption[];
  error?: string;
}

export function Select({ label, options, error, className, id, ...props }: SelectProps) {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-medium text-text-secondary"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          className={cn(
            "w-full appearance-none rounded-lg border bg-surface px-3 py-2 pr-8 text-sm text-text-primary",
            "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error ? "border-status-critical" : "border-border",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
      </div>
      {error && <p className="text-xs text-status-critical">{error}</p>}
    </div>
  );
}
