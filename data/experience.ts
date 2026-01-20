import { Experience } from "@/lib/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Eduzone",
    position: "FullStack Developer",
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
    company: "Cogrea",
    position: "Senior Frontend Developer",
    duration: "Mar 2020 - Dec 2021",
    location: "Remote",
    description: "Developed scalable web applications and APIs.",
    icon: "code",
    achievements: [
      "Developed and maintained multiple Next.js e-commerce sites, handling over $2M in monthly transactions.",
      "Built a custom CMS using React and Node.js, reducing content update time by 70%.",
      "Optimized database queries and implemented caching strategies, improving page load times by 50%."
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Docker"],
  },

];

