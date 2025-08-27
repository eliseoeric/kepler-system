import { default as TypographyComponent } from './Component';
import { H1, H2, H3, H4, H5, H6, Body, Text, Overline } from './Component';
import { ComponentMeta } from '@repo/core';

export const TypographyMeta: ComponentMeta = {
  figmaNodeId: '', // TODO: Add from Figma
  packageVersion: '0.1.0',
  tokensUsed: [
    'font-size-xs',
    'font-size-sm',
    'font-size-base',
    'font-size-lg',
    'font-size-xl',
    'font-size-2xl',
    'font-size-3xl',
    'font-size-4xl',
    'font-size-5xl',
    'font-size-6xl',
    'font-weight-light',
    'font-weight-normal',
    'font-weight-medium',
    'font-weight-semibold',
    'font-weight-bold',
    'font-weight-black',
    'line-height-tight',
    'line-height-normal',
    'letter-spacing-wide'
  ], // TODO: Analyze token usage  
  lastSyncDate: new Date().toISOString(),
  storyPath: 'typography/Typography'
};

export { H1, H2, H3, H4, H5, H6, Body, Text, Overline };
export default TypographyComponent;