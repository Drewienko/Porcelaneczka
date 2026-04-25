interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'default' | 'outline' | 'soft';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const v: Record<string, string> = {
    default: 'pc-badge--default',
    outline: 'pc-badge--outline',
    soft: 'pc-badge--soft',
  };
  return <span className={`pc-badge ${v[variant]} ${className}`}>{children}</span>;
}
