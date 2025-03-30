import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'p2-root',
  imports: [RouterModule, NavbarComponent],
  template: `
    <p2-navbar />

    <router-outlet />

    <footer class="px-2 py-3 text-center">
      <a routerLink="privacy" class="text-muted small">Privacy policy</a>
    </footer>
  `,
  styles: [],
})
export class AppComponent {
}
