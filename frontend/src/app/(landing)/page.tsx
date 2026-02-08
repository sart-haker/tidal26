"use client";

import { useState } from "react";
import { Snowfall } from "@/components/snow/Snowfall";
import { HeroSection } from "@/components/sections/HeroSection";
import { SnowDivider } from "@/components/sections/SnowDivider";
import { AnalysisSection } from "@/components/sections/AnalysisSection";
import { UploadSection } from "@/components/sections/UploadSection";
import type { DynamicResult } from "@/components/sections/UploadSection";
import { Footer } from "@/components/tidal/Footer";

export default function Home() {
  const [dynamicResult, setDynamicResult] = useState<DynamicResult | null>(
    null
  );

  return (
    <>
      <Snowfall />
      <main>
        <HeroSection />
        <SnowDivider />
        <AnalysisSection dynamicResult={dynamicResult} />
        <UploadSection onAnalysisComplete={setDynamicResult} />
      </main>
      <Footer />
    </>
  );
}
