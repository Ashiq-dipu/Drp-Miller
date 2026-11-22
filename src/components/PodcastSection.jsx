import React from 'react';
import { Play, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PodcastSection({ onPlayVideo }) {
  const latestEpisodes = [
    {
      ep: "EPISODE 84",
      title: "Why Your Identity is Your Ceiling in Leadership",
      duration: "48 MIN",
      image: "/images/dr-miller-speaking-audience.jpg",
      videoId: "7jXuESXmLlE"
    },
    {
      ep: "EPISODE 83",
      title: "Leading Schools That Defy Zip Codes & Demographics",
      duration: "54 MIN",
      image: "/images/drpmiller/nabse-dr-miller-7476.jpg",
      videoId: "m-HJpWobMiU"
    },
    {
      ep: "EPISODE 82",
      title: "The Good Me vs. The Hood Me: Live Masterclass",
      duration: "62 MIN",
      image: "/images/drpmiller/podcast-cover.jpg",
      videoId: "7jXuESXmLlE"
    },
    {
      ep: "EPISODE 81",
      title: "Civil Rights, Education & Power with Ben Crump",
      duration: "42 MIN",
      image: "/images/ben-crump.jpg",
      videoId: "7jXuESXmLlE"
    }
  ];

  return (
    <section id="podcast" className="w-full bg-[#0B0A09] text-white selection:bg-[#F2BD42] selection:text-[#0B0A09] border-t border-white/10 py-20 sm:py-28 relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F2BD42] font-semibold block mb-2">
              Official Podcast
            </span>
            <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              FROM THE GUTTER TO GREATNESS
            </h2>
          </div>

          <Link
            to="/podcast"
            className="inline-flex items-center gap-2 font-mono text-xs text-white/70 hover:text-white uppercase tracking-wider font-bold transition-colors group"
          >
            <span>Explore All 84+ Shows</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* High-Visibility Brand Platform Badges */}
        <div className="mb-12 flex flex-wrap items-center gap-3 sm:gap-4">
          <span className="font-mono text-xs text-white/50 uppercase tracking-wider font-semibold mr-1">
            Available on:
          </span>

          {/* Spotify Badge */}
          <a
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#121212] border border-[#1DB954]/50 hover:border-[#1DB954] hover:bg-[#1DB954]/10 transition-all duration-200 flex items-center gap-3 group shadow-lg"
          >
            <svg className="w-5 h-5 text-[#1DB954] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.305c-.215.353-.674.464-1.026.25-2.81-1.717-6.347-2.106-10.513-1.155-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.564-1.042 8.47-.6 11.62 1.337.353.214.464.673.251 1.026zm1.464-3.26c-.27.44-.848.58-1.288.31-3.218-1.978-8.123-2.55-11.93-1.394-.495.15-1.022-.132-1.172-.627-.15-.495.132-1.022.627-1.172 4.352-1.32 9.768-.678 13.453 1.595.44.27.58.848.31 1.288zm.126-3.41C15.22 8.35 8.86 8.14 5.16 9.263c-.59.18-1.22-.16-1.4-.75-.18-.59.16-1.22.75-1.4 4.25-1.29 11.28-1.05 15.65 1.545.53.315.705 1.01.39 1.54-.315.53-1.01.705-1.54.39z"/>
            </svg>
            <div className="text-left">
              <div className="font-archivo text-xs font-bold text-white group-hover:text-[#1DB954] transition-colors leading-tight">
                Spotify
              </div>
            </div>
          </a>

          {/* Apple Podcasts Badge */}
          <a
            href="https://podcasts.apple.com/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#121212] border border-[#B345FA]/50 hover:border-[#B345FA] hover:bg-[#B345FA]/10 transition-all duration-200 flex items-center gap-3 group shadow-lg"
          >
            <svg className="w-5 h-5 text-[#B345FA] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M18.84 8.78A8.85 8.85 0 0 0 12 5.25a8.85 8.85 0 0 0-6.84 3.53 8.68 8.68 0 0 0-1.74 5.25 8.63 8.63 0 0 0 3.32 6.84 8.78 8.78 0 0 0 5.26 1.88 8.78 8.78 0 0 0 5.26-1.88 8.63 8.63 0 0 0 3.32-6.84 8.68 8.68 0 0 0-1.74-5.25zM12 7.05a6.97 6.97 0 0 1 5.39 2.78 6.94 6.94 0 0 1 1.37 4.2 6.9 6.9 0 0 1-2.65 5.48A7 7 0 0 1 12 20.7a7 7 0 0 1-4.11-1.19 6.9 6.9 0 0 1-2.65-5.48 6.94 6.94 0 0 1 1.37-4.2A6.97 6.97 0 0 1 12 7.05zm0 3.25a3.73 3.73 0 0 0-2.88 1.48 3.7 3.7 0 0 0-.74 2.25c0 1.25.5 2.15 1.25 2.7a3.73 3.73 0 0 0 2.37.82 3.73 3.73 0 0 0 2.37-.82c.75-.55 1.25-1.45 1.25-2.7a3.7 3.7 0 0 0-.74-2.25A3.73 3.73 0 0 0 12 10.3zm0 1.7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-1.1 6.55h2.2v4.25h-2.2v-4.25z"/>
            </svg>
            <div className="text-left">
              <div className="font-archivo text-xs font-bold text-white group-hover:text-[#B345FA] transition-colors leading-tight">
                Apple Podcasts
              </div>
            </div>
          </a>

          {/* YouTube Video Channel Badge */}
          <a
            href="https://www.youtube.com/@thedrpaulmiller"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#121212] border border-[#FF0000]/50 hover:border-[#FF0000] hover:bg-[#FF0000]/10 transition-all duration-200 flex items-center gap-3 group shadow-lg"
          >
            <svg className="w-5 h-5 text-[#FF0000] fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <div className="text-left">
              <div className="font-archivo text-xs font-bold text-white group-hover:text-[#FF0000] transition-colors leading-tight">
                YouTube
              </div>
            </div>
          </a>
        </div>

        {/* 2-Column Clean Dark Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Latest Episodes Stack */}
          <div className="lg:col-span-7 space-y-3.5">
            {latestEpisodes.map((ep, idx) => (
              <div
                key={idx}
                onClick={() => onPlayVideo && onPlayVideo(ep.videoId)}
                className="p-4 sm:p-5 rounded-2xl bg-[#141312] border border-white/10 hover:border-white/25 hover:bg-[#1a1917] transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-white/50 font-mono text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-[#F2BD42]">{ep.ep}</span>
                    <span>·</span>
                    <span>{ep.duration}</span>
                  </div>
                  <h3 className="font-archivo text-base sm:text-lg font-bold text-white group-hover:text-[#F2BD42] transition-colors line-clamp-1">
                    {ep.title}
                  </h3>
                </div>

                <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/20 group-hover:border-[#F2BD42] group-hover:scale-105 transition-all">
                  <img
                    src={ep.image}
                    alt={ep.title}
                    className="w-full h-full object-cover filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 flex items-center justify-center transition-colors">
                    <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow">
                      <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Featured Show Card with Dark Backdrop */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => onPlayVideo && onPlayVideo('7jXuESXmLlE')}
              className="relative w-full max-w-[440px] rounded-3xl overflow-hidden border border-white/15 bg-[#141312] shadow-2xl cursor-pointer group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="/images/drpmiller/podcast-cover.jpg"
                  alt="From the Gutter to Greatness Podcast"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-black/20 to-transparent" />
                
                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/95 text-black flex items-center justify-center pl-0.5 shadow-xl group-hover:scale-110 group-hover:bg-[#F2BD42] transition-all duration-300">
                    <Play className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-6 space-y-2 bg-[#141312]">
                <div className="flex items-center justify-between text-xs font-mono text-white/50">
                  <span className="text-[#F2BD42] font-bold uppercase">FEATURED EPISODE</span>
                  <span>WEEKLY BROADCAST</span>
                </div>
                <h4 className="font-archivo text-xl font-bold text-white group-hover:text-[#F2BD42] transition-colors">
                  The Good Me vs. The Hood Me
                </h4>
                <p className="font-sans text-xs text-white/70 line-clamp-2 leading-relaxed">
                  Dr. Paul Miller unpacks internal duality, emotional sovereignty, and navigating high-friction institutions without selling your soul.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
