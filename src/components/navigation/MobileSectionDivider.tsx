"use client";

import React from "react";

interface MobileSectionDividerProps {
  number: string;
  label: string;
  color?: string;
}

export function MobileSectionDivider({
  number,
  label,
  color = "#38bdf8"
}: MobileSectionDividerProps) {
  return (
    <div 
      className="md:hidden relative w-full py-6 px-4 flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Crisp Hairline Rule */}
      <div className="absolute inset-x-4 h-px bg-white/[0.08]" />

      {/* Center Architectural Marker */}
      <div 
        className="relative z-10 flex items-center gap-2 px-3 py-1 rounded-md bg-[#08090d] border border-white/[0.1] shadow-lg"
      >
        <span 
          className="w-1.5 h-1.5 rounded-full shrink-0" 
          style={{ backgroundColor: color }}
        />
        <span className="text-[10px] font-mono text-slate-400">
          [{number}]
        </span>
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-white">
          {label}
        </span>
      </div>
    </div>
  );
}
