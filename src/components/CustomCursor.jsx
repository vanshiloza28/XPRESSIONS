import React, { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 * High-tech cyber festival mouse pointer with smooth fluid spring tracking,
 * neon red & cyber cyan glow, hover expansion, and click ripple.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on pointer-fine (desktop/mouse) devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, select, textarea, [role="button"], .cursor-pointer, [data-cursor="interactive"]')
      );
      setIsHovered(isInteractive);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp loop for trailing ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Trailing Outer Neon Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 pointer-events-none will-change-transform transition-[width,height,background-color,border-color] duration-150 ease-out"
        style={{
          width: isHovered ? '48px' : isClicked ? '28px' : '34px',
          height: isHovered ? '48px' : isClicked ? '28px' : '34px',
          marginLeft: isHovered ? '-24px' : isClicked ? '-14px' : '-17px',
          marginTop: isHovered ? '-24px' : isClicked ? '-14px' : '-17px',
          borderRadius: '50%',
          border: isHovered
            ? '2px solid #00F5D4'
            : isClicked
            ? '2px solid #FF2E93'
            : '1.5px solid rgba(241, 43, 37, 0.85)',
          backgroundColor: isHovered
            ? 'rgba(0, 245, 212, 0.15)'
            : isClicked
            ? 'rgba(255, 46, 147, 0.25)'
            : 'transparent',
          boxShadow: isHovered
            ? '0 0 20px rgba(0, 245, 212, 0.8), inset 0 0 10px rgba(0, 245, 212, 0.4)'
            : '0 0 14px rgba(241, 43, 37, 0.6)'
        }}
      >
        {/* Subtle crosshair lines on hover */}
        {isHovered && (
          <>
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#00F5D4]/40 -translate-y-1/2"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#00F5D4]/40 -translate-x-1/2"></div>
          </>
        )}
      </div>

      {/* 2. Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none will-change-transform"
        style={{
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          marginLeft: isHovered ? '-4px' : '-3px',
          marginTop: isHovered ? '-4px' : '-3px',
          borderRadius: '50%',
          backgroundColor: isHovered ? '#00F5D4' : '#F12B25',
          boxShadow: isHovered
            ? '0 0 12px #00F5D4, 0 0 4px #fff'
            : '0 0 10px #F12B25, 0 0 3px #fff'
        }}
      />
    </div>
  );
}

