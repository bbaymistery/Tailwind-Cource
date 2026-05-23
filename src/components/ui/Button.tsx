import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  // 1. Defining Tailwind styling variants for the button
  const baseStyle =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white focus:ring-primary/50 shadow-sm",
    secondary: "bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200/80 focus:ring-zinc-500/50",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500/50 shadow-sm",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
