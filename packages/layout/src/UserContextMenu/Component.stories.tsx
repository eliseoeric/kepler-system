import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import UserContextMenu from './Component';
import {
  openAndCloseMenu,
  navigateMenuWithKeyboard,
  clickMenuItems,
  verifyAccessibility,
  testResponsiveBehavior,
  testFocusManagement,
} from './Component.interactions';

const meta: Meta<typeof UserContextMenu> = {
  title: 'Layout/UserContextMenu',
  component: UserContextMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A user context menu component that displays user information and navigation options in a dropdown menu.',
      },
    },
  },
  argTypes: {
    user: {
      description: 'User object containing name, email, and image URL',
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type StoryType = StoryObj<typeof meta>;

export const Default: StoryType = {
  args: {
    user: {
      name: 'John Doe',
      email: 'john.doe@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find the dropdown button
    const dropdownButton = canvas.getByRole('button');
    expect(dropdownButton).toBeInTheDocument();

    // Check that the avatar is present
    const avatar = canvas.getByAltText('John Doe');
    expect(avatar).toBeInTheDocument();

    // Check that the menu is initially closed
    const menuItems = canvas.queryAllByRole('menuitem');
    expect(menuItems).toHaveLength(0);
  },
};

export const WithLongName: StoryType = {
  args: {
    user: {
      name: 'Dr. Elizabeth Alexandra Windsor',
      email: 'elizabeth.windsor@royal.gov.uk',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the avatar has the correct alt text for the long name
    const avatar = canvas.getByAltText('Dr. Elizabeth Alexandra Windsor');
    expect(avatar).toBeInTheDocument();
  },
};

export const WithoutImage: StoryType = {
  args: {
    user: {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      imageUrl: '',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check that the avatar is still present (should show initials or placeholder)
    const avatar = canvas.getByAltText('Jane Smith');
    expect(avatar).toBeInTheDocument();
  },
};

// Interactive story with dropdown functionality testing
export const Interactive: StoryType = {
  args: {
    user: {
      name: 'Interactive User',
      email: 'interactive.user@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: openAndCloseMenu,
};

// Keyboard navigation testing
export const KeyboardNavigation: StoryType = {
  args: {
    user: {
      name: 'Keyboard User',
      email: 'keyboard.user@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: navigateMenuWithKeyboard,
};

// Menu item clicking testing
export const MenuItemClicks: StoryType = {
  args: {
    user: {
      name: 'Click User',
      email: 'click.user@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: clickMenuItems,
};

// Accessibility testing story
export const Accessibility: StoryType = {
  args: {
    user: {
      name: 'Accessibility User',
      email: 'accessibility.user@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: verifyAccessibility,
};

// Responsive behavior testing
export const Responsive: StoryType = {
  args: {
    user: {
      name: 'Responsive User',
      email: 'responsive.user@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: testResponsiveBehavior,
};

// Focus management testing
export const FocusManagement: StoryType = {
  args: {
    user: {
      name: 'Focus User',
      email: 'focus.user@example.com',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  play: testFocusManagement,
};
