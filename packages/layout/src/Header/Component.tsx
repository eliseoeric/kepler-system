import React, { useState } from 'react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Input, InputGroup } from '@eliseoeric/forms';

interface IHeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

const Header: React.FC<IHeaderProps> = ({ className, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-indigo-600 pb-24 dark:bg-indigo-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative flex items-center justify-center py-5 lg:justify-between">
          {/* Logo */}
          <div className="absolute left-0 shrink-0 lg:static">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=300"
                className="h-8 w-auto"
              />
            </a>
          </div>

          {/* Right section on desktop */}
          <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
            <button
              type="button"
              className="relative shrink-0 rounded-full p-1 text-indigo-200 hover:text-white focus:outline-2 focus:outline-white"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 shrink-0">
              <MenuButton className="relative flex max-w-xs items-center rounded-full bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src={user.imageUrl}
                  className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 -mr-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 data-leave:transition data-leave:duration-75 data-leave:ease-in data-closed:data-leave:scale-95 data-closed:data-leave:transform data-closed:data-leave:opacity-0 dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/10"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
                    >
                      {item.name}
                    </a>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>

          {/* Search */}
          <div className="min-w-0 flex-1 px-12 lg:hidden">
            <div className="mx-auto w-full max-w-xs">
              <InputGroup>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="text-white/75 dark:text-white/50"
                />
                <Input
                  type="search"
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="block w-full rounded-md bg-indigo-500/75 py-1.5 pr-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 dark:bg-indigo-700/50 dark:outline-indigo-400/25 dark:placeholder:text-white/50 ring-0 border-0"
                />
              </InputGroup>
            </div>
          </div>

          {/* Menu button */}
          <div className="absolute right-0 shrink-0 lg:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
        <div className="hidden border-t border-white/20 py-5 lg:block dark:border-white/10">
          <div className="grid grid-cols-3 items-center gap-8">
            <div className="col-span-2">
              <nav className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-white' : 'text-indigo-100',
                      'rounded-md px-3 py-2 text-sm font-medium hover:bg-indigo-500/75 dark:hover:bg-indigo-700/75',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="mx-auto w-full max-w-md">
              <InputGroup>
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="text-white/75 dark:text-white/50"
                />
                <Input
                  type="search"
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="block w-full rounded-md bg-indigo-500/75 py-1.5 pr-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/75 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 dark:bg-indigo-700/50 dark:outline-indigo-400/25 dark:placeholder:text-white/50 ring-0 border-0"
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 z-20 bg-black/25 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        />

        <DialogPanel
          transition
          className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
        >
          <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg outline outline-black/5 dark:divide-white/10 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <div className="pt-3 pb-2">
              <div className="flex items-center justify-between px-4">
                <div>
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto dark:hidden"
                  />
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto not-dark:hidden"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setOpen(false)}
                    className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-white dark:bg-gray-800 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:outline-white"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Company Directory
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  Openings
                </a>
              </div>
            </div>
            <div className="pt-4 pb-2">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full outline -outline-offset-1 outline-black/5 dark:outline-white/10"
                  />
                </div>
                <div className="ml-3 min-w-0 flex-1">
                  <div className="truncate text-base font-medium text-gray-800 dark:text-gray-200">
                    {user.name}
                  </div>
                  <div className="truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                    {user.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 dark:text-gray-400 dark:hover:text-white dark:focus:outline-white"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-100 dark:hover:bg-white/5 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
