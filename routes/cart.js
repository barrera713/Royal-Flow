const express = require('express');
const router = express.Router();
const carts_controller = require('../controllers/carts_controller');


// ---------------------- Create Cart --------------------
router.post('/new', carts_controller.postCart);

//------------------------ Get User's Cart -----------------
router.get('/user/:id', carts_controller.getCartPage);

//------------------------ Get Item from Cart ---------------
router.get('/user/items/:id', carts_controller.getItemsFromCart);


module.exports = router;