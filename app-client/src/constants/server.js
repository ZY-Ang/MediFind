/**
 * @code {PAYMENT_SERVER_URL} is the dynamic
 *      API server URL to be generated depending
 *      on whether the application is being run
 *      in development or production mode.
 * @type {string}
 */

const SERVER_API_LIVE_URL = 'https://api.medifind.com';
const SERVER_API_TEST_URL = 'http://localhost:8080';

const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
    ? SERVER_API_LIVE_URL
    : SERVER_API_TEST_URL;

export default PAYMENT_SERVER_URL;
