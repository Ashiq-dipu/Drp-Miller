import React from 'react';
import { 
  Play, 
  Radio, 
  Headphones, 
  ArrowRight,
  ExternalLink,
  Volume2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PodcastSection({ onPlayVideo }) {
  const metricStats = [
    { value: "TOP 2%", label: "GLOBAL PODCAST" },
    { value: "84+", label: "EPISODES RELEASED" },
    { value: "95%", label: "HIGH COMPLETION RATE" },
    { value: "25+", label: "YEARS BLUEPRINT" }
  ];

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
    <section id="podcast" className="w-full bg-[#0B0A09] text-white selection:bg-[#F2BD42] selection:text-[#0B0A09]">
      
      {/* ========================================================
          PART 1: HERO STATS & PHONE PLAYER BANNER
          (Dark atmospheric background matching reference)
      ======================================================== */}
      <div className="relative py-20 sm:py-28 overflow-hidden border-t border-white/10">
        
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dr-miller-speaking-audience.jpg"
            alt="Audience Background"
            className="w-full h-full object-cover opacity-25 filter grayscale contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0A09] via-[#0B0A09]/80 to-[#0B0A09]" />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 sm:px-12 relative z-10 space-y-16">
          
          {/* Circular Stats Badges Row (Exact matching reference 4 circles) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {metricStats.map((stat, i) => (
              <div 
                key={i}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-white text-[#0B0A09] flex flex-col items-center justify-center p-3 shadow-2xl text-center border-4 border-white/80 transition-transform duration-300 hover:scale-105"
              >
                <span className="font-archivo font-black text-2xl sm:text-3xl text-[#0B0A09] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-[#0B0A09]/70 uppercase mt-1.5 leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Central Podcast Intro Card with Mobile App Mockup */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center bg-[#FAF6F0] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 text-[#0B0A09]">
            
            {/* Left: Smartphone Player Mockup */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-[230px] sm:w-[250px] rounded-[36px] bg-[#111] p-3 shadow-2xl border-4 border-[#333] relative">
                
                {/* Dynamic island notch */}
                <div className="w-20 h-4 bg-black rounded-full mx-auto mb-3" />

                {/* Cover in phone */}
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-md">
                  <img
                    src="/images/drpmiller/podcast-cover.jpg"
                    alt="Podcast Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Track details inside phone */}
                <div className="pt-3 pb-2 text-white">
                  <p className="font-archivo font-bold text-xs line-clamp-1">
                    From the Gutter to Greatness
                  </p>
                  <p className="font-sans text-[10px] text-white/60">
                    Dr. Paul Miller · Episode 84
                  </p>

                  {/* Progress scrubber */}
                  <div className="w-full bg-white/20 h-1 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#F2BD42] h-full w-2/3 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[8px] text-white/50 font-mono mt-1">
                    <span>14:28</span>
                    <span>48:00</span>
                  </div>

                  {/* Play controls */}
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <button 
                      onClick={() => onPlayVideo && onPlayVideo('7jXuESXmLlE')}
                      className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Show Description & Platforms Badges */}
            <div className="md:col-span-7 space-y-5 text-left">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2D0891]">
                  Official Podcast
                </span>
                <h3 className="font-archivo text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#0B0A09] tracking-tight mt-1 leading-tight">
                  FROM THE GUTTER TO GREATNESS
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#0B0A09]/80 leading-relaxed font-normal">
                Dr. Paul Miller dives deep into leadership sovereignty, urban transformation, and raw interviews with national figures, leaders, and educators shaping our generation.
              </p>

              {/* Platform buttons row (Apple Podcasts, Spotify, YouTube) */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://open.spotify.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#1DB954] hover:bg-[#18a34a] text-white font-archivo font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Spotify</span>
                </a>

                <a
                  href="https://podcasts.apple.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#872EC4] hover:bg-[#7223a8] text-white font-archivo font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>Apple Podcasts</span>
                </a>

                <a
                  href="https://www.youtube.com/@FromtheGuttertoGreatness/shorts"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#cc0000] text-white font-archivo font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>YouTube</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          PART 2: LATEST EPISODES SPLIT
          Left: Episode List | Right: Large Portrait of Dr. Miller
          (Matching the exact 2nd half of the user reference)
      ======================================================== */}
      <div className="py-20 sm:py-28 bg-[#0B0A09] border-t border-white/10 relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Latest Episodes List */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="border-b border-white/15 pb-4">
                <h3 className="font-archivo text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  LATEST EPISODES
                </h3>
              </div>

              {/* Episode Items */}
              <div className="space-y-4">
                {latestEpisodes.map((ep, idx) => (
                  <div
                    key={idx}
                    onClick={() => onPlayVideo && onPlayVideo(ep.videoId)}
                    className="p-4 sm:p-5 rounded-2xl bg-[#141312] border border-white/10 hover:border-white/30 hover:bg-[#1a1917] transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    {/* Left: Ep info & Title */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-white/50 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <span>{ep.ep}</span>
                        <span>·</span>
                        <span>{ep.duration}</span>
                      </div>
                      <h4 className="font-archivo text-base sm:text-lg font-bold text-white group-hover:text-[#F2BD42] transition-colors line-clamp-1">
                        {ep.title}
                      </h4>
                    </div>

                    {/* Right: Small Circular Thumbnail with Play Overlay */}
                    <div className="relative shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#F2BD42] group-hover:scale-105 transition-all">
                      <img
                        src={ep.image}
                        alt={ep.title}
                        className="w-full h-full object-cover filter contrast-105"
                      />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                        <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow">
                          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* View All Episodes Pill */}
              <div className="pt-2">
                <Link
                  to="/podcast"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F2BD42] hover:bg-[#E0A82E] text-[#0B0A09] font-archivo font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
                >
                  <span>SEE ALL EPISODES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Right Column: Dr. Paul Miller Large Authentic Studio Portrait */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-[32px] overflow-hidden shadow-2xl border-2 border-white/10 group">
                <img
                  src="/images/dr-miller-speaking-audience.jpg"
                  alt="Dr. Paul Miller Studio Host"
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#F2BD42] font-bold block mb-1">
                    HOST & CREATOR
                  </span>
                  <h4 className="font-archivo text-2xl font-black uppercase text-white leading-tight">
                    DR. PAUL MILLER
                  </h4>
                  <p className="font-sans text-xs text-white/70 mt-1">
                    Weekly episodes streaming across all major platforms.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
