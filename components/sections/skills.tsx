import React from "react";
import { Card } from "@/components/ui/card";
import { skills } from "@/data/skills";

export const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-4xl font-bold text-blue-900 mb-2">My Skills</h2>
        <p className="text-gray-600">
          Technical expertise in modern web development, design, and more.
        </p>
      </Card>

      {categories.map((category) => (
        <Card key={category}>
          <h3 className="text-2xl font-bold text-blue-800 mb-4">{category}</h3>
          <div className="space-y-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div key={skill.id}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-linear-to-r from-blue-500 to-blue-700 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      ))}
    </div>
  );
};
