const paymentAPI = require('./payment');
const express = require('express');
const router = express.Router();


const test = (app) => {
    router.get('/testy', (req, res) => {
        res.send({name: 'I am a dummy json', description: 'dummy text here'});
    });
};

/**
 * Configures the routes fo the
 * express {@param app}.
 */
const configureRoutes = (app) => {
    test(app);
    paymentAPI(app);
};

module.exports = configureRoutes;
