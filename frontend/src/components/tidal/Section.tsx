import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

export function HeroSection({ children, className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative bg-background min-h-screen flex items-center justify-center px-6 pt-24 pb-32",
        className
      )}
    >
      {children}
    </section>
  );
}

interface ContentSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function ContentSection({
  id,
  children,
  className,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative px-6 py-20 md:py-28 bg-background", className)}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
