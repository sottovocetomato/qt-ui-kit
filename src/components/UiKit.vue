<template>
  <div class="container">
    <BaseToaster />
    <BaseButton @click="addToasts" style="margin-bottom: 5px"
      >Add Toast</BaseButton
    >
    <BaseButton @click="addToasts" variant="danger" style="margin-bottom: 5px"
      >Add Toast</BaseButton
    >
    <BaseButton @click="addToasts" variant="warning">Add Toast</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./button/BaseButton.vue";
import BaseToaster from "./toaster/BaseToaster.vue";
import { useToasts } from "../composables/useToasts";

const { addToast } = useToasts();
function addToasts() {
  addToast({ title: "Hello", message: "Goodbye", variant: "warning" });
}
addToast({ title: "Hello", message: "Goodbye", variant: "warning" });
addToast({
  title: "Hello Again",
  message:
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae corporis eaque nesciunt officia quas reiciendis sapiente vel vitae!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem beatae corporis eaque nesciunt officia quas reiciendis sapiente vel vitae!",
});
</script>

<style scoped></style>
