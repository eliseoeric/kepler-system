import { MenuItem } from '@headlessui/react';
import clsx from 'clsx';

// Base props shared by both variants
interface IBaseDropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

// Props for anchor variant
interface IAnchorDropdownMenuItemProps extends IBaseDropdownMenuItemProps {
  href: string;
  onClick?: never;
}

// Props for button variant
interface IButtonDropdownMenuItemProps extends IBaseDropdownMenuItemProps {
  href?: never;
  onClick?: () => void;
}

type IDropdownMenuItemProps =
  | IAnchorDropdownMenuItemProps
  | IButtonDropdownMenuItemProps;

const DropdownMenuItem = ({
  href,
  onClick,
  children,
  className,
  disabled,
}: IDropdownMenuItemProps) => {
  const baseClasses =
    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none';

  const itemClasses = clsx(baseClasses, className);

  if (href) {
    return (
      <MenuItem as="a" href={href} className={itemClasses} disabled={disabled}>
        {children}
      </MenuItem>
    );
  }

  return (
    <MenuItem
      as="button"
      onClick={onClick}
      className={itemClasses}
      disabled={disabled}
    >
      {children}
    </MenuItem>
  );
};

export default DropdownMenuItem;
