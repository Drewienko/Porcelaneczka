import type { ElementType, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  full?: boolean;
  className?: string;
  children?: ReactNode;
  as?: ElementType;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

export function Button({
  variant = 'default', size = 'default', full = false,
  className = '', children, as: As = 'button', ...rest
}: ButtonProps) {
  const variants: Record<string, string> = {
    default: 'pc-btn--primary',
    outline: 'pc-btn--outline',
    ghost: 'pc-btn--ghost',
    link: 'pc-btn--link',
  };
  const sizes: Record<string, string> = {
    default: 'pc-btn--md', sm: 'pc-btn--sm', lg: 'pc-btn--lg', icon: 'pc-btn--icon',
  };
  const cls = ['pc-btn', variants[variant], sizes[size], full && 'pc-btn--full', className]
    .filter(Boolean).join(' ');
  return <As className={cls} {...rest}>{children}</As>;
}
