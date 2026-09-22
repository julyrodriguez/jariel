"use client";

import React from "react";
import { PROFILE_INFO, CERTIFICATES_DATA } from "@/data/projectsData";
import { 
  CheckCircle2, 
  BrainCircuit, 
  Sparkles,
  ChevronDown
} from "lucide-react";
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

export function EducationCard() {
  const { scrollToSection } = useTheme();

  return (
    <section 
      id="education"
      className="snap-section relative justify-center px-4 sm:px-8 py-8 md:py-12 overflow-hidden flex flex-col justify-center"
    >
      {/* Dynamic Ambient Background with Feathered Mask */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-50 section-ambient-mask"
        style={{
          background: "radial-gradient(ellipse at 50% 35%, rgba(99, 102, 241, 0.16) 0%, rgba(56, 189, 248, 0.05) 50%, #07090e 100%)"
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

      {/* Animated Staggered Content Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-4 md:space-y-5"
      >
        
        {/* Encabezado de Sección: Solo Formación */}
        <motion.div 
          variants={itemVariants} 
          className="text-center max-w-4xl mx-auto border-b border-white/10 pb-3"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Formación
          </h2>
        </motion.div>

        {/* 2-Column Balanced Layout: Formación Actual + Cursos UTN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Columna Izquierda: Formación Actual en IA & Métricas (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            
            {/* Formación Actual: Data Science & IA (Sin mencionar universidad) */}
            <motion.div 
              variants={itemVariants}
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-sky-500/30 space-y-3 shadow-xl relative overflow-hidden bg-gradient-to-br from-slate-950/90 via-indigo-950/20 to-sky-950/30"
            >
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
                <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  {PROFILE_INFO.education.degree}
                </h3>
                <span className="text-xs text-sky-300/90 font-medium block mt-1 leading-snug">
                  Especialización en análisis predictivo, modelos de machine learning y soluciones con inteligencia artificial.
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-2.5">
                {PROFILE_INFO.education.focus}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Machine Learning", "Modelos Predictivos", "Python & IA", "Optimización de Procesos"].map((topic, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-sky-950/60 border border-sky-500/20 text-sky-200">
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats Ribbon */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-2"
            >
              {PROFILE_INFO.stats.map((s, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-center">
                  <span className="block text-sm sm:text-base font-black text-sky-400 font-mono">{s.value}</span>
                  <span className="block text-[9px] text-slate-400 uppercase font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Columna Derecha: Cursos Técnicos en la UTN (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            
            <motion.div 
              variants={itemVariants}
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl bg-slate-950/60"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Cursos Técnicos y Certificaciones
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-500/30 font-semibold">
                  Universidad Tecnológica Nacional (UTN)
                </span>
              </div>

              {/* Lista limpia de los 5 Cursos UTN sin scroll */}
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
                      {cert.topics.slice(0, 3).map((t, idx) => (
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
            </motion.div>

          </div>

        </div>

        {/* Indicación a la derecha con flechitas animadas para indicar al usuario bajar (solo visible en desktop) */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:flex justify-end items-center pt-1"
        >
          <button
            onClick={() => {
              sound.playSwitch();
              scrollToSection("projects-hub");
            }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 hover:border-indigo-400 bg-slate-950/70 shadow-lg hover:shadow-indigo-500/25 backdrop-blur-md transition-all hover:scale-105 group cursor-pointer"
            aria-label="Bajar a proyectos"
            title="Deslizar hacia abajo"
          >
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-slate-300 group-hover:text-white transition-colors">
              Deslizar hacia abajo
            </span>
            <motion.div 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.3, ease: "easeInOut" }}
              className="flex flex-col items-center -space-y-2.5"
            >
              <ChevronDown className="w-4 h-4 text-sky-400 group-hover:text-sky-300" />
              <ChevronDown className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300" />
              <ChevronDown className="w-4 h-4 text-indigo-500/70 group-hover:text-indigo-400/90" />
            </motion.div>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
