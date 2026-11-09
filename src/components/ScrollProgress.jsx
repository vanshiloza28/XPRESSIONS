import React, { useEffect, useState } from 'react';

/**
 * ScrollProgress
 * Thin glowing red-to-cream bar along the very top of the window,
 * showing the user's progress through the page.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return setProgress(0);
      const current = window.scrollY;
      setProgress(Math.min(1, Math.max(0, current / total)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  );
}

