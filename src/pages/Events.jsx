import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, MapPin, Trophy, X, ArrowRight, Zap, Info } from 'lucide-react';
import SparkleCanvas from '../components/SparkleCanvas';
import ConcertLightBeams from '../components/ConcertLightBeams';

// Event Categories matching confirmed Xpressions events from research
const CATEGORIES = [
  { id: 'concerts', label: 'CONCERTS', color: '#F12B25' },
  { id: 'management', label: 'MANAGEMENT', color: '#FACC15' },
  { id: 'cultural', label: 'CULTURAL', color: '#00F5D4' },
  { id: 'workshops', label: 'WORKSHOPS', color: '#A855F7' },
];

// Cards sourced from confirmed Xpressions event list (X-Stec research)
const CARDS_DATA = {
  concerts: [
    {
      id: 'c1',
      bigName: 'CELEBLITZ',
      subtitle: 'CELEBRITY NIGHT',
      category: 'CONCERTS',
      date: '31 JAN 2027',
      venue: 'Main Arena Ground, XIM Bhubaneswar',
      desc: 'The grand finale celebrity performance night. Artist reveal coming soon — follow official channels for the announcement.',
      status: 'ARTIST REVEAL COMING SOON',
      accentColor: '#F12B25'
    },
    {
      id: 'c2',
      bigName: 'DECIBELZ',
      subtitle: 'BATTLE OF BANDS',
      category: 'CONCERTS',
      date: 'FEST 2027',
      venue: 'Open Air Amphitheatre, XIM Bhubaneswar',
      desc: 'The national college battle of rock and metal bands. Heavy riffs, drum solos, and original compositions competing for supremacy.',
      status: 'CONFIRMED EVENT',
      accentColor: '#F12B25'
    },
    {
      id: 'c3',
      bigName: 'PRONITE',
      subtitle: 'ARTIST TBA',
      category: 'CONCERTS',
      date: 'FEST 2027',
      venue: 'Main Arena Ground, XIM Bhubaneswar',
      desc: 'Pro Night performance with a special guest artist. Details will be announced on our official Instagram. Stay tuned.',
      status: 'ARTIST REVEAL COMING SOON',
      accentColor: '#00F5D4'
    },
    {
      id: 'c4',
      isComingSoon: true,
      bigName: 'MORE ACTS',
      subtitle: 'COMING SOON',
      category: 'CONCERTS',
      desc: 'Additional performances and opening acts will be announced on our Instagram closer to the festival.',
      accentColor: '#EC4899'
    },
  ],
  management: [
    {
      id: 'm1',
      bigName: 'J.O.A.T',
      subtitle: 'JACK OF ALL TRADES',
      category: 'MANAGEMENT',
      date: '29–31 JAN 2027',
      venue: 'Academic Block, XIM Bhubaneswar',
      desc: 'The all-rounder management challenge testing breadth across strategy, finance, operations, and decision-making under pressure.',
      status: 'CONFIRMED EVENT',
      accentColor: '#FACC15'
    },
    {
      id: 'm2',
      bigName: 'PITCH IT ABROAD',
      subtitle: 'GLOBAL BUSINESS PITCH',
      category: 'MANAGEMENT',
      date: '29–31 JAN 2027',
      venue: 'Seminar Hall, XIM Bhubaneswar',
      desc: 'Teams pitch innovative business ideas targeting international markets before a panel of industry judges and alumni.',
      status: 'CONFIRMED EVENT',
      accentColor: '#F12B25'
    },
    {
      id: 'm3',
      bigName: 'TRADE WARS',
      subtitle: 'MARKET SIMULATION',
      category: 'MANAGEMENT',
      date: '29–31 JAN 2027',
      venue: 'Classrooms, XIM Bhubaneswar',
      desc: 'Live trading and market simulation challenge where teams compete across commodities, equities, and currency markets.',
      status: 'CONFIRMED EVENT',
      accentColor: '#A855F7'
    },
    {
      id: 'm4',
      bigName: 'XIMB-MUN',
      subtitle: 'MODEL UNITED NATIONS',
      category: 'MANAGEMENT',
      date: '29–31 JAN 2027',
      venue: 'Main Auditorium, XIM Bhubaneswar',
      desc: 'The XIMB Model United Nations — debate, diplomacy, and resolution-drafting across multiple committees and global agendas.',
      status: 'CONFIRMED EVENT',
      accentColor: '#00F5D4'
    },
    {
      id: 'm5',
      isComingSoon: true,
      bigName: 'MORE EVENTS',
      subtitle: 'RULEBOOKS DROPPING SOON',
      category: 'MANAGEMENT',
      desc: 'Additional management and HR competitions are being finalised. Rulebooks will be released on our official channels.',
      accentColor: '#FACC15'
    },
  ],
  cultural: [
    {
      id: 'cu1',
      bigName: 'THIRKAN',
      subtitle: 'WESTERN GROUP DANCE',
      category: 'CULTURAL',
      date: 'FEST 2027',
      venue: 'Main Stage, XIM Bhubaneswar',
      desc: 'Eastern India\'s premier western and fusion group dance face-off. High synchronized choreography and unmatched stage energy.',
      status: 'CONFIRMED EVENT',
      accentColor: '#F12B25'
    },
    {
      id: 'cu2',
      bigName: 'AAGHAZ',
      subtitle: 'NUKKAD NATAK',
      category: 'CULTURAL',
      date: 'FEST 2027',
      venue: 'Fountain Square, XIM Bhubaneswar',
      desc: 'Street play competition highlighting societal challenges through powerful voices, percussion, and choreography.',
      status: 'CONFIRMED EVENT',
      accentColor: '#FACC15'
    },
    {
      id: 'cu3',
      bigName: 'CARNIVAL DE VOGUE',
      subtitle: 'FASHION SHOW',
      category: 'CULTURAL',
      date: 'FEST 2027',
      venue: 'Main Stage, XIM Bhubaneswar',
      desc: 'The pinnacle fashion walk competition blending haute couture, neon themes, and commanding theatrical elegance.',
      status: 'CONFIRMED EVENT',
      accentColor: '#EC4899'
    },
    {
      id: 'cu4',
      isComingSoon: true,
      bigName: 'MORE EVENTS',
      subtitle: 'COMING SOON',
      category: 'CULTURAL',
      desc: 'More cultural competitions including solo singing, photography, and acoustic performances will be announced shortly.',
      accentColor: '#00F5D4'
    }
  ],
  workshops: [
    {
      id: 'w1',
      bigName: 'WORKSHOPS',
      subtitle: 'TO BE ANNOUNCED',
      category: 'WORKSHOPS',
      date: 'FEST 2027',
      venue: 'XIM Bhubaneswar',
      desc: 'Hands-on workshops covering areas such as music production, AI in marketing, and creative skills. Full schedule dropping soon.',
      status: 'DETAILS COMING SOON',
      accentColor: '#A855F7'
    },
    {
      id: 'w2',
      isComingSoon: true,
      bigName: 'COMING SOON',
      subtitle: 'WORKSHOP SCHEDULE',
      category: 'WORKSHOPS',
      desc: 'The full workshop schedule with facilitators and registration links will be announced on our official Instagram.',
      accentColor: '#EC4899'
    }
  ]
};

