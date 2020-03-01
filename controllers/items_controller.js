const Item = require('../models/Item');



//--------------------------------------------- Create Item -----------------------------------------
exports.postAddItem = async (req, res, next) => {
    const newItem = new Item({
        item_type: req.body.item_type,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        quantity: req.body.quantity,
        description: req.body.description,
        sneakerSize: req.body.sneakerSize
    });
    try {
        const savedItem = await newItem.save();
        res.send({ savedItem });
    } catch (err) {
        res.status(400).send(err)
    }
};



//--------------------------------------------- Get all items ------------------------------------
exports.getAllItems = (req, res, next) => {
    Item.findAll()
    .then(items => {
        res.json(items)
    })
    .catch(err => {
        if(err) return res.status(400).send('ERROR', err)
    })
    
};