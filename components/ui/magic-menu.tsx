"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "@/data/menuItem";
import { Compass, X, Check } from "lucide-react";

interface MagicMenuProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const MagicMenu: React.FC<MagicMenuProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.9 }
  };

  const handleItemClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[-1]"
            />
            
            {/* Menu Items Container */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mb-4 flex flex-col items-start gap-2 bg-dark-bg/80 backdrop-blur-md p-3 rounded-2xl border border-teal-400/20 shadow-2xl max-h-[70vh] overflow-y-auto custom-scrollbar"
            >
              <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold px-3 mb-2">
                Quick Navigation
              </div>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all relative group ${
                      isActive 
                        ? "bg-teal-400 text-dark-bg font-bold" 
                        : "text-gray-400 hover:bg-teal-400/5 hover:text-teal-400"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "" : "group-hover:scale-110"}`} />
                    <span className="text-sm whitespace-nowrap">{item.label}</span>
                    {isActive && (
                      <Check className="ml-auto w-4 h-4" />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border transition-all duration-300 ${
          isOpen 
            ? "bg-dark-bg border-teal-400 text-teal-400 rotate-90" 
            : "bg-teal-400 border-teal-400 text-dark-bg shadow-teal-400/20 shadow-[0_0_20px_rgba(45,212,191,0.3)]"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Compass className="w-7 h-7" />}
      </motion.button>
    </div>
  );
};
