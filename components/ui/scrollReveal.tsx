"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  stagger?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  className = "",
  stagger = 0,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use a small timeout to ensure DOM is ready and layout is settled
    const timer = setTimeout(() => {
      gsap.fromTo(
        element.children,
        {
          opacity: 0,
          y: yOffset,
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%", // Animation starts when top of element hits 85% of viewport height
            toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
            // refreshPriority: 1 // Helpful for dynamic content
          },
        }
      );
    }, 100);

    return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [delay, duration, yOffset, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
