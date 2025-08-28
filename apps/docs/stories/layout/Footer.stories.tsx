import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@repo/layout';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    copyrightText: {
      control: { type: 'text' },
    },
    companyName: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    copyrightText: '© 2025 Your Company, Inc. All rights reserved.',
    companyName: 'Your Company',
  },
};

export const CustomText: Story = {
  args: {
    copyrightText: '© 2025 Acme Corporation.',
    companyName: 'Built with love by the Acme team.',
  },
};