import React from 'react';
import { ArrowRight, Compass, Building2, BookOpen, Cpu, School, Shield, ShieldCheck, Award, Sparkles } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function PathsPage({ onOpenBooking }) {
  const initiatives = [
    {
      code: "INITIATIVE · 01",
      icon: BookOpen,
      title: "From the Gutter to Greatness",
      category: "MEMOIR · BLUEPRINT · MOVEMENT",
      desc: "Dr. Miller’s landmark autobiography and 21-day transformation workbook. The foundational literature guiding tens of thousands from trauma to sovereignty.",
      image: "/images/paths/path-gutter.jpg",
      linkText: "Explore Book & Movement",
      url: "https://book.fromtheguttertogreatness.com/"
    },
    {
      code: "INITIATIVE · 02",
      icon: Compass,
      title: "The Good Me / The Hood Me",
      category: "CURRICULUM · YOUTH · DUALITY",
      desc: "A transformative internal-alignment curriculum adopted across 115+ high schools and juvenile diversion programs, helping young leaders govern their inner warrior.",
      image: "/images/paths/path-goodhood.webp",
      linkText: "Access Curriculum",
      url: "https://link.fostio.com/preview/ngCdLeneA3xGmglXgAB4"
    },
    {
      code: "INITIATIVE · 03",
      icon: Building2,
      title: "Building Capacities",
      category: "ORGANIZATIONAL TRANSFORMATION",
      desc: "Executive capacity building and strategic advisory firm partnering directly with school districts, non-profits, and corporate cabinets on culture and retention.",
      image: "/images/paths/path-bc.jpg",
      linkText: "Consulting Services",
      url: "#"
    },
    {
      code: "INITIATIVE · 04",
      icon: School,
      title: "EDceptional Foundation",
      category: "SYSTEMIC EQUITY · RETENTION",
      desc: "Developing and retaining exceptional school leaders of color. Providing executive mentorship pipelines, leadership cohorts, and district turnaround embeds.",
      image: "/images/paths/path-gutterbooks.jpg",
      linkText: "Visit Foundation",
      url: "https://edceptional.org/"
    },
    {
      code: "INITIATIVE · 05",
      icon: Cpu,
      title: "S.T.R.E.A.M. Movement",
      category: "STEM · LITERACY · INNOVATION",
      desc: "Hands-on experiential learning programs that get urban students building, engineering, reading, and problem-solving like 21st-century technological innovators.",
      image: "/images/paths/path-stream.jpg",
      linkText: "Explore Program",
      url: "#"
    },
    {
      code: "INITIATIVE · 06",
      icon: School,
      title: "Urbane Education",
      category: "SCHOOLS · SYSTEMS · EQUITY",
      desc: "Instructional leadership architecture and charter design built specifically for urban classrooms and the courageous administrators who lead them.",
      image: "/images/paths/path-urbane.jpg",
      linkText: "View Consulting",
      url: "#"
    },
    {
      code: "INITIATIVE · 07",
      icon: Shield,
      title: "The Educated Black Man",
      category: "CULTURE · LEGACY · BROTHERHOOD",
      desc: "A cultural coalition lifting the standards, untold narratives, and systemic achievements of educated Black men transforming civic spaces nationwide.",
      image: "/images/paths/path-ebm.jpg",
      linkText: "Learn More",
      url: "#"
    }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC IMPACT PATHWAYS HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="VN6sMuKPcVA" 
          title="Dr. Paul Miller - STREAM Education Services & Pathways" 
        />

        {/* Central Stage: Title, Subtitle, 2 Buttons & Stats at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Impact Pathways
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            FOUNDATIONS · URBAN EDUCATION COALITIONS · REENTRY ALLIANCES · YOUTH LABS
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#pathways-grid"
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <span>Explore All 7 Pathways</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>

            <button
              onClick={() => onOpenBooking('Institutional Initiative Partnership')}
              className="px-7 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Partner With An Initiative</span>
            </button>
          </div>

          {/* Micro Stats Counter */}
          <div className="pt-6 border-t border-white/15 w-full">
            <div className="grid grid-cols-3 gap-6 font-mono text-xs text-center">
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">INITIATIVES</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">7 PATHS</div>
              </div>
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">YOUTH REACHED</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">50,000+</div>
              </div>
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">COMMUNITY COALITIONS</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">18 STATES</div>
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
          PATHWAYS GRID
      ======================================================== */}
      <section id="pathways-grid" className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f4eee3] border border-[#E5DFD5] rounded-[28px] overflow-hidden flex flex-col justify-between hover:border-[#2D0891]/40 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-black relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-5 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 font-mono text-[10px] text-white uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5 text-[#2D0891]" />
                      <span>{item.code}</span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-[#2D0891] mb-2 font-bold">
                        {item.category}
                      </div>
                      <h3 className="font-archivo text-2xl font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-[#0B0A09]/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#E5DFD5]">
                      {item.url.startsWith('http') ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2D0891] hover:text-[#0B0A09] transition-colors font-bold"
                        >
                          <span>{item.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onOpenBooking(item.title)}
                          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#2D0891] hover:text-[#0B0A09] transition-colors font-bold cursor-pointer"
                        >
                          <span>{item.linkText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
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
