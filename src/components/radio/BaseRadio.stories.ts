import type { Meta, StoryObj } from "@storybook/vue3";

import BaseRadio from "./BaseRadio.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";

const meta: Meta<typeof BaseRadio> = {
  component: BaseRadio,
  argTypes: {
    name: { control: { type: "text" } },
    disabled: { control: { type: "boolean" } },
    label: { control: { type: "text" } },
    customClass: { control: { type: "text" } },
  },
};

type Story = StoryObj<typeof BaseRadio>;
export default meta;
export const DefaultRadio: Story = {
  render: (args) => ({
    components: { BaseRadio },
    setup() {
      const radioArr = [
        { label: "Male", value: "m" },
        { label: "Female", value: "f" },
      ];
      return { args, radioArr };
    },

    template: `<div style="display: flex; flex-direction: column; gap: 12px;">
                  <BaseRadio v-bind="args" size="md" :options="radioArr"></BaseRadio>
                  <BaseRadio v-bind="args" size="lg" :options="radioArr"></BaseRadio> 
                  <BaseRadio v-bind="args" size="xl" :options="radioArr"></BaseRadio> 
                </div>
          `,
  }),
  args: {
    theme: ThemeType.LIGHT,
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};

export const DefaultRadioDarkTheme = {
  ...DefaultRadio,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
export const ValidationErrorInput: Story = {
  render: (args) => ({
    components: { BaseRadio },
    setup() {
      const { setFieldError, errors } = useForm({
        initialValues: {
          radio: "",
        },
      });
      onMounted(() => setFieldError("radio", "This field cannot be empty!"));

      return { args, setFieldError, errors };
    },

    template: `<BaseRadio v-bind="args" name="checkbox"></BaseRadio>`,
  }),
  args: {
    theme: ThemeType.LIGHT,
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};
