<script setup lang="ts">
import ThemesLayout from "./components/layouts/ThemesLayout.vue";
import UiKit from "./components/UiKit.vue";
</script>

<template>
  <Suspense>
    <ThemesLayout>
      <UiKit />
    </ThemesLayout>
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
