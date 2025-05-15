// backend/config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestaotcc', 'postgres', '0713', {
  host: 'localhost',
  dialect: 'postgres',
});
 
module.exports = sequelize;
