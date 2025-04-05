import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from './content.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'p2-issues-info',
  imports: [CommonModule, TitleCasePipe],
  template: `
    <div class="card my-3 p-2">
      <div class="card-body">
        <h4 class="card-title" style="font-weight: bold;">{{(title$ | async) | titlecase }}</h4>
        @for (paragraph of text$ | async; track paragraph) {
          <p class="card-text" [innerHTML]="paragraph"></p>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class IssuesInfoComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly content = inject(ContentService);

  readonly title$ = this.route.paramMap.pipe(
    map((params) => params.get('issue')?.replace(/-/g, ' ')));

  readonly text$ = this.route.paramMap.pipe(
    map((params) => params.get('issue')),
    switchMap((issue) => this.content.fetch(`issues/${issue}/details.txt`)));
}
