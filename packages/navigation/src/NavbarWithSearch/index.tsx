import { default as Component } from './Component';
import { ComponentMeta } from '@repo/core';

export const NavbarWithSearchMeta: ComponentMeta = {
  figmaNodeId: '', // TODO: Add from Figma
  packageVersion: '0.1.0',
  tokensUsed: [
    'color-white',
    'color-gray-800',
    'color-gray-900',
    'color-gray-500',
    'color-gray-400',
    'color-gray-300',
    'color-gray-200',
    'color-gray-700',
    'color-gray-100',
    'color-brand',
    'space-16',
    'space-2',
    'space-4',
    'space-6',
    'space-8',
    'font-size-sm',
    'font-size-base',
    'font-weight-medium',
    'border-radius-md',
    'border-radius-full',
    'shadow-lg'
  ], // TODO: Analyze token usage
  lastSyncDate: new Date().toISOString(),
  storyPath: 'navigation/NavbarWithSearch'
};

export default Component;