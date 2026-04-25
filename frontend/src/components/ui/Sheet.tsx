import { useEffect } from 'react';

interface SheetProps {
  open: boolean;
  onClose?: () => void;
  side?: 'left' | 'right';
  children?: React.ReactNode;
  width?: number;
  label?: string;
}

export function Sheet({ open, onClose, side = 'right', children, width = 440, label }: SheetProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose?.();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
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
