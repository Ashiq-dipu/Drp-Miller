import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignatureStory({ onOpenBooking }) {
  const logos = [
    {
      name: "Edceptional",
      src: "/images/logos/edceptional.webp",
      heightClass: "h-5 sm:h-6"
    },
    {
      name: "STREAM",
      src: "/images/logos/stream.png",
      heightClass: "h-8 sm:h-9"
    },
    {
      name: "Gutter to Greatness",
      src: "/images/logos/gutter-to-greatness-logo.webp",
      heightClass: "h-7 sm:h-8"
    },
    {
      name: "Building Capacities",
      src: "/images/logos/building-capacities.png",
      heightClass: "h-8 sm:h-9"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-[#FAF6F0] text-[#0B0A09] relative overflow-hidden">
      
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-[#E8DDD0]/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Full Executive Portrait of Dr. Paul Miller (No border, subtly rotated) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[460px] lg:max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out group">
              <img
                src="/images/dr-miller-standing-portrait.jpg"
                alt="Dr. Paul Miller — Keynote Speaker & Urban Turnaround Leader"
                className="w-full h-auto max-h-[640px] sm:max-h-[720px] lg:max-h-[780px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Clean Editorial Content & Narrative */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            
            {/* Header with Script Flourish & Bold Title */}
            <div>
              <span className="font-marker text-3xl sm:text-4xl text-[#2D0891] block -mb-2 transform -rotate-1">
                Meet
              </span>
              <h2 className="font-archivo text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-[#0B0A09] leading-[1.02]">
                DR. PAUL MILLER
              </h2>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 font-sans text-sm sm:text-base lg:text-[17px] text-[#0B0A09]/80 leading-relaxed font-normal">
              <p>
                Dr. Paul Miller is a transformational leadership and resilience speaker, bestselling author, former CEO, educator, and professor. His journey began in the public housing projects of Rochester, New York, where he navigated systemic poverty, street-level trauma, and generational barriers.
              </p>
              <p>
                Rather than allowing his circumstances to dictate his destination, he unlocked a mindset rooted in perseverance, sovereign discipline, and radical accountability. Across more than 25 years in urban education and institutional turnaround, Dr. Miller served as CEO of Green Tech Charter Schools, catapulting graduation rates to an astonishing ~95%.
              </p>
              <p className="font-serif italic text-base sm:text-lg text-[#0B0A09] font-medium border-l-4 border-[#2D0891] pl-4 py-1">
                “My life could have been my excuse, but I turned it into my reason.”
              </p>
            </div>

            {/* 4 Initiatives / Organizations Logos Grid */}
            <div className="pt-2 pb-1 border-y border-[#0B0A09]/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center justify-items-center py-3">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-2 h-12 w-full transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`${logo.heightClass} w-auto max-w-full object-contain filter contrast-110`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="px-8 py-3.5 rounded-full bg-[#F2BD42] hover:bg-[#E0A82E] text-[#0B0A09] font-archivo font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => onOpenBooking?.()}
                className="px-8 py-3.5 rounded-full border-2 border-[#0B0A09] hover:bg-[#0B0A09] hover:text-white text-[#0B0A09] font-archivo font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer active:scale-95"
              >
                Inquire For Keynotes
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
