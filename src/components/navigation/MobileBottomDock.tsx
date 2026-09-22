"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { SectionId } from "@/types";
import { 
  User, 
  LayoutGrid, 
  Gamepad2, 
  Calendar, 
  ShoppingBag, 
  Film, 
  Building2 
} from "lucide-react";
import { sound } from "@/lib/sound";

interface DockItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
  activeColor: string;
}

const DOCK_ITEMS: DockItem[] = [
  { id: "profile", label: "Perfil", icon: <User className="w-4 h-4" />, activeColor: "#38bdf8" },
  { id: "projects-hub", label: "Hub", icon: <LayoutGrid className="w-4 h-4" />, activeColor: "#818cf8" },
  { id: "vacas-locas", label: "Prode", icon: <Gamepad2 className="w-4 h-4" />, activeColor: "#10b981" },
  { id: "demoPilates", label: "Pilates", icon: <Calendar className="w-4 h-4" />, activeColor: "#a855f7" },
  { id: "tienda", label: "AURA", icon: <ShoppingBag className="w-4 h-4" />, activeColor: "#f5e6d3" },
  { id: "cinemark-app", label: "Cine", icon: <Film className="w-4 h-4" />, activeColor: "#e50914" },
  { id: "finanzas", label: "Finanzas", icon: <Building2 className="w-4 h-4" />, activeColor: "#2563eb" },
];

export function MobileBottomDock() {
  const { activeSection, currentTheme, scrollToSection } = useTheme();

  return (
    <nav
      aria-label="Navegación móvil"
      className="fixed bottom-3 left-3 right-3 z-50 md:hidden pointer-events-auto"
    >
      <div 
        className="glass-panel px-2 py-1.5 rounded-2xl border shadow-2xl flex items-center justify-around transition-all duration-300 backdrop-blur-2xl"
        style={{
          borderColor: `${currentTheme.primary}40`,
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.6), 0 0 20px ${currentTheme.glow}`
        }}
      >
        {DOCK_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sound.playPop();
                scrollToSection(item.id);
              }}
              className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all duration-300 ${
                isActive ? "scale-105" : "text-slate-400 hover:text-slate-200"
              }`}
              style={{
                color: isActive ? item.activeColor : undefined,
                backgroundColor: isActive ? `${item.activeColor}18` : "transparent"
              }}
              aria-label={`Ir a ${item.label}`}
            >
              {item.icon}
              <span className="text-[9px] font-mono font-medium tracking-tight mt-0.5">
                {item.label}
              </span>

              {/* Active Dot indicator */}
              {isActive && (
                <span
                  className="absolute -bottom-0.5 w-1 h-1 rounded-full animate-pulse"
                  style={{ backgroundColor: item.activeColor }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
