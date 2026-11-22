import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function ShortsPage({ onPlayVideo }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const categories = ["All", "Mindset", "Leadership", "Stage Energy", "Education", "Discipline"];

  const allShorts = [
    { ytId: "MFBatPnXmik", cover: "/images/dr-miller-speaking-audience.jpg", title: "Stop Telling Kids Who They Could Be", subtitle: "Start Showing Who They Were", category: "Education" },
    { ytId: "_VuvPKybCVs", cover: "/images/drpmiller/media-stage-8.jpg", title: "Youth Trauma Is Very Real", subtitle: "The Blueprint for Healing", category: "Education" },
    { ytId: "0yMAjKtCLyw", cover: "/images/dr-miller-walk.jpg", title: "From The Block To Best Seller", subtitle: "Amazon Best Seller Protocol", category: "Mindset" },
    { ytId: "NZIRVc-sbN4", cover: "/images/netroots-stage-1.jpg", title: "Clear Vision & Strong Mission", subtitle: "Turnaround Architecture", category: "Leadership" },
    { ytId: "Zto_HhTY6w0", cover: "/images/dr-miller-stage.jpg", title: "College Graduation Standards", subtitle: "Closing The Expectation Gap", category: "Leadership" },
    { ytId: "E2Z0MO6HdgI", cover: "/images/edceptional-1.jpg", title: "Buffalo Leadership Training", subtitle: "Mastering The Mainstage", category: "Stage Energy" },
    { ytId: "oU5U0V-3fJ0", cover: "/images/edceptional-2.jpg", title: "RACS Urban Turnaround", subtitle: "Charter School Triumph", category: "Education" },
    { ytId: "pOehS2PKpys", cover: "/images/drpmiller/brand-speaking-3.jpg", title: "The Real Standards Protocol", subtitle: "Institutional Accountability", category: "Discipline" },
    { ytId: "hgT9ChJZQY8", cover: "/images/ben-crump.jpg", title: "Expand Youth Opportunity", subtitle: "Beyond Institutional Limits", category: "Education" },
    { ytId: "3DlNOv2w7gI", cover: "/images/tedx-stage.jpg", title: "The Sovereign Mindset", subtitle: "Internal Duality & Power", category: "Mindset" },
    { ytId: "D_VkDL1x3xk", cover: "/images/netroots-stage-2.jpg", title: "Demand Championship Effort", subtitle: "Culture Code for Leaders", category: "Stage Energy" },
    { ytId: "aCGtcX4vpLc", cover: "/images/netroots-stage-3.jpg", title: "No One Is Coming To Save You", subtitle: "Self Mastery & Ownership", category: "Discipline" }
  ];

  const filtered = activeCategory === "All"
    ? allShorts
    : allShorts.filter(s => s.category === activeCategory);

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC SHORTS HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section id="watch" className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        <div id="speeches" className="absolute top-0 left-0" />
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="WNhaIiadvYo" 
          title="Dr. Paul Miller Shorts & Wisdom Reel" 
        />

        {/* Central Stage: Title, Subtitle, Buttons & Filters at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Wisdom Shorts
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            ARENA TURNING POINTS · MORNING MENTAL CONDITIONING · UNFILTERED LEADERSHIP PROTOCOLS
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onPlayVideo('7jXuESXmLlE')}
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>Watch Featured Reel</span>
            </button>

            <a
              href="https://www.youtube.com/@FromtheGuttertoGreatness/shorts"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <span>YouTube Shorts</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#2D0891] text-white font-bold shadow-lg shadow-[#2D0891]/40 scale-105 border border-[#7C3AED]/40'
                    : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

      </section>

      {/* ========================================================
          UNIFIED SHORTS THEATRE (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">
        <section id="shorts" className="py-12 sm:py-16">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {filtered.map((item, idx) => {
                const isHovered = hoveredIdx === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => onPlayVideo(item.ytId)}
                    className="group relative rounded-[24px] overflow-hidden bg-black h-[420px] sm:h-[480px] cursor-pointer border border-[#E5DFD5] hover:border-[#2D0891] hover:shadow-[0_20px_40px_rgba(45,8,145,0.25)] transition-all duration-500 hover:-translate-y-1.5 shadow-md"
                  >
                    {/* Video Player on Hover, or High-Res Cover Image */}
                    {isHovered ? (
                      <div className="absolute inset-0 bg-black overflow-hidden">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${item.ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${item.ytId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
                          title={item.title}
                          className="w-full h-full object-cover scale-[1.38] pointer-events-none filter contrast-105"
                          allow="autoplay; encrypted-media"
                          tabIndex="-1"
                        />
                      </div>
                    ) : (
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                    )}

                    {/* Gradient Vignettes */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/30 pointer-events-none" />

                    {/* Top Status Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                      {isHovered ? (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-white bg-[#2D0891]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 font-bold flex items-center gap-1.5 shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>PLAYING PREVIEW</span>
                        </span>
                      ) : (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 font-semibold">
                          {item.category}
                        </span>
                      )}

                      <span className="font-mono text-[10px] text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full font-medium border border-white/10">
                        {isHovered ? 'CLICK TO ENLARGE' : '0:60'}
                      </span>
                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-5 left-5 right-5 space-y-1.5 text-white pointer-events-none z-10">
                      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 font-semibold">
                        {item.subtitle}
                      </div>
                      <h3 className="font-archivo text-lg sm:text-xl font-bold text-white leading-tight drop-shadow">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Media & Press Library (Target for #media) */}
        <section id="media" className="py-20 bg-white border-t border-b border-[#E2DDD3]">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold">
                  MEDIA & PRESS LIBRARY
                </div>
                <h3 className="font-archivo text-3xl sm:text-4xl font-bold text-[#0B0A09] mt-1">
                  National visibility & media appearances.
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#0B0A09]/60 max-w-md font-light">
                Conversations with Ben Crump, WDKX Radio, national educational leadership panels, and broadcast interviews.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Ben Crump × Charter Champions", role: "Civil Rights & Education Dialogue", tag: "CIVIL RIGHTS FORUM", img: "/images/ben-crump.jpg" },
                { title: "TEDx Albany — We Need to Do Better", role: "Landmark Education Keynote", tag: "TEDX ADDRESS", img: "/images/tedx-stage.jpg" },
                { title: "Netroots Nation Main Stage", role: "Urban Education Reform", tag: "NATIONAL BROADCAST", img: "/images/netroots-stage-1.jpg" }
              ].map((m, i) => (
                <div key={i} className="p-6 rounded-[24px] bg-[#f4eee3] border border-[#E5DFD5] space-y-4 hover:shadow-lg transition-all">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black relative">
                    <img src={m.img} alt={m.title} className="w-full h-full object-cover filter contrast-105" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white font-mono text-[9px] uppercase font-bold tracking-wider">
                      {m.tag}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-archivo text-lg font-bold text-[#0B0A09]">{m.title}</h4>
                    <p className="text-xs text-[#0B0A09]/70 font-light mt-0.5">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Testimonials (Target for #testimonials) */}
        <section id="testimonials" className="py-20 bg-[#0B0A09] text-white">
          <div className="max-w-[1240px] mx-auto px-6 sm:px-12 space-y-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#A78BFA] font-medium">
                AUDIENCE IMPACT
              </div>
              <h3 className="font-archivo text-3xl sm:text-4xl font-bold text-white mt-1">
                Live feedback from educators & executives.
              </h3>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { quote: "Dr. Miller didn’t just deliver a keynote; he electrified our entire leadership conference. His raw authenticity had 1,200 leaders on their feet.", author: "Marcus Holloway", role: "Annual Convention Chair" },
                { quote: "The single most impactful guest speaker we have hosted in a decade. Provided our superintendents with actionable tools still in practice.", author: "Dr. Cynthia Adams", role: "Executive Superintendents Alliance" },
                { quote: "Uncompromising clarity and undeniable stage command. When Dr. Miller takes the microphone, the room doesn't just listen—they transform.", author: "Arthur Sterling", role: "Chief Learning Officer" }
              ].map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#161513] border border-white/10 space-y-4">
                  <p className="font-serif italic text-sm text-white/85 leading-relaxed">“{t.quote}”</p>
                  <div className="pt-2 border-t border-white/10">
                    <div className="font-archivo text-sm font-bold text-white">{t.author}</div>
                    <div className="font-mono text-[10px] text-white/50 uppercase">{t.role}</div>
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
