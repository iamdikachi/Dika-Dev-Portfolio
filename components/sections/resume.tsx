import React from "react";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export const Resume: React.FC = () => {
  return (
    <Card>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">My Resume</h2>
      <div className="space-y-6">
        <p className="text-lg text-gray-700">
          Download my complete resume to learn more about my professional
          background, skills, and achievements.
        </p>

        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border-2 border-blue-200 flex items-center gap-6">
          <div className="bg-blue-600 text-white p-4 rounded-lg">
            <FileText size={48} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-blue-800 mb-1">
              Professional Resume
            </h3>
            <p className="text-gray-600">
              PDF Document • Last updated: November 2024
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
            <Download size={20} />
            Download
          </button>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Resume Highlights
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                5+ years of professional experience in web development
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Expertise in React, Next.js, TypeScript, and Node.js</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                Led multiple successful projects from conception to deployment
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <span>Strong problem-solving and communication skills</span>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};
