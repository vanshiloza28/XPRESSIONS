import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import CrownLogo from './CrownLogo';
import SoundToggle from './SoundToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinkClass = ({ isActive }) =>
    `text-xs xl:text-sm font-display font-bold tracking-widest uppercase transition-all py-1 border-b-2 ${
      isActive
        ? 'text-[#F12B25] border-[#F12B25] drop-shadow-[0_0_10px_rgba(241,43,37,0.7)]'
        : 'text-[#F4EBDD]/90 border-transparent hover:text-[#F12B25] hover:border-[#F12B25]/50'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl text-base font-bold uppercase transition-colors ${
      isActive ? 'bg-white/10 text-[#F12B25]' : 'text-[#F4EBDD]/85 hover:bg-white/5'
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090D]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5'
          : 'bg-gradient-to-b from-[#08090D] via-[#08090D]/80 to-transparent py-3'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Mobile: Hamburger on the left */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6 text-[#F12B25]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end pr-10">
            <NavLink to="/the-fest" className={navLinkClass}>THE FEST</NavLink>
            <NavLink to="/events" className={navLinkClass}>EVENTS</NavLink>
            <NavLink to="/highlights" className={navLinkClass}>HIGHLIGHTS</NavLink>
          </div>

          {/* Center: Crown Logo */}
          <Link
            to="/"
            className="flex flex-col items-center group focus:outline-none shrink-0 px-4"
            aria-label="Home"
          >
            <CrownLogo className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(241,43,37,0.8)]" />
            <span className="text-[9px] font-black uppercase tracking-widest text-[#F12B25] mt-0.5 opacity-90 group-hover:opacity-100">
              XPRESSIONS
            </span>
          </Link>

          {/* Desktop Right Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-start pl-10">
            <NavLink to="/schedule" className={navLinkClass}>SCHEDULE</NavLink>
            <NavLink to="/sponsors" className={navLinkClass}>SPONSORS</NavLink>
            <NavLink to="/faqs-contact" className={navLinkClass}>FAQs</NavLink>

            {/* Live Audio Looper: Karan Aujla - WAVY */}
            <SoundToggle />

            {/* Red Action Box Button: REGISTER -> */}
            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#F12B25] to-[#d41e18] text-white border border-[#FF6B65] text-xs font-display font-black tracking-widest uppercase shadow-[0_0_15px_rgba(241,43,37,0.6)] hover:shadow-[0_0_25px_rgba(241,43,37,0.9)] hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <span>REGISTER</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Right: Sound & REGISTER Button */}
          <div className="flex lg:hidden items-center gap-2">
            <SoundToggle />
            <Link
              to="/register"
              className="px-3 py-1.5 rounded-lg bg-[#F12B25] text-white text-[11px] font-display font-black tracking-widest uppercase border border-[#FF6B65] shadow-glow-red"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Panel */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[58px] bg-[#08090D]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto z-50">
          <div className="flex flex-col space-y-3 font-display tracking-wider">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>HOME</NavLink>
            <NavLink to="/the-fest" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>THE FEST</NavLink>
            <NavLink to="/events" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>EVENTS</NavLink>
            <NavLink to="/highlights" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>HIGHLIGHTS</NavLink>
            <NavLink to="/schedule" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>SCHEDULE</NavLink>
            <NavLink to="/sponsors" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>SPONSORS</NavLink>
            <NavLink to="/faqs-contact" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>FAQs &amp; CONTACT</NavLink>

            <div className="pt-4">
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F12B25] to-[#d61e18] text-center text-sm uppercase tracking-widest font-black text-white shadow-glow-red block border border-[#FF6B65]"
              >
                REGISTER YOUR INTENT NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
