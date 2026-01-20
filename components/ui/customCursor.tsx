// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, useSpring, useMotionValue } from "framer-motion";

// export const CustomCursor: React.FC = () => {
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   const springConfig = { damping: 25, stiffness: 250 };
//   const cursorXSpring = useSpring(cursorX, springConfig);
//   const cursorYSpring = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);
//     };

//     const checkHover = () => {
//       const hoveredElement = document.querySelector(":hover");
//       if (
//         hoveredElement &&
//         (hoveredElement.tagName === "BUTTON" ||
//           hoveredElement.tagName === "A" ||
//           hoveredElement.closest("button") ||
//           hoveredElement.closest("a"))
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };

//     const handleMouseDown = () => setIsClicked(true);
//     const handleMouseUp = () => setIsClicked(false);

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mouseover", checkHover);
//     window.addEventListener("mousedown", handleMouseDown);
//     window.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mouseover", checkHover);
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [cursorX, cursorY]);

//   return (
//     <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
//       {/* Main Cursor Dot */}
//       <motion.div
//         className="fixed top-0 left-0 w-3 h-3 bg-teal-400 rounded-full z-[10001]"
//         style={{
//           x: cursorXSpring,
//           y: cursorYSpring,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />

//       {/* Outer Ring */}
//       <motion.div
//         className="fixed top-0 left-0 w-10 h-10 border border-teal-400/30 rounded-full z-[10000]"
//         style={{
//           x: cursorXSpring,
//           y: cursorYSpring,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//         animate={{
//           scale: isHovering ? 1.5 : 1,
//           backgroundColor: isHovering ? "rgba(45, 212, 191, 0.1)" : "rgba(45, 212, 191, 0)",
//           borderColor: isHovering ? "rgba(45, 212, 191, 0.8)" : "rgba(45, 212, 191, 0.3)",
//           width: isClicked ? 30 : 40,
//           height: isClicked ? 30 : 40,
//         }}
//         transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
//       />
      
//       {/* Glow Effect */}
//       <motion.div
//         className="fixed top-0 left-0 w-32 h-32 bg-teal-400/5 rounded-full blur-3xl z-[9999]"
//         style={{
//           x: cursorXSpring,
//           y: cursorYSpring,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />
//     </div>
//   );
// };
