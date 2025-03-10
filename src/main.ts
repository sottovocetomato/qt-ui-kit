import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { vMaska } from "maska/vue";
import rippleEffect from "./directives/ripple";
import setDefaultValidationRules from "./config/vee-validate/validation";

import BaseInput from "./components/input/BaseInput.vue";
import BaseModal from "./components/modal/BaseModal.vue";
import BaseButton from "./components/button/BaseButton.vue";
import BaseSelect from "./components/multiselect/BaseSelect.vue";
import BaseCard from "./components/card/BaseCard.vue";
import BaseCheckbox from "./components/checkbox/BaseCheckbox.vue";
import BaseRadio from "./components/radio/BaseRadio.vue";
import BaseRange from "./components/range/BaseRange.vue";
import BaseTable from "./components/table/BaseTable.vue";
import BaseToaster from "./components/toaster/BaseToaster.vue";
import { useToasts } from "./composables/useToasts";
import useModal from "./composables/useModal";
import { useClickOutside } from "./composables/useClickOutside";
import { useTheme } from "./composables/useTheme";

setDefaultValidationRules();
const Vue = createApp(App);
Vue.directive("maska", vMaska);
Vue.directive("ripple", rippleEffect);
Vue.mount("#app");

export {
  BaseInput,
  BaseModal,
  BaseButton,
  BaseSelect,
  BaseCard,
  BaseCheckbox,
  BaseRadio,
  BaseRange,
  BaseTable,
  BaseToaster,
  rippleEffect,
  useTheme,
  useClickOutside,
  useModal,
  useToasts,
};
