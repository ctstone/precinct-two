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
          <p class="card-text" [innerHTML]="paragraph"></p>
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
      image: 'IMG_2050.jpeg',
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
        'I&rsquo;m running for Town Meeting because I believe Brookline needs thoughtful, inclusive leadership to address the important challenges facing our community, particularly around housing, equity, and sustainability. Housing costs have become prohibitively high for many families and residents, making it harder for everyone to find a place to call home. This creates a barrier to equitable access to our vital resources and undermines the diversity and inclusivity our Town is known and loved for. I&rsquo;m passionate about understanding how current policies may be affecting residents in areas like social services, healthcare, public safety, education, and transit, and I&rsquo;m committed to promoting policies that make sure everyone has equal access to these essential resources.',
        'As a proud PSB parent of two, and with over 15 years of experience working to preserve the Boston-area&rsquo;s cultural and civic identity, I&rsquo;m excited to bring my knowledge and experience to Brookline. I want our community to reflect the diversity of the world around us, and for all of our children to have the resources they need to grow, succeed, and contribute to the world as they become adults.',
        'I believe we can protect and celebrate the charm of our town while also planning for a future that is inclusive, sustainable, and welcoming to all. If elected, I&rsquo;ll work to encourage open conversations and collaborate with others to build solutions that help us create a more affordable, vibrant, and sustainable future for all Brookline residents. I&rsquo;m committed to supporting policies that protect our most vulnerable residents, prioritize affordable housing, and strengthen our local businesses. Together, we can create a Brookline where everyone has the resources and opportunities to thrive.',
      ],
      instagram: '#',
      bluesky: '#',
      linkedin: 'https://www.linkedin.com/in/elise-couture-stone?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      facebook: '#'
    },
    {
      name: 'Megan Hinman',
      id: 'megan',
      image: 'Hinman Headshot2.jpeg',
      paragraphs: [
        'I&rsquo;m running for Town Meeting because I believe Brookline should be a community where everyone—young families, seniors, public employees and lifelong residents—can afford to live and thrive. Rising housing costs are pushing too many of our neighbors out, threatening the diversity and vibrancy that make Brookline so special. I support affordable housing because stable, accessible homes strengthen our schools, local businesses, and social fabric. I&rsquo;m committed to making thoughtful, community-driven decisions that ensure Brookline remains a welcoming, inclusive place for all.',
        'As a long-time Brookline resident, single mother of two, and former public-school teacher, I&rsquo;ve always valued our town&rsquo;s exceptional schools and progressive values. I want to be actively involved in shaping the decisions that impact my family and our community—especially when it comes to issues addressing housing affordability and climate change. The ability to stay in Brookline shouldn&rsquo;t depend on financial privilege. My own experience has made me acutely aware of the challenges individuals and families face in securing stable, affordable housing here. I believe we can embrace thoughtful, community-driven planning that preserves Brookline&rsquo;s historic charm while ensuring it remains a diverse and inclusive town where all can thrive.'
      ],
      instagram: '#',
      bluesky: '#',
      linkedin: '#',
      facebook: '#'
    }
  ].sort((x) => Math.random() - 0.5); // Shuffle the candidates
}
