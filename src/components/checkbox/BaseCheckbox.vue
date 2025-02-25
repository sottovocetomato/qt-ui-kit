<template>
  <div class="checkbox-wrap">
    <template v-if="!group">
      <input
        :class="[customClass || '', errorMessage ? 'error' : '']"
        v-model="value"
        type="checkbox"
        :disabled="disabled"
      />
      <label v-if="label">{{ label }}</label>
    </template>
    <div class="checkbox-group" v-else>
      <div v-for="(checkbox, ind) in checkboxGroup">
        <input
          :class="[customClass || '', errorMessage ? 'error' : '']"
          v-model="value"
          :id="`${checkbox.label}-${ind}`"
          type="checkbox"
          :disabled="disabled"
        />
        <label :for="`${checkbox.label}-${ind}`" v-if="label">{{
          label
        }}</label>
      </div>
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
  label = "Label",
} = defineProps<CheckboxProps>();

const { value, errorMessage, setErrors } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
