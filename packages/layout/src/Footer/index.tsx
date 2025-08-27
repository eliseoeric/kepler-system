import { default as Component } from './Component';
import { ComponentMeta } from '@repo/core';

export const FooterMeta: ComponentMeta = {
  figmaNodeId: '', // TODO: Add from Figma
  packageVersion: '0.1.0',
  tokensUsed: [
    'space-4',
    'space-6',
    'space-8',
    'color-gray-200',
    'color-gray-500',
    'color-gray-700',
    'color-gray-400',
    'font-size-sm',
    'border-width-t'
  ], // TODO: Analyze token usage
  lastSyncDate: new Date().toISOString(),
  storyPath: 'layout/Footer'
};

export default Component;