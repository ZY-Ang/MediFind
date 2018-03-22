import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

/**
 * Currency to be sent in.
 * @type {string}
 */
const CURRENCY = 'USD';

/**
 * Converts {@param amount} in US dollars to US cents
 */
const getCentsFromUSD = (amount) => amount * 100;

/**
 * Callback function for a successful payment.
 * @param data - returned value from
 *      {@code axios.post} promise
 */
const onPaymentSuccess = (data) => {
    alert('Payment Successful');
};

/**
 * Callback function for a erroneous payment.
 * @param data - returned value from
 *      {@code axios.post} promise
 */
const onPaymentError = (data) => {
    alert('Payment Error');
};

/**
 * @returns a {@code function(token)} returning a token
 *      promise to be handled by the {@code StripeCheckout}
 *      component.
 * @param amount - in USD to be paid
 * @param description - of the payment
 *
 * NOTE: Asynchronous promise called is handled by the
 * {@code StripeCheckout} component.
 */
const onToken = (amount, description) => (token) => {
    return axios.post(PAYMENT_SERVER_URL, {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: getCentsFromUSD(amount)
    })
    .then(onPaymentSuccess)
    .catch(onPaymentError);
};

/**
 * A wrapper for the stripe-style checkout button that
 * @param name - the pop-in header title
 * @param description - the pop-in header subtitle
 * @param amount - amount in cents (IMPORTANT)
 *
 * For more information and more customization, visit:
 * {@link https://www.npmjs.com/package/react-stripe-checkout}
 */
const Checkout = ({name, description, amount}) => {
    return (
        <StripeCheckout
            name={name}
            description={description}
            amount={getCentsFromUSD(amount)}
            token={onToken(amount, description)}
            currency={CURRENCY}
            stripeKey={STRIPE_PUBLISHABLE}
        />
    );
};

export default Checkout;
