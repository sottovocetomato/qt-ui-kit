<template>
  <div class="form-field">
    <input
      :class="[
        'input-group base-input',
        errorMessage ? 'input-group-error' : '',
      ]"
      v-model.trim="value"
      type="text"
      id="autocomplete-input"
      :placeholder="placeholder"
      @input="onInput"
    />
    <label for="autocomplete-input" v-if="label">{{ label }}</label>
    <span v-if="errorMessage" class="input-group-error__message">
      {{ errorMessage }}
    </span>
    <div class="autocomplete-list" v-if="showList">
      <ul>
        <li
          v-for="org in organizations"
          :key="org.id"
          @click="
            onOrgSelect(
              org.unrestricted_value,
              org?.data?.address?.unrestricted_value
            )
          "
        >
          <p>{{ org.unrestricted_value }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useField } from "vee-validate";
import debounce from "lodash.debounce";
import api from "../../../api/index.js";
import { ref } from "vue";

const emit = defineEmits(["select"]);

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
  label: String,
  placeholder: String,

  multiple: Boolean,
  modelValue: [String, Number, Object, Array],
});

const onInput = debounce(sendToDadata, 600);
const organizations = ref([]);
const showList = ref(false);

function onOrgSelect(val, address) {
  value.value = val;
  showList.value = false;
  emit("select", address);
}

async function sendToDadata() {
  try {
    const query = value.value;
    const data = await api.post(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",
      JSON.stringify({ query }),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token " + "78226a2d974b9837eb74ab3c9e03179f39ba68aa",
        },
      }
    );

    organizations.value = data?.data?.suggestions;
    showList.value = true;
  } catch (e) {
    console.error(e);
  }
}

const { value, errorMessage } = useField(() => name);
</script>

<style scoped></style>
