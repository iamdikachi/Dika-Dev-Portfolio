import { Project } from "@/lib/types";


export const projects: Project[] = [
  {
    id: "1",
    title: "X Clone",
    description: "A replica of one of the most used social media app.",
    technologies: ["Nextjs", "Superbase", "TypeScript", "Node.js"],
    image: "/images/x.webp",
    role: "FullStack",
    category: "Social Media",
    link: "https://example.com",
    github: "https://github.com/iamdikachi/x-clone-app",
  },
  {
    id: "2",
    title: "Project Acent",
    description:
      "Next-generation AI platform designed to bridge the gap between Students and the stuggle of getting project ideas and materials.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn", "Gemini"],
    image: "/images/project acent face.PNG",
    role: "FullStack",
    category: "AI Tools",
    link: "https://ai-project-ascent.vercel.app/",
    github: "https://github.com/iamdikachi/AI-Project_Ascent",
  },
  {
    id: "3",
    title: "E-commerce Platform",
    description:
      "Reimagining the e-commerce experience with 3D product previews and interactive augmented reality transaction modules.",
    technologies: ["React", "React Router", "Yup"],
    image: "/images/nebula-market.png",
    status: "ARCHIVE",
    role: "Frontend",
    category: "E-commerce",
    link: "https://e-commerce-website-kappa-seven.vercel.app/",
    github: "https://github.com/iamdikachi/E-Commerce-Website",
  },
  {
    id: "4",
    title: "Movie Box",
    description: "A modern web application to stream and download movies.",
    technologies: ["JavaScript", "Rapid API", "Tailwind"],
    image: "/images/moviebox.PNG",
    role: "Frontend",
    category: "Streaming",
    link: "https://iamdikachi.github.io/MOVIE-STREAMING-APP/",
    github: "https://github.com/iamdikachi/MOVIE-STREAMING-APP",
  },
];

