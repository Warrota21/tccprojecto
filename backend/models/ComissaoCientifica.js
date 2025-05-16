const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Usuario = require('./User');

const ComissaoCientifica = sequelize.define('ComissaoCientifica', {
  curso: DataTypes.STRING,
  interno: DataTypes.BOOLEAN,
});

ComissaoCientifica.belongsTo(Usuario, { foreignKey: 'usuarioId', onDelete: 'CASCADE' });
Usuario.hasOne(ComissaoCientifica, { foreignKey: 'usuarioId' });

module.exports = ComissaoCientifica;
