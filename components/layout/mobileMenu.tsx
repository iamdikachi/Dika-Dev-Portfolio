"use client";

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
      <header className="md:hidden bg-dark-bg text-white p-4 flex items-center justify-between shadow-lg sticky top-0 z-40">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <button onClick={onToggle} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={onToggle}>
          <div
            className="bg-gradient-to-b from-blue-600 to-blue-800 text-white w-64 h-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-blue-500 flex items-center justify-between">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={onToggle}>
                <X size={24} />
              </button>
            </div>
            <nav className="py-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSectionChange(item.id)}
                    className={`w-full flex items-center gap-4 px-6 py-3 transition-all ${
                      activeSection === item.id
                        ? "bg-blue-700 border-l-4 border-white"
                        : "hover:bg-blue-700/50"
                    }`}
                  >
                    <Icon size={22} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
