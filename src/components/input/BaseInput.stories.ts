import type { Meta, StoryObj } from "@storybook/vue3";

import BaseInput from "./BaseInput.vue";
import "../../assets/styles/main.css";

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  argTypes: {},
};
import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";

type Story = StoryObj<typeof BaseInput>;
export default meta;
export const DefaultInput: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    args: { variant: "primary", theme: ThemeType.LIGHT },

    template: `<BaseInput></BaseInput>`,
  }),
};
