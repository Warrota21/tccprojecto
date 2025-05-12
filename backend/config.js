// backend/config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestaotcc', 'postgres', 'belilo01', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
