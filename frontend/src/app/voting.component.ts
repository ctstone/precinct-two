import { Component, inject } from '@angular/core';
import { ContentService } from './content.service';
import { CardComponent } from "./card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'p2-voting',
  imports: [CardComponent, CommonModule],
  template: `
    <div class="container">
      <h1 class="my-4">The last day to register to vote is Sunday, April 26th.</h1>
      @for (card of cards; track card.title; let i = $index) {
        <p2-card [cardTitle]="card.title" [image]="card.image" [stagger]="i % 2 === 1" [imageWidth]="card.imageWidth">
          <div class="mt-1 mb-3">
            <a href="https://www.brooklinema.gov/139/Voter-Registration" class="btn btn-primary me-2" style="background-color: inherit; border-color: var(--background-color)">
              Voter Registration
            </a>
            <a href="https://www.brooklinema.gov/137/Elections-Voting" class="btn btn-primary" style="background-color: inherit; border-color: var(--background-color)">
              Election Information
            </a>
          </div>
          @for (paragraph of card.text$ | async; track paragraph) {
            <p class="card-text" [innerHTML]="paragraph"></p>
          }
        </p2-card>
      }
    </div>
  `
})
export class VotingComponent {
  readonly content = inject(ContentService);

  readonly cards = [
    {
      title: 'How and where to vote',
      image: 'img/main/map.png',
      imageWidth: 5,
      text$: this.content.fetch('main/voting.txt'),
    }
  ];
}
