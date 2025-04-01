import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ISSUES } from './issues.component';

@Component({
  selector: 'p2-issue',
  imports: [RouterModule],
  template: `
    <div class="container">
      <ul class="nav nav-pills my-2">
        @for (issue of issues; track issue.link) {
          <li class="nav-item">
            <a class="nav-link me-2" [routerLink]="issue.link" routerLinkActive="active">{{issue.name}}</a>
          </li>
        }
      </ul>

      <router-outlet />

    </div>
  `,
  styles: `
    .nav-link {
      color: black;
    }
  `
})
export class IssueComponent {
  readonly issues = ISSUES;
}
