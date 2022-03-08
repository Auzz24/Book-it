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
        allowNull: true
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      pricePerWeek: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
  },
},
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rent'
  }
);

module.exports = Rent;