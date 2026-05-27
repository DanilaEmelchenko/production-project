import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Text, { TextTheme } from "./Text";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title",
    text: "Text",
  },
};

export const Error: Story = {
  args: {
    title: "Title",
    text: "Text",
    theme: TextTheme.ERROR,
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title",
  },
};

export const onlyText: Story = {
  args: {
    text: "Text",
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title",
    text: "Text",
  },
};

export const onlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: "Title",
  },
};

export const onlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    text: "Text",
  },
};
