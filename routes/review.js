const express = require('express');
const router = express.Router();
const review_controller = require('../controllers/review_controller');


router.post('/new', review_controller.postReview);
router.get('/all/:id', review_controller.getReviews);


module.exports = router;