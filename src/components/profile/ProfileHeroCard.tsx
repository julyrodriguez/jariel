"use client";

import React, { useState } from "react";
import { PROFILE_INFO } from "@/data/projectsData";
import { 
  ArrowDown, 
  Check, 
  Copy, 
  Sparkles, 
  Rocket, 
  Zap, 
  HeartHandshake,
  GraduationCap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useTheme } from "@/context/ThemeContext";
import { sound } from "@/lib/sound";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut"
    }
  }
};

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
      className="snap-section relative justify-center px-4 sm:px-8 py-10 md:py-14 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle Directional Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-40 section-ambient-mask"
        style={{
          background: "radial-gradient(ellipse 65% 45% at 50% 25%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)"
        }}
      />

      {/* Seamless Vignettes */}
      <div className="section-vignette-bottom" />

      {/* Animated Staggered Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full mx-auto my-auto space-y-5 md:space-y-6"
      >
        
        {/* Top Architectural Telemetry Strip */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono border-b border-white/[0.08] pb-3"
        >
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-white font-bold">[01]</span>
            <span className="text-slate-600">{"//"}</span>
            <span className="uppercase tracking-widest text-slate-300">PORTAFOLIO & ARQUITECTURA</span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="tracking-wider">DISPONIBLE // BUENOS AIRES, AR</span>
          </div>
        </motion.div>

        {/* Editorial Hero Statement: Name, Bio & Tactile Hub */}
        <motion.div 
          variants={itemVariants} 
          className="space-y-3.5"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold block">
              Full-Stack Architect & Software Engineer
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.04em] text-white">
              {PROFILE_INFO.name}
            </h1>
          </div>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-4xl leading-relaxed text-center sm:text-left font-normal">
            {PROFILE_INFO.bio}
          </p>

          {/* Social Links & Tactile Copy Hub */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap pt-1">
            <a
              href={PROFILE_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.25] transition-all shadow-sm"
              title="Mi perfil en LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>Conectar en LinkedIn</span>
            </a>

            <a
              href={PROFILE_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all shadow-sm"
              title="Ver mis repositorios de código"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>GitHub</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-lg text-xs font-mono text-slate-300 bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/[0.18] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
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
        </motion.div>

        {/* Architectural 3-Column Dossier: ¿Cómo puedo potenciar tu proyecto? */}
        <motion.div 
          variants={itemVariants}
          className="rounded-xl bg-[#0d0f17] border border-white/[0.08] p-5 sm:p-6 space-y-4 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                ¿Cómo puedo potenciar tu proyecto?
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline uppercase">
              PROPUESTA DE VALOR
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            <div className="p-4 rounded-lg bg-[#08090f] border border-white/[0.05] space-y-2 hover:border-white/[0.15] transition-all">
              <div className="flex items-center justify-between text-slate-500 font-mono text-[10px]">
                <span className="text-sky-400 font-bold">{"//"} 01</span>
                <span>CONVERSIÓN</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-sky-500/10 text-sky-400 shrink-0">
                  <Rocket className="w-3.5 h-3.5" />
                </div>
                <strong className="text-white font-semibold text-xs sm:text-sm tracking-tight">
                  Páginas y Tiendas que Venden
                </strong>
              </div>
              <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-normal">
                Diseños rápidos, claros y adaptados a celulares para que tus clientes encuentren lo que buscan sin perder tiempo.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#08090f] border border-white/[0.05] space-y-2 hover:border-white/[0.15] transition-all">
              <div className="flex items-center justify-between text-slate-500 font-mono text-[10px]">
                <span className="text-emerald-400 font-bold">{"//"} 02</span>
                <span>EFICIENCIA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <strong className="text-white font-semibold text-xs sm:text-sm tracking-tight">
                  Automatización de Tareas
                </strong>
              </div>
              <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-normal">
                Sistemas de reservas, cálculos de pagos y reportes automáticos que te ahorran horas de trabajo manual.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#08090f] border border-white/[0.05] space-y-2 hover:border-white/[0.15] transition-all">
              <div className="flex items-center justify-between text-slate-500 font-mono text-[10px]">
                <span className="text-indigo-400 font-bold">{"//"} 03</span>
                <span>PARTNERSHIP</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-indigo-500/10 text-indigo-400 shrink-0">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
                <strong className="text-white font-semibold text-xs sm:text-sm tracking-tight">
                  Comunicación Clara y Cercana
                </strong>
              </div>
              <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed font-normal">
                Hablo tu mismo idioma. Te explico todo de forma sencilla, sin tecnicismos confusos y con soporte constante.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Dossier Action Strip */}
        <motion.div 
          variants={itemVariants}
          className="p-3.5 sm:p-4 rounded-xl bg-[#0b0d14] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl"
        >
          <div className="text-left space-y-0.5">
            <span className="text-xs sm:text-sm font-bold text-white block">
              Descubrí mis 6 sistemas funcionando
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 block font-normal">
              Cada proyecto cuenta con una demostración interactiva que podés probar vos mismo.
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                sound.playPop();
                scrollToSection("education");
              }}
              className="px-3.5 py-2 rounded-lg font-semibold text-xs text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ver Formación</span>
            </button>

            <button
              onClick={() => {
                sound.playSuccess();
                scrollToSection("projects-hub");
              }}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-lg font-bold text-xs text-black bg-white hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5 shrink-0 shadow-lg cursor-pointer"
            >
              <span>Ver Proyectos</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
