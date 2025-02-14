<template>
  <div class="form-field">
    <input
      :class="[
        'input-group base-select',
        errorMessage ? 'input-group-error' : '',
      ]"
      :value="optionsText"
      type="text"
      id="base-select-input"
      :placeholder="placeholder"
      @click="toggleList"
      autocomplete="off"
      readonly
    />
    <label for="base-select-input" v-if="label">{{ label }}</label>
    <span v-if="errorMessage" class="input-group-error__message">
      {{ errorMessage }}
    </span>
    <div class="base-select-list" v-show="showList">
      <ul>
        <li
          v-for="opt in options"
          :key="opt.value"
          class="base-select-list__option"
          @click="onOptionSelect(opt, $event)"
        >
          <p>{{ opt.text }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import { ref, watch } from "vue";

const model = defineModel();
const {
  id = "select-input",
  name = "",
  options = [],
  customClass = "",
  placeholder = "placeholder",
  label = "",
  multiple = false,
  disabled = false,
} = defineProps({
  id: String,
  name: String,
  disabled: Boolean,
  options: Array,
  customClass: String,
  placeholder: String,
  label: String,
  multiple: Boolean,
  modelValue: [String, Number, Object, Array],
});

const showList = ref(false);

const optionsText = ref([]);

function toggleList(e) {
  if (!e) return;
  e.target.classList.toggle("list-open");
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
