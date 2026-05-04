import React from 'react';
import { Trees, Leaf, Droplets, Globe } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { impactCards } from '../data/eventData';

const iconMap = {
  tree: Trees,
  leaf: Leaf,
  droplets: Droplets,
  globe: Globe,
};

const ImpactCard = ({ card }) => {
  const Icon = iconMap[card.icon];
  return (
    <div
      className="glass-card p-8 group hover:border-forest-400/30 transition-all duration-400"
      style={{ borderRadius: '4px' }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
        style={{
          background: 'rgba(77,155,77,0.12)',
          border: '1px solid rgba(77,155,77,0.2)',
          borderRadius: '3px',
        }}
      >
        <Icon size={20} className="text-forest-300" />
      </div>
      <h3 className="font-display text-xl text-cream mb-3">{card.title}</h3>
      <p className="text-cream-muted font-body text-sm leading-relaxed">{card.description}</p>
    </div>
  );
};

const Impact = () => {
  return (
    <section
      id="impacto"
      className="section-padding relative"
      style={{
        background: 'linear-gradient(180deg, #0a2a0a 0%, #091f09 50%, #0a2a0a 100%)',
      }}
    >
      {/* Big number background accent */}
      <div
        className="absolute top-20 right-8 font-display text-[20rem] font-900 pointer-events-none select-none"
        style={{
          color: 'rgba(45,125,45,0.03)',
          lineHeight: 1,
        }}
      >
        🌱
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <SectionTitle
            label="Impacto Ambiental"
            title={<>Cada corrida planta<br />uma <em className="text-forest-300 not-italic">floresta</em></>}
          />

          <div>
            <div
              className="glass-card p-8 mb-6"
              style={{
                background: 'rgba(45,125,45,0.06)',
                border: '1px solid rgba(77,155,77,0.2)',
                borderRadius: '4px',
              }}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display text-6xl gradient-text">80+</span>
                <span className="text-cream font-display text-2xl">árvores</span>
              </div>
              <p className="text-cream-muted font-body text-sm leading-relaxed">
                plantadas após a 1ª edição do Iracambi Trail Running em 2025. Em 2026, esse número vai crescer.
              </p>
            </div>
            <p className="text-cream-muted font-body text-sm leading-relaxed">
              A ONG Iracambi é referência nacional em restauração da Mata Atlântica, conectando pesquisa científica, voluntariado internacional e comunidade local para regenerar um dos biomas mais ameaçados do planeta.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {impactCards.map((card, i) => (
            <ImpactCard key={i} card={card} />
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-16 relative overflow-hidden" style={{ borderRadius: '6px', height: '280px' }}>
          <img
            src="/images/viveiro-mudas.jpg"
            alt="Viveiro de mudas nativas Iracambi"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: 'rgba(10,42,10,0.6)',
            }}
          >
            <div className="text-center px-4">
              <p className="font-display text-3xl md:text-4xl text-cream mb-3">
                Viveiro de Mudas Nativas
              </p>
              <p className="font-body text-cream-muted text-sm">
                Rosário da Limeira, Minas Gerais · Cada inscrição planta uma árvore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
