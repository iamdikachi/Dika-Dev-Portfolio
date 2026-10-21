"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { useIsMobile } from "@/hooks/useWindowSize";
import React, { useState, useEffect } from "react";
import { MobileMenu } from "./mobileMenu";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Home } from "../sections/home";
import { MagicMenu } from "../ui/magic-menu";

const ThemeSwitcher = dynamic(
  () => import("../ui/theme-switcher").then((mod) => mod.ThemeSwitcher),
  { ssr: false }
);

const SectionLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="w-8 h-8 rounded-full border-2 border-teal-400/20 border-t-teal-400 animate-spin" />
  </div>
);

const Profile = dynamic(() => import("../sections/profile").then((mod) => mod.Profile), {
  loading: () => <SectionLoadingFallback />,
});
const About = dynamic(() => import("../sections/about"), {
  loading: () => <SectionLoadingFallback />,
});
const Projects = dynamic(() => import("../sections/projects").then((mod) => mod.Projects), {
  loading: () => <SectionLoadingFallback />,
});
const Experience = dynamic(() => import("../sections/experience").then((mod) => mod.Experience), {
  loading: () => <SectionLoadingFallback />,
});
const Skills = dynamic(() => import("../sections/skills").then((mod) => mod.Skills), {
  loading: () => <SectionLoadingFallback />,
});
const Resume = dynamic(() => import("../sections/resume").then((mod) => mod.Resume), {
  loading: () => <SectionLoadingFallback />,
});
const Contact = dynamic(() => import("../sections/contact").then((mod) => mod.Contact), {
  loading: () => <SectionLoadingFallback />,
});
const BuyMeCoffee = dynamic(() => import("../sections/buyMeCofee").then((mod) => mod.BuyMeCoffee), {
  loading: () => <SectionLoadingFallback />,
});

const CommandPalette = dynamic(
  () => import("../ui/commandPalette").then((mod) => mod.CommandPalette),
  { ssr: false }
);
const AIChatbot = dynamic(
  () => import("../ui/aiChatbot").then((mod) => mod.AIChatbot),
  { ssr: false }
);

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

        <main className="flex-1 p-4 sm:p-6 overflow-hidden">
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
              className="mx-auto p-6 lg:p-10"
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
