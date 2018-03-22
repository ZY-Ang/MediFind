/**
 * @code {STRIPE_PUBLISHABLE} is the dynamic
 *      public API key to be generated depending
 *      on whether the application is being run
 *      in development or production mode.
 * @type {string}
 */

const STRIPE_PUBLIC_LIVE_KEY = 'pk_live_KEY_HERE';
const STRIPE_PUBLIC_TEST_KEY =  'pk_test_iGBTA7QYR8Tmx04axVfEDxqF';

const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
    ? STRIPE_PUBLIC_LIVE_KEY
    : STRIPE_PUBLIC_TEST_KEY;

export default STRIPE_PUBLISHABLE;
