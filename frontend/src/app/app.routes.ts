import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { CandidatesComponent } from './candidates.component';
import { IssuesComponent } from './issues.component';
import { EndorsementsComponent } from './endorsements.component';
import { VotingComponent } from './voting.component';
import { DonateComponent } from './donate.component';
import { PrivacyComponent } from './privacy.component';
import { ThemeComponent } from './theme.component';
import { IssueComponent } from './issue.component';
import { IssuesInfoComponent } from './issues-info.component';
import { ThanksComponent } from './thanks/thanks.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: LandingComponent },
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
                path: '',
                pathMatch: 'prefix',
                component: IssueComponent,
                children: [
                    {
                        path: ':issue',
                        component: IssuesInfoComponent,
                    },
                ]
            }

        ]
    },
    // { path: 'endorsements', component: EndorsementsComponent },
    // { path: 'voting', component: VotingComponent },
    {
        path: 'donate', children: [
            {
                path: '',
                pathMatch: 'full',
                component: DonateComponent,
            },
            {
                path: 'thanks',
                component: ThanksComponent,
            }
        ]
    },
    // { path: 'privacy', component: PrivacyComponent },
    { path: 'theme', component: ThemeComponent },
];
