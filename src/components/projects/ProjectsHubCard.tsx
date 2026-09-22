"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { ProjectId } from "@/types";
import { 
  Gamepad2, 
  Calendar, 
  ShoppingBag, 
  Film, 
  Building2, 
  ArrowRight, 
  ShieldCheck 
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { sound } from "@/lib/sound";

export function ProjectsHubCard() {
  const { scrollToSection } = useTheme();
  const [hoveredProjectId, setHoveredProjectId] = useState<ProjectId | null>(null);

  const projectList: Array<{
    id: ProjectId;
    icon: React.ReactNode;
    highlight: string;
    quickStats: string;
  }> = [
    {
      id: "vacas-locas",
      icon: <Gamepad2 className="w-5 h-5 text-emerald-400" />,
      highlight: "Motor determinista de pronósticos deportivos y simulación en tiempo real.",
      quickStats: "< 45ms API • 3+ Torneos"
    },
    {
      id: "demoPilates",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
      highlight: "Gestión de turnos de Reformer con cancelación segura por token sin login.",
      quickStats: "-40% Ausentismo • LocalCache"
    },
    {
      id: "tienda",
      icon: <ShoppingBag className="w-5 h-5 text-[#f5e6d3]" />,
      highlight: "E-Commerce Headless desacoplado en tono cremita con físicas de resortes a 120 FPS.",
      quickStats: "0.2s Carga • +28% Conversión"
    },
    {
      id: "cinemark-app",
      icon: <Film className="w-5 h-5 text-red-500" />,
      highlight: "Control de 12+ salas, averías de 3,000+ butacas y telemetría xenón.",
      quickStats: "12 Auditorios • -65% Fallas"
    },
    {
      id: "finanzas",
      icon: <Building2 className="w-5 h-5 text-blue-500" />,
      highlight: "Tesorería corporativa, firma de órdenes por lotes y pagos bancarios.",
      quickStats: "+$120M ARS/mes • 3.5x Veloz"
    }
  ];

  return (
    <section
      id="projects-hub"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(99, 102, 241, 0.15) 0%, rgba(16, 185, 129, 0.08) 40%, rgba(7, 9, 14, 0.98) 85%)"
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-5">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                ECOSISTEMA DE DESARROLLOS
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                5 Sistemas en Producción
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Hub Central de Proyectos
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Selecciona una tarjeta para navegar directamente a la arquitectura detallada, desafíos técnicos resueltos y sandbox interactivo de cada sistema.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">
              Arquitecturas 100% Custom
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5">
              Cero Placeholders
            </span>
          </div>
        </div>

        {/* 5 Interactive Mini Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectList.map((item) => {
            const project = PROJECTS_DATA[item.id];
            const isHovered = hoveredProjectId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => {
                  sound.playClick();
                  setHoveredProjectId(item.id);
                }}
                onMouseLeave={() => setHoveredProjectId(null)}
                className={`p-4 sm:p-5 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between space-y-3.5 relative overflow-hidden group hover:scale-[1.02] shadow-xl ${
                  isHovered ? "shadow-2xl" : ""
                }`}
                style={{
                  borderColor: isHovered ? project.theme.primary : "rgba(255, 255, 255, 0.08)",
                  boxShadow: isHovered ? `0 0 25px ${project.theme.glow}` : undefined
                }}
              >
                {/* Glow ambient circle on corner */}
                <div 
                  className="w-24 h-24 rounded-full blur-2xl absolute -top-4 -right-4 opacity-20 pointer-events-none transition-opacity duration-300"
                  style={{ backgroundColor: project.theme.primary }}
                />

                {/* Top Badge & Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="p-2 rounded-xl transition-colors duration-300"
                      style={{ backgroundColor: `${project.theme.primary}20` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: project.theme.accent }}>
                        {project.theme.tag}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {project.year} • {project.status}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 font-semibold">
                    {item.quickStats}
                  </span>
                </div>

                {/* Title & Solution highlight */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-snug">
                    {item.highlight}
                  </p>
                </div>

                {/* Tech chips snippet */}
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/80 border border-white/5 text-slate-400"
                    >
                      {t.name}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Direct Action Link */}
                <button
                  onClick={() => {
                    sound.playSuccess();
                    scrollToSection(item.id);
                  }}
                  className="w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between mt-1 text-slate-950 shadow-md hover:shadow-lg"
                  style={{
                    backgroundColor: project.theme.primary,
                  }}
                >
                  <span>Ver Arquitectura & Sandbox</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}

          {/* Quick Technical Overview Card (Fill 6th slot for 2x3 or 3x2 grid balance) */}
          <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between space-y-3 shadow-xl bg-slate-950/50">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Criterios de Excelencia Técnica
              </span>
              <h4 className="text-sm font-bold text-white">
                Rigor de Arquitectura en Cada Sistema
              </h4>
              <p className="text-xs text-slate-400 leading-snug">
                Cada desarrollo implementa separación de responsabilidades, tipado estático, observabilidad y manejo atómico de concurrencia.
              </p>
            </div>

            <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Vacas Locas: Microservicios & Simulación</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Pilates: Transacciones ACID & Token Url</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f5e6d3]" />
                <span>AURA: Headless Cremita & Spring Physics</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Cinemark: Telemetría de Salas & Butacas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Finanzas: Flujo Multi-Divisa & Interbanking</span>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playPop();
                scrollToSection("vacas-locas");
              }}
              className="w-full py-2 px-3 rounded-xl text-xs font-semibold glass-panel border border-white/20 text-white hover:border-white/40 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Comenzar Recorrido Progresivo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
