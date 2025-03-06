import type { Meta, StoryObj } from "@storybook/vue3";

import BaseCard from "./BaseCard.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import useModal from "../../composables/useModal";
import type { ModalsList } from "../../composables/useModal";
import { useToasts } from "../../composables/useToasts";
import { nextTick, onMounted, ref } from "vue";

const meta: Meta<typeof BaseCard> = {
  component: BaseCard,
  argTypes: {},
};

type Story = StoryObj<typeof BaseCard>;
export default meta;
export const DefaultCard: Story = {
  render: (args) => ({
    components: { BaseCard },
    setup() {
      return { args };
    },

    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
      <BaseCard ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum ducimus ex iste, perspiciatis quasi sit tenetur vero vitae voluptates.</p></BaseCard>
      <BaseCard ><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur earum quo. A aspernatur, aut blanditiis consequatur dolore illum odio perferendis provident repudiandae tempore! Ab illum, repellendus. Amet consequatur deserunt distinctio ea illum impedit incidunt, iusto labore laboriosam minus necessitatibus non officiis sed? A libero natus possimus tenetur vel vero?</p></BaseCard>
      <BaseCard direction="vertical"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorum ducimus ex iste, perspiciatis quasi sit tenetur vero vitae voluptates.</p></BaseCard>`,
  }),
  args: {
    variant: "square",
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};

export const DefaultCardDarkTheme = {
  ...DefaultCard,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
