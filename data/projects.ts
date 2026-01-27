import { Project, SampleProject} from "@/lib/types";


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


export const sampleProjects: SampleProject[] = [
  {
    id: "1",
    title: "AI Job Platform",
    image: "/images/scuib.jpg",
    url: "https://scuib.com/",
  },
  {
    id: "2",
    title: "Job Career Platform",
    image: "/images/cogrea.jpg",
    url: "https://cogrea.com/",
  },
  {
    id: "3",
    title: "Educational Tutoring Platform",
    image: "/images/eduzone.png",
    url: "https://eduzoneng.com/",
  },
  {
    id: "4",
    title: "Project Idea Platform",
    image: "/images/project-acent.PNG",
    url: "https://ai-project-ascent.vercel.app/",
  },
  {
    id: "5",
    title: "Social Platform",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    url: "https://example.com/project5",
  },
  {
    id: "6",
    title: "Analytics Dashboard",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    url: "https://example.com/project6",
  },
  {
    id: "7",
    title: "Fitness Tracker",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=300&fit=crop",
    url: "https://example.com/project7",
  },
  {
    id: "8",
    title: "Travel Booking",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    url: "https://example.com/project8",
  },
];
