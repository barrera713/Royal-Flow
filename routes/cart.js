const express = require('express');
const router = express.Router();
const carts_controller = require('../controllers/carts_controller');


// ---------------------- Create Cart --------------------
router.post('/new', carts_controller.postAddCart);

//------------------------ Get User's Cart -----------------
router.get('/:id', carts_controller.getUserCart);

//------------------------ Get Item from Cart ---------------
router.get('/items/:id', carts_controller.getItemsFromCart);


module.exports = router;