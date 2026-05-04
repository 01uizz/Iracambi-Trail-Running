import React from 'react';

const SponsorCard = ({ sponsor, size = 'normal' }) => {
  const sizeClasses = {
    master: 'h-20 px-10 py-6',
    normal: 'h-14 px-6 py-4',
    small: 'h-10 px-4 py-2',
  };

  return (
    <div
      className={`glass-card flex items-center justify-center ${sizeClasses[size]} transition-all duration-300 hover:border-trail-gold/30 cursor-pointer group`}
      style={{ borderRadius: '4px' }}
    >
      {sponsor.logo ? (
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-full max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
          style={{ filter: 'brightness(0.8) contrast(0.9)' }}
        />
      ) : (
        <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-cream-subtle group-hover:text-cream-muted transition-colors duration-300">
          {sponsor.name}
        </span>
      )}
    </div>
  );
};

export default SponsorCard;
