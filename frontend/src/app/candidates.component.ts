import { Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'p2-candidates',
  imports: [CardComponent],
  template: `
    <h1 class="m-4">Meet the Candidates for Brookline Town Meeting, Precinct 2</h1>

    @for(candidate of candidates; track candidate.id; let i = $index) {
      <p2-card [cardTitle]="candidate.name" [cardId]="candidate.id" image="img/candidates/{{candidate.image}}" [imageWidth]="3" [stagger]="i % 2 === 1">
        @for (paragraph of candidate.paragraphs; track paragraph) {
          <p class="card-text">{{paragraph}}</p>
        }

        <p class="card-link text-center">
          @if (candidate.instagram) {
            <a [href]="candidate.instagram" class="me-2 social-link"><i class="fa-brands fa-instagram-square"></i></a>
          }
          @if (candidate.bluesky) {
            <a [href]="candidate.bluesky" class="me-2 social-link"><i class="fa-brands fa-square-bluesky"></i></a>
          }
          @if (candidate.linkedin) {
            <a [href]="candidate.linkedin" class="me-2 social-link"><i class="fa-brands fa-linkedin"></i></a>
          }
          @if (candidate.facebook) {
            <a [href]="candidate.facebook" class="me-2 social-link"><i class="fa-brands fa-square-facebook"></i></a>
          }
        </p>
      </p2-card>
    }
  `,
  styles: ``
})
export class CandidatesComponent {
  readonly candidates = [
    {
      name: 'Esther Gruesz',
      id: 'esther',
      image: 'esther.jpeg',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu augue velit. Nulla euismod, tortor eu imperdiet efficitur, nulla magna aliquet odio, id tincidunt quam metus nec augue. Etiam molestie a justo non auctor. Aenean tempus libero vel sodales auctor. Integer maximus enim non nisl ultrices finibus. Proin ut faucibus elit. Donec nec ex non metus viverra dignissim non sed ex. Vivamus suscipit, risus at luctus ullamcorper, ligula diam fermentum augue, id viverra elit felis nec libero.',
        'Nullam accumsan eros et nibh rhoncus lobortis. Aenean consequat libero et libero dapibus egestas. Morbi ut ante feugiat dolor tristique ultrices. Nulla aliquam posuere dolor non hendrerit. Donec tincidunt fermentum metus, eget aliquet mi luctus at. Sed hendrerit hendrerit venenatis. Aliquam auctor risus est, tristique convallis felis lobortis eu. Morbi ultrices iaculis dui, id aliquam sapien dignissim porttitor. Praesent et metus sed nisi facilisis dignissim vitae eu dolor. Nam imperdiet, lectus sit amet pharetra vulputate, massa orci cursus erat, quis mollis libero tortor eu dui. Maecenas sed eros sit amet urna euismod rutrum facilisis at tortor. Ut elementum mi vitae mi fermentum vehicula. Aliquam erat volutpat. Nam porttitor imperdiet quam et commodo. Mauris convallis tortor justo, et consequat neque laoreet ut. Suspendisse eget nisi finibus, tincidunt turpis vitae, ultricies magna.'
      ],
      instagram: '#',
      bluesky: '#',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'Lauren Shebairo',
      id: 'lauren',
      image: 'lauren-2.jpeg',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu augue velit. Nulla euismod, tortor eu imperdiet efficitur, nulla magna aliquet odio, id tincidunt quam metus nec augue. Etiam molestie a justo non auctor. Aenean tempus libero vel sodales auctor. Integer maximus enim non nisl ultrices finibus. Proin ut faucibus elit. Donec nec ex non metus viverra dignissim non sed ex. Vivamus suscipit, risus at luctus ullamcorper, ligula diam fermentum augue, id viverra elit felis nec libero.',
        'Nullam accumsan eros et nibh rhoncus lobortis. Aenean consequat libero et libero dapibus egestas. Morbi ut ante feugiat dolor tristique ultrices. Nulla aliquam posuere dolor non hendrerit. Donec tincidunt fermentum metus, eget aliquet mi luctus at. Sed hendrerit hendrerit venenatis. Aliquam auctor risus est, tristique convallis felis lobortis eu. Morbi ultrices iaculis dui, id aliquam sapien dignissim porttitor. Praesent et metus sed nisi facilisis dignissim vitae eu dolor. Nam imperdiet, lectus sit amet pharetra vulputate, massa orci cursus erat, quis mollis libero tortor eu dui. Maecenas sed eros sit amet urna euismod rutrum facilisis at tortor. Ut elementum mi vitae mi fermentum vehicula. Aliquam erat volutpat. Nam porttitor imperdiet quam et commodo. Mauris convallis tortor justo, et consequat neque laoreet ut. Suspendisse eget nisi finibus, tincidunt turpis vitae, ultricies magna.'
      ],
      instagram: '#',
      bluesky: '#',
      linkedin: '#',
      facebook: '#'
    },
    {
      name: 'Colleen Newsome',
      id: 'colleen',
      image: 'colleen-3.jpeg',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu augue velit. Nulla euismod, tortor eu imperdiet efficitur, nulla magna aliquet odio, id tincidunt quam metus nec augue. Etiam molestie a justo non auctor. Aenean tempus libero vel sodales auctor. Integer maximus enim non nisl ultrices finibus. Proin ut faucibus elit. Donec nec ex non metus viverra dignissim non sed ex. Vivamus suscipit, risus at luctus ullamcorper, ligula diam fermentum augue, id viverra elit felis nec libero.',
        'Nullam accumsan eros et nibh rhoncus lobortis. Aenean consequat libero et libero dapibus egestas. Morbi ut ante feugiat dolor tristique ultrices. Nulla aliquam posuere dolor non hendrerit. Donec tincidunt fermentum metus, eget aliquet mi luctus at. Sed hendrerit hendrerit venenatis. Aliquam auctor risus est, tristique convallis felis lobortis eu. Morbi ultrices iaculis dui, id aliquam sapien dignissim porttitor. Praesent et metus sed nisi facilisis dignissim vitae eu dolor. Nam imperdiet, lectus sit amet pharetra vulputate, massa orci cursus erat, quis mollis libero tortor eu dui. Maecenas sed eros sit amet urna euismod rutrum facilisis at tortor. Ut elementum mi vitae mi fermentum vehicula. Aliquam erat volutpat. Nam porttitor imperdiet quam et commodo. Mauris convallis tortor justo, et consequat neque laoreet ut. Suspendisse eget nisi finibus, tincidunt turpis vitae, ultricies magna.'
      ],
      instagram: 'https://www.instagram.com/colleentheconqueror?igsh=MTVqMmR3NjNzbHY2NQ==',
      bluesky: 'https://bsky.app/profile/colleentconqueror.bsky.social',
      linkedin: 'https://www.facebook.com/share/16MqNYvkWk/',
      facebook: '#'
    },
    {
      name: 'Elise Couture-Stone',
      id: 'elise',
      image: 'elise-2.jpeg',
      paragraphs: [
        'Elise Couture-Stone believes that as a community, we can honor and preserve the beauty of our architectural landscape while embracing the hope and vitality of the future. With over 15 years of experience advocating for and preserving the Boston-area’s cultural, civic, and intellectual identity, Elise is excited to bring her experience to Brookline, where she hopes to make a real difference by leading with compassion, inclusivity, and collaboration to address the challenges ahead.',
        'As a proud PSB parent of two, Elise is committed to supporting policies that protect our most vulnerable residents, focusing on education, affordable housing, and supporting our local businesses, all the while creating a vibrant, healthy, and sustainable community for all. She is dedicated to ensuring that all Brookline residents—regardless of income, background, or identity—have access to the resources and opportunities they need to thrive. Elise believes in the power of community and is driven by a vision for a more equitable and sustainable future for Brookline.',
      ],
      instagram: '#',
      bluesky: '#',
      linkedin: 'https://www.linkedin.com/in/elise-couture-stone?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      facebook: '#'
    },
    {
      name: 'Megan Hinman',
      id: 'megan',
      image: 'megan.jpeg',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu augue velit. Nulla euismod, tortor eu imperdiet efficitur, nulla magna aliquet odio, id tincidunt quam metus nec augue. Etiam molestie a justo non auctor. Aenean tempus libero vel sodales auctor. Integer maximus enim non nisl ultrices finibus. Proin ut faucibus elit. Donec nec ex non metus viverra dignissim non sed ex. Vivamus suscipit, risus at luctus ullamcorper, ligula diam fermentum augue, id viverra elit felis nec libero.',
        'Nullam accumsan eros et nibh rhoncus lobortis. Aenean consequat libero et libero dapibus egestas. Morbi ut ante feugiat dolor tristique ultrices. Nulla aliquam posuere dolor non hendrerit. Donec tincidunt fermentum metus, eget aliquet mi luctus at. Sed hendrerit hendrerit venenatis. Aliquam auctor risus est, tristique convallis felis lobortis eu. Morbi ultrices iaculis dui, id aliquam sapien dignissim porttitor. Praesent et metus sed nisi facilisis dignissim vitae eu dolor. Nam imperdiet, lectus sit amet pharetra vulputate, massa orci cursus erat, quis mollis libero tortor eu dui. Maecenas sed eros sit amet urna euismod rutrum facilisis at tortor. Ut elementum mi vitae mi fermentum vehicula. Aliquam erat volutpat. Nam porttitor imperdiet quam et commodo. Mauris convallis tortor justo, et consequat neque laoreet ut. Suspendisse eget nisi finibus, tincidunt turpis vitae, ultricies magna.'
      ],
      instagram: '#',
      bluesky: '#',
      linkedin: '#',
      facebook: '#'
    }
  ].sort((x) => Math.random() - 0.5); // Shuffle the candidates
}
