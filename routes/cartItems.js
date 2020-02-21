const express = require('express');
const router = express.Router();
const cartItems_controller = require('../controllers/cart-items_controller');



router.post('/new', cartItems_controller.postAddCartItem);

module.exports = router;