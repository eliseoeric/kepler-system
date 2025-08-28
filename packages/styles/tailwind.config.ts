import type { Config } from 'tailwindcss';

export default {
  content: [
    // Scan ALL package directories for component usage
    '../actions/src/**/*.{ts,tsx}',
    '../layout/src/**/*.{ts,tsx}',
    '../navigation/src/**/*.{ts,tsx}',
    '../typography/src/**/*.{ts,tsx}',
    '../forms/src/**/*.{ts,tsx}',
    '../feedback/src/**/*.{ts,tsx}',
    '../data-display/src/**/*.{ts,tsx}',
    '../core/src/**/*.{ts,tsx}',
  ],
  // Remove manual theme config - let @theme directive handle it via design tokens
  plugins: [],
} satisfies Config;
