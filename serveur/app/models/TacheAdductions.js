'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class TacheAdductions extends Model {
    static associate(models) {
    }
  }
  TacheAdductions.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_utilisateur: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    etat: DataTypes.BOOLEAN
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'TacheAdductions',
  });
  return TacheAdductions;
};