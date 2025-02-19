<template>
  <div class="multiple-select" ref="multiselect">
    <input
      :class="[errorMessage ? 'error' : '']"
      :value="optionsText"
      type="text"
      ref="multiselectInput"
      id="multiple-select__input"
      :placeholder="placeholder"
      @click="toggleList"
      autocomplete="off"
      readonly
    />
    <label for="multiple-select__input" v-if="label">{{ label }}</label>
    <span v-if="errorMessage" class="input-group-error__message">
      {{ errorMessage }}
    </span>
    <div class="multiple-select__content-wrap" v-show="showList">
      <ul class="multiple-select__content-list">
        <li
          v-for="opt in options"
          :key="opt.value"
          class="multiple-select__content-list__option"
          @click="onOptionSelect(opt, $event)"
        >
          <p>{{ opt.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { onMounted, ref, useTemplateRef, watch } from "vue";
import { useClickOutside } from "../../composables/useClickOutside";

interface MultipleSelectProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  options?: [];
  customClass?: string;
  placeholder?: string;
  label?: string;
  multiple?: boolean;
  modelValue?: string | number | object | [];
}

const multiselect = useTemplateRef("multiselect");
const multiselectInput = useTemplateRef("multiselectInput");
const model = defineModel();
const {
  id = "select-input",
  name = "",
  options = [],
  customClass = "",
  placeholder = "placeholder",
  label = "Label",
  multiple = false,
  disabled = false,
} = defineProps<MultipleSelectProps>();

const showList = ref(false);

const optionsText = ref([]);

useClickOutside(multiselect, toggleList);

function toggleList(e) {
  if (!multiselect.value) return;
  if (!showList.value && !e.composedPath().includes(multiselectInput.value))
    return;
  multiselect.value.classList.toggle("list-open");
  showList.value = !showList.value;
}

function onOptionSelect(opt, e) {
  if (multiple) {
    multiselect.value.classList.toggle("selected");
    if (Array.isArray(value.value)) {
      if (value.value.includes(opt.value)) {
        value.value = value.value.filter((value) => value !== opt.value);
      } else {
        value.value.push(opt.value);
      }
    } else {
      value.value = [opt.value];
    }
    if (Array.isArray(optionsText.value)) {
      if (optionsText.value.includes(opt.text)) {
        optionsText.value = optionsText.value.filter(
          (text) => text !== opt.text
        );
      } else {
        optionsText.value.push(opt.text);
      }
    } else {
      optionsText.value = [opt.text];
    }
  } else {
    value.value = opt.value;
    optionsText.value = opt.text;
    showList.value = false;
  }
}

const { value, errorMessage } = useField(() => name);
watch(value, (newVal) => {
  if (!newVal) {
    optionsText.value = [];
  }
});
</script>

<style scoped></style>
