import React from 'react';
import figma from '@figma/code-connect';
import Button from './Component';

figma.connect(Button, 'https://figma.com/component-url-placeholder', {
  props: {
    children: figma.string('Label'),
    color: figma.enum('Color', {
      Primary: 'primary',
      Secondary: 'secondary',
      Success: 'success',
      Danger: 'danger',
      Warning: 'warning',
      Info: 'info',
    }),
    disabled: figma.boolean('Disabled'),
    outline: figma.boolean('Outline'),
    plain: figma.boolean('Plain'),
    href: figma.string('Link URL'),
  },
  example: ({ children, color, disabled, outline, plain, href }) => (
    <Button
      color={color}
      disabled={disabled}
      outline={outline}
      plain={plain}
      href={href}
    >
      {children}
    </Button>
  ),
});