/**
 * CSS Variable utilities for versioned design tokens
 */

/**
 * Get the CSS variable name for a token with optional version
 */
export function getCSSVariable(tokenName: string, version?: string | number): string {
  if (version) {
    return `var(--ds-v${version}-${tokenName})`;
  }
  return `var(--${tokenName})`;
}

/**
 * Generate versioned CSS variable declarations
 */
export function generateCSSVariables(tokens: Record<string, string>, version?: string | number): Record<string, string> {
  const result: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(tokens)) {
    const varName = version ? `--ds-v${version}-${key}` : `--${key}`;
    result[varName] = value;
  }
  
  return result;
}

/**
 * Create a CSS variable reference for Tailwind CSS
 */
export function tailwindCSSVar(tokenName: string, version?: string | number): string {
  if (version) {
    return `--ds-v${version}-${tokenName}`;
  }
  return `--${tokenName}`;
}

/**
 * Utility to create version-aware style objects
 */
export function createVersionedStyles(version: string | number) {
  return {
    color: (token: string) => getCSSVariable(`color-${token}`, version),
    space: (token: string) => getCSSVariable(`space-${token}`, version),
    fontSize: (token: string) => getCSSVariable(`font-size-${token}`, version),
    fontWeight: (token: string) => getCSSVariable(`font-weight-${token}`, version),
    borderRadius: (token: string) => getCSSVariable(`radii-${token}`, version),
    motion: {
      duration: (token: string) => getCSSVariable(`motion-duration-${token}`, version),
      easing: (token: string) => getCSSVariable(`motion-easing-${token}`, version),
    },
  };
}