<template>
  <div
    class="table-wrap"
    tabindex="0"
    role="region"
    aria-labelledby="tableCaption_01"
  >
    <table>
      <caption>
        <slot name="caption"></slot>
      </caption>
      <thead>
        <slot name="header-rows"> </slot>
      </thead>
      <tbody>
        <slot name="body-rows"></slot>
      </tbody>
      <tfoot>
        <slot name="footer-rows" />
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
