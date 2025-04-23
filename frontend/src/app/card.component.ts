import { Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'p2-card',
  imports: [RouterModule],
  template: `
    <div class="card my-3 p-2" [id]="cardId()">
      <div class="row g-0 align-items-center">
        <div class="col-md-{{imageWidth()}}" [class.image-list-group-image]="stagger()">
          @if (link(); as link) {
            <a [routerLink]="link">
              <img [src]="image()" class="img-fluid rounded">
            </a>
          } @else {
            <img [src]="image()" class="img-fluid rounded">
          }
          @if (imageCredit(); as imageCredit) {
            <p class="small text-muted m-0">{{imageCredit}}</p>
          }
        </div>
        <div class="col-md-{{textWidth()}} card-container">
          <div class="card-body text-muted">
            <h4 class="card-title" style="font-weight: bold;">
              @if (link(); as link) {
                <a [routerLink]="link">
                  {{cardTitle()}}
                </a>
              } @else {
                {{cardTitle()}}
              }
            </h4>
            <ng-content />
            @if (link(); as link) {
              @if (enableReadMoreLink()) {
                <div class="card-text">
                  <a [routerLink]="link" class="btn btn-primary" style="background-color: inherit; border-color: var(--background-color)">
                    {{linkText() ?? "Learn More"}}
                  </a>
                </div>
              }
            }
          </div>
        </div>
      </div>
    </div>
  `,
  styles: `
    .card a {
      color: inherit;
      text-decoration:none;
      &:hover {
        text-decoration: underline;
        color: #5c84ae;
      }
    }
    .btn {
      background-color: red;
      border-color: var(--background-color);
    }
  `
})
export class CardComponent {
  readonly cardTitle = input.required<string>();
  readonly link = input<string>();
  readonly linkText = input<string | undefined>();
  readonly cardId = input<string>();
  readonly image = input.required<string>();
  readonly imageWidth = input(6);
  readonly imageCredit = input<string>();
  readonly stagger = input(false);
  readonly textWidth = computed(() => 12 - this.imageWidth());
  readonly enableReadMoreLink = input(true);
}
