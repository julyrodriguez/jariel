"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { PROFILE_INFO } from "@/data/projectsData";
import { 
  ArrowDown, 
  Terminal, 
  ShieldCheck, 
  Copy, 
  Check 
} from "lucide-react";
import { sound } from "@/lib/sound";

export function HeroSection() {
  const { scrollToSection } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.links.email);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section 
      id="hero"
      className="snap-section relative justify-center items-center px-4 sm:px-8 py-20 md:py-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-60"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.12) 0%, rgba(139, 92, 246, 0.08) 35%, rgba(7, 9, 14, 0.98) 80%)"
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center space-y-8 my-auto">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-500/20 shadow-lg shadow-sky-500/5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-slate-300">
            Tech Lead & Senior Full Stack Engineer
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-xs font-mono text-sky-400">
            Buenos Aires, AR
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Diseño, Arquitectura y
            <span className="block mt-1 bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
              Desarrollo de Alta Escala
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Hola, soy <strong className="text-white font-semibold">{PROFILE_INFO.name}</strong>. 
            Transformo requerimientos complejos en aplicaciones web inmersivas, reactivas a 60fps y plataformas empresariales de misión crítica.
          </p>
        </div>

        {/* Key Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          {PROFILE_INFO.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-3.5 rounded-2xl glass-card border border-white/5 flex flex-col items-center justify-center transition-all duration-300 hover:border-sky-500/30 hover:scale-105"
            >
              <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide uppercase mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Terminal / Live Tech Stack Strip */}
        <div className="w-full max-w-3xl glass-panel rounded-2xl border border-white/10 p-4 text-left shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs text-slate-400">
            <div className="flex items-center gap-2 font-mono">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>julian@jariel:~$ node --version && pm2 list</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
          </div>
          <div className="pt-3 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-sky-950/60 border border-sky-500/30 text-sky-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" /> Next.js 16 (App Router)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> React 19 + TypeScript
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Node.js & Express
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Firebase & Firestore
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Framer Motion (60fps)
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-600 text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> Linux / PM2 / Domótica
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              sound.playSuccess();
              scrollToSection("vacas-locas");
            }}
            className="group px-6 py-3 rounded-xl font-semibold text-sm text-slate-900 bg-gradient-to-r from-sky-400 to-teal-300 shadow-lg shadow-sky-400/20 hover:shadow-sky-400/35 hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <span>Explorar Proyectos en Producción</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              sound.playPop();
              scrollToSection("about");
            }}
            className="px-5 py-3 rounded-xl font-medium text-sm text-slate-300 glass-panel border border-white/10 hover:border-white/30 hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Formación Académica & Stack</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="px-4 py-3 rounded-xl text-xs font-mono text-slate-400 glass-panel border border-white/10 hover:border-white/30 hover:text-slate-200 transition-all duration-200 flex items-center gap-2"
            title="Copiar email de contacto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">¡Email Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>{PROFILE_INFO.links.email}</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity pointer-events-auto">
        <button
          onClick={() => scrollToSection("vacas-locas")}
          className="flex flex-col items-center gap-1 text-[11px] font-mono text-slate-400"
          aria-label="Desplazar hacia abajo"
        >
          <span>Scroll o flechas para navegar</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
        </button>
      </div>
    </section>
  );
}
