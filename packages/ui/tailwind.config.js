import type { Config } from 'tailwindcss';
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../../apps/docs/stories/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Common layout utilities
    'bg-white', 'shadow', 'mx-auto', 'max-w-7xl', 'px-2', 'px-4', 'px-8', 'h-16', 'h-8', 'w-auto', 'flex', 'items-center', 'justify-between',
    // Text colors and sizes
    'text-gray-900', 'text-gray-500', 'text-gray-400', 'text-white', 'text-sm', 'text-base', 'font-medium',
    // Borders and spacing
    'border-b-2', 'border-l-4', 'border-brand', 'border-transparent', 'border-gray-300', 'pt-1', 'py-2', 'pl-3', 'pr-4',
    // Interactive states
    'hover:border-gray-300', 'hover:text-gray-700', 'hover:bg-gray-100', 'hover:text-gray-500', 'hover:text-gray-800',
    // Dark mode variants
    'dark:bg-gray-800/50', 'dark:shadow-none', 'dark:text-white', 'dark:text-gray-400', 'dark:text-gray-300', 'dark:text-gray-200',
    'dark:border-brand', 'dark:hover:text-white', 'dark:hover:border-white/20', 'dark:hover:bg-white/5',
    // Responsive utilities
    'sm:px-4', 'lg:px-8', 'lg:px-0', 'lg:ml-6', 'lg:flex', 'lg:space-x-8', 'lg:hidden', 'lg:ml-4', 'lg:items-center',
    // Special utilities
    'inline-flex', 'shrink-0', 'hidden', 'block', 'sr-only', 'relative', 'absolute', 'rounded-md', 'rounded-full',
    'size-5', 'size-6', 'size-8', 'size-10', 'outline', 'outline-1', 'outline-2', '-outline-offset-1', '-outline-offset-2',
    'focus:outline', 'focus:outline-2', 'focus:-outline-offset-2', 'focus:outline-brand', 'focus-visible:outline-brand',
    // Button component utilities
    'rounded', 'px-2.5', 'py-1', 'py-1.5', 'px-3', 'px-3.5', 'py-2.5', 'text-xs', 'font-semibold', 'shadow-sm',
    'bg-blue-600', 'text-white', 'hover:bg-blue-500', 'hover:bg-blue-400', 'focus-visible:outline', 'focus-visible:outline-2', 'focus-visible:outline-offset-2',
    'focus-visible:outline-blue-600', 'focus-visible:outline-blue-500', 'dark:bg-blue-500', 'dark:hover:bg-blue-400', 'dark:focus-visible:outline-blue-500',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--color-brand) / <alpha-value>)",
          on: "hsl(var(--color-onBrand) / <alpha-value>)",
          surface: "hsl(var(--color-bg-surface) / <alpha-value>)"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
