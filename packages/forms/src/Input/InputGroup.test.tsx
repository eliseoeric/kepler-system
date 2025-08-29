import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Input from './Component';
import InputGroup from './InputGroup';

// Mock icon component for testing
const MockIcon = () => <svg data-testid="mock-icon" />;

describe('InputGroup Component', () => {
  it('renders the container correctly', () => {
    render(
      <InputGroup data-testid="input-group">
        <MockIcon />
        <Input placeholder="test" />
      </InputGroup>,
    );

    expect(screen.getByTestId('input-group')).toBeInTheDocument();
  });

  it('applies correct base classes to container', () => {
    render(
      <InputGroup data-testid="input-group">
        <MockIcon />
        <Input />
      </InputGroup>,
    );

    const group = screen.getByTestId('input-group');
    expect(group).toHaveClass('relative', 'rounded-md', 'shadow-sm');
  });

  it('applies custom className to container', () => {
    const customClass = 'custom-group-class';
    render(
      <InputGroup className={customClass} data-testid="input-group">
        <MockIcon />
        <Input />
      </InputGroup>,
    );

    const group = screen.getByTestId('input-group');
    expect(group).toHaveClass(
      customClass,
      'relative',
      'rounded-md',
      'shadow-sm',
    );
  });

  it.skip('renders icons in the icon container', () => {
    render(
      <InputGroup>
        <MockIcon />
        <Input placeholder="test" />
      </InputGroup>,
    );

    // Find the icon container div
    const iconContainer = document.querySelector(
      '.pointer-events-none.absolute.inset-y-0.left-0',
    );
    expect(iconContainer).toBeInTheDocument();

    // Verify icon is styled correctly within the container
    const iconInContainer = iconContainer?.querySelector(
      '[data-testid="mock-icon"]',
    );
    expect(iconInContainer).toBeInTheDocument();
    expect(iconInContainer).toHaveClass('h-4', 'w-4', 'text-gray-400');
    expect(iconInContainer).toHaveAttribute('data-slot', 'icon');
  });

  it('adds padding to input when icon is present', () => {
    render(
      <InputGroup>
        <MockIcon />
        <Input data-testid="styled-input" />
      </InputGroup>,
    );

    // Find the input that's been styled with padding
    const inputWithPadding = document.querySelector('input.pl-10');
    expect(inputWithPadding).toBeInTheDocument();
  });

  it('works without icons', () => {
    render(
      <InputGroup data-testid="input-group">
        <Input placeholder="no icons" />
      </InputGroup>,
    );

    expect(screen.getByTestId('input-group')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('no icons')).toBeInTheDocument();
  });

  it('forwards additional props to container', () => {
    render(
      <InputGroup
        data-testid="input-group"
        role="group"
        aria-label="Search input group"
      >
        <MockIcon />
        <Input />
      </InputGroup>,
    );

    const group = screen.getByTestId('input-group');
    expect(group).toHaveAttribute('role', 'group');
    expect(group).toHaveAttribute('aria-label', 'Search input group');
  });

  it.skip('preserves existing icon classes', () => {
    const IconWithClass = () => (
      <svg data-testid="icon-with-class" className="existing-class" />
    );

    render(
      <InputGroup>
        <IconWithClass />
        <Input />
      </InputGroup>,
    );

    // Find the styled icon in the icon container
    const iconContainer = document.querySelector('.pointer-events-none');
    const iconInContainer = iconContainer?.querySelector(
      '[data-testid="icon-with-class"]',
    );

    expect(iconInContainer).toHaveClass(
      'existing-class',
      'h-4',
      'w-4',
      'text-gray-400',
    );
  });

  it('preserves existing input classes', () => {
    render(
      <InputGroup>
        <MockIcon />
        <Input className="existing-input-class" />
      </InputGroup>,
    );

    // Find the styled input
    const styledInput = document.querySelector('input.pl-10');
    expect(styledInput).toHaveClass('existing-input-class', 'pl-10');
  });

  it('renders multiple icons correctly', () => {
    const SecondIcon = () => <svg data-testid="second-icon" />;

    render(
      <InputGroup>
        <MockIcon />
        <SecondIcon />
        <Input />
      </InputGroup>,
    );

    const iconContainer = document.querySelector('.pointer-events-none');
    expect(
      iconContainer?.querySelector('[data-testid="mock-icon"]'),
    ).toBeInTheDocument();
    expect(
      iconContainer?.querySelector('[data-testid="second-icon"]'),
    ).toBeInTheDocument();
  });

  it('handles complex children structure', () => {
    render(
      <InputGroup data-testid="input-group">
        <div>
          <MockIcon />
        </div>
        <div>
          <Input placeholder="nested input" />
        </div>
      </InputGroup>,
    );

    // Should not apply icon styles to wrapper divs, only to actual icons/inputs
    expect(screen.getByTestId('input-group')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('nested input')).toBeInTheDocument();
  });
});
