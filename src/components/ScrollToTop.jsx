import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (currentScroll > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalScroll) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  // SVG circle calculations for progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 animate-fadeIn">
      <button
        onClick={scrollToTop}
        aria-label="Get to top of page"
        title="Get to top"
        className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0B0A09]/90 hover:bg-[#1A1528] backdrop-blur-md border border-white/20 hover:border-[#A78BFA] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Circular Scroll Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
          {/* Background Track */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2.5"
          />
          {/* Active Fill Track */}
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="#A78BFA"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        {/* Center Arrow Icon */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <ArrowUp className="w-5 h-5 text-white group-hover:text-[#A78BFA] group-hover:-translate-y-0.5 transition-transform duration-200 stroke-[2.5]" />
        </div>

        {/* Floating Tooltip Pill on Hover */}
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0B0A09] text-white border border-white/15 text-[10px] font-mono uppercase tracking-wider font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
          Get to top
        </span>
      </button>
    </div>
  );
}
