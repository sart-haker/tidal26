import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-medium text-text-secondary"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn(
          "w-full rounded-lg border bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted",
          "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error ? "border-status-critical" : "border-border",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-status-critical">{error}</p>}
    </div>
  );
}
