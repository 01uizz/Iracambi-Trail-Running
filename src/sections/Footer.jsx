import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#040a04',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo-iracambi.png"
                alt="Iracambi"
                className="w-10 h-10 object-contain"
                style={{ filter: 'brightness(0.8)' }}
              />
              <div>
                <span className="font-display text-cream text-xl block leading-none">Iracambi</span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-trail-gold">
                  Trail Running
                </span>
              </div>
            </div>
            <p className="text-cream-muted font-body text-sm leading-relaxed max-w-xs mb-6">
              A corrida mais charmosa da região, realizada dentro da Reserva da Mata Atlântica da ONG Iracambi em Rosário da Limeira, MG.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: 'https://instagram.com/iracambi', label: 'Instagram' },
                { Icon: Facebook, href: 'https://facebook.com/iracambi', label: 'Facebook' },
                { Icon: MessageCircle, href: 'https://wa.me/5500000000000', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:border-trail-gold/50 hover:text-trail-gold text-cream-muted"
                  style={{
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '3px',
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-trail-gold mb-6">
              Navegação
            </p>
            <nav className="space-y-3">
              {[
                { l: 'Sobre o Evento', h: '#sobre' },
                { l: 'Impacto Ambiental', h: '#impacto' },
                { l: 'Nossa História', h: '#historia' },
                { l: 'Galeria', h: '#galeria' },
                { l: 'Informações', h: '#informacoes' },
                { l: 'FAQ', h: '#faq' },
              ].map((link) => (
                <a
                  key={link.h}
                  href={link.h}
                  className="block font-body text-sm text-cream-muted hover:text-cream transition-colors duration-200"
                >
                  {link.l}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-trail-gold mb-6">
              Contato
            </p>
            <div className="space-y-4">
              <a
                href="mailto:contato@iracambi.com"
                className="flex items-center gap-3 text-cream-muted hover:text-cream transition-colors group"
              >
                <Mail size={14} className="text-trail-gold flex-shrink-0" />
                <span className="font-body text-sm">contato@iracambi.com</span>
              </a>
              <div className="flex items-start gap-3 text-cream-muted">
                <MapPin size={14} className="text-trail-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm">
                  ONG Iracambi<br />
                  Rosário da Limeira, MG<br />
                  Brasil
                </span>
              </div>
              <a
                href="https://iracambi.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-trail-gold hover:text-trail-amber transition-colors"
              >
                iracambi.com
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-4 md:px-8 py-6"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-widest uppercase text-cream-subtle text-center md:text-left">
            © {year} Iracambi Trail Running · ONG Iracambi · Todos os direitos reservados
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="font-mono text-[10px] tracking-widest uppercase text-cream-subtle text-center">
              Desenvolvido por Luiz Henrique e Manoel Rodrigues
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full bg-forest-400"
                style={{ boxShadow: '0 0 6px rgba(77,155,77,0.6)' }}
              />
              <p className="font-mono text-[10px] tracking-widest uppercase text-cream-subtle">
                Preservando a Mata Atlântica desde 2003
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
