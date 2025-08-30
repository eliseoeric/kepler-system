import React from 'react';
import figma from '@figma/code-connect';
import Typography, { H1, H2, H3, Body, Text } from './Component';

// Base Typography component
figma.connect(
  Typography,
  'https://figma.com/component-url-placeholder-typography',
  {
    props: {
      children: figma.string('Text Content'),
      tag: figma.enum('Tag', {
        H1: 'h1',
        H2: 'h2',
        H3: 'h3',
        H4: 'h4',
        H5: 'h5',
        H6: 'h6',
        Paragraph: 'p',
        Span: 'span',
      }),
      weight: figma.enum('Weight', {
        Light: 'light',
        Normal: 'normal',
        Medium: 'medium',
        Semibold: 'semibold',
        Bold: 'bold',
        Black: 'black',
      }),
      size: figma.enum('Size', {
        XS: 'xs',
        SM: 'sm',
        MD: 'md',
        LG: 'lg',
        XL: 'xl',
        '2xl': '2xl',
        '3xl': '3xl',
        '4xl': '4xl',
        '5xl': '5xl',
        '6xl': '6xl',
        '7xl': '7xl',
        '8xl': '8xl',
        '9xl': '9xl',
      }),
      uppercase: figma.boolean('Uppercase'),
      italic: figma.boolean('Italic'),
      underline: figma.boolean('Underline'),
    },
    example: ({
      children,
      tag,
      weight,
      size,
      uppercase,
      italic,
      underline,
    }) => (
      <Typography
        tag={tag}
        weight={weight}
        size={size}
        uppercase={uppercase}
        italic={italic}
        underline={underline}
      >
        {children}
      </Typography>
    ),
  },
);

// H1 component
figma.connect(H1, 'https://figma.com/component-url-placeholder-h1', {
  props: {
    children: figma.string('Heading 1'),
  },
  example: ({ children }) => <H1>{children}</H1>,
});

// H2 component
figma.connect(H2, 'https://figma.com/component-url-placeholder-h2', {
  props: {
    children: figma.string('Heading 2'),
  },
  example: ({ children }) => <H2>{children}</H2>,
});

// H3 component
figma.connect(H3, 'https://figma.com/component-url-placeholder-h3', {
  props: {
    children: figma.string('Heading 3'),
  },
  example: ({ children }) => <H3>{children}</H3>,
});

// Body component
figma.connect(Body, 'https://figma.com/component-url-placeholder-body', {
  props: {
    children: figma.string('Body text content'),
  },
  example: ({ children }) => <Body>{children}</Body>,
});

// Text component
figma.connect(Text, 'https://figma.com/component-url-placeholder-text', {
  props: {
    children: figma.string('Text content'),
    weight: figma.enum('Weight', {
      Light: 'light',
      Normal: 'normal',
      Medium: 'medium',
      Semibold: 'semibold',
      Bold: 'bold',
      Black: 'black',
    }),
  },
  example: ({ children, weight }) => <Text weight={weight}>{children}</Text>,
});
