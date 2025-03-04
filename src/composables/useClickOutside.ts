import { onBeforeUnmount, onMounted } from "vue";
import type { Ref } from "vue";

export type ClickOutsideCallbackFn = (
  e: PointerEvent | FocusEvent | Event,
  ...args: any[]
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
  const listener = (e: Event) => {
    const eTarget = e.target as HTMLElement;
    if (
      eTarget === target.value ||
      e.composedPath().includes(target.value) ||
      eTarget === excludeComponent?.value ||
      e.composedPath().includes(excludeComponent?.value)
    ) {
      return;
    }
    if (typeof callbackFn === "function") {
      console.log("clicked outside");
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
