import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
} from '@eliseoeric/primitives';

const meta: Meta<typeof Dropdown> = {
  title: 'Primitives/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Basic dropdown with a trigger button and a couple of items.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownButton color="primary">Options</DropdownButton>
      <DropdownMenu anchor="bottom end">
        <DropdownMenuItem onClick={() => {}}>Profile</DropdownMenuItem>
        <DropdownMenuItem href="#">Settings</DropdownMenuItem>
        <DropdownMenuItem href="#">Logout</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
