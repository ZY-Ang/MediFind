/**
 * @code {STRIPE_SECRET_KEY} is the dynamic
 *      API key to be generated depending on
 *      whether the application is being run in
 *      development or production mode.
 * @type {string}
 */
const configureStripe = require('stripe');

const STRIPE_PRIVATE_LIVE_KEY = 'sk_live_KEY_HERE';
const STRIPE_PRIVATE_TEST_KEY =  'sk_test_ZlSflprBi5jclp52PshMcz4r';

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? STRIPE_PRIVATE_LIVE_KEY
    : STRIPE_PRIVATE_TEST_KEY;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
