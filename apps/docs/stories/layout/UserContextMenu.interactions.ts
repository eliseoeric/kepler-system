import { expect, userEvent, within } from '@storybook/test';

export const openAndCloseMenu = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);

  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);

  const profileLink = await canvas.findByText('Your profile');
  const settingsLink = await canvas.findByText('Settings');
  const signOutLink = await canvas.findByText('Sign out');

  expect(profileLink).toBeInTheDocument();
  expect(settingsLink).toBeInTheDocument();
  expect(signOutLink).toBeInTheDocument();

  await userEvent.click(canvasElement);

  const menuItems = canvas.queryAllByRole('menuitem');
  expect(menuItems).toHaveLength(0);
};
