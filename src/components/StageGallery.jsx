import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function StageGallery({ onPlayVideo }) {
  const containerRef = useRef(null);
  const railRef = useRef(null);
  const trackRef = useRef(null);
  const quoteRef = useRef(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Drag & Inertia physics state
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    currentX: 0,
    velocity: 0,
    lastX: 0,
    maxX: 0,
    targetX: null,
    scrollProgressOffset: 0
  });

  // Autoplay video elements on mount
  useEffect(() => {
    if (trackRef.current) {
      const vids = trackRef.current.querySelectorAll('video');
      vids.forEach((v) => {
        v.play().catch(() => {});
      });
    }
  }, []);

  const quotes = [
    {
      text: "Dr. Paul Miller didn’t just deliver a keynote; he electrified our entire leadership conference. His raw authenticity from the Rochester projects to turnaround CEO had 1,200 leaders on their feet.",
      author: "MARCUS HOLLOWAY",
      role: "ANNUAL CONVENTION CHAIR"
    },
    {
      text: "The single most impactful guest speaker we have hosted in a decade. His Framework of Sovereign Leadership provided our superintendents with actionable tools that are still in practice.",
      author: "DR. CYNTHIA ADAMS",
      role: "EXECUTIVE SUPERINTENDENTS ALLIANCE"
    },
    {
      text: "Uncompromising clarity and undeniable stage command. When Dr. Miller takes the microphone, the room doesn't just listen—they transform.",
      author: "ARTHUR STERLING",
      role: "CHIEF LEARNING OFFICER"
    }
  ];

  // Alternating 1, 3, 5, 7, 9, 11 Shorts with 2, 4, 6, 8, 10, 12 Photos
  const slides = [
    // 1 - YouTube Short
    {
      type: "yt-short",
      videoId: "MFBatPnXmik",
      aspectClass: "w-[280px] sm:w-[320px] md:w-[350px]"
    },
    // 2 - Authentic Photo
    {
      type: "photo",
      image: "/images/dr-miller-speaking-audience.jpg",
      aspectClass: "w-[360px] sm:w-[460px] md:w-[500px]"
    },
    // 3 - YouTube Short
    {
      type: "yt-short",
      videoId: "_VuvPKybCVs",
      aspectClass: "w-[280px] sm:w-[320px] md:w-[350px]"
    },
    // 4 - Authentic Photo (NABSE Conference with Educators)
    {
      type: "photo",
      image: "/images/drpmiller/nabse-dr-miller-7476.jpg",
      aspectClass: "w-[360px] sm:w-[440px] md:w-[480px]"
    },
    // 5 - YouTube Short
    {
      type: "yt-short",
      videoId: "0yMAjKtCLyw",
      aspectClass: "w-[280px] sm:w-[320px] md:w-[350px]"
    },
    // 6 - Authentic Photo
    {
      type: "photo",
      image: "/images/ben-crump.jpg",
      aspectClass: "w-[360px] sm:w-[460px] md:w-[500px]"
    },
    // 7 - YouTube Short
    {
      type: "yt-short",
      videoId: "NZIRVc-sbN4",
      aspectClass: "w-[280px] sm:w-[320px] md:w-[350px]"
    },
    // 8 - Authentic Photo (NABSE Gutter to Greatness Booth)
    {
      type: "photo",
      image: "/images/drpmiller/nabse-dr-miller-7528.jpg",
      aspectClass: "w-[340px] sm:w-[420px] md:w-[460px]"
    },
    // 9 - YouTube Short
    {
      type: "yt-short",
      videoId: "Zto_HhTY6w0",
      aspectClass: "w-[280px] sm:w-[320px] md:w-[350px]"
    },
    // 10 - Authentic Photo
    {
      type: "photo",
      image: "/images/tedx-stage.jpg",
      aspectClass: "w-[360px] sm:w-[460px] md:w-[500px]"
    },
    // 11 - YouTube Short
    {
      type: "yt-short",
      videoId: "E2Z0MO6HdgI",
      aspectClass: "w-[280px] sm:w-[320px] md:w-[350px]"
    },
    // 12 - Authentic Photo (NABSE Book Signing & Reader)
    {
      type: "photo",
      image: "/images/drpmiller/nabse-dr-miller-7545.jpg",
      aspectClass: "w-[340px] sm:w-[420px] md:w-[460px]"
    }
  ];

  // Helper to calculate active slide based on current track position
  const updateActiveSlide = (pos) => {
    if (!trackRef.current || !railRef.current) return;
    const railWidth = railRef.current.clientWidth;
    const centerPoint = pos + railWidth / 2;
    const children = Array.from(trackRef.current.children);
    
    let closestIdx = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const mid = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(mid - centerPoint);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveSlideIndex(closestIdx);

    // Map active slide to 1 of 3 quotes
    const quoteIdx = Math.min(quotes.length - 1, Math.floor((closestIdx / slides.length) * quotes.length));
    setActiveQuoteIndex(quoteIdx);
  };

  // GSAP ScrollTrigger & Animation Lifecycle
  useGSAP(() => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;

    // Calculate maximum horizontal travel
    const updateMaxScroll = () => {
      const maxScroll = Math.max(0, track.scrollWidth - rail.clientWidth);
      dragRef.current.maxX = maxScroll;
    };
    updateMaxScroll();
    window.addEventListener('resize', updateMaxScroll);

    // ScrollTrigger: Smooth scrub horizontal slide as section scrolls past viewport
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
      onUpdate: (self) => {
        // If user is currently dragging manually, skip scroll scrubbing
        if (dragRef.current.isDragging) return;

        const max = dragRef.current.maxX;
        // Parallax glide: move track up to 60% of total max travel on vertical scroll
        const scrollOffset = self.progress * (max * 0.55);
        dragRef.current.scrollProgressOffset = scrollOffset;

        // Apply smooth GSAP hardware-accelerated transform
        const currentTarget = -(scrollOffset + (dragRef.current.targetX || 0));
        const clampedTarget = Math.max(-max, Math.min(0, currentTarget));

        gsap.to(track, {
          x: clampedTarget,
          duration: 0.25,
          ease: "power1.out",
          overwrite: "auto",
          onUpdate: () => {
            updateActiveSlide(Math.abs(gsap.getProperty(track, "x")));
          }
        });
      }
    });

    return () => {
      window.removeEventListener('resize', updateMaxScroll);
      st.kill();
    };
  }, { scope: containerRef, dependencies: [] });

  // Smooth step navigation via Arrows or Dots
  const moveByStep = (direction) => {
    const track = trackRef.current;
    const rail = railRef.current;
    if (!track || !rail) return;

    const stepWidth = Math.max(320, rail.clientWidth * 0.45);
    const currentX = gsap.getProperty(track, "x") || 0;
    const max = dragRef.current.maxX;

    const newTargetX = Math.max(-max, Math.min(0, currentX - direction * stepWidth));

    gsap.to(track, {
      x: newTargetX,
      duration: 0.65,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        updateActiveSlide(Math.abs(gsap.getProperty(track, "x")));
      }
    });
  };

  const goToQuoteIndex = (idx) => {
    setActiveQuoteIndex(idx);
    const track = trackRef.current;
    const max = dragRef.current.maxX;
    if (!track || max <= 0) return;

    const targetFraction = idx / (quotes.length - 1);
    const targetX = -(targetFraction * max * 0.8);

    gsap.to(track, {
      x: targetX,
      duration: 0.75,
      ease: "power2.out",
      overwrite: "auto",
      onUpdate: () => {
        updateActiveSlide(Math.abs(gsap.getProperty(track, "x")));
      }
    });
  };

  // Pointer drag event handlers (desktop grab & mobile touch)
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const track = trackRef.current;
    if (!track) return;

    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX;
    dragRef.current.lastX = e.clientX;
    dragRef.current.currentX = gsap.getProperty(track, "x") || 0;
    dragRef.current.velocity = 0;
    setIsGrabbing(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current.isDragging) return;
    const delta = e.clientX - dragRef.current.lastX;
    dragRef.current.lastX = e.clientX;
    dragRef.current.velocity = delta;

    const track = trackRef.current;
    const max = dragRef.current.maxX;
    const newX = Math.max(-max - 40, Math.min(40, (gsap.getProperty(track, "x") || 0) + delta));

    gsap.set(track, { x: newX });
    updateActiveSlide(Math.abs(newX));
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    setIsGrabbing(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    const track = trackRef.current;
    const max = dragRef.current.maxX;
    const currentX = gsap.getProperty(track, "x") || 0;
    const inertia = dragRef.current.velocity * 8;
    const targetX = Math.max(-max, Math.min(0, currentX + inertia));

    gsap.to(track, {
      x: targetX,
      duration: 0.65,
      ease: "power3.out",
      overwrite: "auto",
      onUpdate: () => {
        updateActiveSlide(Math.abs(gsap.getProperty(track, "x")));
      }
    });
  };

  // Safe click handler that only opens video modal if user was not actively dragging
  const handleCardClick = (e, videoId) => {
    if (!videoId) return;
    const distanceMoved = Math.abs(e.clientX - dragRef.current.startX);
    if (distanceMoved > 8) return; // gesture was a drag
    onPlayVideo(videoId);
  };

  // Animate quote transition when activeQuoteIndex changes
  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      );
    }
  }, [activeQuoteIndex]);

  return (
    <section
      id="watch"
      ref={containerRef}
      className="py-24 sm:py-32 bg-[#0B0A09] text-white border-t border-white/10 relative overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Header Block: On Stage & Live In The Field */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-archivo text-5xl sm:text-6xl lg:text-[76px] font-normal leading-[0.95] tracking-[-0.04em] text-white">
              Live on <br />
              <span className="text-white font-bold relative inline-flex items-center gap-2">
                stage.
                {/* Mainstage Spark Icon */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white inline-block" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1.5C12.9 8 16 11.1 22.5 12 16 12.9 12.9 16 12 22.5 11.1 16 8 12.9 1.5 12 8 11.1 11.1 8 12 1.5Z" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="font-mono text-xs text-white/60 uppercase tracking-[0.14em] font-medium">
              500+ KEYNOTES · 250,000+ AUDIENCE · 99% HIGH IMPACT
            </div>
            
            <a
              href="https://www.youtube.com/@FromtheGuttertoGreatness/shorts"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white font-sans font-medium text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer w-fit"
            >
              <span>Explore YouTube Shorts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Horizontal GSAP Rail & Track with Hardware Acceleration */}
      <div
        ref={railRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`w-full overflow-hidden px-6 sm:px-12 py-4 ${
          isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ touchAction: 'pan-y' }}
      >
        <ul
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-5 w-max list-none m-0 p-0 will-change-transform"
          style={{ transform: 'translate3d(0px, 0px, 0px)' }}
        >
          {slides.map((s, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <li
                key={idx}
                className={`relative shrink-0 rounded-[24px] overflow-hidden bg-[#161513] border border-white/10 hover:border-white/30 transition-all duration-700 ease-out h-[360px] sm:h-[480px] shadow-2xl ${
                  s.aspectClass || 'w-[320px] sm:w-[400px]'
                } ${isActive ? 'scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.9)] ring-1 ring-white/20' : 'opacity-85'}`}
              >
                {/* 1. YOUTUBE SHORTS (Autoplaying Muted Loop, Clean Edge-to-Edge, No Text) */}
                {s.type === 'yt-short' ? (
                  <div
                    onClick={(e) => handleCardClick(e, s.videoId)}
                    className="relative w-full h-full cursor-pointer overflow-hidden bg-black"
                  >
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${s.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${s.videoId}&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0`}
                      title=""
                      className="w-full h-full object-cover scale-[1.38] pointer-events-none filter contrast-105"
                      allow="autoplay; encrypted-media"
                      tabIndex="-1"
                    />
                  </div>
                ) : (
                  /* 2. AUTHENTIC PHOTO SLIDE (Clean Edge-to-Edge, No Text) */
                  <div className="relative w-full h-full overflow-hidden bg-[#161513]">
                    <img
                      src={s.image}
                      alt=""
                      className={`w-full h-full object-cover transition-all duration-700 pointer-events-none ${
                        isActive ? 'brightness-100 contrast-105' : 'brightness-[0.85] saturate-[0.92]'
                      }`}
                      draggable={false}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer Slider Controls (Centered Arrows) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 mt-12 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4">
        {/* Centered Left & Right Circular Arrow Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => moveByStep(-1)}
            className="w-12 h-12 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="Previous photos"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => moveByStep(1)}
            className="w-12 h-12 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
            aria-label="Next photos"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
          DRAG, OR USE THE ARROW KEYS
        </div>
      </div>
    </section>
  );
}