const Cart = require('../models/Cart');
const Item = require('../models/Item');
const CartItem = require('../models/Cart-Item');
const User = require('../models/User');



//--------------------------------------------------- Gets User's Cart ------------------------------------------------------
exports.getCartPage = (req, res, next) => {
    Cart.findAll({ 
      where: { userId: req.user._id }
    })
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        if(err) return res.status(400).send('ERROR', err)
    })
};



// ------------------------------------------------------ Get Cart Items from Cart ---------------------------------------------
exports.getItemsFromCart = async (req, res, next) => {
    try {
        await Cart.findAll({
            where: {id: req.params.id},
            // Make sure to include the products
            include: [{
            model: Item,
            as: 'items'
            }]
        })
        .then(data => {
            res.json(data)
        })
    } catch (err) {
        res.send(err)
    }
};



//-------------------------------------------------- Create User Cart -------------------------------
exports.postCart = async (req, res) => {
    console.log('REQ', req.user)
    const newCart = new Cart({
        total: req.body.total,
        userId: req.user._id
    })
    try {
        const savedCart = await newCart.save()
        req.body.items.forEach((item) => {
        // Create a obj to create new CartItem
        const newCartItem = {
          cartId: savedCart.id,
          itemId: item.id,
          quantity: item.quantity
        }
        // Create and save a CartItem
        const savedProductOrder = CartItem.create(newCartItem); 
        })
        res.send({ savedCart });
    } catch (err) {
        console.log(err)
    }
};






