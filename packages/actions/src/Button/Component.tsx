import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

type ButtonSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeType;
  children: React.ReactNode;
}

const sizeClasses: Record<ButtonSizeType, string> = {
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
}: IButtonProps): React.JSX.Element => {
  const baseClasses =
    'bg-primary-500 font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:bg-primary-600 dark:shadow-none dark:hover:bg-primary-700 dark:focus-visible:outline-primary-600';
  const sizeClass = sizeClasses[size];

  return (
    <button
      type="button"
      className={classNames(baseClasses, sizeClass, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
