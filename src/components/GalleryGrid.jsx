import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const GalleryItem = ({ item, onClick }) => {
  const rowSpan = item.size === 'large' ? 'md:row-span-2' : item.size === 'tall' ? 'row-span-2' : '';

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${rowSpan}`}
      style={{ borderRadius: '3px', minHeight: '200px' }}
      onClick={() => onClick(item)}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ minHeight: '200px' }}
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-cream font-body text-sm">{item.caption}</p>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 bg-forest-900/70 flex items-center justify-center backdrop-blur-sm" style={{ borderRadius: '50%' }}>
          <ZoomIn size={14} className="text-trail-gold" />
        </div>
      </div>
    </div>
  );
};

const GalleryGrid = ({ items }) => {
  const [lightbox, setLightbox] = useState(null);

  const handleKey = (e) => {
    if (e.key === 'Escape') setLightbox(null);
  };

  return (
    <>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[200px]"
      >
        {items.map((item, i) => (
          <GalleryItem key={i} item={item} onClick={setLightbox} />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          style={{ background: 'rgba(10,42,10,0.95)', backdropFilter: 'blur(12px)' }}
          onClick={() => setLightbox(null)}
          onKeyDown={handleKey}
          tabIndex={0}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-trail-gold transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div onClick={(e) => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain"
              style={{ borderRadius: '3px' }}
            />
            <p className="text-cream-muted text-center mt-4 font-body text-sm">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
