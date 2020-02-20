const Sequelize = require('sequelize');
const db = require('../config/database');


const CartItem = db.define('cartItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantity: {
        type: Sequelize.INTEGER
    }
    
});

module.exports = CartItem;