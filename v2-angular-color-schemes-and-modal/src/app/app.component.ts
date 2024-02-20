import { Component } from "@angular/core";

import { ColorSchemeSwitcherComponent } from "./shared/theme";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ColorSchemeSwitcherComponent],
  template: `
    <header class="container">
      <app-color-scheme-switcher />
    </header>

    <main class="container">
      <h1>Angular color schemes and modal</h1>
      <p>Switch color schemes and open modals with Angular.</p>

      <button type="button">Open Modal</button>
    </main>

    <footer class="container">
      <small>
        Built with <a href="https://picocss.com">Pico</a> •
        <a
          href="https://github.com/picocss/examples/tree/master/v2-angular-color-schemes-and-modal"
        >
          Source code
        </a>
      </small>
    </footer>
  `,
})
export class AppComponent {}
