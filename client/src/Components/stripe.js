import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeBtn = (props) => {
    const publishableKey = process.env.PUB_KEY;

    const onToken = (token) => {
        const body = {
            amount: props.total,
            token
        }; 
        axios.post("http://localhost:5000/stripe/checkout", body)
        .then(res => {
            console.log('[Response]', res)
        })
        .catch(err => {
            console.log('[ERROR]', err)
        });
    };
    return (
        <StripeCheckout 
        label="Checkout"
        name="Royal Flow"
        description="Cart total"
        panelLabel="Confirm" 
        amount={props.total * 100} 
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default stripeBtn;

