<template>
  <Teleport :to="teleport">
    <Transition name="modal">
      <div class="modal-wrap">
        <div class="modal__header">
          <slot name="header">
            <h3>This is modal's header!</h3>
          </slot>
        </div>
        <div class="modal__content">
          <slot name="content">
            <p>This is modal's fallback content if no content was provided</p>
          </slot>
        </div>
        <div class="modal__controls">
          <slot name="controls">
            <BaseButton variant="primary" @click="okAction">Ok</BaseButton>
            <BaseButton variant="danger" @click="cancelAction"
              >Cancel</BaseButton
            >
          </slot>
        </div>
        <div class="modal__close" @click="onClose">
          <slot name="close-icon">
            <IconClose />
          </slot>
        </div>
        <div class="modal__backdrop"></div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import BaseButton from "../button/BaseButton.vue";
import IconClose from "../../assets/icons/IconClose.vue";
import useModal from "../../composables/useModal";

interface ModalDialogProps {
  teleport?: string;
}

const emit = defineEmits<{
  confirm: [];
  cancel: [];
  close: [];
}>();
const { teleport = "body" } = defineProps<ModalDialogProps>();

function okAction() {
  emit("confirm");
}
function cancelAction() {
  emit("cancel");
}
function onClose() {
  emit("close");
}
</script>

<style scoped></style>
