import React from 'react';

const TimelineItem = ({ item, index, isLast }) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className={`flex items-center gap-0 ${isOdd ? 'flex-row-reverse' : ''}`}>
      {/* Content */}
      <div className={`flex-1 ${isOdd ? 'pl-10 md:pl-16 text-left' : 'pr-10 md:pr-16 text-right'}`}>
        <div
          className={`inline-block glass-card p-6 md:p-8 max-w-sm ${
            item.highlight
              ? 'border-trail-gold/50'
              : 'border-white/10'
          }`}
          style={{
            background: item.highlight
              ? 'rgba(201, 168, 76, 0.06)'
              : 'rgba(255,255,255,0.03)',
          }}
        >
          {item.tag && (
            <span
              className="inline-block text-[10px] font-mono tracking-widest uppercase px-3 py-1 mb-4"
              style={{
                background: item.upcoming
                  ? 'rgba(201, 168, 76, 0.15)'
                  : 'rgba(45, 125, 45, 0.2)',
                color: item.upcoming ? '#c9a84c' : '#7cba7c',
                borderRadius: '2px',
              }}
            >
              {item.tag}
            </span>
          )}
          <p className="section-label text-[11px] mb-2">{item.year}</p>
          <h3 className="font-display text-2xl md:text-3xl text-cream mb-1">{item.title}</h3>
          <p className="text-trail-gold font-body text-sm mb-4">{item.subtitle}</p>
          <p className="text-cream-muted font-body text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Center dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-2 z-10 ${
            item.highlight
              ? 'bg-trail-gold border-trail-gold animate-pulse-gold'
              : item.upcoming
              ? 'bg-forest-800 border-trail-gold/50'
              : 'bg-forest-600 border-forest-400'
          }`}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: 'linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))',
              minHeight: '80px',
            }}
          />
        )}
      </div>

      {/* Empty side */}
      <div className="flex-1" />
    </div>
  );
};

export default TimelineItem;
