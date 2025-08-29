import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Field,
  Label,
  Description,
  ErrorMessage,
  Input,
  InputGroup,
} from '@eliseoeric/forms';
import { Button } from '@eliseoeric/primitives';
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  UserIcon,
} from '@heroicons/react/16/solid';

const meta: Meta<typeof Field> = {
  title: 'Forms/Field',
  component: Field,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicField: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <Label>Full name</Label>
        <Input name="full_name" placeholder="Enter your full name" />
      </Field>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <Label>Product name</Label>
        <Description>
          Use the name you'd like people to see in their cart.
        </Description>
        <Input name="product_name" placeholder="Enter product name" />
      </Field>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <Label>Email address</Label>
        <InputGroup>
          <EnvelopeIcon />
          <Input type="email" name="email" placeholder="Enter your email" />
        </InputGroup>
      </Field>
    </div>
  ),
};

export const WithValidationError: Story = {
  render: () => (
    <div className="w-80">
      <Field>
        <Label>Email address</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          invalid={true}
          value="invalid-email"
        />
        <ErrorMessage>Please enter a valid email address.</ErrorMessage>
      </Field>
    </div>
  ),
};

export const DisabledField: Story = {
  render: () => (
    <div className="w-80">
      <Field disabled>
        <Label>Username</Label>
        <Description>This field cannot be edited.</Description>
        <Input name="username" value="john.doe" readOnly />
      </Field>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      website: '',
      bio: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newErrors: Record<string, string> = {};

      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Email is invalid';

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };

    const updateField = (field: string, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    };

    return (
      <form onSubmit={handleSubmit} className="w-96 space-y-6">
        <Field>
          <Label>Full name</Label>
          <InputGroup>
            <UserIcon />
            <Input
              name="name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Enter your full name"
              invalid={!!errors.name}
            />
          </InputGroup>
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </Field>

        <Field>
          <Label>Email address</Label>
          <Description>
            We'll only use this for account notifications.
          </Description>
          <InputGroup>
            <EnvelopeIcon />
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="Enter your email"
              invalid={!!errors.email}
            />
          </InputGroup>
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </Field>

        <Field>
          <Label>Website</Label>
          <Description>Your personal or company website.</Description>
          <Input
            type="url"
            name="website"
            value={formData.website}
            onChange={(e) => updateField('website', e.target.value)}
            placeholder="https://example.com"
          />
        </Field>

        <Field>
          <Label>Bio</Label>
          <Description>Tell us a little about yourself.</Description>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={(e) => updateField('bio', e.target.value)}
            placeholder="Write a short bio..."
            rows={4}
            className="block w-full rounded-md border-0 py-1.5 px-3 text-sm/6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
        </Field>

        <div className="flex gap-3">
          <Button type="submit" color="primary">
            Save Profile
          </Button>
          <Button type="button" color="secondary" outline>
            Cancel
          </Button>
        </div>
      </form>
    );
  },
};

export const SearchForm: Story = {
  render: () => {
    const [query, setQuery] = useState('');

    return (
      <div className="w-96">
        <Field>
          <Label>Search</Label>
          <Description>
            Find articles, documentation, and tutorials.
          </Description>
          <InputGroup>
            <MagnifyingGlassIcon />
            <Input
              type="search"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
            />
          </InputGroup>
        </Field>
        {query && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">
              Searching for: <strong>{query}</strong>
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const LoginForm: Story = {
  render: () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      setLoginError('');

      if (!credentials.email || !credentials.password) {
        setLoginError('Please fill in all fields');
        return;
      }

      // Simulate login error
      setLoginError('Invalid email or password');
    };

    return (
      <form onSubmit={handleLogin} className="w-80 space-y-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
          <p className="text-sm text-gray-600">
            Enter your credentials to continue
          </p>
        </div>

        {loginError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <ErrorMessage>{loginError}</ErrorMessage>
          </div>
        )}

        <Field>
          <Label>Email</Label>
          <InputGroup>
            <EnvelopeIcon />
            <Input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email"
              invalid={!!loginError}
            />
          </InputGroup>
        </Field>

        <Field>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Enter your password"
            invalid={!!loginError}
          />
        </Field>

        <Button type="submit" color="primary" className="w-full">
          Sign In
        </Button>
      </form>
    );
  },
};
