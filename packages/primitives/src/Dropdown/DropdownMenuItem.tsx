import { MenuItem } from '@headlessui/react';
import clsx from 'clsx';

interface IDropdownMenuItemProps
  extends Omit<React.ComponentProps<typeof MenuItem>, 'as'> {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const DropdownMenuItem = ({
  href,
  onClick,
  children,
  className,
  ...props
}: IDropdownMenuItemProps) => {
  const baseClasses =
    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none';

  const itemClasses = clsx(baseClasses, className);

  if (href) {
    return (
      <MenuItem as="a" href={href} className={itemClasses} {...props}>
        {children}
      </MenuItem>
    );
  }

  return (
    <MenuItem as="button" onClick={onClick} className={itemClasses} {...props}>
      {children}
    </MenuItem>
  );
};

export default DropdownMenuItem;
