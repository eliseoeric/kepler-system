import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { expect, userEvent, fn } from 'storybook/test';
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

export const InteractiveTyping: Story = {
  render: () => (
    <div className="w-64">
      <Input placeholder="Start typing..." data-testid="typing-input" />
    </div>
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByTestId('typing-input');

    // Test that input is initially empty
    await expect(input).toHaveValue('');

    // Test typing functionality
    await userEvent.type(input, 'Hello Storybook!');
    await expect(input).toHaveValue('Hello Storybook!');

    // Test clearing the input
    await userEvent.clear(input);
    await expect(input).toHaveValue('');

    // Test focus and blur
    await userEvent.click(input);
    await expect(input).toHaveFocus();
  },
};

export const EmailValidation: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <Label htmlFor="email-test">Email Address</Label>
        <Description>Enter a valid email address</Description>
        <Input
          id="email-test"
          type="email"
          placeholder="user@example.com"
          data-testid="email-input"
        />
        <ErrorMessage data-testid="email-error" style={{ display: 'none' }}>
          Please enter a valid email address
        </ErrorMessage>
      </Field>
    </div>
  ),
  play: async ({ canvas }) => {
    const input = canvas.getByTestId('email-input');

    // Test invalid email
    await userEvent.type(input, 'invalid-email');
    await expect(input).toHaveValue('invalid-email');

    // Clear and test valid email
    await userEvent.clear(input);
    await userEvent.type(input, 'test@example.com');
    await expect(input).toHaveValue('test@example.com');
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    value: 'Cannot edit this field',
    'data-testid': 'disabled-input',
  },
  play: async ({ canvas }) => {
    const input = canvas.getByTestId('disabled-input');

    // Verify input is disabled
    await expect(input).toBeDisabled();
    await expect(input).toHaveClass('cursor-not-allowed');

    // Try to type (should not work)
    await userEvent.type(input, 'attempted text');
    await expect(input).toHaveValue('Cannot edit this field');
  },
};

export const FormSubmission: Story = {
  args: {
    onSubmit: fn(),
  },
  render: ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      rememberMe: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit?.(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="w-80 space-y-4">
        <Field>
          <Label htmlFor="login-email">Email</Label>
          <InputGroup>
            <EnvelopeIcon />
            <Input
              id="login-email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email"
              data-testid="form-email"
              required
            />
          </InputGroup>
        </Field>

        <Field>
          <Label htmlFor="login-password">Password</Label>
          <InputGroup>
            <LockClosedIcon />
            <Input
              id="login-password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter your password"
              data-testid="form-password"
              required
            />
          </InputGroup>
        </Field>

        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, rememberMe: e.target.checked }))
            }
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            data-testid="remember-checkbox"
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          data-testid="submit-button"
        >
          Sign In
        </button>
      </form>
    );
  },
  play: async ({ args, canvas }) => {
    const emailInput = canvas.getByTestId('form-email');
    const passwordInput = canvas.getByTestId('form-password');
    const rememberCheckbox = canvas.getByTestId('remember-checkbox');
    const submitButton = canvas.getByTestId('submit-button');

    // Fill out the form
    await userEvent.type(emailInput, 'test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');

    await userEvent.type(passwordInput, 'secretpassword');
    await expect(passwordInput).toHaveValue('secretpassword');

    // Toggle remember me
    await userEvent.click(rememberCheckbox);
    await expect(rememberCheckbox).toBeChecked();

    // Submit the form
    await userEvent.click(submitButton);

    // Verify form submission was called with correct data
    await expect(args.onSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'secretpassword',
      rememberMe: true,
    });
  },
};

export const KeyboardNavigation: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Field>
        <Label>First Name</Label>
        <Input placeholder="First name" data-testid="first-name" />
      </Field>
      <Field>
        <Label>Last Name</Label>
        <Input placeholder="Last name" data-testid="last-name" />
      </Field>
      <Field>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" data-testid="email" />
      </Field>
    </div>
  ),
  play: async ({ canvas }) => {
    const firstName = canvas.getByTestId('first-name');
    const lastName = canvas.getByTestId('last-name');
    const email = canvas.getByTestId('email');

    // Start with first input
    await userEvent.click(firstName);
    await expect(firstName).toHaveFocus();

    // Tab to next input
    await userEvent.tab();
    await expect(lastName).toHaveFocus();

    // Tab to third input
    await userEvent.tab();
    await expect(email).toHaveFocus();

    // Shift+Tab back
    await userEvent.tab({ shift: true });
    await expect(lastName).toHaveFocus();
  },
};
