import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  bubble?: boolean;
  underlineColor?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  bubble = true,
  underlineColor,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl tracking-tight text-text-primary",
          bubble ? "font-bubble" : "font-bold"
        )}
      >
        {title}
      </h2>
      {underlineColor && (
        <div
          className={cn("h-1 w-24 mt-4 rounded-full", underlineColor)}
          style={centered ? { margin: "1rem auto 0" } : undefined}
        />
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl text-text-secondary",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
