import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b cursor-pointer group"
      style={{ borderColor: 'rgba(201,168,76,0.15)' }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-6 gap-4">
        <h4 className="font-display text-lg text-cream group-hover:text-trail-gold transition-colors duration-200 flex-1">
          {question}
        </h4>
        <div
          className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <ChevronDown size={18} className="text-trail-gold" />
        </div>
      </div>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{
          maxHeight: open ? '300px' : '0px',
          opacity: open ? 1 : 0,
          transition: 'max-height 0.35s ease, opacity 0.25s ease',
        }}
      >
        <p className="text-cream-muted font-body leading-relaxed pb-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
