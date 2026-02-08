import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  subtitle?: string;
  headerAction?: ReactNode;
  children: ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
}

const paddingStyles = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export function Card({
  title,
  subtitle,
  headerAction,
  children,
  padding = "md",
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface",
        paddingStyles[padding],
        className
      )}
    >
      {(title || headerAction) && (
        <div className={cn("flex items-center justify-between", padding === "none" ? "px-4 pt-4" : "mb-3")}>
          <div>
            {title && (
              <h3 className="text-sm font-semibold text-text-primary">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>
            )}
          </div>
          {headerAction}
        </div>
      )}
      {children}
    </div>
  );
}
