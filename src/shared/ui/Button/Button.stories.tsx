import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Button, { ButtonSize, ButtonTheme } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Text",
  },
};

export const Clear: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: "Text",
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
