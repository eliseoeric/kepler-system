import { expect, userEvent, within, screen } from '@storybook/test';

export const openAndCloseMenu = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);

  // Menu items are in a portal, so search the entire document
  const profileLink = await screen.findByText('Your profile');
  const settingsLink = await screen.findByText('Settings');
  const signOutLink = await screen.findByText('Sign out');

  expect(profileLink).toBeInTheDocument();
  expect(settingsLink).toBeInTheDocument();
  expect(signOutLink).toBeInTheDocument();

  // Click on document body to close the menu
  await userEvent.click(document.body);

  // Wait a bit for the menu to close with transition
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Check that menu items are closed by looking in the entire document
  const menuItems = screen.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
};
