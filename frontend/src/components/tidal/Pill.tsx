import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface PillProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Pill({ icon, children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium",
        "bg-white/20 text-text-secondary backdrop-blur-sm",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
