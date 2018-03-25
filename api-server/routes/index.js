const SerialPort = require('serialport');
const port = new SerialPort('COM3', {
    baudRate: 9600
});

/**
 * Dummy test route. Call GET from authorized CORS to test out.
 * TODO: Remove this test function once you get how to use API calls with {@code app}
 */
const test = (app) => {
    app.post('/', (req, res) => {
        port.write(req.body.value, (err) => {
            if (err) {
                res.send({value: err.message});
            } else {
                const successMessage = "We found: " + req.body.medicine + " in tray " + req.body.value;
                res.send({value: successMessage});
            }
        });
    });
};

/**
 * Configures the routes fo the
 * express {@param app}.
 */
const configureRoutes = (app) => {
    test(app);
};

module.exports = configureRoutes;
