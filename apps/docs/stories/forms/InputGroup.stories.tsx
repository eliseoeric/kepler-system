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
