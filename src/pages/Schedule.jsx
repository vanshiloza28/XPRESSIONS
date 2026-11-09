import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Compass,
  ArrowRight,
  Filter
} from 'lucide-react';
import ConcertLightBeams from '../components/ConcertLightBeams';
import SparkleCanvas from '../components/SparkleCanvas';

// ⚠ TENTATIVE — full schedule to be released by X-Stec closer to the event
const ALL_SCHEDULE_EVENTS = [
  // ---- DAY 1 ----
  {
    id: 'd1-inaug',
    category: 'day1',
    day: 1,
    dayLabel: 'DAY 1 · 29 JAN 2027',
    time: 'Morning',
    title: 'Grand Inauguration Ceremony',
    venue: 'Main Auditorium, XIM Bhubaneswar',
    desc: 'Traditional lamp-lighting, opening address, and release of the Xpressions 2027 souvenir. Detailed timings will be published by X-Stec.',
    status: 'TENTATIVE',
    color: '#00F5D4'
  },
  {
    id: 'd1-mgmt',
    category: 'day1',
    day: 1,
    dayLabel: 'DAY 1 · 29 JAN 2027',
    time: 'Afternoon',
    title: 'Management Events — Day 1 Rounds',
    venue: 'Academic Block, XIM Bhubaneswar',
    desc: 'Preliminary rounds for management competitions including J.O.A.T, Pitch It Abroad, Trade Wars, XIMB-MUN and others. Exact schedule TBA.',
    status: 'TENTATIVE',
    color: '#FACC15'
  },
  {
    id: 'd1-cultural',
    category: 'day1',
    day: 1,
    dayLabel: 'DAY 1 · 29 JAN 2027',
    time: 'Evening',
    title: 'Cultural Events — Day 1',
    venue: 'Open Grounds, XIM Bhubaneswar',
    desc: 'Cultural competition prelims including Aaghaz (Nukkad Natak). Full event schedule to be released by the organising team.',
    status: 'TENTATIVE',
    color: '#EC4899'
  },
  {
    id: 'd1-pronite',
    category: 'day1',
    day: 1,
    dayLabel: 'DAY 1 · 29 JAN 2027',
    time: 'Night',
    title: 'Evening Performance — Artist TBA',
    venue: 'Main Arena Ground, XIM Bhubaneswar',
    desc: 'Evening performance programme. Artist announcement and show timings will be released on official channels closer to the event.',
    status: 'ARTIST REVEAL COMING SOON',
    color: '#F12B25'
  },

  // ---- DAY 2 ----
  {
    id: 'd2-mgmt',
    category: 'day2',
    day: 2,
    dayLabel: 'DAY 2 · 30 JAN 2027',
    time: 'All Day',
    title: 'Management Events — Day 2 Rounds',
    venue: 'Academic Block, XIM Bhubaneswar',
    desc: 'Semi-final and final rounds for management competitions. Exact timings to be announced. Check the official X-Stec channels for updates.',
    status: 'TENTATIVE',
    color: '#FACC15'
  },
  {
    id: 'd2-decibelz',
    category: 'day2',
    day: 2,
    dayLabel: 'DAY 2 · 30 JAN 2027',
    time: 'Afternoon / Evening',
    title: 'Decibelz — Battle of Bands',
    venue: 'Open Air Amphitheatre, XIM Bhubaneswar',
    desc: 'College rock and metal bands compete in this flagship music event. Performance order and exact timing to be announced.',
    status: 'TENTATIVE',
    color: '#86EFAC'
  },
  {
    id: 'd2-cultural',
    category: 'day2',
    day: 2,
    dayLabel: 'DAY 2 · 30 JAN 2027',
    time: 'Evening',
    title: 'Thirkan — Western Group Dance',
    venue: 'Main Stage, XIM Bhubaneswar',
    desc: 'Eastern India\'s premier western and fusion group dance competition. Participant schedule to be released by the organising committee.',
    status: 'TENTATIVE',
    color: '#EC4899'
  },
  {
    id: 'd2-pronite',
    category: 'day2',
    day: 2,
    dayLabel: 'DAY 2 · 30 JAN 2027',
    time: 'Night',
    title: 'Evening Performance — Artist TBA',
    venue: 'Main Arena Ground, XIM Bhubaneswar',
    desc: 'Evening pro-night performance. Artist reveal and show timings to be published on official Instagram and website.',
    status: 'ARTIST REVEAL COMING SOON',
    color: '#F12B25'
  },

  // ---- DAY 3 ----
  {
    id: 'd3-cultural',
    category: 'day3',
    day: 3,
    dayLabel: 'DAY 3 · 31 JAN 2027',
    time: 'Afternoon',
    title: 'Carnival de Vogue — Fashion Show & Finals',
    venue: 'Main Stage, XIM Bhubaneswar',
    desc: 'The fashion show finale and prize distribution for cultural competitions. Full schedule to be released by the organising committee.',
    status: 'TENTATIVE',
    color: '#EC4899'
  },
  {
    id: 'd3-awards',
    category: 'day3',
    day: 3,
    dayLabel: 'DAY 3 · 31 JAN 2027',
    time: 'Evening',
    title: 'Prize Distribution & Closing Ceremony',
    venue: 'Main Auditorium, XIM Bhubaneswar',
    desc: 'Award ceremony for all competitions followed by the closing programme. Exact timing to be announced by X-Stec.',
    status: 'TENTATIVE',
    color: '#00F5D4'
  },
  {
    id: 'd3-celeblitz',
    category: 'day3',
    day: 3,
    dayLabel: 'DAY 3 · 31 JAN 2027',
    time: 'Night',
    title: 'Celeblitz — Grand Finale Celebrity Night',
    venue: 'Main Arena Ground, XIM Bhubaneswar',
    desc: 'The grand closing celebrity performance. Artist reveal and performance timings will be announced on official channels. Stay tuned.',
    status: 'ARTIST REVEAL COMING SOON',
    color: '#F12B25'
  },
];

