import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Settings,
  LayoutGrid,
  Clock,
  ArrowUpRight,
  ArrowRight,
  Calendar,
  MapPin,
  Flame,
  Zap,
  Music2,
  Trophy,
  ExternalLink
} from 'lucide-react';
import CrownLogo from '../components/CrownLogo';
import HeroModals from '../components/HeroModals';
import SparkleCanvas from '../components/SparkleCanvas';
import ConcertLightBeams from '../components/ConcertLightBeams';
import AmbientGlow from '../components/AmbientGlow';

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4EBDD] relative overflow-hidden select-none">
      {/* 1. HERO SECTION: REPLICA OF "XPRESSIONS Neon Festival Experience.png" WITHOUT ANY OVERLAPS */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Full-bleed master artwork with top (-60px) and bottom (-70px) clipping so baked text is 100% eliminated */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="./assets/home/xpressions_neon_hero.png"
            alt="Xpressions Neon Festival Experience"
            className="w-full h-[calc(100%+130px)] -mt-[60px] object-cover object-center scale-[1.01]"
          />
          {/* Deep void black vignette at bottom to blend stage runway seamlessly and prevent any underlying button visibility */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#08090D] via-[#08090D]/90 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Live Stage Light Beams & Falling Light Sparkles Overlay */}
        <ConcertLightBeams intensity="high" />
        <SparkleCanvas density="hero" interactive={true} />

        {/* Ambient Stage Glows */}
        <AmbientGlow color="red" size="huge" className="top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60" />
        <AmbientGlow color="blue" size="xl" className="top-2/3 left-[15%] opacity-40" />

        {/* Transparent Spacer so the central artwork breathes naturally */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center pointer-events-none min-h-[58vh]">
          {/* Subtle interactive hover cue on central Crown */}
          <Link
            to="/the-fest"
            className="pointer-events-auto p-4 group"
            title="Explore The Fest"
          >
            <div className="w-16 h-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-[10px] font-display font-black tracking-widest uppercase text-white bg-black/70 px-3 py-1 rounded-full border border-white/20 shadow-glow-red">
                EXPLORE FEST ↗
              </span>
            </div>
          </Link>
        </div>

        {/* The Single Interactive Action Row: Clean, perfectly styled with ZERO double outline/text */}
        <div className="relative z-30 max-w-[1360px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-4 pb-2">
          {/* 4 Floating Pill Buttons: HEADLINERS, THEME, ABOUT US, HISTORY */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {/* 1. HEADLINERS */}
            <button
              type="button"
              onClick={() => setActiveModal('headliners')}
              className="px-4 py-2 rounded-full bg-black/90 border-2 border-[#F12B25] hover:bg-[#F12B25] text-white text-xs font-display font-black tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(241,43,37,0.5)] hover:shadow-[0_0_25px_rgba(241,43,37,0.9)] hover:scale-105 active:scale-95 flex items-center gap-1.5 backdrop-blur-md"
            >
              <span className="text-[#FF726B] font-bold">☆</span>
              <span>HEADLINERS</span>
            </button>

            {/* 2. THEME */}
            <button
              type="button"
              onClick={() => setActiveModal('theme')}
              className="px-4 py-2 rounded-full bg-black/90 border-2 border-[#F12B25] hover:bg-[#F12B25] text-white text-xs font-display font-black tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(241,43,37,0.5)] hover:shadow-[0_0_25px_rgba(241,43,37,0.9)] hover:scale-105 active:scale-95 flex items-center gap-1.5 backdrop-blur-md"
            >
              <span>🌐</span>
              <span>THEME</span>
            </button>

            {/* 3. ABOUT US */}
            <button
              type="button"
              onClick={() => setActiveModal('about')}
              className="px-4 py-2 rounded-full bg-black/90 border-2 border-[#F12B25] hover:bg-[#F12B25] text-white text-xs font-display font-black tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(241,43,37,0.5)] hover:shadow-[0_0_25px_rgba(241,43,37,0.9)] hover:scale-105 active:scale-95 flex items-center gap-1.5 backdrop-blur-md"
            >
              <span>🗎</span>
              <span>ABOUT US</span>
            </button>

            {/* 4. HISTORY */}
            <button
              type="button"
              onClick={() => setActiveModal('history')}
              className="px-4 py-2 rounded-full bg-black/90 border-2 border-[#F12B25] hover:bg-[#F12B25] text-white text-xs font-display font-black tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(241,43,37,0.5)] hover:shadow-[0_0_25px_rgba(241,43,37,0.9)] hover:scale-105 active:scale-95 flex items-center gap-1.5 backdrop-blur-md"
            >
              <span>⊞</span>
              <span>HISTORY</span>
            </button>
          </div>

          {/* Right Ticket Button: REGISTER !! with notched borders & corner rivets (Single, non-overlapping) */}
          <div className="shrink-0">
            <Link
              to="/register"
              className="group relative inline-flex items-center justify-center font-display font-black tracking-widest uppercase transition-all duration-300"
            >
              {/* Outer ambient red glow aura */}
              <div className="absolute inset-0 bg-[#F12B25] blur-lg opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all rounded-lg"></div>

              {/* Red ticket with notched cuts on edges matching mockup */}
              <div className="relative z-10 px-8 py-3.5 bg-gradient-to-r from-[#F12B25] to-[#d61e18] text-white border-2 border-[#FF726B] rounded-lg shadow-[0_0_25px_rgba(241,43,37,0.8)] group-hover:shadow-[0_0_40px_rgba(241,43,37,1)] group-hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="text-base sm:text-lg font-black tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  REGISTER !!
                </span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Modal Overlay (Drawer for Headliners, Theme, About Us, History) */}
      <HeroModals activeModal={activeModal} onClose={() => setActiveModal(null)} />

      {/* 2. INTRODUCTORY SECTION */}
      <section className="py-14 bg-[#08090D] relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base md:text-lg text-[#F4EBDD]/90 leading-relaxed font-normal">
            Xpressions is the flagship fest of Xavier Institute of Management, Bhubaneswar, run by the Xpressions Steering Committee for close to two decades. For three days, students from colleges across India compete in national-level business challenges, take the stage in dance, music, drama and fashion, and end the nights at Celeblitz, our celebrity night.
          </p>
        </div>
      </section>

      {/* 3. FOUR METRICS STAT STRIP (Exact Typography Inspired by Reference Images) */}
      <section className="py-8 bg-[#08090D] relative z-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                40,000+
              </div>
              <div className="text-xs sm:text-sm text-[#F4EBDD]/70 font-medium">
                footfall
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                20+
              </div>
              <div className="text-xs sm:text-sm text-[#F4EBDD]/70 font-medium">
                events
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                3 days
              </div>
              <div className="text-xs sm:text-sm text-[#F4EBDD]/70 font-medium">
                days
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                Celebrity
              </div>
              <div className="text-xs sm:text-sm text-[#F4EBDD]/70 font-medium">
                Celebrity nights
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR-CARD ROW: Compete, Attend, Partner + Why Xpressions? (Pro Nights redirected to Events) */}
      <section className="py-14 bg-[#08090D] relative z-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Compete (Red Neon Border) */}
            <div className="bg-[#0b0e14] rounded-2xl overflow-hidden border-2 border-[#F12B25] shadow-[0_0_20px_rgba(241,43,37,0.35)] hover:shadow-[0_0_35px_rgba(241,43,37,0.65)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src="./assets/home/compete.jpg"
                    alt="Compete"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent"></div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    Compete
                  </h3>
                  <p className="text-xs text-[#F4EBDD]/75 leading-relaxed line-clamp-3">
                    Compete by Day. Celebrate by night. Test yourself in national-level business, cultural and campus competitions.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/events"
                  className="text-xs font-bold uppercase tracking-wider text-[#F12B25] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: Attend (Links to Events!) */}
            <div className="bg-[#0b0e14] rounded-2xl overflow-hidden border-2 border-[#F12B25] shadow-[0_0_20px_rgba(241,43,37,0.35)] hover:shadow-[0_0_35px_rgba(241,43,37,0.65)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src="./assets/home/attend.jpg"
                    alt="Attend"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent"></div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    Attend
                  </h3>
                  <p className="text-xs text-[#F4EBDD]/75 leading-relaxed line-clamp-3">
                    Three days of performances, national competitions and star celebrity concert nights.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/events"
                  className="text-xs font-bold uppercase tracking-wider text-[#F12B25] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Explore Lineup</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: Partner (Electric Blue Neon Border) */}
            <div className="bg-[#0b0e14] rounded-2xl overflow-hidden border-2 border-[#1554D1] shadow-[0_0_20px_rgba(21,84,209,0.35)] hover:shadow-[0_0_35px_rgba(21,84,209,0.65)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                  <img
                    src="./assets/home/partner.jpg"
                    alt="Partner"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent"></div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase text-white">
                    Partner
                  </h3>
                  <p className="text-xs text-[#F4EBDD]/75 leading-relaxed line-clamp-3">
                    Put your brand in front of students from colleges across India through engagement and experiences.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to="/sponsors"
                  className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: Why Xpressions? (Brutalist Card with Red Accent Border) */}
            <div className="bg-[#0b0e14] rounded-2xl border-2 border-white/10 hover:border-[#F12B25] shadow-2xl p-6 flex flex-col justify-between transition-all duration-300">
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-black uppercase text-white tracking-wide">
                  Why Xpressions?
                </h3>
                <div className="space-y-2.5">
                  <div className="h-2 w-full bg-white/10 rounded-full"></div>
                  <div className="h-2 w-5/6 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-4/6 bg-white/10 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                </div>
                <p className="text-xs text-white/70 font-sans leading-relaxed pt-2">
                  Eastern India's most prestigious collegiate platform combining intense strategic corporate battles with unforgettable stadium rock and pop nights.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/the-fest"
                  className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#F12B25] flex items-center gap-1 transition-colors"
                >
                  <span>Discover Fest Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER: REGISTRATIONS OPEN SOON... with Ticket REGISTER !! */}
      <section className="py-12 bg-[#08090D] relative z-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-[#1554D1] bg-gradient-to-r from-[#0d1322] via-[#090b12] to-[#120a14] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(21,84,209,0.3)]">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-wider text-white">
                REGISTRATIONS OPEN SOON...
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-mono mt-1">
                29–31 JANUARY 2027 · XIM UNIVERSITY BHUBANESWAR
              </p>
            </div>

            <Link
              to="/register"
              className="px-8 py-4 bg-gradient-to-r from-[#F12B25] to-[#d61e18] text-white border-2 border-[#FF6B65] rounded-xl font-display font-black tracking-widest uppercase text-sm sm:text-base shadow-[0_0_25px_rgba(241,43,37,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>REGISTER !!</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
