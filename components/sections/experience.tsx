"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";
import { Briefcase, Code, Palette, Building2, MapPin, Calendar } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  code: Code,
  palette: Palette,
};

interface ExperienceProps {
  onSectionChange?: (section: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSectionChange }) => {
  const [activeView, setActiveView] = useState("Full Timeline");
  const views = ["Full Timeline", "Companies", "Core Skills"];

  // Milestones for sidebar
  const milestones = [
    { year: "2022-Present", title: "Senior Engineer @ TechCorp" },
    { year: "2020-2022", title: "Full Stack @ InnovateSoft" },
    { year: "2019-2020", title: "Frontend Dev @ StartupHub" },
    { year: "2016-2018", title: "Junior Dev @ CodeCrafters" },
  ];

  const highlightKeywords = (text: string) => {
    const keywords = [
      "PHP", "monolith", "Node.js", "microservices", "React", "WebSockets",
      "Next.js", "TDD", "CI/CD", "TypeScript", "MongoDB", "Stripe",
      "Figma", "Tailwind CSS", "Framer Motion", "CMS", "e-commerce"
    ];
    
    let highlighted = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b(${keyword})\\b`, 'gi');
      highlighted = highlighted.replace(regex, '<span class="text-yellow-400 font-medium">$1</span>');
    });
    
    return highlighted;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-black/30 border-r border-slate-700 p-6 hidden lg:block">
        <div className="mb-8">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
            EXPERIENCE_EXPLORER
          </h3>
          
          {/* View Options */}
          <div className="space-y-2 mb-8">
            {views.map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  activeView === view
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {view === "Full Timeline" && <Calendar className="w-4 h-4" />}
                {view === "Companies" && <Building2 className="w-4 h-4" />}
                {view === "Core Skills" && <Code className="w-4 h-4" />}
                <span className="text-sm">{view}</span>
              </button>
            ))}
          </div>

          {/* Milestones */}
          <div>
            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
              MILESTONES
            </h4>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-slate-700">
                  <div className="absolute -left-[5px] top-0 w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-xs text-gray-400">{milestone.year}</p>
                  <p className="text-sm text-gray-300">{milestone.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Log */}
        <div className="mt-auto pt-8 border-t border-slate-700">
          <div className="flex items-center gap-2 text-xs text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>status.log</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Currently open to senior leadership roles and cloud architecture consulting.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12">
          {/* Header */}
          <div className="mb-8 lg:mb-12">
            <div className="text-xs sm:text-sm text-gray-400 font-mono mb-2">
              const careerJourney = await fetchExperience();
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Professional Experience
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl">
              A technical chronicle of 8+ years building scalable web systems, leading
              engineering teams, and solving complex architectural challenges.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6 lg:space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon ? iconMap[exp.icon] : Briefcase;
              
              return (
                <div
                  key={exp.id}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500 transition-all duration-300"
                >
                  {/* File Header */}
                  <div className="bg-slate-800/50 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 font-mono ml-2 sm:ml-4 truncate">
                        {exp.position.replace(/\s+/g, '').substring(0, 20)}..tsx
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-white text-sm">
                      view_docs()
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div className="bg-blue-600 rounded-lg p-3 sm:p-4 flex-shrink-0">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                          {exp.position} @ {exp.company}
                        </h2>
                        
                        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
                          {exp.location && (
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        {/* Achievements */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            {exp.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2 sm:gap-3">
                                <span className="text-blue-400 font-mono text-xs sm:text-sm mt-1 flex-shrink-0">
                                  0{idx + 1}
                                </span>
                                <p 
                                  className="text-gray-300 text-sm sm:text-base leading-relaxed"
                                  dangerouslySetInnerHTML={{ __html: highlightKeywords(achievement) }}
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Technologies */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div>
                            <div className="text-xs text-gray-500 font-mono mb-2 sm:mb-3">
                              SYSTEM.STACK()
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-slate-800 text-gray-300 rounded-md text-sm font-mono border border-slate-700"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
