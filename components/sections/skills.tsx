"use client";

import React, { useState } from "react";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(skills.filter(s => s.type === "technical").map((skill) => skill.category)))];

  const filteredSkills = activeCategory === "All" 
    ? skills.filter(s => s.type === "technical")
    : skills.filter(s => s.category === activeCategory && s.type === "technical");

  // Technology logo URLs from CDN (simpleicons.org via cdnjs)
  const getLogoUrl = (name: string) => {
    const logoMap: Record<string, string> = {
      "React": "https://cdn.simpleicons.org/react/61DAFB",
      "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",
      "Alpine.js": "https://cdn.simpleicons.org/alpinedotjs/8BC0D0",
      "Livewire": "https://cdn.simpleicons.org/livewire/FB70A9",
      "HTML": "https://cdn.simpleicons.org/html5/E34F26",
      "CSS": "https://cdn.simpleicons.org/css3/1572B6",
      "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      "Bootstrap": "https://cdn.simpleicons.org/bootstrap/7952B3",
      "Shadcn UI": "https://cdn.simpleicons.org/shadcnui/000000",
      "Flowbite": "https://cdn.simpleicons.org/flowbite/1C64F2",
      "Shad UI": "https://cdn.simpleicons.org/shadcnui/000000",
      "Node.js": "https://cdn.simpleicons.org/nodedotjs/339933",
      "Express.js": "https://cdn.simpleicons.org/express/000000",
      "Laravel": "https://cdn.simpleicons.org/laravel/FF2D20",
      "PHP": "https://cdn.simpleicons.org/php/777BB4",
      "Filament": "https://cdn.simpleicons.org/laravel/FF2D20",
      "AdminJS": "https://cdn.simpleicons.org/javascript/F7DF1E",
      "JavaScript": "https://cdn.simpleicons.org/javascript/F7DF1E",
      "TypeScript": "https://cdn.simpleicons.org/typescript/3178C6",
      "Zustand": "https://cdn.simpleicons.org/react/61DAFB",
      "MySQL": "https://cdn.simpleicons.org/mysql/4479A1",
      "MongoDB": "https://cdn.simpleicons.org/mongodb/47A248",
      "Firebase": "https://cdn.simpleicons.org/firebase/FFCA28",
      "Supabase": "https://cdn.simpleicons.org/supabase/3FCF8E",
      "GitHub": "https://cdn.simpleicons.org/github/181717",
      "Git": "https://cdn.simpleicons.org/git/F05032",
      "Zod": "https://cdn.simpleicons.org/zod/3E67B1",
      "Yup": "https://cdn.simpleicons.org/javascript/F7DF1E",
      "VS Code": "https://cdn.simpleicons.org/visualstudiocode/007ACC",
      "ChatGPT": "https://cdn.simpleicons.org/openai/412991",
      "Claude": "https://cdn.simpleicons.org/anthropic/D97757",
      "Antigravity": "https://cdn.simpleicons.org/planetscale/000000",
      "Cursor": "https://cdn.simpleicons.org/cursor/5555ff",
      "Vercel": "https://cdn.simpleicons.org/vercel/000000",
    };
    
    return logoMap[name] || "https://cdn.simpleicons.org/code/666666";
  };

  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-teal-400 mb-4">
            Technical <span className="text-gray-300">Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies, frameworks, and tools I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? "bg-teal-400 text-dark-bg shadow-lg shadow-teal-400/20"
                  : "bg-dark-bg text-gray-400 hover:text-teal-400 border border-teal-400/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Technical Skills Only */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 6) * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-teal-400/2 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all duration-300 border border-teal-400/10 group"
            >
              {/* Logo */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={getLogoUrl(skill.name)}
                  alt={skill.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Name */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-300 text-sm">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {skill.category}
                </p>
              </div>

              {/* Proficiency Level (optional visual indicator) */}
              <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-teal-400 h-full rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Technologies", value: `${skills.filter(s => s.type !== "soft").length}+` },
            { label: "Categories", value: categories.length - 1 },
            { label: "Years Experience", value: "8+" },
            { label: "Projects Built", value: "100+" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-dark-bg rounded-2xl p-6 text-center shadow-sm border border-teal-400/10"
            >
              <div className="text-3xl font-bold text-teal-400 mb-2">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">
              Soft <span className="text-gray-300">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond technical expertise, I bring strong interpersonal and professional skills that drive successful project outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.filter(s => s.type === "soft").map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-teal-400/2 rounded-2xl p-6 shadow-sm border border-teal-400/10 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-300 text-lg mb-4">
                  {skill.name}
                </h3>
                
                {/* Proficiency Bar */}
                <div className="w-full bg-teal-400/10 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="bg-teal-400 h-full rounded-full"
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools I Use Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-4">
              Tools I <span className="text-gray-300">Use</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional software and AI-powered assistants that streamline my development workflow.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
            {skills.filter(s => s.type === "tool").map((skill) => (
              <div
                key={skill.id}
                className="bg-teal-400/2 rounded-xl p-4 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-teal-400/10 group"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={getLogoUrl(skill.name)}
                    alt={skill.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-semibold text-gray-300 text-[10px] text-center uppercase tracking-wider">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
