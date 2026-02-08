import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function ChartCard({ title, subtitle, description, children, className }: ChartCardProps) {
  return (
    <Card title={title} subtitle={subtitle} padding="md" className={className}>
      {description && (
        <p className="text-xs text-text-muted -mt-1 mb-3">{description}</p>
      )}
      <div className={cn("w-full")}>{children}</div>
    </Card>
  );
}
