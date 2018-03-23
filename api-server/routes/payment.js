const stripe = require('../config/stripe');

/**
 * Handles a post request's {@param res} from
 * the front end application or external endpoints
 * and converts it into a stripe charge to be
 * handled by the {@code paymentAPI}.
 */
const postStripeCharge = (res) => (stripeErr, stripeRes) => {
    if (stripeErr) {
        res.status(500).send({error: stripeErr});
    } else {
        res.status(200).send({success: stripeRes});
    }
};

/**
 * The payment API that handles the payment logic
 * of the express {@param app}.
 */
const paymentAPI = (app) => {
    // Initialize the payment API
    app.get('/stripePayment', (req, res) => {
        res.send({message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString()});
    });
    // Setup post listeners for Stripe
    app.post('/stripePayment', (req, res) => {
        stripe.charges.create(req.body, postStripeCharge(res));
    });
    return app;
};

module.exports = paymentAPI;
