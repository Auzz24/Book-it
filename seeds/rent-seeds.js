const sequelize = require('../config/connection');
const { Rent } = require('../models');

const rentdata = [
  {
    username: 'auzz24'
  },
  {
    username: 'Ronboi'
  },
  {
    username: 'ijj5565'
  },
  {
    username: 'msindependent'
  },
  {
    username: 'djill33'
  },
  {
    username: 'jmr3525'
  },
  {
    username: 'megan6'
  }
];

const seedRent = () => Rent.bulkCreate(rentdata);

module.exports = seedRent;