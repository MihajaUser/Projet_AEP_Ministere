//update
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Projets extends Model {
    static associate(models) {
    }
  }
  Projets.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_utilisateur: DataTypes.INTEGER,
    region: DataTypes.STRING,
    district: DataTypes.STRING,
    commune: DataTypes.STRING,
    fokontany: DataTypes.STRING,
    localite: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    nb_beneficiaire: DataTypes.FLOAT,
    point_eau: DataTypes.STRING,
    infra_eau: DataTypes.STRING,
    etat_ouvrage: DataTypes.STRING,
    utilisation: DataTypes.STRING
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Projets',
  });
  return Projets;
};