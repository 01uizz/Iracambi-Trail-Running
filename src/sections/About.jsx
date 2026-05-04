import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const About = () => {
  return (
    <section id="sobre" className="section-padding relative overflow-hidden">
      {/* BG accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,125,45,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <SectionTitle
              label="Sobre o Evento"
              title={<>Uma corrida que<br /><em className="text-trail-gold not-italic">transforma</em></>}
              subtitle="O Iracambi Trail Running não é só uma corrida. É uma experiência imersiva na maior floresta tropical do planeta, com propósito real e impacto ambiental mensurável."
            />

            <div className="space-y-6 mb-10">
              <p className="text-cream-muted font-body leading-relaxed">
                Criado pela ONG Iracambi, o evento leva atletas de todos os níveis para correr dentro da reserva da Mata Atlântica em Rosário da Limeira, MG. São aproximadamente 8km de trilhas reais — com subidas, descidas, travessias e muita natureza.
              </p>
              <p className="text-cream-muted font-body leading-relaxed">
                A segunda edição chega em 2026, após o sucesso histórico da estreia em 2025, que reuniu mais de 80 atletas e mostrou que é possível fazer esporte de alto nível com alma e responsabilidade ambiental.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {['Trail Run', 'Mata Atlântica', '~8km', 'Todas as idades', 'Impacto real'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-widest uppercase px-3 py-2 text-cream-muted"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '2px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <Button variant="primary" href="#impacto">
              Ver Impacto Ambiental
            </Button>
          </div>

          {/* Right — image + ONG info */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '4px', aspectRatio: '4/5' }}
            >
              <img
                src="/images/mata-atlantica.jpg"
                alt="Cuidando da floresta Iracambi"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(10,42,10,0.8) 0%, transparent 50%)',
                }}
              />
              {/* ONG badge */}
              <div
                className="absolute bottom-6 left-6 right-6 glass-card p-5"
                style={{ borderRadius: '4px' }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src="/images/logo-iracambi.png"
                    alt="Iracambi"
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <div>
                    <p className="text-cream font-display text-lg">ONG Iracambi</p>
                    <p className="text-cream-muted font-body text-xs leading-relaxed mt-1">
                      Mais de 20 anos restaurando a Mata Atlântica em Minas Gerais
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 opacity-30 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #4d9b4d 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
