"use client";

import React, { useState } from "react";
import { PROFILE_INFO, CERTIFICATES_DATA, SKILL_CATEGORIES } from "@/data/projectsData";
import { 
  GraduationCap, 
  Award, 
  ArrowDown, 
  Check, 
  Copy, 
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  Server,
  Database,
  Workflow,
  Smartphone,
  Flame,
  Palette,
  GitBranch,
  Radio,
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { sound } from "@/lib/sound";

export function ProfileHeroCard() {
  const { scrollToSection } = useTheme();
  const [copied, setCopied] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);
  const [mobileTab, setMobileTab] = useState<"education" | "skills">("education");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.links.email);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 2500);
  };

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers": return <Layers className="w-3.5 h-3.5 text-sky-400" />;
      case "Code2": return <Code2 className="w-3.5 h-3.5 text-sky-400" />;
      case "Palette": return <Palette className="w-3.5 h-3.5 text-indigo-400" />;
      case "Sparkles": return <Sparkles className="w-3.5 h-3.5 text-emerald-400" />;
      case "Smartphone": return <Smartphone className="w-3.5 h-3.5 text-purple-400" />;
      case "Server": return <Server className="w-3.5 h-3.5 text-emerald-400" />;
      case "Flame": return <Flame className="w-3.5 h-3.5 text-amber-400" />;
      case "Database": return <Database className="w-3.5 h-3.5 text-teal-400" />;
      case "Workflow": return <Workflow className="w-3.5 h-3.5 text-sky-400" />;
      case "Terminal": return <Terminal className="w-3.5 h-3.5 text-slate-300" />;
      case "Cpu": return <Cpu className="w-3.5 h-3.5 text-amber-400" />;
      case "Radio": return <Radio className="w-3.5 h-3.5 text-teal-400" />;
      case "GitBranch": return <GitBranch className="w-3.5 h-3.5 text-rose-400" />;
      default: return <Code2 className="w-3.5 h-3.5 text-sky-400" />;
    }
  };

  return (
    <section 
      id="profile"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background with Feathered Mask */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-60 section-ambient-mask"
        style={{
          background: "radial-gradient(ellipse at 50% 35%, rgba(56, 189, 248, 0.16) 0%, rgba(99, 102, 241, 0.05) 50%, #07090e 100%)"
        }}
      />

      {/* Grid Pattern with Feathered Mask */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none section-ambient-mask"
        style={{
          backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "44px 44px"
        }}
      />

      {/* Seamless Transition Vignette */}
      <div className="section-vignette-bottom" />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-5">
        
        {/* Top Header / Profile Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-950 text-sky-300 border border-sky-500/30">
                PERFIL PROFESIONAL & CREDENCIALES
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponible para Proyectos de Alto Impacto
              </span>
            </div>
            
            <div className="flex items-baseline gap-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
                {PROFILE_INFO.name}
              </h1>
              <span className="text-xs sm:text-sm font-mono text-sky-400 font-semibold hidden md:inline">
                / {PROFILE_INFO.title}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {PROFILE_INFO.bio}
            </p>
          </div>

          {/* Social Profiles & Email Direct */}
          <div className="flex items-center gap-2">
            <a
              href={PROFILE_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all"
              title="Ver Perfil en LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PROFILE_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-white/10 hover:border-white/30 hover:scale-105 transition-all"
              title="Ver GitHub"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 glass-panel border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center gap-1.5"
              title="Copiar email de contacto"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">¡Copiado!</span>
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

        {/* Mobile Segmented View Switcher */}
        <div className="lg:hidden flex items-center p-1 rounded-xl bg-slate-950/80 border border-white/10 shadow-lg">
          <button
            onClick={() => {
              sound.playClick();
              setMobileTab("education");
            }}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileTab === "education"
                ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Formación & Cursos</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setMobileTab("skills");
            }}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileTab === "skills"
                ? "bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Stack & Skills</span>
          </button>
        </div>

        {/* 2-Column Core Layout: Education & Certifications (Left 6 cols) vs Skills Matrix & CTA (Right 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Formación Universitaria & Certificaciones Extraídas (6 cols) */}
          <div className={`${mobileTab === "education" ? "flex" : "hidden lg:flex"} lg:col-span-6 flex-col justify-between space-y-3.5`}>
            
            {/* Academic Degree Highlight */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-sky-500/30 space-y-2.5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Formación Académica Universitaria
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold">
                  {PROFILE_INFO.education.year}
                </span>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {PROFILE_INFO.education.degree}
                </h3>
                <span className="text-xs text-slate-300 font-mono">
                  {PROFILE_INFO.education.institution}
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2">
                {PROFILE_INFO.education.focus}
              </p>
            </div>

            {/* Courses & Professional Certifications Carousel / List */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Cursos Técnicos & Certificaciones
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {CERTIFICATES_DATA.length} Credenciales Registradas
                </span>
              </div>

              {/* Scrollable Certificates Deck */}
              <div className="space-y-2.5 max-h-[220px] overflow-y-auto pr-1">
                {CERTIFICATES_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-3 rounded-xl bg-slate-950/70 border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {cert.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {cert.issuer} {cert.hours ? `• ${cert.hours} hrs de formación` : ""}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold shrink-0">
                        {cert.badge}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-tight">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-white/5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Technical Skill Matrix & Navigation Action (6 cols) */}
          <div className={`${mobileTab === "skills" ? "flex" : "hidden lg:flex"} lg:col-span-6 flex-col justify-between space-y-3.5`}>
            
            {/* Skills Matrix */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              
              {/* Category tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Matriz de Especialidades Técnicas</span>
                </span>

                <div className="flex items-center gap-1">
                  {SKILL_CATEGORIES.map((cat, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playClick();
                        setActiveSkillCategory(idx);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors ${
                        activeSkillCategory === idx
                          ? "bg-sky-500 text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white bg-slate-900"
                      }`}
                    >
                      {cat.category.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-white/5 hover:border-sky-500/30 transition-all space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.iconName)}
                        <span className="text-xs font-bold text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-500/20 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats Ribbon */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/5 text-center">
                {PROFILE_INFO.stats.map((s, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-slate-900/90 border border-white/5">
                    <span className="block text-sm font-black text-white font-mono">{s.value}</span>
                    <span className="block text-[9px] text-slate-400 uppercase font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Callout / Navigation Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/80 via-indigo-950/60 to-slate-950/90 border border-sky-500/40 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
              <div className="text-left space-y-0.5">
                <span className="text-xs font-bold text-white block">
                  Explora el Hub Central de Proyectos
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Revisa las mini cards y sumérgete en la arquitectura de cada solución
                </span>
              </div>

              <button
                onClick={() => {
                  sound.playSuccess();
                  scrollToSection("projects-hub");
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-teal-300 hover:shadow-lg hover:shadow-sky-400/25 hover:scale-105 transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>Ir al Hub de Proyectos</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
