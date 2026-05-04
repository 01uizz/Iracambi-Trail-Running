import React from 'react';
import { MapPin, Trees, Footprints, Route, Mountain, Users } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { raceInfo } from '../data/eventData';

const iconMap = {
  'map-pin': MapPin,
  'trees': Trees,
  'footprints': Footprints,
  'route': Route,
  'mountain': Mountain,
  'users': Users,
};

const InfoCard = ({ info }) => {
  const Icon = iconMap[info.icon];
  return (
    <div
      className="glass-card p-6 flex items-start gap-5 group hover:border-trail-gold/25 transition-all duration-300"
      style={{ borderRadius: '4px' }}
    >
      <div
        className="w-10 h-10 flex items-center justify-center flex-shrink-0"
        style={{
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '3px',
        }}
      >
        <Icon size={16} className="text-trail-gold" />
      </div>
      <div>
        <p className="font-mono text-[10px] tracking-widest uppercase text-cream-subtle mb-1">
          {info.label}
        </p>
        <p className="font-body text-cream text-base font-500">{info.value}</p>
      </div>
    </div>
  );
};

const RaceInfo = () => {
  return (
    <section
      id="informacoes"
      className="section-padding"
      style={{
        background: 'linear-gradient(180deg, #091f09 0%, #0a2a0a 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionTitle
              label="Informações da Prova"
              title={<>Tudo que você<br />precisa <em className="text-trail-gold not-italic">saber</em></>}
              subtitle="Conheça os detalhes da 2ª edição. Informações completas serão disponibilizadas na abertura das inscrições."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {raceInfo.map((info, i) => (
                <InfoCard key={i} info={info} />
              ))}
            </div>
          </div>

          {/* Right — map + image */}
          <div className="space-y-4">
            {/* Photo */}
            <div
              className="overflow-hidden"
              style={{ borderRadius: '4px', height: '320px' }}
            >
              <img
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_750/https://radiomuriae.com.br/portal/wp-content/uploads/2025/10/9.jpg"
                alt="Participantes Iracambi Trail Run"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Map placeholder */}
            <div
              className="glass-card p-8 text-center"
              style={{ borderRadius: '4px' }}
            >
              <MapPin size={32} className="text-trail-gold mx-auto mb-4" />
              <p className="font-display text-xl text-cream mb-2">Rosário da Limeira, MG</p>
              <p className="font-body text-cream-muted text-sm mb-4">
                ONG Iracambi · Reserva da Mata Atlântica
              </p>
              <a
                href="https://maps.google.com/?q=ONG+Iracambi+Rosario+da+Limeira+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-widest uppercase text-trail-gold hover:text-trail-amber transition-colors"
              >
                Ver no mapa →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaceInfo;
