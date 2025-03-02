<template>
  <Teleport to="body">
    <TransitionGroup name="toaster">
      <div class="toasters-wrap" v-for="toast in toasts" :key="toast.id">
        <div class="toast">
          <h3 class="toast__header">
            {{ toast.title }}
          </h3>
          <p class="toast__content">
            {{ toast.message }}
          </p>
          <div class="toast__progress">
            <progress
              id="progress"
              :value="toast.timeout"
              max="600"
              aria-label="Загрузка
            файла"
            ></progress>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup lang="ts">
import { useToasts } from "../../composables/useToasts";

const { getToasts } = useToasts();
const toasts = getToasts();
console.log(toasts.value, "toasts");
</script>

<style scoped></style>
