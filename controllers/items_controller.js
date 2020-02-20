const Item = require('../models/Item');



//--------------------------------------------- Add Item -----------------------------------------
exports.postAddItem = async (req, res, next) => {
    const newItem = new Item({
        item_type: req.body.item_type,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description
    })
    try {
        const savedItem = await newItem.save();
        res.send({ savedItem });
    } catch (err) {
        res.status(400).send(err)
    }
};



//--------------------------------------------- Get all items ------------------------------------
exports.getAllItems = async (req, res, next) => {
    Item.findAll()
    .then(items => {
        console.log(items)
        res.sendStatus(200);
    })
    .catch(err => {
        console.log(error)
    })
};