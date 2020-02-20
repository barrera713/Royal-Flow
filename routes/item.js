const express = require('express');
const router = express.Router();
const items_controller = require('../controllers/items_controller');


router.post('/add-item', items_controller.postAddItem);

router.get('/all-items', items_controller.getAllItems);




module.exports = router;