import React, { useEffect, useRef } from 'react';
import { ArrowDown, Clock } from 'lucide-react';
import Button from '../components/Button';

const Hero = () => {
  const badgeRef = useRef(null);

  useEffect(() => {
    // Stagger entrance animations
    const els = document.querySelectorAll('.hero-animate');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#060f06' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/floresta-amanhecer.jpg"
          alt="Trilha Iracambi"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
        />
        {/* Multi-layer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(6,15,6,0.55) 0%, rgba(6,15,6,0.2) 40%, rgba(6,15,6,0.75) 80%, rgba(10,42,10,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 70% 50%, rgba(45,125,45,0.1) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-16 flex flex-col items-start">
        {/* Badge "Inscrições em Breve" */}
        <div
          ref={badgeRef}
          className="hero-animate inline-flex items-center gap-2 mb-10 px-4 py-2"
          style={{
            background: 'rgba(201,168,76,0.12)',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: '2px',
          }}
        >
          <Clock size={12} className="text-trail-gold" />
          <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-trail-gold">
            Inscrições em Breve
          </span>
          <span
            className="w-2 h-2 rounded-full bg-trail-gold animate-pulse-gold"
          />
        </div>

        {/* Edition tag */}
        <p className="hero-animate section-label mb-5">2ª Edição · 2026</p>

        {/* Main title */}
        <h1 className="hero-animate font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] text-cream mb-6 max-w-4xl">
          IRACAMBI<br />
          <span
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #d4762a 60%, #7cba7c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Trail Run
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-animate font-body text-lg md:text-xl text-cream-muted max-w-xl mb-10 leading-relaxed">
          Corra entre as árvores, sinta a terra sob os pés e deixe uma floresta crescer depois de você.
          <span className="text-forest-300"> Mata Atlântica · Rosário da Limeira, MG.</span>
        </p>

        {/* CTA buttons */}
        <div className="hero-animate flex flex-col sm:flex-row gap-4">
          <Button variant="primary" href="#sobre">
            Conheça o Evento
          </Button>
          <Button variant="outline" href="#galeria">
            Ver Fotos da 1ª Edição
          </Button>
        </div>

        {/* Stats row */}
        <div className="hero-animate flex flex-wrap gap-8 mt-16 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            { v: '~8km', l: 'de trilha' },
            { v: '80+', l: 'atletas em 2025' },
            { v: '100%', l: 'Mata Atlântica' },
            { v: '1 árvore', l: 'por inscrição' },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-2xl md:text-3xl gradient-text">{s.v}</p>
              <p className="font-mono text-[11px] tracking-widest uppercase text-cream-subtle mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="section-label text-[9px] text-cream-subtle group-hover:text-trail-gold transition-colors">
          Role para baixo
        </span>
        <ArrowDown size={16} className="text-trail-gold animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
