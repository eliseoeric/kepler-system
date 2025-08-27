import type { Meta, StoryObj } from '@storybook/react';
import { NavbarWithSearch } from '@repo/navigation';

const meta: Meta<typeof NavbarWithSearch> = {
  title: 'Navigation/NavbarWithSearch',
  component: NavbarWithSearch,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-screen bg-gray-50 dark:bg-gray-900">
      <NavbarWithSearch />
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Page Content
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          This navbar includes a search input, navigation links, user menu, and mobile responsiveness.
        </p>
      </div>
    </div>
  ),
};