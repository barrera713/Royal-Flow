const Cart = require('../models/Cart');
const Item = require('../models/Item');
const CartItem = require('../models/Cart-Item');
const User = require('../models/User');



//-------------------------------------------------- Create User Cart -------------------------------
exports.postAddCart = async (req, res, next) => {
    const newCart = new Cart({
        userId: req.body.userId
    })
    try {
        const savedCart = await newCart.save();
        res.send({ savedCart });
    } catch (err) {
        res.status(400).send('ERROR', err)
    }
};






//--------------------------------------------------- Gets User's Cart ------------------------------------------------------
exports.getUserCart = (req, res, next) => {
    User.findAll({ include: [{ 
      model: Cart, 
      where: { id: req.params.id } }]
    })
    .then(carts => {
        res.json(carts)
    })
    .catch(err => {
        if(err) return res.status(400).send('ERROR', err)
    })
};



// ------------------------------------------------------ Get Cart Items from Cart ---------------------------------------------
exports.getItemsFromCart = (req, res, next) => {
    Cart.findAll({ include: [{
        model: Item,
        where: { id: req.params.id }}]
    })
    .then(cartItems => {
        res.json(cartItems)
    })
    .catch(err => {
        if(err) return res.status(400).send('ERROR', err)
    })
};
