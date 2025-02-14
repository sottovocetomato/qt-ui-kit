import type { Meta, StoryFn } from "@storybook/vue3";
import BaseButton from "../../components/button/BaseButton.vue";

export enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

export const ThemeDecorator = (theme: ThemeType) => () => ({
  template: `<div id="theme-decorator" class="${theme}"><story /></div>`,
});
