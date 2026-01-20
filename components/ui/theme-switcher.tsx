"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check } from "lucide-react";

const accents = [
  { name: "Teal", color: "#2dd4bf", shadow: "rgba(45, 212, 191, 0.2)" },
  { name: "Purple", color: "#a855f7", shadow: "rgba(168, 85, 247, 0.2)" },
  { name: "Blue", color: "#3b82f6", shadow: "rgba(59, 130, 246, 0.2)" },
  { name: "Rose", color: "#f43f5e", shadow: "rgba(244, 63, 94, 0.2)" },
  { name: "Emerald", color: "#10b981", shadow: "rgba(16, 185, 129, 0.2)" },
  { name: "Amber", color: "#f59e0b", shadow: "rgba(245, 158, 11, 0.2)" },
];

export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAccent, setCurrentAccent] = useState("#2dd4bf");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-accent");
    if (saved) setCurrentAccent(saved);
  }, []);

  const changeAccent = (color: string) => {
    setCurrentAccent(color);
    document.documentElement.style.setProperty("--accent-color", color);
    localStorage.setItem("portfolio-accent", color);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-dark-bg/80 backdrop-blur-md border border-teal-400/20 p-3 rounded-2xl shadow-2xl flex flex-col gap-2"
          >
            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold px-2 mb-1">
              Accent Color
            </div>
            <div className="grid grid-cols-3 gap-2">
              {accents.map((accent) => (
                <button
                  key={accent.name}
                  onClick={() => changeAccent(accent.color)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 relative"
                  style={{ backgroundColor: `${accent.color}20`, border: `1px solid ${accent.color}40` }}
                  title={accent.name}
                >
                  <div 
                    className="w-6 h-6 rounded-full" 
                    style={{ backgroundColor: accent.color }}
                  />
                  {currentAccent === accent.color && (
                    <motion.div 
                      layoutId="active-accent"
                      className="absolute inset-0 border-2 border-white/50 rounded-xl flex items-center justify-center"
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-dark-bg/80 backdrop-blur-md border border-teal-400/20 rounded-full flex items-center justify-center text-teal-400 shadow-xl hover:border-teal-400 transition-all group"
      >
        <Palette className={`w-6 h-6 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </motion.button>
    </div>
  );
};
