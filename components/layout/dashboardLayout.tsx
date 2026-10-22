"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Footer } from "./footer";
import { MobileMenu } from "./mobileMenu";
import { Sidebar } from "./sidebar";
import { Home } from "../sections/home";

const ThemeSwitcher = dynamic(() => import("../ui/theme-switcher").then((mod) => mod.ThemeSwitcher), { ssr: false });
const CommandPalette = dynamic(() => import("../ui/commandPalette").then((mod) => mod.CommandPalette), { ssr: false });
const AIChatbot = dynamic(() => import("../ui/aiChatbot").then((mod) => mod.AIChatbot), { ssr: false });

const SectionLoadingFallback = () => (
  <div className="flex min-h-[40vh] items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-400/20 border-t-teal-400" />
  </div>
);

const About = dynamic(() => import("../sections/about"), { loading: SectionLoadingFallback });
const Projects = dynamic(() => import("../sections/projects").then((mod) => mod.Projects), { loading: SectionLoadingFallback });
const Experience = dynamic(() => import("../sections/experience").then((mod) => mod.Experience), { loading: SectionLoadingFallback });
const Skills = dynamic(() => import("../sections/skills").then((mod) => mod.Skills), { loading: SectionLoadingFallback });
const Resume = dynamic(() => import("../sections/resume").then((mod) => mod.Resume), { loading: SectionLoadingFallback });
const Contact = dynamic(() => import("../sections/contact").then((mod) => mod.Contact), { loading: SectionLoadingFallback });
const BuyMeCoffee = dynamic(() => import("../sections/buyMeCofee").then((mod) => mod.BuyMeCoffee), { loading: SectionLoadingFallback });

type SectionProps = { onSectionChange?: (section: string) => void };
type PortfolioSection = { id: string; Component: React.ComponentType<SectionProps> };

const portfolioSections: PortfolioSection[] = [
  { id: "home", Component: Home },
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "experience", Component: Experience },
  { id: "skills", Component: Skills },
  { id: "resume", Component: Resume },
  { id: "contact", Component: Contact },
  { id: "coffee", Component: BuyMeCoffee },
];

export const DashboardLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowEnhancements(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedAccent = localStorage.getItem("portfolio-accent");
    if (savedAccent) document.documentElement.style.setProperty("--accent-color", savedAccent);
  }, []);

  useEffect(() => {
    const sectionElements = portfolioSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      {
        root: window.innerWidth >= 1024 ? scrollContainerRef.current : null,
        rootMargin: "-15% 0px -60% 0px",
        threshold: [0, 0.1, 0.5],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col lg:flex-row bg-dark-bg lg:mx-auto lg:h-screen lg:max-w-[85%] lg:overflow-hidden 2xl:max-w-[80%]">
      {showEnhancements && (
        <>
          <CommandPalette onSectionChange={scrollToSection} />
          <AIChatbot />
          <ThemeSwitcher />
        </>
      )}
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />
      <MobileMenu
        activeSection={activeSection}
        onSectionChange={scrollToSection}
        isOpen={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen((open) => !open)}
      />

      <main id="portfolio-scroll-container" ref={scrollContainerRef} className="flex min-w-0 flex-1 flex-col lg:overflow-y-auto">
        <div className="mx-auto w-full p-4 sm:p-6 lg:p-10">
          {portfolioSections.map(({ id, Component }) => (
            <section key={id} id={id} className="scroll-mt-20" aria-label={`${id} section`}>
              <Component onSectionChange={scrollToSection} />
            </section>
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
};
