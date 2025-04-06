import { Component, computed, inject, signal } from '@angular/core';
import { StripeService } from './stripe.service';
import { StripeElements } from '@stripe/stripe-js';

@Component({
  selector: 'p2-donate',
  imports: [],
  template: `
    <div class="container">
      <div class="row my-3">
        <div class="card p-2 col-md-6">
          <div class="card-body">
            <h4 class="card-title" style="font-weight: bold;">
              Support Your 2025 Precinct 2 Slate!
            </h4>
            <p class="card-text">
              We are your 2025 Precinct 2 Representative Slate, running for the five open Town Meeting Member seats. Town Meeting is made up of 255 elected members from 17 precincts, plus the Select Board, Town Moderator, Town Clerk, and our state representatives and senators who live right here in Brookline.
            </p>
            <p class="card-text">
              This election is mission-critical—Brookline’s financial future depends on the choices we make today. Together, we can build a responsible, inclusive, and thriving Brookline for all.
            </p>
            <p class="card-text">
              <b>Your support can make a real difference!</b> By donating today, you’re helping us work toward a future where everyone in Brookline has the resources and opportunities to thrive. Every contribution–no matter how small–helps us get closer to this goal.
            </p>
            <p class="card-text">
              Join us in creating a brighter future for Brookline. <i>Together, we will work to build an active, dynamic, and sustainable Brookline, where thriving businesses and homes for all incomes are seamlessly integrated with the natural environment!</i>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="donation-amount-list justify-content-between">
            @for (amount of amounts; track amount) {
              <button class="rounded-2 donation-amount flex-grow-1" [disabled]="!paymentReady() || successMessage()" [class.active]="selectedAmount() == amount" (click)="updateAmount(amount)">\${{amount / 100}}</button>
            }
          </div>
          @if (errorMessage(); as errorMessage) {
            <p class="alert alert-danger" role="alert">{{errorMessage}}</p>
          }

          <!-- @if (successMessage(); as successMessage) {
            <p class="alert alert-success" role="alert">{{successMessage}}</p>
          }
          @else {
            <div id="payment"></div>
            <div>
              <button class="btn btn-primary mt-3" [disabled]="!paymentReady()" (click)="donate()">Donate</button>
            </div>
          } -->

        </div>
      </div>
    </div>
  `,
  styles: `
    .donation-amount-list {
      display: flex;
      margin-bottom: 1rem;
    }
    .donation-amount {
      background-color: #f8f9fa;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      cursor: pointer;
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
      transition: background-color 0.3s, border-color 0.3s;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        background-color: #e2e6ea;
        border-color: #adb5bd;
      }

      &.active {
        background-color: var(--bs-success);
        border-color: var(--bs-success);
      }
    }
  `
})
export class DonateComponent {
  readonly stripe = inject(StripeService);

  readonly amounts = [100, 500, 1000, 2000];

  private readonly _amount = signal<number | null>(null);

  readonly selectedAmount = computed(() => this._amount());

  readonly paymentReady = computed(() => !!this.elements());

  private readonly elements = signal<StripeElements | null>(null);

  readonly errorMessage = signal<string | null>(null);

  readonly successMessage = signal<string | null>(null);

  constructor() {
    this.stripe.value
      .then((stripe) => {
        // stripe.initCheckout({
        // });
        const elements = stripe.elements({
          mode: 'payment',
          currency: 'usd',
          amount: 100,
          paymentMethodTypes: [ 'card' ],
        });
        elements.create('')
        // const payment = elements.create('payment');
        // payment.mount('#payment');
        // this.elements.set(elements);
        // const card = elements.getElement('card');
        // payment.on('ready', (x) => {
        // });
      })
      .catch(console.error);
  }

  updateAmount(amount: number) {
    // const elements = this.elements();
    // if (elements) {
    //   this._amount.set(amount);
    //   elements.update( { amount } );
    // }

    this.stripe.createSession
  }

  donate() {
    // const elements = this.elements();
    // this.errorMessage.set(null);
    // if (elements) {
    //   elements.submit().then((result) => {
    //     if (result.error) {
    //       this.errorMessage.set(result.error.message ?? 'unknown error');
    //     } else {
    //       this.successMessage.set('Thank you for your donation!');
    //     }
    //   });
    // }
  }
}
