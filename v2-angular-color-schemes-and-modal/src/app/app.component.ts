import { Component, signal } from "@angular/core";

import { ModalComponent } from "./shared/modal";
import { ColorSchemeSwitcherComponent } from "./shared/theme";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ColorSchemeSwitcherComponent, ModalComponent],
  template: `
    <header class="container">
      <app-color-scheme-switcher />
    </header>

    <main class="container">
      <h1>Angular color schemes and modal</h1>
      <p>Switch color schemes and open modals with Angular.</p>

      <button type="button" (click)="openModal()">Open Modal</button>

      <app-modal [open]="isModalOpen()" (close)="closeModal()" />
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
export class AppComponent {
  readonly isModalOpen = signal(false);

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }
}
