const Sequelize = require('sequelize');
const db = require('../config/database');


const Cart = db.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    total: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
})


module.exports = Cart;