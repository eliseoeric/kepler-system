import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@eliseoeric/primitives';

const meta: Meta<typeof Button> = {
  title: 'Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'tertiary'],
    },
    outline: {
      control: { type: 'boolean' },
    },
    plain: {
      control: { type: 'boolean' },
    },
    href: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
  },
};

export const Outline: Story = {
  args: {
    color: 'primary',
    outline: true,
    children: 'Outline Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    href: '#',
    children: 'Link Button',
    color: 'primary',
  },
};
