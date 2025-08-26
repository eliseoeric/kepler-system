import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';
import importHelpersPlugin from 'eslint-plugin-import-helpers';
import importPlugin from 'eslint-plugin-import';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      'import-helpers': importHelpersPlugin,
      import: importPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
      // TypeScript rules
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',

      // Import rules
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'import-helpers/order-imports': [
        'warn',
        {
          groups: [
            '/^react$/',
            'module',
            '/^@/.+$/',
            ['parent', 'sibling', 'index'],
          ],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],

      // Code style rules
      'arrow-parens': ['error', 'always'],
      'newline-before-return': 'error',
      'no-restricted-exports': [
        'error',
        {
          restrictDefaultExports: {
            defaultFrom: false,
          },
        },
      ],

      // TypeScript naming conventions (relaxed)
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          prefix: ['I'],
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          suffix: ['Type'],
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: [
      'dist/**',
      '**/node_modules',
      '**/public',
      '**/.next',
      '**/.vercel',
      '**/*.tsbuildinfo',
    ],
  },
];
