import React from "react";
import { SocialLinks } from "../ui/socialLinks";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-gray-400 pt-6 pb-42 md:py-6 px-6 md:px-10 border-t border-teal-400/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          © 2025 Onyedikachi Emmanuel. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};
