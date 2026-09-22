"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Tv, 
  AlertTriangle, 
  QrCode, 
  Radio, 
  Sliders,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

interface Seat {
  id: string;
  row: string;
  num: number;
  status: "available" | "occupied" | "damaged" | "selected";
  damageType?: "respaldo" | "asiento";
  urgency?: "leve" | "medio" | "grave";
}

export function CinemarkCard() {
  const project = PROJECTS_DATA["cinemark-app"];

  const [mobileView, setMobileView] = useState<"specs" | "sandbox">("specs");
  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");
  const selectedMovie = "Dune: Parte Dos (IMAX XD)";
  const [selectedSala, setSelectedSala] = useState<number>(4);
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>({
    id: "F-08",
    row: "F",
    num: 8,
    status: "selected"
  });
  const [ticketIssued, setTicketIssued] = useState<boolean>(false);

  // 5 rows x 8 seats interactive theater layout
  const rows = ["C", "D", "E", "F", "G"];
  const seatsPerRow = [1, 2, 3, 4, 5, 6, 7, 8];

  const damagedSeatsMap: Record<string, { type: "respaldo" | "asiento"; urgency: "leve" | "medio" | "grave" }> = {
    "D-3": { type: "respaldo", urgency: "grave" },
    "E-7": { type: "asiento", urgency: "medio" }
  };

  const occupiedSeats = new Set(["C-1", "C-2", "D-5", "D-6", "E-4", "G-3", "G-4"]);

  const handleSeatClick = (row: string, num: number) => {
    const id = `${row}-${num}`;
    if (occupiedSeats.has(id)) return;

    sound.playClick();
    if (damagedSeatsMap[id]) {
      setSelectedSeat({
        id,
        row,
        num,
        status: "damaged",
        damageType: damagedSeatsMap[id].type,
        urgency: damagedSeatsMap[id].urgency
      });
      return;
    }

    setSelectedSeat({
      id,
      row,
      num,
      status: "selected"
    });
    setTicketIssued(false);
  };

  const handlePrintTicket = () => {
    sound.playSuccess();
    setTicketIssued(true);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.75 },
        colors: ["#e50914", "#f59e0b", "#ffffff"]
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section
      id="cinemark-app"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Cinematic Ambient Noir Glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60"
        style={{ background: project.theme.bgGradient }}
      />

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
              <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
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
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playPop()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-red-500/30 hover:border-red-400 hover:scale-105 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4 text-red-400" />
                <span>Ver Repositorio</span>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Segmented View Switcher */}
        <div className="lg:hidden flex items-center p-1 rounded-xl bg-slate-950/85 border border-red-500/20 shadow-lg mb-2">
          <button
            onClick={() => {
              sound.playClick();
              setMobileView("specs");
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "specs"
                ? "bg-red-600 text-white shadow-md shadow-red-600/30"
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
                ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Auditorio & Butacas</span>
          </button>
        </div>

        {/* Main Grid: Architecture Details on Left, Interactive Cinema Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Tech Stack, Modules & Telemetry (5 cols) */}
          <div className={`${mobileView === "specs" ? "flex" : "hidden lg:flex"} lg:col-span-5 flex-col justify-between space-y-3.5`}>
            
            {/* Interactive Tabs */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-red-500/30 space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/5">
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("whatItDoes");
                  }}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    techTab === "whatItDoes"
                      ? "bg-red-600 text-white"
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
                      ? "bg-red-600 text-white"
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
                      ? "bg-red-600 text-white"
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
                    <span className="text-red-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Operaciones de Cabina & Auditorios
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.whatItDoes}
                    </p>
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-slate-300">
                      {project.keyModules.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
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
                    <span className="text-red-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Digitalización Integral de Mantenimiento
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.solutionProvided}
                    </p>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-red-500/20 text-[11px] text-slate-300 space-y-1">
                      <strong className="text-red-400 block font-mono">
                        Desafíos Operativos Superados:
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
                    <span className="text-red-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Telemetría Xenón & Matching de Créditos
                    </span>
                    
                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-red-400 text-[10px] font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" /> React Native Web & Expo Architecture
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.architecture}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-red-400 text-[10px] font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> Algoritmo Difuso creditosMatcher
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.algorithmsAndConcurrency}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-red-400 text-[10px] font-bold flex items-center gap-1">
                        <Radio className="w-3 h-3" /> Telemetría Predictiva de Horas Xenón
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.databaseAndTelemetry}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-red-400 text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Matriz Vectorizada de 3,000+ Butacas
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
                    <span className="block text-xs sm:text-sm font-black text-red-400 font-mono">
                      {m.value}
                    </span>
                    <span className="block text-[8px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projection Telemetry Live Card */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-red-500/30 space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[9px]">
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <Tv className="w-3.5 h-3.5" />
                  Telemetría Proyector — Sala {selectedSala}
                </span>
                <span className="text-emerald-400">● En Línea</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[8px]">Lámpara Xenón</span>
                  <span className="text-white font-bold">1,420 hrs / 2,000 hrs</span>
                  <span className="text-emerald-400 block text-[8px] mt-0.5">Vida Útil: 71% Óptimo</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[8px]">Ingesta de Contenido</span>
                  <span className="text-white font-bold">DCP 100% Ingestado</span>
                  <span className="text-red-400 block text-[8px] mt-0.5">KDM: Activo hasta 28/09</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-900/80 border border-red-500/20 text-slate-300"
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
              className="lg:hidden w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 shadow-lg font-bold"
            >
              <span>Explorar Auditorio & Mapa de Butacas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Interactive Seat Matrix & Ticket Preview Sandbox (7 cols) */}
          <div className={`${mobileView === "sandbox" ? "flex" : "hidden lg:flex"} lg:col-span-7 glass-panel p-5 rounded-2xl border border-red-500/30 flex-col justify-between space-y-3.5 shadow-2xl relative overflow-hidden`}>
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Sandbox Interactivo: Mapa de Butacas & Ticket Stub
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Haz clic en una butaca para ver diagnósticos mecánicos o emitir ticket
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 font-mono text-[10px]">
                <button
                  onClick={() => setSelectedSala(4)}
                  className={`px-2 py-1 rounded transition-colors ${
                    selectedSala === 4 ? "bg-red-600 text-white font-bold" : "bg-slate-900 text-slate-400"
                  }`}
                >
                  Sala 4 XD
                </button>
                <button
                  onClick={() => setSelectedSala(9)}
                  className={`px-2 py-1 rounded transition-colors ${
                    selectedSala === 9 ? "bg-red-600 text-white font-bold" : "bg-slate-900 text-slate-400"
                  }`}
                >
                  Sala 9 3D
                </button>
              </div>
            </div>

            {/* Screen Arc Representation */}
            <div className="flex flex-col items-center py-0.5">
              <div className="w-3/4 h-1.5 bg-gradient-to-r from-red-600/30 via-red-500 to-red-600/30 rounded-full shadow-lg shadow-red-500/20" />
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">
                PANTALLA GIGANTE XD DIGITAL
              </span>
            </div>

            {/* Interactive Seat Matrix (5 rows x 8 seats) */}
            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
              {rows.map((row) => (
                <div key={row} className="flex items-center justify-center gap-2">
                  <span className="w-4 text-[10px] font-mono font-bold text-slate-500 text-center">
                    {row}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {seatsPerRow.map((num) => {
                      const id = `${row}-${num}`;
                      const isOccupied = occupiedSeats.has(id);
                      const isDamaged = Boolean(damagedSeatsMap[id]);
                      const isSelected = selectedSeat?.id === id;

                      let btnClass = "bg-slate-800 text-slate-300 border-white/5 hover:bg-slate-700";
                      if (isOccupied) btnClass = "bg-slate-950 text-slate-600 border-transparent cursor-not-allowed opacity-40";
                      if (isDamaged) btnClass = "bg-amber-950 text-amber-400 border-amber-500/40 animate-pulse";
                      if (isSelected) btnClass = "bg-red-600 text-white border-red-400 shadow-md shadow-red-500/40 scale-110 font-bold";

                      return (
                        <button
                          key={num}
                          onClick={() => handleSeatClick(row, num)}
                          disabled={isOccupied}
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-md text-[10px] font-mono border transition-all flex items-center justify-center ${btnClass}`}
                          title={`Butaca ${id}`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="pt-1.5 border-t border-white/5 flex flex-wrap items-center justify-center gap-2.5 text-[9px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-slate-800 border border-white/10 inline-block" /> Libre
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-red-600 inline-block" /> Seleccionada
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-amber-900 border border-amber-500 inline-block" /> Avería Mecánica
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-slate-950 inline-block opacity-50" /> Ocupada
                </span>
              </div>
            </div>

            {/* Diagnostic & Ticket Preview Card */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 space-y-2">
              {selectedSeat?.status === "damaged" ? (
                <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-500/40 text-xs space-y-1">
                  <div className="flex items-center justify-between text-amber-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                      Diagnóstico Butaca {selectedSeat.id}
                    </span>
                    <span className="text-[9px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-900 text-amber-200">
                      Urgencia {selectedSeat.urgency}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[10px]">
                    Desperfecto: <strong>Mecanismo de {selectedSeat.damageType}</strong> suelto. Reporte emitido en tiempo real para cuadrilla técnica.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5">
                  <div className="text-xs text-slate-300 text-center sm:text-left">
                    <span className="font-bold text-white block">
                      {selectedMovie}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Sala {selectedSala} XD • Fila {selectedSeat?.row || "F"} Butaca {selectedSeat?.num || "8"} • Dolby Atmos
                    </span>
                  </div>

                  <button
                    onClick={handlePrintTicket}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Emitir Boleto Digital</span>
                  </button>
                </div>
              )}

              {/* Ticket Stub Output */}
              {ticketIssued && (
                <div className="p-2.5 rounded-lg bg-slate-900 border border-red-500/40 flex items-center justify-between font-mono text-xs animate-fadeIn">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-red-400 uppercase tracking-wider block font-bold">
                      CINEMARK HOYTS • BOLETO DIGITAL
                    </span>
                    <span className="text-white font-bold text-xs block">{selectedMovie}</span>
                    <span className="text-slate-400 text-[9px] block">
                      SALA {selectedSala} • BUTACA {selectedSeat?.id} • 21:30 HS
                    </span>
                  </div>
                  <div className="text-center pl-2.5 border-l border-white/10">
                    <div className="w-10 h-10 bg-white p-0.5 rounded flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-black" />
                    </div>
                    <span className="text-[8px] text-slate-400 mt-0.5 block">VALIDADO</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Stack Note */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
              <span>Stack: React Native + Expo Router + Firebase Cloud</span>
              <span className="text-red-400 font-mono text-[10px]">Cinemark Operations System</span>
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
