import React from 'react';

/**
 * ConcertLightBeams
 * Recreates the dramatic festival concert lighting from the Xpressions
 * build sheet reference photo: sweeping red/blue/warm-cream beam cones
 * from the ceiling with soft animated dust hazing.
 */
export default function ConcertLightBeams({
  intensity = 'high', // 'high' for hero, 'medium' for page banners
  className = ''
}) {
  const isHigh = intensity === 'high';

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Primary red stage beam (angled left-to-center) */}
      <div
        className={`light-cone light-cone-red ${
          isHigh ? 'opacity-100' : 'opacity-60'
        }`}
      />

      {/* Primary blue stage beam (angled right-to-center) */}
      <div
        className={`light-cone light-cone-blue ${
          isHigh ? 'opacity-100' : 'opacity-60'
        }`}
      />

      {/* Central warm-cream spotlight */}
      <div
        className={`light-cone light-cone-center ${
          isHigh ? 'opacity-100' : 'opacity-50'
        }`}
      />

      {/* Overhead horizontal light bar / rig bloom */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-xp-cream/40 to-transparent" />
      <div className="absolute -top-12 inset-x-0 h-28 bg-gradient-to-b from-white/10 to-transparent blur-2xl" />

      {/* Top stage light sources (fixtures) */}
      <div className="absolute top-0 left-[22%] -translate-x-1/2 w-32 h-6 bg-xp-red/80 blur-xl rounded-full" />
      <div className="absolute top-0 right-[22%] translate-x-1/2 w-32 h-6 bg-xp-blue/80 blur-xl rounded-full" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-xp-cream/60 blur-xl rounded-full" />

      {/* Stage haze gradient at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-xp-bg via-xp-bg/60 to-transparent" />
    </div>
  );
}

