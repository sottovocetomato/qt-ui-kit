<template>
  <div class="container">
    <BaseToaster />
    <BaseModal
      :show="basicModal?.isOpen"
      @close="basicModal?.toggleModal"
    ></BaseModal>

    <BaseInput />
    <BaseTextarea />
    <BaseRange />
    <BaseButton @click="addToasts" style="margin-bottom: 5px"
      >Add Toast</BaseButton
    >
    <BaseButton
      variant="danger"
      @click="basicModal?.toggleModal"
      style="margin-bottom: 5px"
      >Open Modal</BaseButton
    >
    <BaseButton @click="changeTheme" variant="warning">Change Theme</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./button/BaseButton.vue";
import BaseToaster from "./toaster/BaseToaster.vue";
import { useToasts } from "../composables/useToasts";
import { useTheme } from "../composables/useTheme";
import BaseInput from "./input/BaseInput.vue";
import BaseTextarea from "./textarea/BaseTextarea.vue";
import BaseRange from "./range/BaseRange.vue";
import useModal from "../composables/useModal";
import BaseModal from "./modal/BaseModal.vue";
const { changeTheme } = useTheme();
const { addToast } = useToasts();

const {
  modalsList: { basicModal },
} = useModal(["basicModal"]);
console.log(basicModal, "basicModal");

function addToasts() {
  addToast({ title: "Hello", message: "Goodbye", variant: "warning" });
}
// addToast({ title: "Hello", message: "Goodbye", variant: "warning" });
// addToast({
//   title: "Hello Again",
//   message:
//     " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae corporis eaque nesciunt officia quas reiciendis sapiente vel vitae!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae corporis eaque nesciunt officia quas reiciendis sapiente vel vitae!",
// });
</script>

<style scoped></style>
