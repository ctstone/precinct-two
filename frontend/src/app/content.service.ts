import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  readonly http = inject(HttpClient);

  readonly fetch = (path: string) => this.http
    .get(path, { responseType: 'text' })
    .pipe(map((text) => text.split('\n').filter((line) => !!line)));
}
