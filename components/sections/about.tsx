import { TimelineItemProps } from "@/lib/types";
import React from "react";

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  description,
  delay,
}) => (
  <div
    className={`relative pl-8 mb-8 opacity-0 animate-fadeInUp ${delay}`}
    style={{
      animation: `fadeInUp 0.8s ease forwards`,
      animationDelay: delay,
    }}
  >
    <div
      className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full shadow-lg"
      style={{ boxShadow: "0 0 20px rgba(59,130,246,0.6)" }}
    />
    <div className="absolute left-[5px] top-5 w-0.5 h-full bg-linear-to-b from-blue-500 to-transparent" />
    <h3 className="text-lg text-blue-400 font-semibold mb-2">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br + text-slate-200 p-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header
          className="mb-16 opacity-0"
          style={{ animation: "fadeInUp 0.8s ease forwards" }}
        >
          <div className="w-16 h-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-2 tracking-tight">
            My Journey
          </h1>
          <p className="text-xl text-slate-400 font-light">
            From curiosity to code
          </p>
        </header>

        {/* Beginning Section */}
        <section
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 border border-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.2s",
          }}
        >
          <h2 className="text-2xl font-semibold text-cyan-500 mb-6 flex items-center gap-3">
            <span
              className="w-2 h-2 bg-cyan-500 rounded-full"
              style={{ boxShadow: "0 0 20px rgba(6,182,212,0.6)" }}
            />
            The Beginning
          </h2>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            My journey into tech didn&apos;t start with a computer science
            degree or a childhood spent coding. It began with{" "}
            <span className="text-blue-400 font-medium">curiosity</span> and a
            simple question: &quot;How does this work?&quot; Whether it was
            taking apart gadgets to see their inner workings or staying up late
            wondering how websites came to life, that curiosity became the spark
            that ignited everything.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I still remember the first time I wrote a line of code that actually
            worked. It was messy, probably inefficient, but it was{" "}
            <span className="text-blue-400 font-medium">mine</span>. That
            feeling of creating something from nothing, of turning an idea into
            reality through logic and creativity, was addictive. I knew then
            that I had found something special.
          </p>
        </section>

        {/* Quote Section */}
        <div
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-500 rounded-xl p-8 my-8 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.4s",
          }}
        >
          <p className="text-xl text-slate-200 italic leading-relaxed">
            &quot;The best way to predict the future is to create it. And I
            realized I wanted to be part of building that future.&quot;
          </p>
        </div>

        {/* Learning Path Section */}
        <section
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-8 border border-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "0.6s",
          }}
        >
          <h2 className="text-2xl font-semibold text-cyan-500 mb-8 flex items-center gap-3">
            <span
              className="w-2 h-2 bg-cyan-500 rounded-full"
              style={{ boxShadow: "0 0 20px rgba(6,182,212,0.6)" }}
            />
            The Learning Path
          </h2>

          <div className="space-y-0">
            <TimelineItem
              title="Self-Taught Beginnings"
              description="I dove into online tutorials, courses, and documentation. Late nights turned into early mornings as I debugged code, built small projects, and learned from every mistake. The tech community became my classroom, and every project was a new lesson."
              delay="0.8s"
            />

            <TimelineItem
              title="Building Real Things"
              description="Theory was important, but I wanted to create things people could use. I started building projects that solved real problems, no matter how small. Each project taught me something new about development, design, and most importantly, about myself as a developer."
              delay="1s"
            />

            <TimelineItem
              title="Continuous Growth"
              description="Tech never stops evolving, and neither do I. Every day is an opportunity to learn something new, whether it's a framework, a language, or a better way to solve a problem. The journey is ongoing, and that's what makes it exciting."
              delay="1.2s"
            />
          </div>
        </section>

        {/* Current Status Section */}
        <section
          className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 opacity-0"
          style={{
            animation: "fadeInUp 0.8s ease forwards",
            animationDelay: "1.4s",
          }}
        >
          <h2 className="text-2xl font-semibold text-cyan-500 mb-6 flex items-center gap-3">
            <span
              className="w-2 h-2 bg-cyan-500 rounded-full"
              style={{ boxShadow: "0 0 20px rgba(6,182,212,0.6)" }}
            />
            Where I Am Now
          </h2>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Today, I approach every project with the same{" "}
            <span className="text-blue-400 font-medium">
              curiosity and passion
            </span>
            that got me started. I&apos;ve learned that being a developer
            isn&apos;t just about writing code—it&apos;s about solving problems,
            collaborating with others, and constantly pushing yourself to learn
            and grow.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed">
            I&apos;m excited about the future and eager to work on projects that
            challenge me, allow me to collaborate with talented people, and make
            a real impact. This is just the beginning of my story, and I
            can&apos;t wait to see where it goes next.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
