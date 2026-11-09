import React from 'react';
import { Award, Briefcase, Sparkles, Building2 } from 'lucide-react';

export default function SponsorGrid({ tiers }) {
  return (
    <div className="space-y-16">
      {tiers.map((tierGroup, tIdx) => {
        const isTitleTier = tIdx === 0;
        return (
          <div key={tierGroup.tier} className="space-y-6">
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-xp-border pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-xp-blue">
                    {tierGroup.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white uppercase mt-0.5">
                  {tierGroup.tier}
                </h3>
              </div>
              <p className="text-xs text-xp-muted max-w-md">
                {tierGroup.description}
              </p>
            </div>

            {/* Logo Grids */}
            <div
              className={`grid gap-4 sm:gap-6 ${
                isTitleTier
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              }`}
            >
              {tierGroup.partners.map((partner, pIdx) => (
                <div
                  key={pIdx}
                  className={`bg-xp-panel border border-xp-border rounded-xl p-6 flex flex-col items-center justify-center text-center interactive-card group relative overflow-hidden ${
                    isTitleTier ? 'min-h-[180px] sm:min-h-[220px]' : 'min-h-[140px]'
                  }`}
                >
                  {/* Subtle ambient lighting */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

                  {/* Logo Placeholder Emblem */}
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xp-cream/40 group-hover:text-xp-cream group-hover:scale-110 transition-all mb-3">
                    <Building2 className="w-6 h-6" />
                  </div>

                  <div className="font-display text-lg sm:text-xl font-bold tracking-wider text-white group-hover:text-xp-cream transition-colors">
                    {partner.placeholder}
                  </div>
                  <div className="text-xs text-xp-muted mt-1">
                    {partner.role}
                  </div>
                  <span className="mt-3 text-[10px] uppercase font-semibold tracking-wider text-xp-blue/80 px-2 py-0.5 rounded bg-xp-blue/10 border border-xp-blue/20">
                    {partner.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

