import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function StickyBottomBar({ onOpenBooking }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 350px down
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 px-4 sm:px-6 pointer-events-none animate-fadeIn">
      <div className="max-w-3xl mx-auto bg-[#0B0A09]/95 backdrop-blur-md border border-white/15 px-5 sm:px-6 py-3 rounded-full shadow-2xl flex items-center justify-between pointer-events-auto">
        
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-3">
          <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse shrink-0" />
          <p className="font-sans text-xs sm:text-sm text-white/90 font-medium truncate">
            Ready to move your room?{' '}
            <span className="hidden md:inline text-white/50">
              Limited 2026–2027 keynote & advisory dates.
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-[#7C3AED]/40"
            aria-label="Start Now with Dr. Miller"
          >
            <span>Start Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-full text-white/40 hover:text-white transition-colors cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}

