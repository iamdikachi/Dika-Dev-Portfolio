import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-dark-bg/50 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/10 ${className}`}
    >
      {children}
    </div>
  );
};
