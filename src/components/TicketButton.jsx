import React from 'react';
import { Link } from 'react-router-dom';

/**
 * TicketButton
 * The signature red ticket/arcade-styled CTA button seen in the Mood Indigo reference mockup:
 * "REGISTER !!" with stylized ticket notches, glowing neon red drop shadow, and active hover states.
 */
export default function TicketButton({
  to = "/register",
  text = "REGISTER !!",
  onClick,
  className = "",
  size = "md"
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base sm:text-lg"
  }[size] || "px-6 py-2.5 text-sm";

  const content = (
    <div className={`relative inline-flex items-center justify-center font-display font-black tracking-widest uppercase transition-all duration-300 group cursor-pointer ${className}`}>
      {/* Outer ambient red glow aura */}
      <div className="absolute inset-0 bg-[#F12B25] blur-lg opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all rounded-lg"></div>

      {/* Main ticket button container with bracketed/notched styling */}
      <div className={`relative z-10 bg-gradient-to-r from-[#F12B25] to-[#d61e18] text-white border-2 border-[#FF6B65] rounded-lg shadow-[0_0_20px_rgba(241,43,37,0.7)] group-hover:shadow-[0_0_35px_rgba(241,43,37,0.95)] group-hover:scale-105 active:scale-95 transition-all flex items-center gap-2 ${sizeClasses}`}>
        {/* Left ticket bracket dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-white/80 group-hover:bg-white animate-pulse"></span>
        <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">{text}</span>
        {/* Right ticket bracket dot */}
        <span className="w-1.5 h-1.5 rounded-full bg-white/80 group-hover:bg-white animate-pulse"></span>
      </div>
    </div>
  );

  if (to) {
    return <Link to={to}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick} className="focus:outline-none">
      {content}
    </button>
  );
}

