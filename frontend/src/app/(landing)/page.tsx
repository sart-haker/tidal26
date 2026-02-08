"use client";

import { Snowfall } from "@/components/snow/Snowfall";
import { HeroSection } from "@/components/sections/HeroSection";
import { AnalysisSection } from "@/components/sections/AnalysisSection";
import { UploadSection } from "@/components/sections/UploadSection";
import { Footer } from "@/components/tidal/Footer";

export default function Home() {
  return (
    <>
      <Snowfall />
      <main>
        <HeroSection />
        <AnalysisSection />
        <UploadSection />
      </main>
      <Footer />
    </>
  );
}
