'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Projets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }

  Projets.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    region: DataTypes.STRING,
    district: DataTypes.STRING,
    commune: DataTypes.STRING,
    fokontany: DataTypes.STRING,
    localite: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    nb_beneficiaire: DataTypes.FLOAT,
    etat_ouvrage: DataTypes.BOOLEAN,
    id_utilisateur: DataTypes.INTEGER,
    id_point_eau: DataTypes.INTEGER,
    id_infra_eau: DataTypes.INTEGER,
    id_role: DataTypes.INTEGER
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Projets',
  });
  return Projets;
};