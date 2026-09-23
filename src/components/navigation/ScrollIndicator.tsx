"use client";

import React, { useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { SectionId } from "@/types";
import { sound } from "@/lib/sound";

interface NavItem {
  id: SectionId;
  label: string;
  badge: string;
}

const SECTIONS: NavItem[] = [
  { id: "profile", label: "Perfil", badge: "01" },
  { id: "education", label: "Formación", badge: "02" },
  { id: "projects-hub", label: "Hub de Proyectos", badge: "03" },
  { id: "vacas-locas", label: "Prode", badge: "04" },
  { id: "demoPilates", label: "Pilates Studio", badge: "05" },
  { id: "tienda", label: "Aura TM", badge: "06" },
  { id: "cinemark-app", label: "Cinemark", badge: "07" },
  { id: "finanzas", label: "Finanzas", badge: "08" },
  { id: "caronails", label: "Caro Nails", badge: "09" },
];

export function ScrollIndicator() {
  const { activeSection, currentTheme, scrollToSection } = useTheme();

  // Keyboard navigation support (ArrowDown, ArrowUp, J, K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
      if (currentIndex === -1) return;

      if (e.key === "ArrowDown" || e.key === "j" || e.key === "PageDown") {
        e.preventDefault();
        if (currentIndex < SECTIONS.length - 1) {
          scrollToSection(SECTIONS[currentIndex + 1].id);
        }
      } else if (e.key === "ArrowUp" || e.key === "k" || e.key === "PageUp") {
        e.preventDefault();
        if (currentIndex > 0) {
          scrollToSection(SECTIONS[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, scrollToSection]);

  return (
    <nav 
      aria-label="Navegación de secciones"
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-auto"
    >
      <div className="p-1.5 rounded-xl bg-[#0d0f17]/90 border border-white/[0.08] flex flex-col items-center gap-2 shadow-2xl backdrop-blur-md">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => {
                sound.playPop();
                scrollToSection(section.id);
              }}
              className="group relative flex items-center justify-center p-1 focus:outline-none"
              aria-label={`Ir a ${section.label}`}
            >
              {/* Tooltip on left */}
              <div 
                className={`absolute right-8 px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wide whitespace-nowrap transition-all duration-200 pointer-events-none bg-[#090b10] border shadow-xl ${
                  isActive
                    ? "opacity-100 translate-x-0 text-white font-semibold border-white/20"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-400 border-white/10"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] text-slate-500 font-mono">[{section.badge}]</span>
                  <span>{section.label}</span>
                </div>
              </div>

              {/* Indicator Pip */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-2 h-5 rounded-full"
                    : "w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-slate-400 group-hover:scale-125"
                }`}
                style={{
                  backgroundColor: isActive ? currentTheme.primary : undefined,
                  boxShadow: isActive ? `0 0 8px ${currentTheme.glow}` : "none"
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Keyboard hint */}
      <div className="hidden lg:flex items-center gap-1 text-[9px] text-slate-500 font-mono tracking-wider pr-1 select-none uppercase">
        <span className="px-1 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">↑</span>
        <span className="px-1 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">↓</span>
        <span>Nav</span>
      </div>
    </nav>
  );
}
