import * as Headless from '@headlessui/react';
import clsx from 'clsx';

type DropdownMenuPropsType = {
  className?: string;
} & Omit<Headless.MenuItemsProps, 'as' | 'className'>;

const DropdownMenu = ({
  anchor = 'bottom',
  className,
  ...props
}: DropdownMenuPropsType) => {
  return (
    <Headless.MenuItems
      {...props}
      transition
      anchor={anchor}
      className={clsx(
        className,
        // Updated styles for visibility on light/dark backgrounds
        'w-52 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm/6 text-gray-900 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-white',
      )}
    />
  );
};

export default DropdownMenu;
