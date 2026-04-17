"use client"; // Importante: el contador necesita interactividad
import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ dias: 0, horas: 0, min: 0, seg: 0 });

  useEffect(() => {
    // FECHA DEL DEBUT: 26 de Abril de 2026 a las 2:00 PM
    const targetDate = new Date("2026-04-26T14:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
          horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
          min: Math.floor((difference / 1000 / 60) % 60),
          seg: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 justify-center font-warrior" suppressHydrationWarning>
      <div className="flex flex-col">
        <span className="text-3xl text-glow-pink font-black leading-none">{timeLeft.dias}</span>
        <span className="text-[8px] uppercase tracking-widest text-kpop-cyan">Días</span>
      </div>
      <span className="text-2xl opacity-30 mt-1">:</span>
      <div className="flex flex-col">
        <span className="text-3xl text-white font-black leading-none">{timeLeft.horas}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50">Hrs</span>
      </div>
      <span className="text-2xl opacity-30 mt-1">:</span>
      <div className="flex flex-col">
        <span className="text-3xl text-white font-black leading-none">{timeLeft.min}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50">Min</span>
      </div>
      <span className="text-2xl opacity-30 mt-1">:</span>
      <div className="flex flex-col">
        <span className="text-3xl text-white font-black leading-none">{timeLeft.seg}</span>
        <span className="text-[8px] uppercase tracking-widest opacity-50">Seg</span>
      </div>
    </div>
  );
}
