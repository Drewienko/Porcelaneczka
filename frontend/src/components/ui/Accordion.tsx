import { useState } from 'react';
import { ChevronDown } from '@/components/icons';

interface AccordionItem {
  id: string;
  title: string;
  body: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string[];
}

export function Accordion({ items, defaultOpen = [] }: AccordionProps) {
  const [open, setOpen] = useState<Set<string>>(new Set(defaultOpen));
  const toggle = (id: string) =>
    setOpen((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  return (
    <div className="pc-acc">
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div key={it.id} className={`pc-acc__item ${isOpen ? 'is-open' : ''}`}>
            <button className="pc-acc__trig" onClick={() => toggle(it.id)} aria-expanded={isOpen}>
              <span>{it.title}</span>
              <ChevronDown size={18} className="pc-acc__chev" />
            </button>
            <div className="pc-acc__panel" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
              <div className="pc-acc__inner">
                <div className="pc-acc__body">{it.body}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
