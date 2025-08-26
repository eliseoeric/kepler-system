/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['@repo/eslint-config/storybook.js'],
  },
];
