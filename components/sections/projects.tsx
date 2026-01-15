"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

interface ProjectsProps {
  onSectionChange?: (section: string) => void;
}

const categories = ["All projects", "Dashboard", "Fintech", "AI Tools", "Web3"];

export const Projects: React.FC<ProjectsProps> = ({ onSectionChange }) => {
  const [activeCategory, setActiveCategory] = useState("All projects");

  const filteredProjects = activeCategory === "All projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-blue-600 text-white";
      case "ARCHIVE":
        return "bg-gray-600 text-white";
      case "CASE STUDY":
        return "bg-orange-500 text-white";
      case "BASELINE":
        return "bg-purple-600 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Innovative <span className="text-blue-400">Digital Experience</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            A curated collection of desktop and web applications focusing on data visualization, fintech, and creative commerce.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-6xl text-slate-600">📊</div>
                )}
                
                {/* Status Badge */}
                {project.status && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-md text-xs font-bold ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                
                {project.role && (
                  <p className="text-sm text-blue-400 mb-3">{project.role}</p>
                )}

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
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
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-center border border-slate-700">
          <h2 className="text-4xl font-bold mb-4">
            Let's build something <span className="text-blue-400">amazing</span> together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Currently open for freelance projects and full-time opportunities. I specialize in creating immersive digital products that balance aesthetics and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onSectionChange?.('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => onSectionChange?.('resume')}
              className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
