import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SponsorCard from '../components/SponsorCard';
import { sponsors } from '../data/eventData';

const Sponsors = () => {
  return (
    <section
      id="patrocinadores"
      className="section-padding"
      style={{ background: '#060f06' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          label="Patrocinadores & Parceiros"
          title={<>Quem torna<br />isso <em className="text-forest-300 not-italic">possível</em></>}
          subtitle="O Iracambi Trail Running existe graças ao apoio de organizações que acreditam na união entre esporte e meio ambiente."
          align="center"
        />

        {/* Master sponsor */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream-subtle text-center mb-6">
            Realizador Master
          </p>
          <div className="flex justify-center">
            <SponsorCard sponsor={sponsors.master[0]} size="master" />
          </div>
        </div>

        <div className="divider-gold mb-12" />

        {/* Support */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream-subtle text-center mb-6">
            Apoio
          </p>
          <div className="grid grid-cols-3 gap-3">
            {sponsors.support.map((s, i) => (
              <SponsorCard key={i} sponsor={s} size="normal" />
            ))}
          </div>
        </div>

        <div className="divider-gold mb-12" />

        {/* Partners */}
        <div>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cream-subtle text-center mb-6">
            Parceiros
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {sponsors.partners.map((s, i) => (
              <SponsorCard key={i} sponsor={s} size="small" />
            ))}
          </div>
        </div>

        {/* Become sponsor CTA */}
        <div
          className="mt-16 glass-card p-8 text-center"
          style={{
            borderRadius: '4px',
            background: 'rgba(201,168,76,0.04)',
            border: '1px dashed rgba(201,168,76,0.2)',
          }}
        >
          <p className="font-display text-2xl text-cream mb-3">
            Quer fazer parte?
          </p>
          <p className="text-cream-muted font-body text-sm mb-6 max-w-md mx-auto">
            Associe sua marca a um evento único que combina esporte, natureza e impacto ambiental real na Mata Atlântica.
          </p>
          <a
            href="mailto:contato@iracambi.com"
            className="btn-outline text-xs py-3 px-6 inline-flex"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
