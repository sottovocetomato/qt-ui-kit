import type { Meta, StoryObj } from "@storybook/vue3";

import BaseTextarea from "./BaseTextarea.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";

const meta: Meta<typeof BaseTextarea> = {
  component: BaseTextarea,
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

type Story = StoryObj<typeof BaseTextarea>;
export default meta;
export const DefaultTextarea: Story = {
  render: (args) => ({
    components: { BaseTextarea },
    setup() {
      return { args };
    },

    template: `<BaseTextarea v-bind="args" ></BaseTextarea>`,
  }),
  args: {
    variant: "square",
    theme: ThemeType.LIGHT,
  },
};

export const ValidationErrorTextarea: Story = {
  render: (args) => ({
    components: { BaseTextarea },
    setup() {
      const { setFieldError, errors } = useForm({
        initialValues: {
          textarea: "",
        },
      });
      onMounted(() => setFieldError("textarea", "This field cannot be empty!"));

      return { args, setFieldError, errors };
    },

    template: `<BaseTextarea v-bind="args" name="textarea"></BaseTextarea>`,
  }),
  args: {
    variant: "primary",
    theme: ThemeType.LIGHT,
  },
};
