import React from "react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  onReadMore?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  onReadMore,
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50 group">
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

// Demo with multiple cards
export default function ServiceCardsDemo() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "I craft responsive and dynamic web interfaces using modern technologies like React, Next.js, and TypeScript. From pixel-perfect designs to seamless user experiences, I transform concepts into high-performance web applications that engage and delight users across all devices.",
    },
    {
      title: "Virtual Assistant",
      description:
        "I provide comprehensive administrative support including email management, scheduling, data entry, research, and document preparation. With strong organizational skills and attention to detail, I help streamline your workflow and boost productivity so you can focus on what matters most.",
    },
    {
      title: "Computer Technician/Operator",
      description:
        "Experienced in hardware troubleshooting, system maintenance, software installation, and computer assembly. I ensure optimal performance of computer systems through preventive maintenance, diagnostics, and repairs, while managing data backup and system operations efficiently.",
    },
    {
      title: "IT Support",
      description:
        "I deliver reliable technical support for hardware, software, and network issues. From troubleshooting system errors to setting up user accounts and providing remote assistance, I ensure minimal downtime and maximum productivity with prompt, professional solutions to all your IT challenges.",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
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
