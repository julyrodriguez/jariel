"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { sound } from "@/lib/sound";

export function ScrollToTopMobile() {
  const { activeSection, scrollToSection, currentTheme } = useTheme();
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".snap-container");
    if (!container) return;

    const handleScroll = () => {
      // Consider user scrolled down if past 250px
      setIsScrolledDown(container.scrollTop > 250);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Show if scrolled down or activeSection is beyond profile
  const shouldShow = isScrolledDown || activeSection !== "profile";

  const handleScrollTop = () => {
    sound.playSwitch();
    scrollToSection("profile");
    const container = document.querySelector(".snap-container");
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          key="scroll-to-top-mobile"
          initial={{ opacity: 0, scale: 0.7, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 18 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={handleScrollTop}
          className="fixed bottom-5 right-5 z-50 md:hidden flex items-center gap-1.5 px-3.5 py-2.5 rounded-full glass-panel border shadow-2xl backdrop-blur-xl group cursor-pointer"
          style={{
            borderColor: `${currentTheme.primary}70`,
            boxShadow: `0 8px 30px rgba(0, 0, 0, 0.65), 0 0 18px ${currentTheme.glow}`
          }}
          aria-label="Volver arriba"
        >
          <ArrowUp 
            className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" 
            style={{ color: currentTheme.primary }} 
          />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
            Arriba
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
