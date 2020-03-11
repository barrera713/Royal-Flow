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
        res.send({savedReview});
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
                required: false
            }]
        })
        .then(data => {
            res.send(data)
        })
    } catch (err) {
        res.send(err)
    }
};