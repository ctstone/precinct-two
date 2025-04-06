import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map, switchMap } from 'rxjs';
import { loadStripe } from '@stripe/stripe-js';

interface StripeKeyResponse {
  key: string;
}

interface CreateSessionResponse {
  clientSecret: string;
}

@Injectable({
  providedIn: 'root'
})
export class StripeService {
  private readonly http = inject(HttpClient);

  private readonly key$ = this.http.get<StripeKeyResponse>('/api/stripe/publishable-key')
    .pipe(map((response) => response.key));

  private readonly stripe$ = this.key$.pipe(
    switchMap((key) => loadStripe(key)));

  readonly value = lastValueFrom(this.stripe$).then((stripe) => {
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }
    return stripe;
  });

  async createSession(amount: number): Promise<string> {
    const origin = window.location.origin;
    const response = await lastValueFrom(this.http.post<CreateSessionResponse>('/api/stripe/session', {
      amount,
      origin,
    }));

    return response.clientSecret;
  }
}
