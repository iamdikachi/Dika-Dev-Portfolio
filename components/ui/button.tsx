import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg transition-all duration-200 font-medium";
  const variants = {
    primary: "bg-teal-400 hover:bg-teal-500 text-dark-bg",
    secondary: "bg-teal-400/5 hover:bg-teal-400/10 text-teal-400 border border-teal-400/10",
    ghost: "hover:bg-teal-400/5 text-gray-300 hover:text-teal-400",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
