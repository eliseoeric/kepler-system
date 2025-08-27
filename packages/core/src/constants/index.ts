// Design system constants
export const DS_VERSION_PREFIX = 'ds-v';
export const CSS_VAR_PREFIX = '--';

// Component metadata defaults
export const DEFAULT_PACKAGE_VERSION = '0.1.0';
export const METADATA_SYNC_THRESHOLD_DAYS = 7;

// Figma integration constants
export const FIGMA_BASE_URL = 'https://figma.com/file';
export const STORYBOOK_BASE_PATH = '/story';

// Package domains for component categorization
export const PACKAGE_DOMAINS = [
  'core',
  'actions',
  'typography', 
  'layout',
  'navigation',
  'forms',
  'feedback',
  'data-display',
] as const;

export type PackageDomain = typeof PACKAGE_DOMAINS[number];