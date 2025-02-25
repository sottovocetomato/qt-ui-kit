import type { Meta, StoryObj } from "@storybook/vue3";

import BaseCheckbox from "./BaseCheckbox.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";

const meta: Meta<typeof BaseCheckbox> = {
  component: BaseCheckbox,
  argTypes: {
    name: { control: { type: "text" } },
    type: { control: { type: "radio" }, options: ["number", "text"] },
    variant: { control: { type: "radio" }, options: ["square", "oval"] },
    disabled: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
    customClass: { control: { type: "text" } },
  },
};

type Story = StoryObj<typeof BaseCheckbox>;
export default meta;
export const DefaultCheckbox: Story = {
  render: (args) => ({
    components: { BaseCheckbox },
    setup() {
      return { args };
    },

    template: `<BaseCheckbox v-bind="args" ></BaseCheckbox>`,
  }),
  args: {
    variant: "square",
    theme: ThemeType.LIGHT,
  },
};

export const DefaultCheckboxDarkTheme = {
  ...DefaultCheckbox,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
export const ValidationErrorInput: Story = {
  render: (args) => ({
    components: { BaseCheckbox },
    setup() {
      const { setFieldError, errors } = useForm({
        initialValues: {
          input: "",
        },
      });
      onMounted(() => setFieldError("input", "This field cannot be empty!"));

      return { args, setFieldError, errors };
    },

    template: `<BaseCheckbox v-bind="args" name="input"></BaseCheckbox>`,
  }),
  args: {
    variant: "primary",
    theme: ThemeType.LIGHT,
  },
};
