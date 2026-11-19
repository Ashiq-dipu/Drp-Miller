import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero({ onOpenBooking, onPlayVideo }) {
  return (
    <section className="relative w-full min-h-[100svh] text-white overflow-hidden flex flex-col justify-between pt-28 sm:pt-36 pb-0 bg-[#0B0A09]">
      
      {/* Background Infinite Hero Video from Dr. Miller's Official Website (drpmiller.com / Mz0tJVlvXyo) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="relative w-full h-full">
          
          {/* Responsive 16:9 Cover Container (Flawless presentation on Desktop, Tablet & Mobile) */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <iframe
              title="Dr. Paul Miller Official Hero Video"
              src="https://www.youtube.com/embed/Mz0tJVlvXyo?autoplay=1&mute=1&loop=1&playlist=Mz0tJVlvXyo&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100svh] min-w-[177.78svh] scale-110 sm:scale-115 md:scale-125 border-0 pointer-events-none select-none filter contrast-105 brightness-100"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Mainstage Diagonal Spotlight Beam in Royal Indigo */}
          <div 
            className="absolute -top-32 right-1/4 w-[750px] h-[750px] rounded-full blur-[160px] opacity-45 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6) 0%, rgba(45,8,145,0.3) 45%, rgba(11,10,9,0) 75%)' }}
          />

          {/* Lightened Atmospheric Contrast Overlays for Brighter Video Presence */}
          <div className="absolute inset-0 bg-[#0B0A09]/10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/50 via-[#0B0A09]/15 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 w-full flex-1 flex flex-col justify-center relative z-10 pt-4 pb-8">
        <div className="max-w-[700px] space-y-6">
          
          {/* Headline H1 (Matching drpmiller.com bold Ubuntu typography) */}
          <h1 className="font-archivo font-bold text-3xl sm:text-4xl lg:text-[46px] text-white leading-[1.1] tracking-[-0.02em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
            Transforming leaders from the gutter to greatness.
          </h1>

          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed max-w-[500px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
            Raw, high-impact keynotes that turn around culture and unlock championship performance.
          </p>

          {/* Pill CTAs (Signature Indigo #2D0891 + Ghost with Play Circle) */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenBooking?.()}
              className="px-6 py-3 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-semibold text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-xl hover:scale-[1.02] active:scale-[0.98] border border-[#7C3AED]/40 shadow-[#2D0891]/30"
            >
              <span>Request Keynote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onPlayVideo('Mz0tJVlvXyo')}
              className="px-6 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
              </div>
              <span>Watch Stage Reel</span>
            </button>
          </div>

        </div>
      </div>

      {/* Giant Bottom Solid White Watermark (Clean edge-to-edge without dividing strip) */}
      <div className="w-full overflow-hidden select-none pointer-events-none relative z-10">
        <div className="w-full px-4 sm:px-8">
          <svg 
            viewBox="0 0 1440 160" 
            className="w-full h-auto text-white fill-current block translate-y-1"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="82%"
              textAnchor="middle"
              className="font-archivo font-black uppercase"
              style={{
                fontSize: '155px',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                fill: '#FFFFFF'
              }}
            >
              DR. PAUL MILLER
            </text>
          </svg>
        </div>
      </div>

    </section>
  );
}
