import { cn } from "@/lib/cn";

interface WaveBackgroundProps {
  variant?: "top" | "bottom";
  className?: string;
}

export function WaveBackground({
  variant = "bottom",
  className,
}: WaveBackgroundProps) {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 w-full overflow-hidden leading-none pointer-events-none",
        variant === "bottom" ? "bottom-0" : "top-0",
        variant === "top" && "rotate-180",
        className
      )}
    >
      <svg
        className="relative block w-full h-[80px] md:h-[120px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
          className="fill-current text-bg-light opacity-100"
        />
        <path
          d="M0,70 C200,110 400,10 600,70 C800,130 1000,30 1200,70 L1200,120 L0,120 Z"
          className="fill-current text-bg-light opacity-60"
        />
        <path
          d="M0,80 C250,110 450,30 600,80 C750,130 950,40 1200,80 L1200,120 L0,120 Z"
          className="fill-current text-bg-light opacity-30"
        />
      </svg>
    </div>
  );
}
