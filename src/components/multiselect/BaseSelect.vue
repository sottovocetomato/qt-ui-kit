<template>
  <div class="multiple-select" ref="multiselect" @click.self="toggleList">
    <input
      v-if="isInputShown"
      :class="[errorMessage ? 'error' : '', variant ? `${variant}` : '']"
      :value="search"
      type="text"
      ref="multiselectInput"
      id="multiple-select__input"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onSearch"
      @click.self="toggleList"
    />

    <span
      class="multiple-select__selected"
      v-if="isSelectedShown"
      @click="toggleList"
    >
      {{ optionsText }}
    </span>
    <label for="multiple-select__input" v-if="label">{{ label }}</label>
    <slot name="select-icon" v-if="search" @click="clearSearch">
      <div class="multiple-select__select"></div>
    </slot>
    <slot name="clear-icon" v-if="!search" @click="toggleList">
      <div class="multiple-select__clear"></div>
    </slot>
    <span v-if="errorMessage" class="input-group-error__message">
      {{ errorMessage }}
    </span>
    <div class="multiple-select__content-wrap" v-show="showList">
      <ul class="multiple-select__content-list">
        <li
          v-for="opt in filteredOptions"
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
import { computed, onMounted, ref, useTemplateRef, watch } from "vue";
import { useClickOutside } from "../../composables/useClickOutside";

interface MultipleSelectProps {
  id?: string;
  name?: string;
  disabled?: boolean;
  options?: [];
  customClass?: string;
  variant?: "square" | "oval";
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
  variant = "square",
} = defineProps<MultipleSelectProps>();

const showList = ref(false);
const search = ref("");

function normalizeStr(str) {
  return String(str).toLowerCase().trim();
}

function clearSearch() {
  search.value = "";
}
function onSearch(e) {
  if (!e || !e.target) return;
  search.value = e?.target?.value;
}

const optionsText = ref([]);

const filteredOptions = computed(() => {
  const searchStr = search.value || "";
  const fo = options.filter((opt) =>
    normalizeStr(opt.text).startsWith(searchStr)
  );
  return fo;
});

const isInputShown = computed(() => {
  return showList.value || (!showList.value && !optionsText.value.length);
});

const isSelectedShown = computed(() => {
  return !showList.value && optionsText.value.length && !search.value;
});

useClickOutside(multiselect, toggleList);

function toggleList(e) {
  if (!multiselect.value) return;
  if (!showList.value && !e.composedPath().includes(multiselect.value)) return;
  console.log("toggling");
  multiselect.value.classList.toggle("list-open");
  showList.value = !showList.value;
}

function onOptionSelect(opt, e) {
  if (multiple) {
    e.target.classList.toggle("selected");
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
    toggleList(e);
  }
  clearSearch();
}

const { value, errorMessage } = useField(() => name);
watch(value, (newVal) => {
  if (!newVal) {
    optionsText.value = [];
  }
});
</script>

<style scoped></style>
