import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import ThemeSwitcher from "./ThemeSwitcher";

const meta = {
  title: "shared/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
