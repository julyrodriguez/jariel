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
      {/* Subtle Directional Atmosphere */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000 opacity-40 section-ambient-mask"
        style={{
          background: "radial-gradient(ellipse 65% 45% at 50% 25%, rgba(99, 102, 241, 0.07) 0%, transparent 70%)"
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
        
        {/* Top Header Strip */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-3"
        >
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="text-white font-bold">[02]</span>
            <span className="text-slate-600">{"//"}</span>
            <span className="uppercase tracking-widest text-slate-300">FORMACIÓN & CREDENCIALES</span>
          </div>

          <span className="text-[10px] font-mono text-slate-500 uppercase">
            REGISTRO TÉCNICO · UTN & ESPECIALIZACIONES
          </span>
        </motion.div>

        {/* 2-Column Balanced Layout: Formación Actual + Cursos UTN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Columna Izquierda: Formación Actual en IA & Métricas (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            
            {/* Formación Actual: Data Science & IA */}
            <motion.div 
              variants={itemVariants}
              className="p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] space-y-3 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-indigo-400 font-bold">
                  <BrainCircuit className="w-4 h-4" />
                  <span className="uppercase tracking-wider">
                    Formación Actual
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  {PROFILE_INFO.education.status}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {PROFILE_INFO.education.degree}
                </h3>
                <span className="text-xs text-slate-400 block mt-1 leading-snug font-normal">
                  Especialización en análisis predictivo, modelos de machine learning y soluciones con inteligencia artificial.
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed border-t border-white/[0.06] pt-2.5 font-normal">
                {PROFILE_INFO.education.focus}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Machine Learning", "Modelos Predictivos", "Python & IA", "Optimización"].map((topic, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#08090f] border border-white/[0.06] text-slate-300">
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
                <div key={idx} className="p-3 rounded-lg bg-[#0d0f17] border border-white/[0.06] text-center">
                  <span className="block text-base sm:text-lg font-bold text-white font-mono">{s.value}</span>
                  <span className="block text-[9px] text-slate-500 uppercase font-mono tracking-wider mt-0.5">{s.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Columna Derecha: Cursos Técnicos en la UTN (8 cols) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            
            <motion.div 
              variants={itemVariants}
              className="p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] space-y-3 shadow-xl"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 text-indigo-400">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Cursos Técnicos y Certificaciones
                  </h3>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08] font-semibold">
                  Universidad Tecnológica Nacional (UTN)
                </span>
              </div>

              {/* Lista limpia de los 5 Cursos UTN sin scroll */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CERTIFICATES_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className={`p-3.5 rounded-lg bg-[#08090f] border border-white/[0.06] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-2 ${
                      cert.id === "experto-fullstack-utn" ? "sm:col-span-2 border-indigo-500/30 bg-[#0a0d16]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="text-xs font-bold text-white block tracking-tight">
                          {cert.title}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08] font-semibold shrink-0">
                        {cert.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-slate-500 block">
                      {cert.issuer}
                    </span>

                    <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {cert.topics.slice(0, 3).map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/50 border border-white/[0.05] text-slate-400"
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

        {/* Indicación a la derecha para desktop */}
        <motion.div 
          variants={itemVariants}
          className="hidden md:flex justify-end items-center pt-1"
        >
          <button
            onClick={() => {
              sound.playSwitch();
              scrollToSection("projects-hub");
            }}
            className="flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#0d0f17] border border-white/[0.1] hover:border-white/[0.25] text-slate-300 hover:text-white transition-all group cursor-pointer shadow-lg"
            aria-label="Bajar a proyectos"
            title="Deslizar hacia abajo"
          >
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider uppercase">
              Ver Hub de Proyectos
            </span>
            <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
