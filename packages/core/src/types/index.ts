// Component metadata interface for Figma integration and versioning
export interface ComponentMeta {
  figmaNodeId: string;
  packageName: string;
  packageVersion: string;
  tokensUsed: string[];
  lastSyncDate: string;
  storyPath: string;
}

// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Theme and variant types
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error';
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';

// Design token types
export interface DesignTokens {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, string>;
  borderRadius: Record<string, string>;
  motion: Record<string, string>;
}