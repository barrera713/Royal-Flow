const Item = require('../models/Item');
const User = require('../models/User');



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