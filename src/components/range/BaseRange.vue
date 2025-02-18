<template>
  <div v-if="type === 'date'" class="range-inputs">
    <span class="range-inputs__label" v-if="label">{{ label }}</span>
    <div class="range-inputs__inputs">
      <BaseInput
        label="c"
        :name="nameFrom || 'dateStart'"
        type="date"
        :max="dateEnd"
        :key="rangeStartKey"
        :variant="variant"
        :disabled="disabled"
        v-model="dateStart"
      />
      <BaseInput
        :name="nameTo || 'dateEnd'"
        label="по"
        type="date"
        :min="dateStart"
        :variant="variant"
        :key="rangeEndKey"
        :disabled="disabled"
        v-model="dateEnd"
      />
    </div>
  </div>
  <div class="range-inputs" v-else>
    <span class="range-inputs__label" v-if="label">{{ label }}</span>
    <div class="range-inputs__inputs">
      <BaseInput
        label="от"
        :name="nameFrom || 'rangeStart'"
        type="number"
        :key="rangeStartKey"
        :modelValue="rangeStart"
        :variant="variant"
        :disabled="disabled"
        @update:modelValue="onRangeStartUpdate"
      />
      <BaseInput
        :name="nameTo || 'rangeEnd'"
        label="до"
        type="number"
        :min="rangeStart"
        :key="rangeEndKey"
        :modelValue="rangeEnd"
        :variant="variant"
        :disabled="disabled"
        @update:modelValue="onRangeEndUpdate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/input/BaseInput.vue";
import { nextTick, ref } from "vue";
import debounce from "lodash.debounce";

interface RangeInputProps {
  nameFrom?: string;
  nameTo?: string;
  type?: "date" | "numbers";
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  customClass?: string;
  variant?: "square" | "oval";
  label?: string;
}

const dateStart = ref(null);
const dateEnd = ref(null);

const rangeStart = ref(null);
const rangeEnd = ref(null);
const rangeStartKey = ref(0);
const rangeEndKey = ref(0);

const {
  nameFrom = "",
  nameTo = "",
  type = "numbers",
  disabled = false,
  customClass = "",
  variant = "square",
  placeholder = "",

  label = "",
} = defineProps<RangeInputProps>();

const onRangeEndUpdate = debounce((e) => {
  if (e < rangeStart.value) {
    rangeEnd.value = rangeStart.value;
    nextTick(() => {
      rangeEndKey.value++;
    });
    return;
  }
  rangeEnd.value = e;
}, 500);
const onRangeStartUpdate = debounce((e) => {
  if (e > rangeEnd.value && rangeEnd.value > 0) {
    rangeStart.value = rangeEnd.value;
    nextTick(() => {
      rangeStartKey.value++;
    });
    return;
  }
  rangeStart.value = e;
}, 500);
</script>

<style scoped></style>
