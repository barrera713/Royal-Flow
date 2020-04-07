require('dotenv').config()
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.HEROKU_POSTGRESQL_OLIVE_URL, {
  dialect: 'postgres'
})




module.exports = db;
