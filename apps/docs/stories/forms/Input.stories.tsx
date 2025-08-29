import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { Input } from '@eliseoeric/forms';
import { Field, Label, Description, ErrorMessage } from '@eliseoeric/forms';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile input component that supports various types, states, and styling options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: [
        'text',
        'email',
        'password',
        'search',
        'tel',
        'url',
        'number',
        'date',
        'time',
      ],
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Invalid input',
    invalid: true,
    value: 'Invalid value',
  },
};

export const WithField: Story = {
  render: (args) => (
    <Field>
      <Label>Email Address</Label>
      <Description>We'll never share your email.</Description>
      <Input {...args} />
    </Field>
  ),
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithError: Story = {
  render: (args) => (
    <Field>
      <Label>Email Address</Label>
      <Input {...args} />
      <ErrorMessage>Please enter a valid email address.</ErrorMessage>
    </Field>
  ),
  args: {
    type: 'email',
    placeholder: 'Enter your email',
    invalid: true,
    value: 'invalid-email',
  },
};

// Basic interaction test
export const InteractiveTyping: Story = {
  render: () => (
    <div className="w-64">
      <Input placeholder="Start typing..." data-testid="typing-input" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId('typing-input');

    // Test basic typing functionality
    await userEvent.type(input, 'Hello!');
    await expect(input).toHaveValue('Hello!');
    await expect(input).toHaveFocus();
  },
};
