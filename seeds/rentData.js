const sequelize = require('../config/connection');
const { Rent } = require('../models');

const rentdata = [
  {
    id: 1,
    username: 'auzz24',
    title: 'Biology (Hardcover)',
    author: 'Neil A. Campbell',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387710538l/145806._SX50_.jpg',
    available: false, 
    pricePerWeek: 5
  },
  {
    id:2,
    username: 'Ronboi',
    title: 'https://www.goodreads.com/book/show/108986.Introduction_to_Algorithms',
    author: 'Thomas H. Cormen',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387741681l/108986._SX50_.jpg',
    available: false, 
    pricePerWeek: 4
  },
  {
    id: 3,
    username: 'ijj5565',
    title: 'Artificial Intelligence: A Modern Approach (Hardcover)"',
    author: 'Stuart Russell',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385600294l/27543._SX50_.jpg',
    available: true , 
    pricePerWeek: 5
  },
  {
    id: 4,
    username: 'msindependent',
    title: 'Introduction to Electrodynamics (Hardcover)',
    author: 'David J. Griffiths',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347933077l/145292._SX50_.jpg',
    available: true, 
    pricePerWeek: 7
  },
  {
    id: 5,
    username: 'djill33',
    title: 'Fundamentals of Physics (Hardcover)',
    author: 'David Halliday',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388795532l/202485._SX50_.jpg',
    available: false, 
    pricePerWeek: 4
  },
  {
    id: 6,
    username: 'jmr3525',
    title: 'The Feynman Lectures on Physics (Hardcover)"',
    author: 'Richard P. Feynman',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433168047l/5546._SX50_.jpg',
    available: true , 
    pricePerWeek: 7
  },
  {
    id: 7,
    username: 'megan6',
    title: 'Calculus [With CDROM] (Hardcover)',
    author: 'James Stewart',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170573179l/61297._SX50_.jpg',
    available: true , 
    pricePerWeek: 6
  }
];

const seedRent = () => Rent.bulkCreate(rentdata);

module.exports = seedRent;