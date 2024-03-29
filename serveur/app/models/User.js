//update
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  User.init({
    // id: { type: DataTypes.INTEGER, primaryKey: true },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
      unique: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'User',
  });
  return User;
};