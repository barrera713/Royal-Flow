import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

export default class StripePayment extends React.Component {
    onToken = async (token) => {
        try {
            const response = await axios.post('http://localhost:5000/stripe/checkout', token,
            {headers: {'Accept': 'application/json'}})
            console.log('response', response)
        } catch (err) {
            console.log('[ERROR]', err)
        }
    }


    render() {
        return(<StripeCheckout 
            token={this.onToken}
            setPublishableKey={process.env.PUB_KEY}
        />)
    }
}

