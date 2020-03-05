const Cart = require('../models/Cart');
const Item = require('../models/Item');
const CartItem = require('../models/Cart-Item');
const User = require('../models/User');


//--------------------------------------------------- Gets User's Cart ------------------------------------------------------
exports.getCartPage = (req, res, next) => {
    // User.getCarts().then(carts => {
    //     console.log('CARTS', carts)
    // })
    User.findAll({ 
      where: { id: req.params.id },
      include: [Cart] 
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



//-------------------------------------------------- Create User Cart -------------------------------
exports.postCart = async (req, res, next) => {
    const newCart = new Cart({
        total: req.body.total,
        userId: req.body.userId
    })
    try {
        const savedCart = await newCart.save()
        req.body.items.forEach((item) => {
    
        // Create a obj to create new CartItem
        const newCartItem = {
          orderId: savedCart.id,
          itemId: item.id
        }
    
        // Create and save a CartItem
        const savedProductOrder = CartItem.create(newCartItem); 
        })
        res.send({ savedCart });

    } catch (err) {
        console.log(err)
    }
}








