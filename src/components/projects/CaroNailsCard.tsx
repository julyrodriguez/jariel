"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar,
  ShieldCheck, 
  Layers,
  Cpu,
  Database,
  BellRing,
  Heart
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

interface ServiceItem {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}

interface TimeSlot {
  time: string;
  status: "available" | "busy";
  client?: string;
}

export function CaroNailsCard() {
  const project = PROJECTS_DATA["caronails"];

  const [mobileView, setMobileView] = useState<"specs" | "sandbox">("specs");
  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");

  const services: ServiceItem[] = [
    { id: "kapping", name: "Kapping Gel & Nivelación", duration: "75 min", price: 22000, description: "Refuerzo sobre uña natural con gel de alta densidad y acabado espejo." },
    { id: "semi", name: "Esmaltado Semipermanente", duration: "60 min", price: 16000, description: "Preparación rusa combinada, esmaltado pigmentado y top coat UV." },
    { id: "softgel", name: "Esculpidas Soft Gel Tips", duration: "90 min", price: 28000, description: "Extensión completa anatómica, durabilidad +25 días y curvatura C." },
    { id: "nailart", name: "Nail Art Premium + Rusa", duration: "80 min", price: 25000, description: "Diseño a mano alzada, francesitas degradé, foil y strass Swarovski." }
  ];

  const [selectedService, setSelectedService] = useState<ServiceItem>(services[0]);
  const [slots, setSlots] = useState<TimeSlot[]>([
    { time: "10:00", status: "available" },
    { time: "12:30", status: "available" },
    { time: "15:00", status: "busy", client: "Sofía M. (Semi)" },
    { time: "17:30", status: "available" }
  ]);
  const [selectedTime, setSelectedTime] = useState<string>("12:30");
  const [clientName, setClientName] = useState<string>("Lucía Benítez");
  const [bookingDone, setBookingDone] = useState<boolean>(false);

  // Studio simulated live balance
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(385000);
  const suppliesCost = 62000;

  const handleBookTurno = () => {
    sound.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["#f43f5e", "#d946ef", "#fb7185", "#fde047"]
      });
    } catch {
      // Confetti fallback
    }

    // Mark slot as busy
    setSlots(slots.map(s => s.time === selectedTime ? { ...s, status: "busy", client: `${clientName} (${selectedService.name.split(" ")[0]})` } : s));
    setMonthlyRevenue(prev => prev + selectedService.price);
    setBookingDone(true);
  };

  const handleReset = () => {
    sound.playPop();
    setBookingDone(false);
  };

  return (
    <section
      id="caronails"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Dynamic Ambient Background with Feathered Mask */}
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
              <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/60 text-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-[0_0_14px_rgba(52,211,153,0.45)] animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>En uso por clientes</span>
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
          <div className="flex items-center gap-2.5 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playPop()}
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-rose-500/30 hover:border-rose-400 hover:scale-105 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4 text-rose-400" />
                <span>Ver Repositorio</span>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Segmented View Switcher */}
        <div className="lg:hidden flex items-center p-1 rounded-xl bg-slate-950/85 border border-rose-500/20 shadow-lg mb-2">
          <button
            onClick={() => {
              sound.playClick();
              setMobileView("specs");
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "specs"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/25 font-bold"
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
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/25 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Demo Interactivo</span>
          </button>
        </div>

        {/* Main 2-Column Responsive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: System Architecture & Technical Specifications (6 cols) */}
          <div className={`lg:col-span-6 flex flex-col space-y-4 ${mobileView === "sandbox" ? "hidden lg:flex" : "flex"}`}>
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-4 shadow-xl">
              
              {/* Nav Tabs */}
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("whatItDoes");
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    techTab === "whatItDoes"
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  ¿Qué hace el sistema?
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("solution");
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    techTab === "solution"
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Solución & Operación
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("deepTech");
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    techTab === "deepTech"
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Ingeniería PWA
                </button>
              </div>

              {/* Tab 1: What it does */}
              {techTab === "whatItDoes" && (
                <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                  <p className="font-medium text-white text-xs sm:text-sm">
                    {project.whatItDoes}
                  </p>

                  <div className="space-y-2.5 pt-1">
                    {project.keyModules.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                        <div className="flex items-center gap-2 text-rose-300 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                          <span>{m.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 pl-5 leading-snug">
                          {m.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Solution & Operation */}
              {techTab === "solution" && (
                <div className="space-y-3.5 text-xs text-slate-300 leading-relaxed">
                  <p className="font-medium text-white text-xs sm:text-sm">
                    {project.solutionProvided}
                  </p>

                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-mono text-rose-300 font-bold uppercase tracking-wider block">
                      Desafíos de Negocio Resueltos:
                    </span>
                    {project.challenges.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/60 border border-white/5">
                        <span className="text-rose-400 font-mono font-bold text-xs mt-0.5">•</span>
                        <span className="text-[11px] text-slate-300">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Deep Tech */}
              {techTab === "deepTech" && (
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-300 font-mono font-bold text-xs">
                      <Layers className="w-3.5 h-3.5 text-rose-400" />
                      <span>Arquitectura & Sincronización</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {project.deepTechnicalData.architecture}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-300 font-mono font-bold text-xs">
                      <Cpu className="w-3.5 h-3.5 text-rose-400" />
                      <span>Indexación & No-Collisions</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {project.deepTechnicalData.algorithmsAndConcurrency}
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-300 font-mono font-bold text-xs">
                      <Database className="w-3.5 h-3.5 text-rose-400" />
                      <span>Seguridad & Push Notifications</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      {project.deepTechnicalData.securityAndPerformance}
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-white/5 text-slate-300"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Live Operational Metrics Ribbon */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/5 text-center">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-slate-900/70 border border-white/5">
                    <span className="block text-xs sm:text-sm font-black text-rose-400 font-mono">{m.value}</span>
                    <span className="block text-[8px] sm:text-[9px] text-slate-400 uppercase font-medium mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Caro Nails Studio Simulator (6 cols) */}
          <div className={`lg:col-span-6 flex flex-col space-y-4 ${mobileView === "specs" ? "hidden lg:flex" : "flex"}`}>
            <div className="glass-panel p-5 rounded-2xl border border-rose-500/30 space-y-4 shadow-2xl relative overflow-hidden bg-gradient-to-br from-slate-950/90 via-rose-950/15 to-slate-950/90">
              
              {/* Studio Sandbox Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/30">
                    <Heart className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">
                      Panel Administrativo Studio Caro Nails
                    </span>
                    <span className="text-[10px] text-rose-300/80 font-mono block">
                      Simulador de Agenda, Turnos y Balance
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Online
                </span>
              </div>

              {/* Financial Balance Mini Widget */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-900/90 border border-white/5">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">Ingresos Mes</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-400 font-mono">
                    ${monthlyRevenue.toLocaleString("es-AR")}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">Insumos & Stock</span>
                  <span className="text-xs sm:text-sm font-black text-rose-400 font-mono">
                    -${suppliesCost.toLocaleString("es-AR")}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 block uppercase">Ganancia Neta</span>
                  <span className="text-xs sm:text-sm font-black text-sky-400 font-mono">
                    ${(monthlyRevenue - suppliesCost).toLocaleString("es-AR")}
                  </span>
                </div>
              </div>

              {/* Step 1: Select Service */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-slate-300 flex items-center justify-between">
                  <span>1. Seleccionar Tratamiento:</span>
                  <span className="text-rose-400">${selectedService.price.toLocaleString("es-AR")} ({selectedService.duration})</span>
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => {
                        sound.playClick();
                        setSelectedService(svc);
                      }}
                      className={`p-2.5 rounded-xl text-left transition-all text-xs flex flex-col justify-between ${
                        selectedService.id === svc.id
                          ? "bg-rose-500/20 border border-rose-400 text-white shadow-lg shadow-rose-500/10"
                          : "bg-slate-900/70 border border-white/5 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <span className="font-semibold text-[11px] leading-tight block text-white">{svc.name}</span>
                      <span className="text-[10px] font-mono text-rose-300 mt-1 block">
                        ${svc.price.toLocaleString("es-AR")} • {svc.duration}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Time Slots */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-slate-300 block">
                  2. Horario en la Agenda (Hoy):
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {slots.map((s, idx) => (
                    <button
                      key={idx}
                      disabled={s.status === "busy"}
                      onClick={() => {
                        sound.playClick();
                        setSelectedTime(s.time);
                      }}
                      className={`p-2 rounded-xl text-center text-xs font-mono transition-all ${
                        s.status === "busy"
                          ? "bg-slate-950/60 border border-white/5 text-slate-500 cursor-not-allowed line-through"
                          : selectedTime === s.time
                          ? "bg-gradient-to-r from-rose-500 to-fuchsia-600 text-white font-bold shadow-md shadow-rose-500/25"
                          : "bg-slate-900/80 border border-white/5 text-slate-300 hover:border-rose-400/40"
                      }`}
                    >
                      <span className="block font-bold">{s.time} hs</span>
                      <span className="text-[9px] opacity-70 block">{s.status === "busy" ? "Ocupado" : "Libre"}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Client Name Input */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-slate-300 block">
                  3. Clienta:
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Nombre y Apellido"
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 font-mono"
                  />
                  <button
                    onClick={handleBookTurno}
                    disabled={bookingDone}
                    className={`px-4 py-2 rounded-xl font-bold text-xs text-white transition-all flex items-center gap-1.5 shrink-0 shadow-lg ${
                      bookingDone
                        ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:shadow-rose-500/25 hover:scale-105"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Confirmar Turno</span>
                  </button>
                </div>
              </div>

              {/* Confirmation Toast / Push Notification Preview */}
              {bookingDone && (
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-rose-300">
                      <BellRing className="w-4 h-4 text-rose-400 animate-bounce" />
                      <span className="text-xs font-bold font-mono">¡Turno Agendado & Notificación Web Push Activa!</span>
                    </div>
                    <button
                      onClick={handleReset}
                      className="text-[10px] font-mono text-slate-400 hover:text-white underline"
                    >
                      Probar otro
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-200 leading-snug">
                    Se registró a <strong>{clientName}</strong> para <strong>{selectedService.name}</strong> a las <strong>{selectedTime} hs</strong>. Se programó el recordatorio automático 30 min antes.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
