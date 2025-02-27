import type { Meta, StoryObj } from "@storybook/vue3";

import BaseButton from "./BaseButton.vue";
import "../../assets/styles/main.css";
import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  argTypes: {
    disabled: { control: { type: "boolean" } },
    size: { controls: { type: "radio" }, options: ["sm", "md", "lg"] },
    customClass: { control: "text" },
  },
};
export default meta;
type Story = StoryObj<typeof BaseButton>;
console.log(ThemeType.LIGHT);
export const PrimaryButton: Story = {
  render: (args) => ({
    components: { BaseButton },
    setup() {
      return { args };
    },
    args: { variant: "primary", theme: ThemeType.LIGHT },

    template: `
      <div style="display: flex; flex-direction: row; gap: 12px;">
        <BaseButton v-bind="args" size="sm">Button</BaseButton>
        <BaseButton v-bind="args" size="md" >Button</BaseButton>
        <BaseButton v-bind="args" size="lg">Button</BaseButton>
      </div>
    `,
  }),
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};

export const SecondaryButton = {
  ...PrimaryButton,
  args: { variant: "secondary" },
};

export const PrimaryButtonDarkTheme = {
  ...PrimaryButton,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
export const SecondaryButtonDarkTheme = {
  ...PrimaryButton,
  args: { variant: "secondary" },
  decorators: [ThemeDecorator(ThemeType.DARK)],
};

export const DangerButton = {
  ...PrimaryButton,
  args: { variant: "danger" },
};

export const DangerButtonDarkTheme = {
  ...DangerButton,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};

export const WarningButton = {
  ...PrimaryButton,
  args: { variant: "warning" },
};

export const WarningButtonDarkTheme = {
  ...WarningButton,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};

// export const SecondaryButton = Template.bind({});
// SecondaryButton.args = { color: "secondary" };
