# QuietTomato UI 

Simple UI-kit that uses vee-validate and maska packages.

![ui_kit_1](https://github.com/user-attachments/assets/47e94de3-c1a1-4b60-938e-dbf595f72cf0)
![ui_kit_2](https://github.com/user-attachments/assets/a1713656-bc93-45ff-8b0a-c6e2b833ba1f)
![ui_kit_3](https://github.com/user-attachments/assets/3cc1894d-51c8-409a-ba78-962b31bf1715)
![ui_kit_4](https://github.com/user-attachments/assets/6a486492-d2c3-44a6-9df5-c0aaddd60da4)



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
    import {
    BaseInput,
    BaseButton,
    useToasts,
    useTheme,
    BaseToaster,
} from "quiettomato-ui";
    const { addToast } = useToasts();
    const { initTheme, changeTheme } = useTheme();
    initTheme("body");
    function addToasts() {
        addToast({ title: "Hello", message: "How are you?", variant: "warning" });
    }
</script>
```

template:

```vue
<template>
  <div class="container">
    <BaseToaster />
    <BaseInput shape="black"></BaseInput>
    <BaseButton @click="addToasts"> Add Toast! </BaseButton>
    <BaseButton @click="changeTheme"> Change Theme </BaseButton>
  </div>
</template>
```
