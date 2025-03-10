import "../style.css";

import rippleEffect from "../directives/ripple";
import setDefaultValidationRules from "../config/vee-validate/validation";

import BaseInput from "./input/BaseInput.vue";
import BaseModal from "./modal/BaseModal.vue";
import BaseButton from "./button/BaseButton.vue";
import BaseSelect from "./multiselect/BaseSelect.vue";
import BaseCard from "./card/BaseCard.vue";
import BaseCheckbox from "./checkbox/BaseCheckbox.vue";
import BaseRadio from "./radio/BaseRadio.vue";
import BaseRange from "./range/BaseRange.vue";
import BaseTable from "./table/BaseTable.vue";
import BaseToaster from "./toaster/BaseToaster.vue";
import { useToasts } from "../composables/useToasts";
import useModal from "../composables/useModal";
import { useClickOutside } from "../composables/useClickOutside";
import { useTheme } from "../composables/useTheme";

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
  setDefaultValidationRules,
  rippleEffect,
  useTheme,
  useClickOutside,
  useModal,
  useToasts,
};
