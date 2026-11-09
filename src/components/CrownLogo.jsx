import React from 'react';

/**
 * CrownLogo
 * The distinctive three-peaked red festival crown icon from the Mood Indigo / Xpressions
 * mockup. Sits at the center of the navigation bar and above the hero mainstage text.
 */
export default function CrownLogo({ className = "w-7 h-7", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 bg-[#F12B25] blur-md opacity-70 rounded-full pointer-events-none scale-125"></div>
      )}
      <svg
        viewBox="0 0 44 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        {/* Crown Base and Peaks */}
        <path
          d="M3 29H41L37 13L27 22L22 4L17 22L7 13L3 29Z"
          fill="#F12B25"
          stroke="#FF554E"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Peak gems / circles */}
        <circle cx="22" cy="4" r="2.2" fill="#FFFFFF" />
        <circle cx="7" cy="13" r="1.8" fill="#FFFFFF" />
        <circle cx="37" cy="13" r="1.8" fill="#FFFFFF" />
        {/* Bottom band accent */}
        <rect x="6" y="27.5" width="32" height="3" rx="1.5" fill="#FF726B" />
        {/* Crown inner chevron detail */}
        <path
          d="M17 22L22 14L27 22"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

