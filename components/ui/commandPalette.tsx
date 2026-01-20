"use client";

import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  Award, 
  Code, 
  Download, 
  Mail, 
  Coffee,
  Search,
  Command as CommandIcon 
} from "lucide-react";
import { menuItems } from "@/data/menuItem";

interface CommandPaletteProps {
  onSectionChange: (section: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ onSectionChange }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (id: string) => {
    onSectionChange(id);
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="w-full max-w-[600px] z-[101] bg-dark-bg border border-teal-400/20 rounded-2xl shadow-2xl overflow-hidden"
            >
              <Command className="flex flex-col h-full">
                <div className="flex items-center px-4 py-4 border-b border-teal-400/10">
                  <Search className="w-5 h-5 text-teal-400 mr-3 shrink-0" />
                  <Command.Input
                    autoFocus
                    placeholder="Search sections or commands..."
                    className="flex-1 bg-transparent text-gray-300 border-none outline-none focus:ring-0 text-lg placeholder:text-gray-600"
                  />
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-teal-400/5 rounded border border-teal-400/10 text-xs text-gray-500 font-mono">
                    <span className="text-teal-400">ESC</span>
                    to close
                  </div>
                </div>

                <Command.List className="max-h-[400px] overflow-y-auto p-2 scrollbar-hide">
                  <Command.Empty className="py-8 text-center text-gray-500">
                    No results found.
                  </Command.Empty>

                  <Command.Group heading={<span className="px-3 text-xs font-semibold text-teal-400/50 uppercase tracking-widest block mb-2">Navigation</span>}>
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Command.Item
                          key={item.id}
                          onSelect={() => handleSelect(item.id)}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-teal-400 hover:bg-teal-400/5 cursor-pointer transition-all aria-selected:bg-teal-400/10 aria-selected:text-teal-400 group"
                        >
                          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{item.label}</span>
                          <span className="ml-auto text-xs text-gray-600 font-mono">Go to {item.id}</span>
                        </Command.Item>
                      );
                    })}
                  </Command.Group>

                  <Command.Group heading={<span className="px-3 text-xs font-semibold text-teal-400/50 uppercase tracking-widest block mt-4 mb-2">Practical</span>}>
                    <Command.Item
                      onSelect={() => window.print()}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-teal-400 hover:bg-teal-400/5 cursor-pointer transition-all aria-selected:bg-teal-400/10 aria-selected:text-teal-400 group"
                    >
                      <Download className="w-5 h-5" />
                      <span className="font-medium">Save Page as PDF</span>
                    </Command.Item>
                    <Command.Item
                      onSelect={() => window.open('mailto:onyedikachi@example.com')}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-teal-400 hover:bg-teal-400/5 cursor-pointer transition-all aria-selected:bg-teal-400/10 aria-selected:text-teal-400 group"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">Email Me Directly</span>
                    </Command.Item>
                  </Command.Group>
                </Command.List>

                <div className="p-3 border-t border-teal-400/10 bg-teal-400/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-2 text-[10px] text-gray-600">
                      <CommandIcon className="w-3 h-3" />
                      <span>Press <kbd className="font-mono text-teal-400">Ctrl + K</kbd> to toggle anywhere</span>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-1 text-[10px] text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                        <span>Terminal Mode Active</span>
                      </div>
                   </div>
                </div>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
