import { ref } from "vue";
import type { Ref } from "vue";
import generateUID from "../helpers/uuid";

interface BaseToastParams {
  title: string;
  message: string;
  variant?: "primary" | "danger" | "warning";
}

interface Toast extends BaseToastParams {
  id: number | string;
  timeout: Ref;
  timeoutId: number;
  paused: Ref | boolean;
}

const toasts = ref<Toast[]>([]);

export const useToasts = (timeout = 300) => {
  function addToast({
    title = "",
    message = "",
    variant = "primary",
  }: BaseToastParams) {
    const id = generateUID();
    const showTimeout = ref(timeout);
    const isPaused = ref(false);
    const toast: Toast = {
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

  function toggleToasterPause(toast: Toast) {
    toast.paused = !toast.paused;
  }
  function removeToast(id: string | number) {
    toasts.value = toasts.value.filter((t: Toast) => t.id !== id);
  }

  function setToasterVisibilityInterval(
    timeout: Ref,
    id: string | number,
    isPaused: Ref
  ) {
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
