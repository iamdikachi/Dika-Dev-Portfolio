"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const DynamicBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring for cursor reactivity with high performance
  const springX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  useEffect(() => {
    setMounted(true);
    // Skip tracking on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        rafId = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 bg-dark-bg overflow-hidden pointer-events-none contain-strict">
      {/* Primary animated orb using hardware-accelerated radial-gradient instead of expensive blur filters */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.12) 0%, rgba(45, 212, 191, 0.04) 40%, transparent 70%)",
          willChange: "transform",
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
      />

      {/* Secondary static ambient glow orbs with zero repaint cost */}
      <div
        className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(45, 212, 191, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--accent-color, #2dd4bf) 1px, transparent 1px), linear-gradient(90deg, var(--accent-color, #2dd4bf) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
