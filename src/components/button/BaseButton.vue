<template>
  <button
    :class="[
      'btn',
      size ? `btn-${size}` : '',
      variant ? `btn-${variant}` : '',
      customClass,
    ]"
    :disabled="disabled"
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface ButtonProps {
  type: string;
  customClass: string;
  size: "sm" | "md" | "lg";
  variant: "primary" | "secondary" | "danger";
  disabled: boolean;
}

const {
  disabled = false,
  type = "button",
  size = "md",
  customClass = "",
  variant = "primary",
} = defineProps<ButtonProps>();
</script>

<style scoped></style>
