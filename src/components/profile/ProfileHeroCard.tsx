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

      {/* Animated Staggered Content Container (aparece desde arriba hacia abajo) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl w-full mx-auto my-auto space-y-5 md:space-y-6"
      >
        
        {/* Encabezado Centrado: Solo Nombre, Bio ancha y Contactos Directos */}
        <motion.div 
          variants={itemVariants} 
          className="text-center space-y-3 mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            {PROFILE_INFO.name}
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            {PROFILE_INFO.bio}
          </p>

          {/* Perfiles Sociales & Copiar Email Centrados */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap pt-1">
            <a
              href={PROFILE_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playPop()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all"
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
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-white/10 hover:border-white/30 hover:scale-105 transition-all"
              title="Ver mis repositorios de código"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 glass-panel border border-white/10 hover:border-white/30 hover:text-white transition-all flex items-center gap-1.5"
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

        {/* Card: ¿Cómo puedo potenciar tu proyecto? (3 Columnas Horizontales, sin espacios vacíos) */}
        <motion.div 
          variants={itemVariants}
          className="glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 space-y-3.5 shadow-xl bg-slate-950/60"
        >
          <div className="flex items-center gap-2 text-amber-400 border-b border-white/5 pb-2.5">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              ¿Cómo puedo potenciar tu proyecto?
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/5 space-y-2 hover:border-sky-500/30 transition-all">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                  <Rocket className="w-4 h-4" />
                </div>
                <strong className="text-white font-semibold text-xs sm:text-sm">
                  Páginas y Tiendas que Venden
                </strong>
              </div>
              <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                Diseños rápidos, claros y adaptados a celulares para que tus clientes encuentren lo que buscan sin perder tiempo.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/5 space-y-2 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <strong className="text-white font-semibold text-xs sm:text-sm">
                  Automatización de Tareas
                </strong>
              </div>
              <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                Sistemas de reservas, cálculos de pagos y reportes automáticos que te ahorran horas de trabajo manual.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/70 border border-white/5 space-y-2 hover:border-indigo-500/30 transition-all">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <strong className="text-white font-semibold text-xs sm:text-sm">
                  Comunicación Clara y Cercana
                </strong>
              </div>
              <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                Hablo tu mismo idioma. Te explico todo de forma sencilla, sin tecnicismos confusos y con soporte constante.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Botón y Callout: Descubrí mis 5 sistemas funcionando (inmediatamente abajo de potenciar proyecto) */}
        <motion.div 
          variants={itemVariants}
          className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-sky-950/80 via-indigo-950/60 to-slate-950/90 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg"
        >
          <div className="text-left space-y-0.5">
            <span className="text-xs sm:text-sm font-bold text-white block">
              Descubrí mis 5 sistemas funcionando
            </span>
            <span className="text-[11px] sm:text-xs text-slate-400 block">
              Cada proyecto cuenta con una demostración interactiva que podés probar vos mismo.
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                sound.playPop();
                scrollToSection("education");
              }}
              className="px-3.5 py-2 rounded-xl font-semibold text-xs text-slate-300 glass-panel border border-white/10 hover:border-white/20 hover:text-white transition-all flex items-center justify-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ver Formación</span>
            </button>

            <button
              onClick={() => {
                sound.playSuccess();
                scrollToSection("projects-hub");
              }}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-teal-300 hover:shadow-lg hover:shadow-sky-400/25 hover:scale-105 transition-all flex items-center justify-center gap-1.5 shrink-0"
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
