'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Materiel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Materiel.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: DataTypes.STRING,
    nombre: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Materiel',
  });
  return Materiel;
};