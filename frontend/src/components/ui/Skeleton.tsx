import { cn } from "@/lib/cn";

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export function Skeleton({ width, height, className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-border/50",
        className
      )}
      style={{ width, height }}
    />
  );
}
