import type { Config } from 'tailwindcss';

export default {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--color-brand) / <alpha-value>)",
          on: "hsl(var(--color-onBrand) / <alpha-value>)",
          surface: "hsl(var(--color-bg-surface) / <alpha-value>)"
        }
      },
      spacing: {
        2: "var(--space-2)",
        4: "var(--space-4)"
      },
      borderRadius: {
        md: "var(--radii-md)"
      },
      fontSize: {
        body: "var(--font-size-body)",
        h1: "var(--font-size-h1)"
      },
      transitionDuration: {
        fast: "var(--motion-duration-fast)"
      },
      transitionTimingFunction: {
        standard: "var(--motion-easing-standard)"
      }
    }
  },
  plugins: []
} satisfies Config;

