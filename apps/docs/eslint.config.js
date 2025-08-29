/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['@eliseoeric/eslint-config/storybook.js'],
  },
];
