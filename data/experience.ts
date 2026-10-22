import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Eduzone",
    position: "FullStack Developer",
    duration: "Jan 2022 - Present",
    location: "Remote",
    description: "Leading development of cutting-edge educational web platform connecting students with expert teachers.",
    icon: "briefcase",
    achievements: [
      "Architected full-stack educational web platform with Laravel, Livewire, and MySQL connecting learners with educators for online and offline sessions.",
      "Engineered dynamic, highly reactive user interfaces using Alpine.js and Tailwind CSS with server-rendered Blade templates.",
      "Designed and optimized relational MySQL database schema and query indexes, ensuring sub-second search and session scheduling."
    ],
    technologies: ["Laravel", "Livewire", "MySQL", "Blade", "Alpine", "Tailwind"],
  },
  {
    id: "2",
    company: "Callik",
    position: "Senior Frontend Developer",
    duration: "2020 - 2022",
    location: "Remote",
    description: "Built e-commerce and social commerce web platform for African fashion connecting customers with designers across 15+ countries.",
    icon: "code",
    achievements: [
      "Developed high-performance e-commerce and social commerce web applications using Next.js, TypeScript, and Tailwind CSS.",
      "Implemented modular and accessible design system using Shadcn UI components, optimizing frontend UX for fashion merchants and customers.",
      "Engineered seamless designer catalog browsing, interactive product galleries, and responsive cart and checkout flows."
    ],
    technologies: ["Next.js", "Tailwind CSS", "Shadcn", "TypeScript"],
  },
];
