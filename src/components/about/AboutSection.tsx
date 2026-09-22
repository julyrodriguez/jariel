"use client";

import React, { useState } from "react";
import { PROFILE_INFO, SKILL_CATEGORIES } from "@/data/projectsData";
import { 
  GraduationCap, 
  Award, 
  Code2, 
  Terminal, 
  Radio, 
  Layers, 
  Sparkles, 
  Mail, 
  Cpu, 
  Server, 
  Database, 
  Workflow, 
  Smartphone, 
  Flame, 
  Palette, 
  GitBranch 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { sound } from "@/lib/sound";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Icon map for skills
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return <Layers className="w-4 h-4 text-sky-400" />;
      case "Code2": return <Code2 className="w-4 h-4 text-sky-400" />;
      case "Palette": return <Palette className="w-4 h-4 text-indigo-400" />;
      case "Sparkles": return <Sparkles className="w-4 h-4 text-emerald-400" />;
      case "Smartphone": return <Smartphone className="w-4 h-4 text-purple-400" />;
      case "Server": return <Server className="w-4 h-4 text-emerald-400" />;
      case "Flame": return <Flame className="w-4 h-4 text-amber-400" />;
      case "Database": return <Database className="w-4 h-4 text-teal-400" />;
      case "Workflow": return <Workflow className="w-4 h-4 text-sky-400" />;
      case "Terminal": return <Terminal className="w-4 h-4 text-slate-300" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-amber-400" />;
      case "Radio": return <Radio className="w-4 h-4 text-teal-400" />;
      case "GitBranch": return <GitBranch className="w-4 h-4 text-rose-400" />;
      default: return <Code2 className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section
      id="about"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Background Deep Technical Blueprint Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60"
        style={{
          background: "radial-gradient(ellipse at 50% 25%, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.08) 45%, rgba(6, 9, 15, 0.98) 100%)"
        }}
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-950 text-sky-300 border border-sky-500/30">
                CREDENCIALES & TRAYECTORIA
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Formación Universitaria Completa
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Perfil Profesional & Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-normal">
              Ingeniería de software con rigor metodológico, foco en rendimiento extremo y automatización integral de punta a punta.
            </p>
          </div>

          {/* Direct Connection Buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={PROFILE_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Ver LinkedIn</span>
            </a>
            <a
              href={PROFILE_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-white/10 hover:border-white/30 hover:scale-105 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Main Grid: Academic & Certifications on Left, Categorized Skill Grid on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Academic Credentials, Specializations & Philosophy (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Academic Card */}
            <div className="glass-panel p-5 rounded-2xl border border-sky-500/30 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-sky-400">
                <GraduationCap className="w-5 h-5" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider">
                  Formación Académica
                </h3>
              </div>
              
              <div>
                <h4 className="text-base font-bold text-white">
                  {PROFILE_INFO.education.degree}
                </h4>
                <span className="text-xs text-slate-400 font-mono block mt-0.5">
                  {PROFILE_INFO.education.institution} • {PROFILE_INFO.education.year}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2.5">
                {PROFILE_INFO.education.focus}
              </p>
            </div>

            {/* Specialization & Masterclass Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-5 h-5" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider">
                  Especializaciones & Certificaciones
                </h3>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">
                    Power BI & Data Engineering: De Cero a Arquitecto Analítico
                  </span>
                  <p className="text-[11px] text-slate-400">
                    Modelado Dimensional en Estrella, lenguaje DAX avanzado (Time Intelligence, iteradores, contextos de filtro), Power Query (M) y optimización del motor VertiPaq.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                  <span className="font-bold text-white block">
                    Arquitecturas Cloud Serverless & Real-Time Data
                  </span>
                  <p className="text-[11px] text-slate-400">
                    Diseño de pipelines serverless sobre Firebase Functions, Firestore con reglas de seguridad granulares y sincronizaciones bidireccionales con clientes web y móviles.
                  </p>
                </div>
              </div>
            </div>

            {/* Engineering Pillars */}
            <div className="p-4 rounded-xl glass-card border border-white/5 space-y-2 text-xs font-mono">
              <span className="text-slate-400 uppercase text-[10px] tracking-wider block font-bold">
                Pilares de Ingeniería
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10">0% Placeholders</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10">TypeScript Strict</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10">SSR Streaming</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10">Microinteracciones 60fps</span>
              </div>
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills Matrix (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-5 shadow-2xl">
            
            {/* Category Tab Switcher */}
            <div className="flex flex-wrap items-center gap-1.5 border-b border-white/10 pb-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(idx);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === idx
                      ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20"
                      : "text-slate-400 hover:text-white glass-panel border border-white/5"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* Active Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 hover:border-sky-500/30 transition-all space-y-1.5 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="font-bold text-white text-xs">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-500/20 font-semibold shrink-0">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal pl-8">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Contact Callout */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/60 via-indigo-950/40 to-slate-950/80 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-center sm:text-left">
                <span className="font-bold text-white block">
                  ¿Tienes un desafío técnico o proyecto de alta escala?
                </span>
                <span className="text-slate-400 text-[11px]">
                  Escríbeme directamente a <strong>{PROFILE_INFO.links.email}</strong>
                </span>
              </div>

              <a
                href={`mailto:${PROFILE_INFO.links.email}`}
                onClick={() => sound.playSuccess()}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-300 hover:shadow-lg hover:shadow-sky-400/20 hover:scale-105 transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Iniciar Conversación</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
