import Image from "next/image";
import AnimatedText from "../animations/typeWriter";
import Profile from "@/public/images/my-photo.png";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });
    });
  }, []);

  const leftContentVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.2
      } 
    },
  };

  const rightContentVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 2, 
        ease: "easeOut" 
      } 
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    },
  };

  return (
     <div className="relative">
          <div className="absolute inset-0 opacity-10 text-gray-400 font-mono text-sm pointer-events-none select-none">
            <div className="absolute top-8 left-8">&lt;/html&gt;</div>
            <div className="absolute top-16 left-12">&lt;body&gt;</div>
            <div className="absolute top-24 left-16">&lt;h1/&gt;</div>
            <div className="absolute bottom-32 right-24">&lt;/h1&gt;</div>
          </div>
  
          <div className="flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div
                variants={leftContentVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8 z-10"
              >
                <div className="space-y-4">
                  <motion.h1 variants={itemVariants} className="text-5xl sm:text-5xl lg:text-5xl 2xl:text-7xl font-bold text-teal-400 leading-tight">
                    Hello
                    <br />
                    I&apos;m
                    <span className="text-gray-300">Onyedikachi Emmanuel</span>,
                    <br />
                    Web developer
                  </motion.h1>
                  <motion.p variants={itemVariants} className="text-gray-300 text-lg font-mono">
                    full stack developer
                  </motion.p>
                  <motion.div variants={itemVariants} className="text-teal-400">
                    <AnimatedText />
                  </motion.div>
                </div>
   
                <motion.div variants={itemVariants} className="flex flex-wrap gap-4 items-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-dark-bg transition-all duration-300 font-medium"
                  >
                    View my CV
                  </motion.button>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-300 hover:text-teal-400 underline transition-colors duration-300 flex items-center gap-2"
                  >
                    Booking
                  </motion.a>
                </motion.div>
              </motion.div>
   
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="absolute inset-0 bg-teal-400/5 rounded-full blur-3xl"></div>
   
                  <motion.div 
                    variants={rightContentVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative aspect-square border border-teal-400/20 rounded-full overflow-hidden"
                  >
                    <Image
                      src={Profile}
                      alt="Onyedikachi Emmanuel - Web Developer"
                      className="w-full h-full object-cover grayscale opacity-80"
                    />
                  </motion.div>

                  <div 
                    ref={(el) => { if (el) iconsRef.current[0] = el; }}
                    className="absolute top-12 -right-4 w-14 h-14 bg-dark-bg/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 group"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/nodedotjs/2dd4bf" 
                      alt="Node.js" 
                      className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
  
              
                  <div 
                    ref={(el) => { if (el) iconsRef.current[1] = el; }}
                    className="absolute top-1/3 -left-6 w-16 h-16 bg-dark-bg/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 group"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/nodedotjs/2dd4bf" 
                      alt="Node.js" 
                      className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
  
                  <div 
                    ref={(el) => { if (el) iconsRef.current[2] = el; }}
                    className="absolute bottom-1/4 -right-8 w-16 h-16 bg-dark-bg/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 group"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/php/2dd4bf" 
                      alt="PHP" 
                      className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div 
                    ref={(el) => { if (el) iconsRef.current[3] = el; }}
                    className="absolute -bottom-4 left-1/4 w-14 h-14 bg-dark-bg/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-2xl border border-teal-400/20 hover:border-teal-400/50 transition-all duration-300 group"
                  >
                    <img 
                      src="https://cdn.simpleicons.org/express/2dd4bf" 
                      alt="Express" 
                      className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
      </div>
  )
}

export default HeroSection