import React from "react";
import { Card } from "@/components/ui/card";
import { experiences } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-4xl font-bold text-blue-900 mb-2">My Experience</h2>
        <p className="text-gray-600">
          A comprehensive overview of my professional journey and
          accomplishments.
        </p>
      </Card>

      {experiences.map((exp, index) => (
        <Card key={exp.id} className="relative">
          {index !== experiences.length - 1 && (
            <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-blue-200 -z-10"></div>
          )}

          <div className="flex items-start gap-4">
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
              {index + 1}
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-800">
                {exp.position}
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                {exp.company}
              </p>
              <p className="text-blue-600 font-medium mb-3">{exp.duration}</p>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
