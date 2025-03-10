# QuietTomato UI 

Simple UI-kit that uses vee-validate and maska packages.

# Features

- Toasts
- Modal window
- Light and dark themes
- Button ripple effect as vue directive

# Installation

```
npm i quiettomato-ui
```


# Usage

import components and needed directive/composables:

```javascript
<script setup lang="ts">
    import { BaseInput, BaseButton, useToasts } from "quiettomato-ui";
    const { addToast } = useToasts();
    function addToasts() {
        addToast({ title: "Hello", message: "How are you?", variant: "warning" });
    }
</script>
```

template:

```vue
<template>
  <div class="container">
    <BaseInput shape="black"></BaseInput>
    <BaseButton @click="addToasts"> Add Toast! </BaseButton>
  </div>
</template>
```