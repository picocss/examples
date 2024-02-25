import { DOCUMENT } from "@angular/common";
import {
  Component,
  EventEmitter,
  HostListener,
  Output,
  booleanAttribute,
  inject,
  input,
  signal,
} from "@angular/core";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { Subject, concatMap, delay, iif, skip, switchMap, tap } from "rxjs";

const modalAnimationDuration = 400;

@Component({
  selector: "app-modal",
  standalone: true,
  template: `
    <dialog #dialog (click)="overlayClicked($event)" [open]="isModalOpen()">
      <article>
        <header>
          <button aria-label="Close" rel="prev" (click)="close.emit()"></button>
          <h3>Confirm your action!</h3>
        </header>

        <p>
          Cras sit amet maximus risus. Pellentesque sodales odio sit amet augue finibus
          pellentesque. Nullam finibus risus non semper euismod.
        </p>

        <footer>
          <button class="secondary" (click)="close.emit()">Cancel</button>
          <button (click)="close.emit()">Confirm</button>
        </footer>
      </article>
    </dialog>
  `,
})
export class ModalComponent {
  readonly #htmlEl: HTMLElement = inject(DOCUMENT).documentElement;
  readonly isModalOpen = signal<boolean>(false);

  readonly open = input.required({ transform: booleanAttribute });

  @Output() close = new EventEmitter<void>();

  @HostListener("document:keydown.escape")
  handleEscapeKey() {
    if (this.isModalOpen()) {
      this.close.emit();
    }
  }

  readonly #closeModal$ = new Subject<void>();
  readonly #openModal$ = new Subject<void>();

  constructor() {
    this.#closeModal$
      .pipe(
        takeUntilDestroyed(),
        tap(() => this.#htmlEl.classList.add("modal-is-closing")),
        delay(modalAnimationDuration),
        tap(() => this.isModalOpen.set(false)),
        tap(() => this.#htmlEl.classList.remove("modal-is-open", "modal-is-closing"))
      )
      .subscribe();

    this.#openModal$
      .pipe(
        takeUntilDestroyed(),
        tap(() => this.isModalOpen.set(true)),
        tap(() => this.#htmlEl.classList.add("modal-is-open", "modal-is-opening")),
        delay(modalAnimationDuration),
        tap(() => this.#htmlEl.classList.remove("modal-is-opening"))
      )
      .subscribe();

    toObservable(this.open)
      .pipe(
        takeUntilDestroyed(),
        skip(1),
        concatMap((shouldOpen) => iif(() => shouldOpen, this.#closeModal$, this.#openModal$))
      )
      .subscribe();
  }

  overlayClicked(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }
}
