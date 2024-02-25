const { Sequelize } = require('sequelize');

module.exports = new Sequelize('codegigs', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
  });