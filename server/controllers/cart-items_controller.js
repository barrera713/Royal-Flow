const CartItem = require('../models/Cart-Item');


//---------------------------------------------------- Create Cart Item ----------------------------------------------------------
exports.postAddCartItem = async (req, res, next) => {
    const newCartItem = new CartItem({
        quantity: req.body.quantity,
        cartId: req.body.cartId,
        itemId: req.body.itemId
    })
    try {
        const savedCartItem = await newCartItem.save();
        res.send({ savedCartItem });
    } catch (err) {
        res.status(400).send('ERROR', err)
    }
};


