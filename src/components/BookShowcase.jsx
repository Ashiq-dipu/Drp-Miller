import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, ShoppingBag, BookOpen, ExternalLink, Sparkles, CheckCircle2, ChevronRight, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function BookShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const cardContainerRef = useRef(null);
  const textContentRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const touchStartX = useRef(0);

  const books = [
    {
      id: "gutter-greatness",
      vol: "VOL 01",
      volumeNum: "01",
      badge: "FLAGSHIP MEMOIR",
      title: "From the Gutter to Greatness",
      highlightWord: "Greatness.",
      headlinePrefix: "Transforming struggle into sovereign",
      subtitle: "The Autobiography of Unshakeable Resilience",
      cover: "/images/book-gutter.jpg",
      year: "2021 Best-Seller",
      pages: "248 Pages",
      format: "Hardcover · Paperback · Audible",
      category: "Autobiography / Leadership Turnaround",
      desc: "Dr. Miller’s ascent from Rochester public housing, systemic street-level violence, and deep generational trauma to becoming an urban CEO achieving ~95% graduation rates. The foundational blueprint for sovereign leadership.",
      readers: "50,000+ Readers",
      adoption: "54 Districts / 18 Charter Networks",
      link: "https://book.fromtheguttertogreatness.com/",
      buttonLabel: "Shop the Hardcover"
    },
    {
      id: "gutter-workbook",
      vol: "VOL 02",
      volumeNum: "02",
      badge: "ACTION WORKBOOK",
      title: "The 21-Day Challenge",
      highlightWord: "Armor.",
      headlinePrefix: "Hammering daily habits into unbreakable",
      subtitle: "Daily Action Guide for High Performance",
      cover: "/images/book-gutter-wb.webp",
      year: "2020 Action Lab",
      pages: "180 Pages",
      format: "Spiral Bound · Digital Interactive",
      category: "Personal Conditioning / Habit Restructuring",
      desc: "The practical companion lab to the bestselling memoir. Packed with step-by-step diagnostic audits, non-negotiable morning protocols, and accountability frameworks to destroy self-sabotage in three weeks.",
      readers: "32,000+ Active Labs",
      adoption: "68 Schools / 32 Youth Cohorts",
      link: "https://book.fromtheguttertogreatness.com/",
      buttonLabel: "Get the Workbook"
    },
    {
      id: "we-need-to-do-better",
      vol: "VOL 03",
      volumeNum: "03",
      badge: "EDUCATION REFORM",
      title: "We Need to Do Better",
      highlightWord: "Better.",
      headlinePrefix: "A truth-telling battle cry for American",
      subtitle: "The Blueprint for Educational Reform",
      cover: "/images/book-weneed.jpg",
      year: "2019 National Treatise",
      pages: "216 Pages",
      format: "Hardcover · eBook",
      category: "Education Policy & Institutional Reform",
      desc: "Expanding on Dr. Miller’s seminal TEDx keynote viewed by over 100,000 educators. A fearless critique of institutional excuses and an undeniable operational roadmap for school turnaround and championship belief.",
      readers: "45,000+ Educators",
      adoption: "28 University Education Depts",
      link: "https://www.amazon.com/We-Need-Better-Community-Education/dp/1633082180",
      buttonLabel: "Order on Amazon"
    },
    {
      id: "we-need-better-2",
      vol: "VOL 04",
      volumeNum: "04",
      badge: "TEACHER EDITION",
      title: "We Need to Do Better 2.0",
      highlightWord: "Classrooms.",
      headlinePrefix: "Real operational strategies for real",
      subtitle: "The Classroom Playbook for Educators",
      cover: "/images/book-weneed-2.jpg",
      year: "2022 Faculty Edition",
      pages: "192 Pages",
      format: "Paperback · Faculty Guidebook",
      category: "Classroom Management & Faculty Culture",
      desc: "Field-tested playbooks, trauma-informed discipline models, and relational accountability methods deployed across hundreds of urban classrooms nationwide to retain world-class teachers and ignite student pride.",
      readers: "18,000+ Faculty",
      adoption: "85 K-12 Partner Districts",
      link: "https://edceptional.org/",
      buttonLabel: "Get Faculty Guide"
    },
    {
      id: "good-me-hood-me",
      vol: "VOL 05",
      volumeNum: "05",
      badge: "MINDSET & IDENTITY",
      title: "The Good Me & The Hood Me",
      highlightWord: "Destiny.",
      headlinePrefix: "Mastering internal conflict to command your",
      subtitle: "Navigating Internal Conflict & Identity",
      cover: "/images/book-goodhood.webp",
      year: "2023 Identity Series",
      pages: "204 Pages",
      format: "Paperback · Audiobook",
      category: "Youth Mentorship / Identity Psychology",
      desc: "An unflinching exploration of dual identity, survival instincts, and psychological self-mastery. Guiding young leaders and executives to reconcile where they came from with where they are destined to lead.",
      readers: "25,000+ Youth & Young Execs",
      adoption: "40+ Collegiate Programs",
      link: "https://link.fostio.com/preview/ngCdLeneA3xGmglXgAB4",
      buttonLabel: "Explore Monograph"
    },
    {
      id: "cyberbullying",
      vol: "VOL 06",
      volumeNum: "06",
      badge: "DIGITAL SAFETY",
      title: "Cyberbullying: Breaking The Cycle",
      highlightWord: "Youth.",
      headlinePrefix: "Modern diagnostic frameworks protecting our",
      subtitle: "Digital Safety for Youth & Classrooms",
      cover: "/images/book-cyberbullying.jpg",
      year: "2021 Safety Directive",
      pages: "168 Pages",
      format: "Paperback · Institutional Kit",
      category: "Youth Safety & Digital Ethics",
      desc: "Empowering parents, educators, and adolescents with modern diagnostic frameworks to detect, de-escalate, and eradicate digital harassment, online psychological abuse, and toxic peer cultures.",
      readers: "15,000+ Parents & Counselors",
      adoption: "110+ Middle & High Schools",
      link: "https://www.amazon.com/",
      buttonLabel: "Order Safety Guide"
    }
  ];

  const total = books.length;
  const currentBook = books[currentIndex];
  
  // Previous and Next indices for 3D card fan
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;
  const prevBook = books[prevIndex];
  const nextBook = books[nextIndex];

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => setIsAnimating(false), 320);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => setIsAnimating(false), 320);
  };

  const goToSlide = (idx) => {
    if (idx === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
    setTimeout(() => setIsAnimating(false), 320);
  };

  // Auto-scroll loop: swift & easy automatic transitions every 3.8s when not paused
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  // Keep volume tabs smoothly centered on active index (HORIZONTAL ONLY - never scrolls the window)
  useEffect(() => {
    if (currentIndex === 0) return;
    const container = tabsContainerRef.current;
    if (!container) return;
    const activeTab = container.children[currentIndex];
    if (activeTab) {
      const targetScroll = activeTab.offsetLeft - (container.clientWidth / 2) + (activeTab.clientWidth / 2);
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Touch gesture handling
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    // Resume auto-scroll after a short delay
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Swift & Easy GSAP entrance animation on active book change
  useGSAP(() => {
    // 1. Center Card: Swift, effortless kinetic glide
    gsap.fromTo(
      '.center-card',
      {
        x: direction * 35,
        opacity: 0.35,
        scale: 0.96,
        rotateY: direction * -4
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotateY: 0,
        duration: 0.35,
        ease: 'power3.out',
        overwrite: 'auto'
      }
    );

    // 2. Editorial Typography: Swift fluid stagger
    if (textContentRef.current) {
      gsap.fromTo(
        textContentRef.current.querySelectorAll('.animate-text'),
        {
          opacity: 0,
          y: 12
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.025,
          ease: 'power2.out',
          overwrite: 'auto'
        }
      );
    }
  }, { scope: containerRef, dependencies: [currentIndex] });

  return (
    <section 
      id="books" 
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-20 sm:py-28 lg:py-32 bg-[#F5EFE6] text-[#0B0A09] relative overflow-hidden select-none"
    >
      <style>{`
        @keyframes bookAutoTimer {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
      {/* Background Subtle Warm Decorative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 -right-48 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#EBDDC8]/60 blur-3xl" />
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#E5D5BF]/40 blur-3xl" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Top Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 sm:mb-16 pb-6 border-b border-[#0B0A09]/10">
          <div className="flex items-center gap-3">
            <h2 className="font-archivo text-xl sm:text-2xl font-bold text-[#0B0A09] tracking-tight">
              Published Works & Curricula
            </h2>
          </div>

          {/* Quick Volume Selector Tabs */}
          <div ref={tabsContainerRef} className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {books.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => goToSlide(idx)}
                className={`px-3 py-1.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'bg-[#0B0A09] text-white shadow-sm scale-105'
                    : 'bg-[#0B0A09]/5 hover:bg-[#0B0A09]/10 text-[#0B0A09]/70'
                }`}
              >
                {b.vol}
              </button>
            ))}
          </div>
        </div>

        {/* Main 2-Column Split: Exactly Mirroring Inspiration Showcase */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ========================================================
              LEFT COLUMN: Editorial Typography & Actions
          ======================================================== */}
          <div ref={textContentRef} className="lg:col-span-6 space-y-6 sm:space-y-8">
            
            {/* Author Handle / Volume Pill (Mirrors @lena.goldhour hi, I'm Lena!) */}
            <div className="animate-text flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#0B0A09]/10 shadow-sm backdrop-blur-sm">
                <img 
                  src="/images/drpmiller/about-portrait-v2-transparent.png" 
                  alt="Dr. Paul Miller" 
                  className="w-5 h-5 rounded-full object-cover object-top bg-[#2D0891]" 
                />
                <span className="font-sans font-semibold text-xs text-[#0B0A09]">
                  @drpaulmiller
                </span>
                <span className="text-[#0B0A09]/30">·</span>
                <span className="font-mono text-[10px] uppercase font-bold text-[#B64218] tracking-wider">
                  {currentBook.badge}
                </span>
              </div>
              <span className="font-mono text-xs text-[#0B0A09]/50 font-bold tracking-widest">
                VOL {currentBook.volumeNum} / 06
              </span>
            </div>

            {/* Giant Editorial Headline with Signature Hand-Drawn Wavy Underline */}
            <div className="animate-text space-y-2">
              <h2 className="font-archivo text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B0A09] tracking-tight leading-[1.08]">
                {currentBook.title}.
              </h2>
              <div className="relative inline-block">
                <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#0B0A09]/80 font-normal mt-2">
                  {currentBook.subtitle}
                </p>
                {/* Decorative Accent Underline Echoing the Reference Screenshot */}
                <svg 
                  className="w-44 sm:w-56 h-3 text-[#B64218] mt-1 overflow-visible" 
                  viewBox="0 0 200 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 9C50 2 150 2 198 9" 
                    stroke="currentColor" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>
            </div>

            {/* Descriptive Body Paragraph */}
            <p className="animate-text font-sans text-base sm:text-lg text-[#0B0A09]/75 font-light leading-relaxed max-w-xl">
              {currentBook.desc}
            </p>

            {/* Specification Tags */}
            <div className="animate-text flex flex-wrap items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-lg bg-white/70 border border-[#0B0A09]/10 font-mono text-[11px] text-[#0B0A09]/80 font-medium">
                {currentBook.format}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/70 border border-[#0B0A09]/10 font-mono text-[11px] text-[#0B0A09]/80 font-medium">
                {currentBook.pages}
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/70 border border-[#0B0A09]/10 font-mono text-[11px] text-[#0B0A09]/80 font-medium">
                {currentBook.year}
              </span>
            </div>

            {/* Action Buttons (Mirrors "Shop the drop ->" & "Media kit") */}
            <div className="animate-text flex flex-wrap items-center gap-4 pt-2">
              <a
                href={currentBook.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#0B0A09] hover:bg-[#2D0891] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>{currentBook.buttonLabel}</span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3 h-3 text-white" />
                </div>
              </a>

              <Link
                to="/books"
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white text-[#0B0A09] font-sans font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 border border-[#0B0A09]/15 shadow-sm hover:shadow hover:scale-102 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#2D0891]" />
                <span>Examine All 6 Works</span>
              </Link>
            </div>

            {/* Social Proof Avatars / Stats (Mirrors 1.4M followers row) */}
            <div className="animate-text pt-4 border-t border-[#0B0A09]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* Overlapping Avatars */}
                <div className="flex -space-x-2">
                  <span className="inline-block w-8 h-8 rounded-full ring-2 ring-[#F5EFE6] bg-[#2D0891] text-white font-archivo text-xs font-bold flex items-center justify-center">
                    GT
                  </span>
                  <span className="inline-block w-8 h-8 rounded-full ring-2 ring-[#F5EFE6] bg-[#B64218] text-white font-archivo text-xs font-bold flex items-center justify-center">
                    NY
                  </span>
                  <span className="inline-block w-8 h-8 rounded-full ring-2 ring-[#F5EFE6] bg-[#0B0A09] text-white font-archivo text-xs font-bold flex items-center justify-center">
                    PM
                  </span>
                </div>
                <div className="text-xs font-sans text-[#0B0A09]/80 font-medium">
                  <span className="font-bold text-[#0B0A09]">{currentBook.readers}</span> · {currentBook.adoption}
                </div>
              </div>

              {/* Prev / Next Slider Controls with Auto-Scroller Timer */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => { setIsPaused(true); goToPrev(); }}
                  aria-label="Previous book"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#0B0A09]/15 shadow-sm hover:shadow flex items-center justify-center text-[#0B0A09] hover:text-[#2D0891] transition-all cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex flex-col items-center">
                  <div className="font-mono text-xs font-bold text-[#0B0A09]/70 px-2 min-w-[50px] text-center">
                    {currentBook.volumeNum} / 06
                  </div>
                  {/* Auto-scroll progress line */}
                  <div className="w-12 h-1 bg-[#0B0A09]/10 rounded-full overflow-hidden mt-1">
                    <div 
                      key={currentIndex}
                      className={`h-full bg-[#B64218] rounded-full w-full ${isPaused ? 'opacity-30' : ''}`}
                      style={{
                        animation: isPaused ? 'none' : 'bookAutoTimer 3.8s linear infinite',
                        transformOrigin: 'left'
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => { setIsPaused(true); goToNext(); }}
                  aria-label="Next book"
                  className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#0B0A09]/15 shadow-sm hover:shadow flex items-center justify-center text-[#0B0A09] hover:text-[#2D0891] transition-all cursor-pointer active:scale-95"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: Layered 3D Card Stack (Exactly Like Screenshot)
          ======================================================== */}
          <div 
            ref={cardContainerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[560px] py-6 select-none"
          >
            {/* Circular Warm Ambient Halo Behind Stack */}
            <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-[#E5D7C2]/70 blur-2xl -z-10 pointer-events-none" />

            {/* Container for the 3D layered cards */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[9/13] flex items-center justify-center">
              
              {/* 1. LEFT TILTED BACKGROUND CARD (Previous Book) */}
              <div
                onClick={goToPrev}
                title={`Previous: ${prevBook.title}`}
                className="absolute left-[-28px] sm:left-[-48px] top-6 bottom-6 w-[86%] rounded-[28px] overflow-hidden bg-white/40 shadow-xl border border-[#0B0A09]/10 -rotate-8 sm:-rotate-10 -translate-x-2 scale-90 opacity-60 hover:opacity-90 transition-all duration-300 ease-out cursor-pointer filter brightness-95 hover:brightness-100 z-0"
              >
                <img
                  src={prevBook.cover}
                  alt={prevBook.title}
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-[#0B0A09]/20" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-mono text-[9px] uppercase font-bold text-[#0B0A09]">
                  {prevBook.vol}
                </div>
              </div>

              {/* 2. RIGHT TILTED BACKGROUND CARD (Next Book) */}
              <div
                onClick={goToNext}
                title={`Next: ${nextBook.title}`}
                className="absolute right-[-28px] sm:right-[-48px] top-6 bottom-6 w-[86%] rounded-[28px] overflow-hidden bg-white/40 shadow-xl border border-[#0B0A09]/10 rotate-8 sm:rotate-10 translate-x-2 scale-90 opacity-60 hover:opacity-90 transition-all duration-300 ease-out cursor-pointer filter brightness-95 hover:brightness-100 z-0"
              >
                <img
                  src={nextBook.cover}
                  alt={nextBook.title}
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-[#0B0A09]/20" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full font-mono text-[9px] uppercase font-bold text-[#0B0A09]">
                  {nextBook.vol}
                </div>
              </div>

              {/* 3. CENTER ACTIVE CARD (Centerpiece with Phone/Monograph Bezel & Overlay) */}
              <div className="center-card relative z-20 w-full h-full rounded-[30px] sm:rounded-[34px] p-2 bg-[#0B0A09] shadow-[0_30px_70px_rgba(11,10,9,0.35)] ring-1 ring-black/10 overflow-hidden flex flex-col justify-between group">
                
                {/* Center Book Cover Display */}
                <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-black">
                  <img
                    src={currentBook.cover}
                    alt={currentBook.title}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-103 transition-transform duration-700"
                  />

                  {/* Gradient Vignette over cover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                  {/* Top Floating Badge Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#0B0A09]/80 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold tracking-wider border border-white/20 shadow-sm">
                      {currentBook.vol} · {currentBook.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0B0A09] font-mono text-[10px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
                      <Bookmark className="w-3 h-3 text-[#B64218]" />
                      <span>{currentBook.year}</span>
                    </span>
                  </div>

                  {/* FLOATING BOTTOM OVERLAY CARD: Exactly Like Screenshot "Morning, I'm Lena" card */}
                  <div className="absolute bottom-3 left-3 right-3 z-20">
                    <div className="bg-[#FFFDF9]/95 backdrop-blur-md p-4 sm:p-5 rounded-[22px] shadow-2xl border border-black/10 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#B64218] font-bold">
                          {currentBook.category.split('/')[0]}
                        </span>
                        <span className="font-mono text-[10px] font-semibold text-[#0B0A09]/50">
                          {currentBook.pages}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-archivo text-base sm:text-lg font-bold text-[#0B0A09] line-clamp-1 leading-snug">
                          {currentBook.title}
                        </h3>
                        <p className="font-sans text-xs text-[#0B0A09]/70 line-clamp-2 leading-relaxed mt-0.5 font-normal">
                          {currentBook.subtitle}. {currentBook.desc}
                        </p>
                      </div>

                      {/* Mini Action Button */}
                      <a
                        href={currentBook.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl bg-[#0B0A09] hover:bg-[#2D0891] text-white font-sans text-xs font-bold flex items-center justify-between transition-colors cursor-pointer group/btn"
                      >
                        <span>{currentBook.buttonLabel}</span>
                        <ChevronRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
