import React from "react";
import { Card } from "../ui/card";
import { experiences } from "@/data/experience";
import { MapPin, Briefcase, Code, Palette, Clipboard, Sparkles, Layout } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  code: Code,
  palette: Palette,
  clipboard: Clipboard,
  sparkles: Sparkles,
  layout: Layout,
};

const iconColors = [
  "bg-slate-700",
  "bg-teal-700",
  "bg-emerald-700",
  "bg-slate-800",
  "bg-slate-700",
  "bg-cyan-700",
];

interface ProfileProps {
  onSectionChange?: (section: string) => void;
}

export const Profile: React.FC<ProfileProps> = ({ onSectionChange }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      {/* Profile Header */}
      <div className="text-center">
        <div className="relative inline-block mb-4">
          <img
            src="/images/my-photo.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Alex Montgomery
        </h1>
        <p className="text-gray-600 mb-1">
          Senior Product Designer & Systems Architect
        </p>
        <div className="flex items-center justify-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>San Francisco, CA</span>
        </div>
      </div>

      {/* Professional Experience */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon ? iconMap[exp.icon] : Briefcase;
            const bgColor = iconColors[index % iconColors.length];
            
            return (
              <div
                key={exp.id}
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`${bgColor} rounded-lg p-3 flex-shrink-0`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          Let's work together
        </h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          I am currently available for new opportunities, design systems
          consulting, and leadership roles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => onSectionChange?.('contact')}
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => onSectionChange?.('resume')}
            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors border border-gray-700"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

