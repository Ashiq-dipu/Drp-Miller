import React from 'react';
import { Award, Landmark, GraduationCap, Mic, Sparkles } from 'lucide-react';

export default function CredibilityRibbon() {
  const honors = [
    {
      title: "TEDx Albany Speaker",
      subtitle: "We Need to Do Better",
      icon: Mic,
    },
    {
      title: "Oxford University",
      subtitle: "Harris Manchester College Presenter",
      icon: GraduationCap,
    },
    {
      title: "Presidential Lifetime Award",
      subtitle: "White House Civic & Leadership Honor",
      icon: Award,
    },
    {
      title: "Key to New York City & Albany",
      subtitle: "Conferred by Mayors for Youth Impact",
      icon: Landmark,
    },
    {
      title: "Congressional Black Caucus",
      subtitle: "National Educational Forum",
      icon: Landmark,
    },
    {
      title: "T.D. Jakes Leadership",
      subtitle: "National Excellence in Leadership",
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative border-y border-white/10 bg-stage-900/60 backdrop-blur-md py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="shrink-0 flex items-center gap-3 pr-6 md:border-r border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300 font-display">
              Stages & Honors Conferred
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {honors.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:border-gold-400/50 group-hover:bg-gold-500/10 transition-all shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium leading-tight">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

