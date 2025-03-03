<template>
  <Teleport to="body">
    <div class="toasters-wrap">
      <TransitionGroup name="toaster">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['toast', `bg-${toast.variant}`]"
          @mouseenter="toggleToasterPause(toast)"
          @mouseleave="toggleToasterPause(toast)"
        >
          <h5 class="toast__header">
            {{ toast.title }}
          </h5>
          <div class="toast__content">
            <p>
              {{ toast.message }}
            </p>
          </div>
          <div class="toast__progress">
            <progress
              id="progress"
              :value="toast.timeout"
              max="300"
              aria-label="Загрузка
            файла"
            ></progress>
          </div>
          <div class="toast__close" @click="removeToast(toast.id)">
            <IconClose />
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToasts } from "../../composables/useToasts";
import IconClose from "../../assets/icons/IconClose.vue";

const { getToasts, toggleToasterPause, removeToast } = useToasts();
const toasts = getToasts();
console.log(toasts.value, "toasts");
</script>

<style scoped></style>
