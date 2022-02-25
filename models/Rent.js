const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our RENT model
class Rent extends Model {}

// define table columns and configuration
Rent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rent'
  }
);

module.exports = Rent;