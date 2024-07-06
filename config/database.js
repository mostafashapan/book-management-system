const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'filtertask',
  username: 'root',
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});


module.exports = sequelize;