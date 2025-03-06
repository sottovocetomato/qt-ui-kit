<template>
  <div :class="['card', variant, direction, customClass]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface CardProps {
  variant: "danger" | "warning" | "primary";
  direction: "vertical" | "horizontal";
  customClass: string;
}

const {
  variant = "primary",
  direction = "horizontal",
  customClass = "",
} = defineProps<CardProps>();
</script>

<style scoped></style>
