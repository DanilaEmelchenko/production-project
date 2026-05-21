import type { Meta, StoryObj } from "@storybook/react-webpack5";

import LoginForm from "./LoginForm";

const meta = {
  title: "features/AuthByUsername/ui/LoginForm",
  component: LoginForm,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
