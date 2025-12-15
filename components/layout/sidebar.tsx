"use client";

import React, { useState } from "react";

import { menuItems } from "@/data/menuItem";
import Profile from "@/public/images/my-photo.png";
import Image from "next/image";

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
    <aside
      className={`hidden md:flex flex-col bg-dark-bg text-white transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "lg:w-60 2xl:w-80"
      } shadow-2xl relative`}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      {/* Logo/Brand */}
      <div className="p-6 border-b border-dark-surface-light">
       
        <h1
          className={`font-bold transition-all duration-300 mt-5 ${
            isCollapsed ? "text-center text-xl" : "text-2xl text-center"
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
              className={`w-full flex items-center gap-4 px-6 py-3 transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-dark-bg border-l-4 border-dark-surface-light"
                  : "hover:bg-dark-surface-light"
              } ${isCollapsed ? "justify-center px-0" : ""}`}
              title={isCollapsed ? item.label : ""}
            >
              <Icon size={22} />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
