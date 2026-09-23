"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { SectionId, ProjectTheme } from "@/types";
import { PROJECTS_DATA } from "@/data/projectsData";
import { sound } from "@/lib/sound";

const DEFAULT_THEME: ProjectTheme = {
  primary: "#38bdf8",
  secondary: "#818cf8",
  accent: "#38bdf8",
  glow: "rgba(56, 189, 248, 0.12)",
  border: "rgba(255, 255, 255, 0.08)",
  bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(56, 189, 248, 0.06) 0%, transparent 70%)",
  badgeBg: "rgba(255, 255, 255, 0.05)",
  badgeText: "#f8fafc",
  tag: "SYSTEMS ARCHITECT"
};

const EDUCATION_THEME: ProjectTheme = {
  primary: "#818cf8",
  secondary: "#6366f1",
  accent: "#a5b4fc",
  glow: "rgba(99, 102, 241, 0.12)",
  border: "rgba(255, 255, 255, 0.08)",
  bgGradient: "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 70%)",
  badgeBg: "rgba(255, 255, 255, 0.05)",
  badgeText: "#a5b4fc",
  tag: "FORMACIÓN & UTN"
};

interface ThemeContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  currentTheme: ProjectTheme;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  scrollToSection: (sectionId: SectionId) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("profile");
  const [soundEnabled, setSoundEnabledState] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("jariel_sound_enabled") === "true";
    }
    return false;
  });

  useEffect(() => {
    sound.enabled = soundEnabled;
  }, [soundEnabled]);

  const setSoundEnabled = (enabled: boolean) => {
    setSoundEnabledState(enabled);
    sound.enabled = enabled;
    localStorage.setItem("jariel_sound_enabled", enabled ? "true" : "false");
    if (enabled) sound.playSuccess();
  };

  const currentTheme: ProjectTheme = 
    activeSection in PROJECTS_DATA
      ? PROJECTS_DATA[activeSection].theme
      : activeSection === "education"
      ? EDUCATION_THEME
      : DEFAULT_THEME;

  const scrollToSection = (sectionId: SectionId) => {
    sound.playSwitch();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Sync active CSS custom variables to root document
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", currentTheme.primary);
    root.style.setProperty("--theme-secondary", currentTheme.secondary);
    root.style.setProperty("--theme-accent", currentTheme.accent);
    root.style.setProperty("--theme-glow", currentTheme.glow);
    root.style.setProperty("--theme-border", currentTheme.border);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        activeSection,
        setActiveSection,
        currentTheme,
        soundEnabled,
        setSoundEnabled,
        scrollToSection
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
