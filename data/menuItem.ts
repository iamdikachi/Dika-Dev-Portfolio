import {
  Home,
  User,
  Briefcase,
  Code,
  FileText,
  Mail,
  Coffee,
} from "lucide-react";
import { MenuItem } from "@/lib/types";

export const menuItems: MenuItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About Me", icon: User },
  { id: "projects", label: "My Projects", icon: Code },
  { id: "experience", label: "My Experience", icon: Briefcase },
  { id: "resume", label: "My Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
  { id: "coffee", label: "Buy Me a Coffee", icon: Coffee },
];
