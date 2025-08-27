import { ComponentMeta } from '../types';

/**
 * Validate component metadata for completeness and correctness
 */
export function validateComponentMeta(meta: ComponentMeta): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields validation
  if (!meta.figmaNodeId) {
    errors.push('figmaNodeId is required');
  }

  if (!meta.packageVersion) {
    errors.push('packageVersion is required');
  }

  if (!meta.storyPath) {
    errors.push('storyPath is required');
  }

  if (!meta.lastSyncDate) {
    errors.push('lastSyncDate is required');
  }

  // Format validation
  if (meta.packageVersion && !/^\d+\.\d+\.\d+/.test(meta.packageVersion)) {
    errors.push('packageVersion must follow semantic versioning (x.y.z)');
  }

  if (meta.figmaNodeId && !/^\d+:\d+$/.test(meta.figmaNodeId)) {
    errors.push('figmaNodeId must be in format "number:number"');
  }

  if (meta.lastSyncDate) {
    const date = new Date(meta.lastSyncDate);
    if (isNaN(date.getTime())) {
      errors.push('lastSyncDate must be a valid ISO date string');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}