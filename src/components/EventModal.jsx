import React from 'react';
import { X, Trophy, AlertCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0c1017] border-2 border-white/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(241,43,37,0.4)] text-left card-shine"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#F12B25] text-white transition-colors focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Status */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white border border-white/15">
            {event.category}
          </span>
          <span className="text-xs font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
            2027 Coming Soon
          </span>
        </div>

        {/* Event Title */}
        <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white mb-2 leading-tight">
          {event.name}
        </h3>

        {/* Tag */}
        <div className="text-xs font-bold uppercase tracking-wider text-[#F12B25] mb-4 flex items-center gap-1.5">
          <Trophy className="w-3.5 h-3.5" />
          <span>{event.tag}</span>
        </div>

        {/* Description */}
        <div className="space-y-3 text-sm text-[#F4EBDD]/90 leading-relaxed border-t border-b border-white/10 py-4 my-4">
          <p className="font-medium text-white">{event.shortDesc}</p>
          <p className="text-xs sm:text-sm text-[#F4EBDD]/75">{event.fullDesc}</p>
        </div>

        {/* Rulebook Notice */}
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5 mb-6 text-xs text-amber-200">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>Team sizes, eligibility criteria, prize pool amounts, and submission deadlines will be announced with the official 2027 rulebook release.</span>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-colors"
          >
            Close Brief
          </button>
          <Link
            to="/register"
            onClick={onClose}
            className="w-full sm:w-auto btn-red-primary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-red"
          >
            <span>Register Your Intent</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

