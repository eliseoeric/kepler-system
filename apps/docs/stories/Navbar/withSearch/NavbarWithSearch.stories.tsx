import React from 'react';
import { default as Navbar } from '@repo/ui/components/Navbar/withSearch/Component';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar/WithSearch',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation bar with search functionality, user profile menu, and mobile-friendly design.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  parameters: {
    docs: {
      description: {
        story: 'The default navbar with search functionality, navigation links, and user profile dropdown.',
      },
    },
  },
};

export const DarkMode: StoryType = {
  parameters: {
    docs: {
      description: {
        story: 'The navbar in dark mode theme.',
      },
    },
  },
  decorators: [
    (Story: () => React.ReactElement) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

export const MobileView: StoryType = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'The navbar optimized for mobile devices with collapsible menu.',
      },
    },
  },
};
