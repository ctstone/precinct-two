import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'p2-open-letter',
  imports: [RouterModule],
  template: `
    <div class="container">
      <div class="card my-3 p-2 issue">
        <div class="card-body">
          <h4 class="card-title text-center" style="font-weight: bold;">
            An Open Letter to the Voters of Precinct 2 About the “Experience” of the Incumbent Slate
          </h4>
          <p class="card-text text-center">
            <i>
              In a recent <a href="https://www.facebook.com/groups/562671360550595/permalink/3087751231375916/">Facebook post</a>, our slate was honored to receive a heartfelt endorsement from a community member. In the comments, a member of the incumbent slate took the opportunity to promote their own campaign. We would like to openly and respectfully respond:
            </i>
          </p>
          <p class="card-text">
            Brookline is a town built on values — community, equity, education, and respect for every resident. As candidates for Town Meeting, we are proud to run a campaign rooted in those values.
          </p>
          <p class="card-text">
            Recently, some candidates for re-election have pointed to their “experience” as the primary reason to support them. We want to speak candidly to the voters of Precinct 2 about what that “experience” has truly meant for Brookline.
          </p>
          <p class="card-text">
            Over the past decade, Brookline has suffered yearly cuts to our public schools and other vital town services — cuts that have worsened significantly in recent years. Essential programs have been slashed or put at risk, including literacy support, world languages, Brookline Early Education Program (BEEP), Brookline Adult and Community Education (BACE), middle school electives, and critical services for students with disabilities.
          </p>
          <p class="card-text">
            <a href="https://www.brooklinema.gov/DocumentCenter/View/48355/FY2025-Financial-Plan-Print-Version---Web-Optimized-accessible?bidId=">
              <b>Brookline has a half a billion-dollar budget.</b>
            </a>
            <br>There is no reason for our schools and community services to be in the shape they’re in — except for a <b>failure of leadership</b>. 71% of Brookline’s revenue comes from real estate taxes. Yet under the incumbents’ so-called ‘experience,’ instead of embracing smart growth, we’ve seen
            <a href="https://brookline.news/town-meeting-votes-to-put-biggest-zoning-changes-on-ice/">stagnation</a>
            and
            <a href="https://brookline.news/town-officials-seek-greater-oversight-of-school-finances-amid-budget-crisis/">loss</a> — and a consistent pattern of <a href="https://brookline.news/district-leaders-propose-sweeping-cuts-to-address-8-million-school-budget-deficit/">choosing cuts</a> over <a href="https://www.brooklinema.gov/3716/Chestnut-Hill-Commercial-Area-Study">increasing revenue</a>.
          </p>
          <p class="card-text">
            Town Meeting incumbents have known since at least the <a href="https://www.brooklinema.gov/DocumentCenter/View/21168/February-5-Final-BFAC-Report">2020 Brookline Fiscal Advisory Committee’s final report</a> how to responsibly add new tax revenue to our bottom line: by allowing increased economic development on Brookline’s large sites and along our transit corridors. Yet despite ample resources and
            <a href="https://brookline.news/a-high-end-hotel-500-plus-units-of-housing-and-9-million-in-tax-revenue-developer-unveils-proposal-for-major-chestnut-hill-project/">clear opportunities</a>
             to strengthen our schools, public services, and local economy, they have repeatedly chosen “veto by delay” tactics — blocking meaningful progress and
             <a href="https://thelocallens.org/brookline-select-board-faces-school-budget-crisis-amid-privatization-concerns/">deepening the town’s financial instability</a>.
          </p>
          <p class="card-text">
            This is not the “experience” we need in Brookline.
          </p>
          <p class="card-text">
            This election is about more than resumes. It is about the future of Brookline — <b>who it includes, who it lifts up, and who it leaves behind</b>.
          </p>
          <p class="card-text">
            We believe Brookline deserves better.
            <br>We believe Brookline can be better.
          </p>
          <p class="card-text">
            <a routerLink="../candidates">Our Slate</a> is made up of parents, educators, civic volunteers, and community advocates who are living the realities of Brookline today. We are committed to affordable housing, strong and equitable public schools, environmental sustainability, fiscal responsibility, and racial equity — and we are ready to get to work.
          </p>
          <p class="card-text">
            We ask for your vote for a future we can all be proud of — one that grows opportunity and meaningful stability, not inequality and budget gaps.
          </p>
          <p class="card-text">
            <a routerLink="../challenges-ahead" class="btn btn-primary" style="background-color: inherit; border-color: var(--background-color)">
            Learn more about our platform
            </a>
          </p>
          <p class="card-text text-center">
            <b>Thank you for believing in Brookline’s future — and for voting to move our community forward. Thank you for your time, your thoughtfulness. We hope to earn your trust and your vote.</b>
            <br>
            <img src="img/open-letter/elise-signature.png">
            <img src="img/open-letter/meg-signature.png">
            <img src="img/open-letter/colleen-signature.png">
            <br>
            <img src="img/open-letter/lauren-signature.png">
            <img src="img/open-letter/esther-signature.png">
          </p>
        </div>
      </div>
    </div>
  `,
  styles: `
  img {
    padding: 10px;
    filter: none;
  }
  `
})
export class OpenLetterComponent {

}
