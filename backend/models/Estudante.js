const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Usuario = require('./User');

const Estudante = sequelize.define('Estudante', {
  numeroEstudante: DataTypes.STRING,
  classe: DataTypes.STRING,
});

// Relacao 1:1 com Usuario
Estudante.belongsTo(Usuario, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
Usuario.hasOne(Estudante, { foreignKey: 'usuarioId' });

module.exports = Estudante;
