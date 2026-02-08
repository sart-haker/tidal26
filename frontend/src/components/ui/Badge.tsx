import { cn } from "@/lib/cn";
import type { BadgeVariant } from "@/lib/types";
import { BADGE_COLORS } from "@/lib/constants";
import type { ReactNode } from "react";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className }: BadgeProps) {
  const colors = BADGE_COLORS[variant] || BADGE_COLORS.default;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colors.bg,
        colors.text,
        className
      )}
    >
      {children}
    </span>
  );
}
