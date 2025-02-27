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
    :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface ButtonProps {
  type?: string;
  customClass?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "danger";
  shape: "oval" | "square";
  disabled?: boolean;
}

const {
  disabled = false,
  type = "button",
  size = "md",
  customClass = "",
  variant = "primary",
  shape = "square",
} = defineProps<ButtonProps>();
</script>

<style scoped></style>
