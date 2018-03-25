/**
 * URLs and domains used to configure
 * CORS and the express application.
 */

/**
 * URLs used on the development/staging area.
 * Add your own Development URLs if needed.
 */
const FRONTEND_DEVELOPMENT_URLS = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://172.27.223.83:8080',
    'http://127.0.0.1:8080',
    'http://172.16.1.248:3000',
    'http://172.16.1.248:8080',
    'http://172.16.1.248:3001',
    'http://172.16.1.248:3002',
    'http://172.16.1.248:3003'
];

/**
 * URLs used for production.
 * TODO: add conditional validation for domain access control.
 */
const FRONTEND_PRODUCTION_URLS = [
    'https://medifind.com',
    'https://app.medifind.com',
    'https://admin.medifind.com'
];

module.exports = process.env.NODE_ENV === 'production'
    ? FRONTEND_PRODUCTION_URLS
    : FRONTEND_DEVELOPMENT_URLS;
