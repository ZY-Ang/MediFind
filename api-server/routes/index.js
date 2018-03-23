const paymentAPI = require('./payment');

/**
 * Dummy test route. Call GET from authorized CORS to test out.
 * TODO: Remove this test function once you get how to use API calls with {@code app}
 */
const test = (app) => {
    app.get('/testy', (req, res) => {
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
