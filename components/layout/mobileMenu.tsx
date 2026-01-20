"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
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
  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    onToggle();
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden bg-dark-bg text-teal-400 p-4 flex items-center justify-between shadow-lg sticky top-0 z-40 border-b border-teal-400/10">
        <h1 className="text-xl font-bold tracking-tighter">DIKA.DEV</h1>
        <button onClick={onToggle} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-72 bg-dark-bg border-r border-teal-400/10 z-50 flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-teal-400/10 flex items-center justify-between">
              <h1 className="text-xl font-bold text-teal-400">&lt;Dika-Dev /&gt;</h1>
              <button 
                onClick={onToggle}
                className="p-2 text-gray-400 hover:text-teal-400"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6">
              <div className="px-3 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onSectionChange(item.id);
                        onToggle();
                      }}
                      className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-teal-400 text-dark-bg font-bold shadow-lg shadow-teal-400/20"
                          : "text-gray-400 hover:bg-teal-400/5 hover:text-teal-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            <div className="p-6 border-t border-teal-400/10">
              <p className="text-xs text-gray-500 text-center">
                © 2025 Onyedikachi Emmanuel
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
