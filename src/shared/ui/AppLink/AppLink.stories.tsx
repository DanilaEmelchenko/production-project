import type { Meta, StoryObj } from "@storybook/react-webpack5";

import AppLink, { AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: "/",
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    to: "/",
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    to: "/",
    children: "Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const SecondaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    to: "/",
    children: "Text",
    theme: AppLinkTheme.SECONDARY,
  },
};
