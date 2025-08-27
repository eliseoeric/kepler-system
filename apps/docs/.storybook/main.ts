import type { StorybookConfig } from '@storybook/react-vite';

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

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { 'process.env': {} },
      resolve: {
        alias: [
          {
            find: '@repo/ui',
            replacement: resolve(__dirname, '../../../packages/ui/dist/'),
          },
          {
            find: 'tokens',
            replacement: resolve(__dirname, '../../../packages/tokens/'),
          },
          {
            find: 'ds',
            replacement: resolve(__dirname, '../../../packages/ds/'),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },
};
export default config;
