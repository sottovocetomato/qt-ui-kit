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
        v-model="dateStart"
      />
      <BaseInput
        :name="nameTo || 'dateEnd'"
        label="по"
        type="date"
        :min="dateStart"
        :key="rangeEndKey"
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
        @update:modelValue="onRangeStartUpdate"
      />
      <BaseInput
        :name="nameTo || 'rangeEnd'"
        label="до"
        type="number"
        :min="rangeStart"
        :key="rangeEndKey"
        :modelValue="rangeEnd"
        @update:modelValue="onRangeEndUpdate"
      />
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import BaseInput from "@/components/Form/BaseInput.vue";
import { nextTick, ref } from "vue";
import debounce from "lodash.debounce";

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
  placeholder = "",
  label = "",
} = defineProps({
  nameFrom: String,
  nameTo: String,
  type: String,
  name: String,
  disabled: Boolean,
  placeholder: String,
  customClass: String,
  label: String,
});

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
