import React from 'react';
import SectionTitle from '../components/SectionTitle';
import TimelineItem from '../components/TimelineItem';
import { timeline } from '../data/eventData';

const History = () => {
  return (
    <section id="historia" className="section-padding relative overflow-hidden">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/mata-atlantica.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity: 0.05 }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          label="Nossa História"
          title={<>De trilha em<br /><em className="text-trail-gold not-italic">trilha</em></>}
          subtitle="O que começou como uma corrida de pés se expande em 2026 para novos desafios sobre rodas — sempre em meio à Mata Atlântica."
          align="center"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), rgba(201,168,76,0.05))',
            }}
          />

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
