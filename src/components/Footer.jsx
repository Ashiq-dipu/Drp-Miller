import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-[#0B0A09] text-white/60 border-t border-white/10 pt-16 sm:pt-20 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12">
        
        {/* Top Executive Callout Banner */}
        <div className="relative rounded-[28px] overflow-hidden border border-white/15 bg-gradient-to-r from-white/[0.04] via-[#2D0891]/20 to-transparent p-8 sm:p-12 mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 backdrop-blur-sm shadow-2xl">
          {/* Subtle Ambient Radial Highlight */}
          <div 
            className="absolute -top-24 right-1/4 w-[450px] h-[450px] rounded-full blur-[100px] opacity-30 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.6) 0%, rgba(45,8,145,0.3) 50%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-[#A78BFA] mb-2.5 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
              <span>MAINSTAGE 2026–2027 CALENDAR</span>
            </div>
            <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Bring transformation to your organization.
            </h2>
            <p className="mt-3 text-white/70 font-sans text-sm sm:text-base leading-relaxed">
              Electrifying keynote addresses, executive advisory, and institutional turnaround blueprints for conventions, universities, and corporate leadership retreats worldwide.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2.5 cursor-pointer shadow-2xl hover:scale-105 active:scale-95 border border-[#7C3AED]/50 shadow-[#2D0891]/40"
            >
              <span>Inquire Speaking Dates</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Balanced Symmetrical 4-Column Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 py-12 border-y border-white/10 font-sans text-xs">
          
          {/* Col 1: Executive Dossier & Identity */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group select-none">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2D0891] via-[#1A055A] to-[#0B0A09] border border-white/20 group-hover:border-[#A78BFA] flex items-center justify-center p-1.5 shadow-[0_4px_20px_rgba(45,8,145,0.4)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/images/dr-miller-crest-white.png" 
                  alt="Dr. Paul Miller Crest" 
                  className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-archivo font-black text-base uppercase text-white group-hover:text-white transition-colors leading-tight">
                  DR. PAUL MILLER
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#A78BFA] font-medium mt-0.5">
                  KEYNOTE · AUTHOR · EXECUTIVE
                </span>
              </div>
            </Link>
            
            <p className="text-white/60 text-xs leading-relaxed">
              Keynote Speaker, 6x Author, Former Urban CEO & Presidential Lifetime Achievement Award recipient.
            </p>

            <div className="pt-2 flex items-center gap-2 font-mono text-[11px] text-white/50">
              <MapPin className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span>Baltimore / DC Metro & Global Mainstage</span>
            </div>
          </div>

          {/* Col 2: Programs & Advisory (5 items) */}
          <div>
            <div className="font-mono text-white uppercase tracking-wider mb-4 font-bold text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span>PROGRAMS</span>
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li><Link to="/speaking" className="hover:text-white transition-colors flex items-center justify-between group"><span>Speaking & Keynotes</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/coaching" className="hover:text-white transition-colors flex items-center justify-between group"><span>Executive Coaching</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/programs" className="hover:text-white transition-colors flex items-center justify-between group"><span>Programs & Courses</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/other-ventures" className="hover:text-white transition-colors flex items-center justify-between group"><span>Other Ventures</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center justify-between group"><span>About Dr. Miller</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors flex items-center justify-between group"><span>Meeting Planner FAQ</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Col 3: Media & Publications (5 items) */}
          <div>
            <div className="font-mono text-white uppercase tracking-wider mb-4 font-bold text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span>MEDIA & WORKS</span>
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li><Link to="/watch" className="hover:text-white transition-colors flex items-center justify-between group"><span>Watch & Speeches</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors flex items-center justify-between group"><span>The Official Podcast</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/books" className="hover:text-white transition-colors flex items-center justify-between group"><span>Published Books (6x)</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors flex items-center justify-between group"><span>Sovereign Shop</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors flex items-center justify-between group"><span>Press & Media Kit</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
            </ul>
          </div>

          {/* Col 4: Ecosystem & Office */}
          <div>
            <div className="font-mono text-white uppercase tracking-wider mb-4 font-bold text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              <span>OFFICE & ECOSYSTEM</span>
            </div>
            <ul className="space-y-2.5 text-white/70 mb-4">
              <li><a href="https://www.amongstmentour.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between group"><span>Amongst Men Tour</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://buildingcapacities.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between group"><span>Building Capacities</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://edceptional.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between group"><span>EDceptional Foundation</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
              <li><a href="https://www.youtube.com/@FromtheGuttertoGreatness/shorts" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center justify-between group"><span>YouTube Shorts Channel</span><ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
            </ul>

            <div className="pt-3 border-t border-white/10">
              <div className="text-white/50 text-[11px] mb-1 font-mono uppercase">DIRECT BOOKING:</div>
              <a 
                href="mailto:hello@drpmiller.com" 
                className="inline-flex items-center gap-1.5 text-white font-mono font-bold text-xs hover:text-[#A78BFA] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>hello@drpmiller.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Stripe */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/40">
          <div>
            © {new Date().getFullYear()} DR. PAUL MILLER. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-white/50">
            <span>KEYNOTE SPEAKER</span>
            <span>·</span>
            <span>EXECUTIVE ADVISOR</span>
            <span>·</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#A78BFA] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-bold"
            >
              <span>GET TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
