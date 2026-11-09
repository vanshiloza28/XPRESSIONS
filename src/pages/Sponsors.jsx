import React, { useState } from 'react';
import { Mail, Phone, ArrowRight, Sparkles, Handshake, Maximize2, X, Download } from 'lucide-react';
import ConcertLightBeams from '../components/ConcertLightBeams';
import SparkleCanvas from '../components/SparkleCanvas';

export default function Sponsors() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090D] text-[#F4EBDD] pt-24 pb-28 relative overflow-hidden select-none">
      <ConcertLightBeams intensity="low" />
      <SparkleCanvas density="normal" interactive={true} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mood Indigo 3D Header: SPONSORS */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="moodi-title-pink text-4xl sm:text-7xl font-display font-black tracking-widest uppercase select-none mb-3">
            SPONSORS
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#FF6B65]">
            WE ARE PROUD TO HAVE ALL OUR SPONSORS & PARTNERS
          </p>
        </div>

        {/* The Entire Page Centerpiece: Official Xpressions Sponsors Wall Poster */}
        <div className="max-w-5xl mx-auto relative group">
          {/* Glowing Aura around Poster */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[#F12B25]/40 via-[#1554D1]/30 to-[#00F5D4]/40 rounded-2xl blur-xl opacity-80 group-hover:opacity-100 transition-opacity"></div>

          <div className="relative rounded-2xl overflow-hidden border-[3px] border-[#F12B25] bg-black shadow-[0_0_50px_rgba(241,43,37,0.5)]">
            {/* Top Toolbar */}
            <div className="bg-[#11141c] px-5 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs font-mono text-white/80">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F12B25] animate-ping"></span>
                <span className="font-bold uppercase tracking-wider text-[#00F5D4]">
                  OFFICIAL SPONSOR WALL · XPRESSIONS
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-[#F12B25] text-white text-xs font-mono uppercase tracking-wider transition-colors"
                title="View Fullscreen Poster"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">EXPAND POSTER</span>
              </button>
            </div>

            {/* High-Resolution Sponsor Wall Image */}
            <div
              className="w-full cursor-pointer overflow-hidden flex items-center justify-center bg-black"
              onClick={() => setIsZoomed(true)}
            >
              <img
                src="./assets/sponsors/xpressions_sponsors_wall.jpg"
                alt="Xpressions Official Sponsors Wall"
                className="w-full h-auto object-contain hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Bottom Action Bar */}
            <div className="bg-[#0b0d13] p-5 sm:p-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-display font-black text-white uppercase tracking-wider">
                  Our Sponsors & Partners
                </h3>
                <p className="text-xs text-white/70 font-sans mt-0.5">
                  Official sponsors and partners for Xpressions 2027 � details on the poster above.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setPartnerModalOpen(true)}
                  className="px-6 py-2.5 rounded-lg bg-[#F12B25] text-white font-display font-black text-xs uppercase tracking-widest shadow-glow-red hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Handshake className="w-4 h-4" />
                  <span>PARTNER WITH US</span>
                </button>
              </div>
            </div>
          </div>
        </div>

                {/* Sponsor Metrics Bar */}
        <div className="max-w-5xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-[#F12B25]">3 Days</div>
            <div className="text-[10px] font-mono uppercase text-white/60 mt-1">Non-Stop Festival</div>
          </div>
          <div className="bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-[#00F5D4]">20+</div>
            <div className="text-[10px] font-mono uppercase text-white/60 mt-1">National Events</div>
          </div>
          <div className="bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-[#FACC15]">Celeblitz</div>
            <div className="text-[10px] font-mono uppercase text-white/60 mt-1">Celebrity Night</div>
          </div>
          <div className="bg-black/60 border border-white/10 rounded-xl p-4 backdrop-blur-md">
            <div className="text-2xl sm:text-3xl font-display font-black text-[#D946EF]">XIMB</div>
            <div className="text-[10px] font-mono uppercase text-white/60 mt-1">Bhubaneswar Campus</div>
          </div>
      </div>
      </div>

      {/* Halftone Diamond Background Overlay at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 moodi-diamond-halftone opacity-40 pointer-events-none z-0"></div>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-[#F12B25] text-white transition-colors z-50"
            title="Close Fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="max-w-6xl max-h-[92vh] overflow-auto rounded-xl border-2 border-[#F12B25] shadow-[0_0_50px_rgba(241,43,37,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="./assets/sponsors/xpressions_sponsors_wall.jpg"
              alt="Xpressions Sponsors Fullscreen"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}

      {/* Partner With Us Modal Drawer */}
      {partnerModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPartnerModalOpen(false)}
        >
          <div
            className="bg-[#0e1017] border-2 border-[#F12B25] rounded-xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_40px_rgba(241,43,37,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPartnerModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-[#F12B25] text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-display font-black uppercase text-white tracking-wider mb-2">
              Partner With Xpressions 2027
            </h3>
            <p className="text-xs text-white/80 leading-relaxed mb-6 font-sans">
              To discuss title sponsorships, category exclusivity, experiential arenas, or food stalls, connect with our corporate alliances team:
            </p>

            <div className="bg-black/60 p-4 rounded-lg border border-white/10 space-y-2 text-xs font-mono mb-6">
              <div className="text-white font-bold">Vanshil Shah</div>
              <div className="text-[#00F5D4]">Head of Sponsorship & Alliances</div>
              <div className="text-white/80">Email: xpressions@xim.edu.in</div>
              <div className="text-white/80">Phone: +91 97570 85785</div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="mailto:xpressions@xim.edu.in?subject=Xpressions%202027%20Sponsorship%20Proposal"
                className="flex-1 py-3 rounded-lg bg-[#F12B25] text-white text-center font-display font-black tracking-widest uppercase text-xs shadow-glow-red hover:scale-105 transition-transform"
              >
                EMAIL SPONSORSHIP TEAM
              </a>
              <button
                type="button"
                onClick={() => setPartnerModalOpen(false)}
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
