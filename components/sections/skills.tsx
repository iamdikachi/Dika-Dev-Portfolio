"use client";

import React, { useState } from "react";
import { skills } from "@/data/skills";

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...Array.from(new Set(skills.filter(s => s.type !== "soft").map((skill) => skill.category)))];

  const filteredSkills = activeCategory === "All" 
    ? skills.filter(s => s.type !== "soft")
    : skills.filter(s => s.category === activeCategory && s.type !== "soft");

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
    };
    
    return logoMap[name] || "https://cdn.simpleicons.org/code/666666";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Technical Skills Only */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
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
                <h3 className="font-semibold text-gray-900 text-sm">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {skill.category}
                </p>
              </div>

              {/* Proficiency Level (optional visual indicator) */}
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {skills.filter(s => s.type !== "soft").length}+
            </div>
            <div className="text-gray-600 text-sm">Technologies</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {categories.length - 1}
            </div>
            <div className="text-gray-600 text-sm">Categories</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              8+
            </div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              100+
            </div>
            <div className="text-gray-600 text-sm">Projects Built</div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Soft <span className="text-blue-600">Skills</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond technical expertise, I bring strong interpersonal and professional skills that drive successful project outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.filter(s => s.type === "soft").map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-gray-900 text-lg mb-4">
                  {skill.name}
                </h3>
                
                {/* Proficiency Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
