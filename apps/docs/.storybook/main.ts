import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

import { join, dirname, resolve } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  async viteFinal(config) {
    // customize the Vite config here
    const { default: tailwindcss } = await import('@tailwindcss/vite');
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@repo/core',
            replacement: resolve(__dirname, '../../../packages/core/dist/'),
          },
          {
            find: '@repo/actions',
            replacement: resolve(__dirname, '../../../packages/actions/dist/'),
          },
          {
            find: '@repo/typography',
            replacement: resolve(
              __dirname,
              '../../../packages/typography/dist/',
            ),
          },
          {
            find: '@repo/layout',
            replacement: resolve(__dirname, '../../../packages/layout/dist/'),
          },
          {
            find: '@repo/navigation',
            replacement: resolve(
              __dirname,
              '../../../packages/navigation/dist/',
            ),
          },
          {
            find: '@repo/forms',
            replacement: resolve(__dirname, '../../../packages/forms/dist/'),
          },
          {
            find: '@repo/feedback',
            replacement: resolve(__dirname, '../../../packages/feedback/dist/'),
          },
          {
            find: '@repo/data-display',
            replacement: resolve(
              __dirname,
              '../../../packages/data-display/dist/',
            ),
          },
          {
            find: 'tokens',
            replacement: resolve(__dirname, '../../../packages/tokens/'),
          },
          // Use source CSS for live HMR
          {
            find: '@repo/styles',
            replacement: resolve(__dirname, '../../../packages/styles/'),
          },
        ],
      },
    });
  },

  docs: {
    autodocs: true,
  },
};
export default config;
