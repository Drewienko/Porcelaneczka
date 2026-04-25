import { Minus, Plus } from '@/components/icons';

interface QtyStepperProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function QtyStepper({ value, onChange, min = 1, max = 99, size = 'md' }: QtyStepperProps) {
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
