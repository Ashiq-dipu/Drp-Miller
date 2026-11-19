import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink, Mail, ChevronDown, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenBooking }) {
  const { openCart, itemCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded({});
  }, [location.pathname, location.hash]);

  // Exact navigation menu and dropdown structure matching the client's reference AI site
  const navItems = [
    {
      name: 'About',
      path: '/about',
      dropdown: [
        {
          label: 'About Dr. Paul Miller',
          path: '/about#bio',
          description: 'From Rochester projects to CEO & executive leadership'
        },
        {
          label: 'Mission & Vision',
          path: '/about#mission',
          description: 'Transforming people, leaders, organizations & communities'
        },
        {
          label: 'Core Philosophy',
          path: '/about#philosophy',
          description: 'Better people become better leaders'
        }
      ]
    },
    {
      name: 'Speaking',
      path: '/speaking',
      dropdown: [
        {
          label: 'Signature Keynotes',
          path: '/speaking#keynotes',
          description: '5 world-class transformational presentations',
          badge: 'Popular'
        },
        {
          label: 'Frameworks & Tools',
          path: '/speaking#frameworks',
          description: 'WAGAL, Championship Mindset & Reverse The Curse'
        },
        {
          label: 'Engagement Process',
          path: '/speaking#engagement',
          description: 'Spoken word, scenario analysis & turning points'
        },
        {
          label: 'Meeting Planner FAQ',
          path: '/faq',
          description: 'AV rider, formats, travel logistics & booking',
          badge: 'FAQ'
        }
      ]
    },
    {
      name: 'Coaching',
      path: '/coaching',
      dropdown: [
        {
          label: 'Executive Leadership Coaching',
          path: '/coaching#executive',
          description: 'C-Suite, Superintendents & High-Performers'
        },
        {
          label: 'Management Development',
          path: '/coaching#management',
          description: 'Building accountability, culture & systems'
        },
        {
          label: '1-on-1 Mentorship & Advisory',
          path: '/coaching#mentorship',
          description: 'Tailored strategic guidance & organizational growth'
        }
      ]
    },
    {
      name: 'Programs',
      path: '/programs',
      dropdown: [
        {
          label: 'Corporate Leadership',
          path: '/programs#corporate',
          description: 'Workplace culture, team building & customer experience'
        },
        {
          label: 'Teacher & Principal Training',
          path: '/programs#educators',
          description: 'School reform, instruction & relational culture'
        },
        {
          label: 'From the Block to the Boardroom™',
          path: '/programs#block-to-boardroom',
          description: 'Empowerment & leadership training for Black men & communities'
        },
        {
          label: 'Youth Development',
          path: '/programs#youth',
          description: 'Cyberbullying, digital citizenship & self-leadership'
        },
        {
          label: 'Courses & Institutes',
          path: '/programs#courses',
          description: 'Digital learning platforms & leadership mastery',
          badge: 'New'
        }
      ]
    },
    {
      name: 'Watch',
      path: '/watch',
      dropdown: [
        {
          label: 'Featured Speeches & Keynotes',
          path: '/watch#speeches',
          description: 'TEDx, Full Keynote & Speaker Introduction'
        },
        {
          label: 'Media & Press Library',
          path: '/watch#media',
          description: 'Ben Crump, WDKX Radio, Oxford & news clips'
        },
        {
          label: 'Shorts & Video Clips',
          path: '/watch#shorts',
          description: 'High-impact social clips & viral highlights',
          badge: 'Trending'
        },
        {
          label: 'Audience Testimonials',
          path: '/watch#testimonials',
          description: 'Live feedback from educators & executives'
        }
      ]
    },
    {
      name: 'Books',
      path: '/books'
    },
    {
      name: 'Shop',
      path: '/shop'
    },
    {
      name: 'Events',
      path: 'https://www.amongstmentour.com',
      isExternal: true,
      dropdown: [
        {
          label: 'Amongst Men Tour',
          path: 'https://www.amongstmentour.com',
          description: 'Live empowerment tour for men & communities',
          badge: 'Live',
          isExternal: true
        },
        {
          label: 'Past Events — The Educated Black Man',
          path: 'https://theeducatedblackman.com/',
          description: 'Highlights from the Educated Black Man tour & summits',
          isExternal: true
        }
      ]
    },
    {
      name: 'Other Ventures',
      path: '/other-ventures',
      dropdown: [
        {
          label: 'Non-Profit — Building Capacities',
          path: 'https://buildingcapacities.org/',
          description: 'Building capacities for communities, schools & leaders',
          isExternal: true
        },
        {
          label: 'Podcast — From the Gutter to Greatness',
          path: 'https://fromtheguttertogreatness.com/',
          description: 'Conversations on resilience, leadership & transformation',
          isExternal: true
        },
        {
          label: 'Book — From the Gutter to Greatness Books',
          path: 'https://fromtheguttertogreatnessbooks.com/',
          description: 'Official book store & publishing hub',
          isExternal: true
        },
        {
          label: 'Book — The Good Me and The Hood Me',
          path: 'https://thegoodmeandthehoodme.com/',
          description: 'Identity, self-leadership & positive choices',
          isExternal: true
        },
        {
          label: 'School Development & Support — Stream4Education',
          path: 'https://stream4education.com/',
          description: 'Systems & support for schools and districts',
          isExternal: true
        },
        {
          label: 'Consulting — Urbane Education',
          path: 'https://www.urbaneeducation.com/',
          description: 'Organizational & educational leadership consulting',
          isExternal: true
        }
      ]
    }
  ];

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0A09]/95 backdrop-blur-md border-b border-white/10 shadow-2xl'
          : 'bg-[#0B0A09]/80 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Top Utility Micro-Bar */}
      <div 
        className={`hidden md:block border-b border-white/10 bg-[#0B0A09]/90 px-6 sm:px-12 transition-all duration-300 font-mono text-[11px] text-white/60 ${
          isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-transparent' : 'py-1.5 opacity-100'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white/80 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Now Booking Keynotes & Executive Coaching
            </span>
            <span className="text-white/20">|</span>
            <a 
              href="mailto:hello@drpmiller.com" 
              className="hover:text-white transition-colors text-white/70 flex items-center gap-1"
            >
              <Mail className="w-3 h-3 text-[#A78BFA]" />
              <span>hello@drpmiller.com</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.amongstmentour.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-0.5 rounded-full bg-[#2D0891]/60 hover:bg-[#2D0891] border border-[#7C3AED]/40 text-white text-[10px] uppercase font-bold tracking-wider transition-all flex items-center gap-1 shadow-sm"
            >
              <span>Amongst Men Tour</span>
              <ExternalLink className="w-2.5 h-2.5 text-white/80" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-[1440px] mx-auto px-6 sm:px-12 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-4 sm:py-5'
      }`}>
        
        {/* Brand Identity Logo (Emblem only without text) */}
        <Link to="/" className="flex items-center group select-none shrink-0" aria-label="Dr. Paul Miller Home">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#2D0891] via-[#1A055A] to-[#0B0A09] border border-white/20 group-hover:border-[#A78BFA] flex items-center justify-center p-2 shadow-[0_4px_20px_rgba(45,8,145,0.4)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.7)] group-hover:scale-105 transition-all duration-300">
            <div className="absolute inset-0 bg-radial-gradient from-[#7C3AED]/30 to-transparent pointer-events-none rounded-xl" />
            <img 
              src="/images/dr-miller-crest-white.png" 
              alt="Dr. Paul Miller Crest" 
              className="h-full w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:brightness-110 transition-all duration-300"
            />
          </div>
        </Link>

        {/* Center Desktop Navigation Links with Sleek Hover Dropdowns */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-sans text-xs uppercase tracking-wider font-semibold">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path === '/programs' && location.pathname === '/courses') ||
              (item.path === '/watch' && (location.pathname === '/shorts' || location.pathname === '/media')) ||
              (item.path === '/other-ventures' && location.pathname === '/paths');

            const hasDropdown = item.dropdown && item.dropdown.length > 0;

            return (
              <div key={item.name} className="relative group py-2">
                
                {/* Main Menu Button/Link */}
                {item.isExternal ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-2.5 py-1.5 text-white/75 hover:text-white transition-colors rounded-lg hover:bg-white/5 group-hover:text-white"
                  >
                    <span>{item.name}</span>
                    {hasDropdown ? (
                      <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-[#A78BFA] transition-transform duration-200 group-hover:rotate-180" />
                    ) : (
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    )}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-2.5 py-1.5 transition-colors rounded-lg hover:bg-white/5 relative ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-white/75 hover:text-white group-hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {hasDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-white/50 group-hover:text-[#A78BFA] transition-transform duration-200 group-hover:rotate-180" />
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#8B5CF6] rounded-full" />
                    )}
                  </Link>
                )}

                {/* Dropdown Menu Panel */}
                {hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="w-72 xl:w-80 rounded-2xl bg-[#141210]/98 backdrop-blur-2xl border border-white/15 p-2 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-left normal-case">
                      <div className="space-y-1">
                        {item.dropdown.map((sub, sIdx) => {
                          const isSubExternal = sub.isExternal;

                          return isSubExternal ? (
                            <a
                              key={sIdx}
                              href={sub.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block p-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                            >
                              <div className="flex items-center justify-between text-xs font-bold text-white group-hover/item:text-[#A78BFA] transition-colors">
                                <span>{sub.label}</span>
                                <div className="flex items-center gap-1">
                                  {sub.badge && (
                                    <span className="px-2 py-0.5 rounded-full bg-[#2D0891] text-[9px] uppercase font-bold text-white tracking-wider">
                                      {sub.badge}
                                    </span>
                                  )}
                                  <ExternalLink className="w-3 h-3 text-white/40 group-hover/item:text-[#A78BFA]" />
                                </div>
                              </div>
                              <p className="font-sans text-[11px] text-white/60 font-light mt-0.5 leading-snug">
                                {sub.description}
                              </p>
                            </a>
                          ) : (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              className="block p-3 rounded-xl hover:bg-white/10 transition-colors group/item"
                            >
                              <div className="flex items-center justify-between text-xs font-bold text-white group-hover/item:text-[#A78BFA] transition-colors">
                                <span>{sub.label}</span>
                                {sub.badge && (
                                  <span className="px-2 py-0.5 rounded-full bg-[#2D0891] text-[9px] uppercase font-bold text-white tracking-wider">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              <p className="font-sans text-[11px] text-white/60 font-light mt-0.5 leading-snug">
                                {sub.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </nav>

        {/* Right CTA Button: Cart & Exactly "Contact Dr. Miller" */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Cart Bag Trigger */}
          <button
            onClick={openCart}
            aria-label={`Open shopping cart with ${itemCount} items`}
            className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/25 flex items-center justify-center text-white transition-all cursor-pointer group"
          >
            <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#2D0891] border-2 border-[#0B0A09] text-white text-[10px] font-mono font-bold flex items-center justify-center animate-in zoom-in-50 duration-200">
                {itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:flex px-5 py-2.5 rounded-full bg-white hover:bg-[#F4EEE3] text-[#0B0A09] font-sans font-bold text-xs uppercase tracking-wider transition-all items-center gap-1.5 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact Dr. Miller</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white/80 hover:text-white p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer with Accordion Submenus */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0A09]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-fadeIn font-sans max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-2 text-sm font-semibold tracking-wider uppercase text-white/80">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)} 
              className={`py-2 px-3 rounded-lg ${location.pathname === '/' ? 'bg-white/10 text-white font-bold' : 'hover:bg-white/5 hover:text-white'}`}
            >
              Home
            </Link>

            {navItems.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isExpanded = !!mobileExpanded[item.name];

              return (
                <div key={item.name} className="flex flex-col">
                  <div className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5">
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="hover:text-white flex items-center gap-2 text-white/90"
                      >
                        <span>{item.name}</span>
                        <ExternalLink className="w-3 h-3 text-white/50" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`hover:text-white ${location.pathname === item.path ? 'text-[#A78BFA] font-bold' : 'text-white/90'}`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {hasDropdown && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="p-1 text-white/60 hover:text-white"
                        aria-label={`Toggle ${item.name} submenu`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#A78BFA]' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Collapsible Mobile Submenu */}
                  {hasDropdown && isExpanded && (
                    <div className="ml-4 pl-3 border-l border-white/15 py-1 space-y-2 normal-case my-1">
                      {item.dropdown.map((sub, sIdx) => {
                        return sub.isExternal ? (
                          <a
                            key={sIdx}
                            href={sub.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 px-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white"
                          >
                            <div className="text-xs font-semibold text-white flex items-center justify-between">
                              <span>{sub.label}</span>
                              <ExternalLink className="w-3 h-3 text-white/40" />
                            </div>
                            <div className="text-[10px] text-white/50 font-light">{sub.description}</div>
                          </a>
                        ) : (
                          <Link
                            key={sIdx}
                            to={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 px-2 rounded-lg hover:bg-white/5 text-white/80 hover:text-white"
                          >
                            <div className="text-xs font-semibold text-white flex items-center justify-between">
                              <span>{sub.label}</span>
                              {sub.badge && (
                                <span className="px-1.5 py-0.2 rounded bg-[#2D0891] text-[8px] uppercase font-bold text-white">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-white/50 font-light">{sub.description}</div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Contact & Utility inside Mobile Drawer */}
            <div className="pt-4 mt-2 border-t border-white/10 space-y-3 font-mono text-xs">
              <a 
                href="mailto:hello@drpmiller.com" 
                className="flex items-center gap-2 text-white/60 hover:text-white lowercase py-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>hello@drpmiller.com</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full py-3 rounded-full bg-[#2D0891] hover:bg-[#3D0CB8] text-white font-sans font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>View Cart {itemCount > 0 ? `(${itemCount})` : ''}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-white text-[#0B0A09] font-sans font-bold text-xs uppercase tracking-wider text-center cursor-pointer shadow-lg mt-2 flex items-center justify-center gap-2"
              >
                <span>Contact Dr. Miller</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
}
