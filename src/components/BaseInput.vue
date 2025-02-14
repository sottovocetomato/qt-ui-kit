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

<script setup>
import { useField } from "vee-validate";

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
} = defineProps({
  type: String,
  name: String,
  disabled: Boolean,
  placeholder: String,
  min: [String, Number],
  max: [String, Number],
  maxlength: String,
  minlength: String,
  customClass: String,
  mask: String,
  label: String,
  modelValue: [String, Number, Object],
});

const { value, errorMessage } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
