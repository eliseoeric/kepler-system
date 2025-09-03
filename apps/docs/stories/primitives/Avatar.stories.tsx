import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@eliseoeric/primitives';

const meta: Meta<typeof Avatar> = {
  title: 'Primitives/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Avatar displays a user image, initials, or a placeholder. Use square or rounded variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    initials: { control: { type: 'text' } },
    square: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: 'JD',
  },
};
