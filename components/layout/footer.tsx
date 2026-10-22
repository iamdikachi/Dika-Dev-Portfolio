"use client";

import React, { useState, useEffect } from "react";
import { SocialLinks } from "../ui/socialLinks";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const scrollContainer = document.getElementById("portfolio-scroll-container");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`bg-dark-bg text-gray-400 py-6 px-4 sm:px-6 md:px-10 border-t border-teal-400/5 ${className}`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-teal-400/5 pb-3">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="text-teal-400 font-medium">Available for opportunities</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-teal-400 transition-colors group cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        {/* Bottom copyright and social links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-center md:text-left">
            &copy; {currentYear} <span className="text-teal-400 font-medium">Onyedikachi Emmanuel</span>. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};
