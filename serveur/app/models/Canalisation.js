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
    debutLatitude: DataTypes.FLOAT,
    debutLongitude: DataTypes.INTEGER,
    finLatitude: DataTypes.FLOAT,
    finLongitude: DataTypes.FLOAT,
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'Canalisation',
  });
  return Canalisation;
};