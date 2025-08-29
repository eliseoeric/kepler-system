import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@eliseoeric/layout';

const meta: Meta<typeof Logo> = {
  title: 'Layout/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'Logo',
    href: '#',
  },
};
