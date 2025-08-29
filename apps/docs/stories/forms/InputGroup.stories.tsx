import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InputGroup, Input } from '@eliseoeric/forms';
import {
  MagnifyingGlassIcon,
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  GlobeAltIcon,
  UserIcon,
  CalendarIcon,
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
} from '@heroicons/react/16/solid';

const meta: Meta<typeof InputGroup> = {
  title: 'Forms/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSearchIcon: Story = {
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
          placeholder="Enter email address"
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

export const WithPhoneIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <PhoneIcon />
        <Input
          type="tel"
          placeholder="(555) 123-4567"
          aria-label="Phone number"
        />
      </InputGroup>
    </div>
  ),
};

export const WithWebsiteIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <GlobeAltIcon />
        <Input
          type="url"
          placeholder="https://example.com"
          aria-label="Website URL"
        />
      </InputGroup>
    </div>
  ),
};

export const WithUserIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <UserIcon />
        <Input type="text" placeholder="Enter username" aria-label="Username" />
      </InputGroup>
    </div>
  ),
};

export const WithCalendarIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <CalendarIcon />
        <Input type="date" aria-label="Select date" />
      </InputGroup>
    </div>
  ),
};

export const WithClockIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <ClockIcon />
        <Input type="time" aria-label="Select time" />
      </InputGroup>
    </div>
  ),
};

export const WithCreditCardIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <CreditCardIcon />
        <Input
          type="text"
          placeholder="1234 5678 9012 3456"
          aria-label="Credit card number"
          maxLength={19}
        />
      </InputGroup>
    </div>
  ),
};

export const WithLocationIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <MapPinIcon />
        <Input type="text" placeholder="Enter address" aria-label="Address" />
      </InputGroup>
    </div>
  ),
};

export const DisabledWithIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <UserIcon />
        <Input
          type="text"
          placeholder="Disabled input"
          aria-label="Disabled input"
          disabled
          value="john.doe"
        />
      </InputGroup>
    </div>
  ),
};

export const InvalidWithIcon: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <EnvelopeIcon />
        <Input
          type="email"
          placeholder="Enter email"
          aria-label="Email"
          invalid
          value="invalid-email"
        />
      </InputGroup>
    </div>
  ),
};

export const AllIconExamples: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <InputGroup>
          <MagnifyingGlassIcon />
          <Input type="search" placeholder="Search..." />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <InputGroup>
          <EnvelopeIcon />
          <Input type="email" placeholder="email@example.com" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <InputGroup>
          <LockClosedIcon />
          <Input type="password" placeholder="Enter password" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <InputGroup>
          <PhoneIcon />
          <Input type="tel" placeholder="(555) 123-4567" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website
        </label>
        <InputGroup>
          <GlobeAltIcon />
          <Input type="url" placeholder="https://example.com" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username
        </label>
        <InputGroup>
          <UserIcon />
          <Input type="text" placeholder="johndoe" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <InputGroup>
          <CalendarIcon />
          <Input type="date" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Time
        </label>
        <InputGroup>
          <ClockIcon />
          <Input type="time" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Credit Card
        </label>
        <InputGroup>
          <CreditCardIcon />
          <Input type="text" placeholder="1234 5678 9012 3456" />
        </InputGroup>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <InputGroup>
          <MapPinIcon />
          <Input type="text" placeholder="123 Main St" />
        </InputGroup>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup className="shadow-lg">
        <MagnifyingGlassIcon />
        <Input
          type="search"
          placeholder="Custom styled search"
          className="bg-blue-50 focus:bg-white border-blue-200 focus:border-blue-500"
        />
      </InputGroup>
    </div>
  ),
};
