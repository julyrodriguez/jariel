"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  TrendingUp, 
  CheckCircle2, 
  FileSpreadsheet, 
  ShieldCheck, 
  Layers,
  Cpu,
  Database,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

interface Order {
  id: string;
  provider: string;
  concept: string;
  amountUsd: number;
  status: "Pendiente" | "Firmado" | "Liberado";
  date: string;
}

export function FinanzasCard() {
  const project = PROJECTS_DATA["finanzas"];

  const [mobileView, setMobileView] = useState<"specs" | "sandbox">("specs");
  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");
  const [selectedCurrency, setSelectedCurrency] = useState<"oficial" | "blue" | "mep" | "ccl">("mep");
  
  const exchangeRates = {
    oficial: { name: "Oficial", rate: 1080, trend: "+0.2%" },
    blue: { name: "Dólar Blue", rate: 1420, trend: "-0.5%" },
    mep: { name: "Dólar MEP", rate: 1395, trend: "+0.1%" },
    ccl: { name: "Contado con Liq (CCL)", rate: 1410, trend: "+0.4%" }
  };

  const activeRate = exchangeRates[selectedCurrency].rate;

  // Interactive Purchase Orders List
  const [orders, setOrders] = useState<Order[]>([
    { id: "OC-8942", provider: "Amazon Web Services", concept: "Infraestructura Cloud & S3", amountUsd: 2450, status: "Firmado", date: "Hoy, 10:15" },
    { id: "OC-8943", provider: "GitHub Inc.", concept: "Enterprise Seats Anual", amountUsd: 1200, status: "Pendiente", date: "Hoy, 11:30" },
    { id: "OC-8944", provider: "Telecom Argentina", concept: "Fibra Óptica Dedicada", amountUsd: 850, status: "Liberado", date: "Ayer, 16:40" },
    { id: "OC-8945", provider: "Logitech B2B", concept: "Hardware & Periféricos", amountUsd: 680, status: "Pendiente", date: "Hoy, 14:00" }
  ]);

  const [batchActionFeedback, setBatchActionFeedback] = useState<string | null>(null);

  const handleAdvanceStatus = (orderId: string) => {
    sound.playClick();
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== orderId) return ord;
        if (ord.status === "Pendiente") return { ...ord, status: "Firmado" };
        if (ord.status === "Firmado") return { ...ord, status: "Liberado" };
        return { ...ord, status: "Pendiente" };
      })
    );
  };

  const handleBatchLiberate = () => {
    sound.playSuccess();
    setOrders((prev) =>
      prev.map((ord) => ({ ...ord, status: "Liberado" }))
    );
    setBatchActionFeedback("¡Lote de Órdenes Liberado y Archivo Interbanking Generado!");
    try {
      confetti({
        particleCount: 45,
        spread: 55,
        origin: { y: 0.7 },
        colors: ["#2563eb", "#3b82f6", "#fbbf24", "#ffffff"]
      });
    } catch {
      // Confetti fallback
    }
    setTimeout(() => setBatchActionFeedback(null), 3000);
  };

  const totalUsd = orders.reduce((acc, curr) => acc + curr.amountUsd, 0);
  const totalArs = totalUsd * activeRate;

  return (
    <section
      id="finanzas"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Deep Navy Corporate Glow with Feathered Mask */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-60 section-ambient-mask"
        style={{ background: project.theme.bgGradient }}
      />

      {/* Seamless Transition Vignettes */}
      <div className="section-vignette-top" />
      <div className="section-vignette-bottom" />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-5">
        
        {/* Top Header & Badges */}
        <div className="space-y-1.5 border-b border-white/[0.08] pb-4">
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

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-white">
              {project.title}
            </h2>

            {/* External Code Links a la derecha del título */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playPop()}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.25] transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-blue-400" />
                <span>Ver Repositorio</span>
              </a>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-normal leading-relaxed">
            {project.subtitle}
          </p>
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
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Ticker & Órdenes</span>
          </button>
        </div>

        {/* Main Grid: Architecture Details on Left, Interactive Finance Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column: Specs & Financial Features (5 cols) */}
          <div className={`${mobileView === "specs" ? "flex" : "hidden lg:flex"} lg:col-span-5 flex-col justify-between space-y-3.5`}>
            
            {/* Interactive Tabs */}
            <div className="p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              
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

              {/* Tab Content Display */}
              <div className="space-y-2 text-xs">
                {techTab === "whatItDoes" && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="text-blue-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Tesorería & Pipeline de Compras
                    </span>
                    <p className="text-slate-200 leading-relaxed text-xs">
                      {project.whatItDoes}
                    </p>
                    <div className="pt-2 border-t border-white/[0.06] space-y-1.5 text-slate-300">
                      {project.keyModules.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-[#08090f] border border-white/[0.04]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-white text-xs">{m.title}:</strong>{" "}
                            <span className="text-slate-400 text-[11px] leading-tight block">{m.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {techTab === "solution" && (
                  <div className="space-y-2 animate-fadeIn">
                    <span className="text-blue-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Firma de Lotes & Eliminación de Cuellos de Botella
                    </span>
                    <p className="text-slate-200 leading-relaxed text-xs">
                      {project.solutionProvided}
                    </p>
                    <div className="p-3 rounded-lg bg-[#08090f] border border-white/[0.06] text-[11px] text-slate-300 space-y-1.5">
                      <strong className="text-blue-400 block font-mono text-[10px] uppercase tracking-wider">
                        Desafíos Corporativos Superados:
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
                    <span className="text-blue-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Auditoría Inmutable & Conciliación Bancaria
                    </span>
                    
                    <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                      <span className="font-mono text-blue-400 text-[10px] font-bold flex items-center gap-1.5">
                        <Layers className="w-3 h-3" /> Next.js 16 + Firestore + SheetJS (XLSX)
                      </span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {project.deepTechnicalData.architecture}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                      <span className="font-mono text-blue-400 text-[10px] font-bold flex items-center gap-1.5">
                        <Cpu className="w-3 h-3" /> Conciliación Multimoneda & Bloqueo Optimista
                      </span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {project.deepTechnicalData.algorithmsAndConcurrency}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                      <span className="font-mono text-blue-400 text-[10px] font-bold flex items-center gap-1.5">
                        <Database className="w-3 h-3" /> Trazabilidad de Auditoría Inmutable
                      </span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {project.deepTechnicalData.databaseAndTelemetry}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1">
                      <span className="font-mono text-blue-400 text-[10px] font-bold flex items-center gap-1.5">
                        <ShieldCheck className="w-3 h-3" /> PIN de Tesorería & Batch Signing
                      </span>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {project.deepTechnicalData.securityAndPerformance}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Metrics Ribbon */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-white/[0.06]">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#08090f] border border-white/[0.06] text-center">
                    <span className="block text-xs sm:text-sm font-bold text-white font-mono">
                      {m.value}
                    </span>
                    <span className="block text-[8px] text-slate-500 uppercase tracking-wider mt-0.5 font-mono">
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
                  className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#08090f] border border-white/[0.06] text-slate-300"
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
              className="lg:hidden w-full py-2.5 px-4 rounded-lg text-xs font-mono font-bold text-black bg-white hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Probar Ticker Cambiario & Órdenes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Interactive Financial Analytics & Batch Sandbox (7 cols) */}
          <div className={`${mobileView === "sandbox" ? "flex" : "hidden lg:flex"} lg:col-span-7 p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] flex-col justify-between space-y-3.5 shadow-2xl relative overflow-hidden`}>
            
            {/* Header with Live Currency Ticker */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Sandbox Interactivo: Ticker Cambiario & Órdenes de Compra
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Cambia la cotización o avanza los estados de aprobación de cada orden
                  </span>
                </div>
              </div>

              {/* Currency Selector */}
              <div className="flex items-center gap-1 p-1 rounded-md bg-[#08090f] border border-white/[0.06] text-[10px] font-mono">
                {(Object.keys(exchangeRates) as Array<keyof typeof exchangeRates>).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      sound.playClick();
                      setSelectedCurrency(cur);
                    }}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      selectedCurrency === cur
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {cur.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Financial Totals Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-3 rounded-lg bg-[#08090f] border border-white/[0.06]">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">
                  Cotización {exchangeRates[selectedCurrency].name}
                </span>
                <span className="text-base font-bold text-white font-mono block mt-0.5">
                  ${activeRate.toLocaleString("es-AR")}
                </span>
                <span className="text-[9px] text-emerald-400 font-mono">
                  {exchangeRates[selectedCurrency].trend} hoy
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#08090f] border border-white/[0.06]">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">
                  Total Lote en USD
                </span>
                <span className="text-base font-bold text-blue-400 font-mono block mt-0.5">
                  ${totalUsd.toLocaleString("en-US")} USD
                </span>
                <span className="text-[9px] text-slate-400 font-mono">
                  {orders.length} órdenes activas
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#08090f] border border-white/[0.06]">
                <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block">
                  Conversión Liquidación ARS
                </span>
                <span className="text-base font-bold text-emerald-400 font-mono block mt-0.5">
                  ${totalArs.toLocaleString("es-AR")}
                </span>
                <span className="text-[9px] text-emerald-400/80 font-mono">
                  Conciliado 100%
                </span>
              </div>
            </div>

            {/* Interactive Orders Table */}
            <div className="p-3 rounded-xl bg-[#08090f] border border-white/[0.06] space-y-1.5">
              <div className="grid grid-cols-12 items-center gap-2 text-[10px] font-mono text-slate-500 px-2 pb-1 border-b border-white/[0.06]">
                <span className="col-span-5 text-left">Orden / Proveedor</span>
                <span className="col-span-4 text-center">Monto USD / ARS</span>
                <span className="col-span-3 text-right truncate">
                  Estado <span className="hidden sm:inline">(Clic para avanzar)</span>
                </span>
              </div>

              <div className="space-y-1">
                {orders.map((order) => {
                  let statusColor = "bg-amber-500/10 text-amber-300 border-amber-500/30";
                  if (order.status === "Firmado") statusColor = "bg-blue-500/10 text-blue-300 border-blue-500/30";
                  if (order.status === "Liberado") statusColor = "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";

                  return (
                    <div
                      key={order.id}
                      className="p-2.5 rounded-lg bg-[#0d0f17] border border-white/[0.06] grid grid-cols-12 items-center gap-2 hover:border-white/[0.15] transition-all text-xs"
                    >
                      <div className="col-span-5 text-left min-w-0">
                        <div className="font-bold text-white flex items-center gap-1.5 text-[11px] truncate">
                          <span className="font-mono text-blue-400 shrink-0">{order.id}</span>
                          <span className="truncate">{order.provider}</span>
                        </div>
                        <span className="text-[9px] text-slate-500 block mt-0.5 truncate font-mono">
                          {order.concept}
                        </span>
                      </div>

                      <div className="col-span-4 text-center font-mono">
                        <span className="font-bold text-white block text-[11px]">
                          ${order.amountUsd.toLocaleString("en-US")} USD
                        </span>
                        <span className="text-[9px] text-slate-400 block">
                          ${(order.amountUsd * activeRate).toLocaleString("es-AR")} ARS
                        </span>
                      </div>

                      <div className="col-span-3 flex justify-end">
                        <button
                          onClick={() => handleAdvanceStatus(order.id)}
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-all hover:scale-105 whitespace-nowrap ${statusColor}`}
                          title="Haz clic para avanzar estado"
                        >
                          {order.status} →
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Batch Release Action Strip */}
            <div className="p-3 rounded-xl bg-[#08090f] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2.5">
              {batchActionFeedback ? (
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{batchActionFeedback}</span>
                </div>
              ) : (
                <div className="text-xs text-slate-300 text-center sm:text-left">
                  <span className="font-semibold text-white block text-[11px]">
                    Acciones Masivas de Tesorería
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Firma digital múltiple y exportación bancaria en un solo clic
                  </span>
                </div>
              )}

              <button
                onClick={handleBatchLiberate}
                className="w-full sm:w-auto px-4 py-2 rounded-lg font-bold text-xs font-mono text-black bg-white hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Liberar Lote en Interbanking</span>
              </button>
            </div>

            {/* Mobile Return to Specs Button */}
            <button
              onClick={() => {
                sound.playPop();
                setMobileView("specs");
              }}
              className="lg:hidden w-full py-2 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 mt-1 font-mono"
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
