import { Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  selector: 'p2-issues',
  imports: [CardComponent],
  template: `
    <h1 class="m-4">Challenges Ahead</h1>

    @for (issue of issues; track issue.name; let i = $index) {
      <p2-card [cardTitle]="issue.name" [link]="issue.link" image="img/issues/{{issue.image}}" [imageWidth]="3" [stagger]="i % 2 === 1">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu augue velit. Nulla euismod, tortor eu
          imperdiet efficitur, nulla magna aliquet odio, id tincidunt quam metus nec augue. Etiam molestie a justo
          non
          auctor. Aenean tempus libero vel sodales auctor. Integer maximus enim non nisl ultrices finibus. Proin ut
          faucibus elit. Donec nec ex non metus viverra dignissim non sed ex. Vivamus suscipit, risus at luctus
          ullamcorper, ligula diam fermentum augue, id viverra elit felis nec libero.
        </p>
        <p class="card-text">
          Nullam accumsan eros et nibh rhoncus lobortis. Aenean consequat libero et libero dapibus egestas. Morbi ut
          ante feugiat dolor tristique ultrices. Nulla aliquam posuere dolor non hendrerit. Donec tincidunt
          fermentum
          metus, eget aliquet mi luctus at. Sed hendrerit hendrerit venenatis. Aliquam auctor risus est, tristique
          convallis felis lobortis eu. Morbi ultrices iaculis dui, id aliquam sapien dignissim porttitor. Praesent
          et
          metus sed nisi facilisis dignissim vitae eu dolor. Nam imperdiet, lectus sit amet pharetra vulputate,
          massa
          orci cursus erat, quis mollis libero tortor eu dui. Maecenas sed eros sit amet urna euismod rutrum
          facilisis
          at tortor. Ut elementum mi vitae mi fermentum vehicula. Aliquam erat volutpat. Nam porttitor imperdiet
          quam
          et commodo. Mauris convallis tortor justo, et consequat neque laoreet ut. Suspendisse eget nisi finibus,
          tincidunt turpis vitae, ultricies magna.
        </p>
      </p2-card>
    }
  `,
  styles: ``
})
export class IssuesComponent {
  readonly issues = [
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
      name: 'Climate',
      image: 'IMG_7462.jpeg',
      link: 'climate',
    },
    {
      name: 'Education',
      image: 'IMG_3069.jpeg',
      link: 'education',
    },
    {
      name: 'Transportation',
      image: 'istockphoto-1311429427-1024x1024.jpg',
      link: 'transportation',
    },
    {
      name: 'Economic Development',
      image: 'IMG_7281.jpeg',
      link: 'economic-development',
    },
  ]
}
