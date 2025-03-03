<template>
  <div class="container">
    <BaseToaster />
    <BaseButton @click="addToasts" />
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
