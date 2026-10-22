import { Project } from "@/lib/types";


export const projects: Project[] = [
  {
    id: "1",
    title: "EduZone",
    description: "EduZone is a cutting-edge web platform designed to connect students with expert teachers for both online and offline learning sessions. It bridges the gap between learners seeking knowledge and educators offering their skills, providing a seamless and interactive environment for education to flourish.",
    technologies: ["Laravel", "Livewire", "MySQL","Blade", "Alpine", "Tailwind"],
    image: "/images/eduzone-logo.png",
    role: "FullStack",
    category: "Education",
    link: "http://eduzoneng.com/",
  },
  {
    id: "2",
    title: "Callik",
    description:
      "Callik is an African fashion e-commerce and social commerce platform operated by Callik Innovative and Technologies Ltd, connecting customers with designers, tailors, and fashion merchants across more than 15 African countries.",
    technologies: ["Next.js", "Tailwind CSS", "Shadcn", "TypeScript"],
    image: "/images/callik_logo-removebg-preview.webp",
    role: "Frontend",
    category: "E-commerce",
    link: "https://www.callik.com/",
  },
  {
    id: "3",
    title: "Trarrk",
    description:
      "AI-powered platform that helps schools, therapists, and educators assess children with additional needs, generate personalized IEPs, track progress, and turn data into actionable insights without adding complexity to the work they already do.",
    technologies: ["AI", "Express", "TypeScript", "Nodejs", "AWS", "Cloudinary"],
    image: "/images/trarrk-logo.png",
    role: "Backend",
    category: "Education",
    link: "https://www.trarrk.com/",
  },
  {
    id: "4",
    title: "Cogrea",
    description: "Cogrea helps individuals manage and build their careers, empower businesses to hire smarter, close skill gaps and manage their workforce, all with our AI-powered career management and skill verification systems. One powerful career and business ecosystem",
    technologies: ["Nextjs", "TypeScript", "Tailwind"],
    image: "/images/cogrea-logo.png",
    role: "Frontend",
    category: "Career",
    link: "http://cogrea.com/",
  },
];

