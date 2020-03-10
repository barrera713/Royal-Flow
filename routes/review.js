const express = require('express');
const router = express.Router();
const review_controller = require('../controllers/review_controller');


router.post('/new', review_controller.postReview);


module.exports = router;