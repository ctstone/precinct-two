import { Component, inject } from '@angular/core';
import { ContentService } from './content.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'p2-news',
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1 class="my-4">News</h1>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold;">
            Extra! Extra! Read all about it!
          </h4>
          <ul>
            @for (article of news$ | async; track article.title) {
              <li class="my-2">
                <a [href]="article.link">{{ article.title }}</a>
              </li>
            }
          </ul>
        </div>
    </div>
  `,
  styles: ``
})
export class NewsComponent {
  readonly content = inject(ContentService);

  readonly news$ = this.content.fetch('news.txt')
    .pipe(
      map((articles) => articles.map((article) => {
        const articleParts = article.split('\n');
        const title = articleParts[0];
        const link = articleParts[1];
        return { title, link };
      })),
    )
    ;
}
