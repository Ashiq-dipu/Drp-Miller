import React, { useRef, useEffect } from 'react';
import { Play, Radio, Headphones, Clock, ArrowRight, Award } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function PodcastPage({ onPlayVideo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);
  const episodes = [
    {
      ep: "EP · 084",
      title: "Why Your Identity is Your Ceiling",
      tagline: "REPROGRAMMING THE SUBCONSCIOUS PROTOCOL",
      duration: "48 MIN",
      date: "OCTOBER 2026",
      guest: "SOLO MASTERCLASS WITH DR. PAUL MILLER",
      desc: "Dr. Miller breaks down how unexamined childhood narratives dictate executive performance and the step-by-step diagnostic audit to break free.",
      videoId: "7jXuESXmLlE"
    },
    {
      ep: "EP · 083",
      title: "Leading Schools That Defy ZIP Codes",
      tagline: "THE GREEN TECH 95% GRADUATION BLUEPRINT",
      duration: "54 MIN",
      date: "SEPTEMBER 2026",
      guest: "FEATURING FELLOW CHARTER CEOS",
      desc: "An unflinching breakdown of how Green Tech Charter achieved ~95% graduation rates in an urban district where public high schools averaged under 50%.",
      videoId: "m-HJpWobMiU"
    },
    {
      ep: "EP · 082",
      title: "The Good Me vs. The Hood Me: Live Masterclass",
      tagline: "INTERNAL DUALITY & EXECUTIVE SOVEREIGNTY",
      duration: "62 MIN",
      date: "SEPTEMBER 2026",
      guest: "LIVE AUDIENCE Q&A IN BALTIMORE",
      desc: "A raw exploration of internal warfare. How leaders can harness their raw survival instincts without being governed by defensive anger.",
      videoId: "7jXuESXmLlE"
    },
    {
      ep: "EP · 081",
      title: "Civil Rights, Education & Power",
      tagline: "HISTORIC SIT-DOWN DISCUSSION",
      duration: "42 MIN",
      date: "AUGUST 2026",
      guest: "SPECIAL GUEST: ATTY. BEN CRUMP",
      desc: "An urgent dialogue exploring charter schools as modern civil rights vehicles and the urgent legal imperative to close the racial literacy divide.",
      videoId: "7jXuESXmLlE"
    },
    {
      ep: "EP · 080",
      title: "The 21-Day Mental Reset",
      tagline: "HABITS, BOUNDARIES & EXECUTING UNDER FIRE",
      duration: "38 MIN",
      date: "AUGUST 2026",
      guest: "SOLO INTENSIVE",
      desc: "Actionable tactical habits to regain control when stress, institutional politics, or personal exhaustion threaten to derail your leadership mission.",
      videoId: "7jXuESXmLlE"
    }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC PODCAST HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-12 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="2nkweat2YDU" 
          title="Dr. Paul Miller The Official Podcast Studio" 
        />

        {/* Central Content Box: Title, 3 Buttons & Stats all at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-8">
          
          {/* Main Title */}
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#F2BD42] font-semibold block mb-3">
              FROM THE GUTTER TO GREATNESS
            </span>
            <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              The Official Podcast
            </h1>
          </div>

          {/* 3 Platform Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://podcasts.apple.com/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#121212] border border-[#B345FA]/50 hover:border-[#B345FA] hover:bg-[#B345FA]/15 text-white font-archivo font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 group"
            >
              <Headphones className="w-4 h-4 text-[#B345FA] group-hover:scale-110 transition-transform" />
              <span>Apple Podcasts</span>
            </a>

            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#121212] border border-[#1DB954]/50 hover:border-[#1DB954] hover:bg-[#1DB954]/15 text-white font-archivo font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 group"
            >
              <Radio className="w-4 h-4 text-[#1DB954] group-hover:scale-110 transition-transform" />
              <span>Spotify</span>
            </a>

            <a
              href="https://www.youtube.com/@thedrpaulmiller"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#121212] border border-[#FF0000]/50 hover:border-[#FF0000] hover:bg-[#FF0000]/15 text-white font-archivo font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 group"
            >
              <Play className="w-4 h-4 text-[#FF0000] fill-current group-hover:scale-110 transition-transform" />
              <span>YouTube Video</span>
            </a>
          </div>

          {/* Micro Stats Row: EPISODES ARCHIVE 84+ SHOWS, CADENCE EVERY TUESDAY, DISTRIBUTION NATIONWIDE */}
          <div className="w-full pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-8 sm:gap-16 font-mono text-center">
            <div>
              <div className="text-white/60 uppercase text-[11px] font-semibold tracking-wider">EPISODES ARCHIVE</div>
              <div className="font-archivo text-xl sm:text-2xl font-black text-white mt-1">84+ SHOWS</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div>
              <div className="text-white/60 uppercase text-[11px] font-semibold tracking-wider">CADENCE</div>
              <div className="font-archivo text-xl sm:text-2xl font-black text-white mt-1">EVERY TUESDAY</div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div>
              <div className="text-white/60 uppercase text-[11px] font-semibold tracking-wider">DISTRIBUTION</div>
              <div className="font-archivo text-xl sm:text-2xl font-black text-white mt-1">NATIONWIDE</div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          UNIFIED CONTENT BODY (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">

      {/* ========================================================
          EPISODES ARCHIVE
      ======================================================== */}
      <section className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] mb-3 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D0891]" />
                <span>EPISODE ARCHIVE</span>
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                Recent Drops & Deep Dives
              </h2>
            </div>
            <div className="font-mono text-xs text-[#0B0A09]/60 uppercase tracking-[0.14em]">
              UPDATED EVERY TUESDAY
            </div>
          </div>

          <div className="space-y-6">
            {episodes.map((ep, idx) => (
              <div
                key={idx}
                className="bg-[#f4eee3] border border-[#E5DFD5] hover:border-[#2D0891]/40 hover:shadow-xl rounded-[28px] p-8 sm:p-10 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 group"
              >
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D0891] font-bold">
                      {ep.ep}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#0B0A09]/30" />
                    <span className="font-mono text-xs text-[#0B0A09]/60 uppercase tracking-wider flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#2D0891]" />
                      <span>{ep.duration}</span>
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#0B0A09]/30" />
                    <span className="font-mono text-xs text-[#0B0A09]/60 uppercase tracking-wider font-medium">
                      {ep.date}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-archivo text-2xl sm:text-3xl font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors">
                      {ep.title}
                    </h3>
                    <div className="font-mono text-xs text-[#0B0A09]/60 tracking-wider uppercase mt-1 font-semibold">
                      {ep.tagline}
                    </div>
                  </div>

                  <p className="font-sans text-sm text-[#0B0A09]/75 leading-relaxed">
                    {ep.desc}
                  </p>

                  <div className="font-mono text-xs text-[#2D0891] font-bold">
                    {ep.guest}
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-[#E5DFD5]">
                  <button
                    onClick={() => onPlayVideo(ep.videoId)}
                    className="px-6 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#2D0891]/20 hover:scale-105 active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                    <span>Listen / Watch</span>
                  </button>
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
