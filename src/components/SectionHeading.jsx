import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = false,
  badge = null
}) {
  return (
    <div className={`mb-10 sm:mb-14 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      <div className={`flex items-center gap-2 mb-2 ${center ? 'justify-center' : ''}`}>
        {tag && (
          <span className="text-xs font-bold tracking-widest uppercase text-xp-red">
            {tag}
          </span>
        )}
        {badge}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-xp-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

