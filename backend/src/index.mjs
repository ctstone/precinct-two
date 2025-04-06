import { readFileSync } from 'node:fs'
import { join } from 'node:path';
import { Stripe } from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';

// https://docs.stripe.com/payments/quickstart
// https://docs.stripe.com/testing

const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const staticDir = join(__dirname, '..', 'static', 'browser');
const stripe = new Stripe(process.env.CUSTOMCONNSTR_Stripe_Secret_Key, {
  apiVersion: '2025-03-31.basil',
});

const validAmounts = new Set([100, 500, 1000, 2000]);

function defaultContent(filePath, contentType) {
  const content = readFileSync(filePath, 'utf-8');
  return (_, res) => res.set('content-type', contentType).send(content)
}

function getStripePublishableKey(clientKey) {
  return (_, res) => res.json({ key: clientKey });
}

function createPaymentIntent() {
  return async (req, res) => {
    const amount = parseInt(req.body.amount, 10);
    if (!validAmounts.has(amount)) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: [
        'card',
        // 'apple_pay',
      ],
    });
    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  };
}

const app = express();
app
  .get('/api/stripe/client-key', getStripePublishableKey(process.env.CUSTOMCONNSTR_Stripe_Publishable_Key))
  .post('/api/stripe/create-intent', bodyParser.json(), createPaymentIntent())
  .use(
    express.static(staticDir, { fallthrough: true }),
    defaultContent(join(staticDir, 'index.html'), 'text/html'))
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });