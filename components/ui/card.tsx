import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-8 border border-blue-100 ${className}`}
    >
      {children}
    </div>
  );
};
