"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ExternalLink,  X, Calendar, Globe, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import Image from 'next/image'
import { ScrollReveal } from "../ui/scrollReveal";


interface ProjectsProps {
  onSectionChange?: (section: string) => void;
}

const categories = [
  "All projects",
  "Social Media",
  "E-commerce",
  "AI Tools",
  "Streaming",
];

export const Projects: React.FC<ProjectsProps> = ({ onSectionChange }) => {
  const [activeCategory, setActiveCategory] = useState("All projects");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === "All projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);


  return (
    <div className="min-h-screen bg-dark-bg text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-400">
            Innovative <span className="text-gray-300">Digital Experience</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            A curated collection of web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer px-5 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? "bg-teal-400 text-dark-bg"
                    : "bg-teal-400/5 text-gray-400 hover:text-teal-400 hover:bg-teal-400/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" stagger={0.2}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              // whileInView={{ opacity: 1, y: 0 }} // Let GSAP handle entry
              // viewport={{ once: true, margin: "-50px" }}
              animate={{ opacity: 1, y: 0 }} // Ensure it's visible if GSAP doesn't catch it or for consistency
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-teal-400/2 backdrop-blur-sm rounded-3xl overflow-hidden border border-teal-400/10 hover:border-teal-400/30 transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative h-64 bg-teal-400/5 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image
                    width={100}
                    height={100}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                ) : (
                  <div className="text-6xl text-teal-400/20">📊</div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-teal-400">
                  {project.title}
                </h3>

                {project.role && (
                  <p className="text-sm text-gray-400 mb-3 uppercase tracking-widest font-bold">
                    {project.role}
                  </p>
                )}

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-teal-400/5 text-teal-400/70 border border-teal-400/10 px-3 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors"
                    >
                      <FaGithub size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollReveal>

        <div className="bg-teal-400/2 rounded-3xl p-8 sm:p-12 text-center border border-teal-400/10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-400">
            Let&apos;s build something{" "}
            <span className="text-gray-300">amazing</span> together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Currently open for freelance projects and full-time opportunities. I
            specialize in creating immersive digital products that balance
            aesthetics and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange?.("contact")}
              className="cursor-pointer bg-teal-400 hover:bg-teal-500 text-dark-bg px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-teal-400/10"
            >
              Get in Touch
            </button>
            <button
              onClick={() => onSectionChange?.("resume")}
              className="cursor-pointer bg-teal-400/5 hover:bg-teal-400/10 text-teal-400 border border-teal-400/20 px-8 py-3 rounded-lg font-bold transition-all"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-dark-bg/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-dark-bg border border-teal-400/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] lg:max-h-[80vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-dark-bg/50 backdrop-blur-md rounded-full text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="lg:w-1/2 relative bg-teal-400/5 min-h-[250px] lg:min-h-full">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl text-teal-400/10">
                    📊
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-dark-bg lg:bg-linear-to-r lg:from-transparent lg:to-dark-bg/20" />
              </div>

              <div className="lg:w-1/2 p-6 lg:p-10 overflow-y-auto custom-scrollbar">
                <div className="space-y-6">
                  <div>
                    
                    <h2 className="text-3xl lg:text-4xl font-bold text-teal-400">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-400 mt-2 font-medium tracking-widest uppercase text-xs">
                      {selectedProject.role}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-gray-200 border-l-2 border-teal-400 pl-3">
                      The Challenge
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm lg:text-base italic">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-teal-400/10">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-teal-400 w-5 h-5" />
                      <div>
                        <p className="text-gray-500 text-[10px] uppercase font-bold">
                          Timeline
                        </p>
                        <p className="text-gray-300 text-xs">Recently Built</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Layers className="text-teal-400 w-5 h-5" />
                      <div>
                        <p className="text-gray-500 text-[10px] uppercase font-bold">
                          Category
                        </p>
                        <p className="text-gray-300 text-xs">
                          {selectedProject.category}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                      Stack.json
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map(
                        (tech: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-teal-400/5 text-teal-400/70 border border-teal-400/10 px-3 py-1 rounded-md text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-teal-400 text-dark-bg font-bold py-3 rounded-xl hover:bg-teal-500 transition-all shadow-lg shadow-teal-400/10"
                      >
                        <Globe size={18} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        className="flex-1 min-w-[140px] flex items-center justify-center gap-2 bg-teal-400/5 text-teal-400 border border-teal-400/20 font-bold py-3 rounded-xl hover:bg-teal-400/10 transition-all"
                      >
                        <FaGithub size={18} />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
