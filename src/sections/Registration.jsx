import React, { useState } from 'react';
import { Bell, Check, Trees } from 'lucide-react';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="inscricao"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f3d0f 0%, #0a2a0a 40%, #091f09 100%)',
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://silvanalves.com.br/site/wp-content/uploads/2025/10/B7-Foto-11-640x1024.jpg"
          alt=""
          className="w-full h-full object-cover object-top"
          style={{ opacity: 0.08 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,42,10,0.95) 40%, rgba(10,42,10,0.7) 100%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 mb-8 px-5 py-2"
              style={{
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '2px',
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#c9a84c',
                  boxShadow: '0 0 8px rgba(201,168,76,0.6)',
                  animation: 'pulse 2s infinite',
                }}
              />
              <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-trail-gold">
                Inscrições em Breve
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Garanta sua<br />
              <em className="not-italic gradient-text">vaga em 2026</em>
            </h2>
            <p className="text-cream-muted font-body text-lg leading-relaxed mb-8">
              As inscrições para a 2ª edição do Iracambi Trail Running ainda não estão abertas. Cadastre seu e-mail para ser avisado assim que as vagas abrirem.
            </p>

            <div
              className="glass-card p-5 flex items-center gap-4"
              style={{ borderRadius: '4px', maxWidth: '380px' }}
            >
              <div className="flex items-center gap-3 flex-1">
                <Trees size={16} className="text-forest-400 flex-shrink-0" />
                <p className="font-body text-cream-muted text-sm">
                  Cada inscrição = 1 árvore nativa plantada
                </p>
              </div>
            </div>
          </div>

          {/* Email form */}
          <div>
            <div
              className="glass-card p-8 md:p-10"
              style={{ borderRadius: '6px' }}
            >
              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <Bell size={20} className="text-trail-gold" />
                    <p className="font-display text-xl text-cream">
                      Avise-me quando abrir
                    </p>
                  </div>
                  <p className="text-cream-muted font-body text-sm mb-8 leading-relaxed">
                    Seja o primeiro a saber quando as inscrições da 2ª edição abrirem. Prometemos não encher sua caixa de entrada.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-cream-subtle block mb-2">
                        Seu nome
                      </label>
                      <input
                        type="text"
                        placeholder="Nome completo"
                        className="w-full px-4 py-3 font-body text-sm text-cream bg-transparent outline-none"
                        style={{
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '3px',
                          background: 'rgba(255,255,255,0.04)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] tracking-widest uppercase text-cream-subtle block mb-2">
                        E-mail
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        required
                        className="w-full px-4 py-3 font-body text-sm text-cream bg-transparent outline-none"
                        style={{
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '3px',
                          background: 'rgba(255,255,255,0.04)',
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'rgba(201,168,76,0.4)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center mt-2"
                    >
                      Quero ser avisado
                    </button>
                  </form>
                  <p className="text-cream-subtle font-body text-xs mt-4 text-center">
                    Seus dados estão seguros. Zero spam.
                  </p>
                </>
              ) : (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'rgba(77,155,77,0.15)', border: '1px solid rgba(77,155,77,0.3)' }}
                  >
                    <Check size={28} className="text-forest-300" />
                  </div>
                  <h3 className="font-display text-2xl text-cream mb-3">
                    Você está na lista!
                  </h3>
                  <p className="text-cream-muted font-body text-sm">
                    Te avisaremos assim que as inscrições da 2ª edição abrirem. Até lá, siga nossas redes sociais para não perder nada.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
