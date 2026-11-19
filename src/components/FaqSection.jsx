import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      num: "01",
      q: "What formats and session lengths does Dr. Miller deliver?",
      a: "Dr. Miller delivers 45 to 60-minute arena keynotes, 90-minute interactive workshops, half-day executive intensives (3–4 hours), and multi-month on-site district turnarounds. Every format is tailored to your conference agenda."
    },
    {
      num: "02",
      q: "Does Dr. Miller customize each keynote for our event theme?",
      a: "Yes. Every engagement includes a mandatory pre-event strategic alignment call with your event planning committee, CEO, or Superintendent to understand the specific organizational challenges, theme, and desired behavioral shift."
    },
    {
      num: "03",
      q: "What are Dr. Miller's standard AV and stage rider specifications?",
      a: "Dr. Miller requires a wireless lavalier or headset microphone (he actively walks the stage and engages the audience), high-definition video projection for visual media, and a confidence monitor when possible. A detailed 1-page AV rider is provided upon booking."
    },
    {
      num: "04",
      q: "Can we order bulk books with author signings for all attendees?",
      a: "Yes. Discounted bulk author arrangements are available when purchasing books in volume for attendees (e.g. From the Gutter to Greatness or the 21-Day Challenge). Books can be shipped in advance directly to your event venue, and Dr. Miller will participate in a dedicated post-keynote book signing."
    },
    {
      num: "05",
      q: "How far in advance should our committee secure Dr. Miller’s date?",
      a: "Dr. Miller's calendar typically books 3 to 9 months in advance for major annual conferences, back-to-school convocation summits, and national corporate meetings. Limited urgent keynote dates are held each quarter based on availability."
    },
    {
      num: "06",
      q: "Are virtual or hybrid keynotes available?",
      a: "Yes. Dr. Miller delivers high-production virtual keynotes and interactive executive webinars using professional multi-camera studio broadcasting."
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F4EEE3] text-[#0B0A09] border-t border-[#0B0A09]/15">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Header (Exact Mainstage Style: Before you book.) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#0B0A09]/15">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#B64218] mb-3 font-medium">
              05 · MEETING PLANNER FAQ
            </div>
            <h2 className="font-archivo text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.0] tracking-[-0.03em] text-[#0B0A09]">
              Before you <br />
              <span className="text-[#B64218]">book.</span>
            </h2>
          </div>
          <div className="max-w-md text-sm text-[#0B0A09]/75 font-light leading-relaxed">
            Everything meeting planners, conference committees, and executive coordinators need to know about working with Dr. Paul Miller.
          </div>
        </div>

        {/* FAQ Accordion List (Mainstage Style with Thin Divider Lines) */}
        <div className="divide-y divide-[#0B0A09]/15">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full py-6 text-left flex items-start justify-between gap-6 group cursor-pointer hover:bg-black/[0.02] px-2 -mx-2 rounded-lg"
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#0B0A09]/50 font-bold shrink-0">
                      {f.num}
                    </span>
                    <h3 className="font-archivo font-bold text-lg sm:text-2xl text-[#0B0A09] group-hover:text-[#B64218] transition-colors">
                      {f.q}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full border border-[#0B0A09]/20 flex items-center justify-center text-[#0B0A09]/70 group-hover:border-[#0B0A09] transition-colors shrink-0 mt-1">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-8 pt-2 pl-12 sm:pl-16 text-sm sm:text-base text-[#0B0A09]/80 font-light leading-relaxed max-w-3xl animate-fadeIn">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
