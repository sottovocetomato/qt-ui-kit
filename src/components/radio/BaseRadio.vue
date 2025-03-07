<template>
  <div class="radio-wrap">
    <div class="radio-group">
      <label
        v-for="(radio, ind) in options"
        :for="`${radio.label}-${ind}`"
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
          :id="`${radio.label}-${ind}`"
          type="radio"
          :disabled="radio?.disabled"
          :value="radio.value || radio.label"
        />
        <span v-if="label"> {{ radio.label }}</span></label
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

interface radioObj {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface RadioProps {
  name?: string;
  customClass?: string;
  label?: string;
  size?: "md" | "lg" | "xl";
  modelValue?: string | object;
  options?: radioObj[];
}

const {
  name = "",
  customClass = "",
  options = [],
  size = "md",
  label = "Label",
} = defineProps<RadioProps>();

const { value, errorMessage } = useField(() => name, undefined, {
  syncVModel: true,
});
</script>

<style scoped></style>
