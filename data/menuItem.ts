import {
  Home,
  User,
  FileText,
  Briefcase,
  Award,
  Code,
  Download,
  Mail,
  Coffee,
} from "lucide-react";
import { MenuItem } from "@/lib/types";

export const menuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "profile", label: "Profile", icon: User },
  { id: "about", label: "About Me", icon: FileText },
  { id: "projects", label: "My Projects", icon: Code },
  { id: "experience", label: "My Experience", icon: Briefcase },
  { id: "skills", label: "My Skills", icon: Award },
  { id: "resume", label: "My Resume", icon: Download },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "coffee", label: "Buy Me a Coffee", icon: Coffee },
];
