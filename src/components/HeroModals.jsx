import React from 'react';
import { X, Sparkles, Trophy, Calendar, Users, Star, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { celeblitzRoster, pastStarsList } from '../data/events';

export default function HeroModals({ activeModal, onClose }) {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0d1017] border-2 border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(241,43,37,0.3)] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#F12B25] text-white transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL 1: HEADLINERS */}
        {activeModal === 'headliners' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F12B25]">
              <Sparkles className="w-4 h-4" />
              <span>Celeblitz Pro Nights</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
              Celeblitz Headliners
            </h3>
            <p className="text-sm text-[#F4EBDD]/80 leading-relaxed">
              Eastern India's most electrifying pro night stage has hosted legendary artists across two decades:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {celeblitzRoster.map((artist, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-black/50 border border-white/10">
                  <div className="flex items-center justify-between text-xs text-[#F12B25] font-bold">
                    <span>Celeblitz {artist.year}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="font-display text-lg font-bold text-white mt-0.5">
                    {artist.name}
                  </div>
                  <div className="text-[11px] text-[#F4EBDD]/60">{artist.note}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#F12B25]/10 border border-[#F12B25]/30">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F12B25] block mb-1">
                Legacy Performers
              </span>
              <p className="text-xs text-[#F4EBDD]/90">
                Also hosted: {pastStarsList.join(', ')}.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <Link
                to="/events"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#F12B25] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#d41e18] transition-colors flex items-center gap-1.5"
              >
                <span>Explore Concert Lineup</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* MODAL 2: THEME */}
        {activeModal === 'theme' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F12B25]">
              <Sparkles className="w-4 h-4" />
              <span>Xpressions 2027 Manifesto</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
              Not Just A Fest. It's A Whole X-Perience.
            </h3>
            <p className="text-base text-[#F4EBDD]/90 leading-relaxed font-normal">
              For close to two decades, Xpressions has turned the XIMB campus into Eastern India's biggest stage for business minds and performers.
            </p>
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F12B25]"></div>
                <strong className="text-white font-display text-lg tracking-wide uppercase">Compete by Day</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#F4EBDD]/70 pl-5">
                National-level case competitions, live trading floors, consulting challenges, and Model United Nations with students from India's premier B-schools.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1554D1]"></div>
                <strong className="text-white font-display text-lg tracking-wide uppercase">Celebrate by Night</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#F4EBDD]/70 pl-5">
                Electrifying band battles at Decibelz, high-fashion runway at Carnival de Vogue, intense street theatre at Aaghaz, and the grand stadium finale at Celeblitz.
              </p>
            </div>
          </div>
        )}

        {/* MODAL 3: ABOUT US */}
        {activeModal === 'about' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1554D1]">
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional Legacy</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
              About Xpressions
            </h3>
            <p className="text-sm sm:text-base text-[#F4EBDD]/90 leading-relaxed font-normal">
              Xpressions is the flagship fest of Xavier Institute of Management, Bhubaneswar, run by the Xpressions Steering Committee for close to two decades. For three days, students from colleges across India compete in national-level business challenges, take the stage in dance, music, drama and fashion, and end the nights at Celeblitz, our celebrity night.
            </p>
            <div className="grid grid-cols-2 gap-3 text-center pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="font-display text-2xl font-black text-white">XIMB</div>
                <div className="text-[11px] text-[#F4EBDD]/60 mt-0.5">Xavier Institute of Management</div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <div className="font-display text-2xl font-black text-[#F12B25]">Bhubaneswar</div>
                <div className="text-[11px] text-[#F4EBDD]/60 mt-0.5">Odisha, India</div>
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <Link
                to="/the-fest"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors"
              >
                Learn More About The Fest ↗
              </Link>
            </div>
          </div>
        )}

        {/* MODAL 4: HISTORY */}
        {activeModal === 'history' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Trophy className="w-4 h-4" />
              <span>Historical Milestones</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
              Historical Benchmarks
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <Users className="w-5 h-5 text-[#F12B25] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-white">40,000+ Footfall: </strong>
                  <span className="text-[#F4EBDD]/80">Across three days at our celebrated 25th edition (January 2023).</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#1554D1] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-white">National Competitors: </strong>
                  <span className="text-[#F4EBDD]/80">Contingents from XLRI, IIM Lucknow, IIM Shillong, Great Lakes, IMT Ghaziabad, KIIT and more.</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-white">29 Corporate Sponsors: </strong>
                  <span className="text-[#F4EBDD]/80">Partnered at our milestone silver jubilee celebration.</span>
                </div>
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <Link
                to="/highlights"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-[#F12B25] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#d41e18] transition-colors"
              >
                Relive Full Gallery ↗
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

