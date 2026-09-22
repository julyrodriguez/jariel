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
      className="md:hidden relative w-full py-7 px-4 flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Background Glow Beams */}
      <div 
        className="absolute inset-x-4 h-px opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`
        }}
      />
      <div 
        className="absolute inset-x-12 h-[2px] opacity-40 blur-[3px]"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`
        }}
      />

      {/* Center Pill Badge */}
      <div 
        className="relative z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0d16] border shadow-2xl backdrop-blur-xl"
        style={{
          borderColor: `${color}50`,
          boxShadow: `0 4px 20px rgba(0, 0, 0, 0.8), 0 0 16px ${color}35`
        }}
      >
        <span 
          className="w-2 h-2 rounded-full animate-pulse shrink-0" 
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
        />
        <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400">
          {number}
        </span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span 
          className="text-[10px] font-mono font-extrabold tracking-widest uppercase"
          style={{ color }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
