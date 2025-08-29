import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Input from './Component';

describe('Input Component', () => {
  it('renders with default props', () => {
    render(<Input data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).not.toBeDisabled();
  });

  it('renders with different input types', () => {
    const types = [
      'email',
      'password',
      'search',
      'tel',
      'url',
      'number',
    ] as const;

    types.forEach((type) => {
      const { unmount } = render(
        <Input type={type} data-testid={`input-${type}`} />,
      );
      const input = screen.getByTestId(`input-${type}`);

      expect(input).toHaveAttribute('type', type);
      unmount();
    });
  });

  it('handles placeholder text', () => {
    const placeholder = 'Enter your email';
    render(<Input placeholder={placeholder} data-testid="input" />);

    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('handles disabled state', () => {
    render(<Input disabled data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toBeDisabled();
    expect(input).toHaveClass('cursor-not-allowed');
  });

  it('handles invalid state styling', () => {
    render(<Input invalid data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toHaveClass('ring-red-300', 'text-red-900');
  });

  it('handles controlled input with value and onChange', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const value = 'test value';

    render(<Input value={value} onChange={handleChange} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveValue(value);

    await user.clear(input);
    await user.type(input, 'new value');

    expect(handleChange).toHaveBeenCalled();
  });

  it('handles uncontrolled input with defaultValue', () => {
    const defaultValue = 'default text';
    render(<Input defaultValue={defaultValue} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveValue(defaultValue);
  });

  it('forwards additional props', () => {
    render(
      <Input
        name="test-input"
        id="test-id"
        aria-label="Test input"
        data-testid="input"
      />,
    );

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('name', 'test-input');
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('aria-label', 'Test input');
  });

  it('applies custom className', () => {
    const customClass = 'custom-input-class';
    render(<Input className={customClass} data-testid="input" />);

    const input = screen.getByTestId('input');
    expect(input).toHaveClass(customClass);
  });

  it('handles keyboard events', async () => {
    const user = userEvent.setup();
    const handleKeyDown = vi.fn();

    render(<Input onKeyDown={handleKeyDown} data-testid="input" />);

    const input = screen.getByTestId('input');
    await user.click(input);
    await user.keyboard('{Enter}');

    expect(handleKeyDown).toHaveBeenCalled();
  });

  it('handles focus and blur events', async () => {
    const user = userEvent.setup();
    const handleFocus = vi.fn();
    const handleBlur = vi.fn();

    render(
      <Input onFocus={handleFocus} onBlur={handleBlur} data-testid="input" />,
    );

    const input = screen.getByTestId('input');

    await user.click(input);
    expect(handleFocus).toHaveBeenCalled();

    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });

  it('combines invalid and disabled states correctly', () => {
    render(<Input invalid disabled data-testid="input" />);
    const input = screen.getByTestId('input');

    expect(input).toBeDisabled();
    expect(input).toHaveClass('cursor-not-allowed');
    // Disabled state should override invalid state
    expect(input).not.toHaveClass('ring-red-300');
  });

  it('handles form submission', () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Input name="test" defaultValue="test value" data-testid="input" />
        <button type="submit">Submit</button>
      </form>,
    );

    fireEvent.click(screen.getByRole('button'));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
