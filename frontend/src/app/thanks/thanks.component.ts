import { Component, inject, signal } from '@angular/core';
import { StripeService } from '../stripe.service';
import { PaymentIntent, StripeError } from '@stripe/stripe-js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'p2-thanks',
  imports: [RouterModule],
  template: `
    <div class="container my-3">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title" style="font-weight: bold;">
            @if (error()) {
              Sorry, something went wrong.
            }
            @if (intent(); as intent) {
              @if (intent.status === 'succeeded' || intent.status === 'processing') {
                Thank you for your donation.
              }
              @if (intent.status === 'requires_payment_method') {
                Payment issue.
              }
            }
          </h4>
          <p class="card-text">
            @if (error(); as error) {
              <p class="alert alert-danger" role="alert">{{error.message}}</p>
            }
            @if (intent(); as intent) {
              @if (intent.status === 'succeeded') {
                Your donation of <code>\${{intent.amount / 100}}</code> will be used to help offset our campaign expenses.
              }
              @else if (intent.status === 'processing') {
                Your donation of <code>\${{intent.amount / 100}}</code> is being processed.
              }
              @else if (intent.status === 'requires_payment_method') {
                <p class="alert alert-danger" role="alert">
                  Your payment was not successful, please try again.
                </p>
              }
            }
          </p>
          <p class="card-text">
            @if (!error() && !intent()) {
              <span class="small text-muted">Loading...</span>
            }
            @else {
              <a routerLink="/">Return home</a>
            }
          </p>
        </div>
      </div>
  </div>
  `,
  styles: ``
})
export class ThanksComponent {
  private readonly _stripe = inject(StripeService);

  readonly intent = signal<PaymentIntent | undefined>(undefined);
  readonly error = signal<StripeError | undefined>(undefined);

  constructor() {
    const clientSecret = new URLSearchParams(window.location.search)
      .get("payment_intent_client_secret");

    this._stripe.value.then(async (stripe) => {
      if (clientSecret) {
        const { paymentIntent, error } = await stripe.retrievePaymentIntent(clientSecret);
        this.error.set(error);
        this.intent.set(paymentIntent);
        console.log(paymentIntent);
      }
    });
  }
}
