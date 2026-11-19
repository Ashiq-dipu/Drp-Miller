import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';

export default function VideoVault({ onPlayVideo }) {
  const clips = [
    {
      id: "m-HJpWobMiU",
      tag: "FLAGSHIP KEYNOTE",
      duration: "18 MIN",
      title: "TEDx Albany — We Need to Do Better",
      subtitle: "The landmark keynote address on urban education reform and uncompromised belief.",
      thumb: "/images/tedx-stage.jpg"
    },
    {
      id: "7jXuESXmLlE",
      tag: "STAGE REEL",
      duration: "03 MIN",
      title: "From the Gutter to Greatness — Official Reel",
      subtitle: "High-octane arena energy, audience connection, and transformational shifts.",
      thumb: "https://i.ytimg.com/vi/7jXuESXmLlE/maxresdefault.jpg"
    },
    {
      id: "A2mYIm2Y1lM",
      tag: "CORE FRAMEWORK",
      duration: "05 MIN",
      title: "The Good Me vs. The Hood Me — Live Moment",
      subtitle: "Mastering internal dualities, mental toughness, and sovereign daily choice.",
      thumb: "https://i.ytimg.com/vi/A2mYIm2Y1lM/hqdefault.jpg"
    }
  ];

  return (
    <section id="reel" className="py-24 sm:py-32 bg-[#0B0A09] text-white border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Header (Exact Framer '09 · LAST YEAR / It got loud.' layout) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#FFB398] mb-3 font-medium">
              03 · STAGE VAULT & LIVE ENERGY
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.0] tracking-[-0.03em] text-white">
              It got <br />
              <span className="text-[#FF6230]">loud.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-white/50 uppercase tracking-[0.14em]">
            100,000+ ATTENDEES · 26 YEARS · 98% REBOOK RATE
          </div>
        </div>

        {/* 3 Video Cards with rounded-2xl */}
        <div className="grid md:grid-cols-3 gap-8">
          {clips.map((c, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#161513] border border-white/10 hover:border-white/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                <img
                  src={c.thumb}
                  alt={c.title}
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-white">
                  <span className="bg-black/80 px-2.5 py-1 rounded-full border border-white/10">{c.tag}</span>
                  <span className="bg-[#FF6230] text-white px-2.5 py-1 rounded-full font-bold">{c.duration}</span>
                </div>

                <button
                  onClick={() => onPlayVideo(c.id)}
                  aria-label={`Play ${c.title}`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </button>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-archivo font-bold text-lg text-white group-hover:text-[#FF6230] transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <p className="font-sans text-xs text-white/60 font-light mt-1.5 leading-relaxed">
                    {c.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/70">
                  <button
                    onClick={() => onPlayVideo(c.id)}
                    className="hover:text-white uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                  >
                    Watch Full Talk <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-white/40">DR. PAUL MILLER</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
