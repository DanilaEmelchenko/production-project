import type { Meta, StoryObj } from "@storybook/react-webpack5";

import LoginForm from "./LoginForm";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/AuthByUsername/ui/LoginForm",
  component: LoginForm,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: "123", password: "asd" },
    }),
  ],
  args: {},
};

export const withError: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: "123", password: "asd", error: "ERROR" },
    }),
  ],
  args: {},
};

export const Loading: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: "", password: "", isLoading: true },
    }),
  ],
  args: {},
};
