import { Component, computed, inject, signal } from '@angular/core';
import { StripeElements } from '@stripe/stripe-js';
import { StripeService } from './stripe.service';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'p2-donate',
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <div class="container">
      <div class="row my-3 d-flex">
        <div class="card p-2 col-md-6">
          <div class="card-body">
            <h4 class="card-title" style="font-weight: bold;">
              Support Your 2025 Precinct 2 Slate!
            </h4>
            <p class="card-text">
              We are your 2025 Precinct 2 Representative Slate, running for the five open Town Meeting Member seats. Town Meeting is made up of 255 elected members from 17 precincts, plus the Select Board, Town Moderator, Town Clerk, and our state representatives and senators who live right here in Brookline.
            </p>
            <p class="card-text">
              <b>Your support can make a real difference!</b> By donating today, you’re helping us work toward a future where everyone in Brookline has the resources and opportunities to thrive. Every contribution–no matter how small–helps us get closer to this goal.
            </p>
            <p class="card-text">
              Brookline’s financial future depends on the choices we make today. Help us build a path to increasing housing affordability, raising revenue for our schools, and promoting fiscal responsibility, while also preserving the things we love most about our beloved community.
            </p>
            <p class="card-text">
              <b style="color:#c33c3a">Vote for the Precinct 2 Slate, by Voting for <i>ALL FIVE</i> Candidates, Tuesday, May 6th!</b>
            </p>
          </div>
        </div>
        <div class="col-md-6 donation">
          <div class="donation-amount-list justify-content-between">
            @for (amount of amounts; track amount) {
              <button class="rounded-2 donation-amount flex-grow-1" [class.active]="selectedAmount() == amount" (click)="updateAmount(amount)">\${{amount / 100}}</button>
            }
          </div>
          @if (!paymentReady()) {
            <p class="bg-body p-2 mt-1 rounded small text-muted">
              Choose an amount to donate to the Brookline Precinct 2 Slate.
            </p>
          }
          @if (errorMessage(); as errorMessage) {
            <p class="alert alert-danger" role="alert">{{errorMessage}}</p>
          }

          <form (ngSubmit)="donate()" [formGroup]="form">
            <div id="payment"></div>
            @if (paymentReady()) {
              <div class="bg-body p-3 rounded mt-2">
                <div class="form-floating">
                  <input type="text" class="form-control form-control-sm" id="name" formControlName="name" placeholder="Optional">
                  <label for="name" class="form-label text-muted small">Name (optional)</label>
                </div>
                <div class="form-floating mt-2">
                  <input type="email" class="form-control form-control-sm" id="email" formControlName="email" placeholder="Optional">
                  <label for="email" class="form-label text-muted small">Email (optional)</label>
                </div>
                <p class="small text-muted mt-1">
                  Per Massachusetts Office of Campaign and Political Finance, members of a representative town meeting are <a href="https://www.ocpf.us/PublicSearch/ViewDocument?id=3773" style="color:#5c84ae">exempted from the reporting and disclosure provisions of the campaign finance law</a>.
                </p>
              </div>
              <div>
                <button type="submit" class="btn btn-primary mt-2" [disabled]="loading()">Donate</button>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  `,
  styles: `
    .donation-amount-list {
      display: flex;
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
        background-color:rgb(164, 215, 177);
        border-color: #adb5bd;
      }

      &.active {
        background-color: var(--bs-success);
        border-color: var(--bs-success);
      }
    }
    .donation {
      order: 1
    }
    .card {
      order:2
    }
    @media (min-width: 768px) {
      .donation {
        order: 2;
        margin: 0;
      }
      .card {
        order: 1
      }
    }
  `
})
export class DonateComponent {
  private readonly _stripe = inject(StripeService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly _amount = signal<number | null>(null);
  private readonly _elements = signal<StripeElements | null>(null);

  readonly amounts = [100, 500, 1000, 2000];
  readonly selectedAmount = computed(() => this._amount());
  readonly paymentReady = computed(() => !!this._elements());
  readonly errorMessage = signal<string | null>(null);
  readonly loading = signal(false);
  readonly form = this.formBuilder.group({
    name: [''],
    email: [''],
  });

  async updateAmount(amount: number) {
    const stripe = await this._stripe.value;
    const clientKey = await this._stripe.createIntent(amount);
    let elements = this._elements();
    if (elements) {
      elements.update({ customerSessionClientSecret: clientKey });
    } else {
      elements = stripe.elements({
        clientSecret: clientKey,
      });
      elements.create('payment').mount('#payment');
      this._elements.set(elements);
    }
    this._amount.set(amount);
  }

  async donate() {
    const stripe = await this._stripe.value;
    const elements = this._elements();
    this.errorMessage.set(null);
    if (elements) {
      this.loading.set(true);
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/donate/thanks`,
          payment_method_data: {
            billing_details: {
              name: this.form.value.name || undefined,
              email: this.form.value.email || undefined,
            }
          }
        },
      });
      this.loading.set(false);
      if (error.message && (error.type === "card_error" || error.type === "validation_error")) {
        this.errorMessage.set(error.message);
      } else {
        this.errorMessage.set("An unexpected error occurred.");
      }
    }
  }
}

// https://www.ocpf.us/PublicSearch/ViewDocument?id=3773