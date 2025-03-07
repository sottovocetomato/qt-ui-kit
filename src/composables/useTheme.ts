import { ThemeType } from "../config/storybook/ThemeDecorator";

let preferedTheme = localStorage.getItem("preferedTheme");
let mainElement;
export const useTheme = () => {
  function initTheme(tag: string = "body") {
    mainElement = document.querySelector(`${tag}`);
    if (!mainElement)
      throw new Error(`Can't find an element with given tag: ${tag}`);
    if (!preferedTheme) {
      preferedTheme = ThemeType.LIGHT;
      localStorage.setItem("preferedTheme", preferedTheme);
    }
    mainElement.classList.add(preferedTheme);
  }
  function changeTheme() {
    console.log(preferedTheme, "preferedTheme");
    if (!mainElement) {
      initTheme("body");
    }
    mainElement.classList.remove(preferedTheme);
    if (preferedTheme === ThemeType.LIGHT) {
      preferedTheme = ThemeType.DARK;
    } else {
      preferedTheme = ThemeType.LIGHT;
    }
    mainElement.classList.add(preferedTheme);
    localStorage.setItem("preferedTheme", preferedTheme);
  }
  return { initTheme, changeTheme };
};
