const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our RENT model
class Rent extends Model {}

// define table columns and configuration
Rent.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
      id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      title:{
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      smallImageURL:{
        type: DataTypes.STRING,
        allowNull: false
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      pricePerWeek: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
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