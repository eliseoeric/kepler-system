// Component metadata interface for Figma integration and versioning
export interface IComponentMeta {
  figmaNodeId: string;
  packageName: string;
  packageVersion: string;
  tokensUsed: string[];
  lastSyncDate: string;
  storyPath: string;
}

// Common component props
export interface IBaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Theme and variant types
export type ColorVariantType =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error';
export type SizeVariantType = 'sm' | 'md' | 'lg' | 'xl';

// Design token types
export interface IDesignTokens {
  colors: Record<string, string>;
  spacing: Record<string, string>;
  typography: Record<string, string>;
  borderRadius: Record<string, string>;
  motion: Record<string, string>;
}
