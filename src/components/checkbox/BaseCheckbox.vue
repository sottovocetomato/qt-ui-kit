<template>
  <div class="checkbox-wrap">
    <template v-if="!group">
      <label
        :class="[
          customClass || '',
          errorMessage ? 'error' : '',
          size ? `checkbox-${size}` : '',
        ]"
      >
        <input
          v-model="value"
          type="checkbox"
          :disabled="disabled"
          :class="[errorMessage ? 'error' : '']"
        />
        <span v-if="label">{{ label }}</span></label
      >
    </template>
    <div class="checkbox-group" v-else>
      <label
        v-for="(checkbox, ind) in checkboxGroup"
        :for="`${checkbox.label}-${ind}`"
        v-if="label"
        :class="[
          customClass || '',
          errorMessage ? 'error' : '',
          size ? `checkbox-${size}` : '',
        ]"
      >
        <input
          :class="[errorMessage ? 'error' : '']"
          v-model="value"
          :id="`${checkbox.label}-${ind}`"
          type="checkbox"
          :disabled="disabled"
        />
        <span v-if="label"> {{ label }}</span></label
      >
    </div>
    <span v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { defineProps } from "vue";

interface CheckboxProps {
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
  size?: "md" | "lg" | "xl";
  modelValue?: string | object;
  group?: boolean;
  checkboxGroup?: [];
}

const {
  name = "",
  disabled = false,
  customClass = "",
  placeholder = "placeholder",
  min = "",
  max = "",
  maxlength = "255",
  minlength = "",
  mask = "",
  checkboxGroup = [],
  group = false,
  size = "md",
  label = "Label",
} = defineProps<CheckboxProps>();

const { value, errorMessage, setErrors } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
