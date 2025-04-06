import { readFileSync } from 'node:fs'
import { join } from 'node:path';
import { Stripe } from 'stripe';
import express from 'express';
import bodyParser from 'body-parser';

// https://docs.stripe.com/checkout/custom/quickstart

const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const staticDir = join(__dirname, '..', 'static', 'browser');
const stripe = new Stripe(process.env.Stripe_Secret_Key, {
  apiVersion: '2025-03-31.basil',
});
const donationPriceId = 'price_1RAwKVEEY4pxk8zPuQm4jpcH';
const productId = 'prod_S56XNRMx7f2Qz0';

function defaultContent(filePath, contentType) {
  const content = readFileSync(filePath, 'utf-8');
  return (_, res) => res.set('content-type', contentType).send(content)
}

function getStripePublishableKey(clientKey) {
  return (_, res) => res.json({ key: clientKey });
}

function createCheckoutSession() {
  return async (req, res) => {
    const amount = parseInt(req.body.amount);
    const origin = req.body.origin;

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    try {
      const session = await stripe.checkout.sessions.create({
        ui_mode: "custom",
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product: productId,
              unit_amount: amount,
            },
          },
        ],
        mode: "payment",
        return_url: `${origin}/thanks?session_id={CHECKOUT_SESSION_ID}`,
        automatic_tax: {enabled: true},
      });
      res.send({ clientSecret: session.client_secret });
    } catch (error) {
      console.error('Error creating checkout session:', error);
      res.status(500).json({ error: 'Unexpected server error' });
    }
  };
}

const app = express();
app
  .get('/api/stripe/publishable-key', getStripePublishableKey(process.env.Stripe_Publishable_Key))
  .post('/api/stripe/session', bodyParser.json(), createCheckoutSession())
  .use(
    express.static(staticDir, { fallthrough: true }),
    defaultContent(join(staticDir, 'index.html'), 'text/html'))
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });