"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink, 
  UserCheck, 
  Mail, 
  ArrowRight, 
  ShieldCheck, 
  Zap 
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
        colors: ["#14b8a6", "#84cc16", "#2dd4bf", "#ffffff"]
      });
    } catch {
      // Confetti fallback
    }

    // Update shift reservation count
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
      {/* Organic Wellness Glow Background */}
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
              <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
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

          {/* External Links: Live Demo & Github */}
          <div className="flex items-center gap-2.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playSuccess()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-300 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105 transition-all"
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
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-teal-500/30 hover:border-teal-400 hover:scale-105 transition-all"
              >
                <GithubIcon className="w-4 h-4 text-teal-400" />
                <span>Código</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Grid: Architecture & Flow on Left, Interactive Reservation Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Overview & Architecture Details */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Arquitectura SaaS Híbrida (LocalCache + Cloud)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Architecture diagram cards */}
              <div className="pt-2 border-t border-white/5 space-y-2.5">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-teal-500/20 text-xs">
                  <div className="font-semibold text-teal-300 flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5 text-teal-400" />
                    <span>Aislamiento Demo LocalCache</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Capa de middleware que intercepta mutaciones en entornos de prueba, almacenando reservas en LocalStorage con paridad total de API sin polucionar Firestore.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-teal-500/20 text-xs">
                  <div className="font-semibold text-teal-300 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    <span>Cancelación Segura con Token de Un Solo Uso</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Generación de hashes irreversibles embebidos en links de confirmación. Permite al alumno liberar su cupo en 1 segundo sin requerir inicio de sesión.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl glass-card border border-white/5 text-center">
                  <span className="block text-sm sm:text-base font-black text-teal-400 font-mono">
                    {m.value}
                  </span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 border border-teal-500/20 text-slate-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Booking Sandbox (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl border border-teal-500/30 flex flex-col justify-between space-y-5 shadow-2xl relative overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-teal-500/20 text-teal-400">
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

              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/30">
                Hoy: Miércoles
              </span>
            </div>

            {/* Turnos / Shift Cards Selector */}
            <div className="space-y-3">
              <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Turnos Disponibles para Reserva:</span>
                <span className="text-teal-400">Cupos en Tiempo Real</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
                      className={`p-3 rounded-xl text-left border transition-all relative overflow-hidden ${
                        isSelected
                          ? "bg-teal-950/70 border-teal-400 shadow-lg shadow-teal-500/10"
                          : "bg-slate-900/70 border-white/5 hover:border-teal-500/30"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-teal-400" />
                          {shift.time}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-semibold ${
                          isFull
                            ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                            : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                        }`}>
                          {isFull ? "Agotado" : `${available} disponibles`}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-slate-200">
                        {shift.discipline}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center justify-between mt-1">
                        <span>Instr: {shift.instructor}</span>
                        <span className="font-mono">{shift.reserved}/{shift.capacity} camas</span>
                      </div>

                      {/* Capacity progress bar */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isFull ? "bg-rose-500" : "bg-teal-400"
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
            <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-3">
              {!bookingConfirmed ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-300 text-center sm:text-left">
                    <span className="block font-semibold text-white">
                      Turno Seleccionado: {shifts[activeSlotIdx].time} — {shifts[activeSlotIdx].discipline}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Capacidad restante: {shifts[activeSlotIdx].capacity - shifts[activeSlotIdx].reserved} lugares
                    </span>
                  </div>

                  <button
                    onClick={handleSimulateBooking}
                    disabled={shifts[activeSlotIdx].reserved >= shifts[activeSlotIdx].capacity}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-teal-400 to-emerald-400 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Confirmar Reserva de Prueba</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      ¡Reserva Confirmada Exitosamente en Demo Studio!
                    </span>
                    <button
                      onClick={handleReset}
                      className="text-[11px] font-mono text-slate-400 hover:text-white underline"
                    >
                      Probar otro turno
                    </button>
                  </div>

                  {/* Simulated Automated Email/Notification Card */}
                  <div className="p-3 rounded-lg bg-slate-900 border border-teal-500/30 text-xs space-y-1.5 font-mono">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                      <span className="flex items-center gap-1 text-teal-300">
                        <Mail className="w-3 h-3" />
                        Notificación Automatizada (Resend / Nodemailer)
                      </span>
                      <span>Token: #{simulatedToken}</span>
                    </div>
                    <p className="text-slate-300 text-[11px]">
                      Hola <strong>Alumno/a</strong>, tu turno de <strong>{shifts[activeSlotIdx].discipline}</strong> a las <strong>{shifts[activeSlotIdx].time}</strong> está asegurado.
                    </p>
                    <div className="pt-1 flex items-center justify-between text-[10px] text-slate-400 border-t border-white/5">
                      <span>¿No puedes asistir?</span>
                      <span className="text-teal-400 underline cursor-pointer hover:text-teal-300">
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
                className="text-teal-400 hover:underline flex items-center gap-1 font-semibold"
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
