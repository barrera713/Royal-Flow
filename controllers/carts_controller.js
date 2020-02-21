const Cart = require('../models/Cart');
const User = require('../models/User');

//--------------------------------------------------- Gets User's Cart ------------------------------
exports.postAddCart = (req, res, next) => {
  User.findAll({ include: [{ model: Cart, where: { id: req.params.id }}]})
  .then(carts => {
      res.json(carts)
  })
  .catch(err => {
      if(err) return res.status(400).send('ERROR', err)
  })
};