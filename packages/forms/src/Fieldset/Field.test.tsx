import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Input from '../Input/Component';
import Field from './Field';
import Label from './Label';

describe('Field Component', () => {
  it('renders children correctly', () => {
    render(
      <Field data-testid="field">
        <Label>Test Label</Label>
        <Input data-testid="input" />
      </Field>,
    );

    expect(screen.getByTestId('field')).toBeInTheDocument();
    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
  });

  it('applies default spacing classes', () => {
    render(
      <Field data-testid="field">
        <Label>Test Label</Label>
        <Input />
      </Field>,
    );

    const field = screen.getByTestId('field');
    expect(field).toHaveClass('space-y-2');
  });

  it('handles disabled state', () => {
    render(
      <Field disabled data-testid="field">
        <Label>Test Label</Label>
        <Input data-testid="input" />
      </Field>,
    );

    const field = screen.getByTestId('field');
    expect(field).toHaveClass('opacity-50');

    // Note: HeadlessUI Field should automatically disable child form elements
    // but we'll test the visual indication here
  });

  it('applies custom className', () => {
    const customClass = 'custom-field-class';
    render(
      <Field className={customClass} data-testid="field">
        <Label>Test Label</Label>
        <Input />
      </Field>,
    );

    const field = screen.getByTestId('field');
    expect(field).toHaveClass(customClass, 'space-y-2');
  });

  it('forwards additional props', () => {
    render(
      <Field data-testid="field" role="group" aria-labelledby="field-label">
        <Label id="field-label">Test Label</Label>
        <Input />
      </Field>,
    );

    const field = screen.getByTestId('field');
    expect(field).toHaveAttribute('role', 'group');
    expect(field).toHaveAttribute('aria-labelledby', 'field-label');
  });

  it('combines disabled prop with custom classes', () => {
    render(
      <Field disabled className="custom-spacing" data-testid="field">
        <Label>Test Label</Label>
        <Input />
      </Field>,
    );

    const field = screen.getByTestId('field');
    expect(field).toHaveClass('space-y-2', 'opacity-50', 'custom-spacing');
  });

  it('works with complex children structure', () => {
    render(
      <Field data-testid="field">
        <Label>Complex Field</Label>
        <div>
          <p>Description text</p>
          <Input data-testid="input" />
        </div>
        <div>
          <small>Help text</small>
        </div>
      </Field>,
    );

    expect(screen.getByTestId('field')).toBeInTheDocument();
    expect(screen.getByText('Complex Field')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.getByText('Help text')).toBeInTheDocument();
  });

  it('maintains proper spacing with different numbers of children', () => {
    const { rerender } = render(
      <Field data-testid="field">
        <Label>Single Child</Label>
      </Field>,
    );

    expect(screen.getByTestId('field')).toHaveClass('space-y-2');

    rerender(
      <Field data-testid="field">
        <Label>Multiple Children</Label>
        <Input />
        <div>Help text</div>
      </Field>,
    );

    expect(screen.getByTestId('field')).toHaveClass('space-y-2');
  });

  it('works without any children', () => {
    render(<Field data-testid="field" />);

    const field = screen.getByTestId('field');
    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('space-y-2');
  });
});
