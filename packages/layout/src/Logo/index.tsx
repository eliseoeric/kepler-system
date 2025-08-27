import { default as Component } from './Component';
import { ComponentMeta } from '@repo/core';

export const LogoMeta: ComponentMeta = {
  figmaNodeId: '', // TODO: Add from Figma
  packageVersion: '0.1.0',
  tokensUsed: [
    'space-8',
    'space-auto'
  ], // TODO: Analyze token usage
  lastSyncDate: new Date().toISOString(),
  storyPath: 'layout/Logo'
};

export default Component;