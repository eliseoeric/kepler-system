import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Avatar from './Component';

describe('Avatar Component', () => {
  it('renders with default props', () => {
    render(<Avatar data-testid="avatar" />);

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();

    // Should render a div with gray background when no src or initials provided
    const avatarContent = avatar.querySelector('div');
    expect(avatarContent).toHaveClass('bg-gray-300');
    expect(avatarContent).toHaveClass('rounded-full');
  });

  it('renders image when src is provided', () => {
    render(
      <Avatar
        src="https://example.com/avatar.jpg"
        alt="User avatar"
        data-testid="avatar"
      />,
    );

    const avatar = screen.getByTestId('avatar');
    const img = avatar.querySelector('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'User avatar');
  });

  it('renders initials when initials prop is provided', () => {
    render(<Avatar initials="JD" data-testid="avatar" />);

    const avatar = screen.getByTestId('avatar');
    const initialsDiv = avatar.querySelector('div');

    expect(initialsDiv).toBeInTheDocument();
    expect(initialsDiv).toHaveTextContent('JD');
    expect(initialsDiv).toHaveClass('bg-gray-500', 'text-white');
  });

  it('applies square variant when specified', () => {
    render(<Avatar square initials="JD" data-testid="avatar" />);

    const avatar = screen.getByTestId('avatar');
    const avatarContent = avatar.querySelector('div');

    expect(avatarContent).toHaveClass('size-8');
    expect(avatarContent).not.toHaveClass('rounded-full');
  });
});
