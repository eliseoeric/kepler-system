import React from 'react';
import * as Headless from '@headlessui/react';
import clsx from 'clsx';

type ButtonItemPropsType = Omit<
  Headless.MenuItemProps<'button'>,
  'as' | 'className'
>;
// Require href on anchor variant for discrimination
type AnchorItemPropsType = Omit<
  Headless.MenuItemProps<'a'>,
  'as' | 'className'
> & {
  href: string;
};

export type DropdownMenuItemPropsType = { className?: string } & (
  | ButtonItemPropsType
  | AnchorItemPropsType
);

const DropdownMenuItem: React.FC<DropdownMenuItemPropsType> = ({
  className,
  ...props
}) => {
  const itemClasses = clsx(
    className,
    // Base styles
    'group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700',
  );

  return 'href' in props ? (
    <Headless.MenuItem
      as="a"
      {...(props as AnchorItemPropsType)}
      className={itemClasses}
    />
  ) : (
    <Headless.MenuItem
      as="button"
      type="button"
      {...(props as ButtonItemPropsType)}
      className={itemClasses}
    />
  );
};

export default DropdownMenuItem;
