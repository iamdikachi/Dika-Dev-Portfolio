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
