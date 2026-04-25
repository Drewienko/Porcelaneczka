interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Separator({ orientation = 'horizontal', className = '' }: SeparatorProps) {
  return <div className={`pc-sep pc-sep--${orientation} ${className}`} role="separator" />;
}
