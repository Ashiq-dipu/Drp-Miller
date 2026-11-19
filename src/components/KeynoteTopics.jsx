import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function KeynoteTopics({ onSelectKeynote }) {
  const [selectedSession, setSelectedSession] = useState(null);

  const keynotes = [
    {
      id: "gutter-greatness",
      photo: "/images/brand-speaking.jpg",
      track: "SIGNATURE PLATFORM 01",
      code: "60 MIN",
      title: "From the Gutter to Greatness™",
      subtitle: "Turning Your Setbacks Into Setups",
      audience: "Corporate conferences, colleges, universities, professional associations, athletic teams, nonprofit organizations, faith communities, and commencement events.",
      desc: "Transform adversity into purpose, perseverance, resilience, personal growth, and leadership. Everyone has a gutter—an experience, obstacle, wound, or limiting belief—but the gutter does not have to become the destination.",
      takeaways: [
        "Overcoming adversity, healing, and discovering your superpower",
        "Turning pain into power and setbacks into setups",
        "From the Block to the Boardroom: sovereign leadership roadmap"
      ]
    },
    {
      id: "championship-mindset",
      photo: "/images/dr-miller-stage.jpg",
      track: "SIGNATURE PLATFORM 02",
      code: "60 MIN",
      title: "Championship Mindset™",
      subtitle: "Shift Your Thinking. Change Your Behavior. Elevate Your Results.",
      audience: "Corporate teams, sales organizations, executives, educators, athletes, students, and leadership conferences.",
      desc: "Help people challenge limiting beliefs, overcome learned helplessness, develop discipline, and build habits that support sustainable performance.",
      takeaways: [
        "The WAGAL principle (Welcome Challenges, Anticipate Obstacles, Greatness from Effort, Appreciate Criticism, Let Others Inspire)",
        "Reverse the Curse: turning temporary failure into strategic improvement",
        "The 24-hour no-complaining challenge and positive affirmations"
      ]
    },
    {
      id: "leadership-authenticity",
      photo: "/images/dr-miller-walk.jpg",
      track: "SIGNATURE PLATFORM 03",
      code: "75 MIN",
      title: "Leadership Authenticity™",
      subtitle: "Better People Become Better Leaders",
      audience: "C-suite executives, managers, emerging leaders, business owners, educational administrators, and professional associations.",
      desc: "Help people understand themselves before attempting to lead others. Leadership requires more than a position—it requires self-awareness, emotional intelligence, trust, consistency, and the ability to develop people.",
      takeaways: [
        "Before I Can Do for You, I Must Do for Me: self-leadership first",
        "Were–Are–Becoming leadership assessments and values alignment",
        "Leadership authenticity audits to build credibility and trust"
      ]
    },
    {
      id: "we-need-to-do-better",
      photo: "/images/tedx-stage.jpg",
      track: "SIGNATURE PLATFORM 04",
      code: "60 MIN",
      title: "We Need to Do Better™",
      subtitle: "Building People, Cultures, and Systems That Produce Results",
      audience: "School districts, charter networks, educational conferences, universities, corporations, nonprofits, and community events.",
      desc: "Move organizations beyond good intentions toward strong relationships, clear expectations, effective instruction or service delivery, evidence-based improvement, and shared accountability.",
      takeaways: [
        "Featured Keynote: Education Is the New Form of Civil Rights",
        "Four Pillars: Relationships, Quality Delivery, Data Use, and Accountability",
        "Moving systems from good intentions to measurable ~95% outcomes"
      ]
    },
    {
      id: "good-me-hood-me",
      photo: "/images/drpmiller/media-stage-7.jpg",
      track: "SIGNATURE PLATFORM 05",
      code: "60 MIN",
      title: "The Good Me and The Hood Me™",
      subtitle: "Win the Battle Within",
      audience: "Middle and high schools, universities, youth organizations, Black male empowerment programs, mentoring initiatives, and corporate teams.",
      desc: "Examine the internal struggle between purpose and pressure, discipline and impulse, accountability and excuses, and intentional leadership versus emotional reaction.",
      takeaways: [
        "Corporate Adaptation: The Good Me vs. The Hood Me: The Leadership Battle Within",
        "Youth Adaptation: The Good Me and The Hood Me: Win the Battle Within",
        "Mastering emotional regulation, decision-making, and brotherhood"
      ]
    }
  ];

  const frameworks = [
    {
      name: "Championship Mindset",
      desc: "A champion leans into fear, shows up even when motivation is low, develops mental toughness, sees possibilities, and prioritizes progress over perfection."
    },
    {
      name: "WAGAL Framework",
      desc: "W: Welcome All Challenges · A: Anticipate Obstacles · G: Greatness Comes from Effort · A: Appreciate Criticism · L: Let Others Inspire You."
    },
    {
      name: "Reverse the Curse",
      desc: "Challenge the tendency to turn temporary failure into permanent identity. Replace 'I am incapable' with strategic preparation, effort, and support."
    },
    {
      name: "Self-Leadership Principle",
      desc: "Before I Can Do for You, I Must Do for Me. Self-awareness, values alignment, and personal healing must precede institutional influence."
    },
    {
      name: "Four Pillars of Turnaround",
      desc: "1. Building Relationships · 2. Delivery of Quality Instruction/Service · 3. Usage of Data to Improve · 4. Shared Accountability for All Stakeholders."
    },
    {
      name: "24-Hour No-Complaining Challenge",
      desc: "Reframing habitual complaining into constructive problem-solving by shifting 'I have to' into 'I get to'."
    }
  ];

  return (
    <section id="keynotes" className="py-24 sm:py-32 bg-[#0B0A09] text-white border-t border-white/10 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="font-mono text-xs text-white/50 uppercase tracking-[0.14em]">
            AVAILABLE FOR KEYNOTES, CONFERENCES & WORKSHOPS
          </div>
        </div>

        {/* 5 Column Full-Bleed Responsive Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {keynotes.map((k, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedSession(selectedSession === idx ? null : idx)}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-[#161513] border border-white/10 hover:border-[#A78BFA]/60 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-end p-5"
            >
              {/* Full-Bleed Background Photo */}
              <img
                src={k.photo}
                alt={k.title}
                className="absolute inset-0 w-full h-full object-cover filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />

              {/* Gradient Vignette for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

              {/* Top Tag */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#A78BFA] font-bold">
                  {k.track}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70">
                  {k.code}
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 space-y-1">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#A78BFA]">
                  {k.subtitle}
                </div>
                <h3 className="font-archivo font-bold text-lg sm:text-xl text-white group-hover:text-[#A78BFA] transition-colors leading-tight">
                  {k.title}
                </h3>
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/60">
                  DR. PAUL MILLER
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Session Detail View */}
        {selectedSession !== null && (
          <div className="mt-10 rounded-2xl bg-[#141210] border border-[#A78BFA]/30 p-6 sm:p-10 animate-fadeIn space-y-6 shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="font-mono text-xs uppercase text-[#A78BFA] tracking-wider font-semibold">
                  {keynotes[selectedSession].track} · {keynotes[selectedSession].code}
                </span>
                <h4 className="font-archivo font-bold text-2xl sm:text-3xl text-white mt-1">
                  {keynotes[selectedSession].title}
                </h4>
                <p className="font-mono text-xs text-[#A78BFA]/90 mt-1 uppercase tracking-wider">
                  {keynotes[selectedSession].subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedSession(null)}
                className="font-mono text-xs uppercase text-white/50 hover:text-white cursor-pointer px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/30"
              >
                [CLOSE DETAILS ×]
              </button>
            </div>

            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-3xl">
              {keynotes[selectedSession].desc}
            </p>

            <div className="text-xs font-mono text-white/60">
              <strong className="text-white">RECOMMENDED AUDIENCES:</strong> {keynotes[selectedSession].audience}
            </div>

            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#A78BFA] mb-3 font-semibold">
                CORE TAKEAWAYS & FRAMEWORKS
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {keynotes[selectedSession].takeaways.map((t, i) => (
                  <div key={i} className="text-xs text-white/85 bg-black/50 p-4 rounded-xl border border-white/10 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectKeynote(keynotes[selectedSession].title)}
                className="px-6 py-3 rounded-full bg-[#2D0891] text-white font-sans font-semibold text-xs uppercase tracking-wider hover:bg-[#3D0CB8] border border-[#7C3AED]/50 transition-all shadow-lg cursor-pointer"
              >
                Inquire For This Presentation →
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
