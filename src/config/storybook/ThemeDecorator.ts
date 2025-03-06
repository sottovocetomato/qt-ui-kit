export enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

export const ThemeDecorator = (theme: ThemeType) => () => ({
  template: `<div id="theme-decorator" class="${theme}" style="padding: 1rem; height:100vh"><story /></div>`,
});
