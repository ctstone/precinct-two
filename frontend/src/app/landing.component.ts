import { Component, inject } from '@angular/core';
import { CardComponent } from "./card.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService } from './content.service';

@Component({
  selector: 'p2-landing',
  imports: [CardComponent, RouterModule, CommonModule],
  template: `
      <div class="position-relative overflow-hidden p-3 p-md-3 text-center bg-body-tertiary candidates">
        <div class="text-white candidates-overlay">
          <h1 class="display-3 fw-bold">Precinct 2 Slate, 2025</h1>
          <h3 class="fw-normal text-white mb-3">
            <a href="https://www.brooklinema.gov/264/Town-Meeting" style="color:white; text-decoration:none">Brookline Town Meeting</a>
          </h3>
        </div>

        <div class="justify-content-around candidate-names">
          @for (candidate of candidates; track candidate.id) {
            <!-- <div><a routerLink="candidates" [fragment]="candidate.id">{{candidate.name}}</a></div> -->
            <div>{{candidate.name}}</div>
          }
        </div>
      </div>

    <div class="container">
      @for (card of cards; track card.title; let i = $index) {
        <p2-card [cardTitle]="card.title" [link]="card.link" [image]="card.image" [stagger]="i % 2 === 1" [imageWidth]="card.imageWidth ?? 6">
          @for (paragraph of card.text$ | async; track paragraph) {
            <p class="card-text" [innerHTML]="paragraph"></p>
          }
        </p2-card>
      }
    </div>
  `
})
export class LandingComponent {
  readonly content = inject(ContentService);

  readonly candidates = [
    { name: 'Esther Gruesz', id: 'esther' },
    { name: 'Lauren Shebairo', id: 'lauren' },
    { name: 'Colleen Newsome', id: 'colleen' },
    { name: 'Elise Couture-Stone', id: 'elise' },
    { name: 'Megan Hinman', id: 'megan' }
  ];

  readonly cards = [
    {
      title: 'Who We Are',
      // link: 'candidates',
      image: 'img/main/IMG_6742.jpeg',
      text$: this.content.fetch('main/meet-the-candidates.txt'),
    },
    {
      title: 'The Challenges Ahead',
      link: 'challenges-ahead',
      image: 'img/main/theater.jpeg',
      imageWidth: 4,
      text$: this.content.fetch('main/challenges-ahead.txt'),
    },
    {
      title: 'Voting',
      // link: 'voting',
      image: 'img/main/map.png',
      imageWidth: 5,
      text$: this.content.fetch('main/voting.txt'),
    }
  ];
}
