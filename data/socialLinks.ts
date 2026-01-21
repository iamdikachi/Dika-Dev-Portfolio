
import { SocialLink } from "@/lib/types";
import { FaWhatsapp, FaLinkedin} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";




export const socialLinks: SocialLink[] = [
  { icon: FaGithub, label: "GitHub", url: "https://github.com/iamdikachi" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/iamdikachukwu/",
  },
  { icon: BsTwitterX, label: "Twitter", url: "https://x.com/iamdikachukwu" },
  { icon: SiGmail, label: "Email", url: "mailto:emmanuelnnadi097@gmail.com" },
  { icon: FaWhatsapp, label: "WhatsApp", url: "https://whatsapp.com/dl/" },
];
