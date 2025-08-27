import { default as Component } from './Component';
import { ComponentMeta } from '@repo/core';

export const ButtonMeta: ComponentMeta = {
  figmaNodeId: '', // TODO: Add from Figma
  packageVersion: '0.1.0',
  tokensUsed: [
    'color-brand',
    'color-brand-on',
    'space-2',
    'space-2.5',
    'space-1.5',
    'border-radius-md',
    'font-weight-semibold'
  ], // TODO: Analyze token usage
  lastSyncDate: new Date().toISOString(),
  storyPath: 'actions/Button'
};

export default Component;