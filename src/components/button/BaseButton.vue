<template>
  <button
    :class="[
      'btn',
      size ? `btn-${size}` : '',
      shape ? `btn-${shape}` : '',
      variant ? `btn-${variant}` : '',
      customClass,
    ]"
    v-ripple
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface ButtonProps {
  customClass?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger" | "warning";
  shape?: "oval" | "square";
  disabled?: boolean;
}

const {
  disabled = false,
  size = "md",
  customClass = "",
  variant = "primary",
  shape = "square",
} = defineProps<ButtonProps>();
</script>

<style scoped></style>
