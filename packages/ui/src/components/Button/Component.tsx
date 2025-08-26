import React, { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'rounded px-2 py-1 text-xs',
  sm: 'rounded px-2 py-1 text-sm',
  md: 'rounded-md px-2.5 py-1.5 text-sm',
  lg: 'rounded-md px-3 py-2 text-sm',
  xl: 'rounded-md px-3.5 py-2.5 text-sm',
};

const Button = ({
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps): React.JSX.Element => {
  const baseClasses =
    'bg-brand font-semibold text-brand-on shadow-sm hover:bg-brand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:bg-brand dark:shadow-none dark:hover:bg-brand/80 dark:focus-visible:outline-brand';
  const sizeClass = sizeClasses[size];

  return (
    <button
      type="button"
      className={`${baseClasses} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
