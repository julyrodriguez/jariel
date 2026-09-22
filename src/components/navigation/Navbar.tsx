"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { PROFILE_INFO, PROJECTS_DATA } from "@/data/projectsData";
import { 
  Volume2, 
  VolumeX, 
  Sparkles, 
  ChevronRight 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { sound } from "@/lib/sound";

export function Navbar() {
  const { activeSection, currentTheme, soundEnabled, setSoundEnabled, scrollToSection } = useTheme();

  const getSectionTitle = () => {
    if (activeSection === "hero") return "Inicio • Full Stack Architect";
    if (activeSection === "about") return "Credenciales & Formación";
    if (activeSection in PROJECTS_DATA) return PROJECTS_DATA[activeSection].title;
    return "Portafolio";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-2.5 px-3 py-1.5 rounded-xl glass-panel border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: `${currentTheme.primary}40`,
              boxShadow: `0 0 15px ${currentTheme.glow}`
            }}
          >
            <div 
              className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs text-white transition-colors duration-300"
              style={{ backgroundColor: currentTheme.primary }}
            >
              JR
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1.5">
                {PROFILE_INFO.name}
              </span>
              <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Disponible</span>
              </span>
            </div>
          </button>

          {/* Active Context Breadcrumb (Hidden on extra small screens) */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs text-slate-300 border border-white/5">
            <Sparkles className="w-3.5 h-3.5" style={{ color: currentTheme.accent }} />
            <span className="text-slate-400">Contexto:</span>
            <span className="font-semibold text-white tracking-wide">
              {getSectionTitle()}
            </span>
          </div>
        </div>

        {/* Action Controls & External Profiles */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Audio Feedback Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
            title={soundEnabled ? "Desactivar efectos de sonido háptico" : "Activar efectos de sonido háptico"}
            aria-label="Sound toggle"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Quick Jump: Proyectos */}
          <button
            onClick={() => scrollToSection("vacas-locas")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <span>Proyectos</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </button>

          {/* Quick Jump: Credenciales */}
          <button
            onClick={() => scrollToSection("about")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel text-xs font-medium text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
          >
            <span>Credenciales</span>
          </button>

          {/* GitHub Profile */}
          <a
            href={PROFILE_INFO.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playPop()}
            className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white transition-all duration-200 hover:scale-105 hover:border-slate-400/40"
            title="Ver GitHub (@julyrodriguez)"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* LinkedIn Profile */}
          <a
            href={PROFILE_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playPop()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: currentTheme.primary,
              boxShadow: `0 0 15px ${currentTheme.glow}`
            }}
            title="Conectar en LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
}
