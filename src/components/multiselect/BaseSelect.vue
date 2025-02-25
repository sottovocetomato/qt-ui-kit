<template>
  <div
    ref="multiselect"
    @click.self="toggleList"
    :class="[
      'multiple-select',
      errorMessage ? 'error' : '',
      variant ? `${variant}` : '',
    ]"
  >
    <input
      v-if="isInputShown"
      :value="search"
      type="text"
      ref="multiselectInput"
      id="multiple-select__input"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onSearch"
      @click.self="toggleList"
      @keydown="(e) => toggleList(e, { searching: true })"
    />

    <span
      class="multiple-select__selected"
      v-if="isSelectedShown"
      @click="toggleList"
    >
      {{ selectedText }}
    </span>
    <label for="multiple-select__input" v-if="label">{{ label }}</label>
    <slot name="select-icon" v-if="!search">
      <div class="multiple-select__select" @click="toggleList"></div>
    </slot>
    <slot name="clear-icon" v-if="search">
      <div class="multiple-select__clear" @click="clearSearch"></div>
    </slot>
    <span v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </span>
    <Transition name="multiple-select_list-fade">
      <div class="multiple-select__content-wrap" v-show="showList">
        <ul class="multiple-select__content-list" ref="selectContentList">
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
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";
import { computed, nextTick, onMounted, ref, useTemplateRef, watch } from "vue";
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
const selectContentList = useTemplateRef("selectContentList");
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
  console.log("clear");
  search.value = "";
}
function onSearch(e) {
  if (!e || !e.target) return;
  search.value = e?.target?.value;
}

const selectedText = ref("");

const filteredOptions = computed(() => {
  const searchStr = search.value || "";
  const fo = options.filter((opt) =>
    normalizeStr(opt.text).startsWith(searchStr)
  );
  return fo;
});

const isInputShown = computed(() => {
  return showList.value || (!showList.value && !selectedText.value);
});

const isSelectedShown = computed(() => {
  return !showList.value && selectedText.value && !search.value;
});

useClickOutside(multiselect, toggleList);

function toggleList(e, { searching } = {}) {
  if (searching && showList.value) return;
  if (!multiselect.value) return;
  if (!showList.value && !e.composedPath().includes(multiselect.value)) return;
  console.log("toggling");

  multiselect.value.classList.toggle("list-open");
  showList.value = !showList.value;
  nextTick(() => {
    if (showList.value) {
      multiselectInput.value.focus();
    }
  });
}

function editMultipleSelectedText(opt) {
  selectedText.value = selectedText.value.split(", ").filter((e) => e);
  if (selectedText.value.includes(opt.text)) {
    selectedText.value = selectedText.value.filter((text) => text !== opt.text);
  } else {
    selectedText.value.push(opt.text);
  }
  selectedText.value = selectedText.value.join(", ");
}

function editMultipleValue(opt) {
  if (!value.value) {
    value.value = [];
  }
  if (value.value?.includes(opt.value)) {
    value.value = value.value.filter((value) => value !== opt.value);
  } else {
    value.value.push(opt.value);
  }
}

function onOptionSelect(opt, e) {
  if (multiple) {
    e.target.classList.toggle("selected");
    editMultipleValue(opt);
    editMultipleSelectedText(opt);
  } else {
    selectContentList.value
      .querySelectorAll(".multiple-select__content-list__option")
      ?.forEach((el) => {
        if (el.classList.contains("selected")) {
          el.classList.remove("selected");
        }
      });
    e.target.classList.toggle("selected");
    value.value = opt.value;
    selectedText.value = opt.text;
    toggleList(e);
  }
  clearSearch();
}

const { value, errorMessage } = useField(() => name);
watch(value, (newVal) => {
  if (!newVal) {
    selectedText.value = [];
  }
});
</script>

<style scoped></style>