export default function Events() {
  const [activeTab, setActiveTab] = useState('concerts');
  const [selectedCard, setSelectedCard] = useState(null);

  const currentCards = CARDS_DATA[activeTab] || CARDS_DATA.concerts;
  const currentTabObj = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0];

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4EBDD] pt-24 pb-28 relative overflow-hidden select-none">
      <ConcertLightBeams intensity="low" />
      <SparkleCanvas density="normal" interactive={true} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Pills Selector: Mood Indigo style */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    borderColor: cat.color,
                    backgroundColor: isActive ? cat.color : '#08090D',
                    color: isActive ? '#000000' : cat.color,
                    boxShadow: isActive
                      ? `0 0 20px ${cat.color}`
                      : `0 0 10px rgba(0,0,0,0.5)`
                  }}
                  className="px-6 sm:px-8 py-2 sm:py-2.5 rounded-full border-2 text-xs sm:text-sm font-display font-black tracking-widest uppercase transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Massive 3D Extruded Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="moodi-title-pink text-4xl sm:text-7xl font-display font-black tracking-widest uppercase select-none">
            {currentTabObj.label}
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF6B65] mt-2">
            CLICK ANY CARD TO VIEW EVENT DETAILS
          </p>
        </div>

        {/* 3:4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1080px] mx-auto">
          {currentCards.map((card) => {
            const isComingSoon = card.isComingSoon;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`w-full aspect-[3/4] border-[3px] rounded-sm relative overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between p-6 pixel-card-grid group ${
                  isComingSoon
                    ? 'border-[#EC4899] shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_35px_rgba(236,72,153,0.85)] hover:scale-[1.02]'
                    : 'border-[#F12B25] shadow-[0_0_20px_rgba(241,43,37,0.35)] hover:shadow-[0_0_35px_rgba(241,43,37,0.9)] hover:scale-[1.02]'
                }`}
              >
                {/* Top Header Row of Card */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-black/80 border border-white/20 text-[#00F5D4]">
                    {card.category}
                  </span>
                  {card.status ? (
                    <span className="text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded bg-[#F12B25]/20 text-[#FF6B65] border border-[#F12B25]">
                      {card.status}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/50">
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Center: BIG BOLD 3D RETRO PIXEL NAME */}
                <div className="my-auto text-center z-10 px-2 py-4 flex flex-col items-center justify-center">
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-black uppercase text-center leading-tight transition-transform duration-300 group-hover:scale-105 ${
                      isComingSoon ? 'pixel-title-cyan' : 'pixel-title-3d'
                    }`}
                  >
                    {card.bigName}
                  </h3>

                  {/* Subtitle in cyan retro pixel style */}
                  <span className="moodi-cyan-pixel text-xs sm:text-sm uppercase tracking-widest font-bold mt-3 block">
                    {card.subtitle}
                  </span>
                </div>

                {/* Bottom Footer Row of Card */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono z-10">
                  <span className="text-white/60 tracking-wider">
                    {card.date ? card.date.split('·')[0].trim() : 'FEST 2027'}
                  </span>
                  <span className="text-[#00F5D4] group-hover:underline flex items-center gap-1 font-bold">
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>

                {/* Background ambient lighting */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${
                      card.accentColor || '#F12B25'
                    } 0%, transparent 70%)`
                  }}
                ></div>

                {/* Retro Corner Brackets */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#F12B25]/60 pointer-events-none"></div>
                <div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#F12B25]/60 pointer-events-none"></div>
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#F12B25]/60 pointer-events-none"></div>
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#F12B25]/60 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Retro Star Shard Element on Bottom Left */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="0,200 120,80 80,180 200,10 50,150"
            fill="none"
            stroke="url(#starGradient)"
            strokeWidth="3"
          />
          <polygon
            points="0,200 90,110 60,170 160,50 40,160"
            fill="url(#starFill)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="starGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F12B25" />
              <stop offset="50%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#00F5D4" />
            </linearGradient>
            <linearGradient id="starFill" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F12B25" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#00F5D4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Halftone Diamond Background Overlay at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 moodi-diamond-halftone opacity-40 pointer-events-none z-0"></div>

      {/* Interactive Modal Drawer */}
      {selectedCard && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-[#0e1017] border-2 border-[#F12B25] rounded-xl max-w-lg w-full p-6 relative shadow-[0_0_40px_rgba(241,43,37,0.8)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-[#F12B25] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-mono tracking-widest uppercase bg-[#F12B25]/20 text-[#FF726B] px-2.5 py-0.5 rounded border border-[#F12B25]">
                {selectedCard.category}
              </span>
              {selectedCard.status && (
                <span className="text-[11px] font-mono tracking-widest uppercase bg-[#00F5D4]/20 text-[#00F5D4] px-2.5 py-0.5 rounded border border-[#00F5D4]">
                  {selectedCard.status}
                </span>
              )}
            </div>

            {/* Title with Big 3D Typography */}
            <h2 className="text-3xl font-display font-black uppercase text-white tracking-wider mb-1">
              {selectedCard.bigName}
            </h2>
            <p className="text-xs font-mono text-[#00F5D4] uppercase tracking-wider mb-4">
              {selectedCard.subtitle}
            </p>

            {/* Details Strip */}
            {selectedCard.date && (
              <div className="flex flex-col gap-2 bg-black/50 p-3.5 rounded-lg border border-white/10 mb-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="w-4 h-4 text-[#F12B25]" />
                  <span>{selectedCard.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4 text-[#00F5D4]" />
                  <span>{selectedCard.venue}</span>
                </div>
              </div>
            )}

            {/* Description */}
            <p className="text-sm font-sans text-white/80 leading-relaxed mb-6">
              {selectedCard.desc}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link
                to="/register"
                onClick={() => setSelectedCard(null)}
                className="flex-1 py-3 rounded-lg bg-gradient-to-r from-[#F12B25] to-[#d61e18] text-white text-center font-display font-black tracking-widest uppercase text-xs shadow-glow-red hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                <span>REGISTER / PASSES</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
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
