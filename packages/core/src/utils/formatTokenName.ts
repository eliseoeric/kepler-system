/**
 * Format design token names for CSS variable usage
 * Converts token names to CSS custom property format
 */
export function formatTokenName(
  tokenName: string,
  packageName?: string,
  version?: string,
): string {
  const cleanTokenName = tokenName.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();

  if (packageName && version) {
    const majorVersion = version.split('.')[0];

    return `--ds-v${majorVersion}-${packageName}-${cleanTokenName}`;
  }

  return `--${cleanTokenName}`;
}

/**
 * Parse CSS variable to extract token information
 */
export function parseTokenName(cssVar: string): {
  tokenName: string;
  packageName?: string;
  version?: string;
} {
  const match = cssVar.match(/--ds-v(\d+)-([^-]+)-(.+)/);

  if (match && match[1] && match[2] && match[3]) {
    return {
      version: match[1],
      packageName: match[2],
      tokenName: match[3],
    };
  }

  return {
    tokenName: cssVar.replace(/^--/, ''),
  };
}
