/**
 * Main backend API and entry point for express.
 */
const express = require('express');
const SERVER_CONFIGS = require('./constants/server');
const configureServer = require('./server');
const configureRoutes = require('./routes');

/**
 * 1. Construct an express application.
 */
const app = express();

/**
 * 2. Configure server application and routes.
 */
configureServer(app);
configureRoutes(app);

/**
 * 3. Let the server begin listening to requests
 *      on the configured port.
 */
app.listen(SERVER_CONFIGS.PORT, error => {
    if (error) throw error;
    console.log('Server running on port: ', SERVER_CONFIGS.PORT);
});
