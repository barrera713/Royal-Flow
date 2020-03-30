const Sequelize = require('sequelize');
const db = require('../config/database');


const Item = db.define('item', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    item_type: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    size: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Item;