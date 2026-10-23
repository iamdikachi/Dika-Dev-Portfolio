import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "KodeHauz",
    position: "Senior Backend Engineer",
    duration: "Feb 2026 - Present",
    location: "Remote",
    description: "Architecting backend systems, authentication infrastructure, and CI/CD automation for scalable cloud services.",
    icon: "code",
    achievements: [
      "Auth system: Architected multi-role JWT authentication with NestJS, covering Admin flows and environment-level secret key verification.",
      "Database: Engineered PostgreSQL/Prisma schemas with full type safety; resolved complex migration conflicts across environments.",
      "CI/CD: Stabilized GitHub Actions pipelines, cutting build failures by 40% through environment configuration fixes.",
      "API: Standardized API documentation with Swagger/OpenAPI for frontend teams across all endpoints."
    ],
    technologies: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "GitHub Actions", "Swagger/OpenAPI", "JWT"],
  },
  {
    id: "2",
    company: "Callik (formerly Alphalli)",
    position: "Senior Frontend Developer",
    duration: "Feb 2026 - Present",
    location: "Remote",
    description: "Owned the customer-facing side of a multi-sided e-commerce platform connecting fashion designers and customers.",
    icon: "code",
    achievements: [
      "Customer platform: Owned the customer-facing side of a multi-sided e-commerce platform (customer, merchant, admin) built with Next.js, React, TypeScript, and Tailwind CSS.",
      "Data layer: Replaced a custom fetch client with Axios and TanStack Query, adding caching, request deduplication, and explicit loading, error, and empty states.",
      "State management: Built a persistent global cart with Zustand and fixed SSR hydration mismatches using a hydration-guard pattern.",
      "Design system: Moved styling to semantic CSS-variable tokens and corrected toast contrast for accessibility across light and dark modes."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "Axios"],
  },
  {
    id: "3",
    company: "Trarrk (Special Education Platform)",
    position: "Lead Backend Developer",
    duration: "Jan 2024 - Jan 2026",
    location: "Remote",
    description: "Led backend engineering and AI architecture for special education assessment and personalized IEP generation.",
    icon: "briefcase",
    achievements: [
      "AI integration: Built an OpenAI GPT-4o-mini powered IEP generation engine, automating educational goal creation for teachers.",
      "Architecture: Designed a scalable multi-tenant MongoDB system with strict data isolation across organizations, therapists, and parents.",
      "Real-time events: Built a high-frequency behavioral tracking system with automatic student progress updates via custom API.",
      "Reporting: Automated PDF/CSV report generation using Puppeteer and Handlebars for behavioral and assessment data."
    ],
    technologies: ["NestJS", "MongoDB", "OpenAI API", "Puppeteer", "Handlebars", "TypeScript", "Node.js"],
  },
  {
    id: "4",
    company: "Cogrea",
    position: "Frontend Developer",
    duration: "Apr 2023 - Present",
    location: "Remote",
    description: "Developed payment gateways and UI workflows for an AI-powered career management platform.",
    icon: "code",
    achievements: [
      "Payment UI: Built React/TypeScript frontend for a secure payment gateway with Auth0 OAuth2, connecting to a Node.js/FastAPI backend.",
      "CI/CD & Cloud: Managed GitLab CI/CD pipelines and AWS deployments, coordinating frontend releases with infrastructure teams."
    ],
    technologies: ["React", "TypeScript", "Node.js", "FastAPI", "Auth0", "GitLab CI/CD", "AWS"],
  },
  {
    id: "5",
    company: "Eduzone",
    position: "Full-Stack Developer",
    duration: "Mar 2022 - Present",
    location: "Awka, Nigeria",
    description: "Built and maintain a tutoring marketplace connecting students and teachers across Nigeria.",
    icon: "briefcase",
    achievements: [
      "Full-stack build: Built and maintain a tutoring marketplace (300+ teachers, 100+ students, 50 partners) with PHP, Laravel, Livewire, Tailwind CSS, Alpine.js, and MySQL, deployed with Docker.",
      "Payments & wallets: Integrated Paystack, later migrated to Flutterwave; fixed critical wallet transaction bugs with idempotency, ensuring 100% user balance accuracy.",
      "Backend: Laravel Passport authentication, queued jobs, scheduled tasks, form-request validation, and PHPUnit tests.",
      "Real-time chat: Developed a Wirechat messaging system with Web Push notifications, boosting re-engagement by 25%."
    ],
    technologies: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "Alpine.js", "MySQL", "Paystack", "Flutterwave", "Docker", "PHPUnit"],
  },
];
