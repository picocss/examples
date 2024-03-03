import { Component, ElementRef, HostListener, Renderer2, inject, viewChild } from "@angular/core";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <main #mainRef>
      <h1>Sign in</h1>

      <form>
        <input
          type="text"
          name="login"
          placeholder="Login"
          aria-label="Login"
          autocomplete="username"
          required
          ngModel
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
          autocomplete="current-password"
          required
          ngModel
        />

        <fieldset>
          <label for="remember">
            <input type="checkbox" role="switch" id="remember" name="remember" />
            Remember me
          </label>
        </fieldset>

        <button type="submit">Login</button>
      </form>
    </main>
  `,
})
export class AppComponent {
  readonly #renderer = inject(Renderer2);
  readonly #mainRef = viewChild.required<ElementRef<HTMLElement>>("mainRef");

  @HostListener("window:resize")
  onResize(): void {
    const mainRef = this.#mainRef();
    if (!mainRef) return;
    this.#renderer.setStyle(mainRef, "min-height", `${window.innerHeight}px`);
  }
}
