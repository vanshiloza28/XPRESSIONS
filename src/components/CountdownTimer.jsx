import React, { useState, useEffect } from 'react';

/**
 * CountdownTimer
 * High-tech neon festival countdown widget to Xpressions 2027 (29 January 2027).
 * Displays Days, Hours, Minutes, Seconds with red neon card containers and subtle glow.
 */
export default function CountdownTimer() {
  const targetDate = new Date('2027-01-29T09:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0'), accent: 'border-[#F12B25] text-white shadow-glow-red' },
    { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0'), accent: 'border-white/20 text-[#F4EBDD]' },
    { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0'), accent: 'border-white/20 text-[#F4EBDD]' },
    { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0'), accent: 'border-[#1554D1] text-[#1554D1] shadow-glow-blue' },
  ];

  return (
    <div className="inline-flex items-center gap-2 sm:gap-3 p-2 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md shadow-2xl">
      {units.map((u, i) => (
        <div key={i} className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center">
            <div className={`w-11 sm:w-14 h-11 sm:h-14 rounded-xl bg-[#0d1017] border ${u.accent} flex items-center justify-center font-display text-xl sm:text-2xl font-black tracking-tight`}>
              {u.value}
            </div>
            <span className="text-[8px] sm:text-[9px] font-display font-black tracking-widest text-[#F4EBDD]/60 mt-1 uppercase">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 && (
            <span className="text-white/30 font-bold -mt-3 text-xs sm:text-sm">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

