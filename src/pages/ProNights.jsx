import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Music2, Star, Zap, X, ArrowRight, ShieldCheck } from 'lucide-react';
import ConcertLightBeams from '../components/ConcertLightBeams';
import SparkleCanvas from '../components/SparkleCanvas';

const PRO_NIGHTS_DATA = [
  {
    id: 'pn1',
    day: 'DAY 1 · 29 JAN 2027',
    name: 'DHRUV',
    tagline: 'R&B / Soulful Acoustic Odyssey',
    image: './assets/highlights/business.jpg',
    venue: 'Main Arena Stage, XIM Bhubaneswar',
    timing: '07:30 PM Onwards',
    desc: 'Opening the festival with global viral anthems and magnetic indie-pop grooves. Dhruv brings heartfelt melodies under a canopy of 10,000 phone lights.',
    status: 'CONFIRMED OPENING ACT'
  },
  {
    id: 'pn2',
    day: 'DAY 2 · 30 JAN 2027',
    name: 'SEEDHE MAUT',
    tagline: 'Hardcore Indian Hip-Hop Revolution',
    image: './assets/highlights/aaghaz.png',
    venue: 'Main Arena Stage, XIM Bhubaneswar',
    timing: '08:00 PM Onwards',
    desc: 'Encore ABJ and Calm set the campus on fire with explosive drill flows, unstoppable moshpits, and iconic crowd participation.',
    status: 'PRONITE HEADLINER'
  },
  {
    id: 'pn3',
    day: 'DAY 3 · 31 JAN 2027',
    name: 'SONU NIGAM',
    tagline: 'Celeblitz Star Grand Finale',
    image: './assets/events/performer.jpg',
    venue: 'Main Arena Stage, XIM Bhubaneswar',
    timing: '07:30 PM Onwards',
    desc: 'The master of playback and live performance closes Xpressions 2027 with timeless classics and soaring high notes before 20,000+ electrified fans.',
    status: 'CELEBLITZ HEADLINER'
  },
  {
    id: 'pn4',
    isComingSoon: true,
    day: 'SPECIAL MIDNIGHT ACT',
    name: 'COMING SOON',
    tagline: 'Mystery International DJ & Producer',
    venue: 'Main Arena Stage',
    timing: '11:00 PM – Late',
    desc: 'A world-class electronic music producer will take over the midnight runway. Stay tuned for the official drop!'
  }
];

