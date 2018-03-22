/**
 * Configuration settings for the express server.
 */
const path = require('path');

/**
 * The port used for the API server.
 * @type {number}
 */
const SERVER_PORT = 8080;

/**
 * The server configuration object.
 */
const SERVER_CONFIGS = {
    PRODUCTION: process.env.NODE_ENV === 'production',
    PORT: process.env.PORT || SERVER_PORT
};

module.exports = SERVER_CONFIGS;
