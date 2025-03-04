function createRipple(el: HTMLElement, e: MouseEvent) {
  const circle = document.createElement("span");
  const diameter = Math.max(el.clientWidth, el.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - (el.offsetLeft + radius)}px`;
  circle.style.top = `${e.clientY - (el.offsetTop + radius)}px`;
  circle.classList.add("ripple");
  const ripple = el.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }
  el.appendChild(circle);
}
export default {
  mounted(el: HTMLElement) {
    console.log(this, "this from directive");
    el.addEventListener("click", (e) => createRipple(el, e));
  },
  beforeUnmount(el: HTMLElement) {
    el.removeEventListener("click", (e) => createRipple(el, e));
  },
};
