import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function FeatureCard({ title, image, description, buttonText, buttonLink, badge }) {
  return (
    <div className="bg-xp-panel border border-xp-border rounded-2xl overflow-hidden flex flex-col h-full interactive-card card-shine group relative">
      {/* Top subtle glow bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-xp-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-xp-panel via-xp-panel/40 to-transparent"></div>
        {badge && (
          <div className="absolute top-3 left-3 bg-[#08090D]/85 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase text-xp-cream border border-white/15 flex items-center gap-1.5 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-xp-red animate-pulse"></span>
            <span>{badge}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between relative z-10">
        <div className="space-y-2.5">
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white group-hover:text-xp-cream transition-colors">
            {title}
          </h3>
          <p className="text-sm text-xp-muted leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pt-6">
          <Link
            to={buttonLink}
            className="btn-outlined w-full py-3 px-4 text-center text-sm font-semibold flex items-center justify-center gap-2 group-hover:border-xp-cream group-hover:bg-white/10 transition-all"
          >
            <span>{buttonText}</span>
            <ArrowUpRight className="w-4 h-4 text-xp-muted group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}
