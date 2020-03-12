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

exports.deleteReview = async (req, res, next) => {
    try {
        Review.destroy({
            where: {id: req.params.id}
        })
        .then(data => {
            res.json(data)
        })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}