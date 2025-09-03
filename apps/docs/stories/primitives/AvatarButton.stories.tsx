import type { Meta, StoryObj } from '@storybook/react';
import { AvatarButton } from '@eliseoeric/primitives';

const meta: Meta<typeof AvatarButton> = {
  title: 'Primitives/AvatarButton',
  component: AvatarButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button-styled avatar that can render as a button or anchor. Supports image, initials, or placeholder.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: { control: { type: 'text' } },
    alt: { control: { type: 'text' } },
    initials: { control: { type: 'text' } },
    square: { control: { type: 'boolean' } },
    href: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    className: { control: { type: 'text' } },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initials: 'AB',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/64?img=12',
    alt: 'User Avatar',
  },
};

export const AsLink: Story = {
  args: {
    initials: 'JD',
    href: '#',
  },
};
