import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center px-6"
    >
      {/* Penguin decoration - right side */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-90">
        <Image
          src="/tidalicon_1.png"
          alt="Tidal penguin mascot with ski goggles"
          width={220}
          height={220}
          priority
        />
      </div>

      {/* Main content */}
      <div className="text-center max-w-2xl relative z-10">
        <h1 className="font-bubble text-5xl md:text-7xl text-text-primary mb-4 drop-shadow-sm">
          RCP Track
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-medium mb-6">
          Pipeline ILI Anomaly Tracking &amp; Analysis
        </p>
        <p className="text-text-muted leading-relaxed max-w-lg mx-auto">
          Track pipeline anomalies across 2007, 2015, and 2022 inspection runs.
          Identify interaction zones, assess structural integrity risks, and
          prioritize maintenance with advanced data alignment and ML predictions.
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#analysis"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted hover:text-text-secondary transition-colors animate-bounce"
        aria-label="Scroll to analysis"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  );
}
