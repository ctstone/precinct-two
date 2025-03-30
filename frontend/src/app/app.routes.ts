import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { CandidatesComponent } from './candidates.component';
import { IssuesComponent } from './issues.component';
import { EndorsementsComponent } from './endorsements.component';
import { VotingComponent } from './voting.component';
import { DonateComponent } from './donate.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: MainComponent },
    { path: 'candidates', component: CandidatesComponent },
    { path: 'challenges-ahead', component: IssuesComponent },
    { path: 'endorsements', component: EndorsementsComponent },
    { path: 'voting', component: VotingComponent },
    { path: 'donate', component: DonateComponent },
];
