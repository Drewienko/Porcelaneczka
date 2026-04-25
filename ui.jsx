// ui.jsx — shadcn-style primitives, hand-tuned for Porcelaneczka's aesthetic
// Button, Badge, Separator, Sheet (drawer), Accordion

const { useState: _uS, useEffect: _uE, useRef: _uR } = React;

// ── Button ──────────────────────────────────────────────────────────────────
function Button({
  variant = 'default', size = 'default', full = false,
  className = '', children, as: As = 'button', ...rest
}) {
  const base = 'pc-btn';
  const variants = {
    default: 'pc-btn--primary',
    outline: 'pc-btn--outline',
    ghost: 'pc-btn--ghost',
    link: 'pc-btn--link',
  };
  const sizes = { default: 'pc-btn--md', sm: 'pc-btn--sm', lg: 'pc-btn--lg', icon: 'pc-btn--icon' };
  const cls = [base, variants[variant], sizes[size], full && 'pc-btn--full', className].filter(Boolean).join(' ');
  return <As className={cls} {...rest}>{children}</As>;
}

// ── Badge ───────────────────────────────────────────────────────────────────
function Badge({ children, variant = 'default', className = '' }) {
  const v = { default: 'pc-badge--default', outline: 'pc-badge--outline', soft: 'pc-badge--soft' }[variant];
  return <span className={`pc-badge ${v} ${className}`}>{children}</span>;
}

// ── Separator ───────────────────────────────────────────────────────────────
function Separator({ orientation = 'horizontal', className = '' }) {
  return <div className={`pc-sep pc-sep--${orientation} ${className}`} role="separator" />;
}

// ── Sheet (drawer from left or right) ───────────────────────────────────────
function Sheet({ open, onClose, side = 'right', children, width = 440, label }) {
  _uE(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);

  return (
    <div className={`pc-sheet ${open ? 'pc-sheet--open' : ''}`} aria-hidden={!open}>
      <div className="pc-sheet__scrim" onClick={onClose} />
      <div
        className={`pc-sheet__panel pc-sheet__panel--${side}`}
        style={{ width: `min(${width}px, 92vw)` }}
        role="dialog" aria-modal="true" aria-label={label}
      >
        {children}
      </div>
    </div>
  );
}

// ── Accordion ───────────────────────────────────────────────────────────────
function Accordion({ items, defaultOpen = [] }) {
  const [open, setOpen] = _uS(new Set(defaultOpen));
  const toggle = (id) =>
    setOpen((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  return (
    <div className="pc-acc">
      {items.map((it, i) => {
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

// ── Quantity stepper ────────────────────────────────────────────────────────
function QtyStepper({ value, onChange, min = 1, max = 99, size = 'md' }) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));
  return (
    <div className={`pc-qty pc-qty--${size}`}>
      <button className="pc-qty__btn" onClick={dec} aria-label="Decrease" disabled={value <= min}>
        <Minus size={14} />
      </button>
      <span className="pc-qty__val" aria-live="polite">{value}</span>
      <button className="pc-qty__btn" onClick={inc} aria-label="Increase" disabled={value >= max}>
        <Plus size={14} />
      </button>
    </div>
  );
}

Object.assign(window, { Button, Badge, Separator, Sheet, Accordion, QtyStepper });
