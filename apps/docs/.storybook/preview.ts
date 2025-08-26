import type { Preview } from '@storybook/react-vite';
import '../styles.css';

const preview: Preview = {
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Global brand theme',
      defaultValue: 'atlas',
      toolbar: {
        icon: 'paintbrush',
        title: 'Brand Theme',
        items: [
          { value: 'atlas', title: 'Atlas (Blue)', icon: 'circlehollow' },
          { value: 'nordfox', title: 'Nordfox (Green)', icon: 'circle' },
        ],
        dynamicTitle: true,
        showName: true,
      },
    },
  },

  decorators: [
    (Story, ctx) => {
      document.documentElement.setAttribute(
        'data-brand',
        ctx.globals.brand || 'atlas',
      );
      return Story();
    },
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
