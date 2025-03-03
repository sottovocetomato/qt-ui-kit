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

export const useToasts = (timeout = 300) => {
  function addToast({ title = "", message = "", variant = "primary" }) {
    const id = generateUID();
    const showTimeout = ref(timeout);
    const isPaused = ref(false);
    const toast = {
      title,
      message,
      variant,
      timeout: showTimeout,
      id,
      paused: isPaused,
      timeoutId: setToasterVisibilityInterval(showTimeout, id, isPaused),
    };
    toasts.value.unshift(toast);
  }

  function getToasts() {
    return toasts;
  }

  function toggleToasterPause(toast) {
    toast.paused = !toast.paused;
  }
  function removeToast(id) {
    toasts.value = toasts.value.filter((t) => t.id !== id);
  }

  function setToasterVisibilityInterval(timeout, id, isPaused) {
    const timeoutId = setInterval(() => {
      if (isPaused.value) {
        return;
      }
      if (timeout.value > 0) {
        timeout.value--;
      } else {
        clearInterval(timeoutId);
        removeToast(id);
      }
    }, 60);
    return timeoutId;
  }

  return { addToast, getToasts, toggleToasterPause, removeToast };
};
