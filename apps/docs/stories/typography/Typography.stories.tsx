import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Typography,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body,
  Text,
  Overline,
} from '@repo/typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'black'],
    },
    size: {
      control: { type: 'text' },
    },

    uppercase: {
      control: { type: 'boolean' },
    },
    italic: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    tag: 'p',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

// All heading components
export const AllHeadings: Story = {
  render: () => (
    <div className="space-y-4">
      <H1>Heading 1 - Bold</H1>
      <H2>Heading 2 - Semibold</H2>
      <H3>Heading 3 - Semibold</H3>
      <H4>Heading 4 - Semibold</H4>
      <H5>Heading 5 - Medium</H5>
      <H6>Heading 6 - Medium Uppercase</H6>
    </div>
  ),
};

// Font weights demonstration
export const FontWeights: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography tag="p" weight="light">
        Light weight text
      </Typography>
      <Typography tag="p" weight="normal">
        Normal weight text
      </Typography>
      <Typography tag="p" weight="medium">
        Medium weight text
      </Typography>
      <Typography tag="p" weight="semibold">
        Semibold weight text
      </Typography>
      <Typography tag="p" weight="bold">
        Bold weight text
      </Typography>
      <Typography tag="p" weight="black">
        Black weight text
      </Typography>
    </div>
  ),
};

// Font sizes demonstration
export const FontSizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography tag="p" size="text-xs">
        Extra small text (text-xs)
      </Typography>
      <Typography tag="p" size="text-sm">
        Small text (text-sm)
      </Typography>
      <Typography tag="p" size="text-base">
        Base text (text-base)
      </Typography>
      <Typography tag="p" size="text-lg">
        Large text (text-lg)
      </Typography>
      <Typography tag="p" size="text-xl">
        Extra large text (text-xl)
      </Typography>
      <Typography tag="p" size="text-2xl">
        2XL text (text-2xl)
      </Typography>
      <Typography tag="p" size="text-3xl">
        3XL text (text-3xl)
      </Typography>
      <Typography tag="p" size="text-4xl">
        4XL text (text-4xl)
      </Typography>
    </div>
  ),
};

// Text styling options
export const TextStyling: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography tag="p">Normal text</Typography>
      <Typography tag="p" uppercase>
        Uppercase text
      </Typography>
      <Typography tag="p" italic>
        Italic text
      </Typography>
      <Typography tag="p" underline>
        Underlined text
      </Typography>
      <Typography tag="p" uppercase italic underline weight="bold">
        Combined: Uppercase, Italic, Underlined, Bold
      </Typography>
    </div>
  ),
};

// Body and text components
export const BodyAndText: Story = {
  render: () => (
    <div className="space-y-4">
      <Body>
        This is body text using the Body component. It&apos;s perfect for
        paragraphs and longer content. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Body>
      <p>
        This paragraph contains <Text weight="bold">bold inline text</Text> and{' '}
        <Text italic>italic text</Text> using the Text component.
      </p>
    </div>
  ),
};

// Overline component
export const OverlineComponent: Story = {
  render: () => (
    <div className="space-y-4">
      <Overline>
        Overline text - typically used for categories or labels
      </Overline>
      <H3>Section Title</H3>
      <Body>
        Overline components are useful for categorization and providing context
        above main content sections.
      </Body>
    </div>
  ),
};

// Responsive typography
export const ResponsiveTypography: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography
          tag="h2"
          size="text-lg md:text-2xl lg:text-4xl"
          weight="bold"
        >
          Responsive heading that scales up on larger screens
        </Typography>
      </div>
      <div>
        <Typography tag="p" size="text-sm md:text-base lg:text-lg">
          Responsive body text that becomes larger on bigger screens. This
          demonstrates how you can use custom size classes for responsive
          typography.
        </Typography>
      </div>
    </div>
  ),
};