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
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span
                className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: project.theme.badgeBg,
                  color: project.theme.badgeText,
                  borderColor: project.theme.border
                }}
              >
                {project.theme.tag}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 border border-emerald-500/40 text-emerald-400 font-bold flex items-center gap-1.5 shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>En uso por clientes</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-normal leading-relaxed">
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
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.25] transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-rose-400" />
                <span>Ver Repositorio</span>
              </a>
            )}
          </div>
        </div>

        {/* Mobile Segmented View Switcher */}
        <div className="lg:hidden flex items-center p-1 rounded-lg bg-[#0d0f17] border border-white/[0.08] shadow-lg mb-2">
          <button
            onClick={() => {
              sound.playClick();
              setMobileView("specs");
            }}
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "specs"
                ? "bg-white text-black shadow-sm"
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
            className={`flex-1 py-1.5 px-3 rounded-md text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "sandbox"
                ? "bg-white text-black shadow-sm"
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
            <div className="p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] space-y-3.5 shadow-xl">
              
              {/* Nav Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-[#08090f] border border-white/[0.06]">
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("whatItDoes");
                  }}
                  className={`flex-1 py-1.5 px-2 rounded text-[11px] font-mono font-bold transition-all ${
                    techTab === "whatItDoes"
                      ? "bg-white/[0.08] text-white border border-white/[0.1]"
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
                  className={`flex-1 py-1.5 px-2 rounded text-[11px] font-mono font-bold transition-all ${
                    techTab === "solution"
                      ? "bg-white/[0.08] text-white border border-white/[0.1]"
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
                  className={`flex-1 py-1.5 px-2 rounded text-[11px] font-mono font-bold transition-all ${
                    techTab === "deepTech"
                      ? "bg-white/[0.08] text-white border border-white/[0.1]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Arquitectura
                </button>
              </div>

              {/* Tab 1: What it does */}
              {techTab === "whatItDoes" && (
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p className="text-slate-200 text-xs sm:text-sm">
                    {project.whatItDoes}
                  </p>

                  <div className="space-y-2 pt-1">
                    {project.keyModules.map((m, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.04] space-y-0.5">
                        <div className="flex items-center gap-2 text-white font-bold text-xs">
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
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p className="text-slate-200 text-xs sm:text-sm">
                    {project.solutionProvided}
                  </p>

                  <div className="p-3 rounded-lg bg-[#08090f] border border-white/[0.06] text-[11px] text-slate-300 space-y-1.5">
                    <strong className="text-rose-400 block font-mono text-[10px] uppercase tracking-wider">
                      Desafíos de Negocio Resueltos:
                    </strong>
                    {project.challenges.map((c, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 font-mono font-bold text-xs mt-0.5">•</span>
                        <span className="text-[11px] text-slate-300">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Deep Tech */}
              {techTab === "deepTech" && (
                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono font-bold text-[10px]">
                      <Layers className="w-3.5 h-3.5 text-rose-400" />
                      <span>Arquitectura & Sincronización</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {project.deepTechnicalData.architecture}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono font-bold text-[10px]">
                      <Cpu className="w-3.5 h-3.5 text-rose-400" />
                      <span>Indexación & No-Collisions</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {project.deepTechnicalData.algorithmsAndConcurrency}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono font-bold text-[10px]">
                      <Database className="w-3.5 h-3.5 text-rose-400" />
                      <span>Seguridad & Push Notifications</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {project.deepTechnicalData.securityAndPerformance}
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Stack Badges */}
              <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#08090f] border border-white/[0.06] text-slate-300"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Live Operational Metrics Ribbon */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/[0.06] text-center">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06]">
                    <span className="block text-xs sm:text-sm font-bold text-white font-mono">{m.value}</span>
                    <span className="block text-[8px] text-slate-500 uppercase font-mono mt-0.5">{m.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Mobile CTA to Sandbox */}
            <button
              onClick={() => {
                sound.playSuccess();
                setMobileView("sandbox");
              }}
              className="lg:hidden w-full py-2.5 px-4 rounded-lg text-xs font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Abrir Simulador de Agenda & Turnos</span>
            </button>
          </div>

          {/* Right Column: Interactive Caro Nails Studio Simulator (6 cols) */}
          <div className={`lg:col-span-6 flex flex-col space-y-4 ${mobileView === "specs" ? "hidden lg:flex" : "flex"}`}>
            <div className="p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] space-y-4 shadow-2xl relative overflow-hidden">
              
              {/* Studio Sandbox Header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    <Heart className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      Panel Administrativo Studio Caro Nails
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block">
                      Simulador de Agenda, Turnos y Balance
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 border border-emerald-500/40 text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Online
                </span>
              </div>

              {/* Financial Balance Mini Widget */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-[#08090f] border border-white/[0.06]">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Ingresos Mes</span>
                  <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">
                    ${monthlyRevenue.toLocaleString("es-AR")}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Insumos & Stock</span>
                  <span className="text-xs sm:text-sm font-bold text-rose-400 font-mono">
                    -${suppliesCost.toLocaleString("es-AR")}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Ganancia Neta</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">
                    ${(monthlyRevenue - suppliesCost).toLocaleString("es-AR")}
                  </span>
                </div>
              </div>

              {/* Step 1: Select Service */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-slate-300 flex items-center justify-between">
                  <span>1. Seleccionar Tratamiento:</span>
                  <span className="text-rose-400 font-mono">${selectedService.price.toLocaleString("es-AR")} ({selectedService.duration})</span>
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((svc) => (
                    <button
                      key={svc.id}
                      onClick={() => {
                        sound.playClick();
                        setSelectedService(svc);
                      }}
                      className={`p-2.5 rounded-lg text-left transition-all text-xs flex flex-col justify-between ${
                        selectedService.id === svc.id
                          ? "bg-white/[0.08] border border-white/[0.25] text-white shadow-sm"
                          : "bg-[#08090f] border border-white/[0.06] text-slate-300 hover:border-white/[0.15]"
                      }`}
                    >
                      <span className="font-bold text-[11px] leading-tight block text-white">{svc.name}</span>
                      <span className="text-[10px] font-mono text-slate-400 mt-1 block">
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
                      className={`p-2 rounded-lg text-center text-xs font-mono transition-all border ${
                        s.status === "busy"
                          ? "bg-white/[0.02] border-white/[0.04] text-slate-600 cursor-not-allowed line-through"
                          : selectedTime === s.time
                          ? "bg-white text-black font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.3)]"
                          : "bg-[#08090f] border-white/[0.06] text-slate-300 hover:border-white/[0.2]"
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
                    className="flex-1 px-3 py-2 rounded-lg bg-[#08090f] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/[0.3] font-mono"
                  />
                  <button
                    onClick={handleBookTurno}
                    disabled={bookingDone}
                    className={`px-4 py-2 rounded-lg font-bold text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 shadow-sm ${
                      bookingDone
                        ? "bg-white/[0.05] text-slate-500 cursor-not-allowed border border-white/[0.05]"
                        : "bg-white hover:bg-slate-200 text-black"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Confirmar Turno</span>
                  </button>
                </div>
              </div>

              {/* Confirmation Toast / Push Notification Preview */}
              {bookingDone && (
                <div className="p-3.5 rounded-lg bg-[#08090f] border border-rose-500/30 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
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

                  <p className="text-[11px] text-slate-300 leading-snug">
                    Se registró a <strong>{clientName}</strong> para <strong>{selectedService.name}</strong> a las <strong>{selectedTime} hs</strong>. Se programó el recordatorio automático 30 min antes.
                  </p>
                </div>
              )}

              {/* Mobile Return to Specs Button */}
              <button
                onClick={() => {
                  sound.playPop();
                  setMobileView("specs");
                }}
                className="lg:hidden w-full py-2 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 mt-1 font-mono"
              >
                <span>← Volver a Ficha Técnica & Arquitectura</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