export default function ProNights() {
  const [selectedNight, setSelectedNight] = useState(null);

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4EBDD] pt-24 pb-28 relative overflow-hidden select-none">
      <ConcertLightBeams intensity="high" />
      <SparkleCanvas density="normal" interactive={true} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mood Indigo 3D Header: PRO NIGHTS */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="moodi-title-pink text-4xl sm:text-7xl font-display font-black tracking-widest uppercase select-none">
            PRO NIGHTS
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF6B65] mt-2">
            CELEBLITZ & PRONITE STAGE SERIES · 29–31 JANUARY 2027
          </p>
        </div>

        {/* 3:4 Headliner Cards Grid (Matching moodi.org_events.png layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1240px] mx-auto">
          {PRO_NIGHTS_DATA.map((night) => {
            if (night.isComingSoon) {
              return (
                <div
                  key={night.id}
                  onClick={() => setSelectedNight(night)}
                  className="w-full aspect-[3/4] border-[3px] border-[#F12B25] rounded-none sm:rounded-sm relative overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(241,43,37,0.3)] hover:shadow-[0_0_35px_rgba(241,43,37,0.8)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group"
                >
                  <div className="absolute inset-0 bg-[#280424]">
                    <svg
                      className="w-full h-full opacity-60 mix-blend-screen scale-125 group-hover:scale-150 transition-transform duration-700"
                      viewBox="0 0 200 260"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,30 Q50,90 100,30 T200,30 L200,70 Q150,130 100,70 T0,70 Z"
                        fill="#701a75"
                      />
                      <path
                        d="M0,90 Q50,150 100,90 T200,90 L200,130 Q150,190 100,130 T0,130 Z"
                        fill="#be123c"
                      />
                      <path
                        d="M0,150 Q50,210 100,150 T200,150 L200,190 Q150,250 100,190 T0,190 Z"
                        fill="#4c0519"
                      />
                      <path
                        d="M0,210 Q50,270 100,210 T200,210 L200,260 L0,260 Z"
                        fill="#831843"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                  <div className="relative z-10 text-center px-4">
                    <span className="text-white text-xl sm:text-2xl font-display font-black tracking-widest uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] border-b-2 border-[#F12B25] pb-1">
                      COMING SOON
                    </span>
                    <p className="text-[10px] font-mono text-white/70 uppercase tracking-widest mt-2">
                      TAP TO REVEAL
                    </p>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={night.id}
                onClick={() => setSelectedNight(night)}
                className="w-full aspect-[3/4] border-[3px] border-[#F12B25] rounded-none sm:rounded-sm relative overflow-hidden cursor-pointer shadow-[0_0_20px_rgba(241,43,37,0.35)] hover:shadow-[0_0_35px_rgba(241,43,37,0.85)] hover:scale-[1.02] transition-all duration-300 group"
              >
                <img
                  src={night.image}
                  alt={night.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-black/80 text-[#00F5D4] border border-[#00F5D4]/40 px-2 py-0.5 rounded">
                    {night.day.split('·')[0]}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4 text-center z-10">
                  <h3 className="text-white font-display font-black tracking-wider text-xl sm:text-2xl uppercase drop-shadow-[0_2px_6px_#000]">
                    {night.name}
                  </h3>
                  <p className="text-[11px] font-mono text-[#FF726B] uppercase tracking-wider mt-0.5">
                    {night.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hall of Fame / Past Legacy Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-black/60 border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-md">
          <span className="text-xs font-mono uppercase tracking-widest text-[#00F5D4] mb-2 inline-block">
            CELEBLITZ LEGACY ARCHIVE
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-wider mb-3">
            Eastern India's Grandest Stage
          </h2>
          <p className="text-sm text-white/80 leading-relaxed max-w-xl mx-auto mb-6">
            Past editions have hosted legendary acts including Vishal & Shekhar, Darshan Raval, Mika Singh, Amit Trivedi, Sunidhi Chauhan, and Euphoria before roar-filled capacity crowds.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#F12B25] text-white font-display font-black text-xs uppercase tracking-widest shadow-glow-red hover:scale-105 transition-all"
          >
            <span>REGISTER FOR PRO NIGHT ENTRY PASSES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Halftone Diamond Background Overlay at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 moodi-diamond-halftone opacity-40 pointer-events-none z-0"></div>

      {/* Retro Star Shard on Bottom-Left */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="0,200 120,80 80,180 200,10 50,150"
            fill="none"
            stroke="url(#pnStarGrad)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="pnStarGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F12B25" />
              <stop offset="50%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#00F5D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Interactive Modal Drawer: Keeps info hidden until clicked! */}
      {selectedNight && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedNight(null)}
        >
          <div
            className="bg-[#0e1017] border-2 border-[#F12B25] rounded-xl max-w-lg w-full p-6 relative shadow-[0_0_40px_rgba(241,43,37,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedNight(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-[#F12B25] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block text-[11px] font-mono tracking-widest uppercase bg-[#F12B25]/20 text-[#FF726B] px-2.5 py-0.5 rounded border border-[#F12B25] mb-2">
              {selectedNight.day}
            </div>

            <h2 className="text-3xl font-display font-black uppercase text-white tracking-wider mb-1">
              {selectedNight.name}
            </h2>
            <p className="text-xs font-mono text-[#00F5D4] uppercase tracking-wider mb-4">
              {selectedNight.tagline}
            </p>

            <div className="space-y-2 bg-black/50 p-3.5 rounded-lg border border-white/10 mb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-4 h-4 text-[#F12B25]" />
                <span>{selectedNight.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-4 h-4 text-[#00F5D4]" />
                <span>{selectedNight.timing}</span>
              </div>
            </div>

            <p className="text-sm font-sans text-white/80 leading-relaxed mb-6">
              {selectedNight.desc}
            </p>

            <div className="flex items-center gap-3">
              <Link
                to="/register"
                onClick={() => setSelectedNight(null)}
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#F12B25] to-[#d61e18] text-white text-center font-display font-black tracking-widest uppercase text-xs shadow-glow-red hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>CLAIM PRO NIGHT PASS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedNight(null)}
                className="px-4 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
