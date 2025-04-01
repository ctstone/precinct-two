import { Component, inject } from '@angular/core';
import { CardComponent } from './card.component';
import { ContentService } from './content.service';
import { CommonModule } from '@angular/common';

export const ISSUES = [
  {
    name: 'Housing',
    image: 'IMG_7055.jpeg',
    link: 'housing',
  },
  {
    name: 'Fiscal Responsibility',
    image: 'IMG_7055.jpeg',
    link: 'fiscal-responsibility',
  },
  {
    name: 'Education',
    image: 'IMG_3069.jpeg',
    link: 'education',
  },
  {
    name: 'Environment, Sustainability, & Infrastructure',
    image: 'istockphoto-1311429427-1024x1024.jpg',
    link: 'infrastructure',
  },
  {
    name: 'Economic Development',
    image: 'IMG_7281.jpeg',
    link: 'economic-development',
  },
];
@Component({
  selector: 'p2-issues',
  imports: [CommonModule, CardComponent],
  template: `
    <div class="container">
      <h1 class="my-4">Challenges Ahead</h1>

      @for (card of cards; track card.name; let i = $index) {
        <p2-card [cardTitle]="card.name" [link]="card.link" image="img/issues/{{card.image}}" [imageWidth]="3" [stagger]="i % 2 === 1">
          @for (paragraph of card.text$ | async; track paragraph) {
            <p class="card-text" [innerHTML]="paragraph"></p>
          }
        </p2-card>
      }
    </div>
  `
})
export class IssuesComponent {
  readonly content = inject(ContentService);

  readonly cards = ISSUES.map((issue) => ({
    ...issue,
    text$: this.content.fetch(`issues/${issue.link}/summary.txt`),
  }));
}
