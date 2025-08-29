import React from 'react';
import { Menu } from '@headlessui/react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DropdownMenuItem from './DropdownMenuItem';

// Helper component to wrap DropdownMenuItem with required Menu context
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Menu>{children}</Menu>
);

describe('DropdownMenuItem Component', () => {
  it('renders with default props as a button', () => {
    render(
      <TestWrapper>
        <DropdownMenuItem data-testid="menu-item">Click me</DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveTextContent('Click me');
    expect(menuItem.tagName).toBe('BUTTON');
  });

  it('renders as a link when href is provided', () => {
    render(
      <TestWrapper>
        <DropdownMenuItem href="/profile" data-testid="menu-item">
          Profile
        </DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem.tagName).toBe('A');
    expect(menuItem).toHaveAttribute('href', '/profile');
    expect(menuItem).toHaveTextContent('Profile');
  });

  it('handles onClick when rendered as a button', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <DropdownMenuItem onClick={handleClick} data-testid="menu-item">
          Click me
        </DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    fireEvent.click(menuItem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies default styling classes', () => {
    render(
      <TestWrapper>
        <DropdownMenuItem data-testid="menu-item">Menu Item</DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem).toHaveClass(
      'group',
      'flex',
      'w-full',
      'items-center',
      'rounded-md',
      'px-2',
      'py-2',
      'text-sm',
      'text-white',
    );
  });

  it('applies custom className', () => {
    const customClass = 'custom-menu-item-class';
    render(
      <TestWrapper>
        <DropdownMenuItem className={customClass} data-testid="menu-item">
          Menu Item
        </DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem).toHaveClass(customClass);
  });

  it('forwards additional props', () => {
    render(
      <TestWrapper>
        <DropdownMenuItem
          data-testid="menu-item"
          aria-label="Menu item"
          disabled
        >
          Menu Item
        </DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem).toHaveAttribute('aria-label', 'Menu item');
    expect(menuItem).toHaveAttribute('aria-disabled', 'true');
  });

  it('prioritizes href over onClick when both are provided', () => {
    const handleClick = vi.fn();
    render(
      <TestWrapper>
        <DropdownMenuItem
          href="/profile"
          onClick={handleClick}
          data-testid="menu-item"
        >
          Profile
        </DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem.tagName).toBe('A');
    expect(menuItem).toHaveAttribute('href', '/profile');
  });

  it('renders complex children correctly', () => {
    render(
      <TestWrapper>
        <DropdownMenuItem data-testid="menu-item">
          <div>
            <span>Profile</span>
            <small>Manage your account</small>
          </div>
        </DropdownMenuItem>
      </TestWrapper>,
    );

    const menuItem = screen.getByTestId('menu-item');
    expect(menuItem).toHaveTextContent('Profile');
    expect(menuItem).toHaveTextContent('Manage your account');
  });
});
