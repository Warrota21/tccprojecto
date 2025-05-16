const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Usuario = require('./User');

const Orientador = sequelize.define('Orientador', {
  disciplina: DataTypes.STRING,
  areaFormacao: DataTypes.STRING,
  interno: DataTypes.BOOLEAN,
});

Orientador.belongsTo(Usuario, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
Usuario.hasOne(Orientador, { foreignKey: 'usuarioId' });

module.exports = Orientador;
