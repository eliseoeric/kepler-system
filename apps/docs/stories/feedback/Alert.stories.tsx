import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Alert,
  AlertActions,
  AlertTitle,
  AlertDescription,
} from '@eliseoeric/feedback';
import { Button } from '@eliseoeric/primitives';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    open: {
      control: { type: 'boolean' },
    },
    onClose: { action: 'onClose' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button color="primary" onClick={() => setIsOpen(true)}>
          Show Default Alert
        </Button>
        <Alert
          variant="default"
          size="md"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>
            This is a general notification to inform you about an important
            update.
          </AlertDescription>
          <AlertActions>
            <Button color="secondary" outline onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </AlertActions>
        </Alert>
      </>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button color="primary" onClick={() => setIsOpen(true)}>
          Refund Payment
        </Button>
        <Alert
          variant="destructive"
          size="md"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <AlertTitle>Are you sure you want to refund this payment?</AlertTitle>
          <AlertDescription>
            The refund will be reflected in the customer's bank account 2 to 3
            business days after processing.
          </AlertDescription>
          <AlertActions>
            <Button color="secondary" plain onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setIsOpen(false)}>
              Refund
            </Button>
          </AlertActions>
        </Alert>
      </>
    );
  },
};

export const DeleteConfirmation: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button color="primary" onClick={() => setIsOpen(true)}>
          Delete Account
        </Button>
        <Alert
          variant="destructive"
          size="lg"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <AlertTitle>Delete Account</AlertTitle>
          <AlertDescription>
            This action cannot be undone. All of your data will be permanently
            removed from our servers forever.
          </AlertDescription>
          <AlertActions>
            <Button color="secondary" outline onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => setIsOpen(false)}>
              Delete Account
            </Button>
          </AlertActions>
        </Alert>
      </>
    );
  },
};

export const WithoutActions: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <Button color="primary" onClick={() => setIsOpen(true)}>
          Show Simple Alert
        </Button>
        <Alert
          variant="default"
          size="md"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <AlertTitle>Simple Notification</AlertTitle>
          <AlertDescription>
            This alert only contains information without any action buttons.
            Click outside or press escape to close.
          </AlertDescription>
        </Alert>
      </>
    );
  },
};
