<template>
  <Teleport :to="teleport">
    <Transition name="modal-pop" appear>
      <div class="modal-wrap" v-if="show">
        <div class="modal__header">
          <slot name="header">
            <h2>This is modal's header!</h2>
          </slot>
        </div>
        <div class="modal__content">
          <slot name="content">
            <p>This is modal's fallback content if no content was provided</p>
          </slot>
        </div>
        <div :class="['modal__controls', controlsPosition]">
          <slot name="controls">
            <BaseButton variant="danger" @click="cancelAction"
              >Cancel
            </BaseButton>
            <BaseButton variant="primary" @click="okAction">Ok</BaseButton>
          </slot>
        </div>
        <div class="modal__close" @click="onClose">
          <slot name="close-icon">
            <IconClose />
          </slot>
        </div>
      </div>
    </Transition>
    <Transition name="modal-backdrop-fade" appear>
      <div class="modal__backdrop" @click.self="onClose" v-if="show"></div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import BaseButton from "../button/BaseButton.vue";
import IconClose from "../../assets/icons/IconClose.vue";
import useModal from "../../composables/useModal";

interface ModalDialogProps {
  teleport?: string;
  show: boolean;
  controlsPosition?: "end" | "center" | "start";
}

const emit = defineEmits<{
  confirm: [];
  cancel: [];
  close: [];
}>();
const {
  teleport = "body",
  controlsPosition = "end",
  show = false,
} = defineProps<ModalDialogProps>();

function okAction() {
  emit("confirm");
}
function cancelAction() {
  emit("cancel");
  emit("close");
}
function onClose() {
  emit("close");
}
</script>

<style scoped></style>
