import { Avatar } from '@eliseoeric/primitives';
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuItem,
  DropdownButton,
} from '@eliseoeric/primitives';

interface IUserContextMenuProps {
  user: {
    name: string;
    email: string;
    imageUrl: string;
  };
}

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const UserContextMenu = ({ user }: IUserContextMenuProps) => {
  return (
    <Dropdown as="div" className="ml-4 shrink-0">
      <DropdownButton className="relative flex max-w-xs items-center rounded-full bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <Avatar src={user.imageUrl} alt={user.name} />
      </DropdownButton>

      <DropdownMenu
        transition
        className="absolute right-0 z-10 mt-2 -mr-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 data-leave:transition data-leave:duration-75 data-leave:ease-in data-closed:data-leave:scale-95 data-closed:data-leave:transform data-closed:data-leave:opacity-0 dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/10"
      >
        {userNavigation.map((item) => (
          <DropdownMenuItem
            key={item.name}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5"
          >
            {item.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserContextMenu;
