import React from 'react';
import { Check, ArrowRight, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

export default function CoachingSection({ onOpenBooking }) {
  const formats = [
    {
      code: "ENG-01 · KEYNOTE",
      name: "Keynote Address",
      scope: "45–60 MINS",
      badge: "MAINSTAGE HEADLINER",
      dotColor: "bg-[#2D0891]",
      subtitle: "Full Arena & Convention Delivery",
      includes: [
        "Arena-scale opening or closing keynote address",
        "Pre-event strategic alignment call with leadership",
        "Uncompromising culture & leadership turnaround blueprint",
        "Author book signing & post-keynote attendee reception"
      ],
      btnText: "Inquire for Booking",
      btnClass: "bg-[#0B0A09] hover:bg-black text-white",
      isPopular: false
    },
    {
      code: "ENG-02 · INTENSIVE",
      name: "Executive Masterclass",
      scope: "HALF-DAY INTENSIVE",
      badge: "HIGH-ENGAGEMENT LAB",
      dotColor: "bg-[#2D0891]",
      subtitle: "Breakout Labs & Senior Leadership",
      includes: [
        "Full Keynote Address included for general session",
        "Interactive 90–180 minute executive diagnostic lab",
        "Sovereign Leadership Diagnostic Framework for all attendees",
        "Confidential C-suite / Superintendent strategy debrief"
      ],
      btnText: "Inquire for Booking",
      btnClass: "bg-[#2D0891] hover:bg-[#3D0CB8] text-white shadow-lg shadow-[#2D0891]/40 border border-[#7C3AED]/40",
      isPopular: true
    },
    {
      code: "ENG-03 · RESIDENCY",
      name: "Institutional Residency",
      scope: "MULTI-DAY IMMERSION",
      badge: "ORGANIZATIONAL TURNAROUND",
      dotColor: "bg-[#0B0A09]",
      subtitle: "Deep On-Site District & Corporate Advisory",
      includes: [
        "Multi-day on-site campus, district, or corporate immersion",
        "Keynote convocation + leadership team calibration labs",
        "Direct culture audit, classroom observation & policy design",
        "90-day post-residency executive accountability check-in"
      ],
      btnText: "Inquire for Booking",
      btnClass: "bg-[#0B0A09] hover:bg-black text-white",
      isPopular: false
    }
  ];

  return (
    <section id="coaching" className="py-24 sm:py-32 bg-[#2D0891] text-white relative overflow-hidden select-none">
      {/* Anchor Target for #book */}
      <div id="book" className="absolute -top-24 left-0" />
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          
          {/* Left Title */}
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] text-white/70 mb-3 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>05 · COACHING & EXECUTIVE LEADERSHIP</span>
            </div>
            <h2 className="font-archivo text-5xl sm:text-6xl lg:text-[76px] font-black leading-[0.95] tracking-[-0.04em] text-white">
              Better people. <br />
              <span className="bg-white text-[#2D0891] px-3.5 py-0.5 inline-block mt-2 rounded-sm shadow-xl">
                Better leaders.
              </span>
            </h2>
          </div>

          {/* Right Description & Status Badge */}
          <div className="max-w-md space-y-4">
            <p className="font-sans text-base sm:text-lg text-white/90 font-normal leading-snug">
              My mission is bigger than a transaction. I understand the audience, purpose, and desired outcomes to craft an engagement structure that delivers lasting transformation.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>NOW BOOKING KEYNOTES & EXECUTIVE COACHING</span>
            </div>
          </div>

        </div>

        {/* Inner Dark Frame with Auditorium Stage Photo */}
        <div className="relative rounded-[32px] overflow-hidden bg-black aspect-[21/10] sm:aspect-[2.5/1] shadow-2xl border border-white/10">
          <img
            src="/images/audience-hall.webp"
            alt="Audience in the main hall"
            className="w-full h-full object-cover filter contrast-110 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

          {/* Top Left Badge on image */}
          <div className="absolute top-5 left-6 sm:top-6 sm:left-8 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-xs uppercase tracking-wider text-white">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
            <span>ANNUAL CONVENTIONS · CORPORATE RETREATS · DISTRICT SUMMITS</span>
          </div>
        </div>

        {/* 3 Floating Cards (Overlapping Architecture) */}
        <div className="relative z-20 -mt-24 sm:-mt-36 lg:-mt-52 grid lg:grid-cols-3 gap-6 sm:gap-8">
          {formats.map((fmt, idx) => (
            <div
              key={idx}
              className="bg-[#F5EFE6] rounded-[28px] p-8 sm:p-10 shadow-2xl flex flex-col justify-between border border-black/5 hover:-translate-y-1.5 transition-transform duration-300 relative text-[#0B0A09]"
            >
              <div>
                
                {/* Header Dot + Name + Optional 'MOST POPULAR' */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${fmt.dotColor}`} />
                    <span className="font-archivo font-bold text-2xl text-[#0B0A09] tracking-tight">
                      {fmt.name}
                    </span>
                  </div>

                  {fmt.isPopular && (
                    <span className="px-3 py-1 rounded-full bg-[#2D0891] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      MOST REQUESTED
                    </span>
                  )}
                </div>

                {/* Subtitle / Scope Tag */}
                <p className="font-sans text-xs text-[#0B0A09]/60 font-semibold uppercase tracking-wider mb-6">
                  {fmt.subtitle}
                </p>

                {/* By Inquiry & Scope Bar */}
                <div className="flex items-baseline justify-between pb-6 border-b border-[#0B0A09]/15 mb-6">
                  <div>
                    <div className="font-mono text-[10px] uppercase text-[#0B0A09]/50 font-bold tracking-widest">
                      INVESTMENT & TERMS
                    </div>
                    <div className="font-archivo text-2xl sm:text-3xl font-bold text-[#0B0A09] tracking-tight mt-0.5">
                      By Inquiry
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-[#2D0891] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#2D0891]/10 border border-[#2D0891]/20">
                    {fmt.scope}
                  </span>
                </div>

                {/* Checklist (Black circular checkmarks) */}
                <div className="space-y-4">
                  {fmt.includes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#0B0A09] font-normal leading-snug">
                      <div className="w-4 h-4 rounded-full bg-[#0B0A09] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#F5EFE6] stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Row: Monospace Code + Pill Action Button */}
              <div className="pt-8 mt-8 border-t border-[#0B0A09]/10 flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#0B0A09]/50 font-medium">
                  {fmt.code}
                </span>

                <button
                  onClick={() => onOpenBooking(fmt.name)}
                  className={`px-6 py-3 rounded-full font-sans font-semibold text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer ${fmt.btnClass}`}
                >
                  <span>{fmt.btnText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Helper Links */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-sans font-medium text-sm text-white/90">
          <button
            onClick={() => onOpenBooking('District Bulk Licensing & Bundles')}
            className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/15 hover:bg-white/20 active:scale-95"
          >
            <span>District Curriculum Bundles?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenBooking('Corporate Convention Calendar')}
            className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/15 hover:bg-white/20 active:scale-95"
          >
            <span>Annual Convention Inquiries?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onOpenBooking('Custom Advisory & Consulting')}
            className="hover:text-white transition-all flex items-center gap-1.5 cursor-pointer bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-sm border border-white/15 hover:bg-white/20 active:scale-95"
          >
            <span>Executive Advisory?</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
