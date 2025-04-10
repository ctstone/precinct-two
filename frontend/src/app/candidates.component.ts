import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CardComponent } from './card.component';
import { ContentService } from './content.service';

type Social = 'instagram' | 'bluesky' | 'linkedin' | 'facebook';

interface Candidate {
  name: string;
  id: string;
  image: string;
  text$: Observable<string[]>;
  socials: Map<Social, string>;
}

@Component({
  selector: 'p2-candidates',
  imports: [CardComponent, CommonModule],
  template: `
    <div class="container">
      <h1 class="my-4">Meet the Candidates for Brookline Town Meeting, Precinct 2</h1>

      @for(candidate of candidates; track candidate.id; let i = $index) {
        <p2-card [cardTitle]="candidate.name" [cardId]="candidate.id" image="img/candidates/{{candidate.image}}" [imageWidth]="3" [stagger]="i % 2 === 1">
          @for (paragraph of candidate.text$ | async; track paragraph) {
            <p class="card-text" [innerHTML]="paragraph"></p>
          }

          <!-- <p class="card-link text-center">
            @for (social of socials | keyvalue; track social.key) {
              @if (candidate.socials.get(social.key); as socialLink) {
                <a [href]="socialLink" class="me-2 social-link"><i class="fa-brands {{socials.get(social.key)}}"></i></a>
              }
            }
          </p> -->
        </p2-card>
      }
    </div>
  `
})
export class CandidatesComponent {
  readonly content = inject(ContentService);

  readonly socials = new Map<Social, string>([
    ['instagram', 'fa-instagram-square'],
    ['bluesky', 'fa-square-bluesky'],
    ['linkedin', 'fa-linkedin'],
    ['facebook', 'fa-square-facebook'],
  ]);

  readonly candidates: Candidate[] = [
    {
      name: 'Esther Gruesz',
      id: 'esther',
      image: 'IMG_2050.jpeg',
      text$: this.content.fetch('candidates/esther.txt'),
      socials: new Map<Social, string>([
        ['instagram', '#'],
        ['bluesky', '#'],
        ['linkedin', '#'],
        ['facebook', '#']
      ]),
    },
    {
      name: 'Lauren Shebairo',
      id: 'lauren',
      image: 'lauren-2.jpeg',
      text$: this.content.fetch('candidates/lauren.txt'),
      socials: new Map<Social, string>([
        ['instagram', '#'],
        ['bluesky', '#'],
        ['linkedin', '#'],
        ['facebook', '#']
      ]),
    },
    {
      name: 'Colleen Newsome',
      id: 'colleen',
      image: 'colleen-3.jpeg',
      text$: this.content.fetch('candidates/colleen.txt'),
      socials: new Map<Social, string>([
        ['instagram', 'https://www.instagram.com/colleentheconqueror?igsh=MTVqMmR3NjNzbHY2NQ=='],
        ['bluesky', 'https://bsky.app/profile/colleentconqueror.bsky.social'],
        ['linkedin', 'https://www.facebook.com/share/16MqNYvkWk/'],
        ['facebook', '#']
      ]),
    },
    {
      name: 'Elise Couture-Stone',
      id: 'elise',
      image: 'elise-2.jpeg',
      text$: this.content.fetch('candidates/elise.txt'),
      socials: new Map<Social, string>([
        ['instagram', '#'],
        ['bluesky', '#'],
        ['linkedin', 'https://www.linkedin.com/in/elise-couture-stone?utm_source'],
        ['facebook', '#']
      ]),
    },
    {
      name: 'Megan Hinman',
      id: 'megan',
      image: 'Hinman Headshot2.jpeg',
      text$: this.content.fetch('candidates/megan.txt'),
      socials: new Map<Social, string>([
        ['instagram', '#'],
        ['bluesky', '#'],
        ['linkedin', '#'],
        ['facebook', '#']
      ]),
    }
  ].sort(() => Math.random() - 0.5); // Shuffle the candidates
}
