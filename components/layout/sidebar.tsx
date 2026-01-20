"use client";

import React, { useState } from "react";

import { menuItems } from "@/data/menuItem";
import Profile from "@/public/images/my-photo.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 256 }}
      className={`hidden md:flex flex-col bg-dark-bg text-gray-300 transition-colors duration-300 ease-in-out relative border-r border-teal-400/5`}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      {/* Logo/Brand */}
      <div className="p-6 border-b border-teal-400/10">
        <h1
          className={`font-bold transition-all duration-300 mt-5 text-teal-400 text-center ${
            isCollapsed ? "text-xl" : "text-2xl"
          }`}
        >
          {isCollapsed ? "<>" : "</Dika-Dev>"}
        </h1>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-3 transition-all duration-200 group ${
                activeSection === item.id
                  ? "bg-teal-400/10 text-teal-400 border-l-4 border-teal-400"
                  : "hover:bg-teal-400/5 text-gray-300 hover:text-teal-400"
              } ${isCollapsed ? "justify-center px-0" : ""}`}
              title={isCollapsed ? item.label : ""}
            >
              <div className="shrink-0">
                <Icon size={22} className={`${activeSection === item.id ? "scale-110" : "group-hover:scale-110"} transition-transform`} />
              </div>
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </button>
          );
        })}
      </nav>
    </motion.aside>
  );
};
