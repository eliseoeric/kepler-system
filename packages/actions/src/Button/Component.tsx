import React from 'react';
import { ColorSelectionType, getButtonVariantClasses } from '@eliseoeric/core';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

interface IButtonPropsType
  extends Omit<React.ComponentProps<typeof HeadlessButton>, 'children'> {
  color?: ColorSelectionType;
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
  // Determine variant type
  const variant = plain ? 'plain' : outline ? 'outline' : 'solid';

  // Get color classes using utility functions
  const colorClasses = getButtonVariantClasses(color, variant);

  const buttonClasses = clsx(
    // Base classes
    'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed transition-colors',

    // Variant-specific classes
    {
      'shadow-sm': variant === 'solid',
    },

    // Color classes from utility functions
    colorClasses.bg,
    colorClasses.text,
    colorClasses.border,
    colorClasses.hover,
    colorClasses.focus,

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
