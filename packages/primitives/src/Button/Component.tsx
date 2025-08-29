import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

type ButtonColorType = 'primary' | 'secondary' | 'accent' | 'tertiary';

interface IButtonPropsType
  extends Omit<React.ComponentProps<typeof HeadlessButton>, 'children'> {
  color?: ButtonColorType;
  outline?: boolean;
  plain?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButtonPropsType> = ({
  color = 'primary',
  outline = false,
  plain = false,
  href,
  children,
  className,
  disabled,
  ...props
}) => {
  const buttonClasses = clsx(
    // Base classes
    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed transition-colors',

    // Variant classes
    {
      // Solid variant (default)
      'shadow-sm': !outline && !plain,

      // Primary color
      'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600':
        color === 'primary' && !outline && !plain,
      'text-primary-600 border border-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600':
        color === 'primary' && outline,
      'text-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600':
        color === 'primary' && plain,

      // Secondary color
      'bg-secondary-600 text-white hover:bg-secondary-700 focus-visible:outline-secondary-600':
        color === 'secondary' && !outline && !plain,
      'text-secondary-600 border border-secondary-600 hover:bg-secondary-50 focus-visible:outline-secondary-600':
        color === 'secondary' && outline,
      'text-secondary-600 hover:bg-secondary-50 focus-visible:outline-secondary-600':
        color === 'secondary' && plain,

      // Accent color
      'bg-accent-600 text-white hover:bg-accent-700 focus-visible:outline-accent-600':
        color === 'accent' && !outline && !plain,
      'text-accent-600 border border-accent-600 hover:bg-accent-50 focus-visible:outline-accent-600':
        color === 'accent' && outline,
      'text-accent-600 hover:bg-accent-50 focus-visible:outline-accent-600':
        color === 'accent' && plain,

      // Tertiary color
      'bg-tertiary-600 text-white hover:bg-tertiary-700 focus-visible:outline-tertiary-600':
        color === 'tertiary' && !outline && !plain,
      'text-tertiary-600 border border-tertiary-600 hover:bg-tertiary-50 focus-visible:outline-tertiary-600':
        color === 'tertiary' && outline,
      'text-tertiary-600 hover:bg-tertiary-50 focus-visible:outline-tertiary-600':
        color === 'tertiary' && plain,
    },

    className,
  );

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <HeadlessButton disabled={disabled} className={buttonClasses} {...props}>
      {children}
    </HeadlessButton>
  );
};

export default Button;
