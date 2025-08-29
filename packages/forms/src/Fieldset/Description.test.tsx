import React from 'react';
import { Field } from '@headlessui/react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Description from './Description';

describe('Description Component', () => {
  it('renders text content correctly', () => {
    const descriptionText = 'Enter your email address to receive notifications';
    render(
      <Field>
        <Description>{descriptionText}</Description>
      </Field>,
    );

    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });

  it('applies default styling classes', () => {
    render(
      <Field>
        <Description data-testid="description">Test description</Description>
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toHaveClass('text-sm/6', 'text-gray-600');
  });

  it('applies custom className', () => {
    const customClass = 'custom-description-class';
    render(
      <Field>
        <Description className={customClass} data-testid="description">
          Test description
        </Description>
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toHaveClass(customClass, 'text-sm/6', 'text-gray-600');
  });

  it('forwards additional props', () => {
    render(
      <Field>
        <Description data-testid="description" id="description-id" role="note">
          Test description
        </Description>
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toHaveAttribute('id', 'description-id');
    expect(description).toHaveAttribute('role', 'note');
  });

  it('renders with complex children', () => {
    render(
      <Field>
        <Description data-testid="description">
          This field is <strong>required</strong>. Please enter a valid{' '}
          <a href="/help" className="underline">
            email address
          </a>
          .
        </Description>
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toContainHTML('<strong>required</strong>');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/help');
  });

  it('works as proper HeadlessUI Description element', () => {
    render(
      <Field>
        <input aria-describedby="field-description" data-testid="input" />
        <Description id="field-description">Field description</Description>
      </Field>,
    );

    const input = screen.getByTestId('input');
    const description = screen.getByText('Field description');

    expect(input).toHaveAttribute('aria-describedby', 'field-description');
    expect(description).toHaveAttribute('id', 'field-description');
  });

  it('handles long description text', () => {
    const longDescription =
      'This is a very long description that might wrap to multiple lines and should still maintain proper styling and readability for users who need detailed instructions about how to fill out this particular form field.';

    render(
      <Field>
        <Description data-testid="description">{longDescription}</Description>
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toHaveTextContent(longDescription);
    expect(description).toHaveClass('text-sm/6', 'text-gray-600');
  });

  it('renders empty content gracefully', () => {
    render(
      <Field>
        <Description data-testid="description" />
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass('text-sm/6', 'text-gray-600');
  });

  it('maintains semantic meaning for accessibility', () => {
    render(
      <Field>
        <Description data-testid="description" aria-label="Field help text">
          Help text for the field
        </Description>
      </Field>,
    );

    const description = screen.getByTestId('description');
    expect(description).toHaveAttribute('aria-label', 'Field help text');
  });

  it('can be conditionally rendered', () => {
    const { rerender } = render(
      <Field>
        <div data-testid="container">
          <Description>Visible description</Description>
        </div>
      </Field>,
    );

    expect(screen.getByText('Visible description')).toBeInTheDocument();

    rerender(
      <Field>
        <div data-testid="container">{/* No description rendered */}</div>
      </Field>,
    );

    expect(screen.queryByText('Hidden description')).not.toBeInTheDocument();
  });
});
