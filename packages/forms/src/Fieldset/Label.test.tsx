import React from 'react';
import { Field } from '@headlessui/react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Label from './Label';

describe('Label Component', () => {
  it('renders text content correctly', () => {
    const labelText = 'Email Address';
    render(
      <Field>
        <Label>{labelText}</Label>
      </Field>,
    );

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('applies default styling classes', () => {
    render(
      <Field>
        <Label data-testid="label">Test Label</Label>
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toHaveClass(
      'block',
      'text-sm/6',
      'font-medium',
      'text-gray-900',
    );
  });

  it('applies custom className', () => {
    const customClass = 'custom-label-class';
    render(
      <Field>
        <Label className={customClass} data-testid="label">
          Test Label
        </Label>
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toHaveClass(
      customClass,
      'block',
      'text-sm/6',
      'font-medium',
      'text-gray-900',
    );
  });

  it.skip('forwards additional props', () => {
    render(
      <Field>
        <Label data-testid="label" htmlFor="input-id" id="label-id">
          Test Label
        </Label>
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toHaveAttribute('htmlFor', 'input-id');
    expect(label).toHaveAttribute('id', 'label-id');
  });

  it('renders with complex children', () => {
    render(
      <Field>
        <Label data-testid="label">
          <span>Required</span>
          <strong>Email Address</strong>
          <span className="text-red-500">*</span>
        </Label>
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toContainHTML('<span>Required</span>');
    expect(label).toContainHTML('<strong>Email Address</strong>');
    expect(label).toContainHTML('<span class="text-red-500">*</span>');
  });

  it.skip('works as a proper label element', () => {
    render(
      <Field>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" data-testid="input" />
      </Field>,
    );

    const input = screen.getByTestId('input');
    const label = screen.getByText('Test Label');

    expect(label.tagName).toBe('LABEL');
    expect(label).toHaveAttribute('htmlFor', 'test-input');
    expect(input).toHaveAttribute('id', 'test-input');
  });

  it('handles click events', () => {
    render(
      <Field>
        <Label htmlFor="clickable-input">Clickable Label</Label>
        <input id="clickable-input" data-testid="input" />
      </Field>,
    );

    const label = screen.getByText('Clickable Label');
    const input = screen.getByTestId('input') as HTMLInputElement;

    // Clicking the label should focus the associated input
    label.click();
    expect(document.activeElement).toBe(input);
  });

  it('maintains accessibility with screen readers', () => {
    render(
      <Field>
        <Label data-testid="label" aria-label="Accessible label">
          Visual Label Text
        </Label>
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toHaveAttribute('aria-label', 'Accessible label');
  });

  it('works with HeadlessUI Field integration', () => {
    // Testing that the label can work within HeadlessUI Field context
    render(
      <Field>
        <Label data-testid="label">Field Label</Label>
        <input data-testid="input" />
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label.tagName).toBe('LABEL');
  });

  it('renders empty content gracefully', () => {
    render(
      <Field>
        <Label data-testid="label" />
      </Field>,
    );

    const label = screen.getByTestId('label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass(
      'block',
      'text-sm/6',
      'font-medium',
      'text-gray-900',
    );
  });
});
