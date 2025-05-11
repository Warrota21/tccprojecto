// backend/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('User', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING
});

module.exports = User;
