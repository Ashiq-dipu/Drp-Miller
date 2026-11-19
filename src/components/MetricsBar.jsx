import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function MetricsBar() {
  const container = useRef(null);

  const metrics = [
    { value: "26+", label: "Years in Education", detail: "Teacher to Principal to Urban CEO" },
    { value: "6", label: "Published Books", detail: "Amazon Bestsellers & Curricula" },
    { value: "95%", label: "Historic Grad Rate", detail: "Reported at Green Tech Charter" },
    { value: "1M+", label: "Audience Impact", detail: "Students, Educators & Executives" },
    { value: "120+", label: "Keynote Stages", detail: "Corporate, District & University" }
  ];

  return (
    <section ref={container} className="relative py-16 bg-stage-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-gold-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gold-400 group-hover:text-gold-300 transition-colors">
                {m.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                {m.label}
              </div>
              <div className="mt-1 text-[11px] text-slate-400 font-medium leading-relaxed">
                {m.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

