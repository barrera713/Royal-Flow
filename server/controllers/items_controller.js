const Item = require('../models/Item');
const User = require('../models/User');
const Review = require('../models/Review');


//--------------------------------------------- Create Item -----------------------------------------
exports.postAddItem = async (req, res, next) => {
    const newItem = new Item({
        item_type: req.body.item_type,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity,
        description: req.body.description,
        size: req.body.size
    });
    try {
        const savedItem = await newItem.save();
        res.send({ savedItem });
    } catch (err) {
       if(err) res.status(400).send('[ERROR]', err)
    }
};



//--------------------------------------------- Get all items ------------------------------------
exports.getAllItems = async (req, res, next) => {
    try {
        const items = await Item.findAll({
            include: [{
                model: User,
                as: 'itemReviews'
            }]
        })
        res.status(200).json(items)
    } catch(err) {
        res.status(400).send(err)
    }
};

