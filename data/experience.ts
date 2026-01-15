import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "TechCorp",
    position: "Senior Software Engineer",
    duration: "Jan 2022 - Present",
    location: "Remote",
    description: "Leading development of enterprise web applications.",
    icon: "briefcase",
    achievements: [
      "Led the migration of a legacy PHP monolith to a Node.js microservices architecture, improving system response time by 65%.",
      "Architected a real-time data visualization dashboard using React and WebSockets, supporting 50k+ concurrent users.",
      "Mentored a team of 6 engineers, implementing TDD and CI/CD best practices that reduced production bugs by 40%."
    ],
    technologies: ["React", "Node.js", "AWS Lambda", "PostgreSQL", "Redis"],
  },
  {
    id: "2",
    company: "InnovateSoft",
    position: "Full Stack Developer",
    duration: "Mar 2020 - Dec 2021",
    location: "Austin, TX",
    description: "Developed scalable web applications and APIs.",
    icon: "code",
    achievements: [
      "Developed and maintained multiple Next.js e-commerce sites, handling over $2M in monthly transactions.",
      "Built a custom CMS using React and Node.js, reducing content update time by 70%.",
      "Optimized database queries and implemented caching strategies, improving page load times by 50%."
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Docker"],
  },
  {
    id: "3",
    company: "Freelance",
    position: "UI/UX Consultant",
    duration: "Jan 2019 - Feb 2020",
    location: "Remote",
    description: "Provided UI/UX consulting for various clients.",
    icon: "palette",
    achievements: [
      "Redesigned 5+ client websites, increasing user engagement by an average of 35%.",
      "Created design systems and component libraries for consistent branding.",
      "Conducted user research and usability testing to inform design decisions."
    ],
    technologies: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
  },
];

