"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Film, 
  Tv, 
  AlertTriangle, 
  QrCode, 
  Wrench, 
  Radio, 
  Sliders 
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

  // Cinema Sandbox State
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

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-6">
        
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
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl font-normal">
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

        {/* Main Grid: Architecture Details on Left, Interactive Cinema Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Tech Stack, Modules & Telemetry (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Overview & Mission-Critical Specs */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                <Film className="w-4 h-4" />
                <span>Infraestructura de Cabina & Control de Salas</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Technical Features Breakdown */}
              <div className="pt-2 border-t border-white/5 space-y-2.5">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-red-500/20 text-xs">
                  <div className="font-semibold text-red-300 flex items-center gap-1.5 mb-1">
                    <Wrench className="w-3.5 h-3.5 text-red-400" />
                    <span>Control Granular de Daños Mecánicos</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Mapeo de incidencias físicas por butaca con clasificación de severidad (rotura de respaldo, tapizado o asiento) para cuadrillas de mantenimiento técnico.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-red-500/20 text-xs">
                  <div className="font-semibold text-red-300 flex items-center gap-1.5 mb-1">
                    <Radio className="w-3.5 h-3.5 text-red-400" />
                    <span>Telemetría de Horas Lámpara Xenón</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Contador predictivo de horas de haz de luz en proyectores digitales Christie y Barco, evitando explosión térmica o corte abrupto en función.
                  </p>
                </div>
              </div>
            </div>

            {/* Projection Telemetry Live Card */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-red-500/30 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[10px]">
                <span className="text-red-400 font-bold flex items-center gap-1">
                  <Tv className="w-3.5 h-3.5" />
                  Telemetría Cabina Proyector — Sala {selectedSala}
                </span>
                <span className="text-emerald-400">● En Línea</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 rounded bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[9px]">Lámpara Xenón</span>
                  <span className="text-white font-bold">1,420 hrs / 2,000 hrs</span>
                  <span className="text-emerald-400 block text-[9px] mt-0.5">Vida Útil: 71% Óptimo</span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-white/5">
                  <span className="text-slate-400 block text-[9px]">Ingesta de Contenido</span>
                  <span className="text-white font-bold">DCP 100% Ingestado</span>
                  <span className="text-red-400 block text-[9px] mt-0.5">KDM: Activo hasta 28/09</span>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl glass-card border border-white/5 text-center">
                  <span className="block text-sm sm:text-base font-black text-red-400 font-mono">
                    {m.value}
                  </span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 border border-red-500/20 text-slate-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Seat Matrix & Ticket Preview Sandbox (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl border border-red-500/30 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Sandbox Interactivo: Mapa de Butacas & Ticket Stub
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Haz clic en una butaca para inspeccionar diagnósticos mecánicos o emitir ticket
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 font-mono text-xs">
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
            <div className="flex flex-col items-center py-1">
              <div className="w-3/4 h-2 bg-gradient-to-r from-red-600/30 via-red-500 to-red-600/30 rounded-full shadow-lg shadow-red-500/20" />
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                PANTALLA GIGANTE XD DIGITAL
              </span>
            </div>

            {/* Interactive Seat Matrix (5 rows x 8 seats) */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 space-y-1.5">
              {rows.map((row) => (
                <div key={row} className="flex items-center justify-center gap-2">
                  <span className="w-4 text-[11px] font-mono font-bold text-slate-500 text-center">
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
              <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-center gap-3 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-slate-800 border border-white/10 inline-block" /> Libre
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-red-600 inline-block" /> Seleccionada
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-amber-900 border border-amber-500 inline-block" /> Daño Técnico
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-slate-950 inline-block opacity-50" /> Ocupada
                </span>
              </div>
            </div>

            {/* Diagnostic & Ticket Preview Card */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 space-y-2.5">
              {selectedSeat?.status === "damaged" ? (
                <div className="p-2.5 rounded-lg bg-amber-950/60 border border-amber-500/40 text-xs space-y-1">
                  <div className="flex items-center justify-between text-amber-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-400" />
                      Diagnóstico de Butaca {selectedSeat.id}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-900 text-amber-200">
                      Urgencia {selectedSeat.urgency}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px]">
                    Desperfecto detectado: <strong>Mecanismo de {selectedSeat.damageType}</strong> trabado o suelto. Reporte enviado automáticamente al equipo de mantenimiento de sala.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300 text-center sm:text-left">
                    <span className="font-bold text-white block">
                      {selectedMovie}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Sala {selectedSala} XD • Fila {selectedSeat?.row || "F"} Butaca {selectedSeat?.num || "8"} • Sonido Dolby Atmos
                    </span>
                  </div>

                  <button
                    onClick={handlePrintTicket}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Emitir Ticket Stub</span>
                  </button>
                </div>
              )}

              {/* Ticket Stub Output */}
              {ticketIssued && (
                <div className="p-3 rounded-lg bg-slate-900 border border-red-500/40 flex items-center justify-between font-mono text-xs animate-fadeIn">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-red-400 uppercase tracking-wider block font-bold">
                      CINEMARK HOYTS • BOLETO DIGITAL
                    </span>
                    <span className="text-white font-bold text-sm block">{selectedMovie}</span>
                    <span className="text-slate-400 text-[10px] block">
                      SALA {selectedSala} • BUTACA {selectedSeat?.id} • 21:30 HS
                    </span>
                  </div>
                  <div className="text-center pl-3 border-l border-white/10">
                    <div className="w-12 h-12 bg-white p-1 rounded flex items-center justify-center">
                      <QrCode className="w-10 h-10 text-black" />
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5 block">VALIDADO</span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Stack Note */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
              <span>Stack: React Native + Expo Router + Firebase Cloud</span>
              <span className="text-red-400 font-mono text-[11px]">Cinemark Operations System</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
