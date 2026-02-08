import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  iconBg?: string;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  iconBg,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
          iconBg || "bg-blue-100 text-accent-primary"
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-text-dark mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
