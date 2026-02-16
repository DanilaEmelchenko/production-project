import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "./../../src/app/providers/ThemeProvider/lib/ThemeContext";
import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { StyleDecorator } from "./../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import type { Preview } from "@storybook/react-webpack5";

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
