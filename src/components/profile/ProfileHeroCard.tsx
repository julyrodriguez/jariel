"use client";

import React, { useState } from "react";
import { PROFILE_INFO, CERTIFICATES_DATA } from "@/data/projectsData";
import { 
  Award, 
  ArrowDown, 
  Check, 
  Copy, 
  Sparkles,
  Rocket,
  Zap,
  HeartHandshake,
  CheckCircle2,
  BrainCircuit
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { sound } from "@/lib/sound";

export function ProfileHeroCard() {
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
      id="profile"
      className="snap-section relative justify-center px-4 sm:px-8 py-10 md:py-16 overflow-hidden flex flex-col justify-center"
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

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-4 md:space-y-5">
        
        {/* Top Header / Profile Banner (Primera Persona & Tono Accesible) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-sky-950/80 text-sky-300 border border-sky-500/30">
                DESARROLLADOR WEB & SOLUCIONES DIGITALES
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Disponible para nuevos proyectos
              </span>
            </div>
            
            <div className="flex flex-wrap items-baseline gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white">
                ¡Hola! Soy {PROFILE_INFO.name}
              </h1>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {PROFILE_INFO.bio}
            </p>
          </div>

          {/* Social Profiles & Email Direct */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={PROFILE_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all"
              title="Mi perfil en LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>Conectar en LinkedIn</span>
            </a>

            <a
              href={PROFILE_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-white/10 hover:border-white/30 hover:scale-105 transition-all"
              title="Ver mis repositorios de código"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 glass-panel border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center gap-1.5"
              title="Copiar mi correo electrónico"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">¡Email copiado!</span>
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

        {/* 2-Column Balanced Layout: Sin Scrolls Internos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Columna Izquierda: Formación Actual en IA & Mi Propuesta de Valor (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            
            {/* Formación Académica Actual: Data Science & IA (Sin mencionar universidad) */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-sky-500/30 space-y-2 shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-950/80 to-sky-950/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sky-400">
                  <BrainCircuit className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Formación Actual
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {PROFILE_INFO.education.status}
                </span>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  {PROFILE_INFO.education.degree}
                </h2>
                <span className="text-xs text-sky-300/90 font-medium block mt-0.5">
                  Especialización en análisis predictivo, modelos de machine learning y soluciones con inteligencia artificial.
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2">
                {PROFILE_INFO.education.focus}
              </p>
            </div>

            {/* ¿En qué puedo ayudarte? (Explicación para gente no técnica) */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-2.5 shadow-xl flex-1 flex flex-col justify-between bg-slate-950/60">
              <div className="flex items-center gap-2 text-amber-400 border-b border-white/5 pb-2">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                  ¿Cómo puedo potenciar tu proyecto?
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0 mt-0.5">
                    <Rocket className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold text-xs">Páginas y Tiendas que Venden</strong>
                    <span className="text-slate-300 text-[11px] leading-snug block">
                      Diseños rápidos, claros y adaptados a celulares para que tus clientes encuentren lo que buscan sin perder tiempo.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold text-xs">Automatización de Tareas Diarias</strong>
                    <span className="text-slate-300 text-[11px] leading-snug block">
                      Sistemas de reservas, cálculos de pagos y reportes automáticos que te ahorran horas de trabajo manual.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0 mt-0.5">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold text-xs">Comunicación Clara y Cercana</strong>
                    <span className="text-slate-300 text-[11px] leading-snug block">
                      Hablo tu mismo idioma. Te explico todo de forma sencilla, sin tecnicismos confusos y con soporte constante.
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Cursos Técnicos en la Universidad Tecnológica Nacional (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl flex-1 flex flex-col justify-between bg-slate-950/60">
              
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Award className="w-4 h-4" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Cursos Técnicos y Certificaciones
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-semibold">
                  Universidad Tecnológica Nacional (UTN)
                </span>
              </div>

              {/* Lista limpia de los 5 Cursos UTN sin scroll interno */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CERTIFICATES_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className={`p-3 rounded-xl bg-slate-900/80 border border-white/5 hover:border-indigo-500/40 transition-all flex flex-col justify-between space-y-1.5 ${
                      cert.id === "experto-fullstack-utn" ? "sm:col-span-2 border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="text-xs font-bold text-white block">
                          {cert.title}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold shrink-0">
                        {cert.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 block">
                      {cert.issuer}
                    </span>

                    <p className="text-[11px] text-slate-300 leading-snug">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {cert.topics.slice(0, 2).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 border border-white/5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Ribbon Accesible */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/5 text-center">
                {PROFILE_INFO.stats.map((s, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-900/90 border border-white/5">
                    <span className="block text-xs sm:text-sm font-black text-sky-400 font-mono">{s.value}</span>
                    <span className="block text-[8px] sm:text-[9px] text-slate-400 uppercase font-medium mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Callout / Navegación Directa */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-sky-950/80 via-indigo-950/60 to-slate-950/90 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
              <div className="text-left space-y-0.5">
                <span className="text-xs font-bold text-white block">
                  Descubrí mis 5 sistemas funcionando
                </span>
                <span className="text-[11px] text-slate-400 block">
                  Cada proyecto cuenta con una demostración interactiva que podés probar vos mismo
                </span>
              </div>

              <button
                onClick={() => {
                  sound.playSuccess();
                  scrollToSection("projects-hub");
                }}
                className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-teal-300 hover:shadow-lg hover:shadow-sky-400/25 hover:scale-105 transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Ver Proyectos</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
