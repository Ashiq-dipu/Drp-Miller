import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedKeynote }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    eventDate: '',
    location: '',
    audienceType: 'Annual Convention / Conference',
    audienceSize: '200 - 500 attendees',
    keynoteTopic: preselectedKeynote || 'From the Gutter to Greatness™',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedKeynote) {
      setFormData(prev => ({ ...prev, keynoteTopic: preselectedKeynote }));
    }
  }, [preselectedKeynote]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSubmitted(false);
    onClose?.();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Background overlay click trap */}
      <div className="absolute inset-0" aria-hidden="true" />

      {/* Modal Dialog Card (Stop propagation so clicking inside doesn't close) */}
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-xl bg-[#0E1017] border border-white/20 rounded-2xl overflow-hidden shadow-2xl my-8 text-white"
      >
        {/* Header */}
        <div className="p-6 sm:p-8 pb-6 border-b border-white/10 flex items-start justify-between bg-[#090A0E]">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 block mb-1">
              MAINSTAGE CALENDAR INQUIRY
            </span>
            <h3 className="font-archivo font-black text-2xl sm:text-3xl uppercase text-white">
              Book Dr. Paul Miller
            </h3>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close dialog"
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-all cursor-pointer active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 rounded bg-white text-black flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-archivo font-bold text-2xl uppercase text-white">
                Request Dispatched
              </h4>
              <p className="text-xs sm:text-sm text-white/70 max-w-sm mx-auto leading-relaxed font-light">
                Dr. Paul Miller’s executive speaker management team has received your dates and will respond with customized engagement options and availability within 24 business hours.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-6 px-8 py-3 rounded-full bg-white text-black font-archivo font-bold text-xs uppercase tracking-wider cursor-pointer hover:bg-slate-200 transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Organization / District *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. National Summit"
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@summit.org"
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Target Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={e => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Event City / Venue
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Atlanta, GA"
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Keynote Topic
                  </label>
                  <select
                    value={formData.keynoteTopic}
                    onChange={e => setFormData({ ...formData, keynoteTopic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  >
                    <option value="From the Gutter to Greatness™">From the Gutter to Greatness™</option>
                    <option value="Championship Mindset™">Championship Mindset™</option>
                    <option value="Leadership Authenticity™">Leadership Authenticity™</option>
                    <option value="Sovereign Leader Framework">Sovereign Leader Framework</option>
                    <option value="Custom Keynote Topic">Custom Keynote Topic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                    Estimated Audience Size
                  </label>
                  <select
                    value={formData.audienceSize}
                    onChange={e => setFormData({ ...formData, audienceSize: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                  >
                    <option value="Under 200 attendees">Under 200 attendees</option>
                    <option value="200 - 500 attendees">200 - 500 attendees</option>
                    <option value="500 - 1,500 attendees">500 - 1,500 attendees</option>
                    <option value="1,500+ arena attendees">1,500+ arena attendees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/70 uppercase tracking-wider mb-1.5 text-[10px]">
                  Special Objectives or Theme
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about the desired shift for your room..."
                  className="w-full px-3.5 py-2 rounded bg-black/50 border border-white/15 focus:border-white text-white font-sans text-sm outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-white hover:bg-slate-200 text-black font-archivo font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl active:scale-[0.99]"
                >
                  <span>Submit Keynote Availability Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
