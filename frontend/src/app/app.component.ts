import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { StripeService } from './stripe.service';

@Component({
  selector: 'p2-root',
  imports: [RouterModule, NavbarComponent],
  template: `
    <p2-navbar />

    <router-outlet />

    <div class="container">
      <footer class="px-2 py-3 text-center">
        <!-- <a routerLink="privacy" class="text-muted small">Privacy policy</a>
        <span class="mx-2 text-muted">&bullet;</span> -->
        <!-- <a routerLink="theme"><i class="fa-duotone fa-solid fa-palette"></i></a> -->
      </footer>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  readonly stripe = inject(StripeService);

  constructor() {
    // this.stripe.initialize().catch((error) => console.error('Stripe initialization failed', error));
    for (let i = 0; i < window.localStorage.length; i += 1) {
      const key = window.localStorage.key(i);
      if (key) {
        const value = window.localStorage.getItem(key);
        if (key.startsWith('--')) {
          document.documentElement.style.setProperty(key, value);
        }
      }
    }
  }
}
