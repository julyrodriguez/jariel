"use client";

import React, { useEffect, useRef } from "react";
import { ScrollIndicator } from "@/components/navigation/ScrollIndicator";
import { ScrollToTopMobile } from "@/components/navigation/ScrollToTopMobile";
import { MobileSectionDivider } from "@/components/navigation/MobileSectionDivider";
import { ProfileHeroCard } from "@/components/profile/ProfileHeroCard";
import { EducationCard } from "@/components/profile/EducationCard";
import { ProjectsHubCard } from "@/components/projects/ProjectsHubCard";
import { VacasLocasCard } from "@/components/projects/VacasLocasCard";
import { DemoPilatesCard } from "@/components/projects/DemoPilatesCard";
import { TiendaCard } from "@/components/projects/TiendaCard";
import { CinemarkCard } from "@/components/projects/CinemarkCard";
import { FinanzasCard } from "@/components/projects/FinanzasCard";
import { CaroNailsCard } from "@/components/projects/CaroNailsCard";
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
  "finanzas",
  "caronails"
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
    <div className="relative w-full h-screen overflow-hidden bg-[#08090d]">
      {/* Architectural Background Grid Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-architectural-grid opacity-60" />

      {/* Subtle Architectural Keylight (High-end Directional Atmosphere) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out opacity-25 blur-[90px]"
        style={{
          background: `radial-gradient(ellipse 60% 45% at 50% 30%, ${currentTheme.glow} 0%, transparent 75%)`
        }}
      />

      {/* Global Persistent Navigation Controls */}
      <ScrollIndicator />
      <ScrollToTopMobile />

      {/* Main Full-Screen Snap Scroll Container */}
      <main
        ref={containerRef}
        className="snap-container relative z-10 w-full h-screen"
      >
        {/* 1. Primera Card: Perfil Profesional, Propuesta de Valor & Acceso Rápido */}
        <ProfileHeroCard />

        {/* Separador Mobile: Formación */}
        <MobileSectionDivider number="02" label="FORMACIÓN" color="#818cf8" />

        {/* 2. Segunda Card: Formación Continua & Certificaciones Universitarias UTN */}
        <EducationCard />

        {/* Separador Mobile: Hub de Proyectos */}
        <MobileSectionDivider number="03" label="HUB DE PROYECTOS" color="#38bdf8" />

        {/* 3. Tercera Card: Hub Central de Proyectos con Mini Cards */}
        <ProjectsHubCard />

        {/* Separador Mobile: Proyecto Prode */}
        <MobileSectionDivider number="04" label="PRODE" color="#10b981" />

        {/* 4. Proyectos Individuales con Desglose Técnico & Sandboxes */}
        <VacasLocasCard />

        {/* Separador Mobile: Proyecto Pilates Studio */}
        <MobileSectionDivider number="05" label="PILATES STUDIO" color="#a855f7" />
        <DemoPilatesCard />

        {/* Separador Mobile: Proyecto Aura TM */}
        <MobileSectionDivider number="06" label="AURA TM" color="#f5e6d3" />
        <TiendaCard />

        {/* Separador Mobile: Proyecto Cinemark */}
        <MobileSectionDivider number="07" label="CINEMARK" color="#e50914" />
        <CinemarkCard />

        {/* Separador Mobile: Proyecto Finanzas */}
        <MobileSectionDivider number="08" label="FINANZAS" color="#2563eb" />
        <FinanzasCard />

        {/* Separador Mobile: Proyecto Caro Nails */}
        <MobileSectionDivider number="09" label="CARO NAILS" color="#f43f5e" />
        <CaroNailsCard />
      </main>
    </div>
  );
}
