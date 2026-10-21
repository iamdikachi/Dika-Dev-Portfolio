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

    let ctx: gsap.Context | undefined;
    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
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
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }, element);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [delay, duration, yOffset, stagger]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};
