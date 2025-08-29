import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  Field,
  Label,
  Description,
  ErrorMessage,
} from '@eliseoeric/forms';
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from '@heroicons/react/16/solid';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
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
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
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
    placeholder: 'Enter email address',
    name: 'email',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    name: 'password',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
    name: 'search',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Enter valid email',
    invalid: true,
    value: 'invalid-email',
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <MagnifyingGlassIcon />
        <Input type="search" placeholder="Search..." aria-label="Search" />
      </InputGroup>
    </div>
  ),
};

export const WithEmailIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <EnvelopeIcon />
        <Input
          type="email"
          placeholder="Enter email"
          aria-label="Email address"
        />
      </InputGroup>
    </div>
  ),
};

export const WithPasswordIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <LockClosedIcon />
        <Input
          type="password"
          placeholder="Enter password"
          aria-label="Password"
        />
      </InputGroup>
    </div>
  ),
};

export const ConstrainedWidth: Story = {
  render: () => (
    <Input
      placeholder="CVC"
      className="max-w-24"
      pattern="[0-9]*"
      maxLength={4}
    />
  ),
};

export const ControlledInput: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div className="w-64">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
        />
        <p className="mt-2 text-sm text-gray-600">
          Current value: {value || '(empty)'}
        </p>
      </div>
    );
  },
};

export const AllInputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="search" placeholder="Search input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
      <Input type="number" placeholder="Number input" />
      <Input type="date" />
      <Input type="time" />
    </div>
  ),
};
