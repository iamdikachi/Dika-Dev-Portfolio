"use client";

import { useSidebar } from "@/hooks/useSidebar";
import { useIsMobile } from "@/hooks/useWindowSize";
import React, { useState } from "react";
import { MobileMenu } from "./mobileMenu";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";

import { Profile } from "../sections/profile";

import { Projects } from "../sections/projects";
import { Experience } from "../sections/experience";
import { Skills } from "../sections/skills";
import { Resume } from "../sections/resume";
import { Contact } from "../sections/contact";
import { BuyMeCoffee } from "../sections/buyMeCofee";
import { Home } from "../sections/home";
import About from "../sections/about";

// Import all section components

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

export const DashboardLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const SectionComponent =
    sectionComponents[activeSection as keyof typeof sectionComponents];

  if (isMobile) {
    return (
      <div className="min-h-screen  flex flex-col ">
        <MobileMenu
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={mobileMenuOpen}
          onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
        />

        <main className="flex-1 md:p-6">
          <div className="max-w-4xl mx-auto">
            <SectionComponent onSectionChange={setActiveSection} />
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-dark-surface overflow-hidden  lg:max-w-[85%] lg:mx-auto 2xl:max-w-[80%]">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="flex-1 flex flex-col overflow-hidden ">
        <div className="flex-1 overflow-y-auto ">
          <div className="mx-auto p-10">
            <SectionComponent onSectionChange={setActiveSection} />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};
