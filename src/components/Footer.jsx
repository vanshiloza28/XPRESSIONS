import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, ShieldCheck } from 'lucide-react';
import CrownLogo from './CrownLogo';
import { generalContact } from '../data/contacts';

export default function Footer() {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-[#F4EBDD] pt-14 pb-12 relative overflow-hidden">
      {/* Top ambient glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F12B25]/50 to-transparent"></div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        {/* Crown Logo & Title */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <CrownLogo className="w-9 h-9" glow={true} />
          <span className="font-display text-2xl font-black uppercase tracking-wider text-white">
            XPRESSIONS 2027
          </span>
          <span className="text-[11px] uppercase tracking-widest text-[#F4EBDD]/60 font-semibold">
            29 to 31 January 2027 · Bhubaneswar
          </span>
        </div>

        {/* Social Icons — Instagram and YouTube only */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={generalContact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#F4EBDD]/80 hover:text-white hover:bg-[#F12B25] hover:border-[#F12B25] hover:scale-110 transition-all shadow-lg"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={generalContact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[#F4EBDD]/80 hover:text-white hover:bg-[#F12B25] hover:border-[#F12B25] hover:scale-110 transition-all shadow-lg"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Nav Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-display font-bold tracking-widest uppercase text-[#F4EBDD]/70">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/the-fest" className="hover:text-white transition-colors">The Fest</Link>
          <Link to="/events" className="hover:text-white transition-colors">Events</Link>
          <Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link>
          <Link to="/highlights" className="hover:text-white transition-colors">Highlights</Link>
          <Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link>
          <Link to="/faqs-contact" className="hover:text-white transition-colors">FAQs &amp; Contact</Link>
          <Link to="/register" className="text-[#F12B25] hover:text-white transition-colors">Register</Link>
        </div>

        {/* Mandatory Academic Disclaimer Box */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-[#11141C]/80 border border-white/10 text-center">
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#F12B25] mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Academic Project Notice</span>
          </div>
          <p className="text-[11px] sm:text-xs text-[#F4EBDD]/70 leading-relaxed font-normal">
            Student project for the Digital Marketing course (Section B, Group 1, XIM University), not the official Xpressions website. Details marked Tentative will be updated once confirmed.
          </p>
        </div>

        <div className="text-[10px] text-[#F4EBDD]/50 uppercase tracking-widest">
          © 2027 Xpressions Steering Committee · Xavier Institute of Management, Bhubaneswar
        </div>
      </div>
    </footer>
  );
}
