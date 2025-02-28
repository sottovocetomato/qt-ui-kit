import type { Meta, StoryObj } from "@storybook/vue3";

import BaseModal from "./BaseModal.vue";
import BaseButton from "../button/BaseButton.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import { onMounted } from "vue";
import { useForm } from "vee-validate";
import { PrimaryButton } from "../button/BaseButton.stories";
import useModal from "../../composables/useModal";
import type { ModalsList } from "../../composables/useModal";

const meta: Meta<typeof BaseModal> = {
  component: BaseModal,
  argTypes: {
    teleport: { control: { type: "text" } },
  },
};

type Story = StoryObj<typeof BaseModal>;
export default meta;
export const DefaultModal: Story = {
  render: (args) => ({
    components: { BaseModal, BaseButton },
    setup() {
      const {
        modalsList: { basicModal },
      }: { modalsList: ModalsList } = useModal(["basicModal"]);
      return { args, basicModal };
    },

    template: `
      <div>
        <BaseButton @click="basicModal.toggleModal">Open Modal</BaseButton>
        <BaseModal :show="basicModal.isOpen.value" v-bind="args" @close="basicModal.toggleModal"></BaseModal>
      </div>`,
  }),
  args: {
    variant: "square",
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};

// export const DefaultInputDarkTheme = {
//   ...DefaultInput,
//   decorators: [ThemeDecorator(ThemeType.DARK)],
// };
//
// export const ValidationErrorInput: Story = {
//   render: (args) => ({
//     components: { BaseInput },
//     setup() {
//       const { setFieldError, errors } = useForm({
//         initialValues: {
//           input: "",
//         },
//       });
//       onMounted(() => setFieldError("input", "This field cannot be empty!"));
//
//       return { args, setFieldError, errors };
//     },
//
//     template: `<BaseInput v-bind="args" name="input"></BaseInput>`,
//   }),
//   args: {
//     variant: "primary",
//   },
//   decorators: [ThemeDecorator(ThemeType.LIGHT)],
// };
