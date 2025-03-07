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
      const radioArr2 = [
        { label: "Student", value: "st" },
        { label: "Worker", value: "wk" },
      ];
      const radioArr3 = [
        { label: "Marathon", value: "mrth" },
        { label: "Sprint", value: "spr" },
      ];
      return { args, radioArr, radioArr2, radioArr3 };
    },

    template: `<div style="display: flex; flex-direction: column; gap: 20px;">
                  <BaseRadio v-bind="args" size="md" :options="radioArr"></BaseRadio>
                  <BaseRadio v-bind="args" size="lg" :options="radioArr2"></BaseRadio> 
                  <BaseRadio v-bind="args" size="xl" :options="radioArr3"></BaseRadio> 
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
      const radioArr = [
        { label: "Male", value: "m" },
        { label: "Female", value: "f" },
      ];
      const { setFieldError, errors } = useForm({
        initialValues: {
          radio: "",
        },
      });
      onMounted(() => setFieldError("radio", "This field cannot be empty!"));

      return { args, setFieldError, errors, radioArr };
    },

    template: `<BaseRadio v-bind="args" name="radio" :options="radioArr"></BaseRadio>`,
  }),
  args: {
    theme: ThemeType.LIGHT,
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};
