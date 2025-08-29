import React from 'react';
import { Field } from '@headlessui/react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage Component', () => {
  it('renders error text correctly', () => {
    const errorText = 'Please enter a valid email address';
    render(
      <Field>
        <ErrorMessage>{errorText}</ErrorMessage>
      </Field>,
    );

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it('applies error styling classes', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error">Error message</ErrorMessage>
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toHaveClass('text-sm/6', 'text-red-600');
  });

  it('applies custom className', () => {
    const customClass = 'custom-error-class';
    render(
      <Field>
        <ErrorMessage className={customClass} data-testid="error">
          Error message
        </ErrorMessage>
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toHaveClass(customClass, 'text-sm/6', 'text-red-600');
  });

  it('forwards additional props', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error" id="error-id" role="alert">
          Error message
        </ErrorMessage>
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toHaveAttribute('id', 'error-id');
    expect(error).toHaveAttribute('role', 'alert');
  });

  it('renders with complex children', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error">
          <strong>Error:</strong> Please check the{' '}
          <a href="/help" className="underline">
            format requirements
          </a>
          .
        </ErrorMessage>
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toContainHTML('<strong>Error:</strong>');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/help');
  });

  it('works as proper HeadlessUI Description element for errors', () => {
    render(
      <Field>
        <input aria-describedby="field-error" data-testid="input" />
        <ErrorMessage id="field-error">Validation error</ErrorMessage>
      </Field>,
    );

    const input = screen.getByTestId('input');
    const error = screen.getByText('Validation error');

    expect(input).toHaveAttribute('aria-describedby', 'field-error');
    expect(error).toHaveAttribute('id', 'field-error');
  });

  it('has appropriate semantic role for screen readers', () => {
    render(
      <Field>
        <ErrorMessage role="alert" data-testid="error">
          This field is required
        </ErrorMessage>
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toHaveAttribute('role', 'alert');
  });

  it('handles multiple error messages', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error1">First error</ErrorMessage>
        <ErrorMessage data-testid="error2">Second error</ErrorMessage>
      </Field>,
    );

    expect(screen.getByTestId('error1')).toHaveTextContent('First error');
    expect(screen.getByTestId('error2')).toHaveTextContent('Second error');
    expect(screen.getByTestId('error1')).toHaveClass('text-red-600');
    expect(screen.getByTestId('error2')).toHaveClass('text-red-600');
  });

  it.skip('can display validation error lists', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error">
          <ul>
            <li>Password must be at least 8 characters</li>
            <li>Password must contain a number</li>
            <li>Password must contain a special character</li>
          </ul>
        </ErrorMessage>
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toContainHTML('<ul>');
    expect(
      screen.getByText('Password must be at least 8 characters'),
    ).toBeInTheDocument();
  });

  it('renders empty content gracefully', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error" />
      </Field>,
    );

    const error = screen.getByTestId('error');
    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('text-sm/6', 'text-red-600');
  });

  it('can be conditionally rendered based on validation state', () => {
    const errorMessage = 'Field is required';

    const { rerender } = render(
      <Field>
        <div data-testid="container">
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      </Field>,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    rerender(
      <Field>
        <div data-testid="container">{/* No error message rendered */}</div>
      </Field>,
    );

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
  });

  it('maintains consistent styling with other form elements', () => {
    render(
      <Field>
        <ErrorMessage data-testid="error">Error message</ErrorMessage>
        <div data-testid="reference" className="text-sm/6">
          Reference text
        </div>
      </Field>,
    );

    const error = screen.getByTestId('error');
    const reference = screen.getByTestId('reference');

    // Both should have the same text size classes
    expect(error).toHaveClass('text-sm/6');
    expect(reference).toHaveClass('text-sm/6');
  });
});
