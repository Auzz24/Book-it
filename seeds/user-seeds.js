const sequelize = require('../config/connection');
const { User, Rent } = require('../models');

const userdata = [
  {
    username: 'auzz24',
    email: 'auzz24@cbc.ca',
    password: 'password123'
  },
  {
    username: 'Ronboi',
    email: 'ron@sogou.com',
    password: 'password123'
  },
  {
    username: 'ijj5565',
    email: 'jman@last.fm',
    password: 'password123'
  },
  {
    username: 'msindependent',
    email: 'missey3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djill33',
    email: 'don@weather.com',
    password: 'password123'
  },
  {
    username: 'jmr3525',
    email: 'jmr@imdb.com',
    password: 'password123'
  },
  {
    username: 'megan6',
    email: 'megan@feedburner.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;