const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()
const stripe = require("stripe")(process.env.S_KEY);


router.post('/payment', async (req, res, next) => {
    const { total, token } = req.body;
    console.log('[AMOUNT]', total);
    console.log('[TOKEN]', token);

    const idempotencyKey = uuidv4();

    stripe.customers.create({
        source: token.id,
        email: token.email
    })
    .then(customer => {
        return stripe.charges.create({
            amount: total,
            currency: 'usd',
            customer: customer.id,
        }, {
            idempotencyKey
        })
    })
    .then(charge => {
        res.status(200).send({'Success': charge})
    })
    .catch(err => {
        console.log(err)
    })
});

module.exports = router;