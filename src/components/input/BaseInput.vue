<template>
  <div class="input-wrap">
    <input
      :class="[
        customClass || '',
        errorMessage ? 'error' : '',
        variant ? `${variant}` : '',
      ]"
      v-model="value"
      :maxlength="maxlength"
      :minlength="minlength"
      :min="min"
      :max="max"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      maska
      :data-maska="mask"
    />
    <label v-if="label">{{ label }}</label>
    <span v-if="withCounter" class="character-counter">
      {{ value?.length ?? 0 }}/{{ maxlength }}
    </span>
    <span v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { defineProps } from "vue";

interface InputProps {
  type?: "text" | "number" | "date";
  variant?: "square" | "oval";
  name?: string;
  disabled?: boolean;
  withCounter?: boolean;
  placeholder?: string;
  min?: string | number;
  max?: string | number;
  maxlength?: string;
  minlength?: string;
  customClass?: string;
  mask?: string;
  label?: string;
  modelValue?: string | object;
}

const {
  name = "",
  type = "text",
  disabled = false,
  customClass = "",
  placeholder = "placeholder",
  withCounter = true,
  variant = "square",
  min = "",
  max = "",
  maxlength = "255",
  minlength = "",
  mask = "",
  label = "Label",
} = defineProps<InputProps>();

const { value, errorMessage } = useField<string>(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
