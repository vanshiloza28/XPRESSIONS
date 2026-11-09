import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.id || idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-xp-panel border-xp-border shadow-lg'
                : 'bg-xp-panel/50 border-xp-border/60 hover:border-xp-border hover:bg-xp-panel/80'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  isOpen ? 'bg-xp-red/15 text-xp-red' : 'bg-white/5 text-xp-cream/60'
                }`}>
                  0{idx + 1}
                </span>
                <span className="text-base sm:text-lg font-semibold text-white">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-xp-muted transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-xp-red' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-xp-muted leading-relaxed border-t border-xp-border/40 animate-in fade-in duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

