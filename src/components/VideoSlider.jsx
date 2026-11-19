import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef(null);

  // Exclusively verified horizontal talks & keynote videos from Dr. Paul Miller & @thedrpaulmiller
  const videos = [
    {
      id: "tedx-albany",
      title: "TEDx Albany: We Need to Do Better",
      poster: "https://img.youtube.com/vi/iCu4SGD_Y24/maxresdefault.jpg",
      videoId: "iCu4SGD_Y24"
    },
    {
      id: "cultural-competency",
      title: "Cultural Competency Planning for Educators",
      poster: "https://img.youtube.com/vi/speyFwexZf8/maxresdefault.jpg",
      videoId: "speyFwexZf8"
    },
    {
      id: "trauma-students",
      title: "How Unaddressed Trauma Impacts Students",
      poster: "https://img.youtube.com/vi/R1JkZ66Qa-Q/maxresdefault.jpg",
      videoId: "R1JkZ66Qa-Q"
    },
    {
      id: "trauma-history",
      title: "Trauma & The Systemic Impact Throughout History",
      poster: "https://img.youtube.com/vi/oiXBNKiNd5c/maxresdefault.jpg",
      videoId: "oiXBNKiNd5c"
    },
    {
      id: "racial-profiling",
      title: "Racial Profiling & Institutional Equity",
      poster: "https://img.youtube.com/vi/sliqVeSxVx8/maxresdefault.jpg",
      videoId: "sliqVeSxVx8"
    },
    {
      id: "school-fair-rochester",
      title: "School Fair Rochester: Good Schools Roc & Edceptional",
      poster: "https://img.youtube.com/vi/Dlu6rer2Kiw/maxresdefault.jpg",
      videoId: "Dlu6rer2Kiw"
    }
  ];

  const currentVideo = videos[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (iframeRef.current && iframeRef.current.contentWindow) {
      const command = nextMuted ? 'mute' : 'unMute';
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Automatic rotation timer (rotates every 7 seconds, pauses when user hovers)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused, videos.length]);

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#0B0A09] text-white overflow-hidden select-none border-t border-white/10"
    >
      
      {/* 1. FULL WIDTH AUTOPLAYING VIDEO BACKDROP WITH SOFT OVERLAY */}
      <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-black">
        
        {/* Autoplaying Looping YouTube iframe */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <iframe
            key={currentVideo.videoId}
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${currentVideo.videoId}&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
            title={currentVideo.title}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100svh] min-w-[177.78svh] scale-110 sm:scale-115 md:scale-120 border-0 pointer-events-none select-none filter contrast-105 brightness-100"
            allow="autoplay; encrypted-media"
            tabIndex="-1"
          />
        </div>

        {/* Very Light Dark Overlay (Subtle vignette for contrast, leaving video vivid) */}
        <div className="absolute inset-0 bg-[#0B0A09]/10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-[#0B0A09]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A09]/60 via-transparent to-[#0B0A09]/20 pointer-events-none" />

        {/* Top-Right: Sound Button & Navigation Arrows */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-12 z-30 flex items-center gap-3">
          
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="px-4 py-2.5 rounded-full bg-black/60 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all duration-200 cursor-pointer active:scale-95 shadow-lg group"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-white group-hover:text-black" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-bold">Unmute</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-[#F2BD42] group-hover:text-black" />
                <span className="font-mono text-[11px] uppercase tracking-wider font-bold">Sound On</span>
              </>
            )}
          </button>

          {/* Previous / Next Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous video"
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next video"
              className="w-10 h-10 rounded-full bg-black/60 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 shadow-lg"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Left Bottom: Single Small Title Only */}
        <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 lg:left-16 z-20 max-w-xl">
          <h2 className="font-archivo text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-white tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            {currentVideo.title}
          </h2>
        </div>

      </div>

      {/* 2. SMALL THUMBNAILS ROW AT THE MIDDLE */}
      <div className="w-full bg-[#0B0A09] border-t border-white/10 px-6 py-5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-1">
            {videos.map((vid, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={vid.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group text-left ${
                    isSelected 
                      ? 'w-24 sm:w-28 md:w-32 aspect-video ring-2 ring-white scale-105 shadow-xl z-10' 
                      : 'w-20 sm:w-24 md:w-28 aspect-video opacity-50 hover:opacity-100 hover:scale-[1.02]'
                  }`}
                >
                  <img
                    src={vid.poster}
                    alt={vid.title}
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${vid.videoId}/hqdefault.jpg`;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-1.5 left-1.5 right-1.5">
                    <p className="font-archivo font-bold text-[9px] sm:text-[10px] text-white uppercase line-clamp-1 leading-tight">
                      {vid.title}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-white shadow" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
