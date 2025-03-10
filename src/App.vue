<template>
  <Suspense>
    <ThemesLayout>
      <UiKit />
    </ThemesLayout>
  </Suspense>
</template>
<script setup lang="ts">
import ThemesLayout from "./components/layouts/ThemesLayout.vue";
import UiKit from "./components/UiKit.vue";
import { useTheme } from "./composables/useTheme";
const { initTheme } = useTheme();
initTheme("body");
</script>
<style scoped></style>
