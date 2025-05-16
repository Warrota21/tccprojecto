// backend/models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const User = sequelize.define('Usuario', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  senha: { type: DataTypes.STRING, allowNull: false },
  tipoUsuario: { type: DataTypes.STRING, allowNull: false }, 
});

module.exports = User;
