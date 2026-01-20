import React from "react";
import { Card } from "../ui/card";
import { experiences } from "@/data/experience";
import { MapPin, Briefcase, Code, Palette, Clipboard, Sparkles, Layout } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  code: Code,
  palette: Palette,
  clipboard: Clipboard,
  sparkles: Sparkles,
  layout: Layout,
};

const iconColors = [
  "bg-teal-400/10",
];

interface ProfileProps {
  onSectionChange?: (section: string) => void;
}

export const Profile: React.FC<ProfileProps> = ({ onSectionChange }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 py-8">
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="relative inline-block mb-4">
          <img
            src="/images/my-photo.png"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-teal-400/20 shadow-xl shadow-teal-400/5"
          />
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-teal-400 rounded-full border-2 border-dark-bg shadow-[0_0_10px_rgba(45,212,191,0.4)]"></div>
        </div>
        <h1 className="text-3xl font-bold text-teal-400 mb-2">
          Dika Chi
        </h1>
        <p className="text-gray-300 mb-1">
          Full Stack Developer & AI Automation Specialist
        </p>
        <div className="flex items-center justify-center text-gray-500 text-sm italic">
          <MapPin className="w-4 h-4 mr-1 text-teal-400" />
          <span>Lagos, Nigeria</span>
        </div>
      </motion.div>

      {/* Professional Experience */}
      <div>
        <h2 className="text-2xl font-bold text-teal-400 mb-6">
          Professional Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon ? iconMap[exp.icon] : Briefcase;
            const bgColor = iconColors[index % iconColors.length];
            
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-teal-400/2 rounded-lg p-5 border border-teal-400/10 hover:border-teal-400/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className={`${bgColor} rounded-lg p-3 flex-shrink-0 border border-teal-400/10 group-hover:border-teal-400/30 transition-colors`}>
                    <IconComponent className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                  <motion.div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-300 mb-1 group-hover:text-teal-400 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-gray-500 italic">
                      {exp.company} • {exp.duration}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-teal-400/2 rounded-2xl p-8 text-center border border-teal-400/10">
        <h2 className="text-3xl font-bold text-teal-400 mb-3">
          Let's work together
        </h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">
          I am currently available for new opportunities, AI-powered systems
          consulting, and full-stack development roles.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button 
            onClick={() => onSectionChange?.('contact')}
            className="bg-teal-400 text-dark-bg px-6 py-3 rounded-lg font-bold hover:bg-teal-500 transition-all shadow-lg shadow-teal-400/10"
          >
            Get in Touch
          </button>
          <button 
            onClick={() => onSectionChange?.('resume')}
            className="bg-teal-400/5 text-teal-400 px-6 py-3 rounded-lg font-bold hover:bg-teal-400/10 transition-all border border-teal-400/20"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

