"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Trophy, 
  Gamepad2, 
  CheckCircle2, 
  Award, 
  Users, 
  Activity,
  Cpu,
  Layers,
  ShieldCheck,
  Database,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { sound } from "@/lib/sound";

export function VacasLocasCard() {
  const project = PROJECTS_DATA["vacas-locas"];

  const [mobileView, setMobileView] = useState<"specs" | "sandbox">("specs");

  // Interactive Match Predictor State
  const [team1Score, setTeam1Score] = useState<number>(2);
  const [team2Score, setTeam2Score] = useState<number>(1);
  const [userPick1, setUserPick1] = useState<number>(2);
  const [userPick2, setUserPick2] = useState<number>(1);
  const [activeTournament, setActiveTournament] = useState<"copa" | "cs2">("copa");
  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");

  // Calculate points dynamically
  const calculatePoints = () => {
    const actualDiff = team1Score - team2Score;
    const userDiff = userPick1 - userPick2;
    const actualWinner = actualDiff > 0 ? 1 : actualDiff < 0 ? 2 : 0;
    const userWinner = userDiff > 0 ? 1 : userDiff < 0 ? 2 : 0;

    if (team1Score === userPick1 && team2Score === userPick2) {
      return { pts: 3, label: "¡Acierto Exacto! (+3 Puntos Plenos)", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" };
    }
    if (actualWinner === userWinner) {
      if (actualDiff === userDiff) {
        return { pts: 2, label: "Tendencia + Dif. de Gol (+2 Puntos)", badge: "bg-teal-500/20 text-teal-300 border-teal-500/40" };
      }
      return { pts: 1, label: "Tendencia de Ganador Acertada (+1 Punto)", badge: "bg-blue-500/20 text-blue-300 border-blue-500/40" };
    }
    return { pts: 0, label: "Sin Aciertos en este Partido (0 Puntos)", badge: "bg-rose-500/20 text-rose-300 border-rose-500/40" };
  };

  const result = calculatePoints();

  return (
    <section
      id="vacas-locas"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Dynamic Ambient Theming Glow with Feathered Mask */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60 section-ambient-mask"
        style={{ background: project.theme.bgGradient }}
      />

      {/* Seamless Transition Vignettes */}
      <div className="section-vignette-top" />
      <div className="section-vignette-bottom" />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-5">
        
        {/* Top Header & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border shadow-sm"
                style={{
                  backgroundColor: project.theme.badgeBg,
                  color: project.theme.badgeText,
                  borderColor: project.theme.border
                }}
              >
                {project.theme.tag}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-normal">
              {project.subtitle}
            </p>
          </div>

          {/* External Code Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playPop()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-emerald-500/30 hover:border-emerald-400 hover:scale-105 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4 text-emerald-400" />
                <span>Ver Repositorio</span>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Segmented View Switcher */}
        <div className="lg:hidden flex items-center p-1 rounded-xl bg-slate-950/85 border border-white/10 shadow-lg mb-2">
          <button
            onClick={() => {
              sound.playClick();
              setMobileView("specs");
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "specs"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ficha & Arquitectura</span>
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setMobileView("sandbox");
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "sandbox"
                ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Simulador Interactivo</span>
          </button>
        </div>

        {/* Main Grid: Deep Technical Specs on Left, Interactive Simulation Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Technical Analysis & Business Solution (5 cols) */}
          <div className={`${mobileView === "specs" ? "flex" : "hidden lg:flex"} lg:col-span-5 flex-col justify-between space-y-3.5`}>
            
            {/* Interactive Tabs: ¿Qué hace? / ¿Qué solución brindó? / Datos Técnicos Profundos */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-emerald-500/30 space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/5">
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("whatItDoes");
                  }}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    techTab === "whatItDoes"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ¿Qué hace?
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("solution");
                  }}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    techTab === "solution"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Solución
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("deepTech");
                  }}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    techTab === "deepTech"
                      ? "bg-emerald-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Datos Técnicos
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="space-y-2 text-xs">
                {techTab === "whatItDoes" && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Operación & Módulos en Producción
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.whatItDoes}
                    </p>
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-slate-300">
                      {project.keyModules.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white">{m.title}:</strong>{" "}
                            <span className="text-slate-400 text-[11px]">{m.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {techTab === "solution" && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Impacto y Desafío de Concurrencia Resuelto
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.solutionProvided}
                    </p>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-emerald-500/20 text-[11px] text-slate-300 space-y-1">
                      <strong className="text-emerald-400 block font-mono">
                        Desafíos Críticos Superados:
                      </strong>
                      <ul className="list-disc pl-4 space-y-1 text-slate-400">
                        {project.challenges.map((c, idx) => (
                          <li key={idx}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {techTab === "deepTech" && (
                  <div className="space-y-2 animate-fadeIn max-h-[220px] overflow-y-auto pr-1">
                    <span className="text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Ingeniería Profunda & Arquitectura
                    </span>
                    
                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Arquitectura Híbrida Desacoplada
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.architecture}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> Algoritmo Simulación O(N log N)
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.algorithmsAndConcurrency}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                        <Database className="w-3 h-3" /> Persistencia & Micro-Caché I/O
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.databaseAndTelemetry}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-emerald-400 text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Integridad & CDN WebP
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.securityAndPerformance}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Metrics Ribbon */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2 rounded-xl glass-card border border-white/5 text-center">
                    <span className="block text-xs sm:text-sm font-black text-emerald-400 font-mono">
                      {m.value}
                    </span>
                    <span className="block text-[8px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-900/80 border border-emerald-500/20 text-slate-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Mobile CTA to Sandbox */}
            <button
              onClick={() => {
                sound.playSuccess();
                setMobileView("sandbox");
              }}
              className="lg:hidden w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Probar Simulador de Pronósticos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Live Interactive Sandbox (7 cols) */}
          <div className={`${mobileView === "sandbox" ? "flex" : "hidden lg:flex"} lg:col-span-7 glass-panel p-5 rounded-2xl border border-emerald-500/30 flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden`}>
            
            {/* Sandbox Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Sandbox Interactivo: Simulador de Pronósticos & Algoritmo de Puntuación
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Prueba en vivo la lógica de cálculo ponderado de Vacas Locas
                  </span>
                </div>
              </div>

              {/* Tournament Switcher */}
              <div className="flex items-center p-0.5 rounded-lg bg-slate-950/80 border border-white/10 text-[10px] font-mono">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveTournament("copa");
                  }}
                  className={`px-2 py-1 rounded-md transition-colors ${
                    activeTournament === "copa"
                      ? "bg-emerald-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Copa Fútbol
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveTournament("cs2");
                  }}
                  className={`px-2 py-1 rounded-md transition-colors ${
                    activeTournament === "cs2"
                      ? "bg-emerald-500 text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Esports CS2
                </button>
              </div>
            </div>

            {/* Simulated Match Arena */}
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-3">
              
              {/* Actual Final Score (Simulation) */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                    <Activity className="w-3.5 h-3.5" />
                    Resultado Real del Partido (Minuto 90&apos;)
                  </span>
                  <span className="text-[10px]">Ajusta los goles reales:</span>
                </div>

                <div className="grid grid-cols-5 items-center bg-slate-900/90 p-2.5 rounded-xl border border-white/5">
                  <div className="col-span-2 text-left">
                    <span className="font-bold text-white text-xs sm:text-sm block">
                      {activeTournament === "copa" ? "Boca Juniors" : "Team Vitality"}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono">Local</span>
                  </div>

                  <div className="col-span-1 flex items-center justify-center gap-1.5 font-mono">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTeam1Score(Math.min(9, team1Score + 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-emerald-400 p-0.5"
                      >
                        ▲
                      </button>
                      <span className="text-lg font-black text-white px-2 py-0.5 rounded bg-slate-800 border border-white/10">
                        {team1Score}
                      </span>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTeam1Score(Math.max(0, team1Score - 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-emerald-400 p-0.5"
                      >
                        ▼
                      </button>
                    </div>

                    <span className="text-slate-500 font-bold">:</span>

                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTeam2Score(Math.min(9, team2Score + 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-emerald-400 p-0.5"
                      >
                        ▲
                      </button>
                      <span className="text-lg font-black text-white px-2 py-0.5 rounded bg-slate-800 border border-white/10">
                        {team2Score}
                      </span>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setTeam2Score(Math.max(0, team2Score - 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-emerald-400 p-0.5"
                      >
                        ▼
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right">
                    <span className="font-bold text-white text-xs sm:text-sm block">
                      {activeTournament === "copa" ? "River Plate" : "Natus Vincere"}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono">Visitante</span>
                  </div>
                </div>
              </div>

              {/* User Prediction Interactive Selector */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                  <span className="text-purple-300 font-semibold flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" />
                    Tu Pronóstico Cargado en la Plataforma
                  </span>
                  <span className="text-[10px]">Ajusta tu pronóstico:</span>
                </div>

                <div className="grid grid-cols-5 items-center bg-slate-900/90 p-2.5 rounded-xl border border-purple-500/20">
                  <div className="col-span-2 text-left">
                    <span className="text-xs font-semibold text-slate-200 block">
                      {activeTournament === "copa" ? "Pronóstico Boca" : "Pronóstico Vitality"}
                    </span>
                  </div>

                  <div className="col-span-1 flex items-center justify-center gap-1.5 font-mono">
                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setUserPick1(Math.min(9, userPick1 + 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-purple-400 p-0.5"
                      >
                        ▲
                      </button>
                      <span className="text-lg font-black text-purple-300 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30">
                        {userPick1}
                      </span>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setUserPick1(Math.max(0, userPick1 - 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-purple-400 p-0.5"
                      >
                        ▼
                      </button>
                    </div>

                    <span className="text-purple-400 font-bold">:</span>

                    <div className="flex flex-col items-center">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setUserPick2(Math.min(9, userPick2 + 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-purple-400 p-0.5"
                      >
                        ▲
                      </button>
                      <span className="text-lg font-black text-purple-300 px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30">
                        {userPick2}
                      </span>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setUserPick2(Math.max(0, userPick2 - 1));
                        }}
                        className="text-[10px] text-slate-400 hover:text-purple-400 p-0.5"
                      >
                        ▼
                      </button>
                    </div>
                  </div>

                  <div className="col-span-2 text-right">
                    <span className="text-xs font-semibold text-slate-200 block">
                      {activeTournament === "copa" ? "Pronóstico River" : "Pronóstico NaVi"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic Calculation Evaluation Banner */}
              <div className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${result.badge}`}>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="text-xs font-bold">{result.label}</span>
                </div>
                <div className="text-right font-mono">
                  <span className="text-base font-black">{result.pts}</span>
                  <span className="text-[9px] uppercase ml-1">pts</span>
                </div>
              </div>
            </div>

            {/* Leaderboard Micro-Widget (Simulated real community) */}
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-slate-400 font-mono text-[9px]">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Users className="w-3 h-3" />
                  Ranking Global de la Comunidad (Top 3)
                </span>
                <span>API en vivo • apivacas.jariel.com.ar</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 rounded-lg bg-slate-900 border border-amber-500/30 flex flex-col items-center">
                  <span className="text-amber-400 font-mono text-[11px] font-bold">🥇 #1 Julián R.</span>
                  <span className="text-slate-300 font-mono text-[10px] font-semibold">84 pts</span>
                  <span className="text-[8px] text-emerald-400">Racha: 5 aciertos</span>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 flex flex-col items-center">
                  <span className="text-slate-300 font-mono text-[11px] font-bold">🥈 #2 Mateo C.</span>
                  <span className="text-slate-300 font-mono text-[10px] font-semibold">79 pts</span>
                  <span className="text-[8px] text-slate-400">Racha: 3 aciertos</span>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900 border border-amber-700/40 flex flex-col items-center">
                  <span className="text-amber-600 font-mono text-[11px] font-bold">🥉 #3 Lucas V.</span>
                  <span className="text-slate-300 font-mono text-[10px] font-semibold">76 pts</span>
                  <span className="text-[8px] text-slate-400">Racha: 2 aciertos</span>
                </div>
              </div>
            </div>

            {/* Mobile Return to Specs Button */}
            <button
              onClick={() => {
                sound.playPop();
                setMobileView("specs");
              }}
              className="lg:hidden w-full py-2 px-3 rounded-xl text-xs font-semibold glass-panel border border-white/10 text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 mt-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>← Volver a Ficha Técnica & Arquitectura</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
