/**
 * This file exists solely to ensure Tailwind CSS includes all the classes
 * used by our components in the build. The classes are referenced but never rendered.
 * This file should not be imported or used in actual components.
 */

// Button component classes that need to be included in build
const BUTTON_CLASSES = [
  'bg-blue-600',
  'text-white',
  'font-semibold',
  'shadow-sm',
  'hover:bg-blue-500',
  'hover:bg-blue-400',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-blue-600',
  'focus-visible:outline-blue-500',
  'dark:bg-blue-500',
  'dark:shadow-none',
  'dark:hover:bg-blue-400',
  'dark:focus-visible:outline-blue-500',
  'rounded',
  'px-2.5',
  'py-1',
  'py-1.5',
  'px-3',
  'px-3.5',
  'py-2.5',
  'text-xs',
  'text-sm',
].join(' ');

// This component will never be rendered but ensures classes are scanned
export const TailwindClassReference = () => (
  <div className={BUTTON_CLASSES} style={{ display: 'none' }} />
);
