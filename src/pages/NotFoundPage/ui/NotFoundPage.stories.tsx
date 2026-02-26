import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import NotFoundPage from "./NotFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {},
};
