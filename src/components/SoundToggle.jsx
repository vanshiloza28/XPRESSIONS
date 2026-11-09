import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * SoundToggle
 * Loops Karan Aujla's "WAVY" on toggle.
 * Retains audio state across the site and presents animated equalizer bars.
 */
export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize HTML5 Audio instance
    const audio = new Audio('/assets/audio/wavy.mp3');
    audio.loop = true;
    audio.volume = 0.5; // Optimal balanced volume
    audioRef.current = audio;

    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback blocked or pending interaction', err);
        });
    }
  };

  return (
    <button
      type="button"
      onClick={toggleSound}
      title={isPlaying ? "Pause 'WAVY - Karan Aujla'" : "Play 'WAVY - Karan Aujla' (Loop)"}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg group focus:outline-none ${
        isPlaying
          ? 'bg-[#F12B25]/20 border-[#F12B25] text-white shadow-[0_0_15px_rgba(241,43,37,0.5)]'
          : 'bg-black/60 border-white/20 text-[#F4EBDD]/70 hover:border-[#F12B25] hover:text-white'
      }`}
    >
      {isPlaying ? (
        <>
          <div className="flex items-center gap-0.5 h-3.5">
            <span className="w-1 h-3.5 bg-[#F12B25] rounded-full animate-pulse"></span>
            <span className="w-1 h-2 bg-[#FF6B65] rounded-full animate-bounce"></span>
            <span className="w-1 h-4 bg-[#00F5D4] rounded-full animate-pulse"></span>
            <span className="w-1 h-2.5 bg-[#F12B25] rounded-full animate-bounce"></span>
          </div>
          <span className="text-[10px] font-display font-black tracking-widest uppercase text-[#00F5D4] hidden sm:inline">
            WAVY · LIVE
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#F4EBDD]/60 group-hover:text-white transition-colors" />
          <span className="text-[10px] font-display font-bold tracking-widest uppercase text-[#F4EBDD]/70 group-hover:text-white hidden sm:inline">
            SOUND OFF
          </span>
        </>
      )}
    </button>
  );
}
