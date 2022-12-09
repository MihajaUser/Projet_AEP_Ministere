'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Canalisation extends Model {
    static associate(models) {
    }
  }
  Canalisation.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_utilisateur: DataTypes.INTEGER,
    nom: DataTypes.STRING,
    construction: DataTypes.DOUBLE,
    region: DataTypes.STRING,
    district: DataTypes.STRING,
    commune: DataTypes.STRING,
    debutLocalite: DataTypes.STRING,
    finLocalite: DataTypes.STRING,
    debutLatitude: DataTypes.DOUBLE,
    debutLongitude: DataTypes.DOUBLE,
    finLatitude: DataTypes.DOUBLE,
    finLongitude: DataTypes.DOUBLE,
    etat_ouvrage: DataTypes.STRING
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Canalisation',
  });
  return Canalisation;
};