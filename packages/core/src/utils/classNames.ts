/**
 * Utility for conditionally joining classNames together
 * Similar to the popular 'clsx' library but simplified for our needs
 */
export function classNames(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}