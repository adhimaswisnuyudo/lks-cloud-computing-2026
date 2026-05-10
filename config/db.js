const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_lks2026', 'root', 'rahasia123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
