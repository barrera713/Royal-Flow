const express = require('express');
const router = express.Router();
const stripe = require('stripe');


router.post('/checkout', async (req, res, next) => {
    let error;
    let status;
    console.log(req)
    try {
        const { product, token } = req.body;
        const customer = await 
        stripe.customer.create({
            email: token.email,
            source: token.id
        });
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;