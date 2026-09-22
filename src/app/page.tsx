"use client";

import React, { useEffect, useRef } from "react";
import { ScrollIndicator } from "@/components/navigation/ScrollIndicator";
import { MobileBottomDock } from "@/components/navigation/MobileBottomDock";
import { ProfileHeroCard } from "@/components/profile/ProfileHeroCard";
import { EducationCard } from "@/components/profile/EducationCard";
import { ProjectsHubCard } from "@/components/projects/ProjectsHubCard";
import { VacasLocasCard } from "@/components/projects/VacasLocasCard";
import { DemoPilatesCard } from "@/components/projects/DemoPilatesCard";
import { TiendaCard } from "@/components/projects/TiendaCard";
import { CinemarkCard } from "@/components/projects/CinemarkCard";
import { FinanzasCard } from "@/components/projects/FinanzasCard";
import { useTheme } from "@/context/ThemeContext";
import { SectionId } from "@/types";

const SECTION_IDS: SectionId[] = [
  "profile",
  "education",
  "projects-hub",
  "vacas-locas",
  "demoPilates",
  "tienda",
  "cinemark-app",
  "finanzas"
];

export default function Home() {
  const { currentTheme, setActiveSection } = useTheme();
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
      {/* Global Soft Ambient Lighting Bloom (morphs smoothly across sections) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out opacity-35 blur-[130px]"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 50% 45%, ${currentTheme.glow} 0%, transparent 80%)`
        }}
      />

      {/* Global Persistent Navigation Controls */}
      <ScrollIndicator />
      <MobileBottomDock />

      {/* Main Full-Screen Snap Scroll Container */}
      <main
        ref={containerRef}
        className="snap-container relative z-10 w-full h-screen"
      >
        {/* 1. Primera Card: Perfil Profesional, Propuesta de Valor & Acceso Rápido */}
        <ProfileHeroCard />

        {/* 2. Segunda Card: Formación Continua & Certificaciones Universitarias UTN */}
        <EducationCard />

        {/* 3. Tercera Card: Hub Central de Proyectos con Mini Cards */}
        <ProjectsHubCard />

        {/* 3. Proyectos Individuales con Desglose Técnico & Sandboxes */}
        <VacasLocasCard />
        <DemoPilatesCard />
        <TiendaCard />
        <CinemarkCard />
        <FinanzasCard />
      </main>
    </div>
  );
}
