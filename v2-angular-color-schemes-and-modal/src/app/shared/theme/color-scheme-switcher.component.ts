import { Component, computed, inject } from "@angular/core";

import { IconMoonComponent, IconSunComponent } from "../icons";
import { ThemeService } from "./theme.service";

@Component({
  selector: "app-color-scheme-switcher",
  standalone: true,
  imports: [IconMoonComponent, IconSunComponent],
  template: `
    @if(vm(); as vm){
    <a [href]="'#' + vm.nextTheme" [ariaLabel]="vm.nextThemeLabel" (click)="switchTheme()">
      @switch (vm.currentColorScheme) { @case ('light') {
      <app-icon-moon />
      } @case ('dark') {
      <app-icon-sun />
      } }
    </a>
    }
  `,
})
export class ColorSchemeSwitcherComponent {
  readonly #themeService = inject(ThemeService);

  readonly vm = computed(() => ({
    currentColorScheme: this.#themeService.currentColorScheme(),
    nextTheme: this.#themeService.nextColorScheme(),
    nextThemeLabel:
      this.#themeService.nextColorScheme() === "dark"
        ? "Switch to Light Mode"
        : "Switch to Dark Mode",
  }));

  switchTheme(): void {
    this.#themeService.switchTheme();
  }
}
