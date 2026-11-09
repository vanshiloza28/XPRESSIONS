import React, { useState, useEffect } from 'react';
import CrownLogo from './CrownLogo';
import { Zap, Volume2, Sparkles } from 'lucide-react';

/**
 * LoadingScreen
 * Mood Indigo style cyber-festival loader.
 * Displays glowing Crown sign, dynamic percent counter, and glitch/neon aura before revealing the site.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING FESTIVAL PROTOCOLS...');
  const [isReady, setIsReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Has the user visited in this session? Allow them to still see the cool loader on refresh
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        const next = Math.min(100, prev + increment);

        if (next < 30) setStatusText('CALIBRATING CONCERT LIGHTS & AUDIO...');
        else if (next < 60) setStatusText('LOADING CELEBRITY NIGHT HEADLINERS...');
        else if (next < 85) setStatusText('SYNCING NEON STAGE RUNWAY...');
        else setStatusText('XPRESSIONS 2027 IS READY TO IGNITE');

        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  useEffect(() => {
    if (isReady) {
      // Auto-enter smoothly after a short beat if user doesn't click
      const timer = setTimeout(() => {
        handleEnter();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08090D] text-[#F4EBDD] transition-all duration-700 select-none ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Volumetric Glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#F12B25]/15 blur-[120px] -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#1554D1]/20 blur-[140px] -bottom-20 -right-20 animate-pulse"></div>

      {/* Subtle Diamond Halftone Overlay */}
      <div className="absolute inset-0 moodi-diamond-halftone opacity-30 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
        {/* Pulsing Crown Logo with Neon Aura */}
        <div className="relative mb-6 group cursor-pointer" onClick={handleEnter}>
          <div className="absolute -inset-4 rounded-full bg-[#F12B25]/30 blur-2xl animate-ping opacity-60"></div>
          <CrownLogo className="w-20 h-20 sm:w-24 sm:h-24 drop-shadow-[0_0_35px_rgba(241,43,37,0.9)] animate-bounce" />
        </div>

        {/* System Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-[#00F5D4]/40 text-[#00F5D4] text-[10px] font-mono tracking-widest uppercase mb-3 shadow-[0_0_15px_rgba(0,245,212,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-ping"></span>
          <span>XPRESSIONS 2027 · SYSTEM READY</span>
        </div>

        {/* Brand Header */}
        <h1 className="text-4xl sm:text-6xl font-display font-black tracking-tighter uppercase text-white drop-shadow-[0_0_25px_rgba(241,43,37,0.8)] mb-1">
          XPRESSIONS
        </h1>
        <p className="text-xs sm:text-sm font-sans font-bold uppercase tracking-[0.25em] text-[#FF6B65] mb-8">
          Not Just A Fest. It's A Whole X-Perience.
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/5 border border-white/10 rounded-full p-1 mb-4 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-[#1554D1] via-[#F12B25] to-[#00F5D4] transition-all duration-150 relative shadow-[0_0_15px_rgba(241,43,37,0.8)]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff]"></div>
          </div>
        </div>

        {/* Counter and Telemetry */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-white/70 px-1 mb-8">
          <span className="text-[#00F5D4] text-[11px] font-bold tracking-wider">{statusText}</span>
          <span className="text-lg font-black text-white">{progress}%</span>
        </div>

        {/* Enter Button (Appears once loaded or can be clicked to skip) */}
        <button
          type="button"
          onClick={handleEnter}
          className={`px-8 py-3 rounded-xl bg-gradient-to-r from-[#F12B25] to-[#B31D18] text-white border-2 border-[#FF726B] font-display font-black tracking-widest uppercase text-sm shadow-[0_0_25px_rgba(241,43,37,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ${
            isReady ? 'animate-pulse opacity-100' : 'opacity-80'
          }`}
        >
          <Zap className="w-4 h-4 fill-white" />
          <span>{isReady ? 'ENTER THE EXPERIENCE' : 'IGNITE THE FEST'}</span>
        </button>

        <p className="text-[10px] text-white/40 font-mono mt-4 tracking-widest uppercase">
          XIM BHUBANESWAR · 29–31 JAN 2027
        </p>
      </div>
    </div>
  );
}
