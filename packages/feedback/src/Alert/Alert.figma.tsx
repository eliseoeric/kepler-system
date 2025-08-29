import React from 'react';
import figma from '@figma/code-connect';
import { Alert, AlertTitle, AlertDescription, AlertActions } from './index';

figma.connect(Alert, 'https://figma.com/component-url-placeholder', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
    color: figma.enum('Color', {
      Primary: 'primary',
      Secondary: 'secondary',
      Success: 'success',
      Danger: 'danger',
      Warning: 'warning',
      Info: 'info',
    }),
    variant: figma.enum('Variant', {
      Default: 'default',
      Filled: 'filled',
    }),
    size: figma.enum('Size', {
      Small: 'sm',
      Medium: 'md',
      Large: 'lg',
    }),
  },
  example: ({ title, description, color, variant, size }) => (
    <Alert
      open={true}
      onClose={() => {}}
      color={color}
      variant={variant}
      size={size}
    >
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <AlertActions>
        <button>Action</button>
      </AlertActions>
    </Alert>
  ),
});
