import React from "react";
import { ServiceCardProps } from "@/lib/types";
import { services } from "@/data/service";
import { motion } from "framer-motion";

export const ServiceCard: React.FC<ServiceCardProps & { index: number }> = ({
  title,
  description,
  index,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-teal-400/2 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 border border-teal-400/10 hover:border-teal-400/30 group"
    >
      <h3 className="text-xl font-bold text-teal-400 mb-4">{title}</h3>

      <p className="text-gray-300 leading-relaxed mb-6 italic">{description}</p>
    </motion.div>
  );
};

export default function ServiceCardsDemo() {
  return (
    <div className="py-12">
      <div className="">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-teal-400 mb-12 text-center"
        >
          My <span className="text-gray-300">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index}
              title={service.title}
              description={service.description}
              onReadMore={() => alert(`Read more about ${service.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
