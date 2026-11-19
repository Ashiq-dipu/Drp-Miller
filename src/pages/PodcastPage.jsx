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
          High-Fashion Oprah/Mainstage Broadcast Architecture
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="2nkweat2YDU" 
          title="Dr. Paul Miller The Official Podcast Studio" 
        />

        {/* Central Stage: Split Headline with Podcast Artwork */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 w-full flex-1 flex flex-col justify-center items-center my-auto">
          
          {/* Main Visual Composition (THE OFFICIAL [PODCAST ARTWORK] PODCAST) */}
          <div className="relative w-full flex items-center justify-center">
            
            {/* Desktop Left Text: "THE OFFICIAL" */}
            <div className="hidden lg:block flex-1 text-right pr-6 xl:pr-12 select-none pointer-events-none z-10">
              <span className="font-archivo text-5xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-[-0.03em] text-white leading-none block drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                The Official
              </span>
            </div>

            {/* High-Resolution Interactive Podcast Video Reel Showcase */}
            <div 
              onClick={() => onPlayVideo('7jXuESXmLlE')}
              className="relative z-20 shrink-0 mx-auto w-44 sm:w-56 md:w-64 aspect-square rounded-[28px] overflow-hidden border-2 border-white/40 ring-4 ring-[#2D0891]/40 shadow-[0_25px_50px_rgba(0,0,0,0.95)] cursor-pointer group hover:scale-105 transition-all duration-300 bg-black"
            >
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/drpmiller/podcast-cover.jpg"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/videos/hero-reel.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none" />
              
              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2D0891]/80 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#2D0891] transition-all duration-300 ring-4 ring-white/25">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white ml-0.5" />
                </div>
              </div>

              {/* Bottom Episode Info & Audio Wave Indicator */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none flex items-end justify-between">
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-white/80 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LATEST EPISODE 84
                  </div>
                  <div className="font-archivo text-xs sm:text-sm font-bold text-white drop-shadow">The Sovereign Mindset</div>
                </div>
                {/* Audio visualizer wave */}
                <div className="flex items-end gap-0.5 h-3.5 mb-1 opacity-80 group-hover:opacity-100">
                  <span className="w-0.5 h-2 bg-white rounded-full animate-pulse" />
                  <span className="w-0.5 h-3.5 bg-[#7C3AED] rounded-full animate-pulse [animation-delay:150ms]" />
                  <span className="w-0.5 h-2.5 bg-white rounded-full animate-pulse [animation-delay:300ms]" />
                  <span className="w-0.5 h-1.5 bg-[#7C3AED] rounded-full animate-pulse [animation-delay:450ms]" />
                </div>
              </div>
            </div>

            {/* Desktop Right Text: "PODCAST" */}
            <div className="hidden lg:block flex-1 text-left pl-6 xl:pl-12 select-none pointer-events-none z-10">
              <span className="font-archivo text-5xl xl:text-7xl 2xl:text-8xl font-black uppercase tracking-[-0.03em] text-white leading-none block drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                Podcast
              </span>
            </div>

          </div>

          {/* Mobile/Tablet Centered Name */}
          <div className="block lg:hidden text-center mt-3 select-none">
            <h1 className="font-archivo text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              The Official Podcast
            </h1>
          </div>

          {/* Signature Quote in Crisp White */}
          <div className="mt-5 sm:mt-7 text-center max-w-3xl px-4">
            <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-white font-normal leading-snug drop-shadow-md">
              “Uncompromising conversations on turnaround leadership, personal sovereignty, and building institutions that outlive you.”
            </p>
          </div>

          {/* Authority Subtitles */}
          <div className="mt-3 sm:mt-4 text-center">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              FROM THE GUTTER TO GREATNESS WITH DR. PAUL MILLER · DROPS EVERY TUESDAY 6AM EST
            </p>
          </div>

          {/* Platform Badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://podcasts.apple.com/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-bold shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40"
            >
              <Headphones className="w-4 h-4 text-white" />
              <span>Apple Podcasts</span>
            </a>

            <a
              href="https://open.spotify.com/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-bold backdrop-blur-sm"
            >
              <Radio className="w-4 h-4 text-white" />
              <span>Spotify</span>
            </a>

            <a
              href="https://www.youtube.com/@drpmiller"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 font-bold backdrop-blur-sm"
            >
              <Play className="w-4 h-4 text-white" />
              <span>YouTube Video</span>
            </a>
          </div>

          {/* Micro Stats Counter */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 font-mono text-xs text-center">
            <div>
              <div className="text-white/50 uppercase text-[10px] font-semibold">EPISODES ARCHIVE</div>
              <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">84+ SHOWS</div>
            </div>
            <div>
              <div className="text-white/50 uppercase text-[10px] font-semibold">CADENCE</div>
              <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">EVERY TUESDAY</div>
            </div>
            <div>
              <div className="text-white/50 uppercase text-[10px] font-semibold">DISTRIBUTION</div>
              <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">NATIONWIDE</div>
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
