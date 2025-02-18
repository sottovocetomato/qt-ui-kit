import type { Meta, StoryObj } from "@storybook/vue3";

import BaseRange from "./BaseRange.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";

const meta: Meta<typeof BaseRange> = {
  component: BaseRange,
  argTypes: {
    name: { control: { type: "text" } },
    type: { control: { type: "radio" }, options: ["numbers", "date"] },
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

type Story = StoryObj<typeof BaseRange>;
export default meta;
export const DefaultRangeInputs: Story = {
  render: (args) => ({
    components: { BaseRange },
    setup() {
      return { args };
    },

    template: `<BaseRange v-bind="args" ></BaseRange>`,
  }),
  args: {
    variant: "square",
    theme: ThemeType.LIGHT,
  },
};

export const ValidationNumberRangeInputsError: Story = {
  render: (args) => ({
    components: { BaseRange },
    setup() {
      const { setFieldError, errors, setErrors } = useForm({
        initialValues: {
          rangeTo: "",
          rangeFrom: "",
        },
      });
      onMounted(() =>
        setErrors({
          rangeTo: "This field cannot be empty!",
          rangeFrom: "This field cannot be empty!",
        })
      );

      return { args, setFieldError, errors, setErrors };
    },

    template: `<BaseRange v-bind="args" nameTo="rangeTo" nameFrom="rangeFrom"></BaseRange>`,
  }),
  args: {
    variant: "primary",
    theme: ThemeType.LIGHT,
  },
};
