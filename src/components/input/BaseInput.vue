<template>
  <div class="form-field">
    <input
      :class="[
        customClass || 'input-group base-input',
        errorMessage ? 'input-group-error' : '',
      ]"
      v-model="value"
      :maxlength="maxlength"
      :minlength="minlength"
      :min="min"
      :max="max"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      v-maska
      :data-maska="mask"
    />
    <label v-if="label">{{ label }}</label>

    <span v-if="errorMessage" class="input-group-error__message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { defineProps } from "vue";

interface InputProps {
  type?: string;
  name?: string;
  disabled?: boolean;
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
  min = "",
  max = "",
  maxlength = "255",
  minlength = "",
  mask = "",
  label = "",
} = defineProps<InputProps>();

const { value, errorMessage } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
