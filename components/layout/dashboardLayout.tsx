"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { useIsMobile } from "@/hooks/useWindowSize";
import React, { useState, useEffect } from "react";
import { MobileMenu } from "./mobileMenu";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { CommandPalette } from "../ui/commandPalette";
// import { CustomCursor } from "../ui/customCursor";
import { AIChatbot } from "../ui/aiChatbot";
import { ThemeSwitcher } from "../ui/theme-switcher";
import { MagicMenu } from "../ui/magic-menu";

import { Profile } from "../sections/profile";

import { Projects } from "../sections/projects";
import { Experience } from "../sections/experience";
import { Skills } from "../sections/skills";
import { Resume } from "../sections/resume";
import { Contact } from "../sections/contact";
import { BuyMeCoffee } from "../sections/buyMeCofee";
import { Home } from "../sections/home";
import About from "../sections/about";



const sectionComponents = {
  home: Home,
  profile: Profile,
  about: About,
  projects: Projects,
  experience: Experience,
  skills: Skills,
  resume: Resume,
  contact: Contact,
  coffee: BuyMeCoffee,
};

import { DynamicBackground } from "../ui/dynamic-background";

export const DashboardLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const SectionComponent =
    sectionComponents[activeSection as keyof typeof sectionComponents];


  useEffect(() => {
    const savedAccent = localStorage.getItem("portfolio-accent");
    if (savedAccent) {
      document.documentElement.style.setProperty("--accent-color", savedAccent);

    }
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col relative">
        <DynamicBackground />
        {/* <CustomCursor /> */}
        <CommandPalette onSectionChange={setActiveSection} />
        <AIChatbot />
        <ThemeSwitcher />
        <MagicMenu
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <MobileMenu
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <main className="flex-1 md:p-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <SectionComponent onSectionChange={setActiveSection} />
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-dark-bg overflow-hidden lg:max-w-[85%] lg:mx-auto 2xl:max-w-[80%] relative">
      <DynamicBackground />
      {/* <CustomCursor /> */}
      <CommandPalette onSectionChange={setActiveSection} />
      <AIChatbot />
      <ThemeSwitcher />
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mx-auto p-10"
            >
              <SectionComponent onSectionChange={setActiveSection} />
            </motion.div>
          </AnimatePresence>
        </div>
        <Footer />
      </main>
    </div>
  );
};
