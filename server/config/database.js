require('dotenv').config()
const Sequelize = require('sequelize');

const db = new Sequelize(process.env.HEROKU_POSTGRESQL_OLIVE_URL, {
  dialect: 'postgres'
})

// const db = new Sequelize('royal', 'barrera', process.env.DB_PASSWORD, {
//   host: 'localhost',
//   dialect: 'postgres'
// });



module.exports = db;
