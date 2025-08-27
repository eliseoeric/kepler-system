import { ComponentMeta } from '../types';

/**
 * Hook to provide component metadata for tracking and Figma integration
 * @param meta Component metadata object
 * @returns Component metadata with utility functions
 */
export function useComponentMetadata(meta: ComponentMeta) {
  const isOutdated = () => {
    const lastSync = new Date(meta.lastSyncDate);
    const daysSinceSync = (Date.now() - lastSync.getTime()) / (1000 * 60 * 60 * 24);
    return daysSinceSync > 7; // Consider outdated if not synced in 7 days
  };

  const getFigmaUrl = () => {
    if (!meta.figmaNodeId) return null;
    return `https://figma.com/file/design?node-id=${meta.figmaNodeId}`;
  };

  const getStoryUrl = () => {
    return `/story/${meta.storyPath.toLowerCase().replace(/\//g, '-')}`;
  };

  return {
    ...meta,
    isOutdated: isOutdated(),
    figmaUrl: getFigmaUrl(),
    storyUrl: getStoryUrl(),
  };
}