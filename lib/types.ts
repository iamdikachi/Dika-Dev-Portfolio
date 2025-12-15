import { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SocialLink {
  icon: LucideIcon;
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}
