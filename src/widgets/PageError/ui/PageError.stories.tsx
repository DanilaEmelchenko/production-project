import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import PageError from "./PageError";

const meta = {
  title: "widget/PageError",
  component: PageError,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
