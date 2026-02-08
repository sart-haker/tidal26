import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface GradientCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function GradientCard({
  title,
  description,
  icon,
  children,
  className,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "gradient-card rounded-2xl p-8 text-white",
        className
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