const CATEGORY_TABS = [
  { id: 'all', label: 'ALL DAYS', color: '#00F5D4' },
  { id: 'day1', label: 'DAY 1 — 29 JAN', color: '#F12B25' },
  { id: 'day2', label: 'DAY 2 — 30 JAN', color: '#FACC15' },
  { id: 'day3', label: 'DAY 3 — 31 JAN', color: '#86EFAC' },
];

export default function Schedule() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedEventId, setExpandedEventId] = useState(null);

  const toggleEvent = (id) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  const filteredEvents = ALL_SCHEDULE_EVENTS.filter((evt) => {
    if (activeCategory === 'all') return true;
    return evt.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4EBDD] pt-24 pb-28 relative overflow-hidden select-none">
      <ConcertLightBeams intensity="low" />
      <SparkleCanvas density="normal" interactive={true} />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="moodi-title-pink text-4xl sm:text-7xl font-display font-black tracking-widest uppercase select-none mb-3">
            SCHEDULE
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF6B65]">
            29 – 31 JANUARY 2027 · XIM BHUBANESWAR
          </p>
        </div>

        {/* Tentative Notice Banner */}
        <div className="max-w-4xl mx-auto mb-8 p-4 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/40 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#FACC15] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-mono font-bold text-[#FACC15] uppercase tracking-widest">
              Tentative Outline — Full Schedule Coming Soon
            </p>
            <p className="text-xs text-white/70 mt-1">
              This is a broad three-day outline only. Exact timings, venue assignments, and artist details have not yet been finalised by X-Stec and will be published on official channels closer to the event.
            </p>
          </div>
        </div>

        {/* Day Filter Tabs */}
        <div className="flex flex-wrap items-center gap-0 mb-0">
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              style={
                activeCategory === tab.id
                  ? { backgroundColor: tab.color, color: '#000', boxShadow: `0 0 20px ${tab.color}80` }
                  : {}
              }
              className={`px-6 sm:px-10 py-4 sm:py-5 text-sm sm:text-lg font-display font-black tracking-wider uppercase transition-all duration-200 ${
                activeCategory === tab.id
                  ? 'scale-[1.02]'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Schedule Container */}
        <div className="w-full border-2 border-[#D946EF] bg-black/85 backdrop-blur-md p-6 sm:p-10 relative shadow-[0_0_30px_rgba(217,70,239,0.3)]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#D946EF]/30 gap-4">
            <div>
              <span className="text-2xl sm:text-4xl font-display font-black tracking-widest uppercase text-white drop-shadow-[0_0_10px_rgba(217,70,239,0.8)]">
                {activeCategory === 'all' ? 'Full Festival' : CATEGORY_TABS.find(t => t.id === activeCategory)?.label} Outline
              </span>
              <p className="text-xs sm:text-sm font-mono text-[#FACC15] uppercase tracking-widest mt-1">
                ⚠ TENTATIVE · EXACT TIMES TBA BY ORGANISING TEAM
              </p>
            </div>
          </div>

          {/* Events List */}
          <div className="mt-8 space-y-4">
            {filteredEvents.length === 0 ? (
              <div className="py-12 text-center text-white/50 font-mono text-sm">
                No events found for this filter.
              </div>
            ) : (
              filteredEvents.map((item) => {
                const isExpanded = expandedEventId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? 'border-[#F12B25] bg-[#12141c] shadow-[0_0_20px_rgba(241,43,37,0.35)]'
                        : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    {/* Clickable Header */}
                    <button
                      type="button"
                      onClick={() => toggleEvent(item.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00F5D4]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{item.time}</span>
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-display font-bold uppercase tracking-wider text-white group-hover:text-[#FF726B] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs text-white/50 font-mono mt-0.5">{item.dayLabel}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border bg-white/10 text-white/90 border-white/20 hidden sm:inline"
                          style={{ borderColor: item.color, color: item.color }}
                        >
                          {item.status}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#F12B25]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-white/60 group-hover:text-white" />
                        )}
                      </div>
                    </button>

                    {/* Hidden Content: Revealed only on click */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 border-t border-white/10 text-xs sm:text-sm font-sans space-y-3 bg-black/50">
                        <div className="flex flex-wrap items-center gap-4 text-[#00F5D4] font-mono text-xs">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-[#F12B25]" />
                            <span>{item.venue}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-white/70">
                            <Calendar className="w-3.5 h-3.5 text-[#FACC15]" />
                            <span>{item.dayLabel}</span>
                          </div>
                        </div>

                        <p className="text-white/80 leading-relaxed font-sans">{item.desc}</p>

                        <div className="pt-2 flex items-center gap-3">
                          <Link
                            to="/register"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#F12B25] text-white text-xs font-display font-black tracking-widest uppercase shadow-glow-red hover:scale-105 transition-transform"
                          >
                            <span>REGISTER / PASSES</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link
                            to="/events"
                            className="inline-flex items-center gap-1 px-3 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider"
                          >
                            <span>VIEW ALL EVENTS</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Campus Venue Locator Box */}
          <div className="mt-12 p-6 rounded-lg bg-black/60 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#00F5D4] text-xs font-mono font-bold tracking-widest uppercase mb-1">
                <Compass className="w-4 h-4" />
                <span>VENUE LOCATOR &amp; CAMPUS ACCESS</span>
              </div>
              <h3 className="text-xl font-display font-black text-white uppercase tracking-wider">
                XIM University, Bhubaneswar
              </h3>
              <p className="text-xs text-white/70 max-w-xl mt-1">
                Xavier Institute of Management (XIMB Campus), Bhubaneswar, Odisha · 20 mins from Biju Patnaik International Airport (BBI).
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=XIM+University+Bhubaneswar"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-bold text-xs uppercase tracking-widest whitespace-nowrap transition-all"
            >
              OPEN CAMPUS MAP ↗
            </a>
          </div>
        </div>
      </div>

      {/* Halftone Diamond Background Overlay at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 moodi-diamond-halftone opacity-40 pointer-events-none z-0"></div>

      {/* Retro Star Shard on Bottom-Right */}
      <div className="absolute -bottom-10 -right-10 w-72 h-72 pointer-events-none z-0 opacity-80">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <polygon
            points="200,200 80,80 120,180 0,10 150,150"
            fill="none"
            stroke="url(#schedStarGrad)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="schedStarGrad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#D946EF" />
              <stop offset="50%" stopColor="#00F5D4" />
              <stop offset="100%" stopColor="#F12B25" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
