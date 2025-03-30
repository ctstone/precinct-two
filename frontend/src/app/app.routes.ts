import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CandidatesComponent } from './candidates.component';
import { IssuesComponent } from './issues.component';
import { EndorsementsComponent } from './endorsements.component';
import { VotingComponent } from './voting.component';
import { DonateComponent } from './donate.component';
import { IssuesClimateComponent } from './issues-climate.component';
import { IssuesEconomicComponent } from './issues-economic.component';
import { IssuesEducationComponent } from './issues-education.component';
import { IssuesFiscalComponent } from './issues-fiscal.component';
import { IssuesHousingComponent } from './issues-housing.component';
import { IssuesTransportationComponent } from './issues-transportation.component';
import { PrivacyComponent } from './privacy.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: 'candidates', component: CandidatesComponent },
    {
        path: 'challenges-ahead',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: IssuesComponent,
            },
            {
                path: 'climate',
                component: IssuesClimateComponent,
            },
            {
                path: 'economic-development',
                component: IssuesEconomicComponent,
            },
            {
                path: 'education',
                component: IssuesEducationComponent,
            },
            {
                path: 'fiscal-responsibility',
                component: IssuesFiscalComponent,
            },
            {
                path: 'housing',
                component: IssuesHousingComponent,
            },
            {
                path: 'transportation',
                component: IssuesTransportationComponent,
            }
        ]
    },
    { path: 'endorsements', component: EndorsementsComponent },
    { path: 'voting', component: VotingComponent },
    { path: 'donate', component: DonateComponent },
    { path: 'privacy', component: PrivacyComponent },
];
