const express = require('express');
const router = express.Router();
const review_controller = require('../controllers/review_controller');
const verifyAuth = require('../verifyToken');


router.post('/new', verifyAuth, review_controller.postReview);
router.get('/all/:id', review_controller.getReviews);
router.delete('/delete/:id', verifyAuth, review_controller.deleteReview);


module.exports = router;