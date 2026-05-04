import React from 'react';
import { eventInfo } from '../data/eventData';

const QuoteSection = () => {
  return (
    <section
      className="relative py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a2a0a 0%, #0f3d0f 50%, #0a2a0a 100%)',
      }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Large decorative quote mark */}
      <div
        className="absolute top-8 left-8 md:left-20 font-display pointer-events-none select-none"
        style={{
          fontSize: '20rem',
          lineHeight: 0.8,
          color: 'rgba(201,168,76,0.04)',
        }}
      >
        "
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Label */}
        <p className="section-label mb-12">Imprensa local sobre o evento</p>

        {/* The quote */}
        <blockquote>
          <p
            className="font-display font-300 leading-tight mb-10"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              color: '#f5f0e8',
              letterSpacing: '-0.02em',
            }}
          >
            "
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #d4762a, #c9a84c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {eventInfo.quote}
            </span>
            "
          </p>

          {/* Divider */}
          <div className="divider-gold w-24 mx-auto mb-8" />

          <footer>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-cream-subtle">
              — {eventInfo.quoteAuthor}
            </p>
            <p className="font-body text-cream-subtle text-sm mt-2">
              Sobre a 1ª edição do Iracambi Trail Running, 2025
            </p>
          </footer>
        </blockquote>

        {/* Location badge */}
        <div
          className="inline-flex items-center gap-3 mt-16 px-8 py-4 glass-card"
          style={{ borderRadius: '2px' }}
        >
          <div
            className="w-2 h-2 rounded-full bg-forest-400"
            style={{ boxShadow: '0 0 8px rgba(77,155,77,0.6)' }}
          />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-cream-muted">
            Rosário da Limeira · Mata Atlântica · MG
          </span>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
