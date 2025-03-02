import { ref } from "vue";
import type { Ref } from "vue";
import generateUID from "../helpers/uuid";

interface Toasts {
  [key: number]: {
    title: string;
    message: string;
    variant: "primary" | "danger" | "warning";
    id: number | string;
    timeout: number;
    timeoutId: number;
  };
}

const toasts = ref<Toasts>([]);

export const useToasts = (timeout = 600) => {
  function addToast({ title = "", message = "", variant = "primary" }) {
    const id = generateUID();
    const showTimeout = ref(timeout);
    const toast = {
      title,
      message,
      variant,
      timeout: showTimeout,
      id,
      timeoutId: setToasterVisibilityInterval(showTimeout, id),
    };
    toasts.value.push(toast);
  }

  function getToasts() {
    return toasts;
  }

  function setToasterVisibilityInterval(timeout, id) {
    const timeoutId = setInterval(() => {
      if (timeout.value > 0) {
        timeout.value--;
      } else {
        clearInterval(timeoutId);
        toasts.value = toasts.value.filter((t) => t.id !== id);
        console.log(toasts.value, "toasts.value after removal of toast");
      }
    }, 60);
    return timeoutId;
  }

  return { addToast, getToasts };
};
