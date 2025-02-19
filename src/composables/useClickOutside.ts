import { onBeforeUnmount, onMounted } from "vue";
import type { Ref } from "vue";

export type ClickOutsideCallbackFn = (
  event?: PointerEvent | FocusEvent
) => void;

export const useClickOutside = (
  target: Ref,
  callbackFn: ClickOutsideCallbackFn,
  excludeComponent?: Ref
) => {
  console.log("click outside init");
  if (!target) {
    throw new Error("no target has been provided to useClickOutside");
  }
  if (typeof window === "undefined" || !window) {
    throw new Error("Window object doesn't exist");
  }
  const listener = (e) => {
    if (
      e.target === target.value ||
      e.composedPath().includes(target.value) ||
      e.target === excludeComponent?.value ||
      e.composedPath().includes(excludeComponent?.value)
    ) {
      return;
    }
    if (typeof callbackFn === "function") {
      callbackFn(e);
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
};
