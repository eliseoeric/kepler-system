import { Menu } from '@headlessui/react';

interface IDropdownProps extends React.ComponentProps<typeof Menu> {
  children: React.ReactNode;
}

const Dropdown = ({ children, as = 'div', ...props }: IDropdownProps) => {
  return (
    <Menu as={as} className="relative inline-block" {...props}>
      {children}
    </Menu>
  );
};

export default Dropdown;
