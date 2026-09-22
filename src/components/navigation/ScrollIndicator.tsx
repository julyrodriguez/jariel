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
  { id: "profile", label: "Perfil & Certificados", badge: "01" },
  { id: "projects-hub", label: "Hub de Proyectos", badge: "02" },
  { id: "vacas-locas", label: "Vacas Locas", badge: "03" },
  { id: "demoPilates", label: "Demo Pilates", badge: "04" },
  { id: "tienda", label: "AURA™ Tienda", badge: "05" },
  { id: "cinemark-app", label: "Cinemark Suite", badge: "06" },
  { id: "finanzas", label: "Finanzas Suite", badge: "07" },
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
      <div className="p-2 rounded-2xl glass-panel border border-white/10 flex flex-col items-center gap-2.5 shadow-2xl backdrop-blur-xl">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => {
                sound.playPop();
                scrollToSection(section.id);
              }}
              className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              aria-label={`Ir a ${section.label}`}
            >
              {/* Tooltip on left */}
              <div 
                className={`absolute right-9 px-2.5 py-1 rounded-lg text-[11px] font-medium tracking-wide whitespace-nowrap transition-all duration-300 pointer-events-none glass-panel border border-white/10 shadow-lg ${
                  isActive
                    ? "opacity-100 translate-x-0 text-white font-semibold"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-slate-300"
                }`}
                style={{
                  borderColor: isActive ? `${currentTheme.primary}40` : "rgba(255, 255, 255, 0.1)"
                }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-mono text-slate-400">{section.badge}</span>
                  <span>{section.label}</span>
                </div>
              </div>

              {/* Indicator Pip */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? "w-2.5 h-6 rounded-full"
                    : "w-2 h-2 rounded-full bg-slate-600 group-hover:bg-slate-300 group-hover:scale-125"
                }`}
                style={{
                  backgroundColor: isActive ? currentTheme.primary : undefined,
                  boxShadow: isActive ? `0 0 10px ${currentTheme.glow}` : "none"
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Keyboard hint */}
      <div className="hidden lg:flex items-center gap-1 text-[10px] text-slate-500 font-mono tracking-tighter pr-1 select-none">
        <span className="px-1 py-0.5 rounded bg-slate-800/80 border border-white/5">↑</span>
        <span className="px-1 py-0.5 rounded bg-slate-800/80 border border-white/5">↓</span>
        <span>navegar</span>
      </div>
    </nav>
  );
}
