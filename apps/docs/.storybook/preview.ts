import type { Preview } from '@storybook/nextjs-vite';
import '@repo/tokens/dist/css/tokens.css';
import '@repo/tokens/dist/css/theme-atlas.css';
import '@repo/tokens/dist/css/theme-nordfox.css';

export const globalTypes = {
  brand: {
    name: 'Brand',
    toolbar: { items: ['atlas', 'nordfox'], dynamicTitle: true }
  }
};

export const decorators = [
  (Story, ctx) => {
    document.documentElement.setAttribute('data-brand', ctx.globals.brand || 'atlas');
    return Story();
  }
];

const preview: Preview = {
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
