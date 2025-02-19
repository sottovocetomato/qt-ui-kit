import type { Meta, StoryObj } from "@storybook/vue3";

import BaseSelect from "./BaseSelect.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";

const meta: Meta<typeof BaseSelect> = {
  component: BaseSelect,
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

type Story = StoryObj<typeof BaseSelect>;
export default meta;
export const DefaultInput: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      return { args };
    },

    template: `<BaseSelect v-bind="args" ></BaseSelect>`,
  }),
  args: {
    variant: "square",
    theme: ThemeType.LIGHT,
    options: [
      { text: "Производственная площадь", value: 1 },
      { text: "Торговое", value: 2 },
      { text: "Офисное", value: 3 },
      { text: "Спортивное", value: 4 },
      { text: "Прекрасная площадь 1х1м2", value: 5 },
    ],
  },
};

export const ValidationErrorInput: Story = {
  render: (args) => ({
    components: { BaseSelect },
    setup() {
      const { setFieldError, errors } = useForm({
        initialValues: {
          multiselect: "",
        },
      });
      onMounted(() =>
        setFieldError("multiselect", "This field cannot be empty!")
      );

      return { args, setFieldError, errors };
    },

    template: `<BaseSelect v-bind="args" name="input"></BaseSelect>`,
  }),
  args: {
    variant: "primary",
    theme: ThemeType.LIGHT,
  },
};
