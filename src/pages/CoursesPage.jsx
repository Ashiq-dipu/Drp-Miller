import React from 'react';
import { ArrowRight, BookOpen, Clock, PlayCircle, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function CoursesPage({ onOpenBooking }) {
  const courses = [
    {
      code: "ACADEMY · 01",
      badge: "ONLINE COURSE",
      title: "We Need to Do Better 2.0",
      tagline: "HIGH EXPECTATIONS & UNCOMPROMISING OUTCOMES",
      desc: "The digital blueprint for educators, parents, and community leaders ready to dismantle low expectations, establish ruthless accountability, and ignite student achievement.",
      duration: "6 MODULES · 18 LESSONS",
      lessons: [
        "The Mindset Shift: Eliminating Learned Helplessness",
        "Building High-Expectation Classroom & School Cultures",
        "Data-Driven Accountability Without Bureaucracy",
        "Parent & Community Coalitions That Deliver"
      ],
      price: "By Inquiry",
      level: "Educators & Administrators"
    },
    {
      code: "ACADEMY · 02",
      badge: "FLAGSHIP MASTERCLASS",
      title: "Principles of Being a Principal",
      tagline: "TACTICAL PLAYBOOK FOR URBAN SCHOOL CHIEFS",
      desc: "Drawn directly from Dr. Miller's 26+ years transforming failing schools into ~95% graduation models. A masterclass in instructional leadership, staff accountability, and board management.",
      duration: "8 MODULES · 24 LESSONS",
      lessons: [
        "Day One: Establishing Authority, Vision & Psychological Safety",
        "Hiring, Developing, and Retaining Championship Educators",
        "Turning Around Hostile or Complacent School Climates",
        "Navigating District Politics & Board Sovereignty"
      ],
      price: "By Inquiry",
      level: "Principals & Emerging Leaders"
    },
    {
      code: "ACADEMY · 03",
      badge: "TRANSFORMATION CHALLENGE",
      title: "Moving From the Gutter to Greatness",
      tagline: "THE 21-DAY PERSONAL SCRIPT REWRITE",
      desc: "Based on Dr. Miller's landmark published workbook. An intensive, day-by-day mental conditioning challenge designed to break negative self-talk, reset daily discipline, and unlock greatness.",
      duration: "21 DAYS · DAILY GUIDED LABS",
      lessons: [
        "Day 1–7: Uncovering the Root of Limiting Self-Talk",
        "Day 8–14: Rewiring Internal Standards & Daily Non-Negotiables",
        "Day 15–21: Executing Sovereign Decision-Making Under Pressure",
        "Bonus: The Good Me vs. The Hood Me Internal Matrix"
      ],
      price: "By Inquiry",
      level: "Anyone Seeking Transformation"
    }
  ];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">

      {/* ========================================================
          1. CINEMATIC DIGITAL ACADEMY HERO (BLACK BACKGROUND)
          High-Fashion Oprah/Mainstage Masterclass Architecture
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0B0A09] text-white">

        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground
          videoId="dOF0HTNHl6g"
          title="Dr. Paul Miller - The Good Me and The Hood Me Curriculum"
        />

        {/* Central Stage: Split Headline with Masterclass Avatar */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 w-full flex-1 flex flex-col justify-center items-center my-auto">

          {/* Main Visual Headline */}
          <div className="text-center select-none">
            <h1 className="font-archivo text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none block drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
              Digital Academy
            </h1>
          </div>

          {/* Authority Subtitles */}
          <div className="mt-3 sm:mt-4 text-center">
            <p className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-semibold">
              SELF-PACED HD MODULES · ACCREDITED WORKBOOKS · DISTRICT ENTERPRISE SEATS
            </p>
          </div>

          {/* Pill CTAs (Signature Indigo + District Seats) */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#courses-catalog"
              className="px-8 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <span>Explore 3 Masterclasses</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>

            <button
              onClick={() => onOpenBooking('District Course Licensing Inquiry')}
              className="px-7 py-3.5 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>District Team Licensing</span>
            </button>
          </div>

        </div>

      </section>

      {/* ========================================================
          UNIFIED CONTENT BODY (#f4eee3 CREAM BACKGROUND)
      ======================================================== */}
      <div className="bg-[#f4eee3] text-[#0B0A09]">

        {/* ========================================================
          COURSES & INSTITUTES CATALOG (TARGET FOR #courses)
      ======================================================== */}
        <section id="courses" className="py-24 bg-white border-b border-[#E2DDD3]">
          <div id="programs" className="relative -top-24" />
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

            <div className="max-w-3xl mb-16 space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold">
                DIGITAL LEARNING & TRANSFORMATION LABS
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
                Transformational learning on demand.
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#0B0A09]/75 font-light leading-relaxed">
                Digital courses, institutes, and self-paced programs that bring Dr. Paul Miller's proven frameworks directly to your screen, classroom, or leadership desk.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {courses.map((course, idx) => (
                <div
                  key={idx}
                  className="bg-[#f4eee3] border border-[#E5DFD5] rounded-[28px] p-8 sm:p-10 flex flex-col justify-between hover:border-[#2D0891]/40 hover:shadow-xl transition-all duration-300 group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2D0891]">
                        {course.code}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#0B0A09]/70 bg-white px-3 py-1 rounded-full border border-[#E5DFD5] font-semibold">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="font-archivo text-2xl sm:text-3xl font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors mb-1">
                      {course.title}
                    </h3>
                    <div className="font-mono text-xs text-[#0B0A09]/60 tracking-wider mb-6 pb-4 border-b border-[#E5DFD5] uppercase font-medium">
                      {course.tagline}
                    </div>

                    <p className="font-sans text-sm text-[#0B0A09]/75 leading-relaxed mb-6">
                      {course.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-[#0B0A09]/60 flex items-center gap-1.5 font-bold">
                        <Clock className="w-3.5 h-3.5 text-[#2D0891]" />
                        <span>{course.duration}</span>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-[#E5DFD5]">
                        {course.lessons.map((lesson, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B0A09]/85">
                            <CheckCircle className="w-3.5 h-3.5 text-[#2D0891] shrink-0 mt-0.5" />
                            <span>{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#E5DFD5] flex items-center justify-between">
                    <div>
                      <span className="font-archivo text-2xl font-bold text-[#0B0A09]">
                        {course.price}
                      </span>
                      <span className="font-mono text-[10px] text-[#0B0A09]/50 block font-semibold uppercase tracking-wider">
                        COHORT & INSTITUTIONAL ACCESS
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenBooking(course.title)}
                      className="px-6 py-3 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-[#2D0891]/20 hover:scale-105 active:scale-95"
                    >
                      <span>Inquire for Booking</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
          ADDITIONAL SPEAKING & TRAINING SPECIALTIES (TARGETS: #corporate, #educators, #block-to-boardroom, #youth)
      ======================================================== */}
        <section className="py-24 bg-[#f4eee3] border-b border-[#E2DDD3]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-12">

            <div className="max-w-2xl mb-16 space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold">
                ORGANIZATIONAL & COMMUNITY PROGRAMS
              </div>
              <h2 className="font-archivo text-4xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
                Trainings for every audience.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* 01: Corporate Leadership */}
              <div id="corporate" className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#E5DFD5] space-y-4 hover:shadow-xl transition-all">
                <span className="font-mono text-xs font-bold text-[#2D0891] uppercase tracking-wider">
                  PROGRAM 01 · CORPORATE EXCELLENCE
                </span>
                <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                  Corporate Leadership & Organizational Development
                </h3>
                <p className="font-sans text-sm text-[#0B0A09]/75 font-light leading-relaxed">
                  Dr. Miller's leadership experience and educational frameworks translate into workplace development, especially for organizations seeking stronger culture, more effective managers, and improved team performance.
                </p>
                <div className="text-xs font-mono text-[#0B0A09]/60 space-y-1 pt-2 border-t border-[#E5DFD5]">
                  <div>• Executive Leadership Development & New Manager Training</div>
                  <div>• Emotional Intelligence, Communication & Authentic Leadership</div>
                  <div>• Employee Engagement, Team Building & Values Alignment</div>
                </div>
                <button
                  onClick={() => onOpenBooking('Corporate Leadership & Organizational Development')}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
                >
                  Inquire Corporate Program →
                </button>
              </div>

              {/* 02: Teacher & Principal Training */}
              <div id="educators" className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#E5DFD5] space-y-4 hover:shadow-xl transition-all">
                <span className="font-mono text-xs font-bold text-[#2D0891] uppercase tracking-wider">
                  PROGRAM 02 · K-12 TRANSFORMATION
                </span>
                <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                  Teacher Professional Development & School Leader Training
                </h3>
                <p className="font-sans text-sm text-[#0B0A09]/75 font-light leading-relaxed">
                  Professional learning focused on improving the adults, cultures, practices, and systems that influence student success. Strategic leadership for administrators responsible for vision, staff performance, and ~95% outcomes.
                </p>
                <div className="text-xs font-mono text-[#0B0A09]/60 space-y-1 pt-2 border-t border-[#E5DFD5]">
                  <div>• Student Engagement, Classroom Relationships & Teacher Accountability</div>
                  <div>• Strategic Decision-Making, Data Use & Accountability Systems</div>
                  <div>• We Need to Do Better & Education Is the New Form of Civil Rights</div>
                </div>
                <button
                  onClick={() => onOpenBooking('Teacher & Principal Professional Development')}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
                >
                  Inquire Educator Program →
                </button>
              </div>

              {/* 03: From the Block to the Boardroom */}
              <div id="block-to-boardroom" className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#E5DFD5] space-y-4 hover:shadow-xl transition-all">
                <span className="font-mono text-xs font-bold text-[#2D0891] uppercase tracking-wider">
                  PROGRAM 03 · COMMUNITY EMPOWERMENT
                </span>
                <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                  From the Block to the Boardroom™ & Educated Black Man Tour
                </h3>
                <p className="font-sans text-sm text-[#0B0A09]/75 font-light leading-relaxed">
                  Extending Dr. Miller's personal-development, educational, and leadership work into communities across the country to create spaces for Black men and youth to engage in meaningful conversations about identity, healing, and brotherhood.
                </p>
                <div className="text-xs font-mono text-[#0B0A09]/60 space-y-1 pt-2 border-t border-[#E5DFD5]">
                  <div>• The Educated Black Man Tour & Youth Empowerment Summits</div>
                  <div>• Identity, Healing, Education, Resilience & Brotherhood</div>
                  <div>• The Good Me and The Hood Me: Winning the Battle Within</div>
                </div>
                <button
                  onClick={() => onOpenBooking('From the Block to the Boardroom Tour')}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
                >
                  Inquire Community Tour →
                </button>
              </div>

              {/* 04: Youth Development */}
              <div id="youth" className="p-8 sm:p-10 rounded-[28px] bg-white border border-[#E5DFD5] space-y-4 hover:shadow-xl transition-all">
                <span className="font-mono text-xs font-bold text-[#2D0891] uppercase tracking-wider">
                  PROGRAM 04 · DIGITAL CITIZENSHIP & ATHLETICS
                </span>
                <h3 className="font-archivo text-2xl font-bold text-[#0B0A09]">
                  Youth Development, Cyberbullying & Sports Leadership
                </h3>
                <p className="font-sans text-sm text-[#0B0A09]/75 font-light leading-relaxed">
                  Programs addressing cyberbullying, digital conflict, online behavior, and prevention. Drawing on collegiate athletics and coaching to connect perseverance, teamwork, and championship thinking.
                </p>
                <div className="text-xs font-mono text-[#0B0A09]/60 space-y-1 pt-2 border-t border-[#E5DFD5]">
                  <div>• Cyberbullying: Breaking the Cycle of Conflict</div>
                  <div>• Digital Citizenship, Prevention & Healthy Peer Relationships</div>
                  <div>• Sports Leadership, Team Development & Championship Conditioning</div>
                </div>
                <button
                  onClick={() => onOpenBooking('Youth Development & Digital Citizenship')}
                  className="mt-4 px-5 py-2.5 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all"
                >
                  Inquire Youth Program →
                </button>
              </div>

            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
