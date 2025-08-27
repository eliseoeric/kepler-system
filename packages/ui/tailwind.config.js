import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  // Remove manual theme config - let @theme directive handle it
  plugins: []
} satisfies Config;