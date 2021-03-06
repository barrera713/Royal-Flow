const express = require('express');
const router = express.Router();
const carts_controller = require('../controllers/carts_controller');

// ---------------------- Create Cart --------------------
router.post('/new', carts_controller.postCart);

//------------------------ Get User's Cart -----------------
router.get('/orders', carts_controller.getCartPage);

//------------------------ Get Item from Cart ---------------
router.get('/order/items/:id', carts_controller.getItemsFromCart);


module.exports = router;