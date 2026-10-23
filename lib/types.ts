import { LucideIcon } from "lucide-react";
import { ElementType } from "react";

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SocialLink {
  icon: LucideIcon | ElementType;
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
  status?: "ACTIVE" | "ARCHIVE" | "CASE STUDY" | "BASELINE";
  role?: string;
  category?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  icon?: string;
  achievements?: string[];
  location?: string;
  technologies?: string[];
}




export interface Recommendation {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  verified: boolean;
  linkedin?: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  onReadMore?: () => void;
}


export interface TimelineItemProps {
  title: string;
  description: string;
  delay: string;
}