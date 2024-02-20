import { Injectable, computed, effect, signal } from "@angular/core";

export type ColorScheme = "light" | "dark";

const isSSR = typeof window === "undefined";
const htmlTag = !isSSR && document.querySelector("html");

const defaultTheme: ColorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

@Injectable({ providedIn: "root" })
export class ThemeService {
  currentColorScheme = signal<ColorScheme>(defaultTheme);

  nextColorScheme = computed<ColorScheme>(() =>
    this.currentColorScheme() === "light" ? "dark" : "light"
  );

  constructor() {
    effect(() => {
      const theme = this.currentColorScheme();

      if (htmlTag) htmlTag.setAttribute("data-theme", theme);
      localStorage.setItem("picoColorScheme", theme);
    });
  }

  switchTheme(): void {
    this.currentColorScheme.set(this.nextColorScheme());
  }
}
