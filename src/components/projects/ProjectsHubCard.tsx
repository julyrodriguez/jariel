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
  Sparkles
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
      highlight: "Futbol y estadisticas EN VIVO y competencia de puntos por partidos acertados en +10 competencias.",
      quickStats: "En Vivo • +10 Torneos"
    },
    {
      id: "demoPilates",
      icon: <Calendar className="w-5 h-5 text-purple-400" />,
      highlight: "Gestion de turnos, reservas (sin login, utilizado por las clientas) y estadisticas actualmente en uso por Selene Pilates.",
      quickStats: "Sin Login • En Uso"
    },
    {
      id: "tienda",
      icon: <ShoppingBag className="w-5 h-5 text-[#f5e6d3]" />,
      highlight: "E-commerce 100% personalizado al estilo tiendanube.",
      quickStats: "Estilo Tiendanube"
    },
    {
      id: "cinemark-app",
      icon: <Film className="w-5 h-5 text-red-500" />,
      highlight: "Gestion diario de entradas, stock y necesidades de la proyeccion. Actualmente utilizado por algunos cines de Buenos aires.",
      quickStats: "Salas & Stock • Cines BA"
    },
    {
      id: "finanzas",
      icon: <Building2 className="w-5 h-5 text-blue-500" />,
      highlight: "Pagina 100% personalizada para el area de compras de la oficina corporativa de Cinemark, automatiza y procesa excels/pdf con IA para ahorro de tiempo entre otras funciones.",
      quickStats: "IA & Excels • Corporativo"
    },
    {
      id: "caronails",
      icon: <Sparkles className="w-5 h-5 text-rose-400" />,
      highlight: "Gestión integral de turnos, clientas, insumos y facturación. Actualmente en uso por un studio de Caro Nails.",
      quickStats: "En uso por clientes"
    }
  ];

  return (
    <section
      id="projects-hub"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background with Feathered Mask */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60 section-ambient-mask"
        style={{
          background: "radial-gradient(ellipse at 50% 35%, rgba(99, 102, 241, 0.16) 0%, rgba(16, 185, 129, 0.05) 50%, #07090e 100%)"
        }}
      />

      {/* Seamless Transition Vignettes */}
      <div className="section-vignette-top" />
      <div className="section-vignette-bottom" />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-5">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Hub Central de Proyectos
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Selecciona una tarjeta para navegar directamente a cada sistema y probar su demostración interactiva en vivo.
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

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Desliza horizontalmente
          </span>
          <span>6 Desarrollos →</span>
        </div>

        {/* 6 Interactive Mini Cards: Horizontal Swipe Deck on Mobile, Balanced 3x2 Grid on Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 pt-1 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4.5 md:overflow-visible md:pb-0 scroll-smooth">
          {projectList.map((item) => {
            const project = PROJECTS_DATA[item.id];
            const isHovered = hoveredProjectId === item.id;
            const colSpanClass = "md:col-span-1 lg:col-span-1";

            return (
              <div
                key={item.id}
                onMouseEnter={() => {
                  sound.playClick();
                  setHoveredProjectId(item.id);
                }}
                onMouseLeave={() => setHoveredProjectId(null)}
                className={`min-w-[85vw] sm:min-w-[72vw] md:min-w-0 snap-center p-4 sm:p-5 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between space-y-3.5 relative overflow-hidden group hover:scale-[1.02] shadow-xl ${colSpanClass} ${
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
                        {project.title}
                      </span>
                    </div>
                  </div>

                  {["cinemark-app", "demoPilates", "finanzas", "caronails"].includes(item.id) ? (
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/60 text-emerald-300 font-bold flex items-center gap-1.5 shadow-[0_0_14px_rgba(52,211,153,0.4)] animate-pulse shrink-0">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span>En uso por clientes</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-white/10 text-slate-300 font-semibold shrink-0">
                      {item.quickStats}
                    </span>
                  )}
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
                  <span>Ver Proyecto & Sandbox</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
