import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FAQItem from '../components/FAQItem';
import { faqItems } from '../data/eventData';

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          label="Perguntas Frequentes"
          title={<>Dúvidas?<br /><em className="text-trail-gold not-italic">Temos respostas.</em></>}
          align="center"
        />

        <div>
          {faqItems.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="mt-16 text-center glass-card p-10"
          style={{ borderRadius: '4px' }}
        >
          <p className="text-cream-muted font-body mb-4">Não encontrou o que procurava?</p>
          <a
            href="mailto:contato@iracambi.com"
            className="text-trail-gold font-display text-2xl hover:text-trail-amber transition-colors"
          >
            contato@iracambi.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
