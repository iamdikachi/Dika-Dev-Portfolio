import { Project } from "@/lib/types";


export const projects: Project[] = [
  {
    id: "1",
    title: "Callik",
    description:
      "Customer-facing storefront for an African fashion e-commerce and social commerce platform operated by Callik Innovative and Technologies Ltd, connecting customers with designers, tailors, and fashion merchants across 15+ countries.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand"],
    image: "/images/callik_logo-removebg-preview.webp",
    role: "Senior Frontend",
    category: "E-commerce",
    link: "https://www.callik.com/",
  },
  {
    id: "2",
    title: "EduZone",
    description:
      "A comprehensive tutoring marketplace connecting 300+ teachers, 100+ students, and 50 partners. Features secure wallet management, payment gateways (Paystack/Flutterwave), real-time messaging, and session scheduling.",
    technologies: ["PHP", "Laravel", "Livewire", "Tailwind CSS", "Alpine.js", "MySQL", "Paystack", "Flutterwave", "Docker"],
    image: "/images/eduzone-logo.png",
    role: "Full-Stack",
    category: "Education",
    link: "http://eduzoneng.com/",
  },
  {
    id: "3",
    title: "Trarrk",
    description:
      "Special education platform featuring a NestJS backend with multi-tenant MongoDB, an OpenAI GPT-4o-mini powered IEP generation engine, real-time behavioral tracking, and automated PDF/CSV reporting.",
    technologies: ["NestJS", "MongoDB", "OpenAI API", "Puppeteer", "TypeScript", "Node.js"],
    image: "/images/trarrk-logo.png",
    role: "Lead Backend",
    category: "Education",
    link: "https://www.trarrk.com/",
  },
  {
    id: "4",
    title: "Cogrea",
    description:
      "AI-powered career management and skill verification ecosystem. Features a secure payment gateway with Auth0 OAuth2, Node.js/FastAPI backend, automated GitLab CI/CD, and AWS infrastructure.",
    technologies: ["React", "TypeScript", "Node.js", "FastAPI", "Auth0", "Docker", "AWS"],
    image: "/images/cogrea-logo.png",
    role: "Frontend",
    category: "Career",
    link: "http://cogrea.com/",
  },
  {
    id: "5",
    title: "Scuib.AI",
    description:
      "AI job matching platform with an intelligent recommendation engine that analyzes candidate profiles and connects them with optimal career opportunities.",
    technologies: ["Node.js", "React", "TypeScript", "OpenAI API"],
    image: "/images/scuib.jpg",
    role: "Full-Stack / AI",
    category: "Career",
    link: "https://scuib.com/",
  },
];

