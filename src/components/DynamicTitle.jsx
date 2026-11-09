import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES = {
  '/': "👑 XPRESSIONS '27 · A Whole X-Perience",
  '/the-fest': '⚡ THE FEST · Xpressions 2027',
  '/events': '🔥 EVENTS & CONCERTS · Xpressions 2027',
  '/schedule': '📅 FESTIVAL SCHEDULE · Xpressions 2027',
  '/sponsors': '💎 SPONSORS & PARTNERS · Xpressions 2027',
  '/register': '🎟️ REGISTER NOW · Xpressions 2027'
};

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const currentTitle = ROUTE_TITLES[location.pathname] || "👑 XPRESSIONS '27 · A Whole X-Perience";
    document.title = currentTitle;

    // Easter egg: change title when user switches tabs
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "⚡ Don't Miss The Beat! · Xpressions '27";
      } else {
        document.title = currentTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [location.pathname]);

  return null;
}

