"use client";

import React, { useState, useEffect, useRef } from "react";
import { experiences } from "@/data/experience";
import { skills, skillCommandGroups } from "@/data/skills";
import {
  Briefcase,
  Code,
  Palette,
  Building2,
  MapPin,
  Calendar,
  Sparkles,
  GitBranch,
  GitCommit,
  Terminal,
  CornerDownLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ui/scrollReveal";
import { Experience as ExperienceType } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  code: Code,
  palette: Palette,
};

// ==========================================
// Raycast-Style Spotlight Company Card
// ==========================================
const SpotlightCompanyCard: React.FC<{
  exp: ExperienceType;
  index: number;
  highlightKeywords: (text: string) => string;
}> = ({ exp, index, highlightKeywords }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const IconComponent = exp.icon ? iconMap[exp.icon] : Briefcase;
  const isPresent = exp.duration.toLowerCase().includes("present");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      className="relative group/spotlight rounded-2xl border border-teal-400/15 bg-dark-bg/95 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-teal-400/60 hover:shadow-[0_0_35px_rgba(45,212,191,0.12)]"
    >
      {/* Raycast Spotlight glow overlay following cursor */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.14), transparent 75%)`,
        }}
      />

      {/* Code Editor Window Header */}
      <div className="bg-dark-bg/90 px-4 sm:px-6 py-3 flex items-center justify-between border-b border-teal-400/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400/20 border border-orange-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-teal-400/30 border border-teal-400/50"></div>
          </div>
          <span className="text-xs sm:text-sm text-gray-400 font-mono ml-2 sm:ml-4 flex items-center gap-1.5">
            <span className="text-teal-400">~/companies/</span>
            <span className="text-gray-200 font-semibold">{exp.company.toLowerCase().replace(/[^a-z0-9]/g, "-")}.tsx</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isPresent && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-400/10 text-teal-300 border border-teal-400/30 text-[10px] font-mono uppercase tracking-wider shadow-[0_0_10px_rgba(45,212,191,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              active
            </span>
          )}
          <span className="text-xs text-teal-400/60 font-mono hidden sm:inline">
            // 0{index + 1}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/25 flex items-center justify-center text-teal-400 shrink-0 group-hover/spotlight:scale-110 group-hover/spotlight:bg-teal-400 group-hover/spotlight:text-dark-bg transition-all duration-300 shadow-lg shadow-teal-400/5">
            <IconComponent className="w-6 h-6 transition-colors" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-2 mb-2">
              <h2 className="text-lg sm:text-2xl font-bold text-gray-100 tracking-tight">
                {exp.position}
              </h2>
              <span className="text-teal-400 font-semibold text-base sm:text-xl">
                @ {exp.company}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4 font-mono">
              {exp.location && (
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400/70" />
                  <span>{exp.location}</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-400/70" />
                <span>{exp.duration}</span>
              </div>
            </div>

            {exp.achievements && exp.achievements.length > 0 && (
              <div className="space-y-2.5 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-teal-400/50 font-mono shrink-0 mt-0.5">
                      [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                    </span>
                    <p
                      className="text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(achievement),
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            {exp.technologies && exp.technologies.length > 0 && (
              <div className="pt-3 border-t border-teal-400/10">
                <div className="text-[11px] text-gray-500 font-mono mb-2 uppercase tracking-wider">
                  Tech Ecosystem
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-teal-400/5 text-teal-300/80 rounded-md text-xs font-mono border border-teal-400/15 hover:border-teal-400/50 hover:text-teal-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// Interactive Live Terminal Stream Component
// ==========================================
interface TerminalCommit {
  hash: string;
  tag: string;
  company: string;
  slug: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  stack: string[];
}

const gitCommits: TerminalCommit[] = [
  {
    hash: "a8f10b2",
    tag: "(HEAD -> main, origin/main)",
    company: "KodeHauz",
    slug: "kodehauz",
    role: "Senior Backend Engineer",
    period: "Feb 2026 - Present",
    location: "Remote",
    achievements: [
      "Auth system: Architected multi-role JWT authentication with NestJS, covering Admin flows and environment-level secret verification.",
      "Database: Engineered PostgreSQL/Prisma schemas with full type safety; resolved complex migration conflicts across environments.",
      "CI/CD: Stabilized GitHub Actions pipelines, cutting build failures by 40% through environment configuration fixes.",
      "API: Standardized API documentation with Swagger/OpenAPI for frontend teams across all endpoints.",
    ],
    stack: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "GitHub Actions", "Swagger/OpenAPI", "JWT"],
  },
  {
    hash: "d4e21a7",
    tag: "(tag: v2026.02)",
    company: "Callik (formerly Alphalli)",
    slug: "callik",
    role: "Senior Frontend Developer",
    period: "Feb 2026 - Present",
    location: "Remote",
    achievements: [
      "Customer platform: Owned customer-facing side of a multi-sided e-commerce platform built with Next.js, React, TypeScript.",
      "Data layer: Replaced custom fetch client with Axios and TanStack Query, adding caching, request deduplication, and explicit loading states.",
      "State management: Built persistent global cart with Zustand and fixed SSR hydration mismatches using a hydration-guard pattern.",
      "Design system: Moved styling to semantic CSS-variable tokens and corrected toast contrast for accessibility.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Axios"],
  },
  {
    hash: "7bc901e",
    tag: "(feat/ai-engine)",
    company: "Trarrk",
    slug: "trarrk",
    role: "Lead Backend Developer",
    period: "Jan 2024 - Jan 2026",
    location: "Remote",
    achievements: [
      "AI integration: Built OpenAI GPT-4o-mini powered IEP generation engine, automating educational goal creation for teachers.",
      "Architecture: Designed scalable multi-tenant MongoDB system with strict data isolation across orgs, therapists, and parents.",
      "Real-time events: Built high-frequency behavioral tracking system with automatic student progress updates via custom API.",
      "Reporting: Automated PDF/CSV report generation using Puppeteer and Handlebars for behavioral and assessment data.",
    ],
    stack: ["NestJS", "MongoDB", "OpenAI API", "Puppeteer", "Handlebars", "TypeScript", "Node.js"],
  },
  {
    hash: "3f1a8c9",
    tag: "(feat/payments)",
    company: "Cogrea",
    slug: "cogrea",
    role: "Frontend Developer",
    period: "Apr 2023 - Present",
    location: "Remote",
    achievements: [
      "Payment UI: Built React/TypeScript frontend for a secure payment gateway with Auth0 OAuth2, connecting to a Node.js/FastAPI backend.",
      "CI/CD & Cloud: Managed GitLab CI/CD pipelines and AWS deployments, coordinating frontend releases with infrastructure teams.",
    ],
    stack: ["React", "TypeScript", "Node.js", "FastAPI", "Auth0", "GitLab CI/CD", "AWS"],
  },
  {
    hash: "1e0b942",
    tag: "(v2022.03-initial)",
    company: "Eduzone",
    slug: "eduzone",
    role: "Full-Stack Developer",
    period: "Mar 2022 - Present",
    location: "Awka, Nigeria",
    achievements: [
      "Full-stack build: Built and maintain a tutoring marketplace (300+ teachers, 100+ students, 50 partners) with PHP, Laravel, Livewire, and MySQL.",
      "Payments & wallets: Integrated Paystack, migrated to Flutterwave; fixed critical transaction idempotency bugs, ensuring 100% balance accuracy.",
      "Backend: Laravel Passport authentication, queued jobs, scheduled tasks, form-request validation, and PHPUnit tests.",
      "Real-time chat: Developed Wirechat messaging system with Web Push notifications, boosting re-engagement by 25%.",
    ],
    stack: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "Alpine.js", "MySQL", "Paystack", "Flutterwave", "Docker"],
  },
];

interface TerminalEntry {
  command: string;
  outputType: "log" | "show" | "status" | "help" | "unknown";
  selectedCommit?: TerminalCommit;
  rawText?: string;
}

const LiveTerminalStream: React.FC<{
  highlightKeywords: (text: string) => string;
}> = ({ highlightKeywords }) => {
  const [history, setHistory] = useState<TerminalEntry[]>([
    { command: "git log --graph --all", outputType: "log" },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed === "git log" || trimmed === "log" || trimmed === "git log --graph --all") {
      setHistory((prev) => [...prev, { command: cmd, outputType: "log" }]);
      return;
    }

    if (trimmed === "git status" || trimmed === "status") {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          outputType: "status",
          rawText: "On branch main\nYour career branch is up to date with origin/master.\n5 production roles verified across Fintech, Edutech, and AI.",
        },
      ]);
      return;
    }

    if (trimmed === "help") {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd,
          outputType: "help",
          rawText: "Available Commands:\n  git log                 List git commit timeline of roles\n  git show :kodehauz       Inspect Senior Backend Engineer @ KodeHauz\n  git show :callik         Inspect Senior Frontend Developer @ Callik\n  git show :trarrk         Inspect Lead Backend Developer @ Trarrk\n  git show :cogrea         Inspect Frontend Developer @ Cogrea\n  git show :eduzone        Inspect Full-Stack Developer @ Eduzone\n  git status              Check current career status & branch info\n  clear                   Clear terminal display",
        },
      ]);
      return;
    }

    // Check if git show <company>
    const match = gitCommits.find(
      (c) =>
        trimmed.includes(c.slug) ||
        trimmed.includes(c.company.toLowerCase())
    );

    if (match) {
      setHistory((prev) => [
        ...prev,
        {
          command: cmd.startsWith("git") ? cmd : `git show :${match.slug}`,
          outputType: "show",
          selectedCommit: match,
        },
      ]);
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: cmd,
        outputType: "unknown",
        rawText: `bash: command not found: "${cmd}". Type "help" or click one of the quick command buttons above.`,
      },
    ]);
  };

  const handleQuickCommand = (cmd: string) => {
    setIsTyping(true);
    setInputVal("");
    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < cmd.length) {
        current += cmd[i];
        setInputVal(current);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsTyping(false);
          setInputVal("");
          executeCommand(cmd);
        }, 150);
      }
    }, 25);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal("");
  };

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0c0c0c] border border-teal-400/25 rounded-2xl overflow-hidden shadow-2xl font-mono text-xs sm:text-sm"
    >
      {/* Terminal Title Bar */}
      <div className="bg-[#12161f] border-b border-teal-400/15 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-orange-400/20 border border-orange-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-teal-400/30 border border-teal-400/50"></div>
          </div>
          <div className="text-xs text-gray-400 ml-3 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-teal-400" />
            <span>dikachi-dev@career-shell: ~</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-[10px] text-teal-400 font-mono uppercase tracking-wider hidden sm:inline">
            live session
          </span>
        </div>
      </div>

      {/* Quick Action Command Chips */}
      <div className="bg-[#0e1117] border-b border-teal-400/10 px-4 py-2 flex items-center gap-2 overflow-x-auto scrollbar-none text-[11px]">
        <span className="text-gray-500 uppercase tracking-widest text-[10px] mr-1 shrink-0">
          QUICK:
        </span>
        <button
          onClick={() => handleQuickCommand("git log")}
          disabled={isTyping}
          className="px-2.5 py-1 rounded bg-teal-400/5 hover:bg-teal-400/15 text-teal-300 border border-teal-400/20 hover:border-teal-400/50 transition-colors shrink-0 cursor-pointer"
        >
          git log
        </button>
        {gitCommits.map((c) => (
          <button
            key={c.slug}
            onClick={() => handleQuickCommand(`git show :${c.slug}`)}
            disabled={isTyping}
            className="px-2.5 py-1 rounded bg-teal-400/5 hover:bg-teal-400/15 text-gray-300 hover:text-teal-300 border border-teal-400/15 hover:border-teal-400/40 transition-colors shrink-0 cursor-pointer"
          >
            :{c.slug}
          </button>
        ))}
        <button
          onClick={() => handleQuickCommand("git status")}
          disabled={isTyping}
          className="px-2.5 py-1 rounded bg-teal-400/5 hover:bg-teal-400/15 text-amber-300/80 border border-amber-400/20 hover:border-amber-400/40 transition-colors shrink-0 cursor-pointer"
        >
          status
        </button>
        <button
          onClick={() => handleQuickCommand("clear")}
          disabled={isTyping}
          className="px-2.5 py-1 rounded bg-red-400/5 hover:bg-red-400/15 text-red-400/80 border border-red-400/20 hover:border-red-400/40 transition-colors shrink-0 cursor-pointer ml-auto"
        >
          clear
        </button>
      </div>

      {/* Terminal Screen Body */}
      <div
        ref={scrollRef}
        className="p-4 sm:p-6 space-y-5 max-h-[520px] overflow-y-auto scrollbar-none scroll-smooth bg-[#080b0f]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {history.map((entry, entryIdx) => (
          <div key={entryIdx} className="space-y-3">
            {/* Executed Command Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="text-teal-400 font-bold">➜</span>
              <span className="text-gray-400">~/career</span>
              <span className="text-cyan-300 font-bold">{entry.command}</span>
            </div>

            {/* Git Log Output */}
            {entry.outputType === "log" && (
              <div className="pl-2 border-l-2 border-teal-400/20 space-y-3 py-1">
                <div className="text-[11px] text-gray-500 font-mono mb-2">
                  * Career git branch graph (5 production milestones)
                </div>
                {gitCommits.map((c, i) => (
                  <div key={c.hash} className="space-y-1">
                    <div className="flex flex-wrap items-center gap-x-2 text-xs sm:text-sm">
                      <span className="text-teal-400 font-bold">●</span>
                      <span className="text-amber-300/90 font-bold">[{c.hash}]</span>
                      <span className="text-teal-300/80 text-xs font-semibold">{c.tag}</span>
                      <span className="text-gray-200 font-bold">{c.role}</span>
                      <span className="text-teal-400">@ {c.company}</span>
                      <span className="text-gray-500 text-xs">({c.period})</span>
                    </div>
                    <div className="pl-4 text-xs text-gray-400 space-y-0.5">
                      <p className="text-gray-300 line-clamp-1">{c.achievements[0]}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {c.stack.map((st) => (
                          <span
                            key={st}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-teal-400/10 text-teal-300 border border-teal-400/20"
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Git Show Output */}
            {entry.outputType === "show" && entry.selectedCommit && (
              <div className="p-4 rounded-xl bg-teal-400/[0.03] border border-teal-400/20 space-y-3">
                <div className="border-b border-teal-400/10 pb-2 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="text-gray-500">commit </span>
                    <span className="text-amber-300 font-bold">{entry.selectedCommit.hash} </span>
                    <span className="text-teal-300">{entry.selectedCommit.tag}</span>
                  </div>
                  <span className="text-gray-400 font-mono">{entry.selectedCommit.period}</span>
                </div>

                <div className="text-xs text-gray-300 space-y-1 font-mono">
                  <p>
                    <span className="text-gray-500">Author:</span> Onyedikachi Emmanuel &lt;emmanuelnnadi097@gmail.com&gt;
                  </p>
                  <p>
                    <span className="text-gray-500">Position:</span>{" "}
                    <span className="text-teal-300 font-bold">{entry.selectedCommit.role}</span> @{" "}
                    <span className="text-white font-bold">{entry.selectedCommit.company}</span> ({entry.selectedCommit.location})
                  </p>
                </div>

                <div className="pt-2 border-t border-teal-400/10 space-y-2">
                  <div className="text-[11px] text-teal-400 font-semibold uppercase tracking-wider">
                    Commit Diff Highlights:
                  </div>
                  {entry.selectedCommit.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs">
                      <span className="text-emerald-400 font-bold">+</span>
                      <span
                        className="text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: highlightKeywords(ach),
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-teal-400/10">
                  <div className="text-[11px] text-gray-500 mb-1.5 uppercase tracking-wider">
                    Technologies Deployed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {entry.selectedCommit.stack.map((st) => (
                      <span
                        key={st}
                        className="text-[10px] px-2 py-0.5 rounded bg-teal-400/10 text-teal-300 border border-teal-400/25"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Status / Help / Text Output */}
            {(entry.outputType === "status" || entry.outputType === "help" || entry.outputType === "unknown") && (
              <pre className="text-xs text-gray-300 whitespace-pre-wrap pl-3 border-l-2 border-teal-400/20 font-mono leading-relaxed">
                {entry.rawText}
              </pre>
            )}
          </div>
        ))}

        {/* Live Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-3 border-t border-teal-400/10">
          <span className="text-teal-400 font-bold">➜</span>
          <span className="text-gray-400 text-xs">~/career</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            disabled={isTyping}
            placeholder={isTyping ? "typing command..." : 'type "help", "git log", or "git show :kodehauz"...'}
            className="flex-1 bg-transparent border-none outline-none text-cyan-300 text-xs sm:text-sm font-mono placeholder:text-gray-600 focus:ring-0"
          />
          <button
            type="submit"
            disabled={isTyping || !inputVal.trim()}
            className="p-1.5 text-gray-400 hover:text-teal-400 disabled:opacity-30 cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

interface ExperienceProps {
  onSectionChange?: (section: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onSectionChange }) => {
  const [activeView, setActiveView] = useState("Companies");
  const [terminalMode, setTerminalMode] = useState(false);
  const [skillTab, setSkillTab] = useState<"technical" | "soft">("technical");
  const [currentPhase, setCurrentPhase] = useState(0); // 0: Companies, 1: Core Skills, 2: Terminal
  const [storyMode] = useState(true);

  const trackRef = useRef<HTMLDivElement>(null);
  const isManualOverride = useRef(false);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const technicalGroups = skillCommandGroups.filter((g) => g.type === "technical");
  const softGroups = skillCommandGroups.filter((g) => g.type === "soft");

  const displayedGroups =
    skillTab === "technical" ? technicalGroups : softGroups;

  const milestones = [
    { year: "2026 - Present", title: "Senior Backend @ KodeHauz" },
    { year: "2026 - Present", title: "Senior Frontend @ Callik" },
    { year: "2024 - 2026", title: "Lead Backend @ Trarrk" },
    { year: "2023 - Present", title: "Frontend @ Cogrea" },
    { year: "2022 - Present", title: "Full-Stack @ Eduzone" },
  ];

  const highlightKeywords = (text: string) => {
    const keywords = [
      "NestJS",
      "Node.js",
      "Laravel",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Prisma",
      "Mongoose",
      "Tailwind CSS",
      "Livewire",
      "Alpine.js",
      "TanStack Query",
      "Zustand",
      "Axios",
      "Paystack",
      "Flutterwave",
      "WebSockets",
      "Pusher",
      "OpenAI",
      "GPT-4o-mini",
      "Puppeteer",
      "Handlebars",
      "Swagger",
      "OpenAPI",
      "PHPUnit",
      "Cypress",
      "Playwright",
      "Storybook",
      "Docker",
      "AWS",
      "GitHub Actions",
      "GitLab",
      "CI/CD",
      "Auth0",
      "FastAPI",
      "JWT",
      "Wirechat",
      "e-commerce",
    ];

    let highlighted = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b(${keyword})\\b`, "gi");
      highlighted = highlighted.replace(
        regex,
        '<span class="text-teal-400 font-medium">$1</span>',
      );
    });

    return highlighted;
  };

  useEffect(() => {
    if (!storyMode) return;

    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top + 60;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      if (!isManualOverride.current) {
        if (progress < 0.33) {
          setCurrentPhase(0);
          setActiveView("Companies");
          setTerminalMode(false);
        } else if (progress < 0.67) {
          setCurrentPhase(1);
          setActiveView("Core Skills");
          setTerminalMode(false);
        } else {
          setCurrentPhase(2);
          setTerminalMode(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const scrollContainer = document.getElementById("portfolio-scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    }

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [storyMode]);

  const jumpToPhase = (phaseIndex: number) => {
    isManualOverride.current = true;
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      isManualOverride.current = false;
    }, 900);

    setCurrentPhase(phaseIndex);
    if (phaseIndex === 0) {
      setActiveView("Companies");
      setTerminalMode(false);
    } else if (phaseIndex === 1) {
      setActiveView("Core Skills");
      setTerminalMode(false);
    } else {
      setTerminalMode(true);
    }

    if (!storyMode || !trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const scrollContainer = document.getElementById("portfolio-scroll-container");
    const isDesktop = window.innerWidth >= 1024 && scrollContainer;
    const totalScrollable = trackRef.current.offsetHeight - window.innerHeight;
    const targetFraction = phaseIndex === 0 ? 0.05 : phaseIndex === 1 ? 0.45 : 0.82;
    const targetOffset = targetFraction * totalScrollable;

    if (isDesktop && scrollContainer) {
      const currentContainerScroll = scrollContainer.scrollTop;
      const trackTopInContainer = rect.top + currentContainerScroll;
      scrollContainer.scrollTo({
        top: trackTopInContainer + targetOffset - 60,
        behavior: "smooth",
      });
    } else {
      const currentWindowScroll = window.scrollY || window.pageYOffset;
      const trackTopInDoc = rect.top + currentWindowScroll;
      window.scrollTo({
        top: trackTopInDoc + targetOffset - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={trackRef}
      className={storyMode ? "relative min-h-[220vh] lg:min-h-[280vh]" : "relative min-h-screen"}
    >
      <div
        className={
          storyMode
            ? "sticky top-2 lg:top-4 z-20 h-auto lg:h-[calc(100vh-2rem)] flex flex-col justify-start pb-4"
            : "min-h-screen text-gray-300 flex flex-col"
        }
      >
        <div className="text-gray-300 flex flex-1 min-h-0 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-64 border-r border-teal-400/15 p-6 hidden lg:flex flex-col shrink-0 bg-dark-bg/50 backdrop-blur-md rounded-l-2xl">
            <div className="mb-8">
              <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                EXPERIENCE_EXPLORER
              </h3>
              <div className="space-y-2 mb-8">
                <button
                  onClick={() => jumpToPhase(0)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                    currentPhase === 0
                      ? "bg-teal-400 text-dark-bg font-semibold"
                      : "text-gray-500 hover:bg-teal-400/5 hover:text-teal-400"
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm">Companies</span>
                </button>
                <button
                  onClick={() => jumpToPhase(1)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                    currentPhase === 1
                      ? "bg-teal-400 text-dark-bg font-semibold"
                      : "text-gray-500 hover:bg-teal-400/5 hover:text-teal-400"
                  }`}
                >
                  <Code className="w-4 h-4" />
                  <span className="text-sm">Core Skills</span>
                </button>
                <button
                  onClick={() => jumpToPhase(2)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-colors cursor-pointer ${
                    currentPhase === 2
                      ? "bg-teal-400 text-dark-bg font-semibold"
                      : "text-gray-500 hover:bg-teal-400/5 hover:text-teal-400"
                  }`}
                >
                  <Terminal className="w-4 h-4" />
                  <span className="text-sm">Terminal Mode</span>
                </button>
              </div>
              <div>
                <h4 className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                  MILESTONES
                </h4>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="relative pl-4 border-l border-teal-400/10"
                    >
                      <div className="absolute -left-[4.5px] top-0 w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.4)]"></div>
                      <p className="text-xs text-gray-500">{milestone.year}</p>
                      <p className="text-sm text-gray-400">{milestone.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-teal-400/10">
              <div className="flex items-center gap-2 text-xs text-teal-400">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.6)]"></div>
                <span>status.log</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Currently open to Frontend, Backend and FullStack Roles.
              </p>
            </div>
          </div>

          {/* Main Stage Content */}
          <div className="flex-1 min-w-0 overflow-y-auto scrollbar-none p-4 sm:p-6 lg:p-8 bg-dark-bg/30 backdrop-blur-sm rounded-r-2xl flex flex-col">
            {/* Mobile View Switcher */}
            <div className="flex lg:hidden flex-wrap gap-2 mb-4 shrink-0">
              {[
                { id: 0, label: "Companies" },
                { id: 1, label: "Core Skills" },
                { id: 2, label: "Terminal Mode" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => jumpToPhase(tab.id)}
                  className={`cursor-pointer px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    currentPhase === tab.id
                      ? "bg-teal-400 text-dark-bg font-bold"
                      : "bg-teal-400/5 text-gray-400 hover:text-teal-400 border border-teal-400/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Code Header */}
            <div className="mb-4 lg:mb-6 shrink-0">
              <div className="text-xs sm:text-sm text-gray-400 font-mono mb-1">
                {currentPhase === 1
                  ? "const skillCompetencies = await fetchSkills();"
                  : currentPhase === 2
                  ? "const careerShell = await initTerminal();"
                  : "const companiesLed = await fetchCompanies();"}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-400">
                {currentPhase === 1
                  ? "Core Skills"
                  : currentPhase === 2
                  ? "Interactive Terminal"
                  : "Companies & Roles"}
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mt-1">
                {currentPhase === 1
                  ? "A comprehensive overview of technical proficiencies and leadership soft skills developed across production engineering and enterprise platforms."
                  : currentPhase === 2
                  ? "Interactive command-line interface: execute real-time git commits and view deep role breakdowns."
                  : "Organizations and technology teams where I have delivered high-impact engineering solutions."}
              </p>
            </div>

            {/* Stage Body Wrapped with AnimatePresence */}
            <div className="flex-1 min-h-0">
              <AnimatePresence mode="wait">
                {currentPhase === 2 ? (
                  <motion.div
                    key="terminal-stage"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <LiveTerminalStream highlightKeywords={highlightKeywords} />
                  </motion.div>
                ) : currentPhase === 1 ? (
                  <motion.div
                    key="skills-stage"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#0c0c0c] border border-teal-400/20 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
                  >
                    {/* Terminal Window Header */}
                    <div className="bg-dark-bg border-b border-teal-400/10 px-4 py-2 flex items-center justify-between">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/30"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-400/20 border border-orange-400/30"></div>
                        <div className="w-3 h-3 rounded-full bg-teal-400/20 border border-teal-400/30"></div>
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest hidden sm:block">
                        dikachi-dev@skills: ~
                      </div>
                      <div className="w-10"></div>
                    </div>

                    {/* Terminal Tabs */}
                    <div className="bg-[#121212] border-b border-teal-400/10 px-3 pt-2 flex items-center gap-2">
                      {[
                        {
                          id: "technical",
                          label: "Technical Skills",
                          count: technicalGroups.length,
                        },
                        {
                          id: "soft",
                          label: "Soft Skills",
                          count: softGroups.length,
                        },
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setSkillTab(tab.id as "technical" | "soft")}
                          className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-all cursor-pointer flex items-center gap-2 border-t border-x ${
                            skillTab === tab.id
                              ? "bg-[#0c0c0c] border-teal-400/30 text-teal-300 font-bold -mb-[1px] border-b-transparent shadow-sm"
                              : "bg-transparent border-transparent text-gray-500 hover:text-gray-300 hover:bg-teal-400/5"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              skillTab === tab.id
                                ? "bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.6)]"
                                : "bg-gray-600"
                            }`}
                          ></span>
                          <span>{tab.label}</span>
                          <span
                            className={`text-[10px] px-1.5 py-0.2 rounded ${
                              skillTab === tab.id
                                ? "bg-teal-400/10 text-teal-400"
                                : "text-gray-600"
                            }`}
                          >
                            {tab.count}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Terminal Body with Sticky Stacking Cards & Invisible Scroll */}
                    <div
                      className="p-4 sm:p-6 max-h-[500px] overflow-y-auto scrollbar-none scroll-smooth relative"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      {/* Pinned Command Header */}
                      <div className="sticky top-0 z-30 pb-3 pt-1 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-teal-400/10 mb-4 flex items-center justify-between">
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                          <span className="text-teal-400">➜</span>
                          <span className="text-gray-300">~ /career/skills</span>
                          <span className="text-cyan-300 font-bold">
                            {skillTab === "technical"
                              ? "cat technical-stack.json"
                              : "cat soft-skills.json"}
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-teal-400/70 border border-teal-400/20 px-2.5 py-0.5 rounded-full bg-teal-400/5 hidden sm:inline-flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                          <span>scroll to stack ({displayedGroups.length} modules)</span>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-4">
                        {skillTab === "technical"
                          ? `Loaded ${technicalGroups.length} technical engineering modules. Cards stack in-place as you scroll.`
                          : `Loaded ${softGroups.length} leadership competency modules.`}
                      </div>

                      {/* Sticky Stacking Card Deck */}
                      <div className="relative pt-1 pb-4">
                        {displayedGroups.map((group, index) => (
                          <motion.div
                            key={group.id}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06, duration: 0.35 }}
                            style={{
                              top: `${index * 16}px`,
                              zIndex: index + 10,
                            }}
                            className="sticky p-4 sm:p-5 rounded-xl bg-[#0f141c] border border-teal-400/25 hover:border-teal-400/50 shadow-[0_-6px_25px_rgba(0,0,0,0.85)] mb-12 last:mb-4 transition-all duration-300 group/card font-mono"
                          >
                            {/* Top Header & Stacking Tag */}
                            <div className="flex items-center justify-between pb-2 mb-2 border-b border-teal-400/10 text-xs text-gray-400">
                              <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
                                <span className="text-teal-400 font-bold tracking-wide">
                                  MODULE 0{index + 1}
                                </span>
                                <span className="text-gray-600 font-normal">/ 0{displayedGroups.length}</span>
                              </div>
                              <span className="text-[10px] text-teal-400/80 uppercase tracking-widest px-2 py-0.5 rounded bg-teal-400/10 border border-teal-400/20">
                                {group.category}
                              </span>
                            </div>

                            {/* Terminal Command Line */}
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold mb-3">
                              <span className="text-teal-400">➜</span>
                              <span className="text-gray-400">~</span>
                              <span className="text-cyan-300 font-bold">{group.command}</span>
                              <span className="text-teal-400/80">{group.flag}</span>
                              <span className="text-amber-300/90 text-xs">
                                {group.items.length === 1
                                  ? `"${group.items[0].toLowerCase().replace(/\s+/g, "-")}"`
                                  : `[${group.items.map((i) => `"${i.toLowerCase().replace(/\s+/g, "-")}"`).join(", ")}]`}
                              </span>
                            </div>

                            {/* Items Matrix */}
                            <div className="flex flex-wrap gap-2 pt-1">
                              {group.items.map((item) => (
                                <span
                                  key={item}
                                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-400/5 text-gray-200 border border-teal-400/20 text-xs font-mono group-hover/card:border-teal-400/40 group-hover/card:text-teal-300 transition-colors"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_6px_rgba(45,212,191,0.6)]"></span>
                                  <span>{item}</span>
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Prompt Cursor */}
                      <div className="flex gap-2 pt-4 border-t border-teal-400/10 mt-6">
                        <span className="text-teal-400">➜</span>
                        <span className="text-gray-300">~ /career/skills</span>
                        <span className="bg-teal-400/50 w-2 h-5 animate-pulse"></span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="companies-stage"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="relative"
                  >
                    <div
                      className="max-h-[500px] overflow-y-auto scrollbar-none scroll-smooth pr-1 py-1"
                      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                      <div className="space-y-6 lg:space-y-8">
                        {experiences.map((exp, index) => (
                          <SpotlightCompanyCard
                            key={exp.id}
                            exp={exp}
                            index={index}
                            highlightKeywords={highlightKeywords}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
