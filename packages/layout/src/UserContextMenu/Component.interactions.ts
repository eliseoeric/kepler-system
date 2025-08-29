import { expect, userEvent, within } from '@storybook/test';

export const openAndCloseMenu = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Find and click the dropdown button
  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);

  // Verify menu items are visible
  const profileLink = await canvas.findByText('Your profile');
  const settingsLink = await canvas.findByText('Settings');
  const signOutLink = await canvas.findByText('Sign out');

  expect(profileLink).toBeInTheDocument();
  expect(settingsLink).toBeInTheDocument();
  expect(signOutLink).toBeInTheDocument();

  // Click outside to close
  await userEvent.click(canvasElement);

  // Verify menu is closed
  const menuItems = canvas.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
};

export const navigateMenuWithKeyboard = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Focus the dropdown button
  const dropdownButton = canvas.getByRole('button');
  dropdownButton.focus();

  // Press Enter to open menu
  await userEvent.keyboard('{Enter}');

  // Verify menu is open
  const profileLink = await canvas.findByText('Your profile');
  expect(profileLink).toBeInTheDocument();

  // Navigate with arrow keys
  await userEvent.keyboard('{ArrowDown}');
  expect(document.activeElement).toHaveTextContent('Settings');

  await userEvent.keyboard('{ArrowDown}');
  expect(document.activeElement).toHaveTextContent('Sign out');

  await userEvent.keyboard('{ArrowUp}');
  expect(document.activeElement).toHaveTextContent('Settings');

  // Press Escape to close
  await userEvent.keyboard('{Escape}');

  // Verify menu is closed
  const menuItems = canvas.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
};

export const clickMenuItems = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Open menu
  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);

  // Click each menu item
  const profileLink = await canvas.findByText('Your profile');
  await userEvent.click(profileLink);

  // Menu should close after clicking
  let menuItems = canvas.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);

  // Reopen menu
  await userEvent.click(dropdownButton);

  const settingsLink = await canvas.findByText('Settings');
  await userEvent.click(settingsLink);

  // Menu should close again
  menuItems = canvas.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);

  // Reopen menu
  await userEvent.click(dropdownButton);

  const signOutLink = await canvas.findByText('Sign out');
  await userEvent.click(signOutLink);

  // Menu should close
  menuItems = canvas.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
};

export const verifyAccessibility = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Check for proper ARIA attributes
  const dropdownButton = canvas.getByRole('button');
  expect(dropdownButton).toBeInTheDocument();

  // Check for screen reader text
  const srText = canvas.getByText('Open user menu');
  expect(srText).toHaveClass('sr-only');

  // Check avatar alt text
  const avatar = canvas.getByRole('img');
  expect(avatar).toHaveAttribute('alt');

  // Open menu and check menu accessibility
  await userEvent.click(dropdownButton);

  const menuItems = await canvas.findAllByRole('menuitem');
  expect(menuItems).toHaveLength(3);

  // Check that menu items are focusable
  for (const item of menuItems) {
    expect(item).toHaveAttribute('tabindex', '0');
  }

  // Check that links have proper href attributes
  const links = canvas.getAllByRole('link');
  for (const link of links) {
    expect(link).toHaveAttribute('href');
  }
};

export const testResponsiveBehavior = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Test on mobile viewport
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 375,
  });

  window.dispatchEvent(new Event('resize'));

  // Verify component still works on mobile
  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);

  const profileLink = await canvas.findByText('Your profile');
  expect(profileLink).toBeInTheDocument();

  // Reset viewport
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024,
  });

  window.dispatchEvent(new Event('resize'));
};

export const testFocusManagement = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  // Focus the dropdown button
  const dropdownButton = canvas.getByRole('button');
  dropdownButton.focus();
  expect(document.activeElement).toBe(dropdownButton);

  // Open menu
  await userEvent.keyboard('{Enter}');

  // Focus should move to first menu item
  const profileLink = await canvas.findByText('Your profile');
  expect(document.activeElement).toBe(profileLink);
  expect(profileLink).toHaveFocus();

  // Close menu with Escape
  await userEvent.keyboard('{Escape}');

  // Focus should return to button
  expect(document.activeElement).toBe(dropdownButton);
  expect(dropdownButton).toHaveFocus();
};
