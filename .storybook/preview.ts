import type { Preview } from "@storybook/vue3";
import {
  ThemeDecorator,
  ThemeType,
} from "../src/config/storybook/ThemeDecorator";

const preview: Preview = {
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
