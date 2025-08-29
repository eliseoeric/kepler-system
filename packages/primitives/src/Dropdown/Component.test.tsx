import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dropdown from './Component';

describe('Dropdown Component', () => {
  it('renders with default props', () => {
    render(
      <Dropdown data-testid="dropdown">
        <div>Dropdown content</div>
      </Dropdown>,
    );

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveClass('relative', 'inline-block');
  });

  it('renders children correctly', () => {
    render(
      <Dropdown data-testid="dropdown">
        <button>Dropdown Button</button>
        <div>Dropdown Menu</div>
      </Dropdown>,
    );

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
    expect(screen.getByText('Dropdown Button')).toBeInTheDocument();
    expect(screen.getByText('Dropdown Menu')).toBeInTheDocument();
  });

  it('applies custom className and forwards props', () => {
    const customClass = 'custom-dropdown-class';
    render(
      <Dropdown
        className={customClass}
        data-testid="dropdown"
        role="menu"
        aria-label="User menu"
      >
        <div>Content</div>
      </Dropdown>,
    );

    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toHaveClass(customClass);
    expect(dropdown).toHaveAttribute('role', 'menu');
    expect(dropdown).toHaveAttribute('aria-label', 'User menu');
  });
});
