"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { menuItems } from "@/data/menuItem";

interface MobileMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  activeSection,
  onSectionChange,
  isOpen,
  onToggle,
}) => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSelect = (sectionId: string) => {
    onToggle();
    setTimeout(() => {
      onSectionChange(sectionId);
    }, 60);
  };

  return (
    <>
      {/* Mobile Sticky Header */}
      <header className="lg:hidden bg-dark-bg text-teal-400 sticky top-0 z-40 border-b border-teal-400/10">
        <div className="p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tighter text-teal-400">DIKA.DEV</h1>
          <button
            type="button"
            onClick={onToggle}
            className="p-2 rounded-lg text-gray-300 hover:text-teal-400 hover:bg-teal-400/5 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Dropdown Menu - absolute overlay positioned below header */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 w-full overflow-hidden border-b border-teal-400/20 bg-dark-bg shadow-2xl z-50"
            >
              <nav className="p-4 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.id)}
                      className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all cursor-pointer font-mono text-sm ${
                        isActive
                          ? "bg-teal-400 text-dark-bg font-bold shadow-md shadow-teal-400/20"
                          : "text-gray-300 hover:bg-teal-400/10 hover:text-teal-300"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}

                <div className="pt-3 mt-3 border-t border-teal-400/10 flex items-center justify-between text-xs text-gray-400 px-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                    </span>
                    <span className="text-teal-400 font-medium">Available for work</span>
                  </div>
                  <span className="text-gray-500 font-mono text-[11px]">
                    &copy; {currentYear} Dika
                  </span>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop for click-outside dismissal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
