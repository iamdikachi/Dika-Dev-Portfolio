import React from "react";
import { socialLinks } from "@/data/socialLinks";

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label={social.label}
          >
            <Icon size={15} />
          </a>
        );
      })}
    </div>
  );
};
