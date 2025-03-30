import { Component } from '@angular/core';
import { CardComponent } from "./card.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'p2-main',
  imports: [CardComponent, RouterModule],
  template: `
    <div class="position-relative overflow-hidden p-3 p-md-3 text-center bg-body-tertiary candidates">
      <div class="text-white candidates-overlay">
        <h1 class="display-3 fw-bold">Precinct Two</h1>
        <h3 class="fw-normal text-white mb-3">Brookline Town Meeting</h3>
      </div>

      <div class="justify-content-around candidate-names">
        @for (candidate of candidates; track candidate.id) {
          <div><a routerLink="candidates" [fragment]="candidate.id">{{candidate.name}}</a></div>
        }
      </div>
    </div>

    <p2-card cardTitle="Meet the Candidates" imageUrl="img/main/istockphoto-1332235868-1024x1024.jpg">
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus justo, tincidunt in congue sed, convallis sed dolor. Donec ornare lacus non pulvinar sollicitudin. Pellentesque non justo nec nulla dignissim aliquet.</p>
      <p class="card-text">Quisque est mi, feugiat a dolor quis, ultrices commodo mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Sed nibh metus, posuere at risus ac, volutpat aliquam augue.</p>
      <p class="card-text">In hac habitasse platea dictumst. Donec nec ligula id nunc efficitur fringilla. Sed ut ligula ac enim facilisis tincidunt. Donec euismod, nisi vel consectetur interdum, nisi nisi aliquet nunc, nec tincidunt nunc nisi euismod nunc. Sed ut erat non augue convallis bibendum.</p>
      <p class="card-text">Aliquam erat volutpat. Sed euismod, nunc vel tincidunt facilisis, nunc nisl aliquet nunc, nec tincidunt nunc nisl euismod nunc. Sed ut erat non augue convallis bibendum. Donec nec ligula id nunc efficitur fringilla. Sed ut ligula ac enim facilisis tincidunt.</p>
    </p2-card>

    <p2-card cardTitle="Challenges Ahead" imageUrl="img/main/theater.jpeg" [stagger]="true" [imageWidth]="4">
      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan semper scelerisque. Suspendisse non lectus ac diam consectetur bibendum. Nunc cursus mi mattis venenatis laoreet. Nunc non justo malesuada, mattis libero non, ullamcorper lacus. Nulla fermentum non ex a pharetra. Mauris vitae massa placerat, varius dui in, porta ex. Nam eleifend risus nec sem tincidunt tristique. Ut imperdiet, nulla eu dignissim sagittis, ex metus placerat nunc, ut facilisis arcu justo sit amet ligula.</p>
      <p class="card-text">Duis facilisis finibus erat, eu volutpat orci interdum a. Curabitur mauris metus, aliquet malesuada sem ut, rhoncus pellentesque diam. Quisque sollicitudin, ante eget ultricies interdum, erat mauris dapibus orci, vel pulvinar est risus ut velit. Fusce ut lacus at ligula condimentum condimentum et sit amet nunc. Cras sed cursus nisi. Ut pretium sed odio imperdiet ultricies. Fusce gravida ac sem at finibus. Suspendisse semper felis at neque accumsan, a luctus eros volutpat. Morbi suscipit tristique ante, at luctus nunc. Donec ornare eros in turpis egestas pharetra. Integer vulputate lacus vestibulum velit rutrum, at molestie magna egestas. Sed magna enim, auctor sit amet finibus at, dignissim vel ante. Nullam sed ipsum massa. Mauris a felis at quam aliquet porttitor sollicitudin in arcu. Ut hendrerit elementum orci at porttitor. Aenean suscipit feugiat arcu quis suscipit.</p>
    </p2-card>
  `,
  styles: ``
})
export class MainComponent {
  readonly candidates = [
    { name: 'Esther Gruesz', id: 'esther' },
    { name: 'Lauren Shebairo', id: 'lauren' },
    { name: 'Colleen Newsome', id: 'colleen' },
    { name: 'Elise Couture-Stone', id: 'elise' },
    { name: 'Megan Hinman', id: 'megan' }
  ];
}
