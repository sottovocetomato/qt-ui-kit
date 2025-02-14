<template>
  <div :class="['main-wrap', currentTheme]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentTheme = ref("light");
</script>

<style scoped></style>
