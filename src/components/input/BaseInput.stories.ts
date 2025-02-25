import type { Meta, StoryObj } from "@storybook/vue3";

import BaseInput from "./BaseInput.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";
import { PrimaryButton } from "../button/BaseButton.stories";

const meta: Meta<typeof BaseInput> = {
  component: BaseInput,
  argTypes: {
    name: { control: { type: "text" } },
    type: { control: { type: "radio" }, options: ["number", "text"] },
    variant: { control: { type: "radio" }, options: ["square", "oval"] },
    disabled: { control: { type: "boolean" } },
    placeholder: { control: { type: "text" } },
    min: { control: { type: "number" } },
    max: { control: { type: "number" } },
    maxlength: { control: { type: "number" } },
    minlength: { control: { type: "number" } },
    mask: { control: { type: "text" } },
    label: { control: { type: "text" } },
    customClass: { control: { type: "text" } },
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

    template: `<BaseInput v-bind="args" ></BaseInput>`,
  }),
  args: {
    variant: "square",
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};

export const DefaultInputDarkTheme = {
  ...DefaultInput,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};

export const ValidationErrorInput: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      const { setFieldError, errors } = useForm({
        initialValues: {
          input: "",
        },
      });
      onMounted(() => setFieldError("input", "This field cannot be empty!"));

      return { args, setFieldError, errors };
    },

    template: `<BaseInput v-bind="args" name="input"></BaseInput>`,
  }),
  args: {
    variant: "primary",
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};
