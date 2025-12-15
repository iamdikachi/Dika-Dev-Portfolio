import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project1",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project2",
  },
  {
    id: "3",
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool using OpenAI API for marketing copy and blogs.",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS"],
    link: "https://example.com",
    github: "https://github.com/yourusername/project3",
  },
];
