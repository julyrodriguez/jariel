"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/projectsData";
import { 
  ShoppingBag, 
  Sparkles, 
  Truck, 
  Layers, 
  Check,
  CheckCircle2,
  Cpu,
  Database,
  ShieldCheck
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

export function TiendaCard() {
  const project = PROJECTS_DATA["tienda"];

  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");
  const [selectedColor, setSelectedColor] = useState<"obsidian" | "silver" | "cyan">("obsidian");
  const [installmentPlan, setInstallmentPlan] = useState<3 | 6 | 12>(6);
  const [cartCount, setCartCount] = useState<number>(1);
  const [showCartDrawer, setShowCartDrawer] = useState<boolean>(false);

  const basePrice = 189000; // ARS
  const transferDiscount = basePrice * 0.85; // 15% OFF
  const freeShippingThreshold = 250000;
  const currentTotal = basePrice * cartCount;
  const freeShippingDiff = Math.max(0, freeShippingThreshold - currentTotal);

  const colors = {
    obsidian: { name: "Negro Obsidiana", hex: "#111827", glow: "rgba(17, 24, 39, 0.6)" },
    silver: { name: "Plata Titanio", hex: "#94a3b8", glow: "rgba(148, 163, 184, 0.4)" },
    cyan: { name: "Cian Holográfico", hex: "#06b6d4", glow: "rgba(6, 182, 212, 0.5)" }
  };

  const handleAddToCart = () => {
    sound.playSuccess();
    setCartCount(cartCount + 1);
    setShowCartDrawer(true);
    try {
      confetti({
        particleCount: 35,
        spread: 45,
        origin: { y: 0.7 },
        colors: ["#06b6d4", "#22d3ee", "#38bdf8", "#ffffff"]
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section
      id="tienda"
      className="snap-section relative justify-center px-4 sm:px-8 py-16 md:py-20 overflow-hidden"
    >
      {/* Dynamic Ambient Theming Glow */}
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
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[10px] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
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
                className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-white border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 transition-all shadow-lg"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>Ver Código en GitHub</span>
              </a>
            )}
          </div>
        </div>

        {/* Main Grid: Architecture on Left, Interactive Product & Cart Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            
            {/* Interactive Tabs */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-cyan-500/30 space-y-3 shadow-xl flex-1 flex flex-col justify-between">
              
              <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/80 border border-white/5">
                <button
                  onClick={() => {
                    sound.playClick();
                    setTechTab("whatItDoes");
                  }}
                  className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-mono font-semibold transition-all ${
                    techTab === "whatItDoes"
                      ? "bg-cyan-400 text-slate-950"
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
                      ? "bg-cyan-400 text-slate-950"
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
                      ? "bg-cyan-400 text-slate-950"
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
                    <span className="text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Experiencia Headless & Catálogo 3D
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.whatItDoes}
                    </p>
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-slate-300">
                      {project.keyModules.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
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
                    <span className="text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Rendimiento Extremo vs Monolitos Tradicionales
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.solutionProvided}
                    </p>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-cyan-500/20 text-[11px] text-slate-300 space-y-1">
                      <strong className="text-cyan-400 block font-mono">
                        Desafíos de Conversión Superados:
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
                    <span className="text-cyan-400 font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Físicas Spring & Arquitectura Headless
                    </span>
                    
                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-cyan-400 text-[10px] font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Arquitectura Headless Desacoplada
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.architecture}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-cyan-400 text-[10px] font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> Físicas de Resortes & 0 Layout Thrashing
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.algorithmsAndConcurrency}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-cyan-400 text-[10px] font-bold flex items-center gap-1">
                        <Database className="w-3 h-3" /> Esquema de Variantes & Cotizador
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.databaseAndTelemetry}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-cyan-400 text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Lighthouse 99/100 & Zero Lag
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
                    <span className="block text-xs sm:text-sm font-black text-cyan-400 font-mono">
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
                  className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-slate-900/80 border border-cyan-500/20 text-slate-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Product Card & Slide-Over Cart Simulator (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-5 rounded-2xl border border-cyan-500/30 flex flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden">
            
            {/* Sandbox Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Sandbox Interactivo: Flagship Product & Checkout Reactivo
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Interactúa con variantes de color, cálculo de cuotas y carrito deslizable
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playPop();
                  setShowCartDrawer(!showCartDrawer);
                }}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono hover:bg-cyan-900/50 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Carrito ({cartCount})</span>
              </button>
            </div>

            {/* Flagship Product Showcase Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
              
              {/* Product Visual Mockup */}
              <div 
                className="sm:col-span-5 p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-500"
                style={{
                  boxShadow: `0 0 30px ${colors[selectedColor].glow}`
                }}
              >
                <div className="w-20 h-20 rounded-full blur-2xl absolute -top-4 -right-4 opacity-40" style={{ backgroundColor: colors[selectedColor].hex }} />

                <div 
                  className="w-24 h-24 rounded-2xl border flex items-center justify-center mb-2 transition-all duration-300 shadow-xl"
                  style={{
                    backgroundColor: colors[selectedColor].hex,
                    borderColor: "rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <Sparkles className="w-8 h-8 text-white opacity-80" />
                </div>

                <span className="text-[11px] font-mono font-bold text-slate-300 tracking-wider">AURA-1 ULTRA</span>
                <span className="text-[9px] text-cyan-400 font-mono mt-0.5">Cancelación Activa 45dB</span>
                
                <span className="mt-1.5 text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  ¡Solo 3 unidades en bodega!
                </span>
              </div>

              {/* Product Configurator & Calculators */}
              <div className="sm:col-span-7 space-y-2.5">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">Auriculares Inalámbricos AURA-1</h4>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-lg font-black text-white font-mono">
                      ${basePrice.toLocaleString("es-AR")}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      o ${transferDiscount.toLocaleString("es-AR")} con Transferencia (15% OFF)
                    </span>
                  </div>
                </div>

                {/* Color Variant Selector */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Variante de Color: <strong className="text-white">{colors[selectedColor].name}</strong>
                  </span>
                  <div className="flex items-center gap-2">
                    {(Object.keys(colors) as Array<keyof typeof colors>).map((col) => (
                      <button
                        key={col}
                        onClick={() => {
                          sound.playClick();
                          setSelectedColor(col);
                        }}
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                          selectedColor === col ? "border-cyan-400 scale-110 shadow-lg" : "border-slate-700 opacity-70 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: colors[col].hex }}
                        title={colors[col].name}
                      >
                        {selectedColor === col && <Check className="w-3 h-3 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Financing Installment Plan Selector */}
                <div className="space-y-1 pt-0.5">
                  <span className="text-[10px] font-mono text-slate-400 block">
                    Financiación en Cuotas Fijas sin Interés:
                  </span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {[3, 6, 12].map((plan) => (
                      <button
                        key={plan}
                        onClick={() => {
                          sound.playClick();
                          setInstallmentPlan(plan as 3 | 6 | 12);
                        }}
                        className={`py-1 px-1.5 rounded-lg text-center border text-[11px] font-mono transition-all ${
                          installmentPlan === plan
                            ? "bg-cyan-950 border-cyan-400 text-white font-bold"
                            : "bg-slate-900 border-white/5 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-[10px]">{plan} Cuotas</span>
                        <span className="block text-[9px] text-cyan-300 font-semibold">
                          ${Math.round(basePrice / plan).toLocaleString("es-AR")}/mes
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-2 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-1.5 mt-1"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Agregar al Carrito • Envío Inmediato</span>
                </button>
              </div>
            </div>

            {/* Slide-over Cart Drawer / Progress Preview (Interactive) */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold flex items-center gap-1 text-[11px]">
                  <Truck className="w-3.5 h-3.5 text-cyan-400" />
                  {freeShippingDiff === 0
                    ? "¡Felicidades! Tienes Envío Gratis desbloqueado"
                    : `Agrega $${freeShippingDiff.toLocaleString("es-AR")} para desbloquear Envío Gratis`}
                </span>
                <span className="font-mono text-cyan-300 text-[10px] font-bold">
                  Total: ${currentTotal.toLocaleString("es-AR")}
                </span>
              </div>

              {/* Progress bar towards free shipping */}
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (currentTotal / freeShippingThreshold) * 100)}%`
                  }}
                />
              </div>
            </div>

            {/* Footer Stack Note */}
            <div className="flex items-center justify-between text-xs text-slate-400 pt-1 border-t border-white/5">
              <span>Stack: React 18 + Vite + Tailwind + Spring Physics</span>
              <span className="text-cyan-400 font-mono text-[10px]">Next-Gen Headless Engine</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
