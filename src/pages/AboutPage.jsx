import React from 'react';
import { ArrowRight, Award, BookOpen, GraduationCap, Users, Play, Shield, Quote, Sparkles, MapPin } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function AboutPage({ onOpenBooking, onPlayVideo }) {
  const highlights = [
    {
      icon: GraduationCap,
      badge: "ACADEMIC TURNAROUND",
      title: "Charter School Architect",
      desc: "Founder of Green Tech Charter High School, transforming urban graduation rates from below 40% to ~95% college matriculation."
    },
    {
      icon: Award,
      badge: "CIVIC EXCELLENCE",
      title: "Presidential Lifetime Award",
      desc: "Recognized for 26+ years of dedicated service to American public education and youth mentorship."
    },
    {
      icon: BookOpen,
      badge: "AUTHORSHIP",
      title: "6x Published Works",
      desc: "Author of From the Gutter to Greatness, We Need to Do Better, and nationwide leadership curricula."
    },
    {
      icon: Users,
      badge: "GLOBAL HEADLINER",
      title: "Over 1,200 Audiences",
      desc: "Keynotes delivered across the Congressional Black Caucus, Oxford University, and Fortune 500 conventions."
    }
  ];

  const timeline = [
    {
      year: "1998",
      title: "Classroom Educator & Youth Advocate",
      location: "Rochester, NY",
      desc: "Began frontline educational work in Rochester inner-city schools, developing intervention models that broke systemic barriers."
    },
    {
      year: "2008",
      title: "Founder & CEO, Green Tech Charter",
      location: "Albany, NY",
      desc: "Built Albany's landmark charter high school for young men, taking historic graduation rates from under 40% to ~95%."
    },
    {
      year: "2018",
      title: "National Memoir & Curricula Release",
      location: "Nationwide",
      desc: "Published From the Gutter to Greatness, sparking an international leadership movement across school systems."
    },
    {
      year: "2024–PRESENT",
      title: "Chief Academic Officer & Doctoral Faculty",
      location: "St. John Fisher University",
      desc: "Training aspiring superintendents and school district executives while leading turnaround initiatives."
    }
  ];

  const distinctions = [
    { label: "CIVIC HONOR", value: "Key to New York City", detail: "Awarded for exceptional service to urban education" },
    { label: "STATE RECOGNITION", value: "Key to Albany, NY", detail: "Honored for founding Green Tech Charter High School" },
    { label: "CIVILIAN CITATION", value: "Presidential Lifetime Award", detail: "Certified for over 26 years of public & community leadership" },
    { label: "ACADEMIC CREDENTIAL", value: "Ed.D. Educational Leadership", detail: "Doctoral research in systemic urban school reform" }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC ABOUT HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="iCu4SGD_Y24" 
          title="Dr. Paul Miller TEDx Albany - We Need to Do Better" 
        />

        {/* Central Stage: Title, Subtitle, 2 Buttons & Stats at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Dr. Paul Miller
          </h1>

          {/* Subtitle / Credentials Text */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            PRESIDENTIAL LIFETIME AWARD HONOREE • 6X PUBLISHED AUTHOR • URBAN SUPERINTENDENT • KEYNOTE HEADLINER
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#bio"
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <span>Explore The Journey</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>

            <button
              onClick={() => onPlayVideo('m-HJpWobMiU')}
              className="px-7 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>Watch Landmark TEDx</span>
            </button>
          </div>

          {/* Micro Stats Bar on Hero Floor */}
          <div className="pt-6 border-t border-white/15 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
              <div className="space-y-0.5">
                <div className="text-white/50 uppercase text-[10px] font-semibold tracking-wider">FIELD LEADERSHIP</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white">26+ YEARS</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-white/50 uppercase text-[10px] font-semibold tracking-wider">GREEN TECH CHARTER</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white">~95% GRAD</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-white/50 uppercase text-[10px] font-semibold tracking-wider">GLOBAL AUDIENCES</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white">450K+</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-white/50 uppercase text-[10px] font-semibold tracking-wider">VOLUMES IN PRINT</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white">6 BOOKS</div>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* ========================================================
          2. UNIFIED CONTENT BODY (#f4eee3 BACKGROUND THROUGHOUT)
          Cohesive, calm, elegant cream background without zebra-striping
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">
        
        {/* Story / Biography Section */}
        <section id="bio" className="py-24 sm:py-32 border-b border-[#E5DFD5]">
          <div id="about" className="relative -top-24" />
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0B0A09]/15 bg-white font-mono text-xs uppercase tracking-wider text-[#0B0A09] font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#0B0A09]" />
                  <span>BIOGRAPHY · FROM SURVIVAL TO STANDARD-BEARER</span>
                </div>

                <h2 className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.0] tracking-[-0.03em] text-[#0B0A09]">
                  From the projects of Rochester to executive leadership.
                </h2>

                <p className="font-sans text-xl text-[#0B0A09]/80 font-light leading-relaxed">
                  Leadership wasn't taught in a boardroom. It was forged on the unforgiving streets of Rochester, New York.
                </p>

                <div className="space-y-4 text-[#0B0A09]/70 font-normal text-sm sm:text-base leading-relaxed">
                  <p>
                    Dr. Paul Miller is a transformational leadership and resilience speaker, bestselling author, former CEO, educator, professor, coach, and advocate for educational opportunity and community empowerment.
                  </p>
                  <p>
                    His journey began in the projects of Rochester, New York, where he grew up in poverty in a single-parent household. His mother was white, and his biological father was Puerto Rican and Black. His childhood exposed him to father absence, violence, economic hardship, and limited opportunity.
                  </p>
                  <p>
                    Rather than allowing those circumstances to define his destination, he developed a mindset centered on perseverance, education, discipline, mentorship, and personal responsibility. He went on to become a college athlete, teacher, coach, assistant principal, principal, school reform leader, CEO of Green Tech Charter Schools (~95% graduation rate), author, and national speaker.
                  </p>
                  <p className="font-serif italic text-base sm:text-lg text-[#0B0A09] pt-2 border-l-2 border-[#2D0891] pl-4">
                    “My life could have been my excuse, but I turned it into my reason.”
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenBooking?.()}
                    className="px-7 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-xl shadow-[#2D0891]/25 hover:scale-[1.02]"
                  >
                    <span>Request Keynote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>

                  <button
                    onClick={() => onPlayVideo('7jXuESXmLlE')}
                    className="px-6 py-3.5 rounded-full border border-[#0B0A09]/20 hover:border-[#0B0A09] hover:bg-black/5 text-[#0B0A09] font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#0B0A09]" />
                    <span>Watch Turning Point Reel</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-[32px] overflow-hidden bg-white border border-[#E5DFD5] shadow-2xl relative group aspect-[4/5]">
                  <img
                    src="/images/dr-miller-walk.jpg"
                    alt="Dr. Paul Miller Executive Portrait"
                    className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/30 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white">
                    <Quote className="w-6 h-6 text-white/80 mb-2" />
                    <p className="font-serif italic text-sm sm:text-base text-white leading-relaxed">
                      “We didn't just build a school; we dismantled an excuse. Every child has greatness locked inside them.”
                    </p>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-white/70 mt-3 font-semibold">
                      DR. PAUL MILLER, ED.D. · CAO & FOUNDER
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section (Target for #mission) */}
        <section id="mission" className="py-24 sm:py-32 border-b border-[#E5DFD5] bg-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="max-w-3xl mb-16 space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#2D0891] font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D0891]" />
                <span>MY MISSION, VISION & SPEAKER GOALS</span>
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                The work behind the words.
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#0B0A09]/75 font-light leading-relaxed">
                Transforming how people think, lead, learn, and work together — and building systems that create lasting opportunities for future generations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-[28px] bg-[#F5EFE6] border border-[#E5DFD5] space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#2D0891] font-bold">
                  MY MISSION
                </div>
                <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                  To create sustainable change for communities that look like me.
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#0B0A09]/80 font-light leading-relaxed">
                  By transforming how people think, lead, learn, and work together—and by building systems that create lasting opportunities for future generations.
                </p>
              </div>

              <div className="p-8 sm:p-10 rounded-[28px] bg-[#F5EFE6] border border-[#E5DFD5] space-y-4">
                <div className="font-mono text-xs uppercase tracking-wider text-[#2D0891] font-bold">
                  MY VISION
                </div>
                <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                  Moving individuals and organizations beyond temporary inspiration.
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#0B0A09]/80 font-light leading-relaxed">
                  To become a nationally recognized transformational speaker, leadership-development expert, and community advocate whose message moves people toward lasting personal growth, stronger leadership, measurable outcomes, and generational impact.
                </p>
              </div>
            </div>

            {/* Five Speaker Goals */}
            <div className="mt-12 p-8 sm:p-10 rounded-[28px] bg-[#0B0A09] text-white space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-bold">
                MY FIVE SPEAKER GOALS
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { num: "01", title: "Transform Individuals", desc: "Confront adversity, heal, shift limiting beliefs, and develop discipline." },
                  { num: "02", title: "Develop Authentic Leaders", desc: "Equip leaders with self-awareness, emotional intelligence, and accountability." },
                  { num: "03", title: "Build Effective Orgs", desc: "Help businesses and schools create cultures and systems that deliver results." },
                  { num: "04", title: "Empower Communities", desc: "Create spaces for brotherhood, healing, mentorship, and advancement." },
                  { num: "05", title: "Create Sustainable Impact", desc: "Move beyond the emotion of a keynote into practical action." }
                ].map((g, i) => (
                  <div key={i} className="space-y-2 border-t border-white/10 pt-4">
                    <span className="font-mono text-xs text-[#A78BFA] font-bold">{g.num}</span>
                    <h4 className="font-archivo text-base font-bold text-white">{g.title}</h4>
                    <p className="text-xs text-white/70 font-light leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Philosophy Section (Target for #philosophy) */}
        <section id="philosophy" className="py-24 sm:py-32 border-b border-[#E5DFD5]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#B64218] font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B64218]" />
                  <span>CORE PHILOSOPHY & BRAND PROMISE</span>
                </div>
                <h2 className="font-archivo text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-[#0B0A09]">
                  Better people become better leaders.
                </h2>
                <div className="space-y-4 text-base text-[#0B0A09]/80 font-light leading-relaxed">
                  <p>
                    <strong className="text-[#0B0A09] font-bold">Better People Become Better Leaders. Better Leaders Build Better Organizations. Better Organizations Transform Communities.</strong>
                  </p>
                  <p>
                    Transformation begins with the individual, but it cannot end there. Personal development must translate into leadership. Leadership must translate into organizational culture. Organizational culture must translate into systems that produce meaningful results.
                  </p>
                  <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-2">
                    <span className="font-mono text-[10px] uppercase text-[#B64218] font-bold tracking-wider">
                      BRAND PROMISE
                    </span>
                    <h4 className="font-archivo text-lg font-bold text-[#0B0A09]">
                      Dr. Miller Doesn't Just Give Speeches. He Creates Turning Points.
                    </h4>
                    <p className="text-sm text-[#0B0A09]/70">
                      Audiences should not simply leave inspired. They should leave equipped to think differently, lead differently, behave differently, and produce different results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                    <span className="font-mono text-xs font-bold text-[#2D0891]">01</span>
                    <h4 className="font-archivo text-base font-bold text-[#0B0A09]">Personal Development</h4>
                    <p className="text-xs text-[#0B0A09]/70 font-light">Confront limiting beliefs, master self-talk, and establish non-negotiable discipline.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                    <span className="font-mono text-xs font-bold text-[#2D0891]">02</span>
                    <h4 className="font-archivo text-base font-bold text-[#0B0A09]">Authentic Leadership</h4>
                    <p className="text-xs text-[#0B0A09]/70 font-light">Lead through what you've lived with transparency, candor, and deep self-awareness.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                    <span className="font-mono text-xs font-bold text-[#2D0891]">03</span>
                    <h4 className="font-archivo text-base font-bold text-[#0B0A09]">Organizational Culture</h4>
                    <p className="text-xs text-[#0B0A09]/70 font-light">Build locker-room candor, eliminate gossip, and align teams around high expectations.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-3">
                    <span className="font-mono text-xs font-bold text-[#2D0891]">04</span>
                    <h4 className="font-archivo text-base font-bold text-[#0B0A09]">Systems & Outcomes</h4>
                    <p className="text-xs text-[#0B0A09]/70 font-light">Implement repeatable operational structures that transform entire communities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of Impact */}
        <section className="py-24 sm:py-32 border-b border-[#E5DFD5]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="max-w-2xl mb-16">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#0B0A09]/60 mb-3 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0B0A09]" />
                <span>CORE PILLARS</span>
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                Transformative impact at every altitude.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E5DFD5] rounded-[28px] p-8 space-y-5 hover:border-[#0B0A09]/40 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#0B0A09]/5 border border-[#0B0A09]/10 flex items-center justify-center text-[#0B0A09] group-hover:scale-110 group-hover:bg-[#2D0891] group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0B0A09]/50 font-bold">
                      {item.badge}
                    </div>
                    
                    <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                      {item.title}
                    </h3>
                    
                    <p className="font-sans text-sm text-[#0B0A09]/70 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Civil Rights Sit-Down (Ben Crump) */}
        <section className="py-24 sm:py-32 border-b border-[#E5DFD5]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#0B0A09]/70 font-bold flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#0B0A09]" />
                  <span>CIVIL RIGHTS & EDUCATIONAL EQUITY</span>
                </div>
                
                <h2 className="font-archivo text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0B0A09]">
                  Dr. Miller × Attorney Ben Crump.
                </h2>
                
                <p className="font-sans text-base sm:text-lg text-[#0B0A09]/80 font-normal leading-relaxed">
                  An historic dialogue between civil rights leader Attorney Ben Crump and Dr. Paul Miller on education as a civil rights vehicle and dismantling systemic pipelines.
                </p>
                
                <div className="pt-2">
                  <button
                    onClick={() => onPlayVideo('7jXuESXmLlE')}
                    className="px-7 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer shadow-xl shadow-[#2D0891]/25 hover:scale-105"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-white" />
                    <span>Watch the Sit-Down Session</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div 
                  onClick={() => onPlayVideo('7jXuESXmLlE')}
                  className="rounded-[32px] overflow-hidden shadow-2xl border border-[#E5DFD5] aspect-[16/10] bg-black relative group cursor-pointer"
                >
                  <img
                    src="/images/ben-crump.jpg"
                    alt="Dr. Paul Miller with Attorney Ben Crump"
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#2D0891] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 26-Year Timeline */}
        <section className="py-24 sm:py-32 border-b border-[#E5DFD5]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="max-w-2xl mb-16">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#0B0A09]/60 mb-3 font-bold">
                CAREER TRAJECTORY
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                Twenty-six years of relentless frontline impact.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {timeline.map((item, idx) => (
                <div key={idx} className="border-t border-[#0B0A09]/20 pt-6 space-y-3 relative group">
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-xs uppercase tracking-[0.16em] text-[#0B0A09] font-bold">
                      {item.year}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[#0B0A09]/50 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#0B0A09]/60" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-archivo text-xl font-bold text-[#0B0A09]">
                    {item.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#0B0A09]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distinctions & Accreditations */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#0B0A09]/60 mb-3 font-bold">
                ACCREDITATIONS & HONORS
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold tracking-tight text-[#0B0A09]">
                National distinctions that validate the standard.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {distinctions.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E5DFD5] space-y-2 hover:border-[#0B0A09]/30 transition-colors shadow-sm"
                >
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#0B0A09]/50 font-semibold">
                    {item.label}
                  </div>
                  <div className="font-archivo text-lg sm:text-xl font-bold text-[#0B0A09]">
                    {item.value}
                  </div>
                  <p className="font-sans text-xs text-[#0B0A09]/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
