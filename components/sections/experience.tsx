"use client";

import React, { useState } from "react";
import { experiences } from "@/data/experience";
import {
  Briefcase,
  Code,
  Palette,
  Building2,
  MapPin,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

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
  const [terminalMode, setTerminalMode] = useState(false);
  const views = ["Full Timeline", "Companies", "Core Skills"];


  const milestones = [
    { year: "2022-Present", title: "Senior Engineer @ TechCorp" },
    { year: "2020-2022", title: "Full Stack @ InnovateSoft" },
    { year: "2019-2020", title: "Frontend Dev @ StartupHub" },
    { year: "2016-2018", title: "Junior Dev @ CodeCrafters" },
  ];

  const highlightKeywords = (text: string) => {
    const keywords = [
      "PHP",
      "monolith",
      "Node.js",
      "microservices",
      "React",
      "WebSockets",
      "Next.js",
      "TDD",
      "CI/CD",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Figma",
      "Tailwind CSS",
      "Framer Motion",
      "CMS",
      "e-commerce",
    ];

    let highlighted = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
      highlighted = highlighted.replace(
        regex,
        '<span class="text-teal-400 font-medium">$1</span>',
      );
    });

    return highlighted;
  };

  return (
    <div className="min-h-screen  text-gray-300 flex">
      <div className="w-64  border-r border-slate-700 p-6 hidden lg:block">
        <div className="mb-8">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
            EXPERIENCE_EXPLORER
          </h3>
          <div className="space-y-2 mb-8">
            {views.map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                  activeView === view
                    ? "bg-teal-400 text-dark-bg"
                    : "text-gray-500 hover:bg-teal-400/5 hover:text-teal-400"
                }`}
              >
                {view === "Full Timeline" && <Calendar className="w-4 h-4" />}
                {view === "Companies" && <Building2 className="w-4 h-4" />}
                {view === "Core Skills" && <Code className="w-4 h-4" />}
                <span className="text-sm">{view}</span>
              </button>
            ))}
            <button
              onClick={() => setTerminalMode(!terminalMode)}
              className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                terminalMode
                  ? "bg-teal-400 text-dark-bg"
                  : "text-gray-500 hover:bg-teal-400/5 hover:text-teal-400"
              }`}
            >
              <Code className="w-4 h-4" />
              <span className="text-sm">Terminal Mode</span>
            </button>
          </div>
          <div>
            <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
              MILESTONES
            </h4>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-4 border-l border-teal-400/10"
                >
                  <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.4)]"></div>
                  <p className="text-xs text-gray-500">{milestone.year}</p>
                  <p className="text-sm text-gray-400">{milestone.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 border-t border-teal-400/10">
          <div className="flex items-center gap-2 text-xs text-teal-400">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.6)]"></div>
            <span>status.log</span>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Currently open to Frontend, Backend and FullStack Roles.
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-12">

          <div className="mb-8 lg:mb-12">
            <div className="text-xs sm:text-sm text-gray-400 font-mono mb-2">
              const careerJourney = await fetchExperience();
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-teal-400">
              Professional Experience
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl">
              A technical chronicle of 8+ years building scalable web systems,
              leading engineering teams, and solving complex architectural
              challenges.
            </p>
          </div>


          {terminalMode ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0c0c0c] border border-teal-400/20 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
            >
              <div className="bg-dark-bg border-b border-teal-400/10 px-4 py-2 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-400/20"></div>
                  <div className="w-3 h-3 rounded-full bg-teal-400/20"></div>
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  dikachi-dev@experience: ~
                </div>
                <div className="w-10"></div>
              </div>
              <div className="p-6 space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                <div className="flex gap-2">
                  <span className="text-teal-400">➜</span>
                  <span className="text-gray-300">~ /career/experience</span>
                  <span className="text-teal-400">git status</span>
                </div>
                <div className="text-gray-500">
                  On branch professional-growth
                </div>
                <div className="text-gray-400">
                  Your career is up to date with origin/master.
                </div>

                {experiences.map((exp, i) => (
                  <div key={exp.id} className="pt-4 border-t border-teal-400/5">
                    <div className="flex gap-2 text-teal-400 font-bold mb-2">
                      <span>[{i + 1}]</span>
                      <span>{exp.position.toUpperCase()}</span>
                      <span className="text-gray-500 font-normal">
                        --company &quot;{exp.company}&quot;
                      </span>
                    </div>
                    <div className="pl-6 space-y-1 text-gray-400">
                      <div>
                        <span className="text-teal-400/50">duration:</span>{" "}
                        {exp.duration}
                      </div>
                      <div>
                        <span className="text-teal-400/50">location:</span>{" "}
                        {exp.location}
                      </div>
                      <div className="pt-2 text-gray-500 italic">
                     
                      </div>
                      {exp.achievements && Array.isArray(exp.achievements)
                        ? exp.achievements.map((ach, idx) => (
                            <div key={idx} className="flex gap-2">
                              <span className="text-teal-400/30">
                                L{idx + 1}:
                              </span>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: highlightKeywords(ach),
                                }}
                              />
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                ))}

                <div className="flex gap-2 pt-4">
                  <span className="text-teal-400">➜</span>
                  <span className="text-gray-300">~ /career/experience</span>
                  <span className="bg-teal-400/50 w-2 h-5 animate-pulse"></span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="space-y-6 lg:space-y-8">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon ? iconMap[exp.icon] : Briefcase;

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-teal-400/2 backdrop-blur-sm rounded-2xl border border-teal-400/10 overflow-hidden hover:border-teal-400 transition-all duration-300"
                  >
    
                    <div className="bg-dark-bg px-4 sm:px-6 py-3 flex items-center justify-between border-b border-teal-400/10">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-teal-400/20"></div>
                          <div className="w-3 h-3 rounded-full bg-teal-400/40"></div>
                          <div className="w-3 h-3 rounded-full bg-teal-400/60"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 font-mono ml-2 sm:ml-4 truncate">
                          {exp.position.replace(/\s+/g, "").substring(0, 20)}
                          ..tsx
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-white text-sm">
                        view_docs()
                      </button>
                    </div>

     
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
           
                        <div className="bg-teal-400/10 border border-teal-400/20 rounded-lg p-3 sm:p-4 shrink-0">
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
                        </div>

                        <div className="flex-1">
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-gray-300">
                            {exp.position} @{" "}
                            <span className="text-teal-400">{exp.company}</span>
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

     
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                              {exp.achievements.map((achievement, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 sm:gap-3"
                                >
                                  <span className="text-teal-400 font-mono text-xs sm:text-sm mt-1 shrink-0">
                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                  </span>
                                  <p
                                    className="text-gray-300 text-sm sm:text-base leading-relaxed"
                                    dangerouslySetInnerHTML={{
                                      __html: highlightKeywords(achievement),
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          )}

            
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div>
                              <div className="text-xs text-gray-500 font-mono mb-2 sm:mb-3">
                                SYSTEM.STACK()
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-teal-400/5 text-teal-400/70 rounded-md text-sm font-mono border border-teal-400/10"
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
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
