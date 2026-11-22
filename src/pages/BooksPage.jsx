import React, { useState } from 'react';
import { ArrowRight, BookOpen, Star, ShoppingCart, Check, ExternalLink, X, Bookmark, Quote, Sparkles, Layers, ShieldCheck, Download } from 'lucide-react';
import HeroVideoBackground from '../components/HeroVideoBackground';

export default function BooksPage({ onOpenBooking }) {
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [excerptModalOpen, setExcerptModalOpen] = useState(false);

  const books = [
    {
      id: "gutter-greatness",
      volume: "VOLUME 01",
      badge: "ORIGINAL BESTSELLER",
      title: "From the Gutter to Greatness",
      subtitle: "The Uncompromising Memoir & Turnaround Blueprint",
      cover: "/images/book-gutter.jpg",
      year: "2018 / 2021",
      pages: "248 Pages",
      isbn: "978-1-953806-01-2",
      format: "Hardcover · Paperback · Audible",
      category: "Autobiography / Leadership Turnaround",
      tagline: "Disrupting generational trauma into sovereign executive excellence.",
      desc: "Tracking Dr. Miller’s ascent from Rochester public housing, systemic street-level violence, and deep generational trauma to becoming an urban CEO achieving ~95% high school graduation rates. An indispensable blueprint for anyone refusing to surrender to their origin story.",
      authorNote: "I didn’t write this book to entertain you with street stories. I wrote it to expose the precise psychological shift that allows a human being to stop waiting for rescue and construct their own kingdom.",
      takeaways: [
        "The turning points that disrupt generational failure and toxic mental loops",
        "How unconditional love paired with ruthless standards transforms failing culture",
        "The Sovereign Mindset: navigating high-friction institutions without selling your soul",
        "Operational playbooks that took Green Tech Charter to national prominence"
      ],
      excerptTitle: "Prologue: The Concrete That Tried to Bury Me",
      excerptText: `The sirens in Rochester didn't sound like emergency warnings; they sounded like the ambient soundtrack of everyday survival. When you grow up in public housing, people look at you with predetermined mathematics. They calculate your expiration date before you learn long division.

They told me the gutter was permanent. But a gutter is only a grave if you lie down in it. 

Every single system designed to educate urban kids was failing by statistical design. But failure is a choice masked as bureaucracy. I knew that if I was going to change a single school, a single district, or a single life, I had to stop asking for permission from institutions that profit from our failure. This book is the blueprint for how we tore the script to shreds.`,
      amazonUrl: "https://book.fromtheguttertogreatness.com/",
      districtAdopted: "54 Districts / 18 Charter Networks"
    },
    {
      id: "gutter-workbook",
      volume: "VOLUME 02",
      badge: "INTERACTIVE LAB",
      title: "Moving From the Gutter to Greatness",
      subtitle: "The 21-Day Guided Transformation Workbook",
      cover: "/images/book-gutter-wb.webp",
      year: "2020",
      pages: "180 Pages",
      isbn: "978-1-953806-05-0",
      format: "Spiral Bound · Digital Interactive PDF",
      category: "Personal Conditioning / Habit Restructuring",
      tagline: "21 consecutive days of diagnostic audits and daily mental reprogramming.",
      desc: "The practical companion lab to the bestselling memoir. Designed for readers who need actionable execution rather than theory. Step-by-step diagnostic audits, non-negotiable habit protocols, and accountability frameworks to destroy self-sabotage in three weeks.",
      authorNote: "Motivation lasts 48 hours. Systems last a lifetime. This workbook is the daily iron that hammers your daily habits into armor.",
      takeaways: [
        "The 21-Day Personal Accountability Audit: diagnosing where you surrender power",
        "Non-negotiable daily morning and evening sovereign rituals",
        "Eliminating emotional triggers and toxic conversational cycles",
        "Adopted across 50+ high school leadership cohorts and corporate teams"
      ],
      excerptTitle: "Day 01: The Accountability Autopsy",
      excerptText: `Before we build anything new, we must perform an autopsy on your excuses. 

Write down the three biggest narratives you tell yourself about why you aren't where you belong. Look at those sentences closely. Who gave you those sentences? Was it a parent? A former boss? A defeated teacher? 

Today, you are legally evicting those voices from your head. Starting right now, your past does not possess voting rights in your future.`,
      amazonUrl: "https://book.fromtheguttertogreatness.com/",
      districtAdopted: "68 Schools / 32 Youth Leadership Programs"
    },
    {
      id: "we-need-to-do-better",
      volume: "VOLUME 03",
      badge: "FLAGSHIP TREATISE",
      title: "We Need To Do Better",
      subtitle: "A Truth-Telling Call to Action for American Education",
      cover: "/images/book-weneed.jpg",
      year: "2019",
      pages: "216 Pages",
      isbn: "978-1-953806-02-9",
      format: "Hardcover · eBook",
      category: "Education Policy & Institutional Reform",
      tagline: "The scathing critique that launched a nationwide movement for school excellence.",
      desc: "Expanding on Dr. Miller’s seminal TEDx talk viewed by over 100,000 educators. A fearless expose of bureaucratic excuses in urban education and a playbook for school boards, superintendents, and parents who refuse to accept mediocre outcomes for Black and Brown children.",
      authorNote: "When a school fails year after year, it is not an accident of nature; it is adult negligence masquerading as budget constraints. We must do better.",
      takeaways: [
        "Why good intentions without rigorous metrics produce tragic student outcomes",
        "Rebuilding teacher culture around unwavering belief and competitive championship pride",
        "The Parental Empowerment Doctrine: moving families from spectators to co-CEOs",
        "Real metrics: moving high-poverty urban high schools to ~95% graduation rates"
      ],
      excerptTitle: "Chapter 1: The Soft Bigotry of Low Expectations",
      excerptText: `Every conference room in every district office is filled with passionate adults reciting all the reasons why inner-city children cannot read on grade level. They cite poverty. They cite single-parent homes. They cite neighborhood violence.

I know all those realities intimately because I lived every one of them. And that is precisely why I will never accept them as an excuse for an illiterate diploma. When you lower the bar out of 'pity', you commit the ultimate act of cruelty.`,
      amazonUrl: "https://www.amazon.com/",
      districtAdopted: "28 University Education Departments"
    },
    {
      id: "we-need-better-2",
      volume: "VOLUME 04",
      badge: "REVISED & EXPANDED",
      title: "We Need To Do Better 2.0",
      subtitle: "The Next Era of Urban School Reform & Retention",
      cover: "/images/book-weneed-2.jpg",
      year: "2023",
      pages: "264 Pages",
      isbn: "978-1-953806-08-1",
      format: "Hardcover · Paperback · Audiobook",
      category: "Superintendent & Leadership Operations",
      tagline: "Post-pandemic turnaround playbooks, staff retention, and cultural restoration.",
      desc: "The next-generation edition analyzing the catastrophic post-pandemic literacy declines and providing administrators with concrete retention systems, instructional pipeline designs, and cultural reset playbooks tested in real turnaround school environments.",
      authorNote: "Schools didn't just lose academic time after 2020; they lost their emotional equilibrium. 2.0 is the restorative medicine for leadership fatigue.",
      takeaways: [
        "Accelerated learning recovery frameworks that bypass remedial stagnation",
        "Preventing teacher burnout through distributed leadership architectures",
        "Longitudinal data systems: how Green Tech sustained 90%+ rates over a decade",
        "Managing superintendent cabinet politics during public scrutiny"
      ],
      excerptTitle: "Chapter 3: Restoring the Classroom Sanctuary",
      excerptText: `You cannot fix reading scores until you restore emotional safety and cultural dignity. Children who feel invisible will never gamble on academic vulnerability. We reconstructed our entire school culture around one unbreakable decree: 'In this building, excellence is non-negotiable, and love is unconditional.'`,
      amazonUrl: "https://www.amazon.com/",
      districtAdopted: "42 State & District Cabinet Libraries"
    },
    {
      id: "good-me-hood-me",
      volume: "VOLUME 05",
      badge: "YOUTH & ADULT CURRICULUM",
      title: "The Good Me vs. The Hood Me",
      subtitle: "Winning the Internal Battle for Your Destiny",
      cover: "/images/book-goodhood.webp",
      year: "2022",
      pages: "192 Pages",
      isbn: "978-1-953806-04-3",
      format: "Paperback · Youth Curriculum Guide",
      category: "Mindset Duality / Youth Self-Governance",
      tagline: "Giving language to the unspoken war between who we are and who we can become.",
      desc: "An unflinching, psychologically profound look at the duality inside young men and leaders who grew up around survival environments. Dr. Miller offers practical strategies to tame destructive survival instincts without losing street intelligence and raw resilience.",
      authorNote: "Your survival skills got you through the storm. But those same survival skills will sink your ship in calm waters if you don't learn self-governance.",
      takeaways: [
        "Identifying the hidden triggers that activate self-destructive responses",
        "Transforming defensive anger into constructive executive leverage",
        "The Code of Sovereignty: making decisions that your future self will thank you for",
        "Curriculum licensed across dozens of state juvenile diversion and leadership initiatives"
      ],
      excerptTitle: "Introduction: Two Wolves in the Same Chest",
      excerptText: `I have sat in executive boardrooms with senators and billionaire philanthropists. And I have stood in police lineups with sirens screaming outside. Both of those men live inside of me. 

The question every young person must answer is not 'Can you be tough?' The street can teach anyone how to be reckless. The real question is: Can you master the warrior inside you so he only fights for your future, never against it?`,
      amazonUrl: "https://link.fostio.com/preview/ngCdLeneA3xGmglXgAB4",
      districtAdopted: "115 High Schools & Juvenile Diversion Programs"
    },
    {
      id: "cyberbullying",
      volume: "VOLUME 06",
      badge: "ACADEMIC CO-AUTHOR",
      title: "Cyberbullying & Cyberthreats",
      subtitle: "Responding to Digital Aggression & Harassment in Schools",
      cover: "/images/book-cyberbullying.jpg",
      year: "Academic Reference",
      pages: "230 Pages",
      isbn: "978-0-87822-539-2",
      format: "Library Hardcover · Digital License",
      category: "School Safety / Restorative Justice",
      tagline: "Essential legal, ethical, and administrative protocols for the digital school climate.",
      desc: "A seminal academic text addressing the legal liability, emotional impact, and school-climate interventions required when harassment migrates online. Co-authored for educational administrators, guidance directors, and district legal counsel.",
      authorNote: "Bullying didn't stop at the schoolyard gate; it infiltrated our children's bedrooms at 2 AM. Administrators must have systemic, legally sound response mechanisms.",
      takeaways: [
        "Federal legal standards, Title IX implications, and district liability audits",
        "Restorative intervention protocols that de-escalate digital harassment networks",
        "Building digital citizenship into daily school curriculum",
        "Parental partnership protocols during online crisis events"
      ],
      excerptTitle: "Chapter 2: The Invisibility Shield of the Screen",
      excerptText: `When cruelty is mediated by a glass screen, empathy becomes anesthetized. Students post things they would never dare articulate face-to-face. Leaders who treat digital aggression as 'harmless teenage drama' invite catastrophic legal and human failure into their schools.`,
      amazonUrl: "https://www.amazon.com/",
      districtAdopted: "Over 300 University Libraries & District Counsel Offices"
    }
  ];

  const currentBook = books[selectedBookIndex];

  return (
    <div className="selection:bg-[#2D0891] selection:text-white min-h-screen">
      
      {/* ========================================================
          1. CINEMATIC MONOGRAPH HERO (BLACK BACKGROUND)
      ======================================================== */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-end pt-28 pb-8 sm:pb-10 overflow-hidden bg-[#0B0A09] text-white">
        
        {/* Background Full-Bleed Video with Softened Dark Overlay */}
        <HeroVideoBackground 
          videoId="WNhaIiadvYo" 
          title="Dr. Paul Miller Published Monograph Archive" 
        />

        {/* Central Stage: Title, Subtitle, 2 Buttons & Stats at Middle Bottom */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 sm:px-12 w-full text-center flex flex-col items-center space-y-6">
          
          {/* Main Title */}
          <h1 className="font-archivo text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-white leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
            Published Library
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 font-semibold max-w-3xl">
            6 PUBLISHED MONOGRAPHS · BLUEPRINTS FOR SOVEREIGN LEADERSHIP & RESILIENCE
          </p>

          {/* 2 Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#monograph-stage"
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/40 shadow-[#2D0891]/40"
            >
              <BookOpen className="w-3.5 h-3.5 text-white" />
              <span>Explore 6 Monographs</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </a>

            <button
              onClick={() => onOpenBooking('District Bulk Licensing & Curriculum Adoption')}
              className="px-7 py-4 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white font-sans font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Order District Bundles</span>
            </button>
          </div>

          {/* Micro Stats Counter */}
          <div className="pt-6 border-t border-white/15 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-xs text-center">
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">CIRCULATION</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">180,000+</div>
              </div>
              <div>
                <div className="text-white/50 uppercase text-[10px] font-semibold">DISTRICT ADOPTION</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">120+ DISTRICTS</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-white/50 uppercase text-[10px] font-semibold">CORE VOLUMES</div>
                <div className="font-archivo text-xl sm:text-2xl font-bold text-white mt-0.5">6 TITLES</div>
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
          INTERACTIVE SPOTLIGHT STAGE
      ======================================================== */}
      <section id="monograph-stage" className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] mb-2 font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D0891]" />
                <span>EXHIBITION SPOTLIGHT · INTERACTIVE MONOGRAPH SELECTOR</span>
              </div>
              <h2 className="font-archivo text-3xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
                Select a volume to examine.
              </h2>
            </div>
            <p className="font-sans text-sm text-[#0B0A09]/70 max-w-md">
              Inspect volume specifications, core educational thesis, look inside sample chapters, and order directly.
            </p>
          </div>

          {/* Interactive Volume Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {books.map((b, idx) => {
              const isSelected = selectedBookIndex === idx;
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBookIndex(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? 'bg-[#2D0891] border-[#2D0891] shadow-lg shadow-[#2D0891]/25 text-white'
                      : 'bg-[#f4eee3] border-[#E5DFD5] hover:border-[#0B0A09]/30 text-[#0B0A09]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-white' : 'text-[#2D0891]'
                    }`}>
                      {b.volume}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </div>
                  <div className={`font-archivo font-bold text-xs sm:text-sm line-clamp-2 leading-snug mt-2 ${
                    isSelected ? 'text-white' : 'text-[#0B0A09]'
                  }`}>
                    {b.title}
                  </div>
                  <div className={`font-mono text-[9px] uppercase tracking-wider mt-1 ${
                    isSelected ? 'text-white/70' : 'text-[#0B0A09]/50'
                  }`}>
                    {b.pages}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Book Showcase Stage */}
          <div className="bg-[#f4eee3] border border-[#E5DFD5] rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-lg">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-[320px] aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl border border-black/10 bg-black">
                  <img
                    src={currentBook.cover}
                    alt={currentBook.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] text-[#0B0A09]/60">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD5]">{currentBook.format}</span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD5]">{currentBook.isbn}</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#2D0891] text-white font-bold tracking-wider uppercase">
                    {currentBook.badge}
                  </span>
                  <span className="text-[#2D0891] font-bold tracking-wider">
                    {currentBook.volume} · {currentBook.year}
                  </span>
                  <span className="text-[#0B0A09]/40">·</span>
                  <span className="text-[#0B0A09]/60 font-medium">{currentBook.category}</span>
                </div>

                <div>
                  <h3 className="font-archivo text-3xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight leading-tight">
                    {currentBook.title}
                  </h3>
                  <p className="font-sans text-lg sm:text-xl text-[#0B0A09]/70 font-medium mt-1">
                    {currentBook.subtitle}
                  </p>
                </div>

                {/* Author's Thesis Note Quote */}
                <div className="bg-white border-l-4 border-[#2D0891] p-5 rounded-r-2xl space-y-2 border-y border-r border-[#E5DFD5]">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#2D0891] font-bold">
                    <Quote className="w-3.5 h-3.5" />
                    <span>AUTHOR’S THESIS STATEMENT</span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-[#0B0A09]/85 italic leading-relaxed">
                    "{currentBook.authorNote}"
                  </p>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[#0B0A09]/50 font-bold">
                    — DR. PAUL MILLER
                  </div>
                </div>

                <p className="font-sans text-sm sm:text-base text-[#0B0A09]/75 leading-relaxed">
                  {currentBook.desc}
                </p>

                <div className="space-y-2.5 pt-2 border-t border-[#E5DFD5]">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#0B0A09]/50 font-bold">
                    CORE STRATEGIC TAKEAWAYS & FRAMEWORKS:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentBook.takeaways.map((takeaway, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B0A09]/85 bg-white p-3 rounded-xl border border-[#E5DFD5]">
                        <Check className="w-4 h-4 text-[#2D0891] shrink-0 mt-0.5" />
                        <span className="leading-snug">{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#2D0891] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Documented Adoption: {currentBook.districtAdopted}</span>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href={currentBook.amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-7 py-3.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#2D0891]/25 hover:scale-105 active:scale-95"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Order Direct Copy</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setExcerptModalOpen(true)}
                    className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#0B0A09] font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer border border-[#E5DFD5] shadow-sm"
                  >
                    <BookOpen className="w-4 h-4 text-[#2D0891]" />
                    <span>Look Inside (Sample Excerpt)</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(`Bulk District Licensing: ${currentBook.title}`)}
                    className="px-6 py-3.5 rounded-full border border-[#0B0A09]/20 hover:border-[#0B0A09] text-[#0B0A09] font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Bulk District Pack</span>
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          COMPLETE 6-VOLUME DIRECTORY
      ======================================================== */}
      <section className="py-24 bg-[#f4eee3] border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D0891]" />
              <span>THE ARCHIVE DIRECTORY</span>
            </div>
            <h2 className="font-archivo text-3xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
              The Complete Monograph Collection.
            </h2>
            <p className="font-sans text-base text-[#0B0A09]/70">
              Every volume published by Dr. Paul Miller, cataloged in chronological order of institutional impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, idx) => (
              <div
                key={book.id}
                className="bg-white border border-[#E5DFD5] rounded-[28px] p-7 flex flex-col justify-between hover:border-[#2D0891]/40 hover:shadow-xl transition-all duration-300 group relative"
              >
                <div>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#f4eee3] border border-[#E5DFD5] flex items-center justify-center p-4 relative group-hover:bg-[#FAF7F2] transition-colors">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="h-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-500 shadow-xl rounded-lg"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0A09] text-white px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold">
                      {book.volume}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#2D0891] text-white px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold">
                      {book.year}
                    </div>
                  </div>

                  <div className="pt-6 space-y-2">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#2D0891] font-bold">
                      {book.badge} · {book.pages}
                    </div>
                    <h3 className="font-archivo text-xl sm:text-2xl font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors leading-snug">
                      {book.title}
                    </h3>
                    <p className="font-mono text-xs text-[#0B0A09]/60 tracking-wider uppercase">
                      {book.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-[#0B0A09]/70 leading-relaxed mt-4 line-clamp-3">
                    {book.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DFD5] flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      setSelectedBookIndex(idx);
                      document.getElementById('monograph-stage')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-[#2D0891] hover:text-[#0B0A09] transition-colors flex items-center gap-1 cursor-pointer font-bold"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-sans font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <ShoppingCart className="w-3 h-3" />
                    <span>Order</span>
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================
          CONFERENCE SIGNINGS & READER COMMUNITY (NABSE SHOWCASE)
      ======================================================== */}
      <section className="py-24 bg-white border-b border-[#E2DDD3]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#2D0891] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D0891]" />
                <span>READER COMMUNITY · NABSE CONFERENCE</span>
              </div>
              <h2 className="font-archivo text-3xl sm:text-5xl font-bold text-[#0B0A09] tracking-tight">
                Adopted Across School Districts & Educator Networks.
              </h2>
            </div>
            <p className="font-sans text-sm text-[#0B0A09]/70 max-w-md">
              Superintendents, principals, and national educators adopting Dr. Miller’s books and workbooks across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/images/drpmiller/nabse-dr-miller-7476.jpg",
                tag: "NABSE NATIONAL CONFERENCE",
                title: "Educators Holding the Full Monograph Suite",
                caption: "Leaders connecting with Cyberbullying, From the Gutter to Greatness, and the 21-Day Challenge Workbook."
              },
              {
                img: "/images/drpmiller/nabse-dr-miller-7528.jpg",
                tag: "BOOK SIGNING & EXHIBIT",
                title: "Taking Setbacks to Setups Across Districts",
                caption: "One-on-one author conversations at the From the Gutter to Greatness booth."
              },
              {
                img: "/images/drpmiller/nabse-dr-miller-7545.jpg",
                tag: "AUTHOR ENGAGEMENT",
                title: "Direct Signed Editions for Leaders",
                caption: "Equipping teachers and administrators with actionable turnaround toolkits."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-[24px] overflow-hidden border border-[#E5DFD5] bg-[#FAF7F2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#0B0A09] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B0A09]/80 backdrop-blur-md text-white font-mono text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-archivo text-lg font-bold text-[#0B0A09] group-hover:text-[#2D0891] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#0B0A09]/70 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      </div>

      {/* Excerpt Modal */}
      {excerptModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white text-[#0B0A09] border border-[#E5DFD5] rounded-[28px] max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-6 border-b border-[#E5DFD5] flex items-center justify-between bg-[#f4eee3]">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#2D0891] font-bold">
                  {currentBook.volume} · LOOK INSIDE EXCERPT
                </div>
                <h4 className="font-archivo font-bold text-lg sm:text-xl text-[#0B0A09]">
                  {currentBook.title}
                </h4>
              </div>
              <button
                onClick={() => setExcerptModalOpen(false)}
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 text-[#0B0A09] flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-sm sm:text-base text-[#0B0A09]/80 leading-relaxed">
              <div className="border-b border-[#E5DFD5] pb-4 font-mono text-xs uppercase tracking-widest text-[#0B0A09]/60 font-bold">
                {currentBook.excerptTitle}
              </div>
              {currentBook.excerptText.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="font-normal leading-relaxed">{paragraph}</p>
              ))}
            </div>
            <div className="p-5 border-t border-[#E5DFD5] bg-[#f4eee3] flex items-center justify-between gap-4">
              <span className="font-mono text-xs text-[#0B0A09]/60">{currentBook.pages} · {currentBook.format}</span>
              <a
                href={currentBook.amazonUrl}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider"
              >
                Purchase Volume
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
