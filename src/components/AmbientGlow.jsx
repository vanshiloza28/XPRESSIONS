import React from 'react';

/**
 * AmbientGlow
 * Renders large, floating, breathing volumetric light spheres
 * behind cards, headings, and sections.
 * Colors: 'red' (#F12B25) | 'blue' (#1554D1) | 'cream' (#F4EBDD)
 */
export default function AmbientGlow({
  color = 'red',
  size = 'lg',
  className = '',
  style = {}
}) {
  const sizeMap = {
    sm: 'w-48 h-48',
    md: 'w-72 h-72',
    lg: 'w-96 h-96',
    xl: 'w-[520px] h-[520px]',
    huge: 'w-[750px] h-[750px]',
  };

  const colorClass = {
    red: 'ambient-glow-red',
    blue: 'ambient-glow-blue',
    cream: 'ambient-glow-cream',
  }[color] || 'ambient-glow-red';

  return (
    <div
      className={`ambient-glow ${sizeMap[size] || sizeMap.lg} ${colorClass} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

