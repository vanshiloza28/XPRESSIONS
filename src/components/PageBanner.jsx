import React from 'react';
import SparkleCanvas from './SparkleCanvas';
import ConcertLightBeams from './ConcertLightBeams';
import AmbientGlow from './AmbientGlow';

/**
 * PageBanner
 * Unified aesthetic header for interior pages (Highlights, Schedule & Venue,
 * Events, Sponsors, Register, FAQs & Contact).
 *
 * Includes:
 *  - Background photo with dark vignette
 *  - Concert light beams overhead (subtle)
 *  - Falling light sparkles canvas
 *  - Breathing red/blue ambient glows
 *  - Category pill, display title with glow, subtitle
 */
export default function PageBanner({
  badge,
  title,
  subtitle,
  image = './assets/schedule/banner.jpg',
  children
}) {
  return (
    <div className="relative py-16 sm:py-20 overflow-hidden border-b border-xp-border bg-gradient-to-b from-[#11141c] via-[#0b0d13] to-xp-bg">
      {/* Background photo with deep dark overlay */}
      {image && (
        <div className="absolute inset-0 opacity-25 pointer-events-none select-none">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center scale-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-xp-bg via-[#08090D]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-xp-bg via-transparent to-xp-bg" />
        </div>
      )}

      {/* Atmospheric light beams */}
      <ConcertLightBeams intensity="medium" />

      {/* Floating ambient glow spheres */}
      <AmbientGlow color="red" size="md" className="top-1/2 left-[12%]" />
      <AmbientGlow color="blue" size="md" className="top-1/3 right-[15%]" />
      <AmbientGlow color="cream" size="sm" className="bottom-0 left-1/2" />

      {/* Falling light sparkles */}
      <SparkleCanvas density="banner" />

      {/* Content */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <div className="flex items-center gap-3 mb-3">
            {badge}
          </div>
        )}

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight mb-4 section-title-glow leading-none">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-xp-muted max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}
      </div>

      {/* Bottom glowing divider line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-xp-red/50 to-transparent" />
    </div>
  );
}

