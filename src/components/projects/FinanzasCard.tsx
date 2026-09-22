"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  Building2, 
  TrendingUp, 
  CheckCircle2, 
  FileSpreadsheet, 
  ShieldCheck, 
  Zap 
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

  // Exchange rate quotes
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
        colors: ["#38bdf8", "#10b981", "#ffffff"]
      });
    } catch {
      // Confetti fallback
    }
    setTimeout(() => setBatchActionFeedback(null), 3000);
  };

  // Calculate totals
  const totalUsd = orders.reduce((acc, curr) => acc + curr.amountUsd, 0);
  const totalArs = totalUsd * activeRate;

  return (
    <section
      id="finanzas"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Deep Navy Corporate Glow */}
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
              <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-sky-500/30 hover:border-sky-400 hover:scale-105 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4 text-sky-400" />
                <span>Ver Repositorio</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Grid: Architecture Details on Left, Interactive Finance Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Specs & Financial Features (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Overview & Enterprise Specs */}
            <div className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3 shadow-xl">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Tesorería, Aprobaciones & Interbanking</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.overview}
              </p>

              {/* Technical Features Breakdown */}
              <div className="pt-2 border-t border-white/5 space-y-2.5">
                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-sky-500/20 text-xs">
                  <div className="font-semibold text-sky-300 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Firma por Lotes & Liberación Segura</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Workflow estricto con separación de roles: los gerentes de área autorizan firmas y tesorería ejecuta la liberación masiva en Interbanking.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-sky-500/20 text-xs">
                  <div className="font-semibold text-sky-300 flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5 text-sky-400" />
                    <span>IA para Parseo de Cotizaciones PDF</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Módulo inteligente que extrae automáticamente proveedores, CUITs, montos e IVA desde archivos de presupuesto o facturas digitales.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl glass-card border border-white/5 text-center">
                  <span className="block text-sm sm:text-base font-black text-sky-400 font-mono">
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
                  className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/80 border border-sky-500/20 text-slate-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Financial Analytics & Batch Sandbox (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-6 rounded-2xl border border-sky-500/30 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden">
            
            {/* Header with Live Currency Ticker */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
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
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-slate-950/80 border border-white/10 text-[11px] font-mono">
                {(Object.keys(exchangeRates) as Array<keyof typeof exchangeRates>).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      sound.playClick();
                      setSelectedCurrency(cur);
                    }}
                    className={`px-2 py-1 rounded transition-colors ${
                      selectedCurrency === cur
                        ? "bg-sky-500 text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {cur.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Financial Totals Card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Cotización {exchangeRates[selectedCurrency].name}
                </span>
                <span className="text-lg font-black text-white font-mono block mt-0.5">
                  ${activeRate.toLocaleString("es-AR")}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">
                  {exchangeRates[selectedCurrency].trend} hoy
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Total Lote en USD
                </span>
                <span className="text-lg font-black text-sky-400 font-mono block mt-0.5">
                  ${totalUsd.toLocaleString("en-US")} USD
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {orders.length} órdenes activas
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Conversión Liquidación ARS
                </span>
                <span className="text-lg font-black text-emerald-400 font-mono block mt-0.5">
                  ${totalArs.toLocaleString("es-AR")}
                </span>
                <span className="text-[10px] text-emerald-300 font-mono">
                  Conciliado 100%
                </span>
              </div>
            </div>

            {/* Interactive Orders Table */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-1 border-b border-white/5">
                <span>Orden / Proveedor</span>
                <span>Monto USD / ARS</span>
                <span>Estado (Clic para avanzar)</span>
              </div>

              <div className="space-y-1.5">
                {orders.map((order) => {
                  let statusColor = "bg-amber-500/20 text-amber-300 border-amber-500/40";
                  if (order.status === "Firmado") statusColor = "bg-sky-500/20 text-sky-300 border-sky-500/40";
                  if (order.status === "Liberado") statusColor = "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";

                  return (
                    <div
                      key={order.id}
                      className="p-2.5 rounded-lg bg-slate-900/90 border border-white/5 flex items-center justify-between gap-2 hover:border-sky-500/30 transition-all text-xs"
                    >
                      <div>
                        <div className="font-bold text-white flex items-center gap-2">
                          <span className="font-mono text-sky-400">{order.id}</span>
                          <span>{order.provider}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {order.concept}
                        </span>
                      </div>

                      <div className="text-right font-mono">
                        <span className="font-bold text-white block">
                          ${order.amountUsd.toLocaleString("en-US")} USD
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          ${(order.amountUsd * activeRate).toLocaleString("es-AR")} ARS
                        </span>
                      </div>

                      <button
                        onClick={() => handleAdvanceStatus(order.id)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border transition-all hover:scale-105 ${statusColor}`}
                        title="Haz clic para avanzar estado"
                      >
                        {order.status} →
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Batch Release Action Strip */}
            <div className="p-3 rounded-xl bg-slate-950/90 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              {batchActionFeedback ? (
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{batchActionFeedback}</span>
                </div>
              ) : (
                <div className="text-xs text-slate-300 text-center sm:text-left">
                  <span className="font-semibold text-white block">
                    Acciones Masivas de Tesorería
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Firma digital múltiple y exportación bancaria en un solo clic
                  </span>
                </div>
              )}

              <button
                onClick={handleBatchLiberate}
                className="w-full sm:w-auto px-4 py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-sky-400 to-emerald-400 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Liberar Lote en Interbanking</span>
              </button>
            </div>

            {/* Footer Stack Note */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
              <span>Stack: Next.js 16 + Firebase Firestore + SheetJS (XLSX)</span>
              <span className="text-sky-400 font-mono text-[11px]">Finanzas Treasury Suite</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
