import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReact from 'eslint-plugin-react';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import { config as baseConfig } from './base.js';

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: {},
      },
    },
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // React component and JSX rules
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.tsx'],
        },
      ],
      'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-closing-bracket-location': [1, 'line-aligned'],
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/prop-types': 'off',
      'react/no-unused-prop-types': 'off',

      // Accessibility rules
      'jsx-a11y/label-has-associated-control': [
        2,
        {
          labelAttributes: ['label'],
          controlComponents: ['Input'],
          depth: 3,
        },
      ],
    },
  },
  // Test file overrides
  {
    files: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    rules: {
      'jsx-a11y/alt-text': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
];

// Default export for compatibility with old .eslintrc format
export default config;
