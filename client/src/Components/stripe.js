import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { checkoutCart } from '../Actions/ActiveCart';



const Payment = (props) => {

    const makePayment = (token) => {
        // const body = { token }
        const URL = 'http://localhost:5000';
        return axios({
            method: 'post',
            url: `${URL}/stripe/payment`,
            headers: {"Content-Type": "application/json"},
            data: {
                total: props.total,
                email: token.email,
                token
            }
        })
        .then(res => {
            console.log('SUCCESS')
        })
        .then(createOrder => {
            props.checkoutCart(props.total, props.items)
        })
        .catch(err => {
            console.log('ERROR', err)
        })
    }

    return(
        <StripeCheckout 
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment} 
        name="Royal Flow" 
        amount={props.total * 100}>
        <button className="btn btn-warning checkout">Checkout</button>
        </StripeCheckout>
    )
}

export default connect(null, { checkoutCart })(Payment);