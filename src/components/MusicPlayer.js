"use client";
import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <audio ref={audioRef} src="/golden.mp3" loop />

      <button
        onClick={toggleMusic}
        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
          isPlaying
            ? "bg-kpopPink border-white animate-spin-slow shadow-[0_0_20px_rgba(255,0,122,0.6)]"
            : "bg-black/50 border-kpopCyan text-kpopCyan shadow-[0_0_10px_rgba(0,240,255,0.3)]"
        }`}
      >
        {isPlaying ? <span className="text-white">♫</span> : <span className="text-xl">▶</span>}
      </button>

      {/* Tooltip pequeño para invitar a dar click */}
      {!isPlaying && (
        <span className="absolute -bottom-8 right-0 text-[8px] font-warrior text-kpopCyan animate-pulse whitespace-nowrap">
          Reproduce Canción
        </span>
      )}
    </div>
  );
}
