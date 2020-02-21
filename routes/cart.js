const express = require('express');
const router = express.Router();
const carts_controller = require('../controllers/carts_controller');


router.get('/test/:id', carts_controller.postAddCart);

module.exports = router;