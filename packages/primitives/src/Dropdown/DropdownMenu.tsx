import { MenuItems } from '@headlessui/react';

interface IDropdownMenuProps extends React.ComponentProps<typeof MenuItems> {
  children: React.ReactNode;
}

const DropdownMenu = ({ children, ...props }: IDropdownMenuProps) => {
  return (
    <MenuItems
      {...props}
      transition
      className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
    >
      {children}
    </MenuItems>
  );
};

export default DropdownMenu;
