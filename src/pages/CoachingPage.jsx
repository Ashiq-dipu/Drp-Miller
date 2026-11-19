import React from 'react';
import { ArrowRight, Check, ShieldCheck, Target, Users, BookOpen, School, Award, Sparkles } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function CoachingPage({ onOpenBooking }) {
  const coachingTiers = [
    {
      badge: "BY APPLICATION",
      name: "1:1 Executive Coaching",
      subtitle: "PRIVATE, HIGH-TOUCH ADVISORY",
      desc: "Confidential executive partnership for superintendents, founders, and C-level leaders navigating crisis, turnaround, and exponential growth.",
      features: [
        "Weekly 60-minute strategic advisory calls",
        "Direct private line access to Dr. Miller",
        "Custom 90-day executive transformation roadmap",
        "Quarterly 360 leadership audit & blind-spot diagnostic"
      ],
      btnText: "Apply For 1:1 Coaching",
      isPopular: false
    },
    {
      badge: "QUARTERLY COHORT",
      name: "Leadership Cohort",
      subtitle: "INTENSIVE PEER CONTAINER",
      desc: "Curated 10-leader container for emerging principals and executives building authentic leadership courage, clarity, and execution.",
      features: [
        "Strictly limited to 10 leaders per cohort",
        "Bi-weekly live group masterclass labs",
        "Private executive community & peer accountability",
        "Guest masterclasses with national education reform leaders"
      ],
      btnText: "Join Next Cohort",
      isPopular: true
    },
    {
      badge: "ORGANIZATIONAL EMBED",
      name: "School & Firm Turnaround",
      subtitle: "ON-SITE SYSTEMIC EMBED",
      desc: "Embedded turnaround consulting for school boards, charter management organizations, and corporate teams ready to fix toxic culture.",
      features: [
        "On-site diagnostic culture audit & assessment",
        "Leadership team labs & instructional alignment",
        "Retention, graduation, and performance KPI tracking",
        "Comprehensive culture playbook implementation"
      ],
      btnText: "Inquire Organizational Embed",
      isPopular: false
    }
  ];

  const firmPartnerships = [
    {
      icon: BookOpen,
      category: "FRAMEWORKS IN PRINT",
      title: "Six Books That Rebuild People",
      desc: "From the Gutter to Greatness, We Need To Do Better, The Good Me vs. The Hood Me — the core models codified in print.",
      cta: "Explore Library",
      link: "/books"
    },
    {
      icon: School,
      category: "TURNAROUND FIRM",
      title: "Building Capacities & EDceptional",
      desc: "Hire the advisory firm. We partner directly with school districts and networks on leadership pipelines, instructional coaching, and culture.",
      cta: "Work With The Firm",
      link: "#"
    }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC EXECUTIVE COACHING HERO (BLACK BACKGROUND)
          High-Fashion Oprah/Mainstage Editorial Architecture
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="JgnA7aqqvQc" 
          title="Dr. Paul Miller Executive Advisory - Invest In Yourself" 
        />

        {/* Central Stage: Split Headline with Executive Avatar */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 w-full flex-1 flex flex-col justify-center items-center my-auto">
          
          <h1 className="sr-only">Executive Advisory</h1>

          {/* Main Visual Composition (EXECUTIVE [AVATAR] ADVISORY) */}
          <div className="relative w-full flex items-center justify-center">
            
            {/* Desktop Left Text: "EXECUTIVE" */}
            <div className="hidden lg:block flex-1 text-right pr-4 lg:pr-8 xl:pr-12 select-none pointer-events-none z-10">
              <span className="font-archivo text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none block whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                Executive
              </span>
            </div>

            {/* Dedicated High-Resolution Executive Cutout of Dr. Paul Miller */}
            <div className="relative z-20 shrink-0 mx-auto">
              <img 
                src="/images/coaching-cutout.png" 
                alt="Dr. Paul Miller Executive Advisory" 
                className="h-[280px] sm:h-[360px] md:h-[400px] lg:h-[440px] xl:h-[480px] w-auto object-contain mx-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] filter contrast-105"
                loading="eager"
              />
            </div>

            {/* Desktop Right Text: "ADVISORY" */}
            <div className="hidden lg:block flex-1 text-left pl-4 lg:pl-8 xl:pl-12 select-none pointer-events-none z-10">
              <span className="font-archivo text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-none block whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
                Advisory
              </span>
            </div>

          </div>

          {/* Mobile/Tablet Centered Name */}
          <div className="block lg:hidden text-center mt-4 select-none">
            <div className="font-archivo text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
              Executive Advisory
            </div>
          </div>

          {/* Signature Quote in Crisp White */}
          <div className="mt-5 sm:mt-7 text-center max-w-3xl px-4">
            <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-white font-normal leading-snug drop-shadow-md">
              “Every elite leader has someone in their corner who tells them the uncompromising truth.”
            </p>
          </div>

          {/* Authority Subtitles */}
          <div className="mt-3 sm:mt-4 text-center">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              SUPERINTENDENTS · FOUNDERS · URBAN DISTRICT LEADERS · TURNAROUND CEOS
            </p>
          </div>

          {/* Pill CTAs (Signature Indigo + Protocol Glass Button) */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenBooking('Executive 1:1 Coaching Intake')}
              className="px-8 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <span>Apply for Advisory Roster</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            <a
              href="#advisory-tiers"
              className="px-7 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>View Advisory Protocols</span>
            </a>
          </div>

          {/* Micro Stats Counter */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 font-mono text-xs text-center">
            <div>
              <div className="text-white/50 uppercase text-[10px] font-semibold">CONTAINER</div>
              <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">1:1 & CABINETS</div>
            </div>
            <div>
              <div className="text-white/50 uppercase text-[10px] font-semibold">CREDENTIAL</div>
              <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">ED.D. DOCTORATE</div>
            </div>
            <div>
              <div className="text-white/50 uppercase text-[10px] font-semibold">COHORT CAPACITY</div>
              <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">LIMITED 15</div>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================
          UNIFIED CONTENT BODY (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">

      {/* ========================================================
          3 COACHING CONTAINERS
      ======================================================== */}
      <section id="coaching" className="py-24 bg-white border-b border-[#E2DDD3]">
        <div id="executive" className="relative -top-24" />
        <div id="management" className="relative -top-24" />
        <div id="mentorship" className="relative -top-24" />
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] mb-3 font-bold">
              03 CONTAINERS · DIRECT ENGAGEMENT
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl lg:text-[64px] font-black leading-[0.95] tracking-[-0.04em] text-[#0B0A09]">
              Get a coach. Get a life.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coachingTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative border ${
                  tier.isPopular
                    ? 'bg-[#f4eee3] border-[#2D0891] shadow-xl ring-2 ring-[#2D0891]/20'
                    : 'bg-white border-[#E5DFD5] shadow-sm hover:shadow-lg hover:border-[#0B0A09]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2D0891]">
                      {tier.badge}
                    </span>
                    {tier.isPopular && (
                      <span className="px-3 py-1 rounded-full bg-[#2D0891] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                        MOST POPULAR
                      </span>
                    )}
                  </div>

                  <h3 className="font-archivo text-3xl font-black text-[#0B0A09] tracking-tight mb-1">
                    {tier.name}
                  </h3>
                  <div className="font-mono text-xs text-[#0B0A09]/60 uppercase tracking-wider mb-6 pb-4 border-b border-[#E5DFD5]">
                    {tier.subtitle}
                  </div>

                  <p className="font-sans text-sm text-[#0B0A09]/75 leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-3.5 mb-8">
                    {tier.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs text-[#0B0A09] font-medium leading-snug">
                        <div className="w-4 h-4 rounded-full bg-[#2D0891] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                        </div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E5DFD5]">
                  <button
                    onClick={() => onOpenBooking(tier.name)}
                    className={`w-full py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      tier.isPopular
                        ? 'bg-[#2D0891] hover:bg-[#3D0CB8] text-white shadow-lg shadow-[#2D0891]/30'
                        : 'bg-[#0B0A09] hover:bg-black text-white'
                    }`}
                  >
                    <span>{tier.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          FIRM & EXTENDED ECOSYSTEM
      ======================================================== */}
      <section className="py-24 bg-[#f4eee3] border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="max-w-2xl mb-16">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] mb-3 font-bold">
              THE EXTENDED ECOSYSTEM
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
              Built to scale impact across systems.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {firmPartnerships.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5DFD5] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between hover:border-[#2D0891]/40 hover:shadow-xl transition-all"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#2D0891]/10 border border-[#2D0891]/20 flex items-center justify-center text-[#2D0891]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[#2D0891] font-bold">
                      {item.category}
                    </div>
                    <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#0B0A09]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-8 mt-8 border-t border-[#E5DFD5]">
                    <button
                      onClick={() => onOpenBooking(item.title)}
                      className="px-6 py-3 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>{item.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      </div>

    </div>
  );
}
