"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { Download, Mail, Phone, MapPin,  Globe } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";



export const Resume: React.FC = () => {
  const handleDownload = () => {

    window.print();
  };

  return (
    <div className="min-h-screen bg-dark-bg py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-end print:hidden">
          <button
            onClick={handleDownload}
            className="bg-teal-400 hover:bg-teal-500 text-dark-bg px-6 py-3 rounded-lg flex items-center gap-2 transition-all shadow-lg"
          >
            <Download size={20} />
            Download as PDF
          </button>
        </div>

        <div className="bg-dark-bg shadow-xl rounded-lg overflow-hidden border border-teal-400/10 print:shadow-none print:rounded-none">
          <div className="bg-teal-400/5 text-gray-300 p-8 sm:p-12 border-b border-teal-400/10">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 text-teal-400">
              Onyedikachi Emmanuel
            </h1>
            <p className="text-lg sm:text-2xl text-gray-400 mb-6 font-light">
              Full Stack Developer
            </p>

            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>emmanuelnnadi097@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 906 684 6864</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Awka, Nigeria</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 text-sm">
              <a
                href="https://www.linkedin.com/in/iamdikachukwu/"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <FaLinkedin size={16} />
                <span>linkedin.com/in/iamdikachi</span>
              </a>
              <a
                href="https://github.com/iamdikachi"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <FaGithub size={16} />
                <span>github.com/iamdikachi</span>
              </a>
              <a
                href="https://dika-dev-portfolio-pmih.vercel.app/"
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Globe size={16} />
                <span>iamdikachi.com</span>
              </a>
            </div>
          </div>

          <div className="p-6 sm:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-teal-400 mb-4 pb-2 border-b border-teal-400/20">
                Professional Summary
              </h2>
              <p className="text-gray-400 leading-relaxed italic border-l-2 border-teal-400/20 pl-4 py-2 bg-teal-400/2 rounded-r-lg">
                Passionate Full Stack Developer with 8+ years of experience
                building scalable web applications and leading development
                teams. Expertise in modern JavaScript frameworks, backend
                technologies, and UI/UX design. Strong problem-solver with a
                commitment to continuous learning.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-teal-400 mb-4 pb-2 border-b border-teal-400/20">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-6 border-l border-teal-400/20"
                  >
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-teal-400 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-300">
                        {exp.position}
                      </h3>
                      <p className="text-teal-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500">
                        {exp.duration} {exp.location && `• ${exp.location}`}
                      </p>
                    </div>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="space-y-2 text-gray-400">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-teal-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-teal-400/5 text-teal-400 border border-teal-400/10 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-teal-400 mb-4 pb-2 border-b border-teal-400/20">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Array.from(
                  new Set(
                    skills
                      .filter((s) => s.type !== "soft")
                      .map((s) => s.category),
                  ),
                ).map((category) => (
                  <div key={category}>
                    <h3 className="font-semibold text-gray-300 mb-2 uppercase tracking-wider text-xs">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills
                        .filter(
                          (s) => s.category === category && s.type !== "soft",
                        )
                        .map((skill) => (
                          <span
                            key={skill.id}
                            className="text-sm bg-teal-400/5 text-gray-400 border border-teal-400/10 px-3 py-1 rounded"
                          >
                            {skill.name}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-teal-400 mb-4 pb-2 border-b border-teal-400/20">
                Soft Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.type === "soft")
                  .map((skill) => (
                    <span
                      key={skill.id}
                      className="text-sm bg-teal-400/5 text-teal-400 border border-teal-400/10 px-3 py-1 rounded"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-teal-400  mb-4 pb-2 border-b-2 border-teal-400 ">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-300">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-teal-400 font-semibold">University Name</p>
                  <p className="text-sm text-gray-500">
                    2014 - 2018 • Lagos, Nigeria
                  </p>
                  <p className="text-gray-400 mt-2">
                    Graduated with First Class Honors. Relevant coursework: Data
                    Structures, Algorithms, Web Development, Database Systems,
                    Software Engineering.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-teal-400  mb-4 pb-2 border-b-2 border-teal-400 ">
                Certifications
              </h2>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>
                    AWS Certified Solutions Architect - Amazon Web Services
                    (2023)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>
                    Professional Scrum Master I (PSM I) - Scrum.org (2022)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>React Developer Certification - Meta (2021)</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:rounded-none {
            border-radius: 0 !important;
          }
          @page {
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  );
};
