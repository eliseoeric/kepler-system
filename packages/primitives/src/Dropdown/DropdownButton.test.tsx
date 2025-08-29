import React from 'react';
import { Menu } from '@headlessui/react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DropdownButton from './DropdownButton';

// Helper component to wrap DropdownButton with required Menu context
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Menu>{children}</Menu>
);

describe('DropdownButton Component', () => {
  it('renders with default props', () => {
    render(
      <TestWrapper>
        <DropdownButton data-testid="dropdown-button">Click me</DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
    expect(button.tagName).toBe('BUTTON');
  });

  it('applies solid variant by default', () => {
    render(
      <TestWrapper>
        <DropdownButton data-testid="dropdown-button">Button</DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass('bg-primary-600', 'text-white', 'shadow-sm');
  });

  it('applies outline variant when specified', () => {
    render(
      <TestWrapper>
        <DropdownButton outline data-testid="dropdown-button">
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass('bg-transparent', 'text-primary-600', 'border');
    expect(button).not.toHaveClass('shadow-sm');
  });

  it('applies plain variant when specified', () => {
    render(
      <TestWrapper>
        <DropdownButton plain data-testid="dropdown-button">
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass(
      'bg-transparent',
      'text-primary-600',
      'border-transparent',
    );
    expect(button).not.toHaveClass('shadow-sm');
  });

  it('applies different colors correctly', () => {
    const { rerender } = render(
      <TestWrapper>
        <DropdownButton color="primary" data-testid="dropdown-button">
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    let button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass('bg-primary-600');

    rerender(
      <TestWrapper>
        <DropdownButton color="secondary" data-testid="dropdown-button">
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass('bg-secondary-600');
  });

  it('handles disabled state', () => {
    render(
      <TestWrapper>
        <DropdownButton disabled data-testid="dropdown-button">
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
    );
  });

  it('applies custom className', () => {
    const customClass = 'custom-button-class';
    render(
      <TestWrapper>
        <DropdownButton className={customClass} data-testid="dropdown-button">
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass(customClass);
  });

  it('forwards additional props', () => {
    render(
      <TestWrapper>
        <DropdownButton
          data-testid="dropdown-button"
          aria-label="Dropdown trigger"
        >
          Button
        </DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toHaveAttribute('aria-label', 'Dropdown trigger');
  });

  it('applies base classes consistently', () => {
    render(
      <TestWrapper>
        <DropdownButton data-testid="dropdown-button">Button</DropdownButton>
      </TestWrapper>,
    );

    const button = screen.getByTestId('dropdown-button');
    expect(button).toHaveClass(
      'inline-flex',
      'items-center',
      'gap-2',
      'rounded-md',
      'px-3',
      'py-2',
      'text-sm',
      'font-semibold',
    );
  });
});
