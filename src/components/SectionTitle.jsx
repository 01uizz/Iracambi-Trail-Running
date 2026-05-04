import React from 'react';

const SectionTitle = ({
  label,
  title,
  subtitle,
  align = 'left',
  light = false,
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`max-w-2xl ${alignClass} mb-16`}>
      {label && (
        <p className="section-label mb-4">{label}</p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 ${
          light ? 'text-forest-900' : 'text-cream'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-lg leading-relaxed ${
            light ? 'text-forest-700' : 'text-cream-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
