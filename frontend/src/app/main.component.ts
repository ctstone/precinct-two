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

    <p2-card cardTitle="Meet the Candidates" link="candidates" image="img/main/IMG_6742.jpeg">
      <p class="card-text">
      Let's Elect Pro-Housing, Pro-Climate, Pro-People Candidates—Esther, Lauren, Colleen, Elise, and Megan! Together with our endorsement partners, we are dedicated to ensuring everyone in our community—regardless of income, race, background, religion, or age—has access to the resources and opportunities needed to thrive. To make this a reality, we believe Brookline needs strong, inclusive leadership to address the urgent challenges we face. We’re the team ready to fight for more affordable housing, support policies to protect our most vulnerable residents, and promote a healthy environment that benefits everyone.
      </p>
      <p class="card-text">
        We are committed to building a Brookline where we can continue to enjoy our unique, vibrant neighborhoods and open spaces, while also adapting to the challenges of climate change and economic inequality.
      </p>
      <p class="card-text">
        Brookline Town Elections are on Tuesday, May 6th. This is a mission-critical election—Help us get Brookline back on track with education, budgeting, infrastructure, housing, and sustainability!
      </p>
    </p2-card>

    <p2-card cardTitle="The Challenges Ahead" link="challenges-ahead" image="img/main/theater.jpeg" [stagger]="true" [imageWidth]="4">
      <p>The housing issue in Brookline is central to addressing the critical challenges we face. Everything—from the Town Budget to education, transportation, DEAI efforts, and environmental sustainability—are all inextricably linked to our housing needs. According to the Economic Development Advisory Board and the Economic Development and Long-Term Planning division of the Brookline Planning Department, mixed-use development near transit is the best path to increasing the Town’s revenue. To thrive as a community, we must prioritize creating more homes of all types. With over 70 percent of Brookline’s revenue coming from property taxes, increasing the housing supply will spread the tax base across more properties and relieve financial pressure on current residents.</p>
      <p>We, alongside our endorsement partners, advocate for a more integrated approach to housing that promotes the inclusion of residents from diverse backgrounds by prioritizing mixed-use developments near transit hubs. This would ensure equal access to essential resources, reduce reliance on cars, and lower associated costs. Not only would this approach support the affordability of living in Brookline, but it would also help mitigate climate change by reducing emissions.</p>
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
