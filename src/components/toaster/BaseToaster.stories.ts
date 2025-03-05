import type { Meta, StoryObj } from "@storybook/vue3";

import BaseToaster from "./BaseToaster.vue";
import BaseButton from "../button/BaseButton.vue";
import "../../assets/styles/main.css";

import {
  ThemeDecorator,
  ThemeType,
} from "../../config/storybook/ThemeDecorator";
import useModal from "../../composables/useModal";
import type { ModalsList } from "../../composables/useModal";
import { useToasts } from "../../composables/useToasts";
import { nextTick, onMounted, ref } from "vue";

const meta: Meta<typeof BaseToaster> = {
  component: BaseToaster,
  argTypes: {},
};

type Story = StoryObj<typeof BaseToaster>;
export default meta;
export const DefaultToasters: Story = {
  render: (args) => ({
    components: { BaseToaster, BaseButton },
    setup() {
      const { addToast } = useToasts();
      const loaded = ref(false);
      function addNewToast(variant) {
        addToast({
          title: "Hello Again",
          message:
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae corporis eaque nesciunt officia quas reiciendis sapiente vel vitae!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae corporis eaque nesciunt officia quas reiciendis sapiente vel vitae!",
          variant,
        });
      }
      onMounted(() => {
        loaded.value = true;
      });
      return { args, addNewToast, loaded };
    },

    template: `
      <div>
      <div style="display: flex; flex-direction: row; gap: 12px;">
        <BaseButton @click="addNewToast('primary')">Add primary toast</BaseButton>
        <BaseButton @click="addNewToast('warning')" variant="warning">Add warning toast</BaseButton>
        <BaseButton @click="addNewToast('danger')" variant="danger">Add danger toast</BaseButton>
      </div>
        <BaseToaster teleport="#theme-decorator" v-if="loaded"/>
      </div>`,
  }),
  args: {
    variant: "square",
  },
  decorators: [ThemeDecorator(ThemeType.LIGHT)],
};

export const DefaultToastersDarkTheme = {
  ...DefaultToasters,
  decorators: [ThemeDecorator(ThemeType.DARK)],
};
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
