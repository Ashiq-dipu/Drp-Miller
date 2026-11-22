import React from 'react';
import { ArrowRight, Play, Radio, Mic, ExternalLink, Headphones, Award } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function MediaPage({ onOpenBooking, onPlayVideo }) {
  const broadcasts = [
    {
      title: "Dr. Miller × Attorney Ben Crump",
      category: "CIVIL RIGHTS SIT-DOWN",
      desc: "A powerful sit-down dialogue on educational equity, charter school access, and civil rights in Rochester.",
      image: "/images/drpmiller/ben-crump.jpg",
      videoId: "7jXuESXmLlE"
    },
    {
      title: "TEDx Albany: We Need to Do Better",
      category: "LANDMARK KEYNOTE",
      desc: "Dr. Paul Miller on changing the mindset of a generation — one family, one school, one community at a time.",
      image: "/images/tedx-stage.jpg",
      videoId: "m-HJpWobMiU"
    },
    {
      title: "WXXI Connections Public Radio",
      category: "RADIO BROADCAST",
      desc: "An impassioned panel debate on preserving historic school buildings and empowering neighborhood families.",
      image: "/images/drpmiller/press-wxxi.jpg",
      videoId: "7jXuESXmLlE"
    },
    {
      title: "From the Gutter to Greatness Reel",
      category: "ARENA HIGHLIGHTS",
      desc: "High-octane arena moments, auditorium connection, and transformational shifts with 1,500+ educators.",
      image: "/images/drpmiller/media-stage-8.jpg",
      videoId: "7jXuESXmLlE"
    }
  ];

  const shorts = [
    { title: "Servant Leadership", subtitle: "WORK · LIFE · CHURCH", ytId: "HUHlvb5mgKo" },
    { title: "Charter School Fair", subtitle: "ROCHESTER PARENTS", ytId: "zvUKyCxlzX0" },
    { title: "Rochester's Reality", subtitle: "GUTTERS · CRIME · HOPE", ytId: "kuhOna3h9t4" },
    { title: "Hold Everything In", subtitle: "EMOTIONAL HEALTH", ytId: "WgNLwbROa8I" },
    { title: "The Hood Me Mindset", subtitle: "IDENTITY · SOVEREIGNTY", ytId: "m0hYT-i44wg" },
    { title: "Champion Mindset", subtitle: "TEACHERS WHO WIN", ytId: "zTNPnxJODHA" }
  ];

  const episodes = [
    {
      ep: "EP · 084",
      title: "Why Your Identity is Your Ceiling",
      desc: "How subconscious self-narratives restrict executive growth and how to rewrite them under pressure."
    },
    {
      ep: "EP · 083",
      title: "Leading Schools That Change Zip Codes",
      desc: "Behind the scenes of Green Tech High School’s ~95% graduation turnaround."
    },
    {
      ep: "EP · 082",
      title: "The Good Me / The Hood Me — Live Masterclass",
      desc: "Internal duality, discipline, and emotional sovereign control in crisis moments."
    }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC PRESS & MEDIA HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="m-HJpWobMiU" 
          title="Dr. Paul Miller Press & Media Dossier" 
        />

        {/* Central Stage: Title, Subtitle, 2 Buttons & Stats at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Press & Media Dossier
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            NATIONAL BROADCASTS · CIVILIAN CITATIONS · KEY TO NEW YORK CITY · PRESIDENTIAL HONORS
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onPlayVideo('7jXuESXmLlE')}
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>Play Highlight Segment</span>
            </button>

            <button
              onClick={() => onOpenBooking('Press & Media Interview')}
              className="px-7 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <Radio className="w-4 h-4 text-white" />
              <span>Request Press Kit & Bios</span>
            </button>
          </div>

          {/* Micro Stats Counter */}
          <div className="pt-6 border-t border-white/15 w-full">
            <div className="grid grid-cols-3 gap-6 font-mono text-xs text-center">
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">BROADCASTS</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">50+ MEDIA</div>
              </div>
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">TEDX REACH</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">100K+ VIEWS</div>
              </div>
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">PRESS ASSETS</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">HD MEDIA KIT</div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          UNIFIED CONTENT BODY (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">

      {/* ========================================================
          FEATURED BROADCAST GRID
      ======================================================== */}
      <section className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] mb-3 font-bold">
                KEY INTERVIEWS & DISCUSSIONS
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                On the air. On the record.
              </h2>
            </div>
            <div className="font-mono text-xs text-[#0B0A09]/60 uppercase tracking-[0.14em]">
              TELEVISION · RADIO · LIVE STAGE
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {broadcasts.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f4eee3] border border-[#E5DFD5] rounded-[28px] overflow-hidden hover:border-[#2D0891]/40 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <button
                    onClick={() => onPlayVideo(item.videoId)}
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2D0891] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current text-white ml-0.5" />
                    </div>
                  </button>

                  <div className="absolute top-5 left-6 font-mono text-[10px] uppercase tracking-wider text-white bg-black/60 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <h3 className="font-archivo text-2xl font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#0B0A09]/70 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onPlayVideo(item.videoId)}
                      className="text-xs font-mono uppercase tracking-wider text-[#2D0891] hover:text-[#0B0A09] flex items-center gap-1.5 cursor-pointer font-bold"
                    >
                      <span>Watch Segment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          PODCAST SHOWCASE SECTION
      ======================================================== */}
      <section className="py-24 bg-[#f4eee3] border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#2D0891]" />
              <span>THE OFFICIAL PODCAST</span>
            </div>

            <h2 className="font-archivo text-4xl sm:text-5xl lg:text-[64px] font-black leading-[0.95] tracking-[-0.04em] text-[#0B0A09]">
              Greatness, on demand.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#0B0A09]/80 font-normal leading-relaxed">
              Weekly conversations with disruptors, superintendents, and community leaders — distilled into tactical wisdom for the drive, the gym, or the executive table.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="px-4 py-2 rounded-full bg-white border border-[#E5DFD5] text-[#0B0A09] font-mono text-xs font-bold uppercase tracking-wider">
                Apple Podcasts
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-[#E5DFD5] text-[#0B0A09] font-mono text-xs font-bold uppercase tracking-wider">
                Spotify
              </span>
              <span className="px-4 py-2 rounded-full bg-white border border-[#E5DFD5] text-[#0B0A09] font-mono text-xs font-bold uppercase tracking-wider">
                YouTube
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {episodes.map((ep, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-8 shadow-sm border border-[#E5DFD5] flex flex-col justify-between hover:shadow-md transition-all text-[#0B0A09]"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#2D0891] font-bold">
                    {ep.ep}
                  </span>
                  <h3 className="font-archivo text-xl sm:text-2xl font-black text-[#0B0A09] mt-1 mb-2">
                    {ep.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#0B0A09]/75 leading-relaxed">
                    {ep.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      </div>

    </div>
  );
}
