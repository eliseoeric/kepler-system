import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AvatarButton from './AvatarButton';

describe('AvatarButton Component', () => {
  it('renders with default props as a button', () => {
    render(<AvatarButton data-testid="avatar-button" />);

    const button = screen.getByTestId('avatar-button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');

    // Should render a div with gray background when no src or initials provided
    const avatarContent = button.querySelector('div');
    expect(avatarContent).toHaveClass('bg-gray-300');
  });

  it('renders image when src is provided', () => {
    render(
      <AvatarButton
        src="https://example.com/avatar.jpg"
        alt="User avatar"
        data-testid="avatar-button"
      />,
    );

    const button = screen.getByTestId('avatar-button');
    const img = button.querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'User avatar');
  });

  it('renders initials when initials prop is provided', () => {
    render(<AvatarButton initials="JD" data-testid="avatar-button" />);

    const button = screen.getByTestId('avatar-button');
    const initialsDiv = button.querySelector('div');

    expect(initialsDiv).toBeInTheDocument();
    expect(initialsDiv).toHaveTextContent('JD');
    expect(initialsDiv).toHaveClass('bg-gray-500', 'text-white');
  });

  it('renders as link when href is provided', () => {
    render(<AvatarButton href="/profile" data-testid="avatar-button" />);

    const link = screen.getByTestId('avatar-button');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/profile');
  });
});
