import React from "react";
import { ServiceCardProps } from "@/lib/types";
import { services } from "@/data/service";
import { motion } from "framer-motion";
import { Code2, Server, Headset, Cpu, Sparkles } from "lucide-react";

const getServiceIcon = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes("frontend")) return Code2;
  if (lower.includes("backend")) return Server;
  if (lower.includes("assistant")) return Headset;
  if (lower.includes("technician") || lower.includes("operator")) return Cpu;
  return Sparkles;
};

export const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({
  title,
  description,
  index,
}) => {
  const Icon = getServiceIcon(title);
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="relative group bg-teal-400/3 backdrop-blur-md rounded-2xl p-7 sm:p-8 transition-all duration-300 border border-teal-400/10 hover:border-teal-400/40 hover:shadow-[0_0_30px_rgba(45,212,191,0.12)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background ambient glow on hover */}
      <div className="absolute -right-16 -top-16 w-36 h-36 bg-teal-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-400/20 transition-all duration-500" />

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-teal-400/10 border border-teal-400/20 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:bg-teal-400 group-hover:text-dark-bg transition-all duration-300 shadow-md shadow-teal-400/5">
            <Icon className="w-6 h-6 transition-colors" />
          </div>
          <span className="font-mono text-xs font-semibold text-teal-400/50 group-hover:text-teal-400 transition-colors tracking-widest">
            /{formattedIndex}
          </span>
        </div>

        <h3 className="text-xl font-bold text-teal-400 mb-3 group-hover:text-teal-300 transition-colors tracking-tight">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
          {description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-teal-400/10 flex items-center justify-between text-xs font-mono text-teal-400/70">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          Available for hire
        </span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-400">
          Learn more &rarr;
        </span>
      </div>
    </motion.div>
  );
};

export default function ServiceCardsDemo() {
  return (
    <div className="py-8 sm:py-12 relative">
      <div className="text-center mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20 text-teal-400 text-xs font-mono mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>WHAT I CAN DO FOR YOU</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-teal-400 tracking-tight"
        >
          My <span className="text-gray-300">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mt-3 font-normal"
        >
          End-to-end technical solutions spanning modern web interfaces, robust backend architecture, virtual assistance, and IT maintenance.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
