import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StartNowButton({
  onClick,
  label = "Start Now",
  variant = "primary", // primary (orange), secondary (white), ghost (glass)
  size = "md", // sm, md, lg
  className = "",
  topic = ""
}) {
  const sizeClasses = {
    sm: "px-5 py-2 text-xs",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4 text-sm"
  };

  const variantClasses = {
    primary: "bg-[#2D0891] hover:bg-[#3D0CB8] text-white shadow-xl hover:shadow-[#2D0891]/35 border border-[#7C3AED]/40",
    secondary: "bg-white hover:bg-[#F4EEE3] text-[#0B0A09] shadow-md",
    ghost: "border border-white/25 hover:border-white hover:bg-white/10 text-white backdrop-blur-md"
  };

  return (
    <button
      onClick={() => onClick && onClick(topic)}
      className={`rounded-full font-sans font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.03] active:scale-[0.98] ${sizeClasses[size] || sizeClasses.md} ${variantClasses[variant] || variantClasses.primary} ${className}`}
      aria-label={label}
    >
      <span>{label}</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}

