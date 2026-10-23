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
    id: "backend",
    category: "Backend Development",
    command: "backend-architecture",
    flag: "--stack",
    items: ["NestJS", "Express.js", "Laravel", "Node.js", "PHP"],
    type: "technical",
  },
  {
    id: "frontend",
    category: "Frontend & UI",
    command: "frontend-engineering",
    flag: "--ecosystem",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Livewire",
      "Alpine.js",
      "TanStack Query",
      "Zustand",
    ],
    type: "technical",
  },
  {
    id: "database",
    category: "Databases & ORMs",
    command: "database",
    flag: "--engines",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Mongoose"],
    type: "technical",
  },
  {
    id: "devops",
    category: "DevOps & Cloud",
    command: "devops-infra",
    flag: "--cloud",
    items: ["GitHub Actions", "GitLab CI/CD", "Docker", "AWS (S3/EC2)"],
    type: "technical",
  },
  {
    id: "payments-ai",
    category: "Payments, Real-Time & AI",
    command: "payments-and-ai",
    flag: "--integrations",
    items: [
      "Paystack",
      "Flutterwave",
      "WebSockets",
      "Pusher",
      "OpenAI API",
      "Puppeteer",
    ],
    type: "technical",
  },
  {
    id: "testing-docs",
    category: "Testing & Documentation",
    command: "testing-and-docs",
    flag: "--qa",
    items: ["PHPUnit", "Swagger/OpenAPI", "Cypress", "Playwright", "Storybook"],
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
  // Backend
  { id: "1", name: "NestJS", level: 92, category: "Backend", type: "technical" },
  { id: "2", name: "Node.js", level: 95, category: "Backend", type: "technical" },
  { id: "3", name: "Laravel", level: 92, category: "Backend", type: "technical" },
  { id: "4", name: "Express.js", level: 90, category: "Backend", type: "technical" },
  { id: "5", name: "PHP", level: 90, category: "Backend", type: "technical" },

  // Frontend
  { id: "6", name: "React", level: 95, category: "Frontend", type: "technical" },
  { id: "7", name: "Next.js", level: 94, category: "Frontend", type: "technical" },
  { id: "8", name: "TypeScript", level: 92, category: "Frontend", type: "technical" },
  { id: "9", name: "Tailwind CSS", level: 95, category: "Frontend", type: "technical" },
  { id: "10", name: "TanStack Query", level: 90, category: "Frontend", type: "technical" },
  { id: "11", name: "Zustand", level: 90, category: "Frontend", type: "technical" },
  { id: "12", name: "Livewire", level: 88, category: "Frontend", type: "technical" },
  { id: "13", name: "Alpine.js", level: 88, category: "Frontend", type: "technical" },

  // Databases
  { id: "14", name: "PostgreSQL", level: 92, category: "Databases", type: "technical" },
  { id: "15", name: "MySQL", level: 92, category: "Databases", type: "technical" },
  { id: "16", name: "MongoDB", level: 90, category: "Databases", type: "technical" },
  { id: "17", name: "Redis", level: 85, category: "Databases", type: "technical" },
  { id: "18", name: "Prisma", level: 90, category: "Databases", type: "technical" },
  { id: "19", name: "Mongoose", level: 88, category: "Databases", type: "technical" },

  // DevOps
  { id: "20", name: "GitHub Actions", level: 90, category: "DevOps", type: "technical" },
  { id: "21", name: "GitLab CI/CD", level: 86, category: "DevOps", type: "technical" },
  { id: "22", name: "Docker", level: 88, category: "DevOps", type: "technical" },
  { id: "23", name: "AWS", level: 85, category: "DevOps", type: "technical" },

  // Payments, Real-Time & AI
  { id: "24", name: "OpenAI API", level: 94, category: "AI & Real-Time", type: "technical" },
  { id: "25", name: "Paystack", level: 95, category: "Payments", type: "technical" },
  { id: "26", name: "Flutterwave", level: 92, category: "Payments", type: "technical" },
  { id: "27", name: "WebSockets", level: 88, category: "AI & Real-Time", type: "technical" },
  { id: "28", name: "Pusher", level: 88, category: "AI & Real-Time", type: "technical" },
  { id: "29", name: "Puppeteer", level: 88, category: "AI & Real-Time", type: "technical" },

  // Testing & Docs
  { id: "30", name: "PHPUnit", level: 88, category: "Testing & Docs", type: "technical" },
  { id: "31", name: "Swagger/OpenAPI", level: 92, category: "Testing & Docs", type: "technical" },
  { id: "32", name: "Cypress", level: 85, category: "Testing & Docs", type: "technical" },
  { id: "33", name: "Playwright", level: 86, category: "Testing & Docs", type: "technical" },
  { id: "34", name: "Storybook", level: 85, category: "Testing & Docs", type: "technical" },

  // Soft Skills
  { id: "35", name: "Problem Solving", level: 95, category: "Soft Skills", type: "soft" },
  { id: "36", name: "Team Leadership", level: 90, category: "Soft Skills", type: "soft" },
  { id: "37", name: "Communication", level: 95, category: "Soft Skills", type: "soft" },
  { id: "38", name: "Adaptability", level: 93, category: "Soft Skills", type: "soft" },
  { id: "39", name: "Collaboration", level: 94, category: "Soft Skills", type: "soft" },
  { id: "40", name: "Critical Thinking", level: 92, category: "Soft Skills", type: "soft" },
  { id: "41", name: "Time Management", level: 88, category: "Soft Skills", type: "soft" },
];
