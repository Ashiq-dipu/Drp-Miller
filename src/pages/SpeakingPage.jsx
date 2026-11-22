import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Mic2, Star, Shield, ArrowLeft, Calendar, MapPin, Users, Award } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function SpeakingPage({ onOpenBooking, onPlayVideo }) {
  const [activeStageIdx, setActiveStageIdx] = useState(0);

  const talks = [
    {
      code: "PLATFORM · 01",
      title: "From the Gutter to Greatness™",
      tagline: "TURNING YOUR SETBACKS INTO SETUPS",
      desc: "Transform adversity into purpose, perseverance, resilience, personal growth, and leadership. Everyone has a gutter—an experience, obstacle, wound, or limiting belief—but the gutter does not have to become the destination.",
      outcomes: [
        "Overcoming adversity, healing, and discovering your superpower",
        "Turning pain into power and setbacks into setups",
        "From the Block to the Boardroom: sovereign leadership roadmap"
      ],
      idealFor: "Corporate Conferences, Colleges, Universities & Commencements"
    },
    {
      code: "PLATFORM · 02",
      title: "Championship Mindset™",
      tagline: "SHIFT YOUR THINKING. CHANGE YOUR BEHAVIOR. ELEVATE YOUR RESULTS.",
      desc: "Help people challenge limiting beliefs, overcome learned helplessness, develop discipline, and build habits that support sustainable performance in high-pressure environments.",
      outcomes: [
        "The WAGAL principle (Welcome Challenges, Anticipate Obstacles, Greatness from Effort, Appreciate Criticism, Let Others Inspire)",
        "Reverse the Curse: turning temporary failure into strategic improvement",
        "The 24-hour no-complaining challenge and positive affirmations"
      ],
      idealFor: "Corporate Teams, Sales Organizations, Athletes & Leadership Summits"
    },
    {
      code: "PLATFORM · 03",
      title: "Leadership Authenticity™",
      tagline: "BETTER PEOPLE BECOME BETTER LEADERS",
      desc: "Help people understand themselves before attempting to lead others. Leadership requires more than a position—it requires self-awareness, emotional intelligence, trust, consistency, and the ability to develop people.",
      outcomes: [
        "Before I Can Do for You, I Must Do for Me: self-leadership first",
        "Were–Are–Becoming leadership assessments and values alignment",
        "Leadership authenticity audits to build credibility and trust"
      ],
      idealFor: "C-Suite Executives, Superintendents, Managers & Emerging Leaders"
    },
    {
      code: "PLATFORM · 04",
      title: "We Need to Do Better™",
      tagline: "BUILDING PEOPLE, CULTURES, AND SYSTEMS THAT PRODUCE RESULTS",
      desc: "Move organizations beyond good intentions toward strong relationships, clear expectations, effective instruction or service delivery, evidence-based improvement, and shared accountability.",
      outcomes: [
        "Featured Keynote: Education Is the New Form of Civil Rights",
        "Four Pillars: Relationships, Quality Delivery, Data Use, and Accountability",
        "Moving systems from good intentions to measurable ~95% outcomes"
      ],
      idealFor: "School Districts, Educational Conferences, Universities & Civic Orgs"
    },
    {
      code: "PLATFORM · 05",
      title: "The Good Me and The Hood Me™",
      tagline: "WIN THE BATTLE WITHIN",
      desc: "Examine the internal struggle between purpose and pressure, discipline and impulse, accountability and excuses, and intentional leadership versus emotional reaction.",
      outcomes: [
        "Corporate Adaptation: The Leadership Battle Within",
        "Youth Adaptation: Win the Battle Within",
        "Mastering emotional regulation, decision-making, and brotherhood"
      ],
      idealFor: "Middle & High Schools, Universities, Mentoring Initiatives & Corporate Teams"
    }
  ];

  const stages = [
    {
      title: "TEDx Albany Main Stage",
      desc: "Delivering the viral address 'We Need to Do Better' to an auditorium of 1,200+ educators.",
      image: "/images/tedx-stage.jpg"
    },
    {
      title: "Netroots Nation Arena Keynote",
      desc: "Keynote address on charter excellence, youth mobilization, and civic transformation.",
      image: "/images/drpmiller/media-netroots1.jpg"
    },
    {
      title: "Oxford University & Congressional Black Caucus",
      desc: "Delivering research-backed keynotes on minority male academic achievement and pipeline design.",
      image: "/images/drpmiller/media-stage-7.jpg"
    },
    {
      title: "Ben Crump × Charter Champions",
      desc: "Collaboration on educational justice, civil rights, and dismantling institutional barriers.",
      image: "/images/drpmiller/ben-crump.jpg"
    }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC MAINSTAGE KEYNOTE HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="CneedVA6X4k" 
          title="Dr. Paul Miller Keynote Mainstage Speech" 
        />

        {/* Central Stage: Title, Subtitle & 2 Buttons all at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Mainstage Keynotes
          </h1>

          {/* Subtitle / Venue Audience Text */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            ARENAS · STATE CONVENTIONS · DISTRICT CONVOCATIONS · EXECUTIVE RETREATS
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <span>Check Keynote Availability</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>

            <button
              onClick={() => onPlayVideo('7jXuESXmLlE')}
              className="px-8 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm hover:scale-105 active:scale-95"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-black text-black ml-0.5" />
              </div>
              <span>Watch Stage Reel</span>
            </button>
          </div>

        </div>

      </section>

      {/* ========================================================
          UNIFIED CONTENT BODY (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">

      {/* ========================================================
          SIGNATURE KEYNOTE CATALOG (5 PILLARS)
      ======================================================== */}
      <section id="keynotes" className="py-24 bg-[#f4eee3] border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
                Topics that move a room from inspiration to action.
              </h2>
            </div>
            <div className="font-mono text-xs text-[#0B0A09]/60 uppercase tracking-[0.14em]">
              CUSTOMIZED TO YOUR SUMMIT THEME · 45–90 MIN SESSIONS
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {talks.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5DFD5] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between hover:border-[#2D0891]/40 hover:shadow-xl transition-all group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#2D0891] font-bold">
                      {t.code}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#0B0A09]/60 bg-[#f4eee3] px-3 py-1 rounded-full border border-[#E5DFD5]">
                      45–90 MINS
                    </span>
                  </div>

                  <div>
                    <h3 className="font-archivo text-2xl sm:text-3xl font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors">
                      {t.title}
                    </h3>
                    <div className="font-mono text-xs text-[#0B0A09]/60 tracking-wider mt-1 uppercase font-semibold">
                      {t.tagline}
                    </div>
                  </div>

                  <p className="font-sans text-sm text-[#0B0A09]/75 leading-relaxed">
                    {t.desc}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-[#E5DFD5]">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#0B0A09]/50 font-bold">
                      KEY AUDIENCE TAKEAWAYS:
                    </div>
                    {t.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B0A09]/85">
                        <CheckCircle2 className="w-4 h-4 text-[#2D0891] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-[#E5DFD5] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#0B0A09]/50 uppercase font-medium">
                    {t.idealFor}
                  </span>
                  <button
                    onClick={() => onOpenBooking(t.title)}
                    className="px-5 py-2.5 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Book Keynote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          SIGNATURE FRAMEWORKS & DEVELOPMENT TOOLS (TARGET FOR #frameworks)
      ======================================================== */}
      <section id="frameworks" className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2D0891]" />
              <span>SIGNATURE FRAMEWORKS & DEVELOPMENT TOOLS</span>
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
              Practical tools that change behavior.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#0B0A09]/75 font-light leading-relaxed">
              Every keynote is backed by repeatable frameworks audiences can apply the moment they leave the room.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tool: "TOOL 01",
                name: "Championship Mindset",
                desc: "A champion leans into fear, shows up even when motivation is low, develops mental toughness, sees possibilities, prioritizes progress over perfection, and approaches success as a marathon rather than a sprint."
              },
              {
                tool: "TOOL 02",
                name: "WAGAL Framework",
                desc: "W: Welcome All Challenges · A: Anticipate Obstacles · G: Greatness Comes from Effort · A: Appreciate Criticism · L: Let Others Inspire You."
              },
              {
                tool: "TOOL 03",
                name: "Reverse the Curse",
                desc: "Challenge the tendency to turn temporary failure into permanent identity. Instead of believing 'I failed because I'm incapable,' examine preparation, effort, strategy, support, and opportunities for improvement."
              },
              {
                tool: "TOOL 04",
                name: "Self-Leadership Principle",
                desc: "Before I Can Do for You, I Must Do for Me. Self-leadership precedes effective leadership of others. Understand your identity, beliefs, wounds, and values before attempting to influence a team."
              },
              {
                tool: "TOOL 05",
                name: "The Good Me vs. The Hood Me",
                desc: "The Good Me represents intentional choices, purpose, discipline, compassion, and accountability. The Hood Me represents reactive decisions shaped by fear, ego, pressure, or anger. Strengthen self-awareness to command choices."
              },
              {
                tool: "TOOL 06",
                name: "Four Pillars of Turnaround",
                desc: "1. Building Relationships · 2. Delivery of Quality Instruction/Service · 3. Usage of Data to Improve · 4. Shared Accountability for All Stakeholders."
              }
            ].map((fw, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-[24px] bg-[#f4eee3] border border-[#E5DFD5] space-y-3 hover:border-[#2D0891]/40 transition-all hover:shadow-lg"
              >
                <span className="font-mono text-xs font-bold text-[#2D0891]">
                  {fw.tool}
                </span>
                <h3 className="font-archivo text-xl font-bold text-[#0B0A09]">
                  {fw.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#0B0A09]/75 font-light leading-relaxed">
                  {fw.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          ENGAGEMENT PROCESS (TARGET FOR #engagement)
      ======================================================== */}
      <section id="engagement" className="py-24 bg-[#0B0A09] text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#A78BFA] font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
              <span>FACILITATION & AUDIENCE INTERACTION</span>
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl font-bold text-white tracking-tight">
              How Dr. Miller engages audiences.
            </h2>
            <p className="font-sans text-sm sm:text-base text-white/70 font-light leading-relaxed">
              Dr. Miller's facilitation approach includes original spoken word, storytelling, humor, audience participation, quick writes, partner discussions, and practical commitments.
            </p>
          </div>

          <div className="grid sm:grid-cols-5 gap-4">
            {[
              { step: "01", label: "Hear It", desc: "Original spoken word and storytelling that command immediate attention." },
              { step: "02", label: "See Yourself in It", desc: "Relatable moments that break down defensive barriers and illuminate blind spots." },
              { step: "03", label: "Discuss It", desc: "Partner discussions and scenario analysis turning individual insight into team ownership." },
              { step: "04", label: "Apply It", desc: "Diagnostic tools and values alignment exercises mapped directly to organizational goals." },
              { step: "05", label: "Act on It", desc: "Real-world commitments and accountability systems that create lasting turning points." }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#161513] border border-white/10 space-y-2 text-center">
                <div className="font-mono text-xs text-[#A78BFA] font-bold">{p.step}</div>
                <div className="font-archivo text-base font-bold text-white">{p.label}</div>
                <p className="text-xs text-white/60 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURED TEDX BANNER
      ======================================================== */}
      <section className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold">
              LANDMARK ADDRESS
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.0] tracking-[-0.03em] text-[#0B0A09]">
              TEDx Albany: We Need to Do Better.
            </h2>
            <p className="font-sans text-base text-[#0B0A09]/80 font-normal leading-relaxed">
              Dr. Paul Miller’s landmark TED talk is an uncompromising call to action for educators, school boards, and executive leaders to discard excuses and rebuild the mindset of an entire generation.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onPlayVideo('m-HJpWobMiU')}
                className="px-6 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#2D0891]/25"
              >
                <Play className="w-3.5 h-3.5 fill-current text-white" />
                <span>Watch Full TEDx Address (18 Min)</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[28px] overflow-hidden shadow-2xl border border-black/10 aspect-[16/10] bg-black relative group">
              <img
                src="/images/tedx-stage.jpg"
                alt="Dr. Paul Miller TEDx"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <button
                onClick={() => onPlayVideo('m-HJpWobMiU')}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                aria-label="Play video"
              >
                <div className="w-16 h-16 rounded-full bg-[#2D0891] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current text-white ml-0.5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STAGES SHOWCASE
      ======================================================== */}
      <section className="py-24 bg-[#f4eee3] border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] mb-3 font-bold">
                CREDENTIALS & AUDIENCES
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                Honored nationally. Booked globally.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStageIdx((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                className="w-10 h-10 rounded-full border border-[#0B0A09]/20 hover:border-[#0B0A09] text-[#0B0A09] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous stage"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveStageIdx((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                className="w-10 h-10 rounded-full border border-[#0B0A09]/20 hover:border-[#0B0A09] text-[#0B0A09] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next stage"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stg, idx) => (
              <div
                key={idx}
                className={`rounded-[24px] overflow-hidden bg-white border transition-all duration-300 shadow-sm ${
                  activeStageIdx === idx
                    ? 'border-[#2D0891] ring-2 ring-[#2D0891]/20 scale-[1.02]'
                    : 'border-[#E5DFD5] hover:border-[#0B0A09]/30'
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={stg.image}
                    alt={stg.title}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#2D0891] font-bold">
                    STAGE {String(idx + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
                  </div>
                  <h3 className="font-archivo text-lg font-bold text-[#0B0A09]">
                    {stg.title}
                  </h3>
                  <p className="font-sans text-xs text-[#0B0A09]/70 leading-relaxed">
                    {stg.desc}
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
