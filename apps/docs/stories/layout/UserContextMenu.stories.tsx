import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { UserContextMenu } from '@eliseoeric/layout';
import { openAndCloseMenu } from './UserContextMenu.interactions';

const meta: Meta<typeof UserContextMenu> = {
  title: 'Layout/UserContextMenu',
  component: UserContextMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A user context menu showing a user avatar and a small menu. Minimal examples.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    user: {
      description: 'User object containing name, email, and image URL',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80',
    },
  },
};

export const Interactive: Story = {
  args: Default.args,
  play: openAndCloseMenu,
};
