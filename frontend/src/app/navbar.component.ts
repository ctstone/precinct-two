import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'p2-navbar',
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-md sticky-top">
      <div class="container">
        <a class="navbar-brand d-md-none" routerLink="/">
          Brookline TMM - P2
        </a>
        <button class="navbar-toggler" type="button" aria-controls="offcanvas" aria-label="Toggle navigation" (click)="toggleMenu()">
          <i class="fa-duotone fa-regular fa-bars"></i>
        </button>
        <div #menu class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" [class.show]="menuVisible()">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel" style="color: var(--h4-color)">Precinct 2</h5>
            <button type="button" class="btn-close" aria-label="Close" (click)="menuVisible.set(false)"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav flex-grow-1 justify-content-between">
              <li class="nav-item">
                <a class="nav-link" routerLink="/">
                  <i class="fa-duotone fa-solid fa-house"></i>
                  <span class="only-on-mobile">Home</span>
                </a>
              </li>
              @for (link of links; track link.id) {
                <li class="nav-item">
                  <a class="nav-link" [routerLink]="link.path" routerLinkActive="active">
                    <i [class]="link.icon"></i>
                    {{link.name}}
                  </a>
                </li>
              }
              <li class="nav-item">
                <a class="btn btn-primary" style="background-color:var(--donate-btn-background-color); border-color:var(--donate-btn-border-color)" routerLink="donate">
                  Donate
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: ``
})
export class NavbarComponent {
  readonly router = inject(Router);
  readonly menu = viewChild.required<ElementRef<HTMLElement>>('menu');
  readonly menuVisible = signal(false);
  readonly links = [
    { name: 'Meet the Candidates', icon: 'fa-duotone fa-regular fa-face-smile-hearts fa-beat', id: 'candidates', path: 'candidates' },
    { name: 'Challenges Ahead', icon: 'fa-duotone fa-solid fa-building-columns', id: 'challenges-ahead', path: 'challenges-ahead' },
    // { name: 'Endorsements', icon: 'fa-duotone fa-solid fa-badge-check', id: 'endorsements', /*path: 'endorsements'*/ },
    { name: 'Voting', icon: 'fa-duotone fa-solid fa-check-to-slot', id: 'voting', path: 'voting' },
    { name: 'News', icon: 'fa-duotone fa-solid fa-newspaper', id: 'news', path: 'news' },
  ];

  constructor() {
    this.router.events.subscribe(() => this.menuVisible.set(false));
  }

  toggleMenu() {
    this.menuVisible.update((prev) => !prev);
  }
}
