<template>
  <div class="container">
    <BaseToaster />
    <!--    <BaseButton />-->
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./button/BaseButton.vue";
import BaseToaster from "./toaster/BaseToaster.vue";
import { useToasts } from "../composables/useToasts";

const { addToast } = useToasts();

addToast({ title: "Hello", message: "Goodbye" });
</script>

<style scoped></style>
