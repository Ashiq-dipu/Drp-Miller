import React, { useState } from 'react';
import { Plus, Minus, Search, ArrowRight, HelpCircle, FileText, CheckCircle2, ShieldCheck, Mail, Sparkles, Plane, Mic2, BookOpen } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function FaqPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const categories = [
    { id: 'ALL', label: 'All Questions' },
    { id: 'BOOKING', label: 'Booking & Formats' },
    { id: 'STAGING', label: 'Stage & AV Rider' },
    { id: 'TRAVEL', label: 'Travel & Logistics' },
    { id: 'BOOKS', label: 'Bulk Books & Signings' }
  ];

  const allFaqs = [
    {
      id: "f1",
      num: "01",
      category: "BOOKING",
      categoryLabel: "Booking & Formats",
      q: "What formats and session lengths does Dr. Miller deliver?",
      a: "Dr. Miller delivers 45 to 60-minute arena keynotes, 90-minute interactive workshops, half-day executive intensives (3–4 hours), and multi-month on-site district turnarounds. Every format is tailored to your conference agenda, audience demographics, and venue specifications."
    },
    {
      id: "f2",
      num: "02",
      category: "BOOKING",
      categoryLabel: "Booking & Formats",
      q: "Does Dr. Miller customize each keynote for our event theme?",
      a: "Yes. Every engagement includes a mandatory pre-event strategic alignment call with your event planning committee, CEO, or Superintendent. Dr. Miller explores your specific institutional pain points, themes, and behavioral objectives to weave bespoke stories, data points, and challenges into the delivery."
    },
    {
      id: "f3",
      num: "03",
      category: "BOOKING",
      categoryLabel: "Booking & Formats",
      q: "How far in advance should our committee secure Dr. Miller’s date?",
      a: "Dr. Miller's calendar typically books 3 to 9 months in advance for major annual conferences, back-to-school convocation summits, and national corporate meetings. However, limited urgent keynote and turnaround dates are held each quarter based on geographic availability."
    },
    {
      id: "f4",
      num: "04",
      category: "BOOKING",
      categoryLabel: "Booking & Formats",
      q: "Are virtual or hybrid keynotes available?",
      a: "Yes. Dr. Miller delivers high-production virtual keynotes and interactive executive webinars using professional multi-camera studio broadcasting, real-time polling, and structured virtual breakout frameworks."
    },
    {
      id: "f5",
      num: "05",
      category: "STAGING",
      categoryLabel: "Stage & AV Rider",
      q: "What are Dr. Miller's standard AV and microphone specifications?",
      a: "Dr. Miller requires a wireless lavalier or headset microphone (Countryman or DPA preferred) as he dynamically moves across the entire stage and enters the audience. Handheld microphones are not recommended for mainstage keynotes. A confidence monitor at the front of the stage is strongly appreciated."
    },
    {
      id: "f6",
      num: "06",
      category: "STAGING",
      categoryLabel: "Stage & AV Rider",
      q: "Can our event record, livestream, or archive the keynote?",
      a: "Internal recording or livestreaming for attendees within your organization is readily permitted upon prior written agreement. Commercial distribution, broadcast licensing, or external monetization can be arranged through Dr. Miller’s speaking agreement."
    },
    {
      id: "f7",
      num: "07",
      category: "STAGING",
      categoryLabel: "Stage & AV Rider",
      q: "Does Dr. Miller use slides, videos, or presentation decks?",
      a: "Dr. Miller utilizes high-impact 16:9 cinematic visual cues and video vignettes. His presentation runs from HDMI / Apple Keynote or standard PowerPoint, operated either via confidence clicker from the stage or cued by your stage manager."
    },
    {
      id: "f8",
      num: "08",
      category: "TRAVEL",
      categoryLabel: "Travel & Logistics",
      q: "Where does Dr. Miller travel from, and what are his travel requirements?",
      a: "Dr. Miller travels from the Baltimore / Washington D.C. metropolitan corridor (BWI, DCA, or IAD airports). Travel arrangements typically include non-stop round-trip First or Business Class airfare, airport executive ground transit, and non-smoking luxury hotel accommodations at or near the conference venue."
    },
    {
      id: "f9",
      num: "09",
      category: "TRAVEL",
      categoryLabel: "Travel & Logistics",
      q: "Does Dr. Miller accept international speaking invitations?",
      a: "Yes. Dr. Miller has delivered addresses and advisory sessions internationally, including in the United Kingdom, Oxford University, Canada, and the Caribbean. International bookings require 4–6 months advance lead time for passport and visa clearance."
    },
    {
      id: "f10",
      num: "10",
      category: "BOOKS",
      categoryLabel: "Bulk Books & Signings",
      q: "Can we order bulk books with author signings for all attendees?",
      a: "Yes! Discounted author-rate arrangements are available when purchasing books in volume for attendees (e.g., 'From the Gutter to Greatness' or 'The 21-Day Challenge'). Books can be pre-shipped directly to your event venue, and Dr. Miller will participate in a dedicated post-keynote book signing and photo session."
    },
    {
      id: "f11",
      num: "11",
      category: "BOOKS",
      categoryLabel: "Bulk Books & Signings",
      q: "Can Dr. Miller participate in sponsor receptions or VIP meet-and-greets?",
      a: "Yes. When scheduled during the booking process, Dr. Miller is delighted to attend sponsor breakfasts, executive VIP dinners, or private leadership photo receptions immediately preceding or following his keynote address."
    },
    {
      id: "f12",
      num: "12",
      category: "BOOKING",
      categoryLabel: "Booking & Formats",
      q: "What is the fee structure for Dr. Miller's keynote addresses?",
      a: "Speaking honorariums vary based on venue location, attendance size, engagement format (keynote vs multi-day residency), and whether bulk books are bundled. Please submit a calendar inquiry or email hello@drpmiller.com for an immediate custom quote from Dr. Miller's office."
    }
  ];

  // Filtering
  const filteredFaqs = allFaqs.filter((f) => {
    const matchesCategory = activeCategory === 'ALL' || f.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen font-sans">
      
      {/* ========================================================
          1. CINEMATIC FAQ HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Full-Bleed Video Background with Softened Overlay */}
        <HeroVideoBackground
          videoId="Mz0tJVlvXyo"
          title="Dr. Paul Miller Meeting Planner FAQ"
        />

        {/* Central Stage: Title, Subtitle & 2 Buttons at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Frequently Asked Questions
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            ENGAGEMENT LOGISTICS · BOOKING POLICIES · KEYNOTE TOPICS · ACCREDITATION
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenBooking && onOpenBooking('General FAQ Inquiry')}
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <span>Ask Dr. Miller Directly</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </button>
            <a
              href="mailto:hello@drpmiller.com"
              className="px-7 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <Mail className="w-3.5 h-3.5 text-white" />
              <span>hello@drpmiller.com</span>
            </a>
          </div>

        </div>

      </section>

      {/* ========================================================
          2. PLANNER AT-A-GLANCE FAST FACTS (DARK BARS)
      ======================================================== */}
      <section className="bg-[#12100E] border-y border-white/10 py-8 text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2D0891]/40 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 text-[#A78BFA]">
                <Plane className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold">TRAVEL ORIGIN</p>
                <p className="font-archivo text-sm font-bold text-white mt-0.5">Baltimore / DC Metro</p>
                <p className="text-[11px] text-white/60">BWI, DCA, or IAD Non-Stop</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2D0891]/40 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 text-[#A78BFA]">
                <Mic2 className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold">STAGE RIDER</p>
                <p className="font-archivo text-sm font-bold text-white mt-0.5">Wireless Headset / Lav</p>
                <p className="text-[11px] text-white/60">Stage roamer + Confidence monitor</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2D0891]/40 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 text-[#A78BFA]">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold">AUTHOR BULK</p>
                <p className="font-archivo text-sm font-bold text-white mt-0.5">Signed Books for Guests</p>
                <p className="text-[11px] text-white/60">Direct venue shipping & signings</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2D0891]/40 border border-[#7C3AED]/30 flex items-center justify-center shrink-0 text-[#A78BFA]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest font-bold">ALIGNMENT</p>
                <p className="font-archivo text-sm font-bold text-white mt-0.5">Mandatory Prep Call</p>
                <p className="text-[11px] text-white/60">Tailored to your executive goals</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN FAQ CATALOGUE (#F4EEE3 CREAM BACKGROUND)
      ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#F4EEE3] text-[#0B0A09]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          {/* Controls: Search and Category Filter Tabs */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#0B0A09]/15">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenFaq(0);
                  }}
                  className={`px-4 py-2 rounded-full font-mono text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#2D0891] text-white shadow-md shadow-[#2D0891]/30 scale-105'
                      : 'bg-white hover:bg-[#0B0A09]/5 text-[#0B0A09]/70 border border-[#0B0A09]/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Instant Search Bar */}
            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-[#0B0A09]/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#0B0A09]/15 text-[#0B0A09] text-xs placeholder-[#0B0A09]/40 focus:outline-none focus:border-[#2D0891] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#0B0A09]/40 hover:text-[#0B0A09] font-mono cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between font-mono text-xs text-[#0B0A09]/60">
            <span>SHOWING {filteredFaqs.length} OF {allFaqs.length} QUESTIONS</span>
            {searchQuery && (
              <span className="text-[#2D0891] font-bold">Filtered by "{searchQuery}"</span>
            )}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#0B0A09]/10 p-8 space-y-4">
              <HelpCircle className="w-10 h-10 text-[#0B0A09]/30 mx-auto" />
              <h3 className="font-archivo text-xl font-bold text-[#0B0A09]">No matching questions found</h3>
              <p className="text-sm text-[#0B0A09]/70 max-w-md mx-auto">
                We couldn't find any questions matching "{searchQuery}". You can send your question directly to Dr. Miller’s executive team.
              </p>
              <button
                onClick={() => onOpenBooking && onOpenBooking(`Custom Question: ${searchQuery}`)}
                className="mt-2 px-6 py-2.5 rounded-full bg-[#2D0891] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3D0CB8] transition-all cursor-pointer"
              >
                Inquire Directly
              </button>
            </div>
          ) : (
            <div className="divide-y divide-[#0B0A09]/15 border-y border-[#0B0A09]/15 bg-white/50 rounded-2xl px-4 sm:px-8">
              {filteredFaqs.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={f.id} className="transition-colors py-1">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full py-6 text-left flex items-start justify-between gap-6 group cursor-pointer hover:bg-black/[0.02] px-2 -mx-2 rounded-xl transition-all"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-8">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#2D0891] font-bold shrink-0">
                          {f.num}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono uppercase tracking-wider bg-[#2D0891]/10 text-[#2D0891] px-2 py-0.5 rounded-md font-bold">
                              {f.categoryLabel}
                            </span>
                          </div>
                          <h3 className="font-archivo font-bold text-lg sm:text-2xl text-[#0B0A09] group-hover:text-[#2D0891] transition-colors leading-snug">
                            {f.q}
                          </h3>
                        </div>
                      </div>

                      <div className="w-8 h-8 rounded-full border border-[#0B0A09]/20 flex items-center justify-center text-[#0B0A09]/70 group-hover:border-[#2D0891] group-hover:text-[#2D0891] transition-colors shrink-0 mt-1">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="pb-8 pt-2 pl-10 sm:pl-16 text-sm sm:text-base text-[#0B0A09]/80 font-light leading-relaxed max-w-3xl animate-in fade-in duration-200">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Still Have Questions? Banner */}
          <div className="mt-16 bg-[#0B0A09] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A78BFA] font-bold">
                DIRECT EXECUTIVE DESK
              </span>
              <h3 className="font-archivo text-2xl sm:text-3xl font-black text-white">
                Have a question not covered here?
              </h3>
              <p className="text-sm text-white/70 max-w-xl">
                Our engagement coordinator is ready to answer specific date requests, travel logistics, or custom residency inquiries.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenBooking && onOpenBooking('Meeting Planner Custom Inquiry')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#2D0891]/30 cursor-pointer"
              >
                Inquire Speaking Dates
              </button>
              <a
                href="mailto:hello@drpmiller.com"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>Email Coordinator</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

