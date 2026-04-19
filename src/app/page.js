"use client";
import Countdown from "@/components/Countdown";
import MusicPlayer from "@/components/MusicPlayer";

export default function Invitacion() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 text-center">
      {/* Header */}
      <MusicPlayer />
      <div className="mt-12">
        <p className="text-[var(--kpop-pink)] tracking-[0.3em] text-[10px] font-bold mb-2">WORLD TOUR: MI CUMPLEAÑOS</p>
        <h1 className="font-warrior text-5xl font-black italic text-glow-pink leading-tight">
          GENESIS GALILEA <br />
          <span className="text-[var(--kpop-cyan)] text-3xl">MIS 6 AÑOS</span>
        </h1>
      </div>

      {/* AQUÍ VA EL CONTADOR */}
      <div className="bg-black/40 py-4 px-6 rounded-2xl border border-white/5 backdrop-blur-sm">
        <p className="text-[8px] tracking-[0.3em] mb-4 opacity-70 uppercase font-bold">Cuenta regresiva para el show</p>
        <Countdown />
      </div>

      {/* Tarjeta de Información */}
      <div className="bg-black/70 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] w-full max-w-sm">
        <div className="mb-6">
          <h2 className="text-[var(--kpop-pink)] text-xs tracking-widest mb-1 font-bold">STAGE / LUGAR</h2>
          <p className="text-xl font-bold">
            Jardín de Eventos <br /> "Doña Conchita"
          </p>
        </div>

        <div className="mb-6">
          <a
            href="https://www.waze.com/es/live-map/directions/jardin-de-eventos-dona-conchita-3a-calle,-zona-1-250-ciudad-vieja?to=place.w.176423057.1764427180.21557001"
            target="_blank"
            className="inline-block border border-[var(--kpop-cyan)] text-[var(--kpop-cyan)] px-4 py-2 rounded-lg text-[10px] font-bold tracking-tighter hover:bg-[var(--kpop-cyan)] hover:text-black transition-all"
          >
            📍 Ver Ubicación
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div className="border-r border-white/10">
            <h2 className="text-[var(--kpop-cyan)] text-[10px] tracking-widest font-bold uppercase">Fecha</h2>
            <p className="font-bold text-sm text-white">Domingo 26 Abril</p>
          </div>
          <div>
            <h2 className="text-[var(--kpop-cyan)] text-[10px] tracking-widest font-bold uppercase">Inicio</h2>
            <p className="font-bold text-sm text-white">2:00 P.M.</p>
          </div>
        </div>
      </div>

      {/* Footer decoración */}
      <div className="mb-8">
        <div className="h-[1px] w-12 bg-[var(--kpop-pink)] mx-auto mb-2" />
        <p className="text-[8px] tracking-[0.5em] opacity-50 uppercase">No faltes a mi fiesta de cumpleaños</p>
      </div>
    </main>
  );
}
