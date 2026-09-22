"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  UserCheck, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  Cpu,
  Database
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

interface ShiftOption {
  time: string;
  discipline: string;
  instructor: string;
  capacity: number;
  reserved: number;
}

export function DemoPilatesCard() {
  const project = PROJECTS_DATA["demoPilates"];

  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");
  const [shifts, setShifts] = useState<ShiftOption[]>([
    { time: "08:00 hs", discipline: "Reformer", instructor: "Camila R.", capacity: 6, reserved: 5 },
    { time: "09:30 hs", discipline: "Reformer", instructor: "Camila R.", capacity: 6, reserved: 6 }, // Full
    { time: "18:00 hs", discipline: "Mat & Stretch", instructor: "Valentina P.", capacity: 8, reserved: 4 },
    { time: "19:15 hs", discipline: "Reformer Intensivo", instructor: "Lucía M.", capacity: 6, reserved: 3 }
  ]);

  const [activeSlotIdx, setActiveSlotIdx] = useState<number>(0);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [simulatedToken, setSimulatedToken] = useState<string>("");

  const handleSimulateBooking = () => {
    const currentShift = shifts[activeSlotIdx];
    if (currentShift.reserved >= currentShift.capacity) return;

    sound.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["#a855f7", "#c084fc", "#f472b6", "#ffffff"]
      });
    } catch {
      // Confetti fallback
    }

    const updated = [...shifts];
    updated[activeSlotIdx].reserved += 1;
    setShifts(updated);

    const randomToken = Math.random().toString(36).substring(2, 10).toUpperCase();
    setSimulatedToken(randomToken);
    setBookingConfirmed(true);
  };

  const handleReset = () => {
    sound.playPop();
    setBookingConfirmed(false);
  };

  return (
    <section
      id="demoPilates"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Mindful Lilac / Violet Wellness Glow Background */}
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
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
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

          {/* External Links */}
          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playSuccess()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Abrir Demo en Vivo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playPop()}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-purple-500/30 hover:border-purple-400 hover:scale-105 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span>Código</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Grid: Architecture & Technical Specs on Left, Interactive Reservation Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            
            {/* Interactive Tabs */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-purple-500/30 space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/5">
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("whatItDoes");
                  }}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    techTab === "whatItDoes"
                      ? "bg-purple-500 text-white"
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
                      ? "bg-purple-500 text-white"
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
                      ? "bg-purple-500 text-white"
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
                    <span className="text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Operación & Portal de Autogestión
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.whatItDoes}
                    </p>
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-slate-300">
                      {project.keyModules.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
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
                    <span className="text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Reducción de Inasistencias & Optimización de Capacidad
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.solutionProvided}
                    </p>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-purple-500/20 text-[11px] text-slate-300 space-y-1">
                      <strong className="text-purple-400 block font-mono">
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
                    <span className="text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Arquitectura Híbrida & Concurrencia
                    </span>
                    
                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-purple-400 text-[10px] font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Arquitectura Híbrida LocalCache
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.architecture}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-purple-400 text-[10px] font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> Transacciones Atómicas ACID
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.algorithmsAndConcurrency}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-purple-400 text-[10px] font-bold flex items-center gap-1">
                        <Database className="w-3 h-3" /> Esquema NoSQL & Telemetría Ocupacional
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.databaseAndTelemetry}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-purple-400 text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Cancelación Segura Criptográfica
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
                    <span className="block text-xs sm:text-sm font-black text-purple-400 font-mono">
                      {m.value}
                    </span>
                    <span className="block text-[8px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-900/80 border border-purple-500/20 text-slate-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Booking Sandbox (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 rounded-2xl border border-purple-500/30 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Sandbox Interactivo: Portal de Alumnos & Reserva de Clases
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Selecciona un horario y simula el flujo de reserva con confirmación
                  </span>
                </div>
              </div>

              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                Hoy: Miércoles
              </span>
            </div>

            {/* Turnos / Shift Cards Selector */}
            <div className="space-y-2.5">
              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Turnos Disponibles para Reserva:</span>
                <span className="text-purple-400">Cupos en Tiempo Real</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {shifts.map((shift, idx) => {
                  const isSelected = activeSlotIdx === idx;
                  const isFull = shift.reserved >= shift.capacity;
                  const available = shift.capacity - shift.reserved;

                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        sound.playClick();
                        setActiveSlotIdx(idx);
                        setBookingConfirmed(false);
                      }}
                      className={`p-2.5 rounded-xl text-left border transition-all relative overflow-hidden ${
                        isSelected
                          ? "bg-purple-950/70 border-purple-400 shadow-lg shadow-purple-500/10"
                          : "bg-slate-900/70 border-white/5 hover:border-purple-500/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-xs font-bold text-white flex items-center gap-1">
                          <Clock className="w-3 h-3 text-purple-400" />
                          {shift.time}
                        </span>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-mono font-semibold ${
                          isFull
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        }`}>
                          {isFull ? "Agotado" : `${available} libres`}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-slate-200">
                        {shift.discipline}
                      </div>
                      <div className="text-[10px] text-slate-400 flex items-center justify-between mt-0.5">
                        <span>Instr: {shift.instructor}</span>
                        <span className="font-mono">{shift.reserved}/{shift.capacity} camas</span>
                      </div>

                      <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isFull ? "bg-rose-500" : "bg-purple-500"
                          }`}
                          style={{ width: `${(shift.reserved / shift.capacity) * 100}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulated Booking Confirmation Box */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 space-y-2.5">
              {!bookingConfirmed ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300 text-center sm:text-left">
                    <span className="block font-semibold text-white">
                      Turno: {shifts[activeSlotIdx].time} — {shifts[activeSlotIdx].discipline}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Capacidad restante: {shifts[activeSlotIdx].capacity - shifts[activeSlotIdx].reserved} lugares
                    </span>
                  </div>

                  <button
                    onClick={handleSimulateBooking}
                    disabled={shifts[activeSlotIdx].reserved >= shifts[activeSlotIdx].capacity}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Confirmar Reserva de Prueba</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-purple-300 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      ¡Reserva Confirmada en Demo Studio!
                    </span>
                    <button
                      onClick={handleReset}
                      className="text-[10px] font-mono text-slate-400 hover:text-white underline"
                    >
                      Probar otro turno
                    </button>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 text-xs space-y-1 font-mono">
                    <div className="flex items-center justify-between text-slate-400 text-[9px]">
                      <span className="flex items-center gap-1 text-purple-300">
                        <Mail className="w-3 h-3" />
                        Notificación Automatizada (Resend / Nodemailer)
                      </span>
                      <span>Token: #{simulatedToken}</span>
                    </div>
                    <p className="text-slate-300 text-[10px]">
                      Hola <strong>Alumno/a</strong>, tu turno de <strong>{shifts[activeSlotIdx].discipline}</strong> ({shifts[activeSlotIdx].time}) está confirmado.
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[9px] text-slate-400 border-t border-white/5">
                      <span>¿No puedes asistir?</span>
                      <span className="text-purple-400 underline cursor-pointer hover:text-purple-300">
                        https://demopilates.jariel.com.ar/cancelar?token={simulatedToken}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Link Footer */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
              <span>Stack: Next.js 16 + Tailwind CSS v4 + LocalCache</span>
              <a
                href="https://demopilates.jariel.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Explorar Sistema Completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
