"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ResumeProps {
  onSectionChange?: (section: string) => void;
}

export const Resume: React.FC<ResumeProps> = () => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* View Header */}
      <div className="mb-6">
        <div className="text-xs sm:text-sm text-gray-500 font-mono mb-1">
          const resume = await fetchResume();
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400 font-mono">
          Resume
        </h1>
      </div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0c0c0c] border border-teal-400/20 rounded-xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm"
      >
        {/* Terminal Header */}
        <div className="bg-dark-bg border-b border-teal-400/10 px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400/20 border border-orange-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-teal-400/20 border border-teal-400/30"></div>
          </div>
          <div className="text-xs text-gray-500 uppercase tracking-widest hidden sm:block">
            dikachi-dev@resume: ~
          </div>
          <div className="w-10"></div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* cat command */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-teal-400">➜</span>
            <span className="text-gray-400">~</span>
            <span className="text-cyan-300 font-bold">cat</span>
            <span className="text-amber-300/90">resume-overview.txt</span>
          </div>

          {/* Simple terminal write-up */}
          <div className="text-gray-300 space-y-2.5 border-l-2 border-teal-400/20 pl-4 py-1 leading-relaxed">
            <p className="text-teal-300 font-bold">
              ONYEDIKACHI EMMANUEL — Full-Stack Engineer
            </p>
            <p className="text-gray-400">
              Full-Stack Engineer with 5 years of hands-on experience building and shipping web applications across Fintech, Edutech, and AI. Strong on backend (NestJS, Node.js, Laravel, PostgreSQL) and frontend (React, Next.js, TypeScript, Livewire).
            </p>
            <p className="text-gray-400">
              Track record of building payment and wallet systems, multi-tenant architectures, AI-driven automation, and real-time features, often owning both layers of a product.
            </p>
            <div className="text-xs text-gray-400 pt-1 border-t border-teal-400/10 space-y-1">
              <div>
                <span className="text-teal-400 font-medium">Education:</span> Higher National Diploma & National Diploma in Computer Science (Federal Polytechnic, Oko)
              </div>
              <div>
                <span className="text-teal-400 font-medium">Core Stack:</span> Node.js · NestJS · Laravel · React · Next.js · TypeScript · AI Integration
              </div>
            </div>
          </div>

          {/* open command */}
          <div className="pt-2 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-teal-400">➜</span>
              <span className="text-gray-400">~</span>
              <span className="text-cyan-300 font-bold">open</span>
              <span className="text-teal-400/80">--target</span>
              <span className="text-amber-300/90">&quot;_blank&quot;</span>
              <span className="text-gray-300">./resume.pdf</span>
            </div>

            {/* Clickable Terminal Action Button */}
            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-teal-400/10 hover:bg-teal-400/20 border border-teal-400/30 hover:border-teal-400 text-teal-300 hover:text-white transition-all cursor-pointer group"
              >
                <span className="text-teal-400">➜</span>
                <span className="font-semibold">[ click to open resume.pdf in new tab ]</span>
                <ExternalLink className="w-3.5 h-3.5 text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="text-[11px] text-gray-500">
              # status: ready | format: A4 PDF | view-only (no download required)
            </div>
          </div>

          {/* Prompt Cursor */}
          <div className="flex items-center gap-2 pt-3 border-t border-teal-400/10">
            <span className="text-teal-400">➜</span>
            <span className="text-gray-400">~</span>
            <span className="bg-teal-400/50 w-2 h-4 sm:h-5 animate-pulse"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
