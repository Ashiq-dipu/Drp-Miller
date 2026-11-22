import React from 'react';

/**
 * HeroVideoBackground
 * Full-bleed looping YouTube background video with royal spotlight
 * and softened dark contrast overlays for clean readability across all page headers.
 */
export default function HeroVideoBackground({
  videoId,
  title = "Background Video",
  overlayOpacity = "bg-[#0B0A09]/15",
  topGradient = "to-[#0B0A09]/25",
  sideGradient = "from-[#0B0A09]/55 via-[#0B0A09]/15 to-[#0B0A09]/55",
  scaleClass = "scale-100 sm:scale-105 md:scale-110"
}) {
  if (!videoId) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      <div className="relative w-full h-full">
        {/* Responsive 16:9 Video Canvas */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <iframe
            title={title}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1`}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100svh] min-w-[177.78svh] ${scaleClass} border-0 pointer-events-none select-none filter contrast-105 brightness-100`}
            allow="autoplay; encrypted-media; picture-in-picture"
            tabIndex="-1"
            aria-hidden="true"
          />
        </div>

        {/* Mainstage Diagonal Spotlight Beam in Royal Indigo */}
        <div 
          className="absolute -top-32 right-1/4 w-[750px] h-[750px] rounded-full blur-[160px] opacity-45 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.7) 0%, rgba(45,8,145,0.4) 45%, rgba(11,10,9,0) 75%)' }}
        />

        {/* Softened Dark Overlays for Typography Legibility & Visual Clarity */}
        <div className={`absolute inset-0 ${overlayOpacity} pointer-events-none`} />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent ${topGradient} pointer-events-none`} />
        <div className={`absolute inset-0 bg-gradient-to-r ${sideGradient} pointer-events-none`} />
      </div>
    </div>
  );
}
