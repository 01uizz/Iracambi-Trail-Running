import React from 'react';
import SectionTitle from '../components/SectionTitle';
import GalleryGrid from '../components/GalleryGrid';
import { gallery } from '../data/eventData';

const Gallery = () => {
  return (
    <section id="galeria" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Galeria"
          title={<>Momentos que<br />ficam na <em className="text-trail-gold not-italic">memória</em></>}
          subtitle="Imagens da 1ª edição, dos voluntários, da reserva e do espírito que move o Iracambi Trail Running."
        />
        <GalleryGrid items={gallery} />
      </div>
    </section>
  );
};

export default Gallery;
