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
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ExternalLink
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

export function TiendaCard() {
  const project = PROJECTS_DATA["tienda"];

  const [mobileView, setMobileView] = useState<"specs" | "sandbox">("specs");
  const [techTab, setTechTab] = useState<"whatItDoes" | "solution" | "deepTech">("whatItDoes");
  const [selectedColor, setSelectedColor] = useState<"cream" | "champagne" | "obsidian">("obsidian");
  const [installmentPlan, setInstallmentPlan] = useState<3 | 6 | 12>(6);
  const [cartCount, setCartCount] = useState<number>(1);
  const [showCartDrawer, setShowCartDrawer] = useState<boolean>(false);

  const basePrice = 189000; // ARS
  const transferDiscount = basePrice * 0.85; // 15% OFF
  const freeShippingThreshold = 250000;
  const currentTotal = basePrice * cartCount;
  const freeShippingDiff = Math.max(0, freeShippingThreshold - currentTotal);

  const colors = {
    cream: { name: "Cremita Seda", hex: "#f5e6d3", glow: "rgba(245, 230, 211, 0.55)" },
    champagne: { name: "Champagne Oro", hex: "#e2d9c8", glow: "rgba(226, 217, 200, 0.45)" },
    obsidian: { name: "Negro Moca", hex: "#1c1917", glow: "rgba(28, 25, 23, 0.6)" }
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
        colors: ["#f5e6d3", "#fef3c7", "#d97706", "#ffffff"]
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
      {/* Luxury Cream / Champagne Ambient Glow with Feathered Mask */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-70 section-ambient-mask"
        style={{ background: project.theme.bgGradient }}
      />

      {/* Seamless Transition Vignettes */}
      <div className="section-vignette-top" />
      <div className="section-vignette-bottom" />

      <div className="relative z-10 max-w-7xl w-full mx-auto my-auto space-y-5">
        
        {/* Top Header & Badges */}
        <div className="space-y-1.5 border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-white/[0.04] text-[#f5e6d3] border border-[#f5e6d3]/30">
              {project.theme.tag}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.035em] text-white">
              {project.title}
            </h2>

            {/* External Code & Live Links a la derecha del título */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playSuccess()}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-stone-950 bg-[#f5e6d3] hover:bg-white transition-all shadow-md"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-stone-950" />
                  <span>Abrir Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playPop()}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/[0.1] hover:border-white/[0.25] transition-all shadow-sm"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#f5e6d3]" />
                  <span>Ver Repositorio</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-normal leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Mobile Segmented View Switcher */}
        <div className="lg:hidden flex items-center p-1 rounded-xl bg-[#0d0f17] border border-white/[0.08] shadow-lg mb-2">
          <button
            onClick={() => {
              sound.playClick();
              setMobileView("specs");
            }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all ${
              mobileView === "specs"
                ? "bg-white text-black shadow-sm font-bold"
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
                ? "bg-white text-black shadow-sm font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Catálogo & Carrito</span>
          </button>
        </div>

        {/* Main Grid: Architecture on Left, Interactive Product & Cart Sandbox on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column (5 cols) */}
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
                    <span className="text-[#fef3c7] font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Experiencia Headless & Catálogo 3D Cremita
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.whatItDoes}
                    </p>
                    <div className="pt-2 border-t border-white/5 space-y-1.5 text-slate-300">
                      {project.keyModules.map((m, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#f5e6d3] shrink-0 mt-0.5" />
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
                    <span className="text-[#fef3c7] font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Rendimiento Extremo vs Monolitos Tradicionales
                    </span>
                    <p className="text-slate-200 leading-relaxed">
                      {project.solutionProvided}
                    </p>
                    <div className="p-2.5 rounded-xl bg-slate-950/70 border border-[#f5e6d3]/20 text-[11px] text-slate-300 space-y-1">
                      <strong className="text-[#fef3c7] block font-mono">
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
                    <span className="text-[#fef3c7] font-mono text-[10px] font-bold uppercase tracking-wider block">
                      Físicas Spring & Arquitectura Headless
                    </span>
                    
                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-[#fef3c7] text-[10px] font-bold flex items-center gap-1">
                        <Layers className="w-3 h-3" /> Arquitectura Headless Desacoplada
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.architecture}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-[#fef3c7] text-[10px] font-bold flex items-center gap-1">
                        <Cpu className="w-3 h-3" /> Físicas de Resortes & 0 Layout Thrashing
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.algorithmsAndConcurrency}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-[#fef3c7] text-[10px] font-bold flex items-center gap-1">
                        <Database className="w-3 h-3" /> Esquema de Variantes & Cotizador
                      </span>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {project.deepTechnicalData.databaseAndTelemetry}
                      </p>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-950 border border-white/5 space-y-0.5">
                      <span className="font-mono text-[#fef3c7] text-[10px] font-bold flex items-center gap-1">
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
              <div className="grid grid-cols-4 gap-2 pt-2.5 border-t border-white/[0.06]">
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

            {/* Tech Stack Badges */}
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
              <span>PROBAR CATÁLOGO & CARRITO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: Interactive Product Card & Slide-Over Cart Simulator (7 cols) */}
          <div className={`${mobileView === "sandbox" ? "flex" : "hidden lg:flex"} lg:col-span-7 rounded-xl bg-[#0d0f17] border border-white/[0.08] p-5 flex-col justify-between space-y-4 shadow-2xl relative overflow-hidden`}>
            
            {/* Console Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-[#08090f] border border-white/[0.05] text-[#f5e6d3]">
                  <ShoppingBag className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block tracking-tight">
                    Flagship Product AURA & Checkout Desacoplado
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 block">
                    Cálculo reactivo de cuotas · Spring Physics
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playPop();
                  setShowCartDrawer(!showCartDrawer);
                }}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#08090f] border border-white/[0.08] text-slate-300 text-[11px] font-mono hover:text-white transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Carrito ({cartCount})</span>
              </button>
            </div>

            {/* Flagship Product Showcase Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center">
              
              {/* Product Visual Mockup */}
              <div 
                className="sm:col-span-5 p-4 rounded-xl bg-[#08090f] border border-white/[0.06] flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-300"
              >
                <div 
                  className="w-20 h-20 rounded-xl border border-white/[0.1] flex items-center justify-center mb-2 transition-all duration-300 shadow-xl"
                  style={{
                    backgroundColor: colors[selectedColor].hex
                  }}
                >
                  <Sparkles className="w-7 h-7 text-[#fef3c7] opacity-90" />
                </div>

                <span className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">
                  AURA-1 {selectedColor === "obsidian" ? "MOCA" : selectedColor === "champagne" ? "ORO" : "CREAM"}
                </span>
                <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                  {colors[selectedColor].name} & ANC
                </span>
                
                <span className="mt-1.5 text-[9px] px-2 py-0.5 rounded bg-white/[0.04] text-[#f5e6d3] border border-white/[0.08] font-mono font-semibold">
                  EDICIÓN LIMITADA
                </span>
              </div>

              {/* Product Configurator & Calculators */}
              <div className="sm:col-span-7 space-y-2.5">
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">Auriculares Inalámbricos AURA-1 Seda</h4>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-lg font-black text-white font-mono">
                      ${basePrice.toLocaleString("es-AR")}
                    </span>
                    <span className="text-[11px] text-[#f5e6d3] font-mono">
                      o ${transferDiscount.toLocaleString("es-AR")} con Transferencia (-15%)
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
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center cursor-pointer ${
                          selectedColor === col ? "border-white scale-110 shadow-lg shadow-white/10" : "border-white/20 opacity-70 hover:opacity-100"
                        }`}
                        style={{ backgroundColor: colors[col].hex }}
                        title={colors[col].name}
                      >
                        {selectedColor === col && <Check className="w-3 h-3 text-stone-900 font-bold" />}
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
                        className={`py-1 px-1.5 rounded-lg text-center border text-[11px] font-mono transition-all cursor-pointer ${
                          installmentPlan === plan
                            ? "bg-white/[0.1] border-white/40 text-white font-bold"
                            : "bg-[#08090f] border-white/[0.05] text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-[10px]">{plan} Cuotas</span>
                        <span className="block text-[9px] text-[#f5e6d3] font-semibold">
                          ${Math.round(basePrice / plan).toLocaleString("es-AR")}/mes
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart CTA */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-2.5 rounded-lg font-mono font-bold text-xs text-stone-950 bg-[#f5e6d3] hover:bg-white transition-all flex items-center justify-center gap-1.5 mt-1 cursor-pointer shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-stone-950" />
                  <span>AGREGAR AL CARRITO • ENVÍO INMEDIATO</span>
                </button>
              </div>
            </div>

            {/* Slide-over Cart Drawer / Progress Preview */}
            <div className="p-3 rounded-lg bg-[#08090f] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-medium flex items-center gap-1.5 text-[11px]">
                  <Truck className="w-3.5 h-3.5 text-[#f5e6d3]" />
                  {freeShippingDiff === 0
                    ? "¡Felicidades! Tienes Envío Gratis desbloqueado"
                    : `Agrega $${freeShippingDiff.toLocaleString("es-AR")} para desbloquear Envío Gratis`}
                </span>
                <span className="text-white text-[10px] font-bold">
                  Total: ${currentTotal.toLocaleString("es-AR")}
                </span>
              </div>

              {/* Progress bar towards free shipping */}
              <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#f5e6d3] transition-all duration-500"
                  style={{
                    width: `${Math.min(100, (currentTotal / freeShippingThreshold) * 100)}%`
                  }}
                />
              </div>
            </div>

            {/* Mobile Return to Specs Button */}
            <button
              onClick={() => {
                sound.playPop();
                setMobileView("specs");
              }}
              className="lg:hidden w-full py-2 px-3 rounded-lg text-xs font-mono font-semibold bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 mt-1"
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
