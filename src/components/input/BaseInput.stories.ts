import type { Meta, StoryObj } from "@storybook/vue3";

import BaseInput from "./BaseInput.vue";
import "../../assets/styles/main.css";
import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  argTypes: {
    name: { control: { type: "text" } },
    type: { control: { type: "radio", options: ["number", "text"] } },
    disabled: { control: { type: "boolean" } },
    placeholder: { control: { type: "text" } },
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    maxlength: { control: { type: "number" } },
    minlength: { control: { type: "number" } },
    mask: { control: { type: "text" } },
    label: { control: { type: "text" } },
    errorMessage: { control: { type: "boolean" } },
  },
};

type Story = StoryObj<typeof BaseInput>;
export default meta;
export const DefaultInput: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      return { args };
    },

    args: { variant: "primary", theme: ThemeType.LIGHT },

    template: `<BaseInput></BaseInput>`,
  }),
};
