import React from "react";
import { ArrowRight } from "lucide-react";
import { ServiceCardProps } from "@/lib/types";
import { services } from "@/data/service";



export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  onReadMore,
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border
     border-slate-700/50 hover:border-slate-600/50 group">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>

      <p className="text-slate-400 leading-relaxed mb-6">{description}</p>

      <button
        onClick={onReadMore}
        className="flex items-center gap-2 text-cyan-400 font-medium hover:gap-3 transition-all duration-300"
      >
        Read More
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default function ServiceCardsDemo() {
  return (
    <div className="">
      <div className="">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
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
