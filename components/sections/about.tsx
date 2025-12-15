import React from "react";
import { Card } from "@/components/ui/card";

export const About: React.FC = () => {
  return (
    <Card>
      <h2 className="text-4xl font-bold text-blue-900 mb-6">About Me</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          I&apos;m a creative developer with a passion for building elegant
          solutions to complex problems. With over 5 years of experience in web
          development, I&apos;ve had the opportunity to work on diverse projects
          ranging from e-commerce platforms to enterprise applications.
        </p>
        <p>
          My expertise lies in modern JavaScript frameworks, particularly React
          and Next.js, combined with a strong foundation in backend
          technologies. I believe in writing clean, maintainable code and
          creating user experiences that delight.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll find me exploring new
          technologies, contributing to open-source projects, or sharing my
          knowledge through blog posts and mentoring.
        </p>
      </div>
    </Card>
  );
};
