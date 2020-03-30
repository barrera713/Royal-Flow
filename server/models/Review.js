const Sequelize = require('sequelize');
const db = require('../config/database');


const Review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
});

module.exports = Review;