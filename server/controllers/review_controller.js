const Item = require('../models/Item');
const User = require('../models/User');
const Review = require('../models/Review');



// ---------------------------------- Create Review ----------------------------
exports.postReview = async (req, res, next) => {
    const newReview = new Review({
        rating: req.body.rating,
        content: req.body.content,
        userId: req.user._id,
        itemId: req.body.itemId
    })
    try {
        const savedReview = await newReview.save();
        User.findAll({
            where: {id: req.user._id},
            attributes: ['username']
        })
        .then(data => {
            res.json([data[0], {review: savedReview }])
        })
    } catch (err) {
        if(err) res.send(err)
    }
}

exports.getReviews = async (req, res, next) => {
    try {
        Item.findAll({
            where: {id: req.params.id},
            include: [{
                model: User,
                as: 'itemReviews',
                attributes: ['username']
            }]
        })
        .then(data => {
            res.json([data[0], data[0].itemReviews])
        })
    } catch (err) {
        res.send(err)
    }
};

exports.deleteReview = (req, res, next) => {
    try {
        Review.findAll({
            where: { id: req.params.id }
        })
        .then(data => {
            console.log('DATA', data[0].dataValues.userId)
            if(data[0].dataValues.userId === req.user._id) {
                data[0].destroy();
                res.status(200).send('Review has been deleted.')
            }
            if(data[0].dataValues.userId !== req.user._id) {
                res.status(401).json({error: 'Unauthorized'})
            }
        })
    }
    catch (err) {
        console.log('ERROR:', err)
    }
}