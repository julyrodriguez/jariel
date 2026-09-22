"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { ScrollIndicator } from "@/components/navigation/ScrollIndicator";
import { HeroSection } from "@/components/hero/HeroSection";
import { VacasLocasCard } from "@/components/projects/VacasLocasCard";
import { DemoPilatesCard } from "@/components/projects/DemoPilatesCard";
import { TiendaCard } from "@/components/projects/TiendaCard";
import { CinemarkCard } from "@/components/projects/CinemarkCard";
import { FinanzasCard } from "@/components/projects/FinanzasCard";
import { AboutSection } from "@/components/about/AboutSection";
import { useTheme } from "@/context/ThemeContext";
import { SectionId } from "@/types";

const SECTION_IDS: SectionId[] = [
  "hero",
  "vacas-locas",
  "demoPilates",
  "tienda",
  "cinemark-app",
  "finanzas",
  "about"
];

export default function Home() {
  const { setActiveSection } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      threshold: 0.55 // When 55% of section is visible
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as SectionId;
          if (SECTION_IDS.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#07090e]">
      {/* Global Persistent Navigation Controls */}
      <Navbar />
      <ScrollIndicator />

      {/* Main Full-Screen Snap Scroll Container */}
      <main
        ref={containerRef}
        className="snap-container relative z-10 w-full h-screen"
      >
        <HeroSection />
        <VacasLocasCard />
        <DemoPilatesCard />
        <TiendaCard />
        <CinemarkCard />
        <FinanzasCard />
        <AboutSection />
      </main>
    </div>
  );
}
