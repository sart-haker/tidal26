import { cn } from "@/lib/cn";

interface PrizeCardProps {
  title: string;
  prize: string;
  featured?: boolean;
  className?: string;
}

export function PrizeCard({
  title,
  prize,
  featured = false,
  className,
}: PrizeCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl text-center",
        featured
          ? "bg-background/60 p-10 md:p-16"
          : "bg-background/40 p-6 md:p-10",
        className
      )}
    >
      <h3
        className={cn(
          "font-bubble text-text-primary mb-3",
          featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-bubble text-accent-blue",
          featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
        )}
      >
        {prize}
      </p>
    </div>
  );
}
