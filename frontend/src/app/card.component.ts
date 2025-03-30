import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'p2-card',
  imports: [],
  template: `
    <div class="card m-3 p-2">
      <div class="row g-0">
        <div class="col-md-{{imageWidth()}} align-self-center" [class.image-list-group-image]="stagger()">
          <img [src]="imageUrl()" class="img-fluid rounded">
        </div>
        <div class="col-md-{{textWidth()}} card-container">
          <div class="card-body text-muted">
            <h4 class="card-title" style="font-weight: bold;">{{cardTitle()}}</h4>
            <ng-content />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class CardComponent {
  readonly cardTitle = input.required<string>();
  readonly imageUrl = input.required<string>();
  readonly imageWidth = input(6);
  readonly stagger = input(false);
  readonly textWidth= computed(() => 12 - this.imageWidth());
}
