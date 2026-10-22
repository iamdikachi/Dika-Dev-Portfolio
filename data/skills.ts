import { Skill } from "@/lib/types";

export interface SkillCommandGroup {
  id: string;
  category: string;
  command: string;
  flag: string;
  items: string[];
  type: "technical" | "soft";
}

export const skillCommandGroups: SkillCommandGroup[] = [
  {
    id: "planning",
    category: "Planning",
    command: "planning",
    flag: "--tools",
    items: ["Jira"],
    type: "technical",
  },
  {
    id: "architecture",
    category: "System Architecture",
    command: "system-architecture",
    flag: "--diagram",
    items: ["Draw.io"],
    type: "technical",
  },
  {
    id: "development",
    category: "Development & Coding",
    command: "development-and-coding",
    flag: "--tools",
    items: ["Visual Studio Code", "Git", "GitHub"],
    type: "technical",
  },
  {
    id: "ai-assistants",
    category: "AI Coding Assistants",
    command: "ai-coding-assistants",
    flag: "--models",
    items: ["Claude", "OpenAI"],
    type: "technical",
  },
  {
    id: "languages-frameworks",
    category: "Programming Languages & Frameworks",
    command: "programming-languages",
    flag: "--stack",
    items: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Nest.js",
      "Express.js",
      "PHP",
      "Laravel",
    ],
    type: "technical",
  },
  {
    id: "database",
    category: "Database",
    command: "database",
    flag: "--engines",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
    type: "technical",
  },
  {
    id: "testing",
    category: "Testing",
    command: "testing",
    flag: "--runners",
    items: ["Jest", "Pytest", "Playwright", "Cypress"],
    type: "technical",
  },
  {
    id: "deployment",
    category: "Deployment",
    command: "deployment",
    flag: "--infra",
    items: ["GitHub Actions", "Docker", "AWS"],
    type: "technical",
  },
  {
    id: "maintenance",
    category: "Maintenance",
    command: "maintenance",
    flag: "--telemetry",
    items: ["Sentry"],
    type: "technical",
  },
  {
    id: "soft-skills",
    category: "Soft Skills & Leadership",
    command: "soft-skills",
    flag: "--core",
    items: [
      "Problem Solving",
      "Team Leadership",
      "Communication",
      "Adaptability",
      "Collaboration",
      "Critical Thinking",
      "Time Management",
    ],
    type: "soft",
  },
];

export const skills: Skill[] = [
  // Planning
  { id: "1", name: "Jira", level: 90, category: "Planning", type: "technical" },

  // System Architecture
  { id: "2", name: "Draw.io", level: 90, category: "System Architecture", type: "technical" },

  // Development & Coding
  { id: "3", name: "Visual Studio Code", level: 95, category: "Development & Coding", type: "technical" },
  { id: "4", name: "Git", level: 92, category: "Development & Coding", type: "technical" },
  { id: "5", name: "GitHub", level: 92, category: "Development & Coding", type: "technical" },

  // AI Coding Assistants
  { id: "6", name: "Claude", level: 90, category: "AI Coding Assistants", type: "technical" },
  { id: "7", name: "OpenAI", level: 90, category: "AI Coding Assistants", type: "technical" },

  // Programming Languages & Frameworks
  { id: "8", name: "Next.js", level: 92, category: "Programming Languages", type: "technical" },
  { id: "9", name: "React.js", level: 95, category: "Programming Languages", type: "technical" },
  { id: "10", name: "TypeScript", level: 90, category: "Programming Languages", type: "technical" },
  { id: "11", name: "JavaScript", level: 95, category: "Programming Languages", type: "technical" },
  { id: "12", name: "Node.js", level: 90, category: "Programming Languages", type: "technical" },
  { id: "13", name: "Nest.js", level: 85, category: "Programming Languages", type: "technical" },
  { id: "14", name: "Express.js", level: 88, category: "Programming Languages", type: "technical" },
  { id: "15", name: "PHP", level: 90, category: "Programming Languages", type: "technical" },
  { id: "16", name: "Laravel", level: 92, category: "Programming Languages", type: "technical" },

  // Database
  { id: "17", name: "MongoDB", level: 88, category: "Database", type: "technical" },
  { id: "18", name: "MySQL", level: 90, category: "Database", type: "technical" },
  { id: "19", name: "PostgreSQL", level: 88, category: "Database", type: "technical" },

  // Testing
  { id: "20", name: "Jest", level: 88, category: "Testing", type: "technical" },
  { id: "21", name: "Pytest", level: 82, category: "Testing", type: "technical" },
  { id: "22", name: "Playwright", level: 85, category: "Testing", type: "technical" },
  { id: "23", name: "Cypress", level: 85, category: "Testing", type: "technical" },

  // Deployment
  { id: "24", name: "GitHub Actions", level: 88, category: "Deployment", type: "technical" },
  { id: "25", name: "Docker", level: 85, category: "Deployment", type: "technical" },
  { id: "26", name: "AWS", level: 82, category: "Deployment", type: "technical" },

  // Maintenance
  { id: "27", name: "Sentry", level: 85, category: "Maintenance", type: "technical" },

  // Soft Skills
  { id: "28", name: "Problem Solving", level: 95, category: "Soft Skills", type: "soft" },
  { id: "29", name: "Team Leadership", level: 90, category: "Soft Skills", type: "soft" },
  { id: "30", name: "Communication", level: 95, category: "Soft Skills", type: "soft" },
  { id: "31", name: "Adaptability", level: 93, category: "Soft Skills", type: "soft" },
  { id: "32", name: "Collaboration", level: 94, category: "Soft Skills", type: "soft" },
  { id: "33", name: "Critical Thinking", level: 92, category: "Soft Skills", type: "soft" },
  { id: "34", name: "Time Management", level: 88, category: "Soft Skills", type: "soft" },
];
