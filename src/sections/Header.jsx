import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, eventInfo } from '../data/eventData';
import Button from '../components/Button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
      style={{
        background: scrolled
          ? 'rgba(10, 42, 10, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo-iracambi.png"
            alt="Iracambi"
            className="w-8 h-8 object-contain filter brightness-90 group-hover:brightness-100 transition-all"
          />
          <div>
            <span className="font-display text-cream text-lg leading-none block">Iracambi</span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-trail-gold leading-none">
              Trail Running
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-cream-muted hover:text-cream transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button variant="outline" href="#inscricao" className="text-xs py-3 px-6">
            Inscrições em Breve
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden px-4 pb-6 pt-2"
          style={{ background: 'rgba(10,42,10,0.97)', backdropFilter: 'blur(16px)' }}
        >
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-base text-cream-muted hover:text-cream transition-colors border-b pb-4"
                style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" href="#inscricao" className="text-xs mt-2 text-center justify-center">
              Inscrições em Breve
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
