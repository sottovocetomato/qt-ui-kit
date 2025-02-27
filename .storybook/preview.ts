import type { Preview } from "@storybook/vue3";
import { setup } from "@storybook/vue3";
import {
  ThemeDecorator,
  ThemeType,
} from "../src/config/storybook/ThemeDecorator";

import rippleEffect from "../src/directives/ripple";

setup((app) => {
  app.directive("ripple", rippleEffect);
});

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
