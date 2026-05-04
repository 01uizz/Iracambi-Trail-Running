import React, { useState, useEffect } from 'react';
import { eventInfo } from '../data/eventData';

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div
        className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center glass-card"
        style={{ borderRadius: '4px' }}
      >
        <span className="font-display text-4xl md:text-5xl font-700 gradient-text">
          {String(value).padStart(2, '0')}
        </span>
      </div>
    </div>
    <span className="section-label mt-3 text-[10px]">{label}</span>
  </div>
);

const Separator = () => (
  <div className="flex flex-col items-center justify-center pb-6">
    <span className="text-trail-gold text-3xl font-display leading-none">:</span>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculate = () => {
      const now = new Date().getTime();
      const target = eventInfo.eventDate.getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="divider-gold mb-16" />
      <div className="max-w-4xl mx-auto text-center">
        <p className="section-label mb-8">Contagem Regressiva</p>
        <p className="font-display text-2xl md:text-3xl text-cream mb-12 font-300">
          A 2ª edição está chegando
        </p>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <CountdownUnit value={timeLeft.days} label="Dias" />
          <Separator />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <Separator />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <Separator />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>
        <p className="text-cream-muted font-body text-sm mt-10">
          * Data estimada — confirme nas nossas redes sociais
        </p>
      </div>
      <div className="divider-gold mt-16" />
    </section>
  );
};

export default Countdown;
