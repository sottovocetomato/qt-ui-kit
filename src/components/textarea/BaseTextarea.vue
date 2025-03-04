<template>
  <div class="textarea-wrap">
    <textarea
      :class="[
        customClass || '',
        errorMessage ? 'error' : '',
        variant ? `${variant}` : '',
      ]"
      v-model="value"
      :maxlength="maxlength"
      :minlength="minlength"
      :cols="width"
      :rows="height"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <label v-if="label">{{ label }}</label>

    <span v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { defineProps } from "vue";

interface InputProps {
  variant?: "square" | "oval";
  name?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  placeholder?: string;
  maxlength?: string;
  minlength?: string;
  customClass?: string;
  mask?: string;
  label?: string;
  modelValue?: string | object;
}

const {
  name = "",
  disabled = false,
  customClass = "",
  placeholder = "placeholder",
  variant = "square",
  maxlength = "",
  minlength = "",
  label = "Label",
  width = "",
  height = "",
} = defineProps<InputProps>();

const { value, errorMessage } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
