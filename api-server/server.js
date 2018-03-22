/**
 * Utility {@function configureServer} used to
 * configure the express server.
 *
 * @type {middlewareWrapper}
 */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const CORS_WHITELIST = require('./constants/frontend');

/**
 * CORS Header Options to be passed to
 * {@code cors(...)} to configure CORS.
 */
const corsOptions = {
    origin: (origin, callback) =>  (CORS_WHITELIST.indexOf(origin) !== -1)
            ? callback(null, true)
            : callback(new Error('This domain is not authorized to access the API.'))
};

/**
 * Utility function to configure the
 * server of the Express {@param app}.
 */
const configureServer = (app) => {
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use('/static', express.static('public'));
};

module.exports = configureServer;
