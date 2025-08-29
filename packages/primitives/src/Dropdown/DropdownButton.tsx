import React from 'react';
import { MenuButton } from '@headlessui/react';
import clsx from 'clsx';

type ColorSelectionType = 'primary' | 'secondary' | 'accent' | 'tertiary';

interface IDropdownButtonProps
  extends Omit<React.ComponentProps<typeof MenuButton>, 'children'> {
  color?: ColorSelectionType;
  outline?: boolean;
  plain?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const getButtonVariantClasses = (
  color: ColorSelectionType,
  variant: 'solid' | 'outline' | 'plain' = 'solid',
) => {
  const baseClasses = {
    focus: `focus-visible:outline-${color}-600`,
    bg: '',
    text: '',
    border: '',
    hover: '',
  };

  switch (variant) {
    case 'solid':
      return {
        ...baseClasses,
        bg: `bg-${color}-600`,
        text: 'text-white',
        hover: `hover:bg-${color}-700`,
      };

    case 'outline':
      return {
        ...baseClasses,
        bg: 'bg-transparent',
        text: `text-${color}-600`,
        border: `border border-${color}-600`,
        hover: `hover:bg-${color}-50`,
      };

    case 'plain':
      return {
        ...baseClasses,
        bg: 'bg-transparent',
        text: `text-${color}-600`,
        border: 'border-transparent',
        hover: `hover:bg-${color}-50`,
      };

    default:
      return {
        ...baseClasses,
        bg: `bg-${color}-600`,
        text: 'text-white',
        hover: `hover:bg-${color}-700`,
      };
  }
};

const DropdownButton: React.FC<IDropdownButtonProps> = ({
  color = 'primary',
  outline = false,
  plain = false,
  disabled = false,
  children,
  className,
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

  return (
    <MenuButton disabled={disabled} className={buttonClasses} {...props}>
      {children}
    </MenuButton>
  );
};

export default DropdownButton;
