import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Trophy, Calendar, Users, ArrowRight, Compass, Zap, Flame } from 'lucide-react';
import ConcertLightBeams from '../components/ConcertLightBeams';
import SparkleCanvas from '../components/SparkleCanvas';

export default function TheFest() {
  const [activeView, setActiveView] = useState('about'); // 'about' or 'theme'

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4EBDD] pt-24 pb-28 relative overflow-hidden select-none">
      <ConcertLightBeams intensity="low" />
      <SparkleCanvas density="normal" interactive={true} />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mood Indigo 3D Header: THE FEST */}
        <div className="text-center mb-10">
          <h1 className="moodi-title-pink text-4xl sm:text-7xl font-display font-black tracking-widest uppercase select-none mb-3">
            THE FEST
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF6B65]">
            NOT JUST A FEST. IT'S A WHOLE X-PERIENCE.
          </p>
        </div>

        {/* The Two Main Selection Tabs (Only these two options as requested!) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-12 max-w-xl mx-auto">
          {/* Tab 1: About Us and Legacy */}
          <button
            type="button"
            onClick={() => setActiveView('about')}
            className={`flex-1 py-3.5 sm:py-4 px-6 rounded-xl font-display font-black tracking-wider uppercase text-xs sm:text-base transition-all duration-300 border-2 ${
              activeView === 'about'
                ? 'bg-[#F12B25] text-white border-[#FF6B65] shadow-[0_0_25px_rgba(241,43,37,0.8)] scale-105'
                : 'bg-black/60 text-white/70 border-white/20 hover:text-white hover:border-[#F12B25]'
            }`}
          >
            ABOUT US & LEGACY
          </button>

          {/* Tab 2: Festival Theme */}
          <button
            type="button"
            onClick={() => setActiveView('theme')}
            className={`flex-1 py-3.5 sm:py-4 px-6 rounded-xl font-display font-black tracking-wider uppercase text-xs sm:text-base transition-all duration-300 border-2 ${
              activeView === 'theme'
                ? 'bg-[#1554D1] text-white border-[#60A5FA] shadow-[0_0_25px_rgba(21,84,209,0.8)] scale-105'
                : 'bg-black/60 text-white/70 border-white/20 hover:text-white hover:border-[#1554D1]'
            }`}
          >
            FESTIVAL THEME
          </button>
        </div>

        {/* VIEW 1: ABOUT US AND LEGACY */}
        {activeView === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="bg-[#0e1017] border-2 border-[#F12B25] rounded-2xl p-6 sm:p-10 shadow-[0_0_35px_rgba(241,43,37,0.4)] relative overflow-hidden">
              <div className="inline-block text-[11px] font-mono tracking-widest uppercase bg-[#F12B25]/20 text-[#FF726B] px-3 py-1 rounded border border-[#F12B25] mb-4">
                XAVIER INSTITUTE OF MANAGEMENT · BHUBANESWAR
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-wider mb-4">
                Eastern India's Grandest Stage
              </h2>

              <p className="text-sm sm:text-base font-sans text-white/80 leading-relaxed mb-6">
                For close to two decades, Xpressions has turned the XIMB campus into Eastern India’s biggest stage for business minds and performers. What started as an inter-college management competition has evolved into a mega cultural and corporate festival drawing students and young professionals from across India.
              </p>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 mb-8">
                <blockquote className="text-base sm:text-lg italic text-[#00F5D4] font-display tracking-wide">
                  “For attendees: big performances, great food and a night you'll talk about all year. For sponsors: direct reach to young consumers, with clear numbers to show for it.”
                </blockquote>
              </div>

              {/* 4 Big Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-white/10 text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-[#F12B25]">40,000+</div>
                  <div className="text-[11px] font-mono uppercase text-white/60 mt-1">Total Footfall</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-[#00F5D4]">20+</div>
                  <div className="text-[11px] font-mono uppercase text-white/60 mt-1">National Events</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-[#FACC15]">3 Days</div>
                  <div className="text-[11px] font-mono uppercase text-white/60 mt-1">Non-Stop Energy</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-display font-black text-[#D946EF]">Celebrity</div>
                  <div className="text-[11px] font-mono uppercase text-white/60 mt-1">Pronite Nights</div>
                </div>
              </div>

              <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/register"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#F12B25] to-[#d41e18] text-white font-display font-black text-xs uppercase tracking-widest shadow-glow-red hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <span>REGISTER FOR XPRESSIONS 2027</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/schedule"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-widest transition-colors"
                >
                  VIEW FESTIVAL SCHEDULE ↗
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: FESTIVAL THEME */}
        {activeView === 'theme' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="bg-[#0e1017] border-2 border-[#1554D1] rounded-2xl p-6 sm:p-10 shadow-[0_0_35px_rgba(21,84,209,0.5)] relative overflow-hidden">
              <div className="inline-block text-[11px] font-mono tracking-widest uppercase bg-[#1554D1]/20 text-[#60A5FA] px-3 py-1 rounded border border-[#1554D1] mb-4">
                XPRESSIONS 2027 THEME MANIFESTO
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-wider mb-4">
                Neon Odyssey: Digital Frontiers & Festival Euphoria
              </h2>

              <p className="text-sm sm:text-base font-sans text-white/80 leading-relaxed mb-6">
                Stepping into the collision of digital architecture and festival euphoria, Xpressions 2027 embraces cyber neon grids, pixelated arches, volumetric laser cones, and high-contrast brutalist art. It represents the forward momentum of university minds crafting the future of technology, business, and creative culture.
              </p>

              {/* Theme Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#00F5D4] text-xs font-mono font-bold tracking-widest uppercase">
                    <Zap className="w-4 h-4" />
                    <span>Volumetric Stage Trussing</span>
                  </div>
                  <h4 className="text-base font-display font-bold uppercase text-white">
                    80-Foot Neon Runway
                  </h4>
                  <p className="text-xs text-white/70">
                    Precision moving heads, sweeping concert beams, and an 80-foot illuminated stage runway putting performers inside the crowd.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-[#F12B25] text-xs font-mono font-bold tracking-widest uppercase">
                    <Flame className="w-4 h-4" />
                    <span>Brutalist Neon Palette</span>
                  </div>
                  <h4 className="text-base font-display font-bold uppercase text-white">
                    Void Black & Saturated Red
                  </h4>
                  <p className="text-xs text-white/70">
                    Bold extruded pixel lettering inspired by retro-arcade and cyber-electronic visuals, creating an unmistakable visual signature.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white/70">
                <span className="text-[#FACC15] font-bold uppercase tracking-wider block mb-1">
                  Dates & Campus Venue:
                </span>
                29–31 January 2027 · XIM University, Bhubaneswar, Odisha.
              </div>

              <div className="mt-8 pt-2">
                <Link
                  to="/events"
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1554D1] to-[#0d3ea8] text-white font-display font-black text-xs uppercase tracking-widest shadow-glow-blue hover:scale-105 transition-transform inline-flex items-center gap-2"
                >
                  <span>EXPLORE THEMED ATTRACTIONS & EVENTS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Halftone Diamond Background Overlay at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 moodi-diamond-halftone opacity-40 pointer-events-none z-0"></div>
    </div>
  );
}
