import React from "react";
import { SocialLinks } from "../ui/socialLinks";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg text-white py-2 px-6 md:px-10 shadow-2xl">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm md:text-base">
          © 2025 Onyedikachi Emmanuel. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};
