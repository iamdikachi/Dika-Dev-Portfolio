import React from "react";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-4xl font-bold text-blue-900 mb-2">My Projects</h2>
        <p className="text-gray-600 mb-6">
          Explore my portfolio of projects showcasing my technical skills and
          creativity.
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl font-bold text-blue-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Github size={18} />
                  Source Code
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
